'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import {
  NAV_LINKS,
  PRODUCTION_NAV_LINKS,
  DIRECTIONS,
  CONTACTS,
} from './site-data'

export default function Footer() {
  const pathname = usePathname()

  const isAtelier = pathname.startsWith('/atelier')
  const isProduction = pathname.startsWith('/production')

  const currentNav = isProduction
    ? PRODUCTION_NAV_LINKS
    : isAtelier
      ? NAV_LINKS
      : null

  return (
    <footer className="bg-foreground text-background">
      <div className="container-x py-16 md:py-20">

        {/* MAIN */}
        <div className="grid gap-12 md:grid-cols-12 md:gap-10">

          {/* BRAND */}
          <div className="md:col-span-4 max-w-sm">
            <Link
              href="/"
              className="font-serif text-2xl tracking-[0.18em] transition-opacity duration-300 hover:opacity-70"
            >
              BY NADIA
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-background/60">
              Ателье и швейное производство для людей,
              брендов и компаний.
            </p>

            <p className="mt-6 text-xs uppercase tracking-[0.28em] text-background/35">
              {CONTACTS.city}, {CONTACTS.country}
            </p>
          </div>


          {/* NAVIGATION */}
          {currentNav && (
            <div className="md:col-span-3">
              <h3 className="text-[11px] uppercase tracking-[0.28em] text-background/35">
                Навигация
              </h3>

              <nav
                className="mt-5"
                aria-label="Навигация в подвале"
              >
                <ul className="space-y-3">
                  {currentNav.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-sm text-background/70 transition-colors duration-300 hover:text-background"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          )}


          {/* DIRECTIONS */}
          <div className={currentNav ? 'md:col-span-2' : 'md:col-span-4'}>
            <h3 className="text-[11px] uppercase tracking-[0.28em] text-background/35">
              Направления
            </h3>

            <nav className="mt-5" aria-label="Направления BY NADIA">
              <ul className="space-y-4">
                {DIRECTIONS.map((direction) => {
                  const active =
                    (direction.href === '/atelier' && isAtelier) ||
                    (direction.href === '/production' && isProduction)

                  return (
                    <li key={direction.href}>
                      <Link
                        href={direction.href}
                        className="group block"
                      >
                        <span
                          className={`text-sm transition-colors duration-300 ${
                            active
                              ? 'text-background'
                              : 'text-background/70 group-hover:text-background'
                          }`}
                        >
                          {direction.label}
                        </span>

                        <span className="mt-0.5 block text-[11px] text-background/35">
                          {direction.description}
                        </span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>


          {/* CONTACTS */}
          <div className={currentNav ? 'md:col-span-3' : 'md:col-span-4'}>
            <h3 className="text-[11px] uppercase tracking-[0.28em] text-background/35">
              Контакты
            </h3>

            <ul className="mt-5 space-y-3">

              <li>
                <a
                  href={CONTACTS.telegramHref}
                  className="text-sm text-background/70 transition-colors duration-300 hover:text-background"
                >
                  Telegram — {CONTACTS.telegram}
                </a>
              </li>

              <li>
                <a
                  href={CONTACTS.whatsappHref}
                  className="text-sm text-background/70 transition-colors duration-300 hover:text-background"
                >
                  WhatsApp — {CONTACTS.whatsapp}
                </a>
              </li>

              <li>
                <a
                  href={CONTACTS.phoneHref}
                  className="text-sm text-background/70 transition-colors duration-300 hover:text-background"
                >
                  {CONTACTS.phone}
                </a>
              </li>

              <li>
                <a
                  href={CONTACTS.emailHref}
                  className="text-sm text-background/70 transition-colors duration-300 hover:text-background"
                >
                  {CONTACTS.email}
                </a>
              </li>

            </ul>
          </div>

        </div>


        {/* BOTTOM */}
        <div className="mt-14 flex flex-col gap-3 border-t border-background/10 pt-7 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-[11px] uppercase tracking-[0.22em] text-background/30">
            © BY NADIA, 2026
          </p>

          <p className="text-[11px] uppercase tracking-[0.22em] text-background/30">
            Ателье · Швейное производство
          </p>

        </div>

      </div>
    </footer>
  )
}