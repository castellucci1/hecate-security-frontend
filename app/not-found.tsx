'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-12 gap-16 items-center">
          <div className="col-span-12 md:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <h1 className="text-[120px] termina leading-none">404</h1>
              <h2 className="text-3xl termina">PÁGINA NO ENCONTRADA</h2>
              <p className="text-[#8b9696] text-lg max-w-md">
                La página que estás buscando no existe o ha sido movida.
              </p>
              <Link 
                href="/"
                className="inline-flex items-center text-[#672421] termina text-sm tracking-[0.2em] group"
              >
                VOLVER AL INICIO
                <span className="ml-4 transform transition-transform group-hover:translate-x-2">→</span>
              </Link>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="col-span-12 md:col-span-6 relative"
          >
            {/* Ilustración minimalista */}
            <div className="relative aspect-square">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-full h-full max-w-md" viewBox="0 0 400 400">
                  {/* Líneas decorativas y elementos geométricos */}
                  <line x1="100" y1="200" x2="300" y2="200" stroke="#672421" strokeWidth="2" strokeDasharray="8 8" />
                  <circle cx="200" cy="200" r="100" fill="none" stroke="#672421" strokeWidth="2" />
                  <path d="M200,100 L300,200 L200,300 L100,200 Z" fill="none" stroke="#672421" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Líneas decorativas */}
      <div className="absolute bottom-0 left-0 w-24 h-[1px] bg-[#672421] opacity-20"></div>
      <div className="absolute top-0 right-0 h-24 w-[1px] bg-[#672421] opacity-20"></div>
    </section>
  )
} 