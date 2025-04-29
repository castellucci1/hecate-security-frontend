export default function CourseOutline() {
  const modules = [
    {
      number: 1,
      title: "Fundamentos de Ciberseguridad",
      lessons: [
        "Introducción a la seguridad informática",
        "Principios básicos de redes",
        "Criptografía fundamental",
        "Gestión de riesgos"
      ]
    },
    {
      number: 2,
      title: "Hacking Ético",
      lessons: [
        "Metodologías de pentesting",
        "Reconocimiento y enumeración",
        "Explotación de vulnerabilidades",
        "Post-explotación"
      ]
    },
    {
      number: 3,
      title: "Seguridad Ofensiva Avanzada",
      lessons: [
        "Análisis de malware",
        "Ingeniería inversa",
        "Explotación avanzada",
        "Técnicas de evasión"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-[#2c2a28]/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-[#fbf7f5] text-center mb-16">
          Estructura del Curso
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {modules.map((module) => (
            <div
              key={module.number}
              className="p-8 rounded-2xl border border-[#eae5df]/10 bg-[#2c2a28] hover:border-[#672421]/50 transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-12 flex items-center justify-center bg-[#672421] text-[#fbf7f5] rounded-full text-xl font-bold">
                  {module.number}
                </span>
                <h3 className="text-xl font-bold text-[#fbf7f5]">
                  {module.title}
                </h3>
              </div>
              <ul className="space-y-4">
                {module.lessons.map((lesson, index) => (
                  <li key={index} className="flex items-center gap-3 text-[#eae5df]">
                    <svg className="w-5 h-5 text-[#672421]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {lesson}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 