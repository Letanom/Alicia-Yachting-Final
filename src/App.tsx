import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import YachtShowcase from './components/YachtShowcase';
import ForSale from './components/ForSale';
import Testimonials from './components/Testimonials';
import BookingCTA from './components/BookingCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import GuletCulture from './components/GuletCulture';
import GuletBrochure from './components/GuletBrochure';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen relative">
        <ScrollProgress />
        <Header />
        <Hero />
        <About />
        <YachtShowcase />
        <GuletCulture />
        <GuletBrochure />
        <ForSale />
        <Testimonials />
        <BookingCTA />
        <Contact />
        <Footer />
        <BackToTop />
      </div>
    </LanguageProvider>
  );
}

export default App;