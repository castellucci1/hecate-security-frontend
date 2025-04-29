'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function FinalRegistrationPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    idNumber: '',
    email: '',
    country: '',
    city: '',
    age: '',
    experience: '',
    motivation: '',
    source: '',
    referralName: '',
    acceptedTerms: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Here you would add your API call to submit the form
      await new Promise(resolve => setTimeout(resolve, 1000));
      router.push('/waitlist/thank-you');
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <div className="inline-block bg-mystic-maze bg-opacity-10 text-mystic-maze px-4 py-1 rounded-full text-sm mb-4">
          Inscripción Final
        </div>
        <h1 className="text-4xl font-termina text-dark-moon mb-4">
          Formulario de Inscripción
        </h1>
        <p className="text-gray-600">Duración estimada: 5 minutos</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Personal Information Section */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-dark-moon">Datos personales</h2>
          
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
            <label htmlFor="idNumber" className="block text-sm font-medium text-gray-700 mb-1">
              DNI / Número de identificación *
            </label>
            <input
              type="text"
              id="idNumber"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-mystic-maze focus:border-transparent"
              value={formData.idNumber}
              onChange={(e) => setFormData({ ...formData, idNumber: e.target.value })}
            />
            <p className="mt-1 text-sm text-gray-500">Este dato se solicita exclusivamente para fines de facturación</p>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                País de residencia *
              </label>
              <input
                type="text"
                id="country"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-mystic-maze focus:border-transparent"
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                Ciudad *
              </label>
              <input
                type="text"
                id="city"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-mystic-maze focus:border-transparent"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
              Edad *
            </label>
            <input
              type="number"
              id="age"
              required
              min="18"
              max="120"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-mystic-maze focus:border-transparent"
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            />
          </div>
        </section>

        {/* Experience Section */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-dark-moon">Experiencia previa</h2>
          
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
                  required
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  className="mr-2"
                />
                Sí, ya trabajo en el rubro
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="experience"
                  value="working_in_tech"
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  className="mr-2"
                />
                Sí, pero no en seguridad
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="experience"
                  value="no_experience"
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  className="mr-2"
                />
                No, pero me interesa mucho
              </label>
            </div>
          </div>

          <div>
            <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-1">
              ¿Por qué querés hacer este curso? *
            </label>
            <textarea
              id="motivation"
              required
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-mystic-maze focus:border-transparent"
              value={formData.motivation}
              onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
            />
          </div>
        </section>

        {/* Source Section */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-dark-moon">Origen del contacto</h2>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              ¿Cómo te enteraste del curso? *
            </label>
            <select
              value={formData.source}
              onChange={(e) => setFormData({ ...formData, source: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-mystic-maze focus:border-transparent"
              required
            >
              <option value="">Seleccionar</option>
              <option value="tiktok">TikTok</option>
              <option value="instagram">Instagram</option>
              <option value="linkedin">LinkedIn</option>
              <option value="referral">Por una persona (referido)</option>
              <option value="other">Otro</option>
            </select>
          </div>

          {formData.source === 'referral' && (
            <div>
              <label htmlFor="referralName" className="block text-sm font-medium text-gray-700 mb-1">
                ¿Quién te recomendó el curso? Ingresá su nombre o usuario
              </label>
              <input
                type="text"
                id="referralName"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-mystic-maze focus:border-transparent"
                value={formData.referralName}
                onChange={(e) => setFormData({ ...formData, referralName: e.target.value })}
              />
            </div>
          )}
        </section>

        {/* Terms and Conditions */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-dark-moon">Condiciones y aceptación</h2>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-medium mb-4">Este curso es 100% remoto. Para cursar necesitás:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
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
              <span className="text-sm text-gray-600">
                Al completar este formulario, confirmás que cumplís con estas condiciones y aceptás los{' '}
                <a href="/terms" className="text-mystic-maze hover:underline">
                  Términos y Condiciones
                </a>{' '}
                del curso.
              </span>
            </label>
          </div>
        </section>

        {/* Payment Instructions */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-dark-moon">Confirmación de pago</h2>
          <p className="text-gray-600">
            Una vez realizado el pago por el medio indicado, deberás enviar el comprobante a:{' '}
            <a href="mailto:administracion@hecatesecurity.com" className="text-mystic-maze hover:underline">
              administracion@hecatesecurity.com
            </a>
          </p>
        </section>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-3 bg-mystic-maze text-white font-medium rounded-md hover:bg-opacity-90 transition-colors disabled:opacity-50"
        >
          {isSubmitting ? 'Enviando...' : 'Completar Inscripción'}
        </button>
      </form>

      <div className="mt-8 text-center text-sm text-gray-600">
        <p>¿Tenés dudas? Escribinos a <a href="mailto:hola@hecatesecurity.com" className="text-mystic-maze hover:underline">hola@hecatesecurity.com</a></p>
      </div>
    </main>
  );
} 