'use client'

import React from 'react'
import { Box, Container, Typography, Link, Grid } from '@mui/material'
import { CreditCard, Payment } from '@mui/icons-material'

const paymentMethods = [
  { name: 'Visa', icon: <CreditCard /> },
  { name: 'Mastercard', icon: <CreditCard /> },
  { name: 'Apple Pay', icon: <Payment /> },
]

const footerLinks = [
  { label: 'عن المنصة', href: '#' },
  { label: 'الأسئلة الشائعة', href: '#faq' },
  { label: 'اتصل بنا', href: '#' },
  { label: 'سياسة الخصوصية', href: '#' },
]

export default function Footer() {
  return (
    <Box
      sx={{
        py: 6,
        background: '#FDF8F3',
        borderTop: '1px solid rgba(0,0,0,0.05)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                mb: 3,
                flexWrap: 'wrap',
              }}
            >
              {paymentMethods.map((method, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    px: 2,
                    py: 1,
                    borderRadius: '8px',
                    background: 'white',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  }}
                >
                  {method.icon}
                  <Typography variant="caption" sx={{ fontWeight: 500, color: 'text.secondary' }}>
                    {method.name}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                gap: 3,
                flexWrap: 'wrap',
                justifyContent: { xs: 'flex-start', md: 'flex-end' },
              }}
            >
              {footerLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  sx={{
                    color: 'text.secondary',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    '&:hover': {
                      color: 'primary.main',
                    },
                    transition: 'color 0.3s ease',
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="body2"
              sx={{
                textAlign: 'center',
                color: 'text.secondary',
                pt: 2,
                borderTop: '1px solid rgba(0,0,0,0.05)',
              }}
            >
              © 2024 UGC Market. جميع الحقوق محفوظة.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

