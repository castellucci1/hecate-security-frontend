'use client';

export default function PreInscriptionCTA() {
  return (
    <section className="py-32 bg-[#eae5df]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-[#2c2a28] mb-8">
          ¿Listo para comenzar tu viaje en ciberseguridad?
        </h2>
        <a 
          href="/waitlist"
          className="inline-block px-8 py-4 bg-[#672421] text-[#fbf7f5] rounded-lg hover:bg-[#2c2a28] transition-all duration-300"
        >
          Pre-inscripción
        </a>
      </div>
    </section>
  );
} 