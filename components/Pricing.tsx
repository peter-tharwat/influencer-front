'use client'

import React from 'react'
import { Box, Container, Typography, Grid, Card, CardContent, Button } from '@mui/material'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { Check } from '@mui/icons-material'

export default function Pricing() {
  const { t } = useLanguage()

  const plans = [
    {
      name: t('pricing.free'),
      price: '0',
      features: ['Basic features', 'Limited campaigns', 'Community support'],
    },
    {
      name: t('pricing.starter'),
      price: '99',
      features: ['All basic features', 'Unlimited campaigns', 'Priority support', 'Analytics'],
    },
    {
      name: t('pricing.pro'),
      price: '299',
      features: [
        'All starter features',
        'Advanced analytics',
        'Dedicated support',
        'Custom integrations',
        'API access',
      ],
    },
    {
      name: t('pricing.enterprise'),
      price: 'Custom',
      features: [
        'All pro features',
        'Custom solutions',
        'Dedicated account manager',
        'SLA guarantee',
        'White-label options',
      ],
    },
  ]

  return (
    <Box
      id="pricing"
      sx={{
        py: 10,
        background: '#ffffff',
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
          {t('pricing.title')}
        </Typography>

        <Grid container spacing={4}>
          {plans.map((plan, index) => (
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
                    display: 'flex',
                    flexDirection: 'column',
                    background: index === 2
                      ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                      : 'rgba(255,255,255,0.8)',
                    backdropFilter: 'blur(10px)',
                    border: index === 2 ? 'none' : '1px solid rgba(0,0,0,0.05)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        mb: 2,
                        color: index === 2 ? 'white' : 'primary.main',
                      }}
                    >
                      {plan.name}
                    </Typography>
                    <Box sx={{ mb: 3 }}>
                      <Typography
                        variant="h3"
                        sx={{
                          fontWeight: 700,
                          color: index === 2 ? 'white' : 'primary.main',
                        }}
                      >
                        {plan.price === 'Custom' ? plan.price : `$${plan.price}`}
                        {plan.price !== 'Custom' && (
                          <Typography
                            component="span"
                            variant="body2"
                            sx={{
                              color: index === 2 ? 'rgba(255,255,255,0.7)' : 'text.secondary',
                            }}
                          >
                            /mo
                          </Typography>
                        )}
                      </Typography>
                    </Box>
                    <Box sx={{ flexGrow: 1, mb: 3 }}>
                      {plan.features.map((feature, idx) => (
                        <Box key={idx} sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                          <Check
                            sx={{
                              color: index === 2 ? 'secondary.main' : 'primary.main',
                              fontSize: 20,
                              mr: 1,
                            }}
                          />
                          <Typography
                            variant="body2"
                            sx={{
                              color: index === 2 ? 'rgba(255,255,255,0.9)' : 'text.primary',
                            }}
                          >
                            {feature}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                    <Button
                      variant={index === 2 ? 'outlined' : 'contained'}
                      fullWidth
                      sx={{
                        mt: 'auto',
                        backgroundColor: index === 2 ? 'transparent' : 'secondary.main',
                        color: index === 2 ? 'white' : 'white',
                        borderColor: index === 2 ? 'white' : 'transparent',
                        '&:hover': {
                          backgroundColor: index === 2 ? 'rgba(255,255,255,0.1)' : 'secondary.dark',
                          borderColor: index === 2 ? 'white' : 'transparent',
                        },
                      }}
                    >
                      {t('pricing.getStarted')}
                    </Button>
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

