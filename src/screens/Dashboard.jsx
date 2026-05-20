import React from 'react';

export default function Dashboard({
  posts,
  onLogout,
  onCreateClick,
  onEditClick,
  onDeleteClick,
  isLoading,
}) {

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#e8ebf0] select-none text-gray-800">
      <aside className="w-full md:w-64 bg-white border-r border-gray-200 flex flex-col justify-between shrink-0 p-6 md:h-screen md:sticky md:top-0">
        <div>
          <div className="flex items-center gap-3 mb-10">
            <span className="font-extrabold text-lg text-black tracking-tight">AdminITR</span>
          </div>
          <nav className="space-y-1">
            <div className="flex items-center gap-3 px-4 py-3 bg-[#eef2f6] text-gray-900 rounded-lg font-bold text-sm">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              Usuarios
            </div>

          </nav>
        </div>
        <button
          onClick={onLogout}
          className="flex items-center gap-3 px-4 py-3 text-gray-700 font-bold text-sm cursor-pointer hover:bg-red-50 hover:text-red-600 rounded-lg w-full text-left transition-none mt-6"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Cerrar sesión
        </button>
      </aside>

      <main className="flex-1 p-6 md:p-12">
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-4xl font-extrabold text-black tracking-tight">Admin</h1>
          <button
            onClick={onCreateClick}
            className="bg-[#2a2b2f] text-white font-bold px-6 py-3 rounded-full shadow-md cursor-pointer hover:bg-black transition-none text-sm"
          >
            Nuevo usuario
          </button>
        </div>
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <p className="text-gray-500 font-bold text-lg">Cargando usuarios...</p>
          </div>
        ) : posts.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center shadow-sm">
            <p className="text-gray-400 font-medium">No hay usuarios disponibles.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between min-h-[180px] break-inside-avoid"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      <span className="w-2.5 h-2.5 bg-green-500 rounded-full shrink-0" />
                      <h3 className="font-extrabold text-black text-sm truncate leading-tight uppercase">
                        {post.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => onDeleteClick(post.id)}
                        className="text-gray-400 hover:text-red-500 cursor-pointer p-1 transition-none"
                        title="Eliminar post"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                      <button
                        onClick={() => onEditClick(post)}
                        className="text-gray-400 hover:text-blue-500 cursor-pointer p-1 transition-none"
                        title="Editar post"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-500 text-xs font-semibold leading-relaxed line-clamp-4">
                    {post.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
