"use client";

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Twitter, Linkedin, Instagram, MessageCircle, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    moveDate: '',
    moveType: '',
    fromAddress: '',
    toAddress: '',
    propertySize: '',
    bedrooms: '',
    packing: false,
    storage: false,
    cleaning: false,
    furniture: false,
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const sendToWhatsApp = (formData) => {
    const phoneNumber = '8767586798';
    const additionalServices = [];
    if (formData.packing) additionalServices.push('Packing Service');
    if (formData.storage) additionalServices.push('Storage Solutions');
    if (formData.cleaning) additionalServices.push('Cleaning Service');
    if (formData.furniture) additionalServices.push('Furniture Assembly/Disassembly');
    
    const message = encodeURIComponent(
      `🚚 *New Moving Quote Request*\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📧 *Email:* ${formData.email}\n` +
      `📱 *Phone:* ${formData.phone}\n` +
      `📅 *Move Date:* ${formData.moveDate}\n` +
      `🏠 *Move Type:* ${formData.moveType}\n` +
      `📍 *From:* ${formData.fromAddress}\n` +
      `🎯 *To:* ${formData.toAddress}\n` +
      `📦 *Additional Services:* ${additionalServices.join(', ') || 'None'}\n` +
      `📝 *Notes:* ${formData.message || 'None'}\n\n` +
      `*Submitted via MH27 Packers & Movers Contact Page*`
    );
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    // Send data to WhatsApp
    sendToWhatsApp(formData);
    
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Contact MH27 Packers & Movers</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner for professional relocation services since 2013. 
            Get in touch for expert packing, moving, and transportation solutions across India.
          </p>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Quick Contact Cards */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
              <Phone className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">24/7 Helpline</h3>
            <p className="text-gray-600 mb-2">+91 87675 86798</p>
            <p className="text-sm text-gray-500">Emergency Moving Support</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
              <Mail className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Email Support</h3>
            <p className="text-gray-600 mb-2">mh27pandm@gmail.com</p>
            <p className="text-sm text-gray-500">Quick Quote Response</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
              <MapPin className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Head Office</h3>
            <p className="text-gray-600 mb-2">Vilas Nagar, Amravati, Maharashtra, 444604</p>
            <p className="text-sm text-gray-500">All India Service Available</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Enhanced Contact Form */}
          <div className="bg-white rounded-lg p-3 w-full max-w-2xl">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-bold text-gray-800">Request a Free Moving Quote</h2>
              <button className="text-gray-500 hover:text-gray-700 text-xl" aria-label="Close">×</button>
            </div>

            {isSubmitted && (
              <div className="mb-2 p-2 bg-green-50 border border-green-200 rounded-lg flex items-center">
                <CheckCircle className="w-3 h-3 text-green-600 mr-2" />
                <span className="text-green-700 text-xs">Thank you! Our team will contact you soon.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-gray-700 border-b pb-1">Personal Information</h3>
                  <div>
                    <label className="block text-gray-700 text-xs font-medium mb-1" htmlFor="name">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-1.5 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-transparent text-xs"
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-xs font-medium mb-1" htmlFor="email">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-1.5 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-transparent text-xs"
                      type="email"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-xs font-medium mb-1" htmlFor="phone">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full p-1.5 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-transparent text-xs"
                      type="tel"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-xs font-medium mb-1" htmlFor="moveDate">
                      Moving Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="moveDate"
                      name="moveDate"
                      value={formData.moveDate}
                      onChange={handleChange}
                      min="2026-01-06"
                      required
                      className="w-full p-1.5 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-transparent text-xs"
                      type="date"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-xs font-medium mb-1">
                      Move Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="moveType"
                      value={formData.moveType}
                      onChange={handleChange}
                      className="w-full p-1.5 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-transparent text-xs"
                    >
                      <option value="residential">Residential Move</option>
                      <option value="office">Office/Commercial Move</option>
                      <option value="local">Local Move</option>
                      <option value="long-distance">Long Distance Move</option>
                      <option value="international">International Move</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-gray-700 border-b pb-1">Moving Details</h3>
                  <div>
                    <label className="block text-gray-700 text-xs font-medium mb-1" htmlFor="fromAddress">
                      From Address <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="fromAddress"
                      name="fromAddress"
                      value={formData.fromAddress}
                      onChange={handleChange}
                      required
                      rows="1"
                      className="w-full p-1.5 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-transparent text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-xs font-medium mb-1" htmlFor="toAddress">
                      To Address <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="toAddress"
                      name="toAddress"
                      value={formData.toAddress}
                      onChange={handleChange}
                      required
                      rows="1"
                      className="w-full p-1.5 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-transparent text-xs"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-gray-700 text-xs font-medium mb-1" htmlFor="propertySize">
                        Size (sq ft)
                      </label>
                      <select
                        id="propertySize"
                        name="propertySize"
                        value={formData.propertySize}
                        onChange={handleChange}
                        className="w-full p-1.5 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-transparent text-xs"
                      >
                        <option value="">Select</option>
                        <option value="under-1000">&lt;1,000</option>
                        <option value="1000-1500">1,000-1,500</option>
                        <option value="1500-2000">1,500-2,000</option>
                        <option value="2000-2500">2,000-2,500</option>
                        <option value="over-2500">&gt;2,500</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700 text-xs font-medium mb-1" htmlFor="bedrooms">
                        Bedrooms
                      </label>
                      <select
                        id="bedrooms"
                        name="bedrooms"
                        value={formData.bedrooms}
                        onChange={handleChange}
                        className="w-full p-1.5 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-transparent text-xs"
                      >
                        <option value="">Select</option>
                        <option value="studio">Studio</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5+">5+</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 text-xs font-medium mb-2">Additional Services</label>
                    <div className="space-y-1">
                      <label className="flex items-center">
                        <input 
                          className="h-3 w-3 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" 
                          type="checkbox" 
                          value="packing" 
                          name="packing" 
                          checked={formData.packing}
                          onChange={handleChange}
                        />
                        <span className="ml-2 text-gray-700 text-xs">Packing Service</span>
                      </label>
                      <label className="flex items-center">
                        <input 
                          className="h-3 w-3 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" 
                          type="checkbox" 
                          value="storage" 
                          name="storage" 
                          checked={formData.storage}
                          onChange={handleChange}
                        />
                        <span className="ml-2 text-gray-700 text-xs">Storage Solutions</span>
                      </label>
                      <label className="flex items-center">
                        <input 
                          className="h-3 w-3 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" 
                          type="checkbox" 
                          value="cleaning" 
                          name="cleaning" 
                          checked={formData.cleaning}
                          onChange={handleChange}
                        />
                        <span className="ml-2 text-gray-700 text-xs">Cleaning Service</span>
                      </label>
                      <label className="flex items-center">
                        <input 
                          className="h-3 w-3 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" 
                          type="checkbox" 
                          value="furniture" 
                          name="furniture" 
                          checked={formData.furniture}
                          onChange={handleChange}
                        />
                        <span className="ml-2 text-gray-700 text-xs">Furniture Assembly/Disassembly</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 text-xs font-medium mb-1" htmlFor="message">
                  Notes
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="2"
                  placeholder="Special requirements..."
                  className="w-full p-1.5 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-transparent text-xs"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  className="px-3 py-1.5 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-blue-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-blue-500"
                >
                  Get Free Quote
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                By submitting this form, you agree to our{' '}
                <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a> and{' '}
                <a href="#" className="text-blue-600 hover:underline">Terms</a>.
                <br />
                <span className="text-green-600 font-medium">📱 Your request will also be sent to our WhatsApp for faster response.</span>
              </p>
            </form>
          </div>

          {/* Enhanced Contact Information */}
          <div className="space-y-8">
            {/* Main Contact Info */}

            {/* Social Media */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Connect With Us</h3>
              <p className="text-gray-600 mb-6">
                Follow us for moving tips, special offers, and updates on our services across India!
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                  <Facebook className="w-5 h-5" />
                  <span>Facebook</span>
                </button>
                <button className="flex items-center justify-center space-x-2 bg-blue-400 text-white px-4 py-3 rounded-lg hover:bg-blue-500 transition-colors duration-300">
                  <Twitter className="w-5 h-5" />
                  <span>Twitter</span>
                </button>
                <button className="flex items-center justify-center space-x-2 bg-blue-700 text-white px-4 py-3 rounded-lg hover:bg-blue-800 transition-colors duration-300">
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </button>
                <button className="flex items-center justify-center space-x-2 bg-pink-600 text-white px-4 py-3 rounded-lg hover:bg-pink-700 transition-colors duration-300">
                  <Instagram className="w-5 h-5" />
                  <span>Instagram</span>
                </button>
              </div>
            </div>

            {/* Why Choose MH27 */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
              <div className="flex items-center space-x-3 mb-4">
                <MessageCircle className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-semibold text-blue-800">Why Choose MH27 Packers & Movers?</h3>
              </div>
              <ul className="space-y-2 text-blue-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>10+ Years of Experience in Professional Moving</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Pan India Service Network</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Insurance Coverage for All Your Belongings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Affordable Rates with No Hidden Charges</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Trained & Professional Moving Staff</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Find answers to common questions about our moving services</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="group bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-lg p-2 mr-4 group-hover:bg-blue-200 transition-colors duration-300">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">How much time should I book before moving?</h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">We recommend booking at least 7-10 days in advance for local moves and 15-20 days for intercity relocations to get the best rates and availability.</p>
                  </div>
                </div>
              </div>
              
              <div className="group bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-lg p-2 mr-4 group-hover:bg-green-200 transition-colors duration-300">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">What packing materials do you provide?</h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">We provide high-quality packing materials including cardboard boxes, bubble wrap, packing paper, tape, waterproof covers, and custom crates for fragile items.</p>
                  </div>
                </div>
              </div>
              
              <div className="group bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                <div className="flex items-start">
                  <div className="bg-purple-100 rounded-lg p-2 mr-4 group-hover:bg-purple-200 transition-colors duration-300">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">Is my goods insured during transit?</h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Yes, we offer comprehensive transit insurance coverage for all your belongings. We also provide all-risk insurance for high-value items at additional cost.</p>
                  </div>
                </div>
              </div>
              
              <div className="group bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                <div className="flex items-start">
                  <div className="bg-orange-100 rounded-lg p-2 mr-4 group-hover:bg-orange-200 transition-colors duration-300">
                    <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">Do you provide vehicle transportation?</h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Yes, we specialize in car and bike transportation using specialized carriers and containers to ensure safe delivery across India.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="group bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                <div className="flex items-start">
                  <div className="bg-red-100 rounded-lg p-2 mr-4 group-hover:bg-red-200 transition-colors duration-300">
                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">How are moving charges calculated?</h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Charges depend on distance, volume/weight of goods, packing requirements, floor of building, vehicle type, and additional services like insurance or storage.</p>
                  </div>
                </div>
              </div>
              
              <div className="group bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                <div className="flex items-start">
                  <div className="bg-indigo-100 rounded-lg p-2 mr-4 group-hover:bg-indigo-200 transition-colors duration-300">
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">Do you have storage facilities?</h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Yes, we provide secure, climate-controlled storage facilities for short-term and long-term storage needs with 24/7 surveillance.</p>
                  </div>
                </div>
              </div>
              
              <div className="group bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                <div className="flex items-start">
                  <div className="bg-teal-100 rounded-lg p-2 mr-4 group-hover:bg-teal-200 transition-colors duration-300">
                    <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">Which cities do you serve?</h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">We provide services across all major cities in India including Mumbai, Delhi, Bangalore, Chennai, Kolkata, Pune, Hyderabad, and many more.</p>
                  </div>
                </div>
              </div>
              
              <div className="group bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                <div className="flex items-start">
                  <div className="bg-pink-100 rounded-lg p-2 mr-4 group-hover:bg-pink-200 transition-colors duration-300">
                    <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">What if my items get damaged during moving?</h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">In the rare case of damage, our insurance covers the cost. We have a claims process where you can report damages within 24 hours of delivery.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
