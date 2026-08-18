import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-ink-900/10 bg-ink-950 text-sand-100">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        
        <div className="grid gap-12 md:grid-cols-3">

          {/* =================================================
              BY NADIA
          ================================================= */}

          <div>
            <Link
              href="/"
              className="font-serif text-2xl font-medium tracking-brand text-sand-50 transition-opacity hover:opacity-70"
            >
              BY NADIA
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-sand-300">
              Швейное мастерство для людей и брендов. Ателье и производство одежды.
            </p>
          </div>


          {/* =================================================
              НАПРАВЛЕНИЯ
          ================================================= */}

          <div>
            <h3 className="text-[11px] font-medium uppercase tracking-brand text-sand-400">
              Направления
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link
                  href="/atelier"
                  className="text-sand-100 transition-colors hover:text-sand-400"
                >
                  Atelier — Частным клиентам
                </Link>
              </li>

              <li>
                <Link
                  href="/production"
                  className="text-sand-100 transition-colors hover:text-sand-400"
                >
                  Production — Брендам
                </Link>
              </li>
            </ul>
          </div>


          {/* =================================================
              КОНТАКТЫ
          ================================================= */}

          <div>
            <h3 className="text-[11px] font-medium uppercase tracking-brand text-sand-400">
              Контакты
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-sand-200">
              <li>Ставрополь</li>
              <li>Россия</li>
            </ul>
          </div>

        </div>


        {/* ===================================================
            BOTTOM
        =================================================== */}

        <div className="mt-14 flex flex-col gap-2 border-t border-sand-50/10 pt-8 text-xs text-sand-400 sm:flex-row sm:items-center sm:justify-between">
          <span>© BY NADIA, 2026</span>

          <span className="tracking-wide">
            Швейное мастерство для людей и брендов
          </span>
        </div>

      </div>
    </footer>
  );
}