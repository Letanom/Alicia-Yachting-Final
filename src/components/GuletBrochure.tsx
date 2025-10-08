import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { BookOpen, Download, Eye, X, ChevronLeft, ChevronRight, FileText, Zap, Anchor, Compass } from 'lucide-react';

const GuletBrochure: React.FC = () => {
  const { language } = useLanguage();
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // List of all gulet page images
  const guletPages = [
    'gulet_page-0001.jpg',
    'gulet_page-0002.jpg',
    'gulet_page-0003.jpg',
    'gulet_page-0004.jpg',
    'gulet_page-0005.jpg',
    'gulet_page-0006.jpg',
    'gulet_page-0007.jpg',
    'gulet_page-0008.jpg',
    'gulet_page-0009.jpg',
    'gulet_page-0010.jpg',
    'gulet_page-0011.jpg',
    'gulet_page-0012.jpg',
    'gulet_page-0013.jpg',
    'gulet_page-0014.jpg',
    'gulet_page-0015.jpg',
    'gulet_page-0016.jpg',
    'gulet_page-0017.jpg',
    'gulet_page-0018.jpg'
  ];

  const openViewer = () => {
    setIsViewerOpen(true);
    setCurrentImageIndex(0);
  };

  const closeViewer = () => {
    setIsViewerOpen(false);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => 
      prevIndex === guletPages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? guletPages.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    if (!isViewerOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === guletPages.length - 1 ? 0 : prevIndex + 1
        );
      } else if (e.key === 'ArrowLeft') {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === 0 ? guletPages.length - 1 : prevIndex - 1
        );
      } else if (e.key === 'Escape') {
        closeViewer();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isViewerOpen, guletPages.length]);

  // Catalog features for the card
  const catalogFeatures = [
    {
      icon: <FileText className="w-5 h-5" />,
      title: language === 'tr' ? 'Teknik Özellikler' : 'Technical Specs',
      description: language === 'tr' ? 'Detaylı teknik bilgiler' : 'Detailed technical information'
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: language === 'tr' ? 'Motor Detayları' : 'Engine Details',
      description: language === 'tr' ? 'Motor ve güç sistemi' : 'Engine and power system'
    },
    {
      icon: <Anchor className="w-5 h-5" />,
      title: language === 'tr' ? 'Ekipman Listesi' : 'Equipment List',
      description: language === 'tr' ? 'Tam ekipman listesi' : 'Complete equipment list'
    },
    {
      icon: <Compass className="w-5 h-5" />,
      title: language === 'tr' ? 'İç Mekan Planları' : 'Interior Layouts',
      description: language === 'tr' ? 'Detaylı planlar' : 'Detailed layouts'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {language === 'tr' ? 'Yat Kataloğu' : 'Yacht Catalog'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'tr' 
              ? 'Alicia Gulet\'in detaylı teknik özellikleri ve iç mekan düzenlemeleri'
              : 'Detailed technical specifications and interior arrangements of the Alicia Gulet'
            }
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-6xl mx-auto border border-gray-100">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-lg mr-4">
                  <BookOpen className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {language === 'tr' ? 'Teknik Katalog' : 'Technical Catalog'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'tr' ? 'Profesyonel dokümantasyon' : 'Professional documentation'}
                  </p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-8 leading-relaxed">
                {language === 'tr'
                  ? 'Alicia Gulet\'in eksiksiz teknik dokümantasyonu. Tüm detayları içeren profesyonel katalog.'
                  : 'Complete technical documentation of the Alicia Gulet. Professional catalog with all details.'
                }
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {catalogFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="p-2 bg-blue-50 rounded-lg mr-3 text-blue-600">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">{feature.title}</h4>
                      <p className="text-gray-600 text-xs">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={openViewer}
                  className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <Eye className="w-5 h-5 mr-2" />
                  {language === 'tr' ? 'Katalogu Görüntüle' : 'View Catalog'}
                </button>
                
                <a
                  href="/gulet.pdf"
                  download="Alicia-Gulet-Technical-Catalog.pdf"
                  className="flex items-center justify-center px-6 py-3 bg-white border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300 shadow-sm"
                >
                  <Download className="w-5 h-5 mr-2" />
                  {language === 'tr' ? 'PDF İndir' : 'Download PDF'}
                </a>
              </div>
            </div>
            
            <div className="md:w-1/2 bg-gradient-to-br from-blue-900 to-indigo-900 p-8 md:p-12 flex flex-col justify-between">
              <div className="text-white">
                <h4 className="text-2xl font-bold mb-2">
                  {language === 'tr' ? 'Detaylı Katalog' : 'Detailed Catalog'}
                </h4>
                <p className="opacity-90 mb-6">
                  {language === 'tr' 
                    ? 'Profesyonel dokümantasyon ve teknik çizimler' 
                    : 'Professional documentation and technical drawings'
                  }
                </p>
                
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">{language === 'tr' ? 'Tamamlanma' : 'Completion'}</span>
                    <span className="text-sm font-semibold">100%</span>
                  </div>
                  <div className="w-full bg-blue-800/30 rounded-full h-2">
                    <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full w-full"></div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-4 gap-4">
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-white">{guletPages.length}</div>
                  <div className="text-xs text-blue-200 mt-1">
                    {language === 'tr' ? 'Sayfa' : 'Pages'}
                  </div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-white">24</div>
                  <div className="text-xs text-blue-200 mt-1">
                    {language === 'tr' ? 'MB' : 'MB'}
                  </div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-white">4K</div>
                  <div className="text-xs text-blue-200 mt-1">
                    {language === 'tr' ? 'Çözünürlük' : 'Resolution'}
                  </div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-white">18+</div>
                  <div className="text-xs text-blue-200 mt-1">
                    {language === 'tr' ? 'Bölüm' : 'Sections'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            {language === 'tr' 
              ? '© 2023 Alicia Yachting. Tüm hakları saklıdır.' 
              : '© 2023 Alicia Yachting. All rights reserved.'
            }
          </p>
        </div>
      </div>

      {/* Image Viewer Modal */}
      {isViewerOpen && (
        <div 
          className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4"
          onClick={closeViewer}
        >
          <div 
            className="bg-white rounded-xl w-full max-w-7xl h-[95vh] flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b bg-gray-50 rounded-t-xl">
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  {language === 'tr' ? 'Alicia Gulet Teknik Kataloğu' : 'Alicia Gulet Technical Catalog'}
                </h3>
                <p className="text-sm text-gray-600">
                  {language === 'tr' ? 'Profesyonel Yat Dokümantasyonu' : 'Professional Yacht Documentation'}
                </p>
              </div>
              <button
                onClick={closeViewer}
                className="p-2 hover:bg-gray-200 rounded-full"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex-1 flex items-center justify-center relative bg-gray-100">
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/80 hover:bg-white rounded-full backdrop-blur-sm transition-all shadow-lg z-10"
              >
                <ChevronLeft className="w-6 h-6 text-gray-800" />
              </button>
              
              <div className="flex-1 flex items-center justify-center p-4">
                <img 
                  src={`/${guletPages[currentImageIndex]}`} 
                  alt={`Page ${currentImageIndex + 1}`}
                  className="max-h-[75vh] object-contain rounded-lg shadow-lg"
                  onError={() => {
                    console.error(`Failed to load image: ${guletPages[currentImageIndex]}`);
                  }}
                />
              </div>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/80 hover:bg-white rounded-full backdrop-blur-sm transition-all shadow-lg z-10"
              >
                <ChevronRight className="w-6 h-6 text-gray-800" />
              </button>
            </div>
            
            <div className="p-4 border-t bg-gray-50 rounded-b-xl">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <BookOpen className="w-5 h-5 text-gray-600 mr-2" />
                  <p className="text-gray-700 font-medium">
                    {language === 'tr' 
                      ? `Sayfa ${currentImageIndex + 1} / ${guletPages.length}` 
                      : `Page ${currentImageIndex + 1} of ${guletPages.length}`
                    }
                  </p>
                </div>
                <a
                  href="/gulet.pdf"
                  download="Alicia-Gulet-Technical-Catalog.pdf"
                  className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg hover:from-blue-700 hover:to-indigo-800 shadow-sm"
                >
                  <Download className="w-4 h-4 mr-2" />
                  {language === 'tr' ? 'PDF İndir' : 'Download PDF'}
                </a>
              </div>
              
              <div className="flex overflow-x-auto gap-2 pb-2 max-h-24">
                {guletPages.map((page, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`flex-shrink-0 w-16 h-20 rounded-md overflow-hidden border-2 transition-all ${
                      index === currentImageIndex 
                        ? 'border-blue-500 ring-2 ring-blue-300' 
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <img 
                      src={`/${page}`} 
                      alt={`Page ${index + 1}`}
                      className="w-full h-full object-cover"
                      onError={() => {
                        console.error(`Failed to load thumbnail: ${page}`);
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GuletBrochure;