'use client';

import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      await login(email, password);
    } catch (err: any) {
      setError(err.message || 'Error al iniciar sesión');
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#111216] text-white" style={{ fontFamily: 'Inter, Arial, sans-serif' }}>
      <div className="w-full max-w-md mx-auto px-8 py-16 rounded-2xl bg-[#181A20] border border-[#23242a] shadow-lg">
        <h1 className="text-3xl font-bold mb-8 text-center">Iniciar Sesión</h1>
          {error && (
          <div className="mb-4 p-3 rounded bg-red-900/40 text-red-200 text-center">{error}</div>
          )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Correo Electrónico</label>
            <input
              type="email"
              id="email"
            required
              className="w-full px-4 py-2 border border-[#23242a] rounded-xl bg-[#111216] text-white placeholder-[#bdbdbd] focus:ring-2 focus:ring-white focus:border-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">Contraseña</label>
            <input
            type="password"
            id="password"
              required
              className="w-full px-4 py-2 border border-[#23242a] rounded-xl bg-[#111216] text-white placeholder-[#bdbdbd] focus:ring-2 focus:ring-white focus:border-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          </div>
          <button
            type="submit"
            className="w-full px-8 py-4 bg-white text-[#111216] font-semibold rounded-xl border border-white shadow-sm hover:bg-transparent hover:text-white hover:border-white transition-all duration-200"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </section>
  );
} 