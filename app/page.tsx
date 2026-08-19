import Hero from '@/components/home/Hero-home';
import DirectionChoice from '@/components/home/DirectionChoice-home';
import About from '@/components/home/About-home';
import Atmosphere from '@/components/home/Atmosphere-home';
import CtaSection from '@/components/home/CtaSection-home';
import { SiteHeader } from '@/components/site-header'
import { MobileCta } from '@/components/mobile-cta'
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';

export default function Home() {
  return (
    <>
      <Header />
          <main>
      <Hero />
      <DirectionChoice />
      <About />
      <Atmosphere />
      <CtaSection />
      </main>
<Footer />
    </>
  );
}
