import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Testimonials: React.FC = () => {
  const { language } = useLanguage();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: language === 'tr' ? 'Rafet' : 'Michael',
      location: language === 'tr' ? 'İstanbul, Türkiye' : 'London, UK',
      rating: 5,
      text: language === 'tr' 
        ? 'Alicia Yachting ile geçirdiğimiz hafta hayatımızın en güzel tatiliydi. Profesyonel ekip, mükemmel hizmet ve nefes kesen manzaralar. Kesinlikle tekrar tercih edeceğiz!'
        : 'Our week with Alicia Yachting was the best vacation of our lives. Professional crew, perfect service, and breathtaking views. We will definitely choose them again!',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: language === 'tr' ? 'Suzan' : 'Sarah',
      location: language === 'tr' ? 'New York, ABD' : 'New York, USA',
      rating: 5,
      text: language === 'tr'
        ? 'Türk Rivierası\'nın gizli koylarını keşfetmek muhteşemdi. Gulet\'in konforu ve mürettebatın samimiyeti bizi çok etkiledi. Unutulmaz bir deneyim!'
        : 'Discovering the hidden bays of the Turkish Riviera was magnificent. The comfort of the gulet and the warmth of the crew impressed us greatly. An unforgettable experience!',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: language === 'tr' ? 'Rafael' : 'Rafael',
      location: language === 'tr' ? 'Milano, İtalya' : 'Milan, Italy',
      rating: 5,
      text: language === 'tr'
        ? 'Lüks ve doğanın mükemmel uyumu. Yemekler harika, kabinler çok konforlu ve rotalar nefes kesici. Alicia Yachting\'i herkese tavsiye ederim.'
        : 'Perfect harmony of luxury and nature. The food was amazing, cabins very comfortable, and routes breathtaking. I recommend Alicia Yachting to everyone.',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => prev === 0 ? testimonials.length - 1 : prev - 1);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {language === 'tr' ? 'Misafir Yorumları' : 'Guest Reviews'}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {language === 'tr' 
              ? 'Bizimle unutulmaz anılar yaşayan misafirlerimizin deneyimleri'
              : 'Experiences from our guests who created unforgettable memories with us'
            }
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 text-blue-100">
              <Quote className="w-16 h-16" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 font-light italic">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-left">
                  <h4 className="font-bold text-gray-900 text-lg">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-gray-600">
                    {testimonials[currentTestimonial].location}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;