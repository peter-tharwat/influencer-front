'use client'

import React from 'react'
import { Box, Container, Typography, Button } from '@mui/material'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

export default function FinalCTA() {
  const { t } = useLanguage()

  return (
    <Box
      sx={{
        py: 12,
        background: 'linear-gradient(135deg, #6B5CE6 0%, #8B7FED 50%, #A8D5E2 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Box
            sx={{
              background: 'rgba(255,255,255,0.15)',
              backdropFilter: 'blur(20px)',
              borderRadius: '32px',
              p: { xs: 4, md: 6 },
              border: '1px solid rgba(255,255,255,0.2)',
              textAlign: 'center',
            }}
          >
            <Typography
              variant="h2"
              sx={{
                mb: 4,
                fontWeight: 700,
                color: 'white',
                fontFamily: "'Bolaa Bahajan', sans-serif",
                fontSize: { xs: '1.75rem', md: '2.5rem' },
                lineHeight: 1.3,
              }}
            >
              {t('cta.title')}
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: 'white',
                color: 'primary.main',
                py: 2,
                px: 6,
                fontSize: '1.2rem',
                fontWeight: 600,
                borderRadius: '14px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                '&:hover': {
                  backgroundColor: '#f5f5f5',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 12px 32px rgba(0,0,0,0.25)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              {t('cta.button')}
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  )
}
