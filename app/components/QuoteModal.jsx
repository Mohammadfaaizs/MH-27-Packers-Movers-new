"use client";

import { useState } from 'react';

export default function QuoteModal({ close, showToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    moveDate: '',
    moveType: 'residential',
    fromAddress: '',
    toAddress: '',
    propertySize: '',
    bedrooms: '',
    additionalServices: [],
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        additionalServices: checked
          ? [...prev.additionalServices, value]
          : prev.additionalServices.filter(item => item !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const sendToWhatsApp = (formData) => {
    const phoneNumber = '8767586798';
    const message = encodeURIComponent(
      `New Moving Quote Request\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Move Date: ${formData.moveDate}\n` +
      `Move Type: ${formData.moveType}\n` +
      `From: ${formData.fromAddress}\n` +
      `To: ${formData.toAddress}\n` +
      `Additional Services: ${formData.additionalServices.join(', ') || 'None'}\n` +
      `Notes: ${formData.message || 'None'}\n\n` +
      `Submitted via MH27 Packers & Movers Website`
    );
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.moveType,
          message: `
Move Date: ${formData.moveDate}
From: ${formData.fromAddress}
To: ${formData.toAddress}
Property Size: ${formData.propertySize}
Bedrooms: ${formData.bedrooms}
Additional Services: ${formData.additionalServices.join(', ')}
Notes: ${formData.message}
          `.trim()
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit quote request');
      }

      // Success
      close();
      showToast();
      
      // Send data to WhatsApp
      sendToWhatsApp(formData);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        moveDate: '',
        moveType: 'residential',
        fromAddress: '',
        toAddress: '',
        propertySize: '',
        bedrooms: '',
        additionalServices: [],
        message: ''
      });
      
    } catch (err) {
      setError(err.message || 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[9999] flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-4 w-full max-w-xl max-h-[90vh] flex flex-col">
        {/* Header - Fixed at top */}
        <div className="flex justify-between items-center mb-1 flex-shrink-0">
          <h2 className="text-2xl font-bold text-gray-800">Request a Quote</h2>
          <button 
            onClick={close} 
            className="text-gray-500 hover:text-gray-700 text-2xl"
            aria-label="Close"
          >
            &times;
          </button>
        </div>
        
        {/* Error message - Fixed */}
        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded flex-shrink-0">
            {error}
          </div>
        )}
        
        {/* Scrollable form content */}
        <div className="flex-1 overflow-y-auto pr-2">
          <form onSubmit={handleSubmit} id="quote-form" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-700 border-b pb-2">Personal Information</h3>
                
                <div>
                  <label className="block text-gray-700 text-xs sm:text-sm font-medium mb-1" htmlFor="name">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-1.5 sm:p-2 border border-gray-300 rounded focus:ring-1 sm:focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 text-xs sm:text-sm font-medium mb-1" htmlFor="email">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-1.5 sm:p-2 border border-gray-300 rounded focus:ring-1 sm:focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 text-xs sm:text-sm font-medium mb-1" htmlFor="phone">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-1.5 sm:p-2 border border-gray-300 rounded focus:ring-1 sm:focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 text-xs sm:text-sm font-medium mb-1" htmlFor="moveDate">
                    Preferred Moving Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    id="moveDate"
                    name="moveDate"
                    value={formData.moveDate}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full p-1.5 sm:p-2 border border-gray-300 rounded focus:ring-1 sm:focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 text-xs sm:text-sm font-medium mb-1">
                    Type of Move <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="moveType"
                    value={formData.moveType}
                    onChange={handleChange}
                    className="w-full p-1.5 sm:p-2 border border-gray-300 rounded focus:ring-1 sm:focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm"
                  >
                    <option value="residential">Residential Move</option>
                    <option value="office">Office/Commercial Move</option>
                    <option value="local">Local Move</option>
                    <option value="long-distance">Long Distance Move</option>
                    <option value="international">International Move</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              
              {/* Moving Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-700 border-b pb-2">Moving Details</h3>
                
                <div>
                  <label className="block text-gray-700 text-xs sm:text-sm font-medium mb-1" htmlFor="fromAddress">
                    Moving From (Full Address) <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="fromAddress"
                    name="fromAddress"
                    value={formData.fromAddress}
                    onChange={handleChange}
                    rows={2}
                    className="w-full p-1.5 sm:p-2 border border-gray-300 rounded focus:ring-1 sm:focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 text-xs sm:text-sm font-medium mb-1" htmlFor="toAddress">
                    Moving To (Full Address) <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="toAddress"
                    name="toAddress"
                    value={formData.toAddress}
                    onChange={handleChange}
                    rows={2}
                    className="w-full p-1.5 sm:p-2 border border-gray-300 rounded focus:ring-1 sm:focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 text-xs sm:text-sm font-medium mb-1" htmlFor="propertySize">
                    Property Size <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="propertySize"
                    name="propertySize"
                    value={formData.propertySize}
                    onChange={handleChange}
                    className="w-full p-1.5 sm:p-2 border border-gray-300 rounded focus:ring-1 sm:focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 text-xs sm:text-sm font-medium mb-1" htmlFor="bedrooms">
                    Number of Bedrooms
                  </label>
                  <input
                    type="text"
                    id="bedrooms"
                    name="bedrooms"
                    value={formData.bedrooms}
                    onChange={handleChange}
                    className="w-full p-1.5 sm:p-2 border border-gray-300 rounded focus:ring-1 sm:focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm"
                  />
                </div>
              </div>
            </div>
            
            {/* Additional Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-700 border-b pb-2">Additional Services</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="packing"
                    value="packing"
                    checked={formData.additionalServices.includes('packing')}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-gray-700 text-sm">Packing Service</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="storage"
                    value="storage"
                    checked={formData.additionalServices.includes('storage')}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-gray-700 text-sm">Storage Solutions</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="cleaning"
                    value="cleaning"
                    checked={formData.additionalServices.includes('cleaning')}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-gray-700 text-sm">Cleaning Service</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="furniture"
                    value="furniture"
                    checked={formData.additionalServices.includes('furniture')}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-gray-700 text-sm">Furniture Assembly/Disassembly</span>
                </label>
              </div>
            </div>
            
            {/* Additional Notes */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="message">
                Additional Notes or Special Requirements
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                placeholder="Any special instructions, fragile items, or additional information we should know about..."
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              /> 
              <p className="text-xs text-gray-500 mt-2">
                By submitting this form, you agree to our <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a> and 
                <a href="/terms" className="text-blue-600 hover:underline ml-1">Terms of Service</a>.
                <br />
                <span className="text-green-600 font-medium">📱 Your request will also be sent to our WhatsApp for faster response.</span>
              </p>
            </div>
          </form>
        </div>
        
        {/* Fixed bottom section with submit buttons */}
        <div className="border-t pt-4 mt-4 flex-shrink-0">
          <div className="flex items-center justify-end gap-4">
            <button
              onClick={close}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 text-sm"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="quote-form"
              disabled={isSubmitting}
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
