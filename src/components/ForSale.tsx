import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import guletImage from '../gulet.jpg';
import { Users, Bed, Calendar, Anchor } from 'lucide-react';

const yachtTypes = [
  'all',
  'motorYacht',
  'gulet',
  'speedboat',
  'catamaran',
];

const ForSale: React.FC = () => {
  const { t, language } = useLanguage();
  const [filter, setFilter] = useState('all');

  // Alicia Gulet teknik bilgiler
  const guletSpecs = [
    { icon: <Anchor className="w-5 h-5 text-blue-700" />, label: language === 'tr' ? 'Uzunluk' : 'Length', value: '24m' },
    { icon: <Users className="w-5 h-5 text-blue-700" />, label: language === 'tr' ? 'Kapasite' : 'Capacity', value: '12' },
    { icon: <Bed className="w-5 h-5 text-blue-700" />, label: language === 'tr' ? 'Kabin' : 'Cabins', value: '3' },
    { icon: <Calendar className="w-5 h-5 text-blue-700" />, label: language === 'tr' ? 'Yapım Yılı' : 'Built', value: '2002/2024' },
    { icon: <Anchor className="w-5 h-5 text-blue-700" />, label: language === 'tr' ? 'Genişlik' : 'Beam', value: '6.30m' },
  ];

  const gulets = [
    {
      title: t('forSale.guletDetailsTitle'),
      desc: t('forSale.guletDetailsDesc'),
      image: guletImage,
      specs: guletSpecs,
      price: '€1,000,000',
    },
  ];

  // Filtreye göre gösterilecek alanlar
  const showMotorYacht = filter === 'all' || filter === 'motorYacht';
  const showGulet = filter === 'all' || filter === 'gulet';
  const showSpeedboat = filter === 'all' || filter === 'speedboat';
  const showCatamaran = filter === 'all' || filter === 'catamaran';

  return (
    <section id="for-sale" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t('forSale.title')}</h2>
          <p className="text-xl text-gray-600 mb-6">{t('forSale.subtitle')}</p>
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {yachtTypes.map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-4 py-2 rounded-full font-medium border transition-colors duration-200 ${
                  filter === type
                    ? 'bg-blue-700 text-white border-blue-700'
                    : 'bg-white text-blue-700 border-blue-300 hover:bg-blue-50'
                }`}
              >
                {t(`forSale.${type}`)}
              </button>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Motor Yat Section */}
          {showMotorYacht && (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">{t('forSale.motorYacht')}</h3>
              <p className="text-gray-700 mb-2">Motor yatlar burada listelenecek...</p>
            </div>
          )}
          {/* Gulet Section */}
          {showGulet && (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-blue-700 mb-8">{t('forSale.gulet')}</h3>
              <div className="grid gap-8">
                {gulets.map((gulet, idx) => (
                  <div key={idx} className="rounded-2xl overflow-hidden shadow-md bg-gray-50 hover:shadow-xl transition-shadow duration-300">
                    <img src={gulet.image} alt={gulet.title} className="w-full h-56 object-cover" />
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xl font-bold text-blue-800">{gulet.title}</h4>
                        <span className="flex items-center text-2xl font-bold text-green-700">1,000,000&nbsp;€</span>
                      </div>
                      <div className="flex flex-wrap gap-4 mb-4">
                        {gulet.specs.map((spec, i) => (
                          <div key={i} className="flex items-center gap-1 bg-blue-50 px-3 py-1 rounded-full text-sm font-medium text-blue-900">
                            {spec.icon}
                            <span>{spec.label}:</span>
                            <span className="font-semibold">{spec.value}</span>
                          </div>
                        ))}
                      </div>
                      <p className="text-gray-700 text-sm mb-4">{gulet.desc}</p>
                      <a href="tel:+905374599544" className="mt-2 inline-block px-5 py-2 bg-blue-700 text-white rounded-full font-medium hover:bg-blue-800 transition">{t('forSale.contactButton')}</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* Sürat Teknesi Section */}
          {showSpeedboat && (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">{t('forSale.speedboat')}</h3>
              <p className="text-gray-700 mb-2">Sürat tekneleri burada listelenecek...</p>
            </div>
          )}
          {/* Katamaran Section */}
          {showCatamaran && (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">{t('forSale.catamaran')}</h3>
              <p className="text-gray-700 mb-2">Katamaranlar burada listelenecek...</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ForSale; 