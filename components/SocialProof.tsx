'use client'

import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

// Mock company logos - in production, these would be actual logo images
const companies = ['Company 1', 'Company 2', 'Company 3', 'Company 4', 'Company 5', 'Company 6']

export default function SocialProof() {
  const { t } = useLanguage()

  return (
    <Box
      sx={{
        py: 6,
        background: '#ffffff',
        borderBottom: '1px solid rgba(0,0,0,0.05)',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="body1"
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              mb: 4,
              fontSize: '0.95rem',
            }}
          >
            {t('social.trusted')}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: { xs: 3, md: 6 },
              opacity: 0.6,
            }}
          >
            {companies.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.6, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                style={{ filter: 'grayscale(100%)' }}
              >
                <Box
                  sx={{
                    height: 40,
                    width: 120,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(0,0,0,0.03)',
                    borderRadius: '8px',
                    fontSize: '0.85rem',
                    color: 'text.secondary',
                    fontWeight: 500,
                  }}
                >
                  {company}
                </Box>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  )
}
