'use client'

import React, { useState, useEffect } from 'react'
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material'
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Navbar() {
  const { t, language, toggleLanguage } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { key: 'nav.howItWorks', href: '#how-it-works' },
    { key: 'nav.creators', href: '#creators' },
    { key: 'nav.companies', href: '#companies' },
    { key: 'nav.faq', href: '#faq' },
  ]

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileOpen(false)
  }

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: scrolled
            ? 'rgba(255, 255, 255, 0.9)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          boxShadow: scrolled ? '0 2px 20px rgba(107, 92, 230, 0.1)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(107, 92, 230, 0.1)' : 'none',
          transition: 'all 0.3s ease',
          zIndex: 1000,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              justifyContent: 'space-between',
              py: 1.5,
            }}
          >
            <Box
              component="a"
              href="#"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              sx={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: scrolled ? 'primary.main' : 'white',
                textDecoration: 'none',
                transition: 'color 0.3s ease',
                fontFamily: "'Bolaa Bahajan', sans-serif",
              }}
            >
              UGC Market
            </Box>

            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 2,
                alignItems: 'center',
              }}
            >
              {navItems.map((item) => (
                <Button
                  key={item.key}
                  onClick={() => handleNavClick(item.href)}
                  sx={{
                    color: scrolled ? 'primary.main' : 'white',
                    fontWeight: 500,
                    fontSize: '0.95rem',
                    '&:hover': {
                      backgroundColor: scrolled ? 'rgba(107, 92, 230, 0.08)' : 'rgba(255,255,255,0.1)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  {t(item.key)}
                </Button>
              ))}
              <Button
                variant="contained"
                onClick={() => handleNavClick('#')}
                sx={{
                  backgroundColor: 'primary.main',
                  color: 'white',
                  fontWeight: 600,
                  px: 3,
                  borderRadius: '12px',
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(107, 92, 230, 0.3)',
                }}
              >
                {t('nav.getStarted')}
              </Button>
            </Box>

            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                onClick={() => setMobileOpen(!mobileOpen)}
                sx={{ color: scrolled ? 'primary.main' : 'white' }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor={language === 'ar' ? 'right' : 'left'}
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: 280,
            background: 'rgba(255,255,255,0.98)',
            backdropFilter: 'blur(20px)',
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ fontSize: '1.25rem', fontWeight: 700, color: 'primary.main', fontFamily: "'Bolaa Bahajan', sans-serif" }}>
            Menu
          </Box>
          <IconButton onClick={() => setMobileOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navItems.map((item) => (
            <ListItem key={item.key} disablePadding>
              <ListItemButton onClick={() => handleNavClick(item.href)}>
                <ListItemText primary={t(item.key)} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => handleNavClick('#')}
              sx={{
                backgroundColor: 'primary.main',
                color: 'white',
                mx: 2,
                borderRadius: '12px',
                '&:hover': {
                  backgroundColor: 'primary.dark',
                },
              }}
            >
              <ListItemText primary={t('nav.getStarted')} sx={{ textAlign: 'center' }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  )
}
