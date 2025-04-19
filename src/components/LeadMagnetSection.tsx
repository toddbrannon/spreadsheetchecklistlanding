import React from 'react';
import { CheckCircle, Table, LineChart, AlertCircle } from 'lucide-react';

const LeadMagnetSection = () => {
  const benefits = [
    {
      icon: <CheckCircle className="h-10 w-10 text-green-600" />,
      title: "Identify time-wasting spreadsheet processes",
      description: "Learn which manual processes are draining your productivity and how to automate them."
    },
    {
      icon: <Table className="h-10 w-10 text-green-600" />,
      title: "Automate manual data entry",
      description: "Discover tools and techniques to eliminate repetitive data entry tasks completely."
    },
    {
      icon: <LineChart className="h-10 w-10 text-green-600" />,
      title: "Build better dashboards with less effort",
      description: "Create professional, insightful dashboards in half the time with our proven methods."
    },
    {
      icon: <AlertCircle className="h-10 w-10 text-green-600" />,
      title: "Avoid the 3 most common Excel mistakes",
      description: "Learn the critical mistakes that small businesses make and how to fix them immediately."
    }
  ];

  return (
    <section id="what-youll-learn" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            What You'll Learn
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our free checklist gives you actionable steps to transform your spreadsheets from time-wasters to time-savers.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-once="true"
            >
              <div className="mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block bg-white py-3 px-6 rounded-full shadow-md">
            <div className="flex items-center space-x-2">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <p className="text-gray-700 font-medium">
                <span className="font-bold">297 people</span> downloaded this checklist this week
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;