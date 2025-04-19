import React, { useState, useEffect } from 'react';
import { ClipboardCheck } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <ClipboardCheck className="h-8 w-8 text-green-600 mr-2" />
          <span className={`font-bold text-xl ${isScrolled ? 'text-gray-800' : 'text-gray-800'}`}>
            TruSponse
          </span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a 
                href="#what-youll-learn" 
                className={`font-medium transition-colors duration-300 ${
                  isScrolled ? 'text-gray-600 hover:text-green-600' : 'text-gray-700 hover:text-green-600'
                }`}
              >
                Benefits
              </a>
            </li>
            <li>
              <a 
                href="#free-audit" 
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors duration-300"
              >
                Free Audit
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;