import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'tr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<string, string>> = {
  tr: {
    // Navigation
    'nav.home': 'Ana Sayfa',
    'nav.about': 'Hakkımızda',     
    'nav.yacht': 'Yatlarımız',
    'nav.gallery': 'Galeri',
    'nav.contact': 'İletişim',
    'nav.forSale': 'Satılık',
    
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
    
    // For Sale Section
    'forSale.title': 'Satılık Yatlar',
    'forSale.subtitle': 'Hayalinizdeki yatı bulun',
    'forSale.motorYacht': 'Motor Yat',
    'forSale.gulet': 'Gulet',
    'forSale.speedboat': 'Sürat Teknesi',
    'forSale.catamaran': 'Katamaran',
    'forSale.all': 'Tümünü Göster',
    'forSale.filter': 'Filtrele',
    'forSale.guletDetailsTitle': 'Alicia Gulet',
    'forSale.guletDetailsDesc': 'Bodrum guleti, Ege Bölgesi\'ne özgü, geleneksel tarzda ahşap bir yelkenli teknedir. El işçiliğiyle yapılan bu tekneler, mavi yolculuklar için konforlu ve estetik bir deneyim sunar. Günümüzde hem turizmde hem kültürel miras olarak önemli bir yer tutar.',
    'forSale.contactButton': 'İletişime Geç',
  },
  en: {
    // Navigation  
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.yacht': 'Our Yachts',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    'nav.forSale': 'For Sale',
    
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
    
    // For Sale Section
    'forSale.title': 'Yachts for Sale',
    'forSale.subtitle': 'Find your dream yacht',
    'forSale.motorYacht': 'Motor Yacht',
    'forSale.gulet': 'Gulet',
    'forSale.speedboat': 'Speedboat',
    'forSale.catamaran': 'Catamaran',
    'forSale.all': 'Show All',
    'forSale.filter': 'Filter',
    'forSale.guletDetailsTitle': 'Alicia Gulet',
    'forSale.guletDetailsDesc': 'The Bodrum gulet is a traditional wooden sailing yacht unique to the Aegean region. Handcrafted, these boats offer a comfortable and aesthetic experience for blue cruises. Today, they hold an important place both in tourism and as a cultural heritage.',
    'forSale.contactButton': 'Contact Now',
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