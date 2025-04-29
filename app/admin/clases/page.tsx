'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ClasesPage() {
  const [activeLesson, setActiveLesson] = useState(1);
  const [activeTab, setActiveTab] = useState('video');

  const lessons = [
    { id: 1, title: 'Introducción a la Ciberseguridad', duration: '1:15:00', completed: true },
    { id: 2, title: 'Fundamentos de Redes', duration: '1:30:00', completed: true },
    { id: 3, title: 'Análisis de Vulnerabilidades', duration: '1:45:00', completed: false },
    { id: 4, title: 'Pentesting Básico', duration: '2:00:00', completed: false },
  ];

  const resources = [
    { id: 1, name: 'Guía de Laboratorio - Clase 1.pdf', type: 'pdf', size: '2.4 MB' },
    { id: 2, name: 'Presentación - Introducción.pptx', type: 'pptx', size: '5.1 MB' },
    { id: 3, name: 'Ejercicios Prácticos.zip', type: 'zip', size: '15.2 MB' },
    { id: 4, name: 'Referencias y Enlaces.txt', type: 'txt', size: '1 KB' },
  ];

  return (
    <div className="min-h-screen bg-[#2c2a28] text-[#fbf7f5]">
      {/* Header */}
      <header className="bg-[#1a1918] py-4 px-8 border-b border-[#eae5df]/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Clases</h1>
          <nav className="flex gap-4">
            <Link href="/admin/dashboard" className="text-[#8b9696] hover:text-[#fbf7f5]">
              Dashboard
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-8 grid grid-cols-12 gap-8">
        {/* Sidebar - Lista de Clases */}
        <div className="col-span-3 bg-[#1a1918] rounded-xl p-4">
          <h2 className="text-lg font-bold mb-4">Módulo 1: Fundamentos</h2>
          <div className="space-y-2">
            {lessons.map((lesson) => (
              <button
                key={lesson.id}
                onClick={() => setActiveLesson(lesson.id)}
                className={`w-full text-left p-3 rounded-lg transition-colors ${
                  activeLesson === lesson.id
                    ? 'bg-[#2c2a28] text-[#fbf7f5]'
                    : 'hover:bg-[#2c2a28] text-[#8b9696]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{lesson.title}</p>
                    <p className="text-sm text-[#8b9696]">{lesson.duration}</p>
                  </div>
                  {lesson.completed && (
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="col-span-9 space-y-6">
          {/* Video Player */}
          <div className="bg-[#1a1918] rounded-xl p-6">
            <div className="aspect-video bg-black rounded-lg flex items-center justify-center mb-4">
              <div className="text-[#8b9696]">Video Player</div>
            </div>
            <h2 className="text-xl font-bold">Introducción a la Ciberseguridad</h2>
            <p className="text-[#8b9696] mt-2">
              En esta clase aprenderemos los conceptos fundamentales de la ciberseguridad y su importancia en el mundo actual.
            </p>
          </div>

          {/* Tabs */}
          <div className="border-b border-[#eae5df]/10">
            <div className="flex gap-6">
              <button
                onClick={() => setActiveTab('video')}
                className={`pb-2 px-1 ${
                  activeTab === 'video'
                    ? 'text-[#fbf7f5] border-b-2 border-[#fbf7f5]'
                    : 'text-[#8b9696]'
                }`}
              >
                Video
              </button>
              <button
                onClick={() => setActiveTab('recursos')}
                className={`pb-2 px-1 ${
                  activeTab === 'recursos'
                    ? 'text-[#fbf7f5] border-b-2 border-[#fbf7f5]'
                    : 'text-[#8b9696]'
                }`}
              >
                Recursos
              </button>
              <button
                onClick={() => setActiveTab('notas')}
                className={`pb-2 px-1 ${
                  activeTab === 'notas'
                    ? 'text-[#fbf7f5] border-b-2 border-[#fbf7f5]'
                    : 'text-[#8b9696]'
                }`}
              >
                Notas
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="bg-[#1a1918] rounded-xl p-6">
            {activeTab === 'recursos' && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold mb-4">Recursos de la Clase</h3>
                {resources.map((resource) => (
                  <div
                    key={resource.id}
                    className="flex items-center justify-between p-4 bg-[#2c2a28] rounded-lg hover:bg-[#2c2a28]/80 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#1a1918] rounded-lg flex items-center justify-center text-[#8b9696]">
                        {resource.type}
                      </div>
                      <div>
                        <p className="font-medium">{resource.name}</p>
                        <p className="text-sm text-[#8b9696]">{resource.size}</p>
                      </div>
                    </div>
                    <button className="text-[#8b9696] hover:text-[#fbf7f5]">
                      Descargar
                    </button>
                  </div>
                ))}
              </div>
            )}
            {activeTab === 'notas' && (
              <div>
                <h3 className="text-lg font-bold mb-4">Mis Notas</h3>
                <textarea
                  className="w-full h-48 bg-[#2c2a28] rounded-lg p-4 text-[#fbf7f5] placeholder-[#8b9696] border border-[#eae5df]/10 focus:outline-none focus:ring-2 focus:ring-[#fbf7f5] focus:border-[#fbf7f5]"
                  placeholder="Escribe tus notas aquí..."
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 