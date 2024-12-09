import { Playfair_Display, Oswald } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'] })
const oswald = Oswald({ subsets: ['latin'] })

export default function Hero() {
  return (
    <section className="relative h-[40vh] flex items-center">
      <div className="absolute inset-0 "></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className={`${playfair.className} text-6xl sm:text-7xl md:text-8xl font-bold mb-4 text-white leading-tight`}>
            Classic Cuts
          </h1>
          <p className={`${oswald.className} text-2xl sm:text-3xl md:text-4xl font-light mb-8 text-yellow-300 uppercase tracking-wide`}>
            Where style meets tradition
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#booking" 
              className="bg-white text-blue-600 hover:bg-blue-100 transition-colors duration-300 font-semibold py-3 px-8 rounded-full text-lg inline-block text-center"
            >
              Book Now
            </a>
            <a 
              href="#services" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-colors duration-300 font-semibold py-3 px-8 rounded-full text-lg inline-block text-center"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-16"></div>
    </section>
  )
}

