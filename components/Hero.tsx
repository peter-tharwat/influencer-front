'use client'

import React from 'react'
import { Box, Container, Typography, Button, Grid, Card, CardContent, Avatar } from '@mui/material'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { Instagram, YouTube, TikTok } from '@mui/icons-material'

// Mock creator data
const creators = [
  { name: 'سارة أحمد', followers: '125K', engagement: '8.5%', platform: 'instagram' },
  { name: 'محمد علي', followers: '89K', engagement: '12%', platform: 'youtube' },
  { name: 'فاطمة خالد', followers: '210K', engagement: '9.2%', platform: 'tiktok' },
]

const getPlatformIcon = (platform: string) => {
  switch (platform) {
    case 'instagram':
      return <Instagram sx={{ fontSize: 20 }} />
    case 'youtube':
      return <YouTube sx={{ fontSize: 20 }} />
    case 'tiktok':
      return <TikTok sx={{ fontSize: 20 }} />
    default:
      return <Instagram sx={{ fontSize: 20 }} />
  }
}

export default function Hero() {
  const { t, language } = useLanguage()

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #6B5CE6 0%, #8B7FED 50%, #A8D5E2 100%)',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        pt: 10,
      }}
    >
      {/* Abstract background shapes */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.15) 0%, transparent 50%)',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.1)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid
            item
            xs={12}
            md={7}
            sx={{
              order: language === 'ar' ? 1 : 1,
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h1"
                sx={{
                  color: 'white',
                  fontWeight: 700,
                  mb: 3,
                  fontSize: { xs: '2.5rem', md: '4rem' },
                  lineHeight: 1.2,
                  fontFamily: "'Bolaa Bahajan', sans-serif",
                }}
              >
                {t('hero.headline')}
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: 'rgba(255,255,255,0.95)',
                  fontWeight: 400,
                  mb: 4,
                  fontSize: { xs: '1.1rem', md: '1.3rem' },
                  lineHeight: 1.7,
                  maxWidth: '90%',
                }}
              >
                {t('hero.subheadline')}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  gap: 2,
                  flexDirection: { xs: 'column', sm: 'row' },
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: 'white',
                    color: 'primary.main',
                    py: 1.8,
                    px: 5,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    borderRadius: '14px',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                    '&:hover': {
                      backgroundColor: '#f5f5f5',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 12px 32px rgba(0,0,0,0.2)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  {t('hero.cta.brand')}
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: 'white',
                    borderWidth: 2,
                    color: 'white',
                    py: 1.8,
                    px: 5,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    borderRadius: '14px',
                    '&:hover': {
                      borderColor: 'white',
                      backgroundColor: 'rgba(255,255,255,0.15)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  {t('hero.cta.creator')}
                </Button>
              </Box>
            </motion.div>
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              order: language === 'ar' ? 2 : 2,
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Box
                sx={{
                  position: 'relative',
                  height: { xs: '400px', md: '500px' },
                }}
              >
                {creators.map((creator, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                    style={{
                      position: 'absolute',
                      top: `${20 + index * 30}%`,
                      [language === 'ar' ? 'right' : 'left']: `${10 + index * 15}%`,
                    }}
                  >
                    <Card
                      sx={{
                        width: { xs: 200, md: 240 },
                        background: 'rgba(255,255,255,0.95)',
                        backdropFilter: 'blur(20px)',
                        borderRadius: '20px',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-8px) scale(1.02)',
                          boxShadow: '0 12px 40px rgba(0,0,0,0.2)',
                        },
                      }}
                    >
                      <CardContent sx={{ p: 2.5 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                          <Avatar
                            sx={{
                              width: 50,
                              height: 50,
                              bgcolor: 'primary.main',
                              fontWeight: 600,
                            }}
                          >
                            {creator.name.split(' ')[0][0]}
                          </Avatar>
                          <Box sx={{ flex: 1 }}>
                            <Typography
                              variant="subtitle2"
                              sx={{
                                fontWeight: 600,
                                color: 'text.primary',
                                fontFamily: "'Bolaa Bahajan', sans-serif",
                              }}
                            >
                              {creator.name}
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 0.5 }}>
                              {getPlatformIcon(creator.platform)}
                              <Typography variant="caption" sx={{ color: 'text.secondary', ml: 0.5 }}>
                                {creator.followers}
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            pt: 1.5,
                            borderTop: '1px solid rgba(0,0,0,0.08)',
                          }}
                        >
                          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                            تفاعل
                          </Typography>
                          <Typography
                            variant="subtitle2"
                            sx={{ fontWeight: 600, color: 'primary.main' }}
                          >
                            {creator.engagement}
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
