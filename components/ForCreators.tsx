'use client'

import React from 'react'
import { Box, Container, Typography, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ForCreators() {
  const { t, language } = useLanguage()

  const benefits = [
    t('creators.benefit1'),
    t('creators.benefit2'),
    t('creators.benefit3'),
    t('creators.benefit4'),
  ]

  return (
    <Box
      id="for-creators"
      sx={{
        py: 10,
        background: '#ffffff',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              order: language === 'ar' ? 2 : 1,
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Box
                sx={{
                  background: 'rgba(255,255,255,0.7)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '24px',
                  p: 4,
                  border: '1px solid rgba(0,0,0,0.1)',
                  minHeight: '300px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ color: 'text.secondary', textAlign: 'center' }}
                >
                  Creator Benefits Visual
                </Typography>
              </Box>
            </motion.div>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              order: language === 'ar' ? 1 : 2,
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h2"
                sx={{
                  mb: 4,
                  fontWeight: 700,
                  color: 'primary.main',
                }}
              >
                {t('creators.title')}
              </Typography>
              <List>
                {benefits.map((benefit, index) => (
                  <ListItem key={index} sx={{ py: 1.5, px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      <CheckCircle sx={{ color: 'secondary.main', fontSize: 28 }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={benefit}
                      primaryTypographyProps={{
                        variant: 'h6',
                        sx: { fontWeight: 500, color: 'text.primary' },
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

