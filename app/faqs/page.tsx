'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';

interface FAQ {
  question: string;
  answer: string | React.ReactNode;
}

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
    <div className="min-h-screen relative">
      <Navbar />
      <div className="container mx-auto px-8 py-32 z-10">
        <h1 className="text-4xl font-bold mb-12 text-center termina uppercase">TUS PREGUNTAS, NUESTRAS RESPUESTAS.</h1>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-[#23242a] rounded-xl overflow-hidden"
              >
                <button
                className="w-full px-6 py-4 text-left bg-[#181A20] hover:bg-[#23242a] transition-colors duration-200 flex justify-between items-center"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                <h2 className="text-lg font-normal termina uppercase">{faq.question}</h2>
                  <svg
                  className={`w-6 h-6 text-[#bdbdbd] transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-[#181A20] border-t border-[#23242a]">
                  <div className="text-[#bdbdbd]">{faq.answer}</div>
                </div>
              )}
              </div>
          ))}
        </div>
      </div>
    </div>
  );
} 