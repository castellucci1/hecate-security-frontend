'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

type ExperienceLevel = 'security_professional' | 'tech_professional' | 'interested';
type ReferralSource = 'tiktok' | 'instagram' | 'linkedin' | 'referral' | 'other';

export default function WaitlistPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    experience: '' as ExperienceLevel,
    source: '' as ReferralSource,
    otherSource: '',
    referrerName: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push('/waitlist/thank-you');
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un error al enviar el formulario. Por favor, intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#2c2a28]">
      <div className="max-w-2xl mx-auto px-4 pt-32 pb-24">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-[#fbf7f5] mb-4">
            Pre-inscripción
          </h1>
          <p className="text-[#eae5df]">
            Sé parte de la próxima generación de expertos en ciberseguridad
          </p>
        </div>

        <form 
          onSubmit={handleSubmit}
          className="space-y-8 bg-[#2c2a28] p-8 rounded-xl border border-[#672421]/20"
        >
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-[#fbf7f5] mb-2">
              Nombre completo
            </label>
            <input
              type="text"
              id="fullName"
              required
              value={formData.fullName}
              onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
              className="w-full px-4 py-3 bg-[#2c2a28] border border-[#eae5df]/20 rounded-lg text-[#fbf7f5] focus:ring-2 focus:ring-[#672421] focus:border-transparent transition-all"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#fbf7f5] mb-2">
              Email de contacto
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="w-full px-4 py-3 bg-[#2c2a28] border border-[#eae5df]/20 rounded-lg text-[#fbf7f5] focus:ring-2 focus:ring-[#672421] focus:border-transparent transition-all"
            />
          </div>

          {/* Experience */}
          <div>
            <label className="block text-sm font-medium text-[#fbf7f5] mb-4">
              ¿Tenés experiencia en tecnología o seguridad de la información?
            </label>
            <div className="space-y-3">
              {[
                { value: 'security_professional', label: 'Sí, ya trabajo en el rubro' },
                { value: 'tech_professional', label: 'Sí, pero no en seguridad' },
                { value: 'interested', label: 'No, pero me interesa mucho' }
              ].map((option) => (
                <label key={option.value} className="flex items-center">
                  <input
                    type="radio"
                    name="experience"
                    value={option.value}
                    checked={formData.experience === option.value}
                    onChange={(e) => setFormData(prev => ({ ...prev, experience: e.target.value as ExperienceLevel }))}
                    className="mr-3 text-[#672421] focus:ring-[#672421]"
                    required
                  />
                  <span className="text-[#eae5df]">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Source */}
          <div>
            <label className="block text-sm font-medium text-[#fbf7f5] mb-4">
              ¿Cómo te enteraste del curso?
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
                    onChange={(e) => setFormData(prev => ({ ...prev, source: e.target.value as ReferralSource }))}
                    className="mr-3 text-[#672421] focus:ring-[#672421]"
                    required
                  />
                  <span className="text-[#eae5df]">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Other Source Specification */}
          {formData.source === 'other' && (
            <div>
              <label htmlFor="otherSource" className="block text-sm font-medium text-[#fbf7f5] mb-2">
                Especificar
              </label>
              <input
                type="text"
                id="otherSource"
                required
                value={formData.otherSource}
                onChange={(e) => setFormData(prev => ({ ...prev, otherSource: e.target.value }))}
                className="w-full px-4 py-3 bg-[#2c2a28] border border-[#eae5df]/20 rounded-lg text-[#fbf7f5] focus:ring-2 focus:ring-[#672421] focus:border-transparent transition-all"
              />
            </div>
          )}

          {/* Referrer Name */}
          {formData.source === 'referral' && (
            <div>
              <label htmlFor="referrerName" className="block text-sm font-medium text-[#fbf7f5] mb-2">
                Si alguien te recomendó el curso, dejá su nombre o usuario (si lo sabés):
              </label>
              <input
                type="text"
                id="referrerName"
                value={formData.referrerName}
                onChange={(e) => setFormData(prev => ({ ...prev, referrerName: e.target.value }))}
                className="w-full px-4 py-3 bg-[#2c2a28] border border-[#eae5df]/20 rounded-lg text-[#fbf7f5] focus:ring-2 focus:ring-[#672421] focus:border-transparent transition-all"
              />
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-8 py-4 bg-[#672421] text-[#fbf7f5] rounded-full hover:bg-[#672421]/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Enviando...' : 'Enviar pre-inscripción'}
          </button>
        </form>
      </div>
    </main>
  );
} 