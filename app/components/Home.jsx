import HomeServices from './HomeServices';

import WhoWeAre from './WhoWeAre';

import { useMediaQuery } from '@mui/material';

import { useRouter } from 'next/navigation';

import Link from 'next/link';



export default function Home({ setPage, openModal }) {

  const isMobile = useMediaQuery('(max-width:600px)');

  const isTablet = useMediaQuery('(max-width:960px)');

  const router = useRouter();



  return (

    <div className="fade-in">

      <section>

        <div className="hero-bg h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px] flex items-center justify-center text-center relative">

          <div className="absolute inset-0 bg-black opacity-40"></div>



          <div className="relative z-10 text-white max-w-4xl px-4 sm:px-6 md:px-8">

            <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 sm:mb-8">

             From Doorstep to Destination <br /> 
             Trusted Packers & Movers Across India <br />

              <span className="text-blue-400 text-2xl sm:text-3xl md:text-4xl lg:text-2xl">Seamless Relocation, Anywhere in India — Safe. Swift. Secure</span>

            </h1>



            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">

              <button 

                onClick={openModal} 

                className="bg-orange-500 hover:bg-orange-600 transition-colors px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base"

              >

                Book Now

              </button>

              <button

                onClick={() => router.push('/services')}

                className="border-2 border-white hover:bg-white hover:bg-opacity-10 transition-colors px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base"

              >

                Our Services

              </button>

            </div>

          </div>

        </div>

      </section>



      {/* Who We Are Section */}

      <WhoWeAre />



      {/* Services Section */}

      <HomeServices />



      {/* Important Links Section */}

      <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 bg-gray-50">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-8 sm:mb-10 md:mb-12">

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">Important Information</h2>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">

              Everything you need to know about our services, policies, and terms

            </p>

            <div className="w-16 sm:w-20 md:w-24 h-1 bg-blue-500 mx-auto mt-4 sm:mt-6"></div>

          </div>



          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">

            <div className="bg-white rounded-lg shadow-md sm:shadow-lg p-4 sm:p-6 md:p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between h-full">

              <div className="flex flex-col items-center justify-center flex-grow">

                <div className="bg-blue-100 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">

                  <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">

                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>

                  </svg>

                </div>

                <h3 className="text-lg sm:text-xl md:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Privacy Policy</h3>

                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 px-1.5">

                  We protect your personal data with industry-standard security measures.

                  Your trust is our top priority.

                </p>

              </div>

              <div className="flex justify-center mt-auto">

                <Link href="/privacy" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm sm:text-base">

                  Read more

                  <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">

                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>

                  </svg>

                </Link>

              </div>

            </div>



            <div className="bg-white rounded-lg shadow-md sm:shadow-lg p-4 sm:p-6 md:p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between h-full">

              <div className="flex flex-col items-center justify-center flex-grow">

                <div className="bg-green-100 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">

                  <div className="text-3xl text-green-600 mb-2">📋</div>

                </div>

                <h3 className="text-lg sm:text-xl md:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Terms of Service</h3>

                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 px-1.5">

                  Our terms and conditions ensure transparency and mutual understanding.

                  We're committed to fair and honest service agreements.

                </p>

              </div>

              <div className="flex justify-center mt-auto">

                <Link href="/terms" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm sm:text-base">

                  Read more

                  <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">

                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>

                  </svg>

                </Link>

              </div>

            </div>



            <div className="bg-white rounded-lg shadow-md sm:shadow-lg p-4 sm:p-6 md:p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between h-full">

              <div className="flex flex-col items-center justify-center flex-grow">

                <div className="bg-orange-100 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">

                  <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">

                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>

                  </svg>

                </div>

                <h3 className="text-lg sm:text-xl md:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Refund Policy</h3>

                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 px-1.5">

                  Our refund policy is transparent and fair.

                  We ensure customer satisfaction in all circumstances.

                </p>

              </div>

              <div className="flex justify-center mt-auto">

                <Link href="/refund" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm sm:text-base">

                  Read more

                  <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">

                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>

                  </svg>

                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* Our Services in Other Cities Section */}

      <section className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-blue-50 to-indigo-100">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-6 sm:mb-8">

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 sm:mb-3">Our Services in Other Cities</h2>

            <p className="text-base sm:text-lg md:text-xl text-gray-600">Professional moving services across Maharashtra</p>

            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-3 sm:mt-4"></div>

          </div>



          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4">

            {/* Row 1 */}

        

            <Link href="/cities/ahilyanagar" className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 px-3 py-2 text-center group">

              <h3 className="text-sm sm:text-base font-bold text-gray-800">Ahilyanagar</h3>

            </Link>

            <Link href="/cities/akola" className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 px-3 py-2 text-center group">

              <h3 className="text-sm sm:text-base font-bold text-gray-800">Akola</h3>

            </Link>

            <Link href="/cities/amravati" className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 px-3 py-2 text-center group">

              <h3 className="text-sm sm:text-base font-bold text-gray-800">Amravati</h3>

            </Link>

            <Link href="/cities/aurangabad" className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 px-3 py-2 text-center group">

              <h3 className="text-sm sm:text-base font-bold text-gray-800">Aurangabad</h3>

            </Link>

            <Link href="/cities/beed" className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 px-3 py-2 text-center group">

              <h3 className="text-sm sm:text-base font-bold text-gray-800">Beed</h3>

            </Link>

            

            {/* Row 2 */}

            <Link href="/cities/bhandara" className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 px-3 py-2 text-center group">

              <h3 className="text-sm sm:text-base font-bold text-gray-800">Bhandara</h3>

            </Link>

            <Link href="/cities/buldhana" className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 px-3 py-2 text-center group">

              <h3 className="text-sm sm:text-base font-bold text-gray-800">Buldhana</h3>

            </Link>

            <Link href="/cities/chandrapur" className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 px-3 py-2 text-center group">

              <h3 className="text-sm sm:text-base font-bold text-gray-800">Chandrapur</h3>

            </Link>

            <Link href="/cities/dharashiv" className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 px-3 py-2 text-center group">

              <h3 className="text-sm sm:text-base font-bold text-gray-800">Dharashiv</h3>

            </Link>

            <Link href="/cities/dhule" className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 px-3 py-2 text-center group">

              <h3 className="text-sm sm:text-base font-bold text-gray-800">Dhule</h3>

            </Link>

            <Link href="/cities/gadchiroli" className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 px-3 py-2 text-center group">

              <h3 className="text-sm sm:text-base font-bold text-gray-800">Gadchiroli</h3>

            </Link>

            

            {/* Row 3 */}

            <Link href="/cities/gondia" className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 px-3 py-2 text-center group">

              <h3 className="text-sm sm:text-base font-bold text-gray-800">Gondia</h3>

            </Link>

            <Link href="/cities/hingoli" className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 px-3 py-2 text-center group">

              <h3 className="text-sm sm:text-base font-bold text-gray-800">Hingoli</h3>

            </Link>

            <Link href="/cities/jalgaon" className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 px-3 py-2 text-center group">

              <h3 className="text-sm sm:text-base font-bold text-gray-800">Jalgaon</h3>

            </Link>

            <Link href="/cities/jalna" className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 px-3 py-2 text-center group">

              <h3 className="text-sm sm:text-base font-bold text-gray-800">Jalna</h3>

            </Link>

            <Link href="/cities/kolhapur" className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 px-3 py-2 text-center group">

              <h3 className="text-sm sm:text-base font-bold text-gray-800">Kolhapur</h3>

            </Link>

            

            {/* Row 4 */}

            <Link href="/cities/mumbai" className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 px-3 py-2 text-center group">

              <h3 className="text-sm sm:text-base font-bold text-gray-800">Mumbai</h3>

            </Link>

    

            <Link href="/cities/nagpur" className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 px-3 py-2 text-center group">

              <h3 className="text-sm sm:text-base font-bold text-gray-800">Nagpur</h3>

            </Link>

            <Link href="/cities/nanded" className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 px-3 py-2 text-center group">

              <h3 className="text-sm sm:text-base font-bold text-gray-800">Nanded</h3>

            </Link>

            <Link href="/cities/nandurbar" className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 px-3 py-2 text-center group">

              <h3 className="text-sm sm:text-base font-bold text-gray-800">Nandurbar</h3>

            </Link>

            <Link href="/cities/nashik" className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 px-3 py-2 text-center group">

              <h3 className="text-sm sm:text-base font-bold text-gray-800">Nashik</h3>

            </Link>

            

            {/* Row 5 */}

            <Link href="/cities/osmanabad" className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 px-3 py-2 text-center group">

              <h3 className="text-sm sm:text-base font-bold text-gray-800">Osmanabad</h3>

            </Link>

            <Link href="/cities/palghar" className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 px-3 py-2 text-center group">

              <h3 className="text-sm sm:text-base font-bold text-gray-800">Palghar</h3>

            </Link>

            <Link href="/cities/parbhani" className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 px-3 py-2 text-center group">

              <h3 className="text-sm sm:text-base font-bold text-gray-800">Parbhani</h3>

            </Link>

            <Link href="/cities/pune" className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 px-3 py-2 text-center group">

              <h3 className="text-sm sm:text-base font-bold text-gray-800">Pune</h3>

            </Link>

            <Link href="/cities/raigad" className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 px-3 py-2 text-center group">

              <h3 className="text-sm sm:text-base font-bold text-gray-800">Raigad</h3>

            </Link>

            <Link href="/cities/ratnagiri" className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 px-3 py-2 text-center group">

              <h3 className="text-sm sm:text-base font-bold text-gray-800">Ratnagiri</h3>

            </Link>

            {/* Row 6 */}

            <Link href="/cities/sangli" className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 px-3 py-2 text-center group">

              <h3 className="text-sm sm:text-base font-bold text-gray-800">Sangli</h3>

            </Link>

            <Link href="/cities/satara" className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 px-3 py-2 text-center group">

              <h3 className="text-sm sm:text-base font-bold text-gray-800">Satara</h3>

            </Link>

            <Link href="/cities/sindhudurg" className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 px-3 py-2 text-center group">

              <h3 className="text-sm sm:text-base font-bold text-gray-800">Sindhudurg</h3>

            </Link>

            <Link href="/cities/solapur" className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 px-3 py-2 text-center group">

              <h3 className="text-sm sm:text-base font-bold text-gray-800">Solapur</h3>

            </Link>

            <Link href="/cities/thane" className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 px-3 py-2 text-center group">

              <h3 className="text-sm sm:text-base font-bold text-gray-800">Thane</h3>

            </Link>

            <Link href="/cities/wardha" className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 px-3 py-2 text-center group">

              <h3 className="text-sm sm:text-base font-bold text-gray-800">Wardha</h3>

            </Link>

            

            {/* Row 7 */}

            <Link href="/cities/washim" className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 px-3 py-2 text-center group">

              <h3 className="text-sm sm:text-base font-bold text-gray-800">Washim</h3>

            </Link>

            <Link href="/cities/yavatmal" className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 px-3 py-2 text-center group">

              <h3 className="text-sm sm:text-base font-bold text-gray-800">Yavatmal</h3>

            </Link>

          </div>



          

        </div>

      </section>

    </div>

  );

}