import { CallToAction } from '@/sections/CallToAction';
import { Footer } from '@/sections/Footer';
import { Header } from '@/sections/Header';
import { Hero } from '@/sections/Hero';
import { LogoSlider } from '@/sections/LogoSlider';
import { Pricing } from '@/sections/Pricing';
import { ProductShowcase } from '@/sections/ProductShowcase';
import { Testimonials } from '@/sections/Testimonials';

export default function Home() {
   return (
      <div className="relative overflow-hidden min-h-screen">
         <Header />
         <Hero />
         <LogoSlider />
         <ProductShowcase />
         <Pricing />
         <Testimonials />
         <CallToAction />
         <Footer />
      </div>
   );
}
