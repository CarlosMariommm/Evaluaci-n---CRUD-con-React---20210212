import React, { useState, useEffect } from 'react';
import Login from './screens/Login';
import Welcome from './screens/Welcome';
import Dashboard from './screens/Dashboard';
import PostModal from './components/PostModal';
import { getPosts, createPost, updatePost, deletePost } from './services/posts';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [currentScreen, setCurrentScreen] = useState('login');

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState(null);

  useEffect(() => {
    if (currentScreen === 'dashboard') {
      const fetchPosts = async () => {
        setIsLoading(true);
        try {
          const data = await getPosts();
          setPosts(data.slice(0, 9));
        } finally {
          setIsLoading(false);
        }
      };
      fetchPosts();
    }
  }, [currentScreen]);

  const handleLoginSuccess = (user) => {
    setIsAuthenticated(true);
    setUsername(user);
    setCurrentScreen('dashboard');
  };

  const handleContinue = () => {
    setCurrentScreen('dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername('');
    setPosts([]);
    setCurrentScreen('login');
  };

  const handleCreateClick = () => {
    setEditingPost(null);
    setIsModalOpen(true);
  };

  const handleEditClick = (post) => {
    setEditingPost(post);
    setIsModalOpen(true);
  };

  const handleDeleteClick = async (id) => {
    const confirmDelete = window.confirm('¿Estás seguro de que deseas eliminar este post?');
    if (!confirmDelete) return;

    try {
      if (id <= 100) {
        await deletePost(id);
      }
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
    } catch (error) {
      console.error('Error al eliminar:', error);
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
    }
  };

  const handleModalSubmit = async (formData) => {
    try {
      if (editingPost) {
        if (editingPost.id <= 100) {
          try {
            await updatePost(editingPost.id, formData);
          } catch (apiError) {
            console.warn('Fallo en la petición PUT a la API (usando fallback local):', apiError);
          }
        }

        setPosts((prevPosts) =>
          prevPosts.map((post) => (post.id === editingPost.id ? { ...post, ...formData } : post))
        );
      } else {
        try {
          await createPost(formData);
        } catch (apiError) {
          console.warn('Fallo en la petición POST a la API (usando fallback local):', apiError);
        }

        const simulatedPost = {
          title: formData.title,
          body: formData.body,
          id: Date.now(),
        };

        setPosts((prevPosts) => [simulatedPost, ...prevPosts]);
      }
    } catch (error) {
      console.error('Error general al guardar post:', error);
    } finally {
      setIsModalOpen(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {currentScreen === 'login' && (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}

      {currentScreen === 'welcome' && (
        <Welcome username={username} onContinue={handleContinue} />
      )}

      {currentScreen === 'dashboard' && (
        <Dashboard
          posts={posts}
          isLoading={isLoading}
          onLogout={handleLogout}
          onCreateClick={handleCreateClick}
          onEditClick={handleEditClick}
          onDeleteClick={handleDeleteClick}
        />
      )}

      <PostModal
        isOpen={isModalOpen}
        post={editingPost}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleModalSubmit}
      />
    </div>
  );
}

export default App;
