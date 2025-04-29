import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        background: 'var(--background)',
        text: 'var(--text)',
        'mystic-maze': {
          DEFAULT: '#6B728E',
          dark: '#8b9696'
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        termina: ['termina', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      gridTemplateColumns: {
        'hero': '1fr 1fr',
        'auto-fit': 'repeat(auto-fit, minmax(300px, 1fr))',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease forwards',
        'slide-up': 'slideUp 0.8s ease forwards',
      },
    },
  },
  plugins: [],
}

export default config 