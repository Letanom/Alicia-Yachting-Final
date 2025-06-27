import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'tr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  tr: {
    // Navigation
    'nav.home': 'Ana Sayfa',
    'nav.about': 'Hakkımızda',     
    'nav.yacht': 'Yatımız',
    'nav.gallery': 'Galeri',
    'nav.contact': 'İletişim',
    
    // Header
    'header.call': 'Arayın',
    
    // Hero Section
    'hero.title': 'Alicia Yachting',
    'hero.subtitle': 'Yat Dünyasında Güvenilir Partneriniz',
    'hero.description': 'Yat alım-satımından yönetimine, inşasından refitine kadar tüm yat hizmetlerinde profesyonel çözümler sunuyoruz.',
    'hero.cta': 'Hemen Arayın',
    
    // About Section
    'about.title': 'Yat Dünyasında Uzman Çözümler',
    'about.description': 'Alicia Yachting olarak, yat sektöründe 15 yılı aşkın deneyimimizle müşterilerimize kapsamlı hizmetler sunuyoruz.',
    
    // Gallery
    'gallery.title': 'Galeri',
    'gallery.subtitle': 'Alicia Gulet\'in muhteşem detayları',
    
    // Contact
    'contact.title': 'İletişim',
    'contact.subtitle': 'Yat hizmetleri için bizimle iletişime geçin',
    'contact.name': 'Adınız',
    'contact.email': 'E-posta Adresiniz',
    'contact.message': 'Mesajınız',
    'contact.send': 'Mesaj Gönder',
    'contact.info': 'İletişim Bilgileri',
    
    // Footer
    'footer.description': 'Yat dünyasında profesyonel hizmetlerin adresi.',
    'footer.rights': 'Tüm hakları saklıdır.',
  },
  en: {
    // Navigation  
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.yacht': 'Our Yacht',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    
    // Header
    'header.call': 'Call',
    
    // Hero Section
    'hero.title': 'Alicia Yachting',
    'hero.subtitle': 'Your Trusted Partner in Yachting World',
    'hero.description': 'We provide professional solutions in all yacht services from buying and selling to management, from construction to refit.',
    'hero.cta': 'Call Now',
    
    // About Section
    'about.title': 'Expert Solutions in Yachting World',
    'about.description': 'As Alicia Yachting, we provide comprehensive services to our clients with over 15 years of experience in the yacht industry.',
    
    // Gallery
    'gallery.title': 'Gallery',
    'gallery.subtitle': 'Magnificent details of Alicia Gulet',
    
    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': 'Get in touch for yacht services',
    'contact.name': 'Your Name',
    'contact.email': 'Your Email',
    'contact.message': 'Your Message',
    'contact.send': 'Send Message',
    'contact.info': 'Contact Information',
    
    // Footer
    'footer.description': 'Your destination for professional yacht services.',
    'footer.rights': 'All rights reserved.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('tr');
  
  const t = (key: string): string => {
    return translations[language][key] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};