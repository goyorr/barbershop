import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-gray-950 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Classic Cuts Barbershop</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="#services" className="hover:text-gray-300">Services</Link></li>
            <li><Link href="#booking" className="hover:text-gray-300">Book Now</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

