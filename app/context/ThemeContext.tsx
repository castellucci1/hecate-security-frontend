'use client'
import React, { createContext, useContext, useState, useEffect } from 'react'
import { ThemeProvider as MUIThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

type ThemeMode = 'light' | 'dark'

interface ThemeContextType {
  theme: ThemeMode
  mounted: boolean
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#672421',
    },
    secondary: {
      main: '#8b9696',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: '#2c2a28',
      secondary: '#8b9696',
    },
  },
})

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#8b9696',
    },
    secondary: {
      main: '#672421',
    },
    background: {
      default: '#2c2a28',
      paper: '#23211e',
    },
    text: {
      primary: '#eae5df',
      secondary: '#8b9696',
    },
  },
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeMode>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as ThemeMode
    if (savedTheme) {
      setTheme(savedTheme)
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    }
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  const currentTheme = theme === 'light' ? lightTheme : darkTheme

  return (
    <ThemeContext.Provider value={{ theme, mounted, toggleTheme }}>
      <MUIThemeProvider theme={currentTheme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
} 