'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { CtaButton } from './cta-button'

export function MobileCta() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={cn(
        'fixed inset-x-0 bottom-0 z-40 border-t border-border/70 bg-background/90 p-3 backdrop-blur-md transition-all duration-400 sm:hidden',
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-full opacity-0',
      )}
    >
      <CtaButton href="#contacts" variant="accent" size="lg" className="w-full">
        Обсудить заказ
      </CtaButton>
    </div>
  )
}
