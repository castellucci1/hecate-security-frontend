export default function Testimonials() {
  const testimonials = [
    {
      quote: "La formación en Hécate Security Academy ha sido transformadora. Los conceptos complejos se explican de manera clara y práctica.",
      author: "María González",
      role: "Analista de Seguridad",
      company: "TechSec"
    },
    {
      quote: "El enfoque práctico y los laboratorios son exactamente lo que necesitaba para mejorar mis habilidades en ciberseguridad.",
      author: "Carlos Ruiz",
      role: "Pentester",
      company: "SecureNet"
    },
    {
      quote: "Los instructores son expertos en su campo y el material del curso está siempre actualizado con las últimas tendencias.",
      author: "Ana Martínez",
      role: "CISO",
      company: "DataGuard"
    }
  ];

  return (
    <section className="py-20 px-4 bg-[#2c2a28]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-[#fbf7f5] text-center mb-16">
          Lo que dicen nuestros estudiantes
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl border border-[#eae5df]/10 bg-[#2c2a28]/50 hover:border-[#672421]/50 transition-all"
            >
              <svg className="w-8 h-8 text-[#672421] mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-[#eae5df] mb-6 text-lg">
                {testimonial.quote}
              </p>
              <div>
                <p className="text-[#fbf7f5] font-medium">{testimonial.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 