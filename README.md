# UGC Platform Landing Page

Modern bilingual (Arabic/English) landing page for a platform connecting entrepreneurs and brands with UGC creators and influencers.

## Features

- 🌐 **Bilingual Support**: Full Arabic/English language switching with RTL/LTR support
- 🎨 **Glassmorphism Design**: Modern glassmorphism effects throughout
- 📱 **Fully Responsive**: Works perfectly on all devices
- ⚡ **Smooth Animations**: Framer Motion animations for smooth user experience
- 🎯 **Material UI**: Built with Material UI components
- 🔤 **Bolaa Bahajan Font**: Custom Arabic font integration

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
nextjs-landing/
├── app/
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation bar with glassmorphism
│   ├── Hero.tsx            # Hero section merged with navbar
│   ├── SocialProof.tsx     # Animated counters
│   ├── HowItWorks.tsx      # How it works section
│   ├── ForBrands.tsx       # Benefits for brands
│   ├── ForCreators.tsx     # Benefits for creators
│   ├── Features.tsx        # Platform features
│   ├── Pricing.tsx         # Pricing plans
│   ├── FinalCTA.tsx        # Final call to action
│   └── ThemeProvider.tsx   # Material UI theme provider
├── contexts/
│   └── LanguageContext.tsx # Language switching context
└── public/
    └── fonts/
        └── bolaa-bahajan.css # Bolaa Bahajan font
```

## Sections

1. **Navbar + Hero**: Merged section with glassmorphism effect
2. **Social Proof**: Animated counters showing platform stats
3. **How It Works**: Step-by-step process for brands and creators
4. **For Brands**: Benefits and value proposition for entrepreneurs
5. **For Creators**: Benefits and value proposition for content creators
6. **Features**: Platform features grid
7. **Pricing**: Pricing plans with glassmorphism cards
8. **Final CTA**: Strong call to action section

## Language Support

The page supports both Arabic (RTL) and English (LTR) with:
- Automatic direction switching
- Complete translations
- Language preference saved in localStorage

## Font Setup

The Bolaa Bahajan font files should be placed in `public/fonts/`:
- `BolaaBahajan-Regular.woff2`
- `BolaaBahajan-Regular.woff`
- `BolaaBahajan-Medium.woff2`
- `BolaaBahajan-Medium.woff`
- `BolaaBahajan-Bold.woff2`
- `BolaaBahajan-Bold.woff`

## Customization

All colors, spacing, and content can be customized through:
- `components/ThemeProvider.tsx` - Theme colors and typography
- `contexts/LanguageContext.tsx` - All translations
- Individual component files - Section-specific styling

