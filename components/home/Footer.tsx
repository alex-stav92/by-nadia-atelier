import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-x py-16 md:py-20">

        <div className="grid gap-12 md:grid-cols-3 md:gap-10">

          {/* BRAND */}
          <div className="max-w-sm">
            <Link
              href="/"
              className="font-serif text-2xl tracking-[0.18em] transition-opacity duration-300 hover:opacity-70"
            >
              BY NADIA
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-background/60">
              Швейное мастерство для людей и брендов.
              Ателье и производство одежды.
            </p>

            <p className="mt-6 text-xs uppercase tracking-[0.28em] text-background/35">
              Ставрополь · Россия
            </p>
          </div>

          {/* DIRECTIONS */}
          <div>
            <h3 className="text-[11px] uppercase tracking-[0.28em] text-background/35">
              Направления
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  href="/atelier"
                  className="text-sm text-background/70 transition-colors duration-300 hover:text-background"
                >
                  Atelier — частным клиентам
                </Link>
              </li>

              <li>
                <Link
                  href="/production"
                  className="text-sm text-background/70 transition-colors duration-300 hover:text-background"
                >
                  Production — брендам
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACTS */}
          <div>
            <h3 className="text-[11px] uppercase tracking-[0.28em] text-background/35">
              Контакты
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-background/70">
              <li>Ставрополь</li>
              <li>Россия</li>
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