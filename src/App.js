import VideoBanner from "./components/VideoBanner";
import ImageCarousel from "./components/ImageCarousel";
import BarberServices from "./components/BarberServices";
import SalonServices from "./components/SalonServices";
import { useEffect } from "react";
import scrollToTop from "./helpers/scrollToTop";
import FloatingWhatsApp from './components/FloatingWhatsApp';
function App() {
  useEffect(() => {
    scrollToTop()
  },[])
  return (
    <div className="relative">
      <VideoBanner/>
      <h2 className="text-center py-4 text-6xl text-red-900">Nab Barbershop</h2>
      <p className="italic text-center text-xl">We provide the freshest cuts in the city.</p>
      <section className="py-4">
        <ImageCarousel/>
      </section>
     <section className="py-4 gap-4 flex justify-center relative text-neutral-950">
        <h2 className="text-9xl hidden lg:block absolute top-52 -left-48 text-red-900 rotate-90">Tentang</h2>
        <div className="flex flex-col gap-4 px-4">
          <p className="text-4xl">Tentang Kami – Classic Quads Barbers</p>
          <p className="italic">Indonesia | Sejak 2023</p>
          <p className="max-w-lg mx-auto text-xl">
           Selamat datang di Classic Quads Barbers – tempat di mana gaya klasik bertemu sentuhan modern, dan pelayanan terbaik jadi prioritas utama.</p>
          <p className="max-w-lg mx-auto text-xl">
          Kami adalah tim beranggotakan lima barber profesional yang berdedikasi untuk memberikan lebih dari sekadar potongan rambut. Dengan kombinasi pengalaman, teknik tajam, dan passion di dunia grooming pria, kami hadir untuk menciptakan pengalaman potong rambut yang nyaman, rapi, dan penuh karakter.
          </p>
          <p className="max-w-lg mx-auto text-xl">Di Classic Quads, setiap potongan tidak hanya soal gaya tapi juga tentang meningkatkan rasa percaya diri Anda. Mulai dari gaya klasik yang abadi hingga tren modern yang dinamis, kami pastikan setiap pelanggan keluar dengan tampilan terbaik versi dirinya.
          </p>
        </div>
        <img className="w-1/4 grayscale object-cover hidden md:block" src='https://images.pexels.com/photos/1895701/pexels-photo-1895701.jpeg' />
      </section>

      <section className="w-xl pb-4 px-4 bg-red-950 bg-opacity-10 mt-4 flex flex-col md:flex-row mx-auto justify-center items-center gap-12">
        <BarberServices/>
        <SalonServices/>
          <FloatingWhatsApp />
      </section>
    </div>
  );
}

export default App;
