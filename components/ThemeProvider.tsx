'use client'

import React from 'react'
import { ThemeProvider as MUIThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { useLanguage } from '@/contexts/LanguageContext'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage()

  const theme = createTheme({
    direction: language === 'ar' ? 'rtl' : 'ltr',
    palette: {
      mode: 'light',
      primary: {
        main: '#6B5CE6', // Soft purple/indigo
        dark: '#5A4FD4',
        light: '#8B7FED',
      },
      secondary: {
        main: '#F5E6D3', // Light beige
        dark: '#E8D4B8',
        light: '#FDF8F3',
      },
      info: {
        main: '#A8D5E2', // Soft blue accent
        dark: '#8BC4D4',
        light: '#C4E5F0',
      },
      background: {
        default: '#FDF8F3', // Light beige background
        paper: '#ffffff',
      },
      text: {
        primary: '#2D2D44',
        secondary: '#6B7280',
      },
    },
    typography: {
      fontFamily: "'Bolaa Bahajan', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
      h1: {
        fontWeight: 700,
        fontSize: '3.5rem',
        lineHeight: 1.2,
      },
      h2: {
        fontWeight: 700,
        fontSize: '2.5rem',
        lineHeight: 1.3,
      },
      h3: {
        fontWeight: 600,
        fontSize: '2rem',
        lineHeight: 1.4,
      },
      h4: {
        fontWeight: 600,
        fontSize: '1.5rem',
        lineHeight: 1.5,
      },
      body1: {
        fontWeight: 400,
        fontSize: '1.125rem',
        lineHeight: 1.7,
      },
      body2: {
        fontWeight: 400,
        fontSize: '1rem',
        lineHeight: 1.6,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '12px',
            padding: '12px 32px',
            fontWeight: 600,
            textTransform: 'none',
            fontSize: '1rem',
            boxShadow: 'none',
            '&:hover': {
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: '16px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          },
        },
      },
    },
  })

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  )
}

