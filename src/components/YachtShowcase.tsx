import React, { useState } from 'react';
import { Anchor, Users, Bed, Calendar, Phone, Mail, ChevronLeft, ChevronRight, X, Music, Tv, Wind, Wrench, Zap, Fuel, Droplets, Gauge } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import guletImage from '../gulet.jpg';
import nightGulet from '../night_gulet.jpg';
import icDizayn from '../ic_dizayn.jpg';

// === DIŞ GÜNDÜZ SAHNELER ===
import Gunduz1 from '../Gunduz1.jpg';
import Gunduz2 from '../Gunduz2.jpg';
import Gunduz3 from '../Gunduz3.jpg';
import Gunduz4 from '../Gunduz4.jpg';
import Gunduz5 from '../Gunduz5.jpg';
import Gunduz6 from '../Gunduz6.jpg';
import Gunduz7 from '../Gunduz7.jpg';
import Dis3 from '../Dis3.jpg';
import Dis4 from '../Dis4.jpg';

// === DIŞ GECE SAHNELER ===
import Gece1 from '../Gece1.jpg';
import DisArkaGece from '../DisArkaGece.jpg';

// === ARKA BAHÇE ALANLARI ===
import ArkaBangaca1 from '../ArkaBangaca1.jpg';
import ArkaBangaca2 from '../ArkaBangaca2.jpg';
import ArkaBangaca3 from '../ArkaBangaca3.jpg';
import ArkaBangaca4 from '../ArkaBangaca4.jpg';

// === SALONLAR (Numara Sırasına Göre) ===
import Salon0 from '../Salon0.jpg';
import Salon1 from '../Salon1.jpg';
import Salon1_5 from '../Salon1.5.jpg';
import Salon2 from '../Salon2.jpg';
import Salon3 from '../Salon3.jpg';
import Salon5 from '../Salon5.jpg';

// === ODALAR (Numara Sırasına Göre) ===
import Oda0 from '../Oda0.jpg';
import Oda1 from '../Oda1.jpg';
import Oda2 from '../Oda2.jpg';
import Oda3 from '../Oda3.jpg';
import Oda4 from '../Oda4.jpg';
import Oda5 from '../Oda5.jpg';
import Oda6 from '../Oda6.jpg';
import Oda7 from '../Oda7.jpg';
import Oda8 from '../Oda8.jpg';

// === DOUBLE ODALAR ===
import Doda1 from '../Doda1.jpg';
import Doda2 from '../Doda2.jpg';

// === TWIN ODALAR (Sırasıyla) ===
import TwinOda1 from '../TwinOda1.jpg';
import TwinOda2 from '../TwinOda2.jpg';
import TwinOda3 from '../TwinOda3.jpg';
import TwinOda4 from '../TwinOda4.jpg';

// === TWIN ODA BANYOLARI (Numara Sırasına Göre) ===
import TwinOdaBanyo1 from '../TwinOdaBanyo1.jpg';

