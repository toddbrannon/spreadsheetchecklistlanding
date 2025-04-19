import React from 'react';
import Form from './Form';

const HeroSection = () => {
  return (
    <section className="pt-28 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Your Spreadsheets Are Costing You Time and Money.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Download our free checklist to discover automation opportunities that instantly save time, reduce errors, and improve clarity.
            </p>
            
            <div className="hidden lg:block pt-4">
              <Form buttonText="Send Me the Free Checklist" />
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-green-100 rounded-full opacity-50 transform rotate-45"></div>
              <div className="relative bg-white rounded-lg shadow-xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Person frustrated with spreadsheets" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end p-6">
                  <p className="text-white text-lg font-medium">
                    "I was spending 8+ hours a week on spreadsheets before finding these solutions."
                  </p>
                  <p className="text-white text-sm mt-2">
                    — Sarah T., Small Business Owner
                  </p>
                </div>
              </div>
            </div>
            
            <div className="block lg:hidden mt-8">
              <Form buttonText="Send Me the Free Checklist" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;