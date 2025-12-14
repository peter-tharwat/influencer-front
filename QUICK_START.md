# Quick Start Guide

## Installation

1. Navigate to the Next.js landing page directory:
```bash
cd nextjs-landing
```

2. Install dependencies:
```bash
npm install
```

3. Add Bolaa Bahajan font files to `public/fonts/` (see FONT_SETUP.md)

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Features Implemented

✅ **Bilingual Support (Arabic/English)**
- Full RTL/LTR support
- Language switching with localStorage persistence
- Complete translations for all sections

✅ **Glassmorphism Design**
- Navbar with glassmorphism effect
- Transparent backgrounds with blur effects
- Smooth transitions on scroll

✅ **All Required Sections**
1. Navbar + Hero (merged with glassmorphism)
2. Social Proof (animated counters)
3. How It Works (for brands and creators)
4. For Brands (benefits section)
5. For Creators (benefits section)
6. Platform Features (grid layout)
7. Pricing (4 plans with glassmorphism cards)
8. Final CTA (strong call to action)

✅ **Responsive Design**
- Mobile-first approach
- Breakpoints for all screen sizes
- Mobile drawer menu

✅ **Animations**
- Framer Motion animations
- Smooth scroll effects
- Hover effects on cards
- Animated counters

✅ **Material UI Integration**
- Theme provider with custom colors
- RTL/LTR direction support
- Consistent design system

## Customization

### Colors
Edit `components/ThemeProvider.tsx` to change:
- Primary color (dark blue/black)
- Secondary color (gold)
- Background colors

### Content
Edit `contexts/LanguageContext.tsx` to update:
- All text translations
- Arabic and English content

### Sections
Each section is a separate component in `components/`:
- Modify individual components to customize sections
- All components support RTL/LTR automatically

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
nextjs-landing/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Main page
│   └── globals.css      # Global styles + font definitions
├── components/          # All page sections
├── contexts/           # Language context
└── public/
    └── fonts/          # Place Bolaa Bahajan fonts here
```

## Notes

- The font files need to be added manually (see FONT_SETUP.md)
- All sections are fully responsive
- Language preference is saved in localStorage
- Smooth scroll is enabled for anchor links
- Glassmorphism effects work best on modern browsers

