'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const modules = [
  {
    title: '1. Introducción a la Seguridad de la Información',
    topics: [
      '¿Qué es la ciberseguridad?.',
      'Principios clave, tipos de amenazas, clasificación de ciberataques.',
      'Modelos de defensa.',
      'Introducción a roles en ciberseguridad.',
      'Gestión de proyectos y documentación.',
      'Metodologías ágiles vs tradicionales.',
      'Introducción a la documentación técnica.',
    ]
  },
  {
    title: '2. Análisis y Recolección de Información (OSINT)',
    topics: [
      'Introducción a OSINT: definición, historia y aplicaciones.',
      'Tipos de fuentes (web, registros públicos, medios, académicas).',
      'OSINT en seguridad informática (Pentesting, Red Team, Threat Intel).',
      'Metodología y flujo de trabajo en OSINT.',
      'Herramientas y técnicas (búsqueda, redes sociales, metadatos).',
      'Repositorios y recursos útiles.',
      'Consideraciones éticas y legales.',
    ]
  },
  {
    title: '3. Awareness y Cultura de Seguridad',
    topics: [
      '¿Qué es la concientización en ciberseguridad?.',
      'Ingeniería social.',
      'Campañas de concientización internas.',
      'Buenas prácticas para usuarios finales.',
      'Simulaciones de phishing y métricas de efectividad.',
      'Cultura organizacional de seguridad.',
    ]
  },
  {
    title: '4. Gestión de Identidades y Accesos (IAM)',
    topics: [
      'Introducción y componentes clave.',
      'Métodos de autenticación.',
      'Modelos de permisos.',
      'Administración del ciclo de vida de identidades.',
      'Implementación de IAM.',
      'Directorios y proveedores.',
      'IAM en la nube.',
      'Auditoría y cumplimiento.',
      'Respuesta a incidentes.',
    ]
  },
  {
    title: '5. Gobierno, Riesgo y Cumplimiento (GRC)',
    topics: [
      '¿Qué es GRC?.',
      'Marco de control ISO 27001.',
      'Frameworks complementarios.',
      'Identificación y evaluación de riesgos.',
      'Matriz de riesgos y tratamiento.',
      'Cumplimiento normativo.',
      'Gap analysis y auditorías internas.',
      'Rol del analista GRC.',
      'Gestión documental.',
    ]
  },
  {
    title: '6. Gestión de Vulnerabilidades',
    topics: [
      '¿Qué es una vulnerabilidad? Tipos comunes.',
      'Ciclo de gestión.',
      'Scanners.',
      'Priorización: CVSS, contexto, criticidad.',
      'Vulnerability Disclosure Programs.',
      'Coordinación con desarrollo y sistemas.',
    ]
  },
  {
    title: '7. Armado de Entornos de Seguridad y Laboratorios',
    topics: [
      'Introducción a la virtualización.',
      'Hipervisores y snapshots.',
      'Diseño de laboratorio (redes, hardware, topologías).',
      'Fundamentos de redes y seguridad infra.',
      'Admin básica de Windows y Linux.',
      'Explotación de vulnerabilidades.',
      'Malware y amenazas reales.',
      'Herramientas: Metasploit, Nessus.',
      'Buenas prácticas.',
    ]
  },
  {
    title: '8. Introducción al Ethical Hacking',
    topics: [
      'Introducción y objetivos del hacking ético.',
      'Tipos de pruebas y fases.',
      'Herramientas.',
      'Gestión de evidencia y resultados.',
      'Código de ética profesional.',
      'Simulación práctica en entorno controlado.',
      'Pentesting interno vs externo.',
    ]
  },
  {
    title: '9. Desarrollo Seguro y DevSecOps',
    topics: [
      '¿Qué es desarrollo seguro? DevSecOps vs tradicional.',
      'Ciclo SSDLC y controles por fase.',
      'OWASP Top 10 aplicado.',
      'Checklist de código seguro.',
      'Principios de diseño seguro.',
      'Seguridad en CI/CD.',
      'Seguridad en IaC (Terraform, Ansible).',
      'Caso práctico de pipeline.',
      'Tips de colaboración Dev + Sec.',
    ]
  },
  {
    title: '10. Inserción Laboral en IT',
    topics: [
      '¿Cómo piensan los recruiters IT?.',
      'Cómo destacarte: CV técnico y perfil LinkedIn.',
      'Entrevistas: antes, durante y después.',
      'Marca profesional y visibilidad.',
      'Consejos finales y Q&A.',
    ]
  },
];

