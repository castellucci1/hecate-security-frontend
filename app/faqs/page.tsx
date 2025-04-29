'use client';

import { useState } from 'react';
import PageLayout from '../components/PageLayout';
import { useTheme } from '../context/ThemeContext'
import FadeIn from '../components/FadeIn'

interface FAQ {
  question: string;
  answer: string | JSX.Element;
}

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { theme } = useTheme()

  const faqs: FAQ[] = [
    {
      question: '¿Qué es Hécate Security?',
      answer: (
        <>
          Hécate Security es una academia online de ciberseguridad. Enseñamos a personas con o sin experiencia a entender, aplicar y desarrollarse en el mundo de la seguridad de la información, combinando formación técnica sólida con un enfoque humano, claro y profesional.
        </>
      )
    },
    {
      question: '¿A quién están dirigidos los cursos de Hécate?',
      answer: (
        <ul className="list-disc ml-5 space-y-1">
          <li>Personas sin experiencia previa que buscan iniciarse en ciberseguridad.</li>
          <li>Estudiantes de tecnología o carreras afines que desean complementar su formación.</li>
          <li>Profesionales que quieren reorientar su carrera hacia la seguridad informática.</li>
          <li>Cualquier persona curiosa que quiera entender y proteger su información en el mundo digital.</li>
        </ul>
      )
    },
    {
      question: '¿Necesito tener conocimientos previos en tecnología?',
      answer: (
        <>
          <strong>No.</strong> En Hécate partimos desde los fundamentos. Vas a aprender desde cero, con explicaciones claras y sin suposiciones previas de conocimiento técnico.
        </>
      )
    },
    {
      question: '¿Qué temas se ven en el curso principal de Hécate?',
      answer: (
        <>
          <ul className="list-disc ml-5 space-y-1">
            <li>Fundamentos de ciberseguridad</li>
            <li>OSINT (Open Source Intelligence)</li>
            <li>Concientización en seguridad (Awareness)</li>
            <li>Gestión de Identidades y Accesos (IAM)</li>
            <li>Gobernanza, Riesgo y Cumplimiento (GRC)</li>
            <li>Gestión de Vulnerabilidades</li>
            <li>Redes e Infraestructura</li>
            <li>Administración de Sistemas Operativos</li>
            <li>Ethical Hacking</li>
            <li>Desarrollo Seguro</li>
          </ul>
          <p className="mt-2">
            Además, trabajamos habilidades esenciales para el proceso de inserción laboral en seguridad informática.
          </p>
        </>
      )
    },
    {
      question: '¿Cómo son las clases de Hécate?',
      answer: (
        <>
          El curso combina tres tipos de instancias:
          <ul className="list-disc ml-5 space-y-1 mt-2">
            <li>Clases teóricas en vivo o grabadas (3 horas semanales).</li>
            <li>Prácticas supervisadas (1 hora y 30 minutos semanales).</li>
            <li>Sesiones de Q&amp;A opcionales (2 horas semanales), donde podés resolver dudas y profundizar los temas.</li>
          </ul>
        </>
      )
    },
    {
      question: '¿Cuánto dura el curso?',
      answer: (
        <>
          El curso de Hécate dura 24 semanas.<br />
          Cada semana incluye:
          <ul className="list-disc ml-5 space-y-1 mt-2">
            <li>3 horas de teoría</li>
            <li>1 hora y 30 minutos de práctica</li>
            <li>2 horas de Q&amp;A recomendadas (no obligatorias)</li>
          </ul>
          <p className="mt-2">
            En total, estimamos entre 4 horas y media a 6 horas semanales de dedicación para aprovechar toda la experiencia de formación.
          </p>
        </>
      )
    },
    {
      question: '¿Cuál es el método de enseñanza de Hécate?',
      answer: (
        <ul className="list-disc ml-5 space-y-1">
          <li>Explicaciones claras y humanas, sin tecnicismos innecesarios.</li>
          <li>Aplicación práctica real, desde el primer módulo.</li>
          <li>Acompañamiento cercano: no estudias solo/a, siempre vas a tener apoyo.</li>
          <li>Formación integral: técnica, profesional y enfocada en tu crecimiento a largo plazo.</li>
        </ul>
      )
    },
    {
      question: '¿Qué diferencia a Hécate de otros cursos de ciberseguridad?',
      answer: (
        <ul className="list-disc ml-5 space-y-1">
          <li>Enseñamos con criterio y no con fórmulas automáticas.</li>
          <li>No vendemos promesas vacías: formamos bases sólidas reales.</li>
          <li>Nos enfocamos en la inserción laboral auténtica, sin falsas garantías.</li>
          <li>El contenido está creado por profesionales que trabajan día a día en ciberseguridad.</li>
          <li>Pensamos Hécate como una comunidad de colegas, no como una fábrica de alumnos.</li>
        </ul>
      )
    },
    {
      question: '¿Entrego un certificado al finalizar el curso?',
      answer: (
        <>
          <strong>Sí.</strong> Al completar las actividades obligatorias y cumplir con los requisitos del programa, recibirás un certificado de finalización emitido por Hécate Security.
        </>
      )
    },
    {
      question: '¿Dónde puedo hacer consultas si tengo dudas antes de inscribirme?',
      answer: (
        <>
          Podés contactarnos directamente desde la sección de contacto en nuestra página web o escribirnos por correo electrónico.<br />
          Estamos para acompañarte en cada paso de tu formación.
        </>
      )
    },
  ];

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-[#2c2a28] text-[#eae5df]' : 'bg-white text-[#2c2a28]'}`}>
      <div className="container section-spacing">
        <FadeIn>
          <h1 className="text-5xl termina font-bold text-center mb-16">
            Preguntas Frecuentes sobre Hécate Security
          </h1>
        </FadeIn>
        <div className="max-w-2xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div
                className={`rounded-2xl border transition-all duration-300 shadow-sm hover:shadow-lg
                  ${theme === 'dark'
                    ? 'bg-[#23211e] border-[#eae5df]/10'
                    : 'bg-white border-[#672421]/10'
                  }`}
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="text-xl termina font-medium">{faq.question}</span>
                  <svg
                    className={`w-6 h-6 text-[#672421] transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`px-6 transition-all duration-300 ${
                    openIndex === index ? 'py-4 opacity-100' : 'h-0 opacity-0 overflow-hidden'
                  }`}
                >
                  <div className="body-text">{faq.answer}</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
} 