'use client';

import { useState } from 'react';
import DashboardLayout from '@/app/components/DashboardLayout';

// Datos de ejemplo - reemplazar con datos reales de la API
const videos = [
  {
    id: 1,
    title: 'Introducción a la Ciberseguridad',
    description: 'Conceptos básicos y fundamentos de la seguridad informática',
    duration: '45 min',
    thumbnail: '/thumbnails/intro-cybersec.jpg',
    progress: 100,
    category: 'Fundamentos'
  },
  {
    id: 2,
    title: 'Hacking Ético: Metodologías',
    description: 'Aprende las metodologías de pentesting más efectivas',
    duration: '60 min',
    thumbnail: '/thumbnails/ethical-hacking.jpg',
    progress: 75,
    category: 'Hacking Ético'
  },
  {
    id: 3,
    title: 'Análisis de Malware',
    description: 'Técnicas avanzadas de análisis de malware',
    duration: '90 min',
    thumbnail: '/thumbnails/malware-analysis.jpg',
    progress: 0,
    category: 'Seguridad Ofensiva'
  }
];

export default function VideosPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'Fundamentos', 'Hacking Ético', 'Seguridad Ofensiva'];

  const filteredVideos = videos.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         video.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || video.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      {/* Filtros */}
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Buscar videos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 px-4 py-2 bg-[#2c2a28] border border-[#eae5df]/20 rounded-lg text-[#fbf7f5] focus:ring-2 focus:ring-[#672421] focus:border-transparent"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 bg-[#2c2a28] border border-[#eae5df]/20 rounded-lg text-[#fbf7f5] focus:ring-2 focus:ring-[#672421] focus:border-transparent"
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category === 'all' ? 'Todas las categorías' : category}
            </option>
          ))}
        </select>
      </div>

      {/* Grid de Videos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.map(video => (
          <div
            key={video.id}
            className="bg-[#2c2a28] border border-[#eae5df]/10 rounded-lg overflow-hidden hover:border-[#672421]/50 transition-all"
          >
            <div className="aspect-video bg-[#1a1918] relative">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                {video.duration}
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-[#fbf7f5]">{video.title}</h3>
                <span className="text-sm text-[#8b9696]">{video.category}</span>
              </div>
              <p className="text-[#eae5df] text-sm mb-4">{video.description}</p>
              <div className="flex items-center justify-between">
                <div className="w-full bg-[#1a1918] rounded-full h-2">
                  <div
                    className="bg-[#672421] h-2 rounded-full"
                    style={{ width: `${video.progress}%` }}
                  />
                </div>
                <span className="ml-2 text-sm text-[#8b9696]">{video.progress}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 