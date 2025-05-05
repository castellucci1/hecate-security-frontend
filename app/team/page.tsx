'use client';

import Image from 'next/image';
import React, { useState } from 'react';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export default function TeamPage() {
  const [expandedBio, setExpandedBio] = useState<string | null>(null);

  const teamMembers: TeamMember[] = [
    {
      name: "Ailin Castellucci",
      role: "Founder y CEO",
      bio: `Founder y CEO de Hécate Security. Actualmente trabaja como Hacking Community Builder en Strike, donde impulsa el crecimiento de la comunidad de Strikers. Es profesora titular en la Facultad de Derecho de la UBA, donde enseña Ciberseguridad en el posgrado en Cibercrimen.\n\nA lo largo de su carrera lideró iniciativas clave en empresas como Mercado Libre —donde gestionó el programa de bug bounty en seis países y co-creó la Meli Bug Bounty Academy—, Lemon, donde creó y lideró el equipo de seguridad, y Banco Galicia, donde formó parte del equipo de Red Team y desarrolló programas internos de formación.`,
      imageUrl: "/images/team/ailin.jpeg"
    },
    {
      name: "Kenn Bro",
      role: "Security Researcher",
      bio: `Eterno aprendiz - Ansiosamente curioso - Desarrollador apasionado - Researcher anónimo - Amante de los datos (sus datos) - Protector de mi privacidad - Impostor\nSeguridad informática - OSINT - Inteligencia Artificial - Blockchain\nCreador de iKy (OSINT Tool) - PoorSKeme y TracKenn (OSINT Blockchain)`,
      imageUrl: "/images/team/ken.png"
    },
    {
      name: "Franco Lenzo",
      role: "Especialista en Ciberseguridad",
      bio: `Franco Lenzo es especialista en ciberseguridad con una sólida trayectoria en la protección de entornos digitales complejos. Ex Mercado Libre y ex MODO, ha liderado proyectos de identidad digital, gobernanza de accesos, seguridad en la nube. Con experiencia en el desarrollo de soluciones IAM, detección de amenazas, automatización de procesos de seguridad y cumplimiento normativo, Franco combina una mirada técnica con foco en la experiencia del usuario y la eficiencia operativa.\n\nActualmente impulsa una herramienta de gestión de identidades (IDM) propia y colabora con empresas brindando servicios de consultoria de identidades. Además, tiene una activa participación en la formación de nuevos talentos como profesor de ciberseguridad y genera contenido técnico en plataformas como Medium para concientizar y profesionalizar el sector.`,
      imageUrl: "/images/team/daniel.jpeg"
    },
    {
      name: "Luis Mazzoni",
      role: "Cyber Security Architect",
      bio: `Especialista en ciberseguridad con más de una década de experiencia. Actualmente se desempeña como Cyber Security Architect en Prisma Medios de Pago, donde lidera iniciativas de arquitectura de seguridad para soluciones de pagos digitales.\n\nPreviamente, trabajó durante más de siete años en Banco Galicia, donde ocupó distintos roles estratégicos como Coordinador del SOC y Líder de Gestión de Identidades. También fue Security Engineer en ank y profesor adjunto en la Universidad de Palermo en Auditoría y Seguridad Informática. Es Licenciado en Informática por la UADE.`,
      imageUrl: "/images/team/luis.jpeg"
    },
    {
      name: "Karen Collante",
      role: "Experta en GRC",
      bio: `Experta en GRC y ciberseguridad con foco pleno en los negocios. Con más de una década de experiencia asesorando a startups, fintechs, organismos públicos y empresas reguladas en América Latina, se convirtió en una referente en el diseño de estrategias de cumplimiento que no frenan, sino que potencian.\n\nDirectora y Creadora en Brotek, empresa de ciberseguridad y cumplimiento normativo que brinda tecnología, automatización y visión estratégica. Speaker en conferencias como ISACA, Ekoparty, Kavacon, Cybersecure Nation Conference e Innovación Latam.\n\nTiene un estilo pragmático, sin vueltas y una visión clara: que la seguridad y el compliance dejen de ser temas técnicos aislados y pasen a ser motores del negocio.`,
      imageUrl: "/images/team/karen.jpeg"
    },
    {
      name: "Manuel Ovejas",
      role: "Ingeniero en Ciberseguridad",
      bio: `Ingeniero en ciberseguridad con más de 6 años de experiencia, actualmente en Mercado Libre. Ha participado en iniciativas de formación en Henry, compartiendo su conocimiento en seguridad informática. Egresado de la Universidad del Salvador, se destaca por su compromiso con la educación y la protección de sistemas digitales.`,
      imageUrl: "/images/team/manuel.jpeg"
    },
    {
      name: "Matias Armandola",
      role: "Especialista en GRC",
      bio: `Especialista en ciberseguridad con más de 20 años de experiencia en el sector IT. Actualmente lidera el área de GRC en Safe-U, enfocado en la concientización y prevención de pérdida de datos. Ha impartido clases en Coderhouse y Ekoparty, y ha sido orador en conferencias como Nerdearla y Argentesting. Con formación en Ciencias de la Comunicación, combina su pasión por la seguridad con habilidades de comunicación efectiva.`,
      imageUrl: "/images/team/matias.jpeg"
    },
    {
      name: "Gabriel Franco",
      role: "Head of Security Services",
      bio: `Gabriel Franco es Head of Security Services en Faraday y docente en la Universidad de Buenos Aires. Lidera equipos de Seguridad Ofensiva y Research, combinando su experiencia práctica con la formación académica para formar a la próxima generación de profesionales en ciberseguridad.`,
      imageUrl: "/images/team/gabriel.jpeg"
    },
    {
      name: "Axel Labruna",
      role: "Consultor de Transformación Digital y Arquitecto de Soluciones de Negocio",
      bio: `Como consultor de Transformación Digital y Arquitecto de Soluciones de Negocio, Axel no sólo construye sistemas, construye futuros. Especializado en billeteras digitales y soluciones nativas en la nube de vanguardia, ha pasado años convirtiendo la complejidad en oportunidades para organizaciones de toda América Latina. Su carrera abarca roles impactantes liderando la innovación en arquitectura de software, DevSecOps e infraestructura como código, siempre con un ojo en la escalabilidad y la resiliencia. Un apasionado por la experiencia de los desarrolladores, ha llevado a innumerables equipos a adoptar prácticas modernas de ingeniería como entornos efímeros, Chaos Engineering, Secure Coding, FinOps y pipelines CI/CD seguros.\nReconocido por su trabajo innovación y lo que es posible con la tecnología, ha sido un orador destacado en eventos regionales como Ekoparty, DevOpsDays, Nerdearla, AWS Groups, entre otros.\nTambién es un mentor activo, colaborador en múltiples proyectos y un orgulloso miembro de comunidades centradas en GitHub, AWS, Seguridad e IA. Fuera del mundo de la tecnología, disfruta del entrenamiento funcional, barista aficionado, adicto al mate y padre soltero de un bulldog. También afirma que podría hablar de comida o perros durante más tiempo de lo que puede durar una maratón de Netflix -challenge accepted-.`,
      imageUrl: "/images/team/axel.jpeg"
    },
    {
      name: "Angeles Donelly",
      role: "Regional Talent Partner Manager",
      bio: `Ángeles Donnelly es una profesional de Recursos Humanos con una sólida trayectoria en el sector tecnológico y fintech. Actualmente se desempeña como Regional Talent Partner Manager en Pomelo, donde lidera estrategias de atracción y desarrollo de talento en América Latina. Previamente, formó parte del equipo de Mercado Libre, contribuyendo al crecimiento de uno de los equipos de producto y tecnología más dinámicos de la región.`,
      imageUrl: "/images/team/angeles.jpeg"
    }
  ];

  return (
    <div className="min-h-screen bg-[#111216] text-white" style={{ fontFamily: 'Inter, Arial, sans-serif' }}>
      <div className="container mx-auto px-8 py-32">
        <h1 className="text-5xl font-bold text-center mb-8">Nuestro Equipo</h1>
        <p className="text-xl text-[#bdbdbd] max-w-2xl mx-auto text-center mb-16">
            Nuestro curso está diseñado y dictado por expertos comprometidos con tu aprendizaje.
          </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <div
              key={member.name}
              className="rounded-2xl border border-[#23242a] bg-[#181A20] transition-all duration-300 hover:shadow-lg p-6 flex flex-col"
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
                  <div className="w-full h-full flex items-center justify-center bg-[#23242a] rounded-xl text-[#bdbdbd] text-4xl">
                      <span>{member.name[0]}</span>
                    </div>
                  )}
                </div>
              <h2 className="text-xl font-semibold mb-1 text-[#bdbdbd]">{member.name}</h2>
              <p className="text-[#bdbdbd] mb-2">{member.role}</p>
                <div className="relative">
                <p className={`text-sm ${expandedBio === member.name ? '' : 'line-clamp-3'}`}>
                    {member.bio}
                  </p>
                  <button
                    onClick={() => setExpandedBio(expandedBio === member.name ? null : member.name)}
                  className="text-[#bdbdbd] text-sm mt-2 hover:underline"
                  >
                    {expandedBio === member.name ? 'Leer menos' : 'Leer más'}
                  </button>
                </div>
              </div>
          ))}
        </div>
          <div className="mt-20 text-center">
          <h2 className="text-2xl mb-6">¿Querés tener tu propio curso en nuestra academia?</h2>
            <a 
              href="mailto:contact@hecatesecurity.com"
            className="px-8 py-4 bg-white text-[#111216] font-semibold rounded-xl border border-white shadow-sm hover:bg-transparent hover:text-white hover:border-white transition-all duration-200"
            >
              Contactanos
            </a>
          </div>
      </div>
    </div>
  );
} 