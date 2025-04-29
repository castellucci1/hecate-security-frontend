'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Curso', href: '/curso' },
    { label: 'FAQs', href: '/faqs' },
    { label: 'Equipo', href: '/team' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#2c2a28]/95 backdrop-blur-sm py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-[#fbf7f5] text-2xl font-bold">
            Hécate
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[#fbf7f5] hover:text-[#672421] transition-colors ${
                  pathname === item.href ? 'text-[#672421]' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/login"
              className="px-4 py-2 text-[#fbf7f5] hover:text-[#672421] transition-colors"
            >
              Iniciar sesión
            </Link>
            <Link
              href="/signup"
              className="px-6 py-2 bg-[#672421] text-[#fbf7f5] rounded-full hover:bg-[#672421]/90 transition-all"
            >
              Registrarse
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#fbf7f5]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#2c2a28] border-t border-[#eae5df]/10 p-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[#fbf7f5] hover:text-[#672421] transition-colors ${
                    pathname === item.href ? 'text-[#672421]' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <hr className="border-[#eae5df]/10 my-2" />
              <Link
                href="/login"
                className="text-[#fbf7f5] hover:text-[#672421] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Iniciar sesión
              </Link>
              <Link
                href="/signup"
                className="px-6 py-2 bg-[#672421] text-[#fbf7f5] rounded-full hover:bg-[#672421]/90 transition-all text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Registrarse
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 