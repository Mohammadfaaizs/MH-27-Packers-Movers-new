'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function CitiesPage() {
  const handleOpenModal = () => {
    console.log('Quote modal opened');
  };
  const cities = [
    { name: 'Ahilyanagar', description: 'Professional moving services in Ahilyanagar with reliable packing and transportation solutions for residential and commercial relocations.' },
    { name: 'Akola', description: 'Expert packers and movers in Akola offering comprehensive relocation services including packing, loading, transportation, and unpacking with affordable rates.' },
    { name: 'Amravati', description: 'Trusted moving company in Amravati providing safe and efficient relocation services for homes, offices, and vehicles with experienced staff.' },
    { name: 'Aurangabad', description: 'Reliable packers and movers in Aurangabad specializing in local and long-distance relocations with modern equipment and trained professionals.' },
    { name: 'Beed', description: 'Professional moving services in Beed with careful handling of belongings, timely delivery, and competitive pricing for all types of relocations.' },
    { name: 'Bhandara', description: 'Expert relocation services in Bhandara offering secure packing, safe transportation, and efficient unpacking for residential and commercial moves.' },
    { name: 'Buldhana', description: 'Trusted packers and movers in Buldhana providing comprehensive moving solutions with experienced staff and modern equipment for all relocation needs.' },
    { name: 'Chandrapur', description: 'Professional moving services in Chandrapur specializing in careful packing, safe transportation, and timely delivery for residential and commercial relocations.' },
    { name: 'Dharashiv', description: 'Reliable packers and movers in Dharashiv offering complete relocation services with experienced professionals and competitive rates for all moving needs.' },
    { name: 'Dhule', description: 'Expert moving services in Dhule providing secure packing, safe transportation, and efficient unpacking for homes and businesses with affordable pricing.' },
    { name: 'Gadchiroli', description: 'Professional packers and movers in Gadchiroli specializing in local and long-distance relocations with careful handling and timely delivery services.' },
    { name: 'Gondia', description: 'Trusted moving company in Gondia offering comprehensive relocation services including packing, loading, transportation, and unpacking with experienced staff.' },
    { name: 'Hingoli', description: 'Expert packers and movers in Hingoli providing safe and efficient relocation services for residential and commercial moves with modern equipment and trained professionals.' },
    { name: 'Jalgaon', description: 'Professional moving services in Jalgaon offering reliable packing, secure transportation, and efficient unpacking for all types of relocations with competitive rates.' },
    { name: 'Jalna', description: 'Trusted packers and movers in Jalna specializing in local and long-distance relocations with experienced staff and modern equipment for safe moving.' },
    { name: 'Kolhapur', description: 'Expert moving services in Kolhapur providing comprehensive relocation solutions with careful handling, timely delivery, and affordable rates for all moving needs.' },
        { name: 'Mumbai', description: 'Premier packers and movers in Mumbai providing complete relocation solutions with experienced staff, modern equipment, and competitive rates for all moving needs.' },
    { name: 'Nagpur', description: 'Trusted moving company in Nagpur offering comprehensive relocation services with experienced professionals, modern equipment, and timely delivery for all types of moves.' },
    { name: 'Nanded', description: 'Expert packers and movers in Nanded providing secure packing, safe transportation, and efficient unpacking for residential and commercial relocations with affordable pricing.' },
    { name: 'Nandurbar', description: 'Professional moving services in Nandurbar specializing in local and long-distance relocations with careful handling and timely delivery for all moving needs.' },
    { name: 'Nashik', description: 'Trusted packers and movers in Nashik providing complete relocation solutions with experienced staff, modern equipment, and competitive rates for all types of relocations.' },
    { name: 'Osmanabad', description: 'Expert moving services in Osmanabad offering secure packing, safe transportation, and efficient unpacking for homes and businesses with affordable pricing and timely delivery.' },
    { name: 'Palghar', description: 'Professional packers and movers in Palghar specializing in local and long-distance relocations with experienced professionals and modern equipment for safe and efficient moving.' },
    { name: 'Parbhani', description: 'Trusted moving company in Parbhani providing comprehensive relocation services including packing, loading, transportation, and unpacking with experienced staff and competitive rates.' },
    { name: 'Pune', description: 'Expert packers and movers in Pune offering complete relocation solutions with experienced professionals, modern equipment, and competitive pricing for all types of moves.' },
    { name: 'Raigad', description: 'Professional moving services in Raigad providing secure packing, safe transportation, and efficient unpacking for residential and commercial relocations with experienced staff and affordable rates.' },
    { name: 'Ratnagiri', description: 'Trusted packers and movers in Ratnagiri offering comprehensive relocation services with experienced professionals, modern equipment, and timely delivery for all moving needs.' },
    { name: 'Sangli', description: 'Expert moving services in Sangli specializing in local and long-distance relocations with careful handling, secure packing, and efficient transportation for all types of moves.' },
    { name: 'Satara', description: 'Professional packers and movers in Satara providing reliable relocation services with experienced staff, modern equipment, and competitive rates for all moving needs.' },
    { name: 'Sindhudurg', description: 'Trusted moving company in Sindhudurg offering complete relocation solutions including packing, loading, transportation, and unpacking with experienced professionals and affordable pricing.' },
    { name: 'Solapur', description: 'Expert packers and movers in Solapur providing secure packing, safe transportation, and efficient unpacking for residential and commercial relocations with modern equipment and timely delivery.' },
    { name: 'Thane', description: 'Professional moving services in Thane specializing in local and long-distance relocations with experienced professionals, modern equipment, and competitive rates for all types of moves.' },
    { name: 'Wardha', description: 'Trusted packers and movers in Wardha offering comprehensive relocation services with experienced staff, secure packing, and efficient transportation for all moving needs.' },
    { name: 'Washim', description: 'Expert moving services in Washim providing reliable packing, safe transportation, and efficient unpacking for residential and commercial relocations with affordable pricing and timely delivery.' },
    { name: 'Yavatmal', description: 'Professional packers and movers in Yavatmal specializing in local and long-distance relocations with experienced professionals, modern equipment, and secure handling of belongings.' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header openModal={handleOpenModal} />
      
      <main className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Cities - Packers & Movers Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              MH27 Packers & Movers - Professional relocation services across Maharashtra with trusted expertise and affordable rates.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
            {cities.map((city, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{city.name}</h3>
                <p className="text-gray-600 leading-relaxed">{city.description}</p>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <Link 
                    href={`/cities/${city.name.toLowerCase()}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                  >
                    View Details
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 p-8 rounded-lg mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose MH27 Packers & Movers?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-3 w-16 h-16 mx-auto mb-3">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Experienced Team</h3>
                <p className="text-gray-600">Professional staff with years of experience</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full p-3 w-16 h-16 mx-auto mb-3">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Affordable Rates</h3>
                <p className="text-gray-600">Competitive pricing with no hidden charges</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 rounded-full p-3 w-16 h-16 mx-auto mb-3">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Timely Service</h3>
                <p className="text-gray-600">Punctual pickup and delivery</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Free Quote for Any City</h2>
            <p className="text-xl text-gray-600 mb-8">Contact us today for a free, no-obligation moving quote</p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
              Call Us Now: +91 12345 67890
            </button>
          </div>
        </div>
      </main>

      <Footer currentPage="cities" openModal={handleOpenModal} />
    </div>
  );
}
