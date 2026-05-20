import React, { useState } from 'react';

export default function Login({ onLoginSuccess, logoUrl }) {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin');
  const [error, setError] = useState('');
  const HARDCODED_USER = 'admin';
  const HARDCODED_PASS = 'admin';
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const inputUser = username.trim().toLowerCase();
    const inputPass = password.trim();

    if (!inputUser || !inputPass) {
      setError('Por favor, completa todos los campos.');
      return;
    }
    if (inputUser === HARDCODED_USER && inputPass === HARDCODED_PASS) {
      setError('');
      onLoginSuccess(username);
    } else {
      setError('Credenciales incorrectas (Usa: admin / admin)');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#3f444e] px-4 select-none">
            <div className="w-full max-w-sm flex flex-col items-center">
            <form onSubmit={handleSubmit} className="w-full mt-10 flex flex-col items-center">
          <div className="relative w-full">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="NOMBRE"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-transparent border border-gray-400 rounded-md py-3 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-white uppercase tracking-wider text-sm transition-none"
            />
          </div>
          <div className="relative w-full mt-4">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </span>
            <input
              type="password"
              placeholder="CONTRASEÑA"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent border border-gray-400 rounded-md py-3 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-white uppercase tracking-wider text-sm transition-none"
            />
          </div>
          <button
            type="submit"
            className="w-full mt-8 bg-white text-[#1e3a8a] font-bold py-3 px-4 rounded-md uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-none text-center text-sm"
          >
            INICIAR SESIÓN
          </button>
        </form>
        <button 
          type="button"
          className="mt-6 text-xs text-gray-300 hover:text-white cursor-pointer transition-none bg-transparent border-none"
        >
          Olvidaste la contraseña?
        </button>

      </div>
    </div>
  );
}
