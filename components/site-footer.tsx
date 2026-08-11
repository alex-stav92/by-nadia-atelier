import { NAV_LINKS } from './site-data'

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 py-14">
      <div className="container-x flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <p className="font-serif text-xl tracking-[0.22em] text-foreground">BY NADIA</p>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            Ателье индивидуального пошива и ремонта одежды.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-3" aria-label="Навигация в подвале">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="container-x mt-12 border-t border-border/60 pt-6">
        <p className="text-sm text-muted-foreground">© ByNadia, 2026</p>
      </div>
    </footer>
  )
}
