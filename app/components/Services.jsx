import Image from 'next/image';
import { Home, Building2, Package, Box, Truck, ShieldCheck } from 'lucide-react';

export default function Services({ openModal }) {
  const services = [
    {
      id: 'residential-moving',
      title: "Residential Moving",
      description: "Professional moving services for your home and apartment.",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop"
    },
    {
      id: 'commercial-moving',
      title: "Commercial Moving",
      description: "Efficient office and business relocation services.",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop"
    },
    {
      id: 'packing-services',
      title: "Packing Services",
      description: "Professional packing and unpacking services.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop"
    },
    {
      id: 'storage-solutions',
      title: "Storage Solutions",
      description: "Secure storage facilities for your belongings.",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop"
    },
    {
      id: 'long-distance',
      title: "Long Distance Moving",
      description: "Reliable long-distance moving across states.",
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&h=600&fit=crop"
    },
    {
      id: 'specialty-items',
      title: "Specialty Items",
      description: "Expert handling of valuable and fragile items.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12 md:py-16 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h1>
          <div className="w-16 sm:w-20 h-1 bg-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Comprehensive moving and packing solutions tailored to your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              id={service.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 scroll-mt-24 max-w-sm mx-auto"
            >
              {/* Service Image */}
              <div className="relative h-40 sm:h-48 w-full overflow-hidden bg-gray-200">
                <div className="relative w-full h-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={index < 3}
                    unoptimized={true}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full p-3 sm:p-4">
                  </div>
                </div>
              </div>
              
              {/* Service Content */}
              <div className="p-4 sm:p-6 pt-8 sm:pt-10">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">{service.description}</p>
                <button 
                  onClick={openModal}
                  className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-4 py-2 rounded-md transition-colors duration-300 text-sm sm:text-base"
                >
                  Get Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
