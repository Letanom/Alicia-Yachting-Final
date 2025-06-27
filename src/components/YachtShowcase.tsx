import React from 'react';
import { Anchor, Users, Bed, Calendar, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import guletImage from '../gulet.jpg';
import nightGulet from '../night_gulet.jpg';
import icDizayn from '../ic_dizayn.jpg';

const YachtShowcase: React.FC = () => {
  const { language } = useLanguage();

  const specifications = [
    {
      icon: <Anchor className="w-6 h-6" />,
      label: language === 'tr' ? 'Uzunluk' : 'Length',
      value: '24m'
    },
    {
      icon: <Users className="w-6 h-6" />,
      label: language === 'tr' ? 'Kapasite' : 'Capacity',
      value: '12 ' + (language === 'tr' ? 'Kişi' : 'Guests')
    },
    {
      icon: <Bed className="w-6 h-6" />,
      label: language === 'tr' ? 'Kabin' : 'Cabins',
      value: '3 ' + (language === 'tr' ? 'Kabin' : 'Cabins')
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      label: language === 'tr' ? 'Yapım Yılı' : 'Built Year',
      value: '2002/2024'
    },
    {
      icon: <Anchor className="w-6 h-6" />,
      label: language === 'tr' ? 'Genişlik' : 'Beam',
      value: '6.30m'
    }
  ];

  const features = [
    language === 'tr' ? 'Tam Klimalı' : 'Full Air Conditioning',
    language === 'tr' ? 'WiFi & Ses Sistemi' : 'WiFi & Sound System',
    language === 'tr' ? 'Profesyonel Mürettebat' : 'Professional Crew',
    language === 'tr' ? 'Güneş Güvertesi' : 'Sun Deck'
  ];

  return (
    <section id="yacht" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Yacht Images */}
          <div className="space-y-4">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={guletImage}
                alt="Alicia Gulet"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[4/3] rounded-xl overflow-hidden">
                <img
                  src={nightGulet}
                  alt="Interior"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-[4/3] rounded-xl overflow-hidden">
                <img
                  src={icDizayn}
                  alt="Deck"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Yacht Details */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Alicia Gulet
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {language === 'tr' 
                  ? 'Geleneksel Türk gulet tasarımı ile modern lüksün mükemmel birleşimi. Ege\'nin en güzel sularında unutulmaz deneyimler yaşamak için tasarlanmış.'
                  : 'Perfect combination of traditional Turkish gulet design with modern luxury. Designed to create unforgettable experiences in the most beautiful waters of the Aegean.'
                }
              </p>
            </div>

            {/* Specifications */}
            <div className="grid grid-cols-2 gap-4">
              {specifications.map((spec, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl">
                  <div className="text-blue-600">{spec.icon}</div>
                  <div>
                    <p className="text-sm text-gray-600">{spec.label}</p>
                    <p className="font-semibold text-gray-900">{spec.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Features */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {language === 'tr' ? 'Özellikler' : 'Features'}
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+905374599544"
                className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                {language === 'tr' ? 'Kiralama İçin Arayın' : 'Call for Charter'}
              </a>
              <a
                href="mailto:info@aliciayachting.com"
                className="flex items-center justify-center px-6 py-3 bg-white border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                {language === 'tr' ? 'Bilgi Al' : 'Get Info'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YachtShowcase;