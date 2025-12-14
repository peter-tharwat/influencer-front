'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'ar' | 'en'

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: (key: string) => string
}

const translations = {
  ar: {
    // Navbar
    'nav.howItWorks': 'كيف يعمل',
    'nav.creators': 'صناع المحتوى',
    'nav.companies': 'الشركات',
    'nav.faq': 'الأسئلة الشائعة',
    'nav.getStarted': 'ابدأ الآن',
    
    // Hero
    'hero.headline': 'سوق يربطك بصناع المحتوى الاحترافيين',
    'hero.subheadline': 'منصة موثوقة تربط الشركات مع صناع المحتوى لتنفيذ حملات تسويقية فعالة',
    'hero.cta.brand': 'ابدأ كشركة',
    'hero.cta.creator': 'انضم كصانع محتوى',
    
    // Social Proof
    'social.trusted': 'موثوق من أكثر من 4500 صانع محتوى',
    
    // How It Works
    'howItWorks.title': 'كيف يعمل',
    'howItWorks.step1.title': 'أنشئ حملتك',
    'howItWorks.step1.desc': 'حدد متطلباتك واختر نوع المحتوى المطلوب',
    'howItWorks.step2.title': 'اختر صناع المحتوى',
    'howItWorks.step2.desc': 'تصفح ملفات صناع المحتوى واختر الأنسب لمشروعك',
    'howItWorks.step3.title': 'استلم المحتوى',
    'howItWorks.step3.desc': 'احصل على محتوى جاهز للاستخدام في وقت قياسي',
    
    // FAQ
    'faq.title': 'الأسئلة الشائعة',
    'faq.q1': 'كيف أبدأ كشركة؟',
    'faq.a1': 'قم بإنشاء حساب، ثم أنشئ حملتك الأولى واختر صناع المحتوى المناسبين.',
    'faq.q2': 'كيف يتم الدفع؟',
    'faq.a2': 'نوفر طرق دفع آمنة ومتعددة تشمل البطاقات الائتمانية والتحويل البنكي.',
    'faq.q3': 'كم يستغرق تنفيذ المحتوى؟',
    'faq.a3': 'عادة ما يستغرق من 3 إلى 7 أيام حسب نوع المحتوى المطلوب.',
    'faq.q4': 'هل يمكنني اختيار صناع المحتوى؟',
    'faq.a4': 'نعم، يمكنك تصفح ملفات صناع المحتوى واختيار من يناسب مشروعك.',
    
    // Value Proposition (For Brands)
    'value.title': 'لماذا يختارنا أصحاب المشاريع؟',
    'value.benefit1': 'صناع محتوى موثوقين',
    'value.benefit1.desc': 'نختار لك أفضل صناع المحتوى بناءً على معايير الجودة والمصداقية',
    'value.benefit2': 'نتائج حقيقية',
    'value.benefit2.desc': 'محتوى أصلي يحقق تفاعل حقيقي وزيادة في المبيعات',
    'value.benefit3': 'دفع آمن',
    'value.benefit3.desc': 'نظام دفع محمي وآمن لضمان سلامة معاملاتك',
    'value.benefit4': 'تنفيذ سريع',
    'value.benefit4.desc': 'استلم محتوى جاهز في وقت قياسي',
    
    // Creators Showcase
    'creators.showcase.title': 'اكتشف صناع المحتوى',
    'creators.showcase.cta': 'اكتشف المزيد',
    
    // For Creators
    'creators.title': 'لصناع المحتوى والمؤثرين',
    'creators.benefit1': 'فرص مدفوعة باستمرار',
    'creators.benefit2': 'حرية اختيار الحملات',
    'creators.benefit3': 'بدون وسطاء',
    'creators.benefit4': 'سحب أرباح سريع',
    
    // Features
    'features.title': 'مميزات المنصة',
    'features.campaignManagement': 'إدارة الحملات',
    'features.creatorMatching': 'مطابقة صناع المحتوى',
    'features.securePayments': 'مدفوعات آمنة',
    'features.analytics': 'تحليلات وتتبع',
    'features.messaging': 'نظام المراسلة',
    'features.reviews': 'نظام التقييمات',
    
    // Pricing
    'pricing.title': 'الأسعار',
    'pricing.free': 'مجاني',
    'pricing.starter': 'مبتدئ',
    'pricing.pro': 'احترافي',
    'pricing.enterprise': 'مؤسسي',
    'pricing.getStarted': 'ابدأ الآن',
    
    // CTA
    'cta.title': 'ابدأ الآن ووصّل مشروعك بصناع المحتوى المناسبين',
    'cta.button': 'ابدأ الآن',
  },
  en: {
    // Navbar
    'nav.howItWorks': 'How it works',
    'nav.creators': 'Creators',
    'nav.companies': 'Companies',
    'nav.faq': 'FAQ',
    'nav.getStarted': 'Get Started',
    
    // Hero
    'hero.headline': 'Connect Your Brand with UGC Creators',
    'hero.subheadline': 'Who Actually Convert',
    'hero.description': 'A smart platform that connects entrepreneurs with UGC creators and influencers to run real campaigns with measurable results.',
    'hero.cta.brand': 'Start as Brand',
    'hero.cta.creator': 'Join as Creator',
    
    // Social Proof
    'social.trusted': 'Trusted by over 4500 creators',
    
    // How It Works
    'howItWorks.title': 'How It Works',
    'howItWorks.step1.title': 'Create Your Campaign',
    'howItWorks.step1.desc': 'Define your requirements and choose the type of content needed',
    'howItWorks.step2.title': 'Choose Creators',
    'howItWorks.step2.desc': 'Browse creator profiles and select the best fit for your project',
    'howItWorks.step3.title': 'Receive Content',
    'howItWorks.step3.desc': 'Get ready-to-use content in record time',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.q1': 'How do I start as a company?',
    'faq.a1': 'Create an account, then create your first campaign and choose suitable creators.',
    'faq.q2': 'How is payment processed?',
    'faq.a2': 'We provide secure and multiple payment methods including credit cards and bank transfers.',
    'faq.q3': 'How long does content delivery take?',
    'faq.a3': 'Usually takes 3 to 7 days depending on the type of content required.',
    'faq.q4': 'Can I choose creators?',
    'faq.a4': 'Yes, you can browse creator profiles and choose those that fit your project.',
    
    // Value Proposition
    'value.title': 'Why do entrepreneurs choose us?',
    'value.benefit1': 'Trusted creators',
    'value.benefit1.desc': 'We select the best creators based on quality and credibility standards',
    'value.benefit2': 'Real results',
    'value.benefit2.desc': 'Original content that drives real engagement and increased sales',
    'value.benefit3': 'Secure payment',
    'value.benefit3.desc': 'Protected and secure payment system to ensure transaction safety',
    'value.benefit4': 'Fast execution',
    'value.benefit4.desc': 'Receive ready-to-use content in record time',
    
    // Creators Showcase
    'creators.showcase.title': 'Discover Creators',
    'creators.showcase.cta': 'Discover More',
    
    // For Creators
    'creators.title': 'For Creators & Influencers',
    'creators.benefit1': 'Continuous paid opportunities',
    'creators.benefit2': 'Freedom to choose campaigns',
    'creators.benefit3': 'No middlemen',
    'creators.benefit4': 'Fast payout withdrawal',
    
    // Features
    'features.title': 'Platform Features',
    'features.campaignManagement': 'Campaign Management',
    'features.creatorMatching': 'Creator Matching',
    'features.securePayments': 'Secure Payments',
    'features.analytics': 'Analytics & Tracking',
    'features.messaging': 'Messaging System',
    'features.reviews': 'Review & Rating System',
    
    // Pricing
    'pricing.title': 'Pricing',
    'pricing.free': 'Free',
    'pricing.starter': 'Starter',
    'pricing.pro': 'Pro',
    'pricing.enterprise': 'Enterprise',
    'pricing.getStarted': 'Get Started',
    
    // CTA
    'cta.title': 'Start now and connect your project with the right creators',
    'cta.button': 'Start Now',
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('ar')

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language
    if (saved && (saved === 'ar' || saved === 'en')) {
      setLanguage(saved)
    }
  }, [])

  const toggleLanguage = () => {
    const newLang = language === 'ar' ? 'en' : 'ar'
    setLanguage(newLang)
    localStorage.setItem('language', newLang)
    document.documentElement.lang = newLang
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr'
  }

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
  }, [language])

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['ar']] || key
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

