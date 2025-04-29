'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const router = useRouter();
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        router.push('/admin/dashboard');
      } else {
        const data = await response.json();
        setError(data.error || 'Error al iniciar sesión');
      }
    } catch (err) {
      setError('Error al conectar con el servidor');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#2c2a28] flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-[#fbf7f5]">Admin Dashboard</h1>
          <p className="text-[#eae5df]">Hécate Security Academy</p>
        </div>

        <form 
          onSubmit={handleSubmit}
          className="bg-[#2c2a28] border border-[#eae5df]/10 rounded-lg p-6 space-y-6"
        >
          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-3 rounded">
              {error}
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#fbf7f5] mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={credentials.email}
              onChange={(e) => setCredentials(prev => ({ ...prev, email: e.target.value }))}
              className="w-full px-4 py-3 bg-[#2c2a28] border border-[#eae5df]/20 rounded-lg text-[#fbf7f5] focus:ring-2 focus:ring-[#672421] focus:border-transparent"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-[#fbf7f5] mb-2">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              value={credentials.password}
              onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
              className="w-full px-4 py-3 bg-[#2c2a28] border border-[#eae5df]/20 rounded-lg text-[#fbf7f5] focus:ring-2 focus:ring-[#672421] focus:border-transparent"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-8 py-4 bg-[#672421] text-[#fbf7f5] rounded-lg hover:bg-[#672421]/90 transition-all disabled:opacity-50"
          >
            {isLoading ? 'Iniciando sesión...' : 'Iniciar sesión'}
          </button>
        </form>
      </div>
    </main>
  );
} 