const YachtShowcase: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Kategorilere göre organize edilmiş fotoğraflar - Gerçek dosya isimleri
  const galleryImages = [
    // === 1. DIŞ GÜNDÜZ SAHNELER ===
    { src: guletImage, alt: language === 'tr' ? 'Ana Gulet - Gündüz' : 'Main Gulet - Daytime' },
    { src: Gunduz1, alt: language === 'tr' ? 'Dış Gündüz 1' : 'Exterior Daytime 1' },
    { src: Gunduz2, alt: language === 'tr' ? 'Dış Gündüz 2' : 'Exterior Daytime 2' },
    { src: Gunduz3, alt: language === 'tr' ? 'Dış Gündüz 3' : 'Exterior Daytime 3' },
    { src: Gunduz4, alt: language === 'tr' ? 'Dış Gündüz 4' : 'Exterior Daytime 4' },
    { src: Gunduz5, alt: language === 'tr' ? 'Dış Gündüz 5' : 'Exterior Daytime 5' },
    { src: Gunduz6, alt: language === 'tr' ? 'Dış Gündüz 6' : 'Exterior Daytime 6' },
    { src: Gunduz7, alt: language === 'tr' ? 'Dış Gündüz 7' : 'Exterior Daytime 7' },
    { src: Dis3, alt: language === 'tr' ? 'Dış Görünüm 3' : 'Exterior View 3' },
    { src: Dis4, alt: language === 'tr' ? 'Dış Görünüm 4' : 'Exterior View 4' },
    
    // === 2. DIŞ GECE SAHNELER ===
    { src: nightGulet, alt: language === 'tr' ? 'Ana Gulet - Gece' : 'Main Gulet - Night' },
    { src: Gece1, alt: language === 'tr' ? 'Dış Gece 1' : 'Exterior Night 1' },
    { src: DisArkaGece, alt: language === 'tr' ? 'Dış Arka - Gece' : 'Exterior Aft - Night' },
    
    // === 3. ARKA BAHÇE ALANLARI ===
    { src: ArkaBangaca1, alt: language === 'tr' ? 'Arka Bahçe 1' : 'Aft Garden 1' },
    { src: ArkaBangaca2, alt: language === 'tr' ? 'Arka Bahçe 2' : 'Aft Garden 2' },
    { src: ArkaBangaca3, alt: language === 'tr' ? 'Arka Bahçe 3' : 'Aft Garden 3' },
    { src: ArkaBangaca4, alt: language === 'tr' ? 'Arka Bahçe 4' : 'Aft Garden 4' },
    
    // === 4. SALONLAR (Numara Sırasına Göre) ===
    { src: icDizayn, alt: language === 'tr' ? 'Ana Salon İç Tasarım' : 'Main Salon Interior Design' },
    { src: Salon0, alt: language === 'tr' ? 'Salon 0' : 'Salon 0' },
    { src: Salon1, alt: language === 'tr' ? 'Salon 1' : 'Salon 1' },
    { src: Salon1_5, alt: language === 'tr' ? 'Salon 1.5' : 'Salon 1.5' },
    { src: Salon2, alt: language === 'tr' ? 'Salon 2' : 'Salon 2' },
    { src: Salon3, alt: language === 'tr' ? 'Salon 3' : 'Salon 3' },
    { src: Salon5, alt: language === 'tr' ? 'Salon 5' : 'Salon 5' },
    
    // === 5. ODALAR (Numara Sırasına Göre) ===
    { src: Oda0, alt: language === 'tr' ? 'Oda 0' : 'Room 0' },
    { src: Oda1, alt: language === 'tr' ? 'Oda 1' : 'Room 1' },
    { src: Oda2, alt: language === 'tr' ? 'Oda 2' : 'Room 2' },
    { src: Oda3, alt: language === 'tr' ? 'Oda 3' : 'Room 3' },
    { src: Oda4, alt: language === 'tr' ? 'Oda 4' : 'Room 4' },
    { src: Oda5, alt: language === 'tr' ? 'Oda 5' : 'Room 5' },
    { src: Oda6, alt: language === 'tr' ? 'Oda 6' : 'Room 6' },
    { src: Oda7, alt: language === 'tr' ? 'Oda 7' : 'Room 7' },
    { src: Oda8, alt: language === 'tr' ? 'Oda 8' : 'Room 8' },
    
    // === 6. DOUBLE ODALAR ===
    { src: Doda1, alt: language === 'tr' ? 'Double Oda 1' : 'Double Room 1' },
    { src: Doda2, alt: language === 'tr' ? 'Double Oda 2' : 'Double Room 2' },
    
    // === 7. TWIN ODALAR (Sırasıyla) ===
    { src: TwinOda1, alt: language === 'tr' ? 'Twin Oda 1' : 'Twin Room 1' },
    { src: TwinOda2, alt: language === 'tr' ? 'Twin Oda 2' : 'Twin Room 2' },
    { src: TwinOda3, alt: language === 'tr' ? 'Twin Oda 3' : 'Twin Room 3' },
    { src: TwinOda4, alt: language === 'tr' ? 'Twin Oda 4' : 'Twin Room 4' },
    
    // === 8. TWIN ODA BANYOLARI (Numara Sırasına Göre) ===
    { src: TwinOdaBanyo1, alt: language === 'tr' ? 'Twin Oda Banyo 1' : 'Twin Room Bathroom 1' }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => prev === 0 ? galleryImages.length - 1 : prev - 1);
  };

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextLightboxImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevLightboxImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

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

  // Accommodation data
  const accommodationData = {
    title: language === 'tr' ? 'Konaklama' : 'Accommodation',
    cabins: {
      title: language === 'tr' ? 'Kabinler' : 'Cabins',
      master: '1 Master',
      twin: '1 Twin',
      double: '1 Double'
    },
    tvSystem: {
      title: language === 'tr' ? 'TV Sistemi' : 'TV System',
      location: language === 'tr' ? 'Salonda ve Master Kabinde' : 'In Salon and Master Cabin'
    },
    guests: {
      title: language === 'tr' ? 'Misafirler' : 'Guests',
      capacity: language === 'tr' ? '6-12 (Konaklama 6-Günlük 12)' : '6-12 (Stay Over 6-Daily 12)'
    },
    musicSystem: {
      title: language === 'tr' ? 'Müzik Sistemi' : 'Music System',
      location: language === 'tr' ? 'Salonda ve Güverte Hoparlörlerinde' : 'In Salon and Deck Speakers'
    },
    crew: {
      title: language === 'tr' ? 'Ekip' : 'Crew',
      count: '2'
    },
    tender: {
      title: language === 'tr' ? 'Tender' : 'Tender',
      description: language === 'tr' 
        ? '50 HP Dıştan Takma Motorlu 4.20 m tender' 
        : '4.20 m tender with 50 HP Outboard Engine'
    },
    ac: {
      title: language === 'tr' ? 'Klima' : 'Air Conditioning',
      description: language === 'tr' 
        ? 'Evet (Gece kullanımı 2 saat)' 
        : 'Yes (A/C use during night 2 hours)'
    }
  };

  // Specifications data
  const fullSpecificationsData = {
    title: language === 'tr' ? 'Teknik Özellikler' : 'Specifications',
    builtRefit: {
      title: language === 'tr' ? 'İnşa/Yenileme' : 'Built/Refit',
      value: '2002/2024'
    },
    builder: {
      title: language === 'tr' ? 'İnşaatçı' : 'Builder',
      value: 'Ethemoğlu Boatyard & Design'
    },
    basePort: {
      title: language === 'tr' ? 'Ana Liman' : 'Base Port',
      value: 'Bodrum'
    },
    length: {
      title: language === 'tr' ? 'Uzunluk' : 'Length',
      value: '24 m / 72 ft'
    },
    beam: {
      title: language === 'tr' ? 'Genişlik' : 'Beam',
      value: '6.30 m / 20.66 ft'
    },
    draft: {
      title: language === 'tr' ? 'Taskelek' : 'Draft',
      value: '2.18 m / 7.15 ft'
    },
    speed: {
      title: language === 'tr' ? 'Hız' : 'Speed',
      value: '8.5 –10 Knots'
    },
    mainEngine: {
      title: language === 'tr' ? 'Ana Motor' : 'Main Engine',
      value: '1x MAN MARINE DIESEL 440 HP'
    },
    fuelConsumption: {
      title: language === 'tr' ? 'Yakıt Tüketimi' : 'Fuel Consumption',
      value: language === 'tr' ? '70 lt–80 lt seyir halinde' : '70 lt–80 lt at cruising'
    },
    generator: {
      title: language === 'tr' ? 'Jeneratör' : 'Generator',
      value: '1x Onan Cummins 13.5 kW'
    },
    fuelCapacity: {
      title: language === 'tr' ? 'Yakıt Kapasitesi' : 'Fuel Capacity',
      value: '3.000 lt'
    },
    waterCapacity: {
      title: language === 'tr' ? 'Su Kapasitesi' : 'Water Capacity',
      value: '3.000 lt'
    }
  };

  const accommodationFeatures = [
    { icon: <Bed className="w-5 h-5" />, title: accommodationData.cabins.title, value: `${accommodationData.cabins.master} - ${accommodationData.cabins.twin} - ${accommodationData.cabins.double}` },
    { icon: <Users className="w-5 h-5" />, title: accommodationData.guests.title, value: accommodationData.guests.capacity },
    { icon: <Tv className="w-5 h-5" />, title: accommodationData.tvSystem.title, value: accommodationData.tvSystem.location },
    { icon: <Music className="w-5 h-5" />, title: accommodationData.musicSystem.title, value: accommodationData.musicSystem.location },
    { icon: <Anchor className="w-5 h-5" />, title: accommodationData.crew.title, value: accommodationData.crew.count },
    { icon: <Wind className="w-5 h-5" />, title: accommodationData.ac.title, value: accommodationData.ac.description }
  ];

  const technicalSpecs = [
    { icon: <Wrench className="w-5 h-5" />, title: fullSpecificationsData.builtRefit.title, value: fullSpecificationsData.builtRefit.value },
    { icon: <Anchor className="w-5 h-5" />, title: fullSpecificationsData.builder.title, value: fullSpecificationsData.builder.value },
    { icon: <Droplets className="w-5 h-5" />, title: fullSpecificationsData.basePort.title, value: fullSpecificationsData.basePort.value },
    { icon: <Gauge className="w-5 h-5" />, title: fullSpecificationsData.length.title, value: fullSpecificationsData.length.value },
    { icon: <Gauge className="w-5 h-5" />, title: fullSpecificationsData.beam.title, value: fullSpecificationsData.beam.value },
    { icon: <Gauge className="w-5 h-5" />, title: fullSpecificationsData.draft.title, value: fullSpecificationsData.draft.value },
    { icon: <Gauge className="w-5 h-5" />, title: fullSpecificationsData.speed.title, value: fullSpecificationsData.speed.value },
    { icon: <Zap className="w-5 h-5" />, title: fullSpecificationsData.mainEngine.title, value: fullSpecificationsData.mainEngine.value },
    { icon: <Fuel className="w-5 h-5" />, title: fullSpecificationsData.fuelConsumption.title, value: fullSpecificationsData.fuelConsumption.value },
    { icon: <Zap className="w-5 h-5" />, title: fullSpecificationsData.generator.title, value: fullSpecificationsData.generator.value },
    { icon: <Fuel className="w-5 h-5" />, title: fullSpecificationsData.fuelCapacity.title, value: fullSpecificationsData.fuelCapacity.value },
    { icon: <Droplets className="w-5 h-5" />, title: fullSpecificationsData.waterCapacity.title, value: fullSpecificationsData.waterCapacity.value }
  ];

  return (
    <section id="yacht" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Yacht Images Showcase */}
          <div className="space-y-6">
            {/* Main Featured Image with Navigation */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src={galleryImages[currentImageIndex].src}
                alt={galleryImages[currentImageIndex].alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 cursor-pointer"
                onClick={() => openLightbox(currentImageIndex)}
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              
              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 px-3 py-1 rounded-full text-white text-sm">
                {currentImageIndex + 1} / {galleryImages.length}
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-6 gap-2">
              {galleryImages.slice(0, 12).map((image, index) => (
                <div
                  key={index}
                  className={`aspect-square rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                    index === currentImageIndex ? 'ring-2 ring-blue-600 ring-offset-2' : 'hover:opacity-80'
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            
            {/* View All Gallery Button */}
            <button
              onClick={() => openLightbox(0)}
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>{language === 'tr' ? `Tüm Fotoğrafları Görüntüle (${galleryImages.length})` : `View All Photos (${galleryImages.length})`}</span>
            </button>
          </div>

          {/* Yacht Details */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Alicia Gulet
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('forSale.guletDetailsDesc')}
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

        {/* Accommodation and Specifications Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {language === 'tr' ? 'Yat Detayları' : 'Yacht Details'}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {language === 'tr' 
                ? 'Alicia Gulet\'in konforlu konaklama alanları ve teknik özellikleri' 
                : 'Comfortable accommodation areas and technical specifications of the Alicia Gulet'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Accommodation Section */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="p-6 bg-gradient-to-r from-blue-600 to-indigo-700">
                <h3 className="text-2xl font-bold text-white flex items-center">
                  <Bed className="w-6 h-6 mr-3" />
                  {accommodationData.title}
                </h3>
              </div>
              
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {accommodationFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start p-4 bg-white rounded-lg shadow-sm">
                      <div className="p-2 bg-blue-100 rounded-lg mr-4 text-blue-600">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                        <p className="text-gray-600 mt-1">{feature.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <h4 className="font-semibold text-gray-900 flex items-center">
                    <Anchor className="w-5 h-5 mr-2 text-blue-600" />
                    {accommodationData.tender.title}
                  </h4>
                  <p className="text-gray-700 mt-2">{accommodationData.tender.description}</p>
                </div>
              </div>
            </div>

            {/* Specifications Section */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="p-6 bg-gradient-to-r from-indigo-600 to-purple-700">
                <h3 className="text-2xl font-bold text-white flex items-center">
                  <Wrench className="w-6 h-6 mr-3" />
                  {fullSpecificationsData.title}
                </h3>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  {technicalSpecs.map((spec, index) => (
                    <div key={index} className="flex items-center p-4 bg-white hover:bg-gray-50 rounded-lg transition-colors shadow-sm">
                      <div className="p-2 bg-indigo-100 rounded-lg mr-4 text-indigo-600">
                        {spec.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{spec.title}</h4>
                        <p className="text-gray-600 mt-1">{spec.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-500">
              {language === 'tr' 
                ? 'Tüm teknik detaylar ve donanım bilgileri 2024 yenileme sonrası güncellenmiştir' 
                : 'All technical details and equipment information have been updated after the 2024 refit'
              }
            </p>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation */}
          <button
            onClick={prevLightboxImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextLightboxImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Image */}
          <div className="relative max-w-6xl max-h-full">
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="max-w-full max-h-[90vh] object-contain"
            />
            
            {/* Image Info */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 px-4 py-2 rounded-full text-white text-center">
              <div className="text-sm">{galleryImages[selectedImage].alt}</div>
              <div className="text-xs opacity-75">{selectedImage + 1} / {galleryImages.length}</div>
            </div>
          </div>
          
          {/* Thumbnail Strip */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 max-w-full overflow-x-auto px-4">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`flex-shrink-0 w-16 h-12 rounded overflow-hidden transition-all duration-300 ${
                  index === selectedImage ? 'ring-2 ring-white' : 'opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default YachtShowcase;