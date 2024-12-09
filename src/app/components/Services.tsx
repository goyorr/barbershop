export default function Services() {
  const services = [
    { name: "Classic Haircut", price: 25 },
    { name: "Beard Trim", price: 15 },
    { name: "Hot Towel Shave", price: 30 },
    { name: "Hair & Beard Combo", price: 35 },
  ]

  return (
    <section id="services" className="py-16 text-black" >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className=" p-6 text-white border border-stone-500 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <p className="text-gray-400">${service.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

