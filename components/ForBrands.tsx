'use client'

import React from 'react'
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { VerifiedUser, TrendingUp, Security, Speed } from '@mui/icons-material'

const benefits = [
  {
    icon: VerifiedUser,
    key: 'value.benefit1',
    descKey: 'value.benefit1.desc',
  },
  {
    icon: TrendingUp,
    key: 'value.benefit2',
    descKey: 'value.benefit2.desc',
  },
  {
    icon: Security,
    key: 'value.benefit3',
    descKey: 'value.benefit3.desc',
  },
  {
    icon: Speed,
    key: 'value.benefit4',
    descKey: 'value.benefit4.desc',
  },
]

export default function ForBrands() {
  const { t } = useLanguage()

  return (
    <Box
      id="companies"
      sx={{
        py: 12,
        background: '#ffffff',
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
            {t('value.title')}
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {benefits.map((benefit, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    background: 'white',
                    borderRadius: '20px',
                    boxShadow: '0 4px 20px rgba(107, 92, 230, 0.08)',
                    transition: 'all 0.3s ease',
                    border: '1px solid rgba(107, 92, 230, 0.1)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 40px rgba(107, 92, 230, 0.15)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 4, textAlign: 'center' }}>
                    <Box
                      sx={{
                        width: 70,
                        height: 70,
                        borderRadius: '18px',
                        background: 'linear-gradient(135deg, #6B5CE6 0%, #8B7FED 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 3,
                      }}
                    >
                      <benefit.icon sx={{ fontSize: 35, color: 'white' }} />
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        color: 'text.primary',
                        mb: 2,
                        fontFamily: "'Bolaa Bahajan', sans-serif",
                      }}
                    >
                      {t(benefit.key)}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.7,
                      }}
                    >
                      {t(benefit.descKey)}
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
