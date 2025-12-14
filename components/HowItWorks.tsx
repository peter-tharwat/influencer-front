'use client'

import React from 'react'
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

const steps = [
  {
    number: '01',
    titleKey: 'howItWorks.step1.title',
    descKey: 'howItWorks.step1.desc',
  },
  {
    number: '02',
    titleKey: 'howItWorks.step2.title',
    descKey: 'howItWorks.step2.desc',
  },
  {
    number: '03',
    titleKey: 'howItWorks.step3.title',
    descKey: 'howItWorks.step3.desc',
  },
]

export default function HowItWorks() {
  const { t } = useLanguage()

  return (
    <Box
      id="how-it-works"
      sx={{
        py: 12,
        background: 'linear-gradient(to bottom, #FDF8F3, #ffffff)',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: 8,
              fontWeight: 700,
              color: 'primary.main',
              fontFamily: "'Bolaa Bahajan', sans-serif",
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            {t('howItWorks.title')}
          </Typography>
        </motion.div>

        <Grid container spacing={6}>
          {steps.map((step, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    background: 'white',
                    borderRadius: '24px',
                    boxShadow: '0 4px 20px rgba(107, 92, 230, 0.08)',
                    transition: 'all 0.3s ease',
                    border: '1px solid rgba(107, 92, 230, 0.1)',
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 40px rgba(107, 92, 230, 0.15)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      height: 200,
                      background: 'linear-gradient(135deg, #6B5CE6 0%, #8B7FED 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                    }}
                  >
                    <Typography
                      variant="h1"
                      sx={{
                        fontSize: '6rem',
                        fontWeight: 700,
                        color: 'rgba(255,255,255,0.2)',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {step.number}
                    </Typography>
                    <Box
                      sx={{
                        width: '80%',
                        height: '60%',
                        background: 'rgba(255,255,255,0.15)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '12px',
                        border: '1px solid rgba(255,255,255,0.2)',
                        position: 'relative',
                        zIndex: 1,
                      }}
                    />
                  </Box>
                  <CardContent sx={{ p: 4 }}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 600,
                        color: 'text.primary',
                        mb: 2,
                        fontFamily: "'Bolaa Bahajan', sans-serif",
                      }}
                    >
                      {t(step.titleKey)}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.7,
                      }}
                    >
                      {t(step.descKey)}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
