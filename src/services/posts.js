export async function getPosts() {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error(`Error al obtener posts: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error en getPosts:', error);
    throw error;
  }
}


export async function createPost(postData) {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      body: JSON.stringify({
        title: postData.title,
        body: postData.body,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (!response.ok) {
      throw new Error(`Error al crear post: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error en createPost:', error);
    throw error;
  }
}

export async function updatePost(id, postData) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        id: id,
        title: postData.title,
        body: postData.body,
        userId: postData.userId || 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (!response.ok) {
      throw new Error(`Error al actualizar post: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error en updatePost:', error);
    throw error;
  }
}

export async function deletePost(id) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(`Error al eliminar post: ${response.status}`);
    }
    return true;
  } catch (error) {
    console.error('Error en deletePost:', error);
    throw error;
  }
}
