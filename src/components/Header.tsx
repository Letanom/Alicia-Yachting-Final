import React, { useState, useEffect } from 'react';
import { Menu, X, Languages, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.about', href: '#about' },
    { key: 'nav.yacht', href: '#yacht' },
    { key: 'nav.forSale', href: '#for-sale' },
    { key: 'nav.contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className={`text-2xl font-handwritten font-bold ${isScrolled ? 'text-blue-900' : 'text-white'}`} style={{ fontSize: '1.8rem' }}>
              Alicia Yachting
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.href)}
                className={`font-medium transition-colors hover:text-blue-400 ${
                  isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white'
                }`}
              >
                {t(item.key)}
              </button>
            ))}
            
            {/* Language Switcher */}
            <div className="flex items-center space-x-2">
              <Languages className={`w-5 h-5 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
              <button
                onClick={() => setLanguage(language === 'tr' ? 'en' : 'tr')}
                className={`px-3 py-1 rounded-md font-medium transition-colors ${
                  isScrolled 
                    ? 'bg-blue-100 text-blue-800 hover:bg-blue-200' 
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                {language.toUpperCase()}
              </button>
            </div>

            {/* Call Button */}
            <a
              href="tel:+902425550123"
              className={`flex items-center px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                isScrolled
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <Phone className="w-4 h-4 mr-2" />
              {t('header.call')}
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-md ${isScrolled ? 'text-gray-700' : 'text-white'}`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-6 space-y-4">
            {navigation.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                {t(item.key)}
              </button>
            ))}
            <div className="pt-4 border-t space-y-3">
              <button
                onClick={() => setLanguage(language === 'tr' ? 'en' : 'tr')}
                className="flex items-center space-x-2 w-full px-3 py-2 rounded-md bg-blue-100 text-blue-800 font-medium"
              >
                <Languages className="w-4 h-4" />
                <span>{language === 'tr' ? 'English' : 'Türkçe'}</span>
              </button>
              <a
                href="tel:+902425550123"
                className="flex items-center space-x-2 w-full px-3 py-2 rounded-md bg-blue-600 text-white font-medium"
              >
                <Phone className="w-4 h-4" />
                <span>{t('header.call')}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;