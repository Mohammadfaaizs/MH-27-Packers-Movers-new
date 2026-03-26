import { Truck, Home, Shield } from 'lucide-react';

export default function WhoWeAre() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Who We Are</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            We are a team of dedicated professionals committed to making your moving experience seamless and stress-free. since 2020
            with 5 years of experience in the industry, we understand the challenges of relocation and are here to provide 
            reliable, efficient, and affordable moving solutions tailored to your specific needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-50 rounded-lg text-center hover:shadow-lg transition-shadow duration-300">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Professional Team</h3>
            <p className="text-gray-600">Our experienced movers are trained to handle your belongings with the utmost care.</p>
          </div>
          
          <div className="p-6 bg-gray-50 rounded-lg text-center hover:shadow-lg transition-shadow duration-300">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Home className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Customer Focused</h3>
            <p className="text-gray-600">Your satisfaction is our top priority. We go the extra mile to ensure a smooth move.</p>
          </div>
          
          <div className="p-6 bg-gray-50 rounded-lg text-center hover:shadow-lg transition-shadow duration-300">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Trusted Service</h3>
            <p className="text-gray-600">Licensed and insured for your peace of mind during the entire moving process.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
