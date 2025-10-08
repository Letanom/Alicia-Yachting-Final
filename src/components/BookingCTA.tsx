import React from 'react';
import { Phone, Mail, MessageCircle, ArrowRight, Anchor } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import guletImage from '../gulet.jpg';

const BookingCTA: React.FC = () => {
  const { language } = useLanguage();

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/3 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 border border-white/20 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
            <Anchor className="w-4 h-4 mr-2" />
            'Alicia Gulet'
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {language === 'tr' ? 'Yat Hizmetleri İçin İletişime Geçin' : 'Contact Us for Yacht Services'}
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            {language === 'tr' 
              ? 'Alicia Gulet kiralama, yat alım-satım danışmanlığı ve diğer yat hizmetleri için profesyonel ekibimizle iletişime geçin.'
              : 'Contact our professional team for Alicia Gulet charter, yacht buying-selling consultancy and other yacht services.'
            }
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Quick Contact Options */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300 group">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">
              {language === 'tr' ? 'Anında Arayın' : 'Call Instantly'}
            </h3>
            <p className="text-blue-100 mb-4">
              {language === 'tr' ? 'Yat kiralama ve satış danışmanlığı' : 'Yacht charter and sales consultancy'}
            </p>
            <a 
              href="tel:+905374599544" 
              className="text-white font-semibold hover:text-blue-200 transition-colors"
            >
              +90 537 459 95 44
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300 group">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">
              {language === 'tr' ? 'E-posta Gönderin' : 'Send Email'}
            </h3>
            <p className="text-blue-100 mb-4">
              {language === 'tr' ? 'Detaylı bilgi ve özel teklifler' : 'Detailed information and special offers'}
            </p>
            <a 
              href="mailto:info@aliciayachting.com" 
              className="text-white font-semibold hover:text-blue-200 transition-colors"
            >
              info@aliciayachting.com
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300 group">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">
              {language === 'tr' ? 'Danışmanlık Alın' : 'Get Consultancy'}
            </h3>
            <p className="text-blue-100 mb-4">
              {language === 'tr' ? 'Uzman yat danışmanlığı' : 'Expert yacht consultancy'}
            </p>
            <button 
              onClick={scrollToContact}
              className="text-white font-semibold hover:text-blue-200 transition-colors"
            >
              {language === 'tr' ? 'Mesaj Gönder' : 'Send Message'}
            </button>
          </div>
        </div>

        {/* Yacht Highlight */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                {language === 'tr' ? 'Alicia Gulet - Özel Fırsat' : 'Alicia Gulet - Special Opportunity'}
              </h3>
              <div className="flex items-center space-x-2 mb-4">
                {/* Fiyat kaldırıldı */}
              </div>
              <ul className="space-y-2 text-blue-100">
                <li>• 24m {language === 'tr' ? 'uzunluk, 12 kişi kapasiteli' : 'length, 12 guest capacity'}</li>
                <li>• 6 {language === 'tr' ? 'lüks kabin' : 'luxury cabins'}</li>
                <li>• {language === 'tr' ? 'Profesyonel mürettebat dahil' : 'Professional crew included'}</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="aspect-video rounded-xl overflow-hidden mb-4">
                <img
                  src={guletImage}
                  alt="Alicia Gulet"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Main CTA */}
        <div className="text-center">
          <a
            href="tel:+905374599544"
            className="group inline-flex items-center px-8 py-4 bg-white text-blue-700 font-bold text-lg rounded-full hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Phone className="mr-2 w-5 h-5" />
            {language === 'tr' ? 'Hemen Arayın - Özel Teklif Alın' : 'Call Now - Get Special Offer'}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="mt-4 text-blue-100">
            {language === 'tr' 
              ? '24 saat içinde size dönüş yapıyoruz • Ücretsiz yat danışmanlığı'
              : 'We respond within 24 hours • Free yacht consultancy'
            }
          </p>
        </div>
      </div>
    </section>
  );
};

export default BookingCTA;