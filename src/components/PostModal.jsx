import React, { useState, useEffect } from 'react';

export default function PostModal({ isOpen, onClose, onSubmit, post }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (post) {
      setTitle(post.title || '');
      setBody(post.body || '');
    } else {
      setTitle('');
      setBody('');
    }
    setError('');
  }, [post, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !body.trim()) {
      setError('Ambos campos son requeridos para continuar.');
      return;
    }
    setError('');
    onSubmit({ title, body });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 select-none">     
      <div className="bg-white rounded-3xl w-full max-w-lg p-8 shadow-2xl flex flex-col">
        <h2 className="text-2xl md:text-3xl font-extrabold text-black text-center mb-6">
          {post ? 'Editar usuario' : 'Crear un nuevo usuario'}
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
                    <div className="mb-4">
            <label className="block text-sm font-bold text-gray-800 mb-2">
              Titulo
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder=""
              className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:border-black transition-none text-black font-medium"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-bold text-gray-800 mb-2">
              Descripción
            </label>
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows="4"
              placeholder=""
              className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:border-black transition-none text-black font-medium resize-none"
            />
          </div>

          {error && (
            <p className="mb-4 text-red-500 text-xs font-semibold text-center">
              {error}
            </p>
          )}

          <div className="flex items-center justify-center gap-4 mt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 max-w-[140px] bg-white border border-gray-800 text-gray-800 font-bold py-3 px-4 rounded-full cursor-pointer hover:bg-gray-50 transition-none text-center text-sm"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex-1 max-w-[140px] bg-[#1f2024] text-white font-bold py-3 px-4 rounded-full cursor-pointer hover:bg-black transition-none text-center text-sm"
            >
              {post ? 'Guardar' : 'Crear usuario'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
