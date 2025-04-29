/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'white': '#FFFFFF',
        'smoke': '#F5F5F5',
        'text-primary': '#0F0F1C',
        'text-secondary': '#595959',
        'primary': '#3D2C8D',
        'primary-light': '#DED9F5',
        'primary-dark': '#2C2170',
      },
      spacing: {
        'section': '96px',
        'section-mobile': '64px',
      },
      fontFamily: {
        sans: ['var(--font-general-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}