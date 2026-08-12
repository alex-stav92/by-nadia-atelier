'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NAV_LINKS } from './site-data'
import { CtaButton } from './cta-button'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)

    onScroll()

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      {/* Header */}
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500',
          scrolled
            ? 'border-b border-border/70 bg-background/85 backdrop-blur-md'
            : 'border-b border-transparent',
        )}
      >
        <div className="container-x flex h-16 items-center justify-between md:h-20">
          <a href="#top" className="flex h-full items-center">
            <img
              src="/images/image.png"
              className="h-[90%] w-auto object-contain"
              alt="By Nadia"
            />
          </a>

          <nav
            className="hidden items-center gap-9 lg:flex"
            aria-label="Основная навигация"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm text-muted-foreground transition-colors hover:text-foreground after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <CtaButton
              href="#contacts"
              className="hidden sm:inline-flex"
            >
              Обсудить заказ
            </CtaButton>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex size-11 items-center justify-center rounded-full text-foreground transition-colors hover:bg-foreground/[0.05] lg:hidden"
              aria-label="Открыть меню"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-0 z-[100] lg:hidden',
          open ? 'pointer-events-auto' : 'pointer-events-none',
        )}
        aria-hidden={!open}
      >
        {/* Overlay */}
        <div
          className={cn(
            'absolute inset-0 bg-foreground/40 backdrop-blur-sm transition-opacity duration-300',
            open ? 'opacity-100' : 'opacity-0',
          )}
          onClick={() => setOpen(false)}
        />

        {/* Menu panel */}
        <div
          className={cn(
            'absolute inset-y-0 right-0 flex w-[86%] max-w-sm flex-col bg-background px-7 py-6 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
            open ? 'translate-x-0' : 'translate-x-full',
          )}
        >
          <div className="flex items-center justify-between">
            <span className="font-serif text-lg tracking-[0.22em]">
              BY NADIA
            </span>

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex size-11 items-center justify-center rounded-full text-foreground transition-colors hover:bg-foreground/[0.05]"
              aria-label="Закрыть меню"
            >
              <X className="size-5" />
            </button>
          </div>

          <nav
            className="mt-10 flex flex-col gap-1"
            aria-label="Мобильная навигация"
          >
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-4 font-serif text-2xl text-foreground/90 transition-colors hover:text-accent"
                style={{
                  transitionDelay: `${i * 40}ms`,
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <CtaButton
            href="#contacts"
            size="lg"
            variant="accent"
            onClick={() => setOpen(false)}
            className="mt-auto w-full"
          >
            Обсудить заказ
          </CtaButton>
        </div>
      </div>
    </>
  )
}