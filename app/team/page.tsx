'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext'
import FadeIn from '../components/FadeIn'

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export default function TeamPage() {
  const [expandedBio, setExpandedBio] = useState<string | null>(null);
  const { theme } = useTheme();

  const teamMembers: TeamMember[] = [
    {
      name: "Ailin Castellucci",
      role: "Founder y CEO",
      bio: "Founder y CEO de Hécate Security. Actualmente trabaja como Hacking Community Builder en Strike, donde impulsa el crecimiento de la comunidad de Strikers. Es profesora titular en la Facultad de Derecho de la UBA, donde enseña Ciberseguridad en el posgrado en Cibercrimen.\n\nA lo largo de su carrera lideró iniciativas clave en empresas como Mercado Libre —donde gestionó el programa de bug bounty en seis países y co-creó la Meli Bug Bounty Academy—, Lemon, donde creó y lideró el equipo de seguridad, y Banco Galicia, donde formó parte del equipo de Red Team y desarrolló programas internos de formación.",
      imageUrl: "/images/team/ailin.jpeg"
    },
    {
      name: "Ken Bro",
      role: "Security Researcher",
      bio: "Eterno aprendiz - Ansiosamente curioso - Desarrollador apasionado - Researcher anónimo - Amante de los datos (sus datos) - Protector de mi privacidad - Impostor. Seguridad informática - OSINT - Inteligencia Artificial - Blockchain. Creador de iKy (OSINT Tool) - PoorSKeme y TracKenn (OSINT Blockchain)",
      imageUrl: "/images/team/ken.png"
    },
    {
      name: "Daniel Isler",
      role: "Consultor Senior de Ingeniería Social",
      bio: "Consultor senior de ingeniería social en Dreamlab Technologies, liderando el equipo Fr1endly RATs. Con formación en artes escénicas y especialización en improvisación, ha desarrollado técnicas innovadoras en phishing, vishing y pretexting. Ha sido ponente en conferencias como DEF CON y Ekoparty, donde combina storytelling con tácticas de ingeniería social.",
      imageUrl: "/images/team/daniel.jpeg"
    },
    {
      name: "Luis Mazzoni",
      role: "Cyber Security Architect",
      bio: "Especialista en ciberseguridad con más de una década de experiencia. Actualmente se desempeña como Cyber Security Architect en Prisma Medios de Pago, donde lidera iniciativas de arquitectura de seguridad para soluciones de pagos digitales.\n\nPreviamente, trabajó durante más de siete años en Banco Galicia, donde ocupó distintos roles estratégicos como Coordinador del SOC y Líder de Gestión de Identidades. También fue Security Engineer en ank y profesor adjunto en la Universidad de Palermo en Auditoría y Seguridad Informática. Es Licenciado en Informática por la UADE.",
      imageUrl: "/images/team/luis.jpeg"
    },
    {
      name: "Karen Collante",
      role: "Experta en GRC",
      bio: "Experta en GRC y ciberseguridad con foco pleno en los negocios. Con más de una década de experiencia asesorando a startups, fintechs, organismos públicos y empresas reguladas en América Latina, se convirtió en una referente en el diseño de estrategias de cumplimiento que no frenan, sino que potencian.\n\nDirectora y Creadora en Brotek, empresa de ciberseguridad y cumplimiento normativo que brinda tecnología, automatización y visión estratégica. Speaker en conferencias como ISACA, Ekoparty, Kavacon, Cybersecure Nation Conference e Innovación Latam.",
      imageUrl: "/images/team/karen.jpeg"
    },
    {
      name: "Manuel Ovejas",
      role: "Ingeniero en Ciberseguridad",
      bio: "Ingeniero en ciberseguridad con más de 6 años de experiencia, actualmente en Mercado Libre. Ha participado en iniciativas de formación en Henry, compartiendo su conocimiento en seguridad informática. Egresado de la Universidad del Salvador, se destaca por su compromiso con la educación y la protección de sistemas digitales.",
      imageUrl: "/images/team/manuel.jpeg"
    },
    {
      name: "Matias Armandola",
      role: "Especialista en GRC",
      bio: "Especialista en ciberseguridad con más de 20 años de experiencia en el sector IT. Actualmente lidera el área de GRC en Safe-U, enfocado en la concientización y prevención de pérdida de datos. Ha impartido clases en Coderhouse y Ekoparty, y ha sido orador en conferencias como Nerdearla y Argentesting. Con formación en Ciencias de la Comunicación, combina su pasión por la seguridad con habilidades de comunicación efectiva.",
      imageUrl: "/images/team/matias.jpeg"
    },
    {
      name: "Gabriel Franco",
      role: "Head of Security Services",
      bio: "Gabriel Franco es Head of Security Services en Faraday y docente en la Universidad de Buenos Aires. Lidera equipos de Red Team y consultoría, combinando su experiencia práctica con la formación académica para formar a la próxima generación de profesionales en ciberseguridad.",
      imageUrl: "/images/team/gabriel.jpeg"
    },
    {
      name: "Axel Labruna",
      role: "Arquitecto de Soluciones",
      bio: "Axel Glabruna es Arquitecto de Soluciones en Nubiral y embajador del DevOps Institute, con más de 10 años de experiencia en entornos de desarrollo seguro, automatización e infraestructura escalable.\n\nDurante su paso por Baufest lideró la práctica de DevOps & Cloud, desarrollando soluciones tecnológicas end to end para clientes regionales y globales. Fue clave en la adopción de metodologías ágiles, integración de análisis SAST y DAST en pipelines, y diseño de arquitecturas en Azure y AWS.",
      imageUrl: "/images/team/axel.jpeg"
    },
    {
      name: "Angeles Donelly",
      role: "Regional Talent Partner Manager",
      bio: "Ángeles Donnelly es una profesional de Recursos Humanos con una sólida trayectoria en el sector tecnológico y fintech. Actualmente se desempeña como Regional Talent Partner Manager en Pomelo, donde lidera estrategias de atracción y desarrollo de talento en América Latina. Previamente, formó parte del equipo de Mercado Libre, contribuyendo al crecimiento de uno de los equipos de producto y tecnología más dinámicos de la región.",
      imageUrl: "/images/team/angeles.jpeg"
    }
  ];

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-[#2c2a28] text-[#eae5df]' : 'bg-white text-[#2c2a28]'}`}>
      <div className="container section-spacing">
        <FadeIn>
          <h1 className="text-5xl termina font-bold text-center mb-8">
            Nuestro Equipo
          </h1>
          <p className="text-xl text-[#8b9696] max-w-2xl mx-auto text-center mb-16">
            Nuestro curso está diseñado y dictado por expertos comprometidos con tu aprendizaje.
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <FadeIn key={member.name} delay={idx * 0.1}>
              <div
                className={`card transition-all duration-300 hover:shadow-lg
                  ${theme === 'dark'
                    ? 'bg-[#23211e] border border-[#eae5df]/10'
                    : 'bg-white border border-[#672421]/10'
                  }`}
              >
                <div className="aspect-[4/3] relative mb-4">
                  {member.imageUrl ? (
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      fill
                      className="object-cover rounded-xl"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      unoptimized
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-[#8b9696]/10 rounded-xl text-[#8b9696] text-4xl">
                      <span>{member.name[0]}</span>
                    </div>
                  )}
                </div>
                <h2 className="text-xl termina font-semibold mb-1 text-[#8b9696]">{member.name}</h2>
                <p className="text-mystic-maze mb-2">{member.role}</p>
                <div className="relative">
                  <p className={`body-text text-sm ${expandedBio === member.name ? '' : 'line-clamp-3'}`}>
                    {member.bio}
                  </p>
                  <button
                    onClick={() => setExpandedBio(expandedBio === member.name ? null : member.name)}
                    className="text-mystic-maze text-sm mt-2 hover:underline"
                  >
                    {expandedBio === member.name ? 'Leer menos' : 'Leer más'}
                  </button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.5}>
          <div className="mt-20 text-center">
            <h2 className="text-2xl termina mb-6">
              ¿Querés tener tu propio curso en nuestra academia?
            </h2>
            <a 
              href="mailto:contact@hecatesecurity.com"
              className="btn-primary"
            >
              Contactanos
            </a>
          </div>
        </FadeIn>
      </div>
    </div>
  );
} 