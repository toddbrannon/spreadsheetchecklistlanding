import React from 'react';
import { ClipboardCheck } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <ClipboardCheck className="h-8 w-8 text-green-500 mr-2" />
            <span className="font-bold text-xl">TruSponse</span>
          </div>
          
          <nav className="mb-6 md:mb-0">
            <ul className="flex space-x-8">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#what-youll-learn" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Benefits
                </a>
              </li>
              <li>
                <a href="#free-audit" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Free Audit
                </a>
              </li>
            </ul>
          </nav>
        </div>
        
        <hr className="border-gray-700 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} TruSponse Solutions. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;