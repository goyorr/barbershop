import { Scissors, BeakerIcon as Beard, SprayCanIcon as Spray, Coffee } from 'lucide-react'

const services = [
  {
    name: "Classic Haircut",
    price: 25,
    duration: "30 min",
    description: "A timeless cut tailored to your style and face shape.",
    icon: Scissors
  },
  {
    name: "Beard Trim",
    price: 15,
    duration: "20 min",
    description: "Expert shaping and trimming for a well-groomed beard.",
    icon: Beard
  },
  {
    name: "Hot Towel Shave",
    price: 30,
    duration: "45 min",
    description: "Luxurious straight razor shave with hot towel treatment.",
    icon: Spray
  },
  {
    name: "Hair & Beard Combo",
    price: 35,
    duration: "50 min",
    description: "Complete grooming package for hair and beard.",
    icon: Coffee
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl flex justify-start font-bold text-center mb-12 text-white">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="border border-stone-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="p-6">
                <service.icon className="w-12 h-12 text-cyan-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-cyan-600">${service.price}</span>
                  <span className="text-sm text-gray-500">{service.duration}</span>
                </div>
              </div>
              <div className="px-6 py-4">
                <button className="w-full bg-cyan-500 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-colors duration-300">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

