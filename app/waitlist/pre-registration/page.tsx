'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PreRegistrationForm } from '@/app/types/forms';

export default function PreRegistrationPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<PreRegistrationForm>({
    fullName: '',
    email: '',
    experience: 'no_experience',
    source: 'other',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      const response = await fetch('/api/waitlist/pre', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al enviar el formulario');
      }

      router.push('/waitlist/thank-you');
    } catch (error) {
      console.error('Error:', error);
      setError(error instanceof Error ? error.message : 'Error al enviar el formulario');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-termina text-dark-moon mb-4">
          Formulario de Pre-inscripción
        </h1>
        <p className="text-gray-600">Duración estimada: 1-2 minutos</p>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md text-red-600">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
            Nombre completo *
          </label>
          <input
            type="text"
            id="fullName"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-mystic-maze focus:border-transparent"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email de contacto *
          </label>
          <input
            type="email"
            id="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-mystic-maze focus:border-transparent"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4">
            ¿Cómo te enteraste del curso? *
          </label>
          <div className="space-y-3">
            {[
              { value: 'tiktok', label: 'TikTok' },
              { value: 'instagram', label: 'Instagram' },
              { value: 'linkedin', label: 'LinkedIn' },
              { value: 'referral', label: 'Por una persona (referido)' },
              { value: 'other', label: 'Otro' }
            ].map((option) => (
              <label key={option.value} className="flex items-center">
                <input
                  type="radio"
                  name="source"
                  value={option.value}
                  checked={formData.source === option.value}
                  onChange={(e) => setFormData({ ...formData, source: e.target.value as ReferralSource })}
                  className="mr-3 text-mystic-maze focus:ring-mystic-maze"
                  required
                />
                <span className="text-gray-700">{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        {formData.source === 'other' && (
          <div>
            <label htmlFor="otherSource" className="block text-sm font-medium text-gray-700 mb-1">
              Especificar:
            </label>
            <input
              type="text"
              id="otherSource"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-mystic-maze focus:border-transparent"
              value={formData.otherSource || ''}
              onChange={(e) => setFormData({ ...formData, otherSource: e.target.value })}
            />
          </div>
        )}

        {formData.source === 'referral' && (
          <div>
            <label htmlFor="referrerName" className="block text-sm font-medium text-gray-700 mb-1">
              Si alguien te recomendó el curso, dejá su nombre o usuario (si lo sabés):
            </label>
            <input
              type="text"
              id="referrerName"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-mystic-maze focus:border-transparent"
              value={formData.referrerName || ''}
              onChange={(e) => setFormData({ ...formData, referrerName: e.target.value })}
            />
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-3 bg-mystic-maze text-white font-medium rounded-md hover:bg-opacity-90 transition-colors disabled:opacity-50"
        >
          {isSubmitting ? 'Enviando...' : 'Enviar Pre-inscripción'}
        </button>
      </form>
    </main>
  );
} 