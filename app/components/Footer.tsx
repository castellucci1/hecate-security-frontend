'use client'
import { useTheme } from '../context/ThemeContext'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const { theme } = useTheme()
  
  return (
    <footer className={`w-full border-t border-[#23242a] bg-[#111216]/80 backdrop-blur`}>
      <div className="container mx-auto px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo y Copyright */}
          <div className="flex items-center gap-4">
            <Image 
              src="/images/Hecate-Logos-29.png" 
              alt="Hécate Logo" 
              width={80} 
              height={30} 
              className="h-8 w-auto"
            />
            <span className="termina text-xs tracking-[0.3em] text-[#8b9696]">
              HÉCATE © 2024
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-8">
            <a 
              href="https://linkedin.com/company/hecatesecurity" 
              target="_blank"
              rel="noopener noreferrer"
              className="termina text-xs tracking-[0.3em] text-[#bdbdbd] hover:text-white transition-colors duration-300"
            >
              LINKEDIN
            </a>
            <a 
              href="https://instagram.com/hecatesecurity" 
              target="_blank"
              rel="noopener noreferrer"
              className="termina text-xs tracking-[0.3em] text-[#bdbdbd] hover:text-white transition-colors duration-300"
            >
              INSTAGRAM
            </a>
            <Link
              href="/terms"
              className="termina text-xs tracking-[0.3em] text-[#bdbdbd] hover:text-white transition-colors duration-300"
            >
              TÉRMINOS Y CONDICIONES
            </Link>
          </div>

          {/* Newsletter */}
          <div className="flex items-center">
            <Link
              href="/inscripcion"
              className="termina px-6 py-2 bg-[#8b9696] text-[#111216] font-light tracking-[0.3em] rounded-full hover:bg-[#6b7a7a] transition-all duration-200"
            >
              INSCRIBITE
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 