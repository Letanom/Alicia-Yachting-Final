import React from 'react';
import { ChevronDown, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import sliderVideo from '../slider.mov';

const Hero: React.FC = () => {
  const { language } = useLanguage();

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={sliderVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-800/50 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium border border-white/20">
              ✨ {language === 'tr' ? 'Premium Yat Acentesi' : 'Premium Yacht Agency'}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            Alicia Yachting
          </h1>
          <h2 className="text-2xl md:text-3xl text-blue-200 mb-8 font-light">
            {language === 'tr' ? 'Yat Dünyasında Güvenilir Partneriniz' : 'Your Trusted Partner in Yachting World'}
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            {language === 'tr' 
              ? 'Yat alım-satımından yönetimine, inşasından refitine kadar tüm yat hizmetlerinde profesyonel çözümler sunuyoruz.'
              : 'We provide professional solutions in all yacht services from buying and selling to management, from construction to refit.'
            }
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+902425550123"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Phone className="mr-2 w-5 h-5" />
              {language === 'tr' ? 'Hemen Arayın' : 'Call Now'}
            </a>
            
            <a
              href="mailto:info@aliciayachting.com"
              className="group inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <Mail className="mr-2 w-5 h-5" />
              {language === 'tr' ? 'Bilgi Al' : 'Get Info'}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={scrollToNext} className="text-white/60 hover:text-white transition-colors">
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;