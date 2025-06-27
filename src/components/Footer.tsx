import React from 'react';
import { Anchor, Facebook, Instagram, Mail, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Anchor className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold">Alicia Yachting</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/aliciayachting" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="mailto:info@aliciayachting.com" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Hızlı Bağlantılar</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                  Ana Sayfa
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  Hakkımızda
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Hizmetlerimiz
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-white transition-colors">
                  Galeri
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  İletişim
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">İletişim</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <a href="tel:+905374599544" className="text-gray-400 hover:text-white transition-colors font-semibold">+90 537 459 95 44</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">info@aliciayachting.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Alicia Yachting. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;