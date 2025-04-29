'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function MethodologyAndProgram() {
  const { theme } = useTheme();

  // Intersection Observer setup for animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '50px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-[#2c2a28] text-[#eae5df]' : 'bg-white text-[#2c2a28]'}`}>
      {/* Metodología Section */}
      <section className="py-32">
        <div className="container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className={`text-4xl font-bold mb-16 termina tracking-[0.2em]
              ${theme === 'dark' ? 'text-[#eae5df]' : 'text-[#2c2a28]'}`}
            >
              METODOLOGÍA
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`p-8 border rounded-3xl group
                ${theme === 'dark'
                  ? 'border-[#8b9696]/20 hover:border-[#8b9696]'
                  : 'border-[#672421]/20 hover:border-[#672421]'
                }`}
            >
              <h3 className={`text-xl font-bold mb-4 termina tracking-[0.2em]
                ${theme === 'dark' ? 'text-[#eae5df]' : 'text-[#2c2a28]'}`}
              >
                CLASES EN VIVO
              </h3>
              <p className={`font-light
                ${theme === 'dark' ? 'text-[#8b9696]' : 'text-[#672421]'}`}
              >
                Sesiones interactivas con instructores expertos donde podrás hacer preguntas y resolver dudas en tiempo real.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`p-8 border rounded-3xl group
                ${theme === 'dark'
                  ? 'border-[#8b9696]/20 hover:border-[#8b9696]'
                  : 'border-[#672421]/20 hover:border-[#672421]'
                }`}
            >
              <h3 className={`text-xl font-bold mb-4 termina tracking-[0.2em]
                ${theme === 'dark' ? 'text-[#eae5df]' : 'text-[#2c2a28]'}`}
              >
                LABORATORIOS PRÁCTICOS
              </h3>
              <p className={`font-light
                ${theme === 'dark' ? 'text-[#8b9696]' : 'text-[#672421]'}`}
              >
                Acceso a entornos controlados donde podrás practicar técnicas y herramientas de manera segura.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`p-8 border rounded-3xl group
                ${theme === 'dark'
                  ? 'border-[#8b9696]/20 hover:border-[#8b9696]'
                  : 'border-[#672421]/20 hover:border-[#672421]'
                }`}
            >
              <h3 className={`text-xl font-bold mb-4 termina tracking-[0.2em]
                ${theme === 'dark' ? 'text-[#eae5df]' : 'text-[#2c2a28]'}`}
              >
                MENTORÍA PERSONALIZADA
              </h3>
              <p className={`font-light
                ${theme === 'dark' ? 'text-[#8b9696]' : 'text-[#672421]'}`}
              >
                Seguimiento individual para asegurar tu progreso y resolver cualquier obstáculo en tu aprendizaje.
              </p>
            </motion.div>
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
            className="mb-16 text-center"
          >
            <h2 className={`text-4xl font-bold mb-16 termina tracking-[0.2em]
              ${theme === 'dark' ? 'text-[#eae5df]' : 'text-[#2c2a28]'}`}
            >
              PROGRAMA
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`p-8 border rounded-3xl group
                ${theme === 'dark'
                  ? 'border-[#8b9696]/20 hover:border-[#8b9696]'
                  : 'border-[#672421]/20 hover:border-[#672421]'
                }`}
            >
              <h3 className={`text-xl font-bold mb-4 termina tracking-[0.2em]
                ${theme === 'dark' ? 'text-[#eae5df]' : 'text-[#2c2a28]'}`}
              >
                FUNDAMENTOS
              </h3>
              <p className={`font-light
                ${theme === 'dark' ? 'text-[#8b9696]' : 'text-[#672421]'}`}
              >
                Conceptos básicos de redes, sistemas operativos y principios de seguridad informática.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`p-8 border rounded-3xl group
                ${theme === 'dark'
                  ? 'border-[#8b9696]/20 hover:border-[#8b9696]'
                  : 'border-[#672421]/20 hover:border-[#672421]'
                }`}
            >
              <h3 className={`text-xl font-bold mb-4 termina tracking-[0.2em]
                ${theme === 'dark' ? 'text-[#eae5df]' : 'text-[#2c2a28]'}`}
              >
                ANÁLISIS DE VULNERABILIDADES
              </h3>
              <p className={`font-light
                ${theme === 'dark' ? 'text-[#8b9696]' : 'text-[#672421]'}`}
              >
                Metodologías y herramientas para identificar y evaluar vulnerabilidades en sistemas.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`p-8 border rounded-3xl group
                ${theme === 'dark'
                  ? 'border-[#8b9696]/20 hover:border-[#8b9696]'
                  : 'border-[#672421]/20 hover:border-[#672421]'
                }`}
            >
              <h3 className={`text-xl font-bold mb-4 termina tracking-[0.2em]
                ${theme === 'dark' ? 'text-[#eae5df]' : 'text-[#2c2a28]'}`}
              >
                PENTESTING
              </h3>
              <p className={`font-light
                ${theme === 'dark' ? 'text-[#8b9696]' : 'text-[#672421]'}`}
              >
                Técnicas avanzadas de penetration testing y ethical hacking.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={`p-8 border rounded-3xl group
                ${theme === 'dark'
                  ? 'border-[#8b9696]/20 hover:border-[#8b9696]'
                  : 'border-[#672421]/20 hover:border-[#672421]'
                }`}
            >
              <h3 className={`text-xl font-bold mb-4 termina tracking-[0.2em]
                ${theme === 'dark' ? 'text-[#eae5df]' : 'text-[#2c2a28]'}`}
              >
                SEGURIDAD DEFENSIVA
              </h3>
              <p className={`font-light
                ${theme === 'dark' ? 'text-[#8b9696]' : 'text-[#672421]'}`}
              >
                Estrategias y herramientas para proteger sistemas y redes contra amenazas.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 