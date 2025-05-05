import Link from 'next/link';

export default function CursosPage() {
  return (
    <div className="min-h-screen bg-[#111216] text-white flex flex-col items-center py-32" style={{ fontFamily: 'Termina, Arial, sans-serif' }}>
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-16" style={{ fontFamily: 'Bodoni 72, serif', textShadow: '0 1px 8px rgba(0,0,0,0.18)' }}>Nuestros Cursos</h1>
      <div className="flex flex-col md:flex-row justify-center gap-20 w-full max-w-6xl">
        {/* Curso activo */}
        <div className="relative rounded-3xl bg-[#181A20] border border-[#23242a] shadow-lg flex flex-col items-center p-4 md:p-8 group transition-all duration-300 hover:scale-105 max-w-xl w-full">
          <img 
            src="/images/curso-analista.jpg"
            alt="Analista de Seguridad de la Información"
            className="w-full h-48 object-cover rounded-2xl mb-4 shadow-lg"
            style={{ maxWidth: '480px' }}
          />
          <span 
            className="text-xl md:text-2xl font-bold termina text-white mb-2 text-center block tracking-normal leading-snug max-w-xs mx-auto break-words"
            style={{ fontFamily: 'Termina, Arial, sans-serif', fontWeight: 700, letterSpacing: 0, textShadow: 'none' }}
          >
            Analista de Seguridad<br />de la Información
          </span>
          <div className="text-sm md:text-base text-[#e0e0e0] text-center mb-6 max-w-xs mx-auto flex flex-col gap-2" style={{ fontFamily: 'Bodoni 72, serif', lineHeight: '1.7' }}>
            <div>
              Bootcamp de 6 meses diseñado y dictado por profesionales.
              <br />
              Ideal para quienes buscan insertarse en el sector con una mirada generalista sobre la Seguridad de la Información.
            </div>
            <div>
              100% virtual.<br />
              Clases teóricas asincrónicas (3hs)<br />
              Prácticas autogestionadas (1:30 hs)<br />
              Sesiones de Q&A (2hs)<br />
              Contenido semanal.
            </div>
          </div>
          <div className="flex justify-center w-full">
            <Link href="/curso">
              <span className="block text-center termina tracking-[0.2em] px-8 py-3 rounded-lg bg-[#8b9696] text-white font-semibold border border-[#8b9696] shadow-sm hover:bg-[#6b7a7a] hover:text-white hover:border-[#6b7a7a] transition-all duration-200" style={{ fontFamily: 'Termina, Arial, sans-serif', fontWeight: 700 }}>Ver más</span>
            </Link>
          </div>
        </div>
        {/* Curso próximo */}
        <div className="relative rounded-3xl bg-[#181A20] border border-[#23242a] shadow-lg flex flex-col items-center p-4 md:p-8 opacity-60 blur-[1px] cursor-not-allowed max-w-xl w-full">
          <div className="w-full h-48 bg-gradient-to-br from-[#8b9696]/20 to-[#23242a] rounded-2xl mb-4 flex items-center justify-center">
            <span className="text-3xl md:text-4xl font-bold termina text-white/80" style={{ fontFamily: 'Termina, Arial, sans-serif', fontWeight: 700 }}>Próximamente</span>
          </div>
          <p className="arise-text text-center mb-6" style={{ fontFamily: 'Bodoni 72, serif' }}>Nuevo curso en desarrollo.</p>
          <div className="flex gap-4 w-full">
            <span className="block w-full text-center termina tracking-[0.2em] px-8 py-3 rounded-lg bg-[#23242a] text-[#8b9696] font-semibold border border-[#23242a] shadow-sm cursor-not-allowed" style={{ fontFamily: 'Termina, Arial, sans-serif', fontWeight: 700 }}>Próximamente</span>
          </div>
        </div>
      </div>
    </div>
  );
} 