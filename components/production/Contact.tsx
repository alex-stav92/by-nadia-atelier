{/* CONTACTS */}
<div
  className={`mt-10 space-y-7 ${
    visible ? 'animate-fade-up' : 'opacity-0'
  }`}
  style={{
    animationDelay: '260ms',
  }}
>
  {/* LOCATION */}
  <div>
    <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
      Локация
    </p>

    <a
      href={CONTACTS.mapsHref}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-2 inline-block text-sm text-foreground transition-colors duration-300 hover:text-accent"
    >
      {CONTACTS.addressFull}
    </a>
  </div>

  {/* PHONE */}
  <div>
    <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
      Телефон
    </p>

    <a
      href={CONTACTS.phoneHref}
      className="mt-2 inline-block text-sm text-foreground transition-colors duration-300 hover:text-accent"
    >
      {CONTACTS.phone}
    </a>
  </div>

  {/* MESSENGERS */}
  <div>
    <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
      Мессенджеры
    </p>

    <div className="mt-2 flex flex-col gap-1.5">
      <a
        href={CONTACTS.telegramHref}
        target="_blank"
        rel="noopener noreferrer"
        className="w-fit text-sm text-foreground transition-colors duration-300 hover:text-accent"
      >
        Telegram
      </a>

      <a
        href={CONTACTS.maxHref}
        target="_blank"
        rel="noopener noreferrer"
        className="w-fit text-sm text-foreground transition-colors duration-300 hover:text-accent"
      >
        MAX
      </a>

      <a
        href={CONTACTS.vkHref}
        target="_blank"
        rel="noopener noreferrer"
        className="w-fit text-sm text-foreground transition-colors duration-300 hover:text-accent"
      >
        ВКонтакте
      </a>
    </div>
  </div>

  {/* HOURS */}
  <div>
    <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
      Режим работы
    </p>

    <p className="mt-2 text-sm text-foreground">
      {CONTACTS.hours}
    </p>
  </div>
</div>