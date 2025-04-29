export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#2c2a28] flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl font-bold text-[#fbf7f5] mb-6">
          ¡Gracias por pre-inscribirte!
        </h1>
        <p className="text-[#eae5df] mb-8">
          Te vamos a contactar con los próximos pasos. Revisá tu correo (y el spam, por las dudas).
        </p>
        <a 
          href="/"
          className="inline-block px-8 py-4 bg-[#672421] text-[#fbf7f5] rounded-full hover:bg-[#672421]/90 transition-all"
        >
          Volver al inicio
        </a>
      </div>
    </main>
  );
} 