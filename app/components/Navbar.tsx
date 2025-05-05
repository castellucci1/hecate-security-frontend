'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export default function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems = [
    { name: 'CURSOS', path: '/cursos' },
    { name: 'PREGUNTAS FRECUENTES', path: '/faqs' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#111216]/80 backdrop-blur border-b border-[#23242a]' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-8 flex items-center h-20">
        <Link href="/" className="flex items-center mr-8" aria-label="Ir al inicio">
          <Image 
            src="/images/Hecate-Logos-29.png" 
            alt="Hécate Logo" 
            width={120} 
            height={40} 
            className="h-10 w-auto"
            priority 
          />
        </Link>
        <div className="flex-1 flex justify-center items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`termina text-xs tracking-[0.3em] transition-colors duration-300
                ${pathname === item.path
                    ? 'text-[#8b9696]'
                  : 'text-[#bdbdbd] hover:text-white'}
              `}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center ml-auto">
          <Link
            href="/inscripcion"
            className="termina px-6 py-2 bg-[#8b9696] text-[#111216] font-light tracking-[0.3em] rounded-full hover:bg-[#6b7a7a] transition-all duration-200"
          >
            INSCRIBITE
          </Link>
        </div>
      </div>
    </motion.nav>
  )
} 