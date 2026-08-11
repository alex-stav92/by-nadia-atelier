import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { Gallery } from '@/components/gallery'
import { BeforeAfter } from '@/components/before-after'
import { About } from '@/components/about'
import { Process } from '@/components/process'
import { Pricing } from '@/components/pricing'
import { Testimonials } from '@/components/testimonials'
import { Faq } from '@/components/faq'
import { FinalCta } from '@/components/final-cta'
import { Contacts } from '@/components/contacts'
import { SiteFooter } from '@/components/site-footer'
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
