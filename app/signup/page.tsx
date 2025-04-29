'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SignUpPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password
        }),
      });

      if (response.ok) {
        router.push('/login');
      } else {
        const data = await response.json();
        setError(data.message || 'Error al crear la cuenta');
      }
    } catch (err) {
      setError('Error al conectar con el servidor');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#2c2a28] pt-20">
      <div className="max-w-md mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#fbf7f5] mb-2">
            Registrate
          </h1>
          <p className="text-[#eae5df]">
            Creá tu cuenta para acceder a Hécate Security Academy
          </p>
        </div>

        <form 
          onSubmit={handleSubmit}
          className="bg-[#2c2a28] border border-[#eae5df]/10 rounded-xl p-6 space-y-6"
        >
          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-3 rounded">
              {error}
            </div>
          )}

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[#fbf7f5] mb-2">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="w-full px-4 py-3 bg-[#2c2a28] border border-[#eae5df]/20 rounded-lg text-[#fbf7f5] focus:ring-2 focus:ring-[#672421] focus:border-transparent"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#fbf7f5] mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
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
              value={formData.password}
              onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
              className="w-full px-4 py-3 bg-[#2c2a28] border border-[#eae5df]/20 rounded-lg text-[#fbf7f5] focus:ring-2 focus:ring-[#672421] focus:border-transparent"
              required
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#fbf7f5] mb-2">
              Repetir contraseña
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={(e) => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))}
              className="w-full px-4 py-3 bg-[#2c2a28] border border-[#eae5df]/20 rounded-lg text-[#fbf7f5] focus:ring-2 focus:ring-[#672421] focus:border-transparent"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-8 py-4 bg-[#672421] text-[#fbf7f5] rounded-full hover:bg-[#672421]/90 transition-all disabled:opacity-50"
          >
            {isLoading ? 'Registrando...' : 'Registrarse'}
          </button>

          <div className="text-center text-[#eae5df]">
            <p>¿Ya tenés cuenta? {' '}
              <Link 
                href="/login" 
                className="text-[#672421] hover:text-[#672421]/80 transition-colors"
              >
                Iniciar sesión
              </Link>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
} 