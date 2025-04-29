'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'

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

  const { theme } = useTheme()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Aquí iría la lógica de envío del formulario
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Redirigir o mostrar mensaje de éxito
      window.location.href = '/inscripcion/gracias';
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center py-32">
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-6xl termina mb-6">INSCRIPCIÓN</h1>
          <p className="text-[#8b9696] text-lg mb-4">
            Unite a la próxima generación de profesionales de Seguridad de la Información.<br />
            Estamos ultimando los detalles del curso que te va a formar como Information Security Analist.<br />
            Dejános tus datos y te avisamos apenas esté disponible.
          </p>
          <p className="text-[#8b9696] text-lg mb-12">
            Sin spam, solo contenido que suma.
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Datos personales */}
            <section className="space-y-6">
              <h2 className="text-xl font-semibold text-[#2c2a28] dark:text-[#eae5df]">Datos personales</h2>
              
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-[#2c2a28] dark:text-[#eae5df] mb-1">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="fullName"
                  required
                  className={`
                    w-full px-4 py-2 border border-[#8b9696]/20 rounded-md focus:ring-2 focus:ring-[#672421] focus:border-transparent bg-white dark:bg-[#23211e] text-[#2c2a28] dark:text-[#eae5df]
                    ${theme === 'dark'
                      ? 'border-[#8b9696] text-[#eae5df] placeholder-[#8b9696]'
                      : 'border-[#672421] text-[#2c2a28] placeholder-[#672421]'
                    }
                  `}
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="idNumber" className="block text-sm font-medium text-[#2c2a28] dark:text-[#eae5df] mb-1">
                  DNI / Número de identificación *
                </label>
                <input
                  type="text"
                  id="idNumber"
                  required
                  className={`
                    w-full px-4 py-2 border border-[#8b9696]/20 rounded-md focus:ring-2 focus:ring-[#672421] focus:border-transparent bg-white dark:bg-[#23211e] text-[#2c2a28] dark:text-[#eae5df]
                    ${theme === 'dark'
                      ? 'border-[#8b9696] text-[#eae5df] placeholder-[#8b9696]'
                      : 'border-[#672421] text-[#2c2a28] placeholder-[#672421]'
                    }
                  `}
                  value={formData.idNumber}
                  onChange={(e) => setFormData({ ...formData, idNumber: e.target.value })}
                />
                <p className="mt-1 text-sm text-[#8b9696]">Este dato se solicita exclusivamente para fines de facturación</p>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#2c2a28] dark:text-[#eae5df] mb-1">
                  Email de contacto *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className={`
                    w-full px-4 py-2 border border-[#8b9696]/20 rounded-md focus:ring-2 focus:ring-[#672421] focus:border-transparent bg-white dark:bg-[#23211e] text-[#2c2a28] dark:text-[#eae5df]
                    ${theme === 'dark'
                      ? 'border-[#8b9696] text-[#eae5df] placeholder-[#8b9696]'
                      : 'border-[#672421] text-[#2c2a28] placeholder-[#672421]'
                    }
                  `}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-[#2c2a28] dark:text-[#eae5df] mb-1">
                  País y ciudad de residencia *
                </label>
                <input
                  type="text"
                  id="location"
                  required
                  className={`
                    w-full px-4 py-2 border border-[#8b9696]/20 rounded-md focus:ring-2 focus:ring-[#672421] focus:border-transparent bg-white dark:bg-[#23211e] text-[#2c2a28] dark:text-[#eae5df]
                    ${theme === 'dark'
                      ? 'border-[#8b9696] text-[#eae5df] placeholder-[#8b9696]'
                      : 'border-[#672421] text-[#2c2a28] placeholder-[#672421]'
                    }
                  `}
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="age" className="block text-sm font-medium text-[#2c2a28] dark:text-[#eae5df] mb-1">
                  Edad *
                </label>
                <input
                  type="number"
                  id="age"
                  required
                  min="18"
                  max="99"
                  className={`
                    w-full px-4 py-2 border border-[#8b9696]/20 rounded-md focus:ring-2 focus:ring-[#672421] focus:border-transparent bg-white dark:bg-[#23211e] text-[#2c2a28] dark:text-[#eae5df]
                    ${theme === 'dark'
                      ? 'border-[#8b9696] text-[#eae5df] placeholder-[#8b9696]'
                      : 'border-[#672421] text-[#2c2a28] placeholder-[#672421]'
                    }
                  `}
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                />
              </div>
            </section>

            {/* Experiencia previa */}
            <section className="space-y-6">
              <h2 className="text-xl font-semibold text-[#2c2a28] dark:text-[#eae5df]">Experiencia previa</h2>
              
              <div>
                <label className="block text-sm font-medium text-[#2c2a28] dark:text-[#eae5df] mb-3">
                  ¿Tenés experiencia en tecnología o seguridad de la información? *
                </label>
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
                    <span className="text-[#2c2a28] dark:text-[#eae5df]">Sí, ya trabajo en el rubro</span>
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
                    <span className="text-[#2c2a28] dark:text-[#eae5df]">Sí, pero no en seguridad</span>
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
                    <span className="text-[#2c2a28] dark:text-[#eae5df]">No, pero me interesa mucho</span>
                  </label>
                </div>
              </div>
            </section>

            {/* Motivación */}
            <section className="space-y-6">
              <h2 className="text-xl font-semibold text-[#2c2a28] dark:text-[#eae5df]">Motivación</h2>
              
              <div>
                <label htmlFor="motivation" className="block text-sm font-medium text-[#2c2a28] dark:text-[#eae5df] mb-1">
                  ¿Por qué querés hacer este curso? *
                </label>
                <textarea
                  id="motivation"
                  required
                  rows={4}
                  className={`
                    w-full px-4 py-2 border border-[#8b9696]/20 rounded-md focus:ring-2 focus:ring-[#672421] focus:border-transparent bg-white dark:bg-[#23211e] text-[#2c2a28] dark:text-[#eae5df]
                    ${theme === 'dark'
                      ? 'border-[#8b9696] text-[#eae5df] placeholder-[#8b9696]'
                      : 'border-[#672421] text-[#2c2a28] placeholder-[#672421]'
                    }
                  `}
                  value={formData.motivation}
                  onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                />
              </div>
            </section>

            {/* Origen del contacto */}
            <section className="space-y-6">
              <h2 className="text-xl font-semibold text-[#2c2a28] dark:text-[#eae5df]">Origen del contacto</h2>
              
              <div>
                <label className="block text-sm font-medium text-[#2c2a28] dark:text-[#eae5df] mb-1">
                  ¿Cómo te enteraste del curso? *
                </label>
                <select
                  value={formData.source}
                  onChange={(e) => setFormData({ ...formData, source: e.target.value as FormData['source'] })}
                  className={`
                    w-full px-4 py-2 border border-[#8b9696]/20 rounded-md focus:ring-2 focus:ring-[#672421] focus:border-transparent bg-white dark:bg-[#23211e] text-[#2c2a28] dark:text-[#eae5df]
                    ${theme === 'dark'
                      ? 'border-[#8b9696] text-[#eae5df] placeholder-[#8b9696]'
                      : 'border-[#672421] text-[#2c2a28] placeholder-[#672421]'
                    }
                  `}
                  required
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
                  <label htmlFor="referralName" className="block text-sm font-medium text-[#2c2a28] dark:text-[#eae5df] mb-1">
                    ¿Quién te recomendó el curso? Ingresá su nombre o usuario
                  </label>
                  <input
                    type="text"
                    id="referralName"
                    className={`
                      w-full px-4 py-2 border border-[#8b9696]/20 rounded-md focus:ring-2 focus:ring-[#672421] focus:border-transparent bg-white dark:bg-[#23211e] text-[#2c2a28] dark:text-[#eae5df]
                      ${theme === 'dark'
                        ? 'border-[#8b9696] text-[#eae5df] placeholder-[#8b9696]'
                        : 'border-[#672421] text-[#2c2a28] placeholder-[#672421]'
                      }
                    `}
                    value={formData.referralName}
                    onChange={(e) => setFormData({ ...formData, referralName: e.target.value })}
                  />
                </div>
              )}

              {formData.source === 'other' && (
                <div>
                  <label htmlFor="otherSource" className="block text-sm font-medium text-[#2c2a28] dark:text-[#eae5df] mb-1">
                    Especificar:
                  </label>
                  <input
                    type="text"
                    id="otherSource"
                    className={`
                      w-full px-4 py-2 border border-[#8b9696]/20 rounded-md focus:ring-2 focus:ring-[#672421] focus:border-transparent bg-white dark:bg-[#23211e] text-[#2c2a28] dark:text-[#eae5df]
                      ${theme === 'dark'
                        ? 'border-[#8b9696] text-[#eae5df] placeholder-[#8b9696]'
                        : 'border-[#672421] text-[#2c2a28] placeholder-[#672421]'
                      }
                    `}
                    value={formData.otherSource}
                    onChange={(e) => setFormData({ ...formData, otherSource: e.target.value })}
                  />
                </div>
              )}
            </section>

            {/* Terms and Conditions */}
            <section className="space-y-6">
              <h2 className="text-xl font-semibold text-[#2c2a28] dark:text-[#eae5df]">Condiciones y aceptación</h2>
              
              <div className="bg-[#23211e]/5 dark:bg-[#23211e] p-6 rounded-lg">
                <h3 className="font-medium mb-4 text-[#2c2a28] dark:text-[#eae5df]">Este curso es 100% remoto. Para cursar necesitás:</h3>
                <ul className="list-disc list-inside space-y-2 text-[#8b9696] mb-6">
                  <li>Una computadora</li>
                  <li>Conexión estable a internet</li>
                  <li>Disponibilidad semanal para asistir a las clases</li>
                </ul>
                
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    required
                    checked={formData.acceptedTerms}
                    onChange={(e) => setFormData({ ...formData, acceptedTerms: e.target.checked })}
                    className="mt-1 mr-2"
                  />
                  <span className="text-sm text-[#8b9696]">
                    Al completar este formulario, confirmás que cumplís con estas condiciones y aceptás los{' '}
                    <a href="/terms" className="text-[#672421] hover:underline dark:text-[#8b9696]">
                      Términos y Condiciones
                    </a>{' '}
                    del curso.
                  </span>
                </label>
              </div>
            </section>

            {/* Payment Instructions */}
            <section className="space-y-6">
              <h2 className="text-xl font-semibold text-[#2c2a28] dark:text-[#eae5df]">Confirmación de pago</h2>
              <p className="text-[#8b9696]">
                Una vez realizado el pago por el medio indicado, deberás enviar el comprobante a:{' '}
                <a href="mailto:administracion@hecatesecurity.com" className="text-[#672421] hover:underline dark:text-[#8b9696]">
                  administracion@hecatesecurity.com
                </a>
              </p>
            </section>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-[#672421] text-white font-medium rounded-md hover:bg-[#672421]/90 transition-colors disabled:opacity-50 dark:bg-[#8b9696] dark:text-[#2c2a28]"
            >
              {isSubmitting ? 'Enviando...' : 'Completar Inscripción'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
} 