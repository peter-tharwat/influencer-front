'use client'

import React from 'react'
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import {
  Campaign,
  People,
  Security,
  Analytics,
  Message,
  Star,
} from '@mui/icons-material'

export default function Features() {
  const { t } = useLanguage()

  const features = [
    { icon: Campaign, title: t('features.campaignManagement') },
    { icon: People, title: t('features.creatorMatching') },
    { icon: Security, title: t('features.securePayments') },
    { icon: Analytics, title: t('features.analytics') },
    { icon: Message, title: t('features.messaging') },
    { icon: Star, title: t('features.reviews') },
  ]

  return (
    <Box
      sx={{
        py: 10,
        background: 'linear-gradient(to bottom, #ffffff, #f8f9fa)',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            mb: 6,
            fontWeight: 700,
            color: 'primary.main',
          }}
        >
          {t('features.title')}
        </Typography>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    background: 'rgba(255,255,255,0.8)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(0,0,0,0.05)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
                    },
                  }}
                >
                  <CardContent sx={{ textAlign: 'center', p: 4 }}>
                    <Box
                      sx={{
                        width: 70,
                        height: 70,
                        borderRadius: '16px',
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 2,
                      }}
                    >
                      <feature.icon sx={{ fontSize: 35, color: 'white' }} />
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        color: 'primary.main',
                      }}
                    >
                      {feature.title}
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

