import React, { useState, useEffect, useRef } from 'react';
import { Users, Calendar, Award, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Stats: React.FC = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ guests: 0, years: 0, awards: 0, destinations: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  const finalCounts = {
    guests: 500,
    years: 15,
    awards: 12,
    destinations: 25
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setCounts({
          guests: Math.floor(finalCounts.guests * progress),
          years: Math.floor(finalCounts.years * progress),
          awards: Math.floor(finalCounts.awards * progress),
          destinations: Math.floor(finalCounts.destinations * progress)
        });

        if (step >= steps) {
          clearInterval(timer);
          setCounts(finalCounts);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      count: counts.guests,
      suffix: '+',
      label: language === 'tr' ? 'Mutlu Misafir' : 'Happy Guests',
      color: 'text-blue-600'
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      count: counts.years,
      suffix: '+',
      label: language === 'tr' ? 'Yıl Deneyim' : 'Years Experience',
      color: 'text-green-600'
    },
    {
      icon: <Award className="w-8 h-8" />,
      count: counts.awards,
      suffix: '',
      label: language === 'tr' ? 'Ödül & Sertifika' : 'Awards & Certificates',
      color: 'text-yellow-600'
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      count: counts.destinations,
      suffix: '+',
      label: language === 'tr' ? 'Destinasyon' : 'Destinations',
      color: 'text-purple-600'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {language === 'tr' ? 'Rakamlarla Alicia Yachting' : 'Alicia Yachting in Numbers'}
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            {language === 'tr' 
              ? 'Yılların deneyimi ve binlerce mutlu anının özeti'
              : 'Summary of years of experience and thousands of happy moments'
            }
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {stat.count}{stat.suffix}
              </div>
              <div className="text-blue-200 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;