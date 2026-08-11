import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background'

const sizes = {
  md: 'h-11 px-6 text-sm',
  lg: 'h-14 px-8 text-base',
}

const variants = {
  primary: 'bg-primary text-primary-foreground hover:bg-primary/88 hover:shadow-[0_10px_30px_-12px_rgba(60,50,40,0.55)]',
  accent: 'bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-[0_10px_30px_-12px_rgba(150,90,60,0.6)]',
  outline: 'border border-foreground/25 text-foreground hover:border-foreground/60 hover:bg-foreground/[0.04]',
}

export function CtaButton({
  className,
  variant = 'primary',
  size = 'md',
  ...props
}: ComponentProps<'a'> & {
  variant?: keyof typeof variants
  size?: keyof typeof sizes
}) {
  return <a className={cn(base, sizes[size], variants[variant], className)} {...props} />
}
