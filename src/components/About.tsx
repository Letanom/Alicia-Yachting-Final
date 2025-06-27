import React from 'react';
import { Anchor, Users, Award, Ship, Crown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import heroImage from '../hero.jpeg';

const About: React.FC = () => {
  const { language } = useLanguage();

  const services = [
    {
      icon: <Ship className="w-8 h-8 text-blue-600" />,
      title: language === 'tr' ? 'Yat Satış & Alım' : 'Yacht Sales & Purchase',
      description: language === 'tr' ? 'Profesyonel danışmanlık ile yat alım satım işlemleri' : 'Yacht buying and selling with professional consultancy'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: language === 'tr' ? 'Yat Yönetimi' : 'Yacht Management',
      description: language === 'tr' ? 'Yatınızın bakım ve işletme yönetimi' : 'Maintenance and operational management of your yacht'
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: language === 'tr' ? 'Yat İnşa & Refit' : 'Yacht Build & Refit',
      description: language === 'tr' ? 'Özel tasarım yat inşası ve yenileme hizmetleri' : 'Custom yacht construction and renovation services'
    },
    {
      icon: <Crown className="w-8 h-8 text-blue-600" />,
      title: language === 'tr' ? 'VIP Danışmanlık' : 'VIP Consultancy',
      description: language === 'tr' ? 'Kişiye özel yat danışmanlık hizmetleri' : 'Personalized yacht consultancy services'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {language === 'tr' ? 'Yat Dünyasında Uzman Çözümler' : 'Expert Solutions in Yachting World'}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {language === 'tr' 
                  ? 'Alicia Yachting olarak, yat sektöründe 15 yılı aşkın deneyimimizle müşterilerimize kapsamlı hizmetler sunuyoruz. Yat alım-satımından yönetimine, inşasından refitine kadar tüm ihtiyaçlarınız için yanınızdayız.'
                  : 'As Alicia Yachting, we provide comprehensive services to our clients with over 15 years of experience in the yacht industry. We are here for all your needs from yacht buying and selling to management, from construction to refit.'
                }
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="group p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Yacht Agency"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Anchor className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">15+</p>
                  <p className="text-sm text-gray-600">
                    {language === 'tr' ? 'Yıl Deneyim' : 'Years Experience'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;