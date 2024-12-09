import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import BookingForm from './components/BookingForm'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <Header /> */}
      <main>
        <div className="bg-cover bg-center" style={{backgroundImage: "url('backgroung.jpg')"}}>
        <Hero />
        <Services />
        <BookingForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}

