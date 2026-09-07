'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NAV_LINKS, PRODUCTION_NAV_LINKS } from './site-data'
import { CtaButton } from './cta-button'

const DIRECTIONS = [
  {
    label: 'ATELIER',
    sub: 'Частным клиентам',
    href: '/atelier',
  },
  {
    label: 'PRODUCTION',
    sub: 'Брендам',
    href: '/production',
  },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const isProduction = pathname.startsWith('/production')
  const currentNavLinks = isProduction
    ? PRODUCTION_NAV_LINKS
    : NAV_LINKS

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)

    onScroll()

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

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
          'fixed inset-x-0 top-0 z-50 border-b transition-all duration-500',
          scrolled
            ? 'border-border/70 bg-[#FBF0EF]/85 backdrop-blur-md'
            : 'border-border/30 bg-[#FBF0EF]/95',
        )}
      >
        <div className="container-x flex h-16 items-center justify-between md:h-20">

          {/* Logo */}
          <Link
            href="/"
            className="flex h-full items-center"
            aria-label="By Nadia — главная"
          >
            <img
              src="/logo2.png"
              className="h-[90%] w-auto object-contain"
              alt="By Nadia"
            />
          </Link>

          {/* Desktop */}
          <div className="hidden items-center gap-8 lg:flex">

            {/* Direction switch */}
            <nav
              className="flex items-center gap-6"
              aria-label="Направление"
            >
              {DIRECTIONS.map((direction) => {
                const active = pathname.startsWith(direction.href)

                return (
                  <Link
                    key={direction.href}
                    href={direction.href}
                    className="group flex flex-col items-end leading-none"
                  >
                    <span
                      className={cn(
                        'text-[11px] font-medium uppercase tracking-[0.12em] transition-opacity duration-300',
                        active
                          ? 'text-foreground'
                          : 'text-muted-foreground group-hover:text-foreground',
                      )}
                    >
                      {direction.label}
                    </span>

                    <span
                      className={cn(
                        'mt-1 text-[10px] tracking-wide transition-opacity duration-300',
                        active
                          ? 'text-foreground/60'
                          : 'text-muted-foreground/70',
                      )}
                    >
                      {direction.sub}
                    </span>
                  </Link>
                )
              })}
            </nav>

            {/* Page navigation */}
            <nav
              className="flex items-center gap-7 border-l border-border/60 pl-8"
              aria-label="Навигация страницы"
            >
              {currentNavLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative text-sm text-muted-foreground transition-colors hover:text-foreground after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* CTA + mobile button */}
          <div className="flex items-center gap-2">
            <CtaButton
              href="#contacts"
              className="hidden sm:inline-flex"
            >
              {isProduction
                ? 'Обсудить проект'
                : 'Обсудить заказ'}
            </CtaButton>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex size-11 items-center justify-center rounded-full text-foreground transition-colors hover:bg-foreground/[0.05] lg:hidden"
              aria-label="Открыть меню"
              aria-expanded={open}
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
          open
            ? 'pointer-events-auto'
            : 'pointer-events-none',
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
            open
              ? 'translate-x-0'
              : 'translate-x-full',
          )}
        >

          {/* Mobile header */}
          <div className="flex items-center justify-between">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="font-serif text-lg tracking-[0.16em] text-foreground"
            >
              BY NADIA
            </Link>

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex size-11 items-center justify-center rounded-full text-foreground transition-colors hover:bg-foreground/[0.05]"
              aria-label="Закрыть меню"
            >
              <X className="size-5" />
            </button>
          </div>

          {/* Directions */}
          <div className="mt-10">
            <p className="mb-4 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Направление
            </p>

            <nav
              className="flex flex-col"
              aria-label="Направление"
            >
              {DIRECTIONS.map((direction) => {
                const active = pathname.startsWith(direction.href)

                return (
                  <Link
                    key={direction.href}
                    href={direction.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'flex items-center justify-between border-b border-border/60 py-4 transition-colors',
                      active
                        ? 'text-foreground'
                        : 'text-muted-foreground hover:text-foreground',
                    )}
                  >
                    <span className="font-serif text-2xl">
                      {direction.label}
                    </span>

                    <span className="text-xs">
                      {direction.sub}
                    </span>
                  </Link>
                )
              })}
            </nav>
          </div>

          {/* Page navigation */}
          <nav
            className="mt-8 flex flex-col gap-1"
            aria-label="Навигация страницы"
          >
            <p className="mb-2 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Разделы
            </p>

            {currentNavLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 font-serif text-xl text-foreground/90 transition-colors hover:text-accent"
                style={{
                  transitionDelay: `${i * 40}ms`,
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <CtaButton
            href="#contacts"
            size="lg"
            variant="accent"
            onClick={() => setOpen(false)}
            className="mt-auto w-full"
          >
            {isProduction
              ? 'Обсудить проект'
              : 'Обсудить заказ'}
          </CtaButton>
        </div>
      </div>
    </>
  )
}