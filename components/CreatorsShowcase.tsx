'use client'

import React, { useRef } from 'react'
import { Box, Container, Typography, Button, Card, CardContent, Avatar } from '@mui/material'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'

// Mock creator data
const creators = [
  { name: 'سارة أحمد', category: 'جمال', image: null },
  { name: 'محمد علي', category: 'تقنية', image: null },
  { name: 'فاطمة خالد', category: 'أزياء', image: null },
  { name: 'خالد محمود', category: 'طعام', image: null },
  { name: 'نورا سعيد', category: 'سفر', image: null },
  { name: 'أحمد يوسف', category: 'لياقة', image: null },
]

export default function CreatorsShowcase() {
  const { t, language } = useLanguage()
  const scrollRef = useRef<HTMLDivElement>(null)
  const { scrollXProgress } = useScroll({ container: scrollRef })
  const x = useTransform(scrollXProgress, [0, 1], ['0%', '-50%'])

  return (
    <Box
      id="creators"
      sx={{
        py: 10,
        background: 'linear-gradient(to bottom, #ffffff, #FDF8F3)',
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              color: 'primary.main',
              mb: 2,
              fontFamily: "'Bolaa Bahajan', sans-serif",
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            {t('creators.showcase.title')}
          </Typography>
        </Box>

        <Box
          ref={scrollRef}
          sx={{
            overflowX: 'auto',
            overflowY: 'hidden',
            pb: 2,
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            cursor: 'grab',
            '&:active': {
              cursor: 'grabbing',
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: 3,
              width: 'max-content',
              px: { xs: 2, md: 0 },
            }}
          >
            {creators.map((creator, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -8 }}
              >
                <Card
                  sx={{
                    width: { xs: 200, md: 280 },
                    height: 320,
                    background: 'white',
                    borderRadius: '20px',
                    boxShadow: '0 4px 20px rgba(107, 92, 230, 0.1)',
                    transition: 'all 0.3s ease',
                    overflow: 'hidden',
                    '&:hover': {
                      boxShadow: '0 8px 32px rgba(107, 92, 230, 0.2)',
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
                    }}
                  >
                    <Avatar
                      sx={{
                        width: 100,
                        height: 100,
                        bgcolor: 'white',
                        color: 'primary.main',
                        fontSize: '2rem',
                        fontWeight: 700,
                      }}
                    >
                      {creator.name.split(' ')[0][0]}
                    </Avatar>
                  </Box>
                  <CardContent sx={{ p: 3, textAlign: 'center' }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        color: 'text.primary',
                        mb: 1,
                        fontFamily: "'Bolaa Bahajan', sans-serif",
                      }}
                    >
                      {creator.name}
                    </Typography>
                    <Box
                      sx={{
                        display: 'inline-block',
                        px: 2,
                        py: 0.5,
                        borderRadius: '20px',
                        background: 'rgba(107, 92, 230, 0.1)',
                        mt: 1,
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          color: 'primary.main',
                          fontWeight: 600,
                        }}
                      >
                        {creator.category}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Box>
        </Box>

        <Box sx={{ textAlign: 'center', mt: 5 }}>
          <Button
            variant="outlined"
            sx={{
              borderColor: 'primary.main',
              color: 'primary.main',
              px: 4,
              py: 1.5,
              borderRadius: '12px',
              fontWeight: 600,
              '&:hover': {
                borderColor: 'primary.dark',
                backgroundColor: 'rgba(107, 92, 230, 0.08)',
              },
            }}
          >
            {t('creators.showcase.cta')}
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

