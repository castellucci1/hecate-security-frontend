'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

interface FormData {
  fullName: string;
  idNumber: string;
  email: string;
  location: string;
  age: string;
  experience: 'working_in_security' | 'working_in_tech' | 'no_experience';
  motivation: string;
  source: 'tiktok' | 'instagram' | 'linkedin' | 'referral' | 'other';
  referralName?: string;
  otherSource?: string;
  acceptedTerms: boolean;
}

export default function InscripcionPage() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    idNumber: '',
    email: '',
    location: '',
    age: '',
    experience: 'no_experience',
    motivation: '',
    source: 'tiktok',
    acceptedTerms: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      window.location.href = '/inscripcion/gracias';
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center py-32 bg-[#111216] text-white" style={{ fontFamily: 'Inter, Arial, sans-serif' }}>
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-6xl font-bold mb-6">INSCRIPCIÓN</h1>
          <p className="text-[#bdbdbd] text-lg mb-4">
            Unite a la próxima generación de profesionales de Seguridad de la Información.<br />
            Estamos ultimando los detalles del curso que te va a formar como Information Security Analist.<br />
            Dejános tus datos y te avisamos apenas esté disponible.
          </p>
          <p className="text-[#bdbdbd] text-lg mb-12">
            Sin spam, solo contenido que suma.
          </p>

          {!isSubmitting && window.location.pathname !== '/inscripcion/gracias' && (
          <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium mb-1">Nombre completo *</label>
                <input
                  type="text"
                  id="fullName"
                  required
                  className="w-full px-4 py-2 border border-[#23242a] rounded-xl bg-[#181A20] text-white placeholder-[#bdbdbd] focus:ring-2 focus:ring-white focus:border-white"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email de contacto *</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-2 border border-[#23242a] rounded-xl bg-[#181A20] text-white placeholder-[#bdbdbd] focus:ring-2 focus:ring-white focus:border-white"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-3">¿Tenés experiencia en tecnología o seguridad de la información? *</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="experience"
                      value="working_in_security"
                      checked={formData.experience === 'working_in_security'}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value as FormData['experience'] })}
                      className="mr-2"
                    />
                    <span className="text-[#bdbdbd]">Sí, ya trabajo en el rubro</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="experience"
                      value="working_in_tech"
                      checked={formData.experience === 'working_in_tech'}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value as FormData['experience'] })}
                      className="mr-2"
                    />
                    <span className="text-[#bdbdbd]">Sí, pero no en seguridad</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="experience"
                      value="no_experience"
                      checked={formData.experience === 'no_experience'}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value as FormData['experience'] })}
                      className="mr-2"
                    />
                    <span className="text-[#bdbdbd]">No, pero me interesa mucho</span>
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">¿Cómo te enteraste del curso? *</label>
                <select
                  value={formData.source}
                  onChange={(e) => setFormData({ ...formData, source: e.target.value as FormData['source'] })}
                  className="w-full px-4 py-2 border border-[#23242a] rounded-xl bg-[#181A20] text-white placeholder-[#bdbdbd] focus:ring-2 focus:ring-white focus:border-white"
                  required
                >
                  <option value="tiktok">TikTok</option>
                  <option value="instagram">Instagram</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="referral">Por una persona (referido)</option>
                  <option value="other">Otro (especificar)</option>
                </select>
              </div>
              {formData.source === 'referral' && (
                <div>
                  <label htmlFor="referralName" className="block text-sm font-medium mb-1">Si alguien te recomendó el curso, dejá su nombre o usuario (si lo sabés):</label>
                  <input
                    type="text"
                    id="referralName"
                    className="w-full px-4 py-2 border border-[#23242a] rounded-xl bg-[#181A20] text-white placeholder-[#bdbdbd] focus:ring-2 focus:ring-white focus:border-white"
                    value={formData.referralName}
                    onChange={(e) => setFormData({ ...formData, referralName: e.target.value })}
                  />
                </div>
              )}
              {formData.source === 'other' && (
                <div>
                  <label htmlFor="otherSource" className="block text-sm font-medium mb-1">Especificar:</label>
                  <input
                    type="text"
                    id="otherSource"
                    className="w-full px-4 py-2 border border-[#23242a] rounded-xl bg-[#181A20] text-white placeholder-[#bdbdbd] focus:ring-2 focus:ring-white focus:border-white"
                    value={formData.otherSource}
                    onChange={(e) => setFormData({ ...formData, otherSource: e.target.value })}
                  />
                </div>
              )}
            <button
              type="submit"
                className="px-8 py-4 bg-white text-[#111216] font-semibold rounded-xl border border-white shadow-sm hover:bg-transparent hover:text-white hover:border-white transition-all duration-200 w-full"
              disabled={isSubmitting}
            >
                {isSubmitting ? 'Enviando...' : 'Enviar'}
            </button>
          </form>
          )}
          {isSubmitting && (
            <div className="mt-8 text-center text-[#8b9696] text-lg font-semibold animate-fade-in">
              Gracias por pre-inscribirte. Te vamos a contactar con los próximos pasos. Revisá tu correo (y el spam, por las dudas).
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
} 