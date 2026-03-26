'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import QuoteModal from '../../components/QuoteModal';
import Services from '../../components/Services';

export default function YeotmalPage() {
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    moveFrom: '',
    moveTo: '',
    moveDate: '',
    items: '',
    message: ''
  });
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const handleOpenModal = () => {
    setShowQuoteForm(true);
  };

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    console.log('Quote form submitted:', formData);
    alert('Thank you for your quote request! We will contact you shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      moveFrom: '',
      moveTo: '',
      moveDate: '',
      items: '',
      message: ''
    });
    setShowQuoteForm(false);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const toggleQuestion = (questionId) => {
    setExpandedQuestion(expandedQuestion === questionId ? null : questionId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header openModal={handleOpenModal} />
      
      <main className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Packers and Movers in Yeotmal
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              MH27 Packers & Movers - Your trusted partner for professional relocation services in Yeotmal and surrounding areas.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg mb-16 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-8">
              <div className="w-8 h-1 bg-blue-500 rounded-full mr-4"></div>
              <h2 className="text-3xl font-bold text-gray-900">Who We Are</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="group">
                <div className="p-6 rounded-lg border-l-4 border-blue-500 hover:border-blue-600 transition-all duration-300 hover:bg-blue-50">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Story</h3>
                  <p className="text-gray-600 leading-relaxed mb-4 group-hover:text-gray-700 transition-colors duration-300">
                    MH27 Packers & Movers is a leading relocation service provider in Maharashtra with over 5 years of experience in the moving industry. We started as a small local moving company in Yeotmal and have grown to serve multiple cities across the state.
                  </p>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    Our team consists of trained professionals who understand the emotional and practical aspects of moving. We treat your belongings as our own and ensure safe, timely, and hassle-free relocation experiences.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="group p-6 rounded-lg border-l-4 border-orange-500 hover:border-orange-600 transition-all duration-300 hover:bg-orange-50">
                  <h3 className="font-semibold text-gray-900 mb-3">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    To provide reliable, affordable, and professional moving services that make relocation stress-free for our customers in Yeotmal and beyond.
                  </p>
                </div>
                <div className="group p-6 rounded-lg border-l-4 border-green-500 hover:border-green-600 transition-all duration-300 hover:bg-green-50">
                  <h3 className="font-semibold text-gray-900 mb-3">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    To become the most trusted packers and movers company in Maharashtra by consistently delivering exceptional service and customer satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Services openModal={() => setShowQuoteForm(true)} />
          </div>

          <div className="flex flex-col md:flex-row gap-12 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose MH27 Packers & Movers in Yeotmal?</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-4">
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Local Expertise</h3>
                    <p className="text-gray-600">Deep knowledge of Yeotmal's geography, traffic patterns, and local regulations ensures smooth relocations.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-4">
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Timely Service</h3>
                    <p className="text-gray-600">Punctual pickup and delivery with real-time tracking of your belongings throughout Yeotmal.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-4">
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Affordable Pricing</h3>
                    <p className="text-gray-600">Competitive rates with no hidden charges. Transparent pricing for all Yeotmal moving services.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-lg shadow-md flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Areas We Serve in Yeotmal</h2>
              <p className="text-gray-700 mb-4">MH27 Packers & Movers provides comprehensive moving services across Yeotmal and nearby locations including:</p>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center p-3 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300 hover:bg-blue-50 cursor-pointer">
                  <span className="text-gray-700 hover:text-blue-700 transition-colors duration-300">Yeotmal City</span>
                </div>
                <div className="flex items-center p-3 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300 hover:bg-blue-50 cursor-pointer">
                  <span className="text-gray-700 hover:text-blue-700 transition-colors duration-300">Wani</span>
                </div>
                <div className="flex items-center p-3 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300 hover:bg-blue-50 cursor-pointer">
                  <span className="text-gray-700 hover:text-blue-700 transition-colors duration-300">Pusad</span>
                </div>
                <div className="flex items-center p-3 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300 hover:bg-blue-50 cursor-pointer">
                  <span className="text-gray-700 hover:text-blue-700 transition-colors duration-300">Umarkhed</span>
                </div>
                <div className="flex items-center p-3 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300 hover:bg-blue-50 cursor-pointer">
                  <span className="text-gray-700 hover:text-blue-700 transition-colors duration-300">Digras</span>
                </div>
                <div className="flex items-center p-3 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300 hover:bg-blue-50 cursor-pointer">
                  <span className="text-gray-700 hover:text-blue-700 transition-colors duration-300">Ghatanji</span>
                </div>
                <div className="flex items-center p-3 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300 hover:bg-blue-50 cursor-pointer">
                  <span className="text-gray-700 hover:text-blue-700 transition-colors duration-300">Nagpur</span>
                </div>
                <div className="flex items-center p-3 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300 hover:bg-blue-50 cursor-pointer">
                  <span className="text-gray-700 hover:text-blue-700 transition-colors duration-300">Aurangabad</span>
                </div>
                <div className="flex items-center p-3 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300 hover:bg-blue-50 cursor-pointer">
                  <span className="text-gray-700 hover:text-blue-700 transition-colors duration-300">Hyderabad</span>
                </div>
                <div className="flex items-center p-3 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300 hover:bg-blue-50 cursor-pointer">
                  <span className="text-gray-700 hover:text-blue-700 transition-colors duration-300">Mumbai</span>
                </div>
                <div className="flex items-center p-3 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300 hover:bg-blue-50 cursor-pointer">
                  <span className="text-gray-700 hover:text-blue-700 transition-colors duration-300">Pune</span>
                </div>
                <div className="flex items-center p-3 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300 hover:bg-blue-50 cursor-pointer">
                  <span className="text-gray-700 hover:text-blue-700 transition-colors duration-300">Bangalore</span>
                </div>
                <div className="flex items-center p-3 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300 hover:bg-blue-50 cursor-pointer">
                  <span className="text-gray-700 hover:text-blue-700 transition-colors duration-300">Chennai</span>
                </div>
                <div className="flex items-center p-3 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300 hover:bg-blue-50 cursor-pointer">
                  <span className="text-gray-700 hover:text-blue-700 transition-colors duration-300">Kolkata</span>
                </div>
              </div>
              <p className="text-sm text-gray-600">We also serve nearby areas and provide intercity moving services from Yeotmal to any location in India.</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Moving Process in Yeotmal</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-xl">1</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Survey & Quote</h3>
                <p className="text-gray-600 text-sm">Free survey of your belongings and transparent quotation</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-xl">2</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Packing</h3>
                <p className="text-gray-600 text-sm">Professional packing with quality materials</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-xl">3</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Transportation</h3>
                <p className="text-gray-600 text-sm">Safe and timely transportation to your new location</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-xl">4</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Unpacking</h3>
                <p className="text-gray-600 text-sm">Careful unpacking and setup at your new place</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">About Us - Our Journey</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-3 mr-4">
                  <span className="text-blue-600 font-bold">2016</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Yeotmal Branch Started</h3>
                  <p className="text-gray-600">Began our journey with a small team in Yeotmal, serving local customers with dedication and care.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-3 mr-4">
                  <span className="text-blue-600 font-bold">750+</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Successful Moves</h3>
                  <p className="text-gray-600">Completed over 750 relocations from Yeotmal to various destinations across India with 98% satisfaction.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-3 mr-4">
                  <span className="text-blue-600 font-bold">24/7</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Always Available</h3>
                  <p className="text-gray-600">Round-the-clock customer support and emergency moving services for Yeotmal residents and businesses.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-3 mr-4">
                  <span className="text-blue-600 font-bold">45+</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Professional Team</h3>
                  <p className="text-gray-600">Skilled team of 45+ trained professionals including expert packers, movers, and experienced drivers.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Values & Commitments</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Integrity</h3>
                <p className="text-gray-600 text-sm">Honest pricing and transparent communication with no hidden charges</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                  <div className="text-3xl text-orange-600 mb-2">⭐</div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Quality</h3>
                <p className="text-gray-600 text-sm">High-quality packing materials and modern equipment for safe moving</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 4M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Customer Care</h3>
                <p className="text-gray-600 text-sm">Personalized service and attention to detail for every move</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="border-b pb-4 hover:bg-blue-50 transition-all duration-300 transform hover:scale-[1.02] rounded-lg cursor-pointer" onClick={() => toggleQuestion('q1')}>
                <h3 className="font-semibold text-gray-900 mb-2 hover:text-blue-700 transition-colors duration-300">How much time does local moving take in Yeotmal?</h3>
                {expandedQuestion === 'q1' && (
                  <p className="text-gray-600 mt-2">Local moving within Yeotmal typically takes 3-7 hours for 1-2 BHK and 5-10 hours for 3+ BHK, depending on volume and distance.</p>
                )}
              </div>
              <div className="border-b pb-4 hover:bg-blue-50 transition-all duration-300 transform hover:scale-[1.02] rounded-lg cursor-pointer" onClick={() => toggleQuestion('q2')}>
                <h3 className="font-semibold text-gray-900 mb-2 hover:text-blue-700 transition-colors duration-300">Do you provide insurance for goods?</h3>
                {expandedQuestion === 'q2' && (
                  <p className="text-gray-600 mt-2">Yes, we provide comprehensive transit insurance for all your belongings at nominal charges, ensuring complete peace of mind during your move.</p>
                )}
              </div>
              <div className="border-b pb-4 hover:bg-blue-50 transition-all duration-300 transform hover:scale-[1.02] rounded-lg cursor-pointer" onClick={() => toggleQuestion('q3')}>
                <h3 className="font-semibold text-gray-900 mb-2 hover:text-blue-700 transition-colors duration-300">What packing materials do you use?</h3>
                {expandedQuestion === 'q3' && (
                  <p className="text-gray-600 mt-2">We use high-quality packing materials including bubble wrap, corrugated sheets, cardboard boxes, waterproof covers, and specialized materials for fragile items.</p>
                )}
              </div>
              <div className="pb-4 hover:bg-blue-50 transition-all duration-300 transform hover:scale-[1.02] rounded-lg cursor-pointer" onClick={() => toggleQuestion('q4')}>
                <h3 className="font-semibold text-gray-900 mb-2 hover:text-blue-700 transition-colors duration-300">How do I book your services in Yeotmal?</h3>
                {expandedQuestion === 'q4' && (
                  <p className="text-gray-600 mt-2">You can call us at +91 12345 67890, fill the quote form on our website, or visit our office in Yeotmal for a free survey and quotation.</p>
                )}
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Free Quote for Yeotmal Moving</h2>
            <p className="text-xl text-gray-600 mb-8">Contact us today for a free, no-obligation moving quote</p>
            <button 
              onClick={() => setShowQuoteForm(true)}
              className="bg-blue-600 text-white px-16 py-6 rounded-lg font-semibold text-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Get Free Quote
            </button>
          </div>

          <Footer currentPage="yeotmal" openModal={handleOpenModal} />
          
          {showQuoteForm && (
            <QuoteModal 
              close={() => setShowQuoteForm(false)} 
              showToast={() => alert('Quote request submitted successfully!')}
            />
          )}
        </div>
      </main>
    </div>
  );
}
