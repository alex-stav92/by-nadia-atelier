'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navLinks = [
  {
    label: 'ATELIER',
    sub: 'Частным клиентам',
    to: '/atelier',
  },
  {
    label: 'PRODUCTION',
    sub: 'Брендам',
    to: '/production',
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  /* =======================================================
     Закрываем мобильное меню при переходе
  ======================================================= */

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  /* =======================================================
     Блокируем прокрутку страницы при открытом меню
  ======================================================= */

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      {/* ===================================================
          HEADER
          Общий Header для всех страниц
      =================================================== */}

      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-md">
        <div className="container-x flex h-16 items-center justify-between md:h-20">

          {/* =================================================
              LOGO
          ================================================= */}

          <Link
            href="/"
            className="group flex items-center"
            aria-label="BY NADIA — на главную"
          >
            <span className="font-serif text-xl font-medium tracking-[0.12em] text-foreground transition-opacity duration-300 group-hover:opacity-60 sm:text-2xl">
              BY NADIA
            </span>
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <nav
            className="hidden items-center gap-9 md:flex"
            aria-label="Основная навигация"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                href={link.to}
                className="group flex flex-col items-end leading-none"
              >
                <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-foreground transition-opacity duration-300 group-hover:opacity-60">
                  {link.label}
                </span>

                <span className="mt-1 text-[10px] tracking-wide text-muted-foreground transition-opacity duration-300 group-hover:opacity-70">
                  {link.sub}
                </span>
              </Link>
            ))}
          </nav>

          {/* =================================================
              MOBILE BUTTON
          ================================================= */}

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex size-11 items-center justify-center rounded-full text-foreground transition-colors duration-300 hover:bg-foreground/[0.05] md:hidden"
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={open}
          >
            {open ? (
              <X className="size-5" strokeWidth={1.5} />
            ) : (
              <Menu className="size-5" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </header>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <div
        className={`fixed inset-0 z-[100] md:hidden ${
          open
            ? 'pointer-events-auto'
            : 'pointer-events-none'
        }`}
        aria-hidden={!open}
      >

        {/* ===================================================
            OVERLAY
        =================================================== */}

        <div
          className={`absolute inset-0 bg-foreground/40 backdrop-blur-sm transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setOpen(false)}
        />

        {/* ===================================================
            MENU PANEL
        =================================================== */}

        <div
          className={`absolute inset-y-0 right-0 flex w-[86%] max-w-sm flex-col bg-background px-7 py-6 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            open
              ? 'translate-x-0'
              : 'translate-x-full'
          }`}
        >

          {/* =================================================
              MOBILE HEADER
          ================================================= */}

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
              className="inline-flex size-11 items-center justify-center rounded-full text-foreground transition-colors duration-300 hover:bg-foreground/[0.05]"
              aria-label="Закрыть меню"
            >
              <X className="size-5" strokeWidth={1.5} />
            </button>
          </div>

          {/* =================================================
              MOBILE NAVIGATION
          ================================================= */}

          <nav
            className="mt-10 flex flex-col gap-1"
            aria-label="Мобильная навигация"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                href={link.to}
                onClick={() => setOpen(false)}
                className="flex items-baseline justify-between border-b border-border/60 py-5 transition-colors duration-300 first:pt-0 hover:text-accent"
              >
                <span className="font-serif text-3xl font-light text-foreground">
                  {link.label}
                </span>

                <span className="text-xs tracking-wide text-muted-foreground">
                  {link.sub}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}