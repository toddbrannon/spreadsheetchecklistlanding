import React, { useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import LeadMagnetSection from '../components/LeadMagnetSection';
import BonusCTASection from '../components/BonusCTASection';
import Footer from '../components/Footer';

const LandingPage = () => {
  useEffect(() => {
    // Change page title
    document.title = "Fix Your Broken Spreadsheets | TruSponse Solutions";
    
    // Implement simple animation on scroll
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('[data-aos]');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight * 0.85) {
          element.classList.add('aos-animate');
        }
      });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <LeadMagnetSection />
        <BonusCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;