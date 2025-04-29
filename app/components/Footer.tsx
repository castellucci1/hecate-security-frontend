'use client'
import { useTheme } from '../context/ThemeContext'
import Link from 'next/link'

export default function Footer() {
  const { theme } = useTheme()
  return (
    <footer className={`py-16 border-t ${
      theme === 'dark' 
        ? 'border-[#eae5df]/10 text-[#eae5df]' 
        : 'border-[#2c2a28]/10 text-[#2c2a28]'
    }`}>
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <span className="text-xs tracking-[0.3em] mb-8 md:mb-0">
            HÉCATE © 2024
          </span>
          <div className="flex gap-8">
            <a 
              href="https://linkedin.com/company/hecatesecurity" 
              target="_blank"
              rel="noopener noreferrer"
              className={`text-xs tracking-[0.3em] transition-colors ${
                theme === 'dark' 
                  ? 'hover:text-[#8b9696]' 
                  : 'hover:text-[#672421]'
              }`}
            >
              LINKEDIN
            </a>
            <a 
              href="https://instagram.com/hecatesecurity" 
              target="_blank"
              rel="noopener noreferrer"
              className={`text-xs tracking-[0.3em] transition-colors ${
                theme === 'dark' 
                  ? 'hover:text-[#8b9696]' 
                  : 'hover:text-[#672421]'
              }`}
            >
              INSTAGRAM
            </a>
            <Link
              href="/terms"
              className={`text-xs tracking-[0.3em] transition-colors ${
                theme === 'dark' 
                  ? 'hover:text-[#8b9696]' 
                  : 'hover:text-[#672421]'
              }`}
            >
              TÉRMINOS Y CONDICIONES
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 