'use client'

import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#111216]">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl text-[#8b9696] mb-8">Página no encontrada</h2>
        <Link 
          href="/"
          className="termina px-6 py-2 bg-[#8b9696] text-[#111216] font-light tracking-[0.3em] rounded-full hover:bg-[#6b7a7a] transition-all duration-200"
        >
          VOLVER AL INICIO
        </Link>
      </div>
    </div>
  )
} 