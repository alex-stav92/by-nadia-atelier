import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/atelier/hero-arelier'
import { Services } from '@/components/atelier/services'
import { Gallery } from '@/components/atelier/gallery'
import { BeforeAfter } from '@/components/atelier/before-after'
import { About } from '@/components/atelier/about-atelier'
import { Process } from '@/components/atelier/process'
import { Pricing } from '@/components/atelier/pricing'
import { Testimonials } from '@/components/atelier/testimonials'
import { Faq } from '@/components/atelier/faq'
import { FinalCta } from '@/components/atelier/final-cta'
import { Contacts } from '@/components/atelier/contacts'
import  SiteFooter  from '@/components/site-footer'
import { MobileCta } from '@/components/mobile-cta'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <BeforeAfter />
        <About />
        <Process />
        <Pricing />
        <Testimonials />
        <Faq />
        <FinalCta />
        <Contacts />
      </main>
      <SiteFooter />
      <MobileCta />
    </>
  )
}
