'use client';

import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CoursePage() {
  const { theme } = useTheme();
  const [paymentType, setPaymentType] = useState<'monthly' | 'total'>('monthly');

  return (
    <div className={`min-h-screen pt-32 ${theme === 'dark' ? 'bg-[#2c2a28] text-[#eae5df]' : 'bg-white text-[#2c2a28]'}`}>
      {/* METODOLOGÍA */}
      <section className="mb-24">
        <div className="container mx-auto px-8">
          <div className="text-center mb-12">
            <span className="inline-block termina text-xs tracking-widest text-[#8b9696] mb-4">METODOLOGÍA</span>
            <h1 className="text-4xl md:text-5xl termina font-bold mb-4 uppercase">
              ¿CÓMO VAS A APRENDER?
            </h1>
            <p className={`text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-[#8b9696]' : 'text-[#672421]'}`}>
              100% virtual.<br />
              Clases teóricas grabadas (3 horas semanales).<br />
              Prácticas autogestionadas (1 hora y 30 minutos semanales).<br />
              Sesiones de Q&A opcionales (2 horas semanales), donde podés resolver dudas y profundizar los temas.
            </p>
          </div>
        </div>
      </section>

      {/* PROGRAMA */}
      <section>
        <div className="container mx-auto px-8">
          <h2 className="text-4xl termina font-normal uppercase mb-12 text-center">PROGRAMA</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="space-y-12">
                {/* Módulos 1, 2, 3, 4 */}
                <div>
                  <span className={`text-base tracking-[0.3em] termina block mb-2 ${theme === 'dark' ? 'text-[#8b9696]' : 'text-[#672421]'}`}>
                    MÓDULO 01
                  </span>
                  <h3 className="text-3xl termina font-normal mb-4 uppercase">
                    Fundamentos
                  </h3>
                  <ul className="ml-4 space-y-2 text-lg">
                    <li>Qué es la ciberseguridad y por qué es importante</li>
                  </ul>
                </div>

                <div>
                  <span className={`text-base tracking-[0.3em] termina block mb-2 ${theme === 'dark' ? 'text-[#8b9696]' : 'text-[#672421]'}`}>
                    MÓDULO 02
                  </span>
                  <h3 className="text-3xl termina font-normal mb-4 uppercase">
                    Análisis y Recolección de Información
                  </h3>
                  <ul className="ml-4 space-y-2 text-lg">
                    <li>OSINT: Técnicas de recolección de información pública</li>
                    <li>Google Dorks: Búsquedas avanzadas para obtener información relevante</li>
                  </ul>
                </div>

                <div>
                  <span className={`text-base tracking-[0.3em] termina block mb-2 ${theme === 'dark' ? 'text-[#8b9696]' : 'text-[#672421]'}`}>
                    MÓDULO 03
                  </span>
                  <h3 className="text-3xl termina font-normal mb-4 uppercase">
                    Gestión y documentación de proyectos
                  </h3>
                  <ul className="ml-4 space-y-2 text-lg">
                    <li>Project Management en Ciberseguridad: Gestión de proyectos para organizar tareas y objetivos</li>
                  </ul>
                </div>

                <div>
                  <span className={`text-base tracking-[0.3em] termina block mb-2 ${theme === 'dark' ? 'text-[#8b9696]' : 'text-[#672421]'}`}>
                    MÓDULO 04
                  </span>
                  <h3 className="text-3xl termina font-normal mb-4 uppercase">
                    Seguridad Colaborativa y Cultura Organizacional
                  </h3>
                  <ul className="ml-4 space-y-2 text-lg">
                    <li>Awareness y Comunicación: Estrategias para concientización en ciberseguridad</li>
                    <li>IAM y Help Desk Básico: Fundamentos de identidad y gestión de accesos</li>
                    <li>Comportamiento Seguro en el Trabajo Remoto y BYOD: Reglas de seguridad y políticas de dispositivos personales</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-12">
                {/* Módulos 5, 6, 7, 8 */}
                <div>
                  <span className={`text-base tracking-[0.3em] termina block mb-2 ${theme === 'dark' ? 'text-[#8b9696]' : 'text-[#672421]'}`}>
                    MÓDULO 05
                  </span>
                  <h3 className="text-3xl termina font-normal mb-4 uppercase">
                    Identificación y Mitigación de Riesgos
                  </h3>
                  <ul className="ml-4 space-y-2 text-lg">
                    <li>Riesgos y Compliance: ISO 27001, NIST, Magerit, y GDPR</li>
                    <li>Gestión de Vulnerabilidades: Métodos y herramientas para evaluar y mitigar vulnerabilidades</li>
                  </ul>
                </div>

                <div>
                  <span className={`text-base tracking-[0.3em] termina block mb-2 ${theme === 'dark' ? 'text-[#8b9696]' : 'text-[#672421]'}`}>
                    MÓDULO 06
                  </span>
                  <h3 className="text-3xl termina font-normal mb-4 uppercase">
                    Armado de entornos
                  </h3>
                  <ul className="ml-4 space-y-2 text-lg">
                    <li>Virtualización y configuración de laboratorios de pruebas</li>
                    <li>Nociones básicas mínimas de redes y seguridad en infraestructura</li>
                    <li>Administración básica de sistemas operativos</li>
                    <li>Conceptos básicos de explotación, malware y otros términos técnicos utilizables en la vida real. No delirantes</li>
                  </ul>
                </div>

                <div>
                  <span className={`text-base tracking-[0.3em] termina block mb-2 ${theme === 'dark' ? 'text-[#8b9696]' : 'text-[#672421]'}`}>
                    MÓDULO 07
                  </span>
                  <h3 className="text-3xl termina font-normal mb-4 uppercase">
                    Ethical Hacking y Seguridad de Aplicaciones
                  </h3>
                  <ul className="ml-4 space-y-2 text-lg">
                    <li>Ethical Hacking: Ciclo de hacking ético, reconocimiento y explotación. Herramientas de automatización</li>
                    <li>OWASP Top 10: Principales vulnerabilidades en aplicaciones web y mitigación</li>
                    <li>Desarrollo Seguro: Mejores prácticas de código y diseño seguro</li>
                  </ul>
                </div>

                <div>
                  <span className={`text-base tracking-[0.3em] termina block mb-2 ${theme === 'dark' ? 'text-[#8b9696]' : 'text-[#672421]'}`}>
                    MÓDULO 08
                  </span>
                  <h3 className="text-3xl termina font-normal mb-4 uppercase">
                    Proceso de inserción laboral
                  </h3>
                  <ul className="ml-4 space-y-2 text-lg">
                    <li>Confección de un CV y personal branding</li>
                    <li>Armado de carrera profesional: Distintas ramas de ciberseguridad y cómo crear un perfil que se adapte a ellas</li>
                    <li>Panel de profesionales</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex justify-center mt-16">
              <Link
                href="/inscripcion"
                className="btn-primary termina text-center text-lg tracking-[0.2em] px-8 py-4"
              >
                INSCRIBITE AHORA
              </Link>
            </div>

            <div className="mt-24">
              <h2 className="text-4xl termina font-normal uppercase mb-12 text-center">MEDIOS DE PAGO</h2>

              {/* Switch de precios */}
              <div className="flex justify-center gap-2 mb-12">
                <button
                  onClick={() => setPaymentType('monthly')}
                  className={`px-6 py-2 rounded-full termina text-base ${
                    paymentType === 'monthly'
                      ? theme === 'dark'
                        ? 'bg-[#8b9696] text-[#2c2a28]'
                        : 'bg-[#672421] text-[#eae5df]'
                      : 'bg-transparent text-[#8b9696]'
                  }`}
                >
                  MENSUAL
                </button>
                <button
                  onClick={() => setPaymentType('total')}
                  className={`px-6 py-2 rounded-full termina text-base ${
                    paymentType === 'total'
                      ? theme === 'dark'
                        ? 'bg-[#8b9696] text-[#2c2a28]'
                        : 'bg-[#672421] text-[#eae5df]'
                      : 'bg-transparent text-[#8b9696]'
                  }`}
                >
                  TOTAL
                </button>
              </div>

              {/* Opciones de Pago */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Opción USD */}
                <div className={`rounded-lg p-8 ${
                  theme === 'dark'
                    ? 'bg-[#23211E]'
                    : 'bg-white border border-[#672421]/20'
                }`}>
                  <h3 className="text-xl termina font-normal mb-6">
                    PAGO EN USD
                  </h3>
                  <div className="mb-8">
                    <div className="text-[#8b9696] line-through text-lg">
                      {paymentType === 'monthly' ? '$210 USD /month' : '$1,250 USD'}
                    </div>
                    <div className={`text-4xl font-bold ${
                      theme === 'dark'
                        ? 'text-[#8b9696]'
                        : 'text-[#672421]'
                    }`}>
                      {paymentType === 'monthly' ? '$157.5 USD /month' : '$937.5 USD'}
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    <li>✓ Acceso a todas las clases en vivo</li>
                    <li>✓ Acceso a la plataforma de contenidos grabados</li>
                    <li>✓ Q&A semanales</li>
                    <li>✓ Comunidad de estudiantes</li>
                    <li>✓ Soporte 48h</li>
                  </ul>
                  <Link
                    href={`/inscripcion?currency=usd&type=${paymentType}`}
                    className={`block w-full text-center termina tracking-[0.2em] px-8 py-4 rounded-lg ${
                      theme === 'dark'
                        ? 'bg-[#8b9696] text-[#2c2a28]'
                        : 'bg-[#672421] text-[#eae5df]'
                    }`}
                  >
                    INSCRIBIRME
                  </Link>
                </div>

                {/* Opción ARS */}
                <div className={`rounded-lg p-8 ${
                  theme === 'dark'
                    ? 'bg-[#23211E]'
                    : 'bg-white border border-[#672421]/20'
                }`}>
                  <h3 className="text-xl termina font-normal mb-6">
                    PAGO EN ARS
                  </h3>
                  <div className="mb-8">
                    <div className="text-[#8b9696] line-through text-lg">
                      {paymentType === 'monthly' ? '250,000 ARS /month' : '1,500,000 ARS'}
                    </div>
                    <div className={`text-4xl font-bold ${
                      theme === 'dark'
                        ? 'text-[#8b9696]'
                        : 'text-[#672421]'
                    }`}>
                      {paymentType === 'monthly' ? '187,500 ARS /month' : '1,125,000 ARS'}
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    <li>✓ Acceso a todas las clases en vivo</li>
                    <li>✓ Acceso a la plataforma de contenidos grabados</li>
                    <li>✓ Q&A semanales</li>
                    <li>✓ Comunidad de estudiantes</li>
                    <li>✓ Soporte 48h</li>
                  </ul>
                  <Link
                    href={`/inscripcion?currency=ars&type=${paymentType}`}
                    className={`block w-full text-center termina tracking-[0.2em] px-8 py-4 rounded-lg ${
                      theme === 'dark'
                        ? 'bg-[#8b9696] text-[#2c2a28]'
                        : 'bg-[#672421] text-[#eae5df]'
                    }`}
                  >
                    INSCRIBIRME
                  </Link>
                </div>

                {/* Opción Custom */}
                <div className={`rounded-lg p-8 ${
                  theme === 'dark'
                    ? 'bg-[#23211E]'
                    : 'bg-white border border-[#672421]/20'
                }`}>
                  <h3 className="text-xl termina font-normal mb-6">
                    CUSTOM (ENTERPRISE)
                  </h3>
                  <div className="mb-8">
                    <div className={`text-4xl font-bold ${
                      theme === 'dark'
                        ? 'text-[#8b9696]'
                        : 'text-[#672421]'
                    }`}>
                      Contactanos
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    <li>✓ Unlimited access</li>
                    <li>✓ Group packages available</li>
                    <li>✓ Dedicated support</li>
                    <li>✓ Custom onboarding</li>
                    <li>✓ Special reporting tools</li>
                  </ul>
                  <Link
                    href="/contacto"
                    className={`block w-full text-center termina tracking-[0.2em] px-8 py-4 rounded-lg ${
                      theme === 'dark'
                        ? 'bg-[#8b9696] text-[#2c2a28]'
                        : 'bg-[#672421] text-[#eae5df]'
                    }`}
                  >
                    CONTACTAR
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}