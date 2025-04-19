import React, { useState } from 'react';
import { Upload, Calendar } from 'lucide-react';

const BonusCTASection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'upload' | 'schedule' | null>(null);

  const openModal = (type: 'upload' | 'schedule') => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType(null);
  };

  return (
    <section id="free-audit" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-5">
            <div className="md:col-span-3 p-8 lg:p-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                Want a Free Spreadsheet Audit?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Upload your file or schedule a free 15-min call with our experts and discover how you can enhance your spreadsheets.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => openModal('upload')}
                  className="bg-white hover:bg-gray-50 text-green-600 border border-green-600 font-medium px-6 py-3 rounded-md flex items-center justify-center transition-colors duration-300"
                >
                  <Upload className="h-5 w-5 mr-2" />
                  Upload Spreadsheet
                </button>
                <button 
                  onClick={() => openModal('schedule')}
                  className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-md flex items-center justify-center transition-colors duration-300"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Schedule a Call
                </button>
              </div>
            </div>
            <div className="hidden md:block md:col-span-2 bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
            
            {modalType === 'upload' ? (
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Upload Your Spreadsheet</h3>
                <p className="text-gray-600 mb-6">
                  Upload your Excel or Google Sheets file and we'll provide a free analysis within 24 hours.
                </p>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-6">
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 mb-2">Drag and drop your file here, or</p>
                  <button className="text-green-600 font-medium">browse files</button>
                </div>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-md font-medium transition-colors duration-300">
                  Submit for Review
                </button>
              </div>
            ) : (
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Schedule Your Free Call</h3>
                <p className="text-gray-600 mb-6">
                  Book a 15-minute call with one of our spreadsheet experts to discuss your needs.
                </p>
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Date
                    </label>
                    <input 
                      type="date" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-md font-medium transition-colors duration-300">
                  Schedule Call
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default BonusCTASection;