'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useTheme } from '../context/ThemeContext'
import { Brightness4, Brightness7, Menu, Close } from '@mui/icons-material'

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const navItems = [
    { name: 'PROGRAMA', path: '/curso' },
    { name: 'FAQS', path: '/faqs' },
    { name: 'EQUIPO', path: '/team' },
  ]

  const isActive = (path: string) => pathname === path

  return (
    <>
      <nav className={`fixed w-full top-0 z-50 h-20 border-b border-[#8b9696]/10
        ${theme === 'dark' ? 'bg-[#2c2a28]/90' : 'bg-white/90 backdrop-blur-sm'}`}>
        <div className="container mx-auto px-8 h-full">
          <div className="flex justify-between items-center h-full">
            <Link href="/" className="h-full py-2">
              <Image
                src={theme === 'dark' ? '/images/Hecate-Logos-32.png' : '/images/Hecate-Logos-27.png'}
                alt="Hécate Security"
                width={200}
                height={80}
                className="h-full w-auto"
                priority
              />
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`termina text-sm tracking-[0.2em] transition-colors
                    ${isActive(item.path)
                      ? theme === 'dark'
                        ? 'text-[#8b9696]'
                        : 'text-[#672421]'
                      : theme === 'dark'
                      ? 'text-[#eae5df] hover:text-[#8b9696]'
                      : 'text-[#2c2a28] hover:text-[#672421]'
                    }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/inscripcion"
                className="btn-primary"
              >
                INSCRIBIRSE →
              </Link>
              <Link
                href="/login"
                className={`termina text-sm tracking-[0.2em] transition-colors
                  ${theme === 'dark' 
                    ? 'text-[#eae5df] hover:text-[#8b9696]' 
                    : 'text-[#2c2a28] hover:text-[#672421]'
                  }`}
              >
                LOGIN
              </Link>
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-colors duration-300 ${
                  theme === 'dark'
                    ? 'text-[#eae5df] hover:bg-[#8b9696]/20'
                    : 'text-[#2c2a28] hover:bg-[#672421]/20'
                }`}
              >
                {theme === 'dark' ? <Brightness7 /> : <Brightness4 />}
              </button>
            </div>

            {/* Mobile Menu Button and Theme Toggle */}
            <div className="md:hidden flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-colors duration-300 ${
                  theme === 'dark'
                    ? 'text-[#eae5df] hover:bg-[#8b9696]/20'
                    : 'text-[#2c2a28] hover:bg-[#672421]/20'
                }`}
              >
                {theme === 'dark' ? <Brightness7 /> : <Brightness4 />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={theme === 'dark' ? 'text-[#eae5df]' : 'text-[#2c2a28]'}
              >
                {isMenuOpen ? <Close /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <motion.div 
        initial={false}
        animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
        className={`fixed inset-0 z-40 pt-20 ${isMenuOpen ? 'block' : 'hidden'}
          ${theme === 'dark' ? 'bg-[#2c2a28]' : 'bg-white'}`}
      >
        <div className="container h-full flex flex-col justify-center items-center space-y-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`termina text-2xl tracking-[0.2em] transition-colors
                ${isActive(item.path)
                  ? theme === 'dark'
                    ? 'text-[#8b9696]'
                    : 'text-[#672421]'
                  : theme === 'dark'
                  ? 'text-[#eae5df] hover:text-[#8b9696]'
                  : 'text-[#2c2a28] hover:text-[#672421]'
                }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/inscripcion"
            className="btn-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            INSCRIBIRSE →
          </Link>
          <Link
            href="/login"
            className={`termina text-2xl tracking-[0.2em] transition-colors
              ${theme === 'dark' 
                ? 'text-[#eae5df] hover:text-[#8b9696]' 
                : 'text-[#2c2a28] hover:text-[#672421]'
              }`}
            onClick={() => setIsMenuOpen(false)}
          >
            LOGIN
          </Link>
        </div>
      </motion.div>
    </>
  )
} 