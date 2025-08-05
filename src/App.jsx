import Navbar from './components/Navbar'
import PhotoCarousel from './components/PhotoCarousel'
import About from './components/About'
import WhatsAppButton from './components/WhatsAppButton'
import Footer from './components/Footer'
import MapSection from './components/MapSection';
import Services from './components/Services'
import Contact from './components/Contact'
import Testimonial from './components/Testimonial'
import InstagramButton from './components/InstagramButton'


function App() {
  return (
    <>
      <Navbar />
      <main>
        <PhotoCarousel />
          <Services /> 
           <Testimonial />
        <About />
        <MapSection />
        <Contact/>
      </main>
      <Footer />
        <InstagramButton url="https://www.instagram.com/poli_bronze?igsh=cjRiZ2Vtemhub3ox" />
      <WhatsAppButton phone="559981164105" />
    </>
  )
}

export default App
