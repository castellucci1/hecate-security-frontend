'use client'
import { useTheme } from '../context/ThemeContext'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full transition-colors
        ${theme === 'dark' 
          ? 'text-[#eae5df] hover:text-[#8b9696]' 
          : 'text-[#2c2a28] hover:text-[#672421]'
        }`}
    >
      {theme === 'dark' ? (
        <Brightness7Icon className="w-5 h-5" />
      ) : (
        <Brightness4Icon className="w-5 h-5" />
      )}
    </button>
  )
} 