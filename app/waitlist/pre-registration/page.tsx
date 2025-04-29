'use client';

import { useState } from 'react';
import { PreRegistrationForm } from '@/app/types/forms';

export default function PreRegistrationPage() {
  const [formData, setFormData] = useState<PreRegistrationForm>({
    fullName: '',
    email: '',
    experience: 'no_experience',
    source: 'other',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Here you would add the API call to submit the form
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
    
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-semibold text-dark-moon mb-4">¡Gracias por pre-inscribirte!</h2>
        <p className="text-gray-600">
          Te vamos a contactar con los próximos pasos. Revisá tu correo (y el spam, por las dudas).
        </p>
      </div>
    );
  }

  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-termina text-dark-moon mb-4">
          Formulario de Pre-inscripción
        </h1>
        <p className="text-gray-600">Duración estimada: 1-2 minutos</p>
      </div>

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
          <label className="block text-sm font-medium text-gray-700 mb-1">
            ¿Tenés experiencia en tecnología o seguridad de la información? *
          </label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="experience"
                value="working_in_security"
                checked={formData.experience === 'working_in_security'}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value as any })}
                className="mr-2"
              />
              Sí, ya trabajo en el rubro
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="experience"
                value="working_in_tech"
                checked={formData.experience === 'working_in_tech'}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value as any })}
                className="mr-2"
              />
              Sí, pero no en seguridad
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="experience"
                value="no_experience"
                checked={formData.experience === 'no_experience'}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value as any })}
                className="mr-2"
              />
              No, pero me interesa mucho
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            ¿Cómo te enteraste del curso? *
          </label>
          <select
            value={formData.source}
            onChange={(e) => setFormData({ ...formData, source: e.target.value as any })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-mystic-maze focus:border-transparent"
          >
            <option value="tiktok">TikTok</option>
            <option value="instagram">Instagram</option>
            <option value="linkedin">LinkedIn</option>
            <option value="referral">Por una persona (referido)</option>
            <option value="other">Otro</option>
          </select>
        </div>

        {formData.source === 'referral' && (
          <div>
            <label htmlFor="referralSource" className="block text-sm font-medium text-gray-700 mb-1">
              Si alguien te recomendó el curso, dejá su nombre o usuario:
            </label>
            <input
              type="text"
              id="referralSource"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-mystic-maze focus:border-transparent"
              value={formData.referralSource || ''}
              onChange={(e) => setFormData({ ...formData, referralSource: e.target.value })}
            />
          </div>
        )}

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