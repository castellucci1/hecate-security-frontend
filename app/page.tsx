'use client';

import { motion } from 'framer-motion';
import { useTheme } from './context/ThemeContext';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from './components/Navbar';

export default function HomePage() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-[#2c2a28]' : 'bg-white'}`}>
      <Navbar />
      {/* Background Grid */}
      <div className={`grid-lines ${theme === 'dark' ? 'text-[#eae5df]' : 'text-[#2c2a28]'}`} />

      {/* Vertical Lines */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="vertical-line left-1/4" />
        <div className="vertical-line left-2/4" />
        <div className="vertical-line left-3/4" />
      </div>

      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center">
          <div className="container mx-auto px-8">
            <div className="grid grid-cols-12 gap-16 items-center">
              {/* Left Column */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="col-span-12 lg:col-span-6 space-y-8"
              >
                <Image
                  src={theme === 'dark' ? '/images/Hecate-Logos-32.png' : '/images/Hecate-Logos-27.png'}
                  alt="Hécate Security"
                  width={400}
                  height={160}
                  priority
                  className="w-auto h-auto"
                />
                <p className={`text-xl md:text-2xl font-light
                  ${theme === 'dark' ? 'text-[#8b9696]' : 'text-[#672421]'}`}
                >
                  Formación especializada en ciberseguridad
                </p>
                <div className="flex gap-6">
                  <Link
                    href="/inscripcion"
                    className="btn-primary"
                  >
                    INSCRIBIRSE →
                  </Link>
                  <Link
                    href="/curso"
                    className={`arrow-link ${
                      theme === 'dark' 
                        ? 'text-[#8b9696] border-[#8b9696]' 
                        : 'text-[#672421] border-[#672421]'
                    }`}
                  >
                    VER PROGRAMA
                  </Link>
                </div>
              </motion.div>

              {/* Right Column */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="col-span-12 lg:col-span-6"
              >
                <div className="relative aspect-square">
                  <Image
                    src="/images/Hécate Logos-01.png"
                    alt="Cybersecurity"
                    fill
                    className="object-cover rounded-lg"
                    priority
                  />
                  <div className="absolute inset-0 border-2 border-[#672421] rounded-lg transform translate-x-4 translate-y-4 -z-10 opacity-20" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Metodología Section */}
        <section className="py-32">
          <div className="container mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <span className="section-number">01</span>
              <h2 className={`text-4xl font-bold mb-4 termina
                ${theme === 'dark' ? 'text-[#eae5df]' : 'text-[#2c2a28]'}`}
              >
                METODOLOGÍA
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {metodologia.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`p-8 border group
                    ${theme === 'dark'
                      ? 'border-[#8b9696]/20 hover:border-[#8b9696]'
                      : 'border-[#672421]/20 hover:border-[#672421]'
                    }`}
                >
                  <h3 className={`text-xl font-bold mb-4 termina
                    ${theme === 'dark' ? 'text-[#eae5df]' : 'text-[#2c2a28]'}`}
                  >
                    {item.title}
                  </h3>
                  <p className={`font-light
                    ${theme === 'dark' ? 'text-[#8b9696]' : 'text-[#672421]'}`}
                  >
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Programa Section */}
        <section className="py-32">
          <div className="container mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <span className="section-number">02</span>
              <h2 className={`text-4xl font-bold mb-4 termina
                ${theme === 'dark' ? 'text-[#eae5df]' : 'text-[#2c2a28]'}`}
              >
                PROGRAMA
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {programa.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`p-8 border group
                    ${theme === 'dark'
                      ? 'border-[#8b9696]/20 hover:border-[#8b9696]'
                      : 'border-[#672421]/20 hover:border-[#672421]'
                    }`}
                >
                  <h3 className={`text-xl font-bold mb-4 termina
                    ${theme === 'dark' ? 'text-[#eae5df]' : 'text-[#2c2a28]'}`}
                  >
                    {item.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

const metodologia = [
  {
    title: '100% VIRTUAL',
    description: 'Clases teóricas grabadas (3 horas semanales).',
  },
  {
    title: 'PRÁCTICAS',
    description: 'Prácticas autogestionadas (1 hora y 30 minutos semanales).',
  },
  {
    title: 'SESIONES Q&A',
    description: 'Sesiones opcionales (2 horas semanales), donde podés resolver dudas y profundizar los temas.',
  },
];

const programa = [
  {
    title: 'FUNDAMENTOS',
  },
  {
    title: 'ANÁLISIS Y RECOLECCIÓN DE INFORMACIÓN',
  },
  {
    title: 'GESTIÓN Y DOCUMENTACIÓN DE PROYECTOS',
  },
  {
    title: 'SEGURIDAD COLABORATIVA Y CULTURA ORGANIZACIONAL',
  },
  {
    title: 'IDENTIFICACIÓN Y MITIGACIÓN DE RIESGOS',
  },
  {
    title: 'ARMADO DE ENTORNOS',
  },
  {
    title: 'ETHICAL HACKING Y SEGURIDAD DE APLICACIONES',
  },
  {
    title: 'PROCESO DE INSERCIÓN LABORAL',
  },
];