export default function CoursePage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [paymentType, setPaymentType] = useState<'monthly' | 'total'>('monthly');
  const [tab, setTab] = useState<'programa' | 'equipo' | 'pago'>('programa');
  const [expandedBio, setExpandedBio] = useState<string | null>(null);
  const teamMembers = [
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
      {/* Banner de inicio */}
      <div className="container mx-auto px-8 pt-32">
        <div className="w-full max-w-6xl mx-auto mb-12">
          <div className="flex items-center justify-center bg-[#181A20] border border-[#8b9696] rounded-2xl py-6 px-8 shadow-sm">
            <span className="text-base md:text-lg text-[#8b9696] font-semibold text-center">INICIO EN JUNIO</span>
          </div>
        </div>
        {/* Tabs */}
        <div className="w-full max-w-6xl mx-auto mb-12">
          <div className="flex justify-center gap-2 bg-[#181A20] rounded-xl p-2 border border-[#23242a]">
            <button onClick={() => setTab('programa')} className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 text-base md:text-lg ${tab === 'programa' ? 'bg-[#8b9696] text-white shadow' : 'text-[#8b9696] hover:bg-[#23242a]'}`}>Programa</button>
            <button onClick={() => setTab('equipo')} className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 text-base md:text-lg ${tab === 'equipo' ? 'bg-[#8b9696] text-white shadow' : 'text-[#8b9696] hover:bg-[#23242a]'}`}>Equipo docente</button>
            <button onClick={() => setTab('pago')} className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 text-base md:text-lg ${tab === 'pago' ? 'bg-[#8b9696] text-white shadow' : 'text-[#8b9696] hover:bg-[#23242a]'}`}>Medios de pago</button>
          </div>
        </div>
        {/* Tab content */}
        <div className="w-full max-w-6xl mx-auto">
          {tab === 'programa' && (
            <>
              <h2 className="text-2xl md:text-4xl font-bold uppercase mb-12 text-center" style={{ fontFamily: 'Museo Sans, Museo, Arial, sans-serif', fontWeight: 700, letterSpacing: 0, textShadow: 'none', color: '#fff' }}>PROGRAMA</h2>
              <div className="flex flex-col gap-6">
                {modules.map((mod, idx) => (
                  <div key={mod.title} className="rounded-2xl border border-[#23242a] bg-[#181A20] shadow-md">
                    <button
                      className="w-full text-left px-6 py-5 flex justify-between items-center text-xl font-semibold text-white focus:outline-none"
                      onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                      aria-expanded={openIndex === idx}
                      aria-controls={`module-content-${idx}`}
                    >
                      <span>{mod.title}</span>
                      <svg
                        className={`w-6 h-6 text-[#bdbdbd] transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div
                      id={`module-content-${idx}`}
                      className={`px-6 transition-all duration-300 ease-in-out overflow-hidden ${openIndex === idx ? 'py-4 max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                      <ul className="list-disc ml-6 text-[#bdbdbd] space-y-1">
                        {mod.topics.map((t, i) => <li key={i}>{t}</li>)}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-16">
                <Link
                  href="/inscripcion"
                  className="px-8 py-4 bg-white text-[#111216] font-semibold rounded-xl border border-white shadow-sm hover:bg-transparent hover:text-white hover:border-white transition-all duration-200 text-lg"
                >
                  INSCRIBITE AHORA
                </Link>
              </div>
            </>
          )}
          {tab === 'equipo' && (
            <>
              <h2 className="text-2xl md:text-4xl font-bold uppercase mb-12 text-center" style={{ fontFamily: 'Museo Sans, Museo, Arial, sans-serif', fontWeight: 700, letterSpacing: 0, textShadow: 'none', color: '#fff' }}>EQUIPO DOCENTE</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, idx) => (
                  <div
                    key={member.name}
                    className="rounded-2xl border border-[#23242a] bg-[#181A20] transition-all duration-300 hover:shadow-lg p-6 flex flex-col"
                  >
                    <div className="aspect-[4/3] relative mb-4">
                      {member.imageUrl ? (
                        <img
                          src={member.imageUrl}
                          alt={member.name}
                          className="object-cover rounded-xl w-full h-full"
                          style={{ aspectRatio: '4/3', objectFit: 'cover' }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-[#23242a] rounded-xl text-[#bdbdbd] text-4xl">
                          <span>{member.name[0]}</span>
                        </div>
                      )}
                    </div>
                    <h2 className="text-lg md:text-xl font-semibold mb-1 text-[#bdbdbd]">{member.name}</h2>
                    <p className="text-xs md:text-sm text-[#bdbdbd] mb-2">{member.role}</p>
                    <div className="relative">
                      <p className={`text-xs md:text-sm ${expandedBio === member.name ? '' : 'line-clamp-3'}`}>
                        {member.bio.split('\n').map((line, i) => <span key={i}>{line}<br /></span>)}
                      </p>
                      <button
                        onClick={() => setExpandedBio(expandedBio === member.name ? null : member.name)}
                        className="text-[#8b9696] text-sm mt-2 hover:underline"
                      >
                        {expandedBio === member.name ? 'Leer menos' : 'Leer más'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-20 text-center mb-16">
                <h2 className="text-2xl mb-6">¿Querés tener tu propio curso en nuestra academia?</h2>
                <a 
                  href="mailto:contact@hecatesecurity.com"
                  className="px-8 py-4 bg-[#8b9696] text-white font-semibold rounded-xl border border-[#8b9696] shadow-sm hover:bg-[#6b7a7a] hover:text-white hover:border-[#6b7a7a] transition-all duration-200"
                >
                  Contactanos
                </a>
              </div>
            </>
          )}
          {tab === 'pago' && (
            <>
              <h2 className="text-2xl md:text-4xl font-bold uppercase mb-12 text-center" style={{ fontFamily: 'Museo Sans, Museo, Arial, sans-serif', fontWeight: 700, letterSpacing: 0, textShadow: 'none', color: '#fff' }}>MEDIOS DE PAGO</h2>
              {/* Switch de precios */}
              <div className="flex justify-center gap-2 mb-12">
                <button
                  onClick={() => setPaymentType('monthly')}
                  className={`px-6 py-2 rounded-full text-base font-medium transition-colors duration-200
                    ${paymentType === 'monthly'
                      ? 'bg-[#8b9696] text-white border border-[#8b9696] shadow'
                      : 'bg-[#181A20] text-[#8b9696] border border-[#23242a]'}
                  `}
                >
                  MENSUAL
                </button>
                <button
                  onClick={() => setPaymentType('total')}
                  className={`px-6 py-2 rounded-full text-base font-medium transition-colors duration-200
                    ${paymentType === 'total'
                      ? 'bg-[#8b9696] text-white border border-[#8b9696] shadow'
                      : 'bg-[#181A20] text-[#8b9696] border border-[#23242a]'}
                  `}
                >
                  TOTAL
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* USD/CRYPTO */}
                <div className="bg-[#181A20] border border-[#8b9696] rounded-2xl p-8 flex flex-col items-center shadow-lg hover:shadow-2xl transition">
                  <h3 className="text-lg font-bold mb-2 text-white">USD / CRYPTO</h3>
                  <div className="mb-6 text-center">
                    {paymentType === 'monthly' ? (
                      <>
                        <span className="block text-lg text-[#bdbdbd] line-through mb-1">$210 USD mensual</span>
                        <span className="block text-2xl font-bold text-[#8b9696] mb-1">$150 USD</span>
                      </>
                    ) : (
                      <>
                        <span className="block text-lg text-[#bdbdbd] line-through mb-1">$1,250 USD</span>
                        <span className="block text-2xl font-bold text-[#8b9696] mb-1">$900 USD</span>
                      </>
                    )}
                  </div>
                  <a href="/inscripcion?currency=usd" className="w-full text-center px-6 py-3 rounded-xl bg-[#8b9696] text-white font-semibold hover:bg-[#6b7a7a] transition">Inscribirme</a>
                </div>
                {/* ARS */}
                <div className="bg-[#181A20] border border-[#8b9696] rounded-2xl p-8 flex flex-col items-center shadow-lg hover:shadow-2xl transition">
                  <h3 className="text-lg font-bold mb-2 text-white">ARS</h3>
                  <div className="mb-6 text-center">
                    {paymentType === 'monthly' ? (
                      <>
                        <span className="block text-lg text-[#bdbdbd] line-through mb-1">250.000 ARS mensual</span>
                        <span className="block text-2xl font-bold text-[#8b9696] mb-1">190.000 ARS</span>
                      </>
                    ) : (
                      <>
                        <span className="block text-lg text-[#bdbdbd] line-through mb-1">1.500.000 ARS</span>
                        <span className="block text-2xl font-bold text-[#8b9696] mb-1">1.125.000 ARS</span>
                      </>
                    )}
                  </div>
                  <a href="/inscripcion?currency=ars" className="w-full text-center px-6 py-3 rounded-xl bg-[#8b9696] text-white font-semibold hover:bg-[#6b7a7a] transition">Inscribirme</a>
                </div>
                {/* Corporativo */}
                <div className="bg-[#181A20] border border-[#8b9696] rounded-2xl p-8 flex flex-col items-center shadow-lg hover:shadow-2xl transition">
                  <h3 className="text-lg font-bold mb-2 text-white">Corporativo</h3>
                  <div className="mb-6 text-center">
                    <span className="block text-2xl font-bold text-[#8b9696]">Consultar</span>
                  </div>
                  <a href="/contacto" className="w-full text-center px-6 py-3 rounded-xl bg-[#8b9696] text-white font-semibold hover:bg-[#6b7a7a] transition">Contactar</a>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}