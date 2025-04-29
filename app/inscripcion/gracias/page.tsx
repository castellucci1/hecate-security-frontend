'use client';

export default function GraciasPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-32 text-center">
      <div className="bg-[#672421] bg-opacity-10 text-[#672421] px-4 py-1 rounded-full text-sm mb-4 inline-block">
        ¡Inscripción Completada!
      </div>
      <h1 className="text-4xl font-termina text-[#2c2a28] dark:text-[#eae5df] mb-6">
        ¡Gracias por inscribirte!
      </h1>
      <p className="text-[#8b9696] mb-8 text-lg">
        Te vamos a contactar con los próximos pasos. Por favor, revisá tu correo (y el spam, por las dudas).
      </p>
      <p className="text-[#8b9696]">
        Si tenés alguna duda, podés escribirnos a{' '}
        <a href="mailto:hola@hecatesecurity.com" className="text-[#672421] hover:underline dark:text-[#8b9696]">
          hola@hecatesecurity.com
        </a>
      </p>
    </main>
  );
} 