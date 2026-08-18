import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import Hero from '@/components/production/Hero';
import IntroTrust from '@/components/production/IntroTrust';
import Services from '@/components/production/Services';
import WhoWeWorkWith from '@/components/production/WhoWeWorkWith';
import Process from '@/components/production/Process';
import WhyByNadia from '@/components/production/WhyByNadia';
import Portfolio from '@/components/production/Portfolio';
import Philosophy from '@/components/production/Philosophy';
import Faq from '@/components/production/Faq';
import FinalCta from '@/components/production/FinalCta';
import Contact from '@/components/production/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-cream-100">
      <SiteHeader />
      <main>
        <Hero />
        <IntroTrust />
        <Services />
        <WhoWeWorkWith />
        <Process />
        <WhyByNadia />
        <Portfolio />
        <Philosophy />
        <Faq />
        <FinalCta />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
