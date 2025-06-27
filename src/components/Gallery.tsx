import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import heroImage from '../hero.jpeg';
import nightGulet from '../night_gulet.jpg';
import guletImage from '../gulet.jpg';

const Gallery: React.FC = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      url: heroImage,
      alt: 'Hero Gulet'
    },
    {
      url: nightGulet,
      alt: 'Night Gulet'
    },
    {
      url: guletImage,
      alt: 'Gulet'
    }
  ];

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('gallery.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('gallery.subtitle')}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation */}
          <button
            onClick={prevImage}
            className="absolute left-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image */}
          <img
            src={images[selectedImage].url}
            alt={images[selectedImage].alt}
            className="max-w-full max-h-full object-contain"
          />

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 px-4 py-2 rounded-full text-white">
            {selectedImage + 1} / {images.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;