'use client'
import { useTheme } from '../context/ThemeContext'
import FadeIn from '../components/FadeIn';
import Link from 'next/link';
import { useState } from 'react';

const secciones = [
  {
    title: "Fundamentos",
    desc: "Qué es la ciberseguridad y por qué es importante.",
    topics: [
      "Qué es la ciberseguridad"
    ]
  },
  {
    title: "Análisis y Recolección de Información",
    desc: "OSINT y Google Dorks: técnicas y herramientas para obtener información pública relevante.",
    topics: [
      "OSINT: Técnicas de recolección de información pública.",
      "Google Dorks: Búsquedas avanzadas para obtener información relevante."
    ]
  },
  {
    title: "Gestión y documentación de proyectos",
    desc: "Project Management en Ciberseguridad: cómo organizar tareas y objetivos.",
    topics: [
      "Project Management en Ciberseguridad: Gestión de proyectos para organizar tareas y objetivos."
    ]
  },
  {
    title: "Seguridad Colaborativa y Cultura Organizacional",
    desc: "Awareness, IAM, Help Desk y políticas de trabajo remoto/BYOD.",
    topics: [
      "Awareness y Comunicación: Estrategias para concientización en ciberseguridad.",
      "IAM y Help Desk Básico: Fundamentos de identidad y gestión de accesos.",
      "Comportamiento Seguro en el Trabajo Remoto y BYOD: Reglas de seguridad y políticas de dispositivos personales."
    ]
  },
  {
    title: "Identificación y Mitigación de Riesgos",
    desc: "Compliance (ISO 27001, NIST, GDPR), gestión de vulnerabilidades y riesgos.",
    topics: [
      "Riesgos y Compliance: ISO 27001, NIST, Magerit, y GDPR.",
      "Gestión de Vulnerabilidades: Métodos y herramientas para evaluar y mitigar vulnerabilidades."
    ]
  },
  {
    title: "Armado de entornos",
    desc: "Virtualización, laboratorios, redes, sistemas operativos y conceptos técnicos aplicados.",
    topics: [
      "Virtualización y configuración de laboratorios de pruebas.",
      "Nociones básicas mínimas de redes y seguridad en infraestructura.",
      "Administración básica de sistemas operativos.",
      "Conceptos básicos de explotación, malware y otros términos técnicos utilizables en la vida real. No delirantes."
    ]
  },
  {
    title: "Ethical Hacking y Seguridad de Aplicaciones",
    desc: "Ciclo de hacking ético, OWASP Top 10, desarrollo seguro y automatización.",
    topics: [
      "Ethical Hacking: Ciclo de hacking ético, reconocimiento y explotación. Herramientas de automatización.",
      "OWASP Top 10: Principales vulnerabilidades en aplicaciones web y mitigación.",
      "Desarrollo Seguro: Mejores prácticas de código y diseño seguro."
    ]
  },
  {
    title: "Proceso de inserción laboral",
    desc: "CV, personal branding, armado de carrera y panel de profesionales.",
    topics: [
      "Confección de un CV y personal branding",
      "Armado de carrera profesional: Distintas ramas de ciberseguridad y cómo crear un perfil que se adapte a ellas.",
      "Panel de profesionales"
    ]
  },
];

export default function CursoContent() {
  const { theme } = useTheme();
  const [paymentType, setPaymentType] = useState<'monthly' | 'total'>('monthly');

  // Títulos del programa para "Estructura del curso"
  const titulosPrograma = secciones.map(sec => sec.title);

  return (
    <main className={`min-h-screen ${theme === 'dark' ? 'bg-[#2c2a28] text-[#eae5df]' : 'bg-white text-[#2c2a28]'} py-20`}>
      <div className="max-w-5xl mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-12">
            <span className="inline-block termina text-xs tracking-widest text-[#8b9696] mb-4">PROGRAMA</span>
            <h1 className="text-4xl md:text-5xl termina font-bold mb-4">
              Todo lo que necesitás para formarte en Seguridad de la Información
            </h1>
            <p className="text-lg text-[#8b9696] max-w-2xl mx-auto">
              Un programa integral, práctico y actualizado, diseñado y dictado por profesionales activos en la industria.
            </p>
          </div>
        </FadeIn>

        {/* Estructura del curso */}
        <section className="mb-16">
          <FadeIn>
            <h2 className="text-3xl termina font-bold mb-6 text-[#8b9696] text-center">Estructura del curso</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {titulosPrograma.map((titulo) => (
                <li key={titulo} className="rounded-xl border border-[#8b9696]/20 bg-white dark:bg-[#23211e] p-4 text-center termina text-lg font-semibold text-[#8b9696]">
                  {titulo}
                </li>
              ))}
            </ul>
          </FadeIn>
        </section>

        {/* Metodología */}
        <section className="mb-16">
          <FadeIn>
            <h2 className="text-3xl termina font-bold mb-6 text-[#8b9696] text-center">Metodología</h2>
            <ul className="space-y-4 max-w-2xl mx-auto text-base">
              <li>
                <span className="font-bold text-[#8b9696]">100% virtual.</span>
              </li>
              <li>
                Clases teóricas en vivo o grabadas <span className="font-bold">(3 horas semanales)</span>.
              </li>
              <li>
                Prácticas supervisadas <span className="font-bold">(1 hora y 30 minutos semanales)</span>.
              </li>
              <li>
                Sesiones de Q&amp;A opcionales <span className="font-bold">(2 horas semanales)</span>, donde podés resolver dudas y profundizar los temas.
              </li>
            </ul>
          </FadeIn>
        </section>

        {/* Cards de secciones temáticas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {secciones.map((sec, idx) => (
            <FadeIn key={sec.title} delay={idx * 0.1}>
              <div className={`rounded-2xl border ${theme === 'dark' ? 'bg-[#23211e] border-[#8b9696]/20' : 'bg-white border-[#8b9696]/20'} shadow-sm p-8 flex flex-col h-full transition-all`}>
                <h2 className="text-xl termina font-bold mb-2 text-[#8b9696]">{sec.title}</h2>
                <p className="text-base mb-3">{sec.desc}</p>
                <ul className="list-disc ml-5 space-y-1">
                  {sec.topics.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </main>
  );
} 