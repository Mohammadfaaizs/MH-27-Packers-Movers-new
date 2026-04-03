"use client";
import Link from 'next/link';

export default function Footer({ currentPage, openModal }) {
  const services = [
    { name: 'Residential Moving', id: 'residential-moving' },
    { name: 'Commercial Moving', id: 'commercial-moving' },
    { name: 'Packing Services', id: 'packing-services' },
    { name: 'Storage Solutions', id: 'storage-solutions' },
    { name: 'Long Distance', id: 'long-distance' },
    { name: 'Specialty Items', id: 'specialty-items' }
  ];

  const scrollToSection = (sectionId, page = 'home') => {
    // Navigate to the page first
    window.location.href = page === 'home' ? '/' : `/${page}`;
    // Then scroll to the section after a small delay
    setTimeout(() => {
      if (sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 100);
  };

  return (
    <footer className="bg-gray-800 text-white py-8 sm:py-10 md:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="mb-6 sm:mb-0">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">MH27 Packers & Movers</h3>
            <p className="text-gray-300 text-sm sm:text-base mb-4">Your trusted partner for all your moving and packing needs. We make relocation simple, efficient, and stress-free.</p>
          </div>
          
          {/* Quick Links */}
          <div className="mb-6 sm:mb-0">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">Quick Links</h4>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base flex items-center">
                  <span className="mr-2">•</span> Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base flex items-center">
                  <span className="mr-2">•</span> All Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base flex items-center">
                  <span className="mr-2">•</span> About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base flex items-center">
                  <span className="mr-2">•</span> Contact Us
                </Link>
              </li>
              <li>
                <button 
                  onClick={openModal}
                  className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base flex items-center w-full text-left"
                >
                  <span className="mr-2">•</span> Get a Free Quote
                </button>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="mb-6 sm:mb-0">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">Our Services</h4>
            <ul className="space-y-1 sm:space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    href={`/services#${service.id}`}
                    className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base flex items-center"
                  >
                    <span className="mr-2">•</span> {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info - Moved to rightmost */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">Contact Info</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start">
                <svg className="w-4 h-4 mt-1 mr-3 text-blue-400 text-sm sm:text-base" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span className="text-gray-300 text-sm sm:text-base">Vilas Nagar, Amravati, Maharashtra, 444604</span>
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-3 text-blue-400 text-sm sm:text-base" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <a href="tel:+918767586798" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">+91 87675 86798</a>
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-3 text-blue-400 text-sm sm:text-base" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <a href="mailto:mh27pandm@gmail.com" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">mh27pandm@gmail.com</a>
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-3 text-blue-400 text-sm sm:text-base" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span className="text-gray-300 text-sm sm:text-base">Mon-Sun: 24/7 Available</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-xs sm:text-sm">&copy; {new Date().getFullYear()} MH27 Packers & Movers. All rights reserved.</p>
            <div className="flex flex-wrap gap-3 sm:gap-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/refund" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">
                Refund Policy
              </Link>
              <a href="/sitemap.xml" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
