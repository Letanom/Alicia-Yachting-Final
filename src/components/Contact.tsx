import React from 'react';
import { Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="flex flex-col items-center justify-center space-y-8">
          <a
            href="tel:+905374599544"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-xl rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Phone className="w-6 h-6 mr-2" />
            +90 537 459 95 44
          </a>
          <div className="text-center text-gray-700">
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-green-400 to-blue-500 text-white text-lg font-bold rounded-full shadow-md tracking-widest mb-2 animate-pulse">
              7&nbsp;/&nbsp;24
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;