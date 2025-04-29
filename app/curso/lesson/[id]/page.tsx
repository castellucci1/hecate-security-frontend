'use client';

import { useState } from 'react';

export default function LessonPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Example lesson data - replace with your actual content
  const lessonData = {
    title: "Introducción a la Seguridad",
    vimeoId: "YOUR_VIDEO_ID", // Replace with actual Vimeo ID
    description: "En esta lección introductoria, exploraremos los conceptos fundamentales de la seguridad de la información...",
    module: "Módulo 1",
    duration: "15 minutos",
    resources: [
      { title: "Guía de la lección", type: "pdf", url: "#" },
      { title: "Código de ejemplo", type: "code", url: "#" }
    ]
  };

  return (
    <main className="min-h-screen bg-[#2c2a28]">
      {/* Course Header */}
      <div className="border-b border-[#eae5df]/10 mt-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="py-4">
            <p className="text-[#eae5df]/60 text-sm">{lessonData.module}</p>
            <h1 className="text-[#fbf7f5] text-xl font-semibold">{lessonData.title}</h1>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid md:grid-cols-12 gap-6">
          {/* Main Content */}
          <div className="md:col-span-8">
            {/* Video Player */}
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              <iframe
                src={`https://player.vimeo.com/video/${lessonData.vimeoId}`}
                allow="autoplay; fullscreen; picture-in-picture"
                className="w-full h-full"
              />
            </div>

            {/* Lesson Description */}
            <div className="mt-6">
              <div className="bg-[#2c2a28] border border-[#eae5df]/10 rounded-lg p-6">
                <h2 className="text-[#fbf7f5] text-lg font-semibold mb-2">
                  Descripción de la lección
                </h2>
                <p className="text-[#eae5df]">
                  {lessonData.description}
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-4">
            <div className="bg-[#2c2a28] border border-[#eae5df]/10 rounded-lg p-6">
              <h3 className="text-[#fbf7f5] font-semibold mb-4">
                Contenido del módulo
              </h3>
              
              {/* Course Navigation */}
              <nav className="space-y-2">
                <button className="w-full flex items-center justify-between p-3 rounded bg-[#672421]/20 text-[#fbf7f5]">
                  <span>1. Introducción</span>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed bottom-4 right-4 md:hidden bg-[#672421] text-[#fbf7f5] p-4 rounded-full shadow-lg"
      >
        {isMenuOpen ? 'Cerrar' : 'Menú'}
      </button>
    </main>
  );
} 