import Link from "next/link";
import { ArrowRightIcon, CheckIcon } from "@heroicons/react/24/outline";
import type { ReactNode } from "react";
import { Reveal, Section } from "@/components/primitives";

export function Button({ href, children, variant = "primary", className = "" }: { href: string; children: ReactNode; variant?: "primary" | "secondary" | "outline"; className?: string }) {
  const styles = {
    primary: "bg-teal text-white shadow-[0_12px_28px_-12px_rgba(13,92,87,.6)] hover:-translate-y-1 hover:bg-teal-dark hover:shadow-[0_18px_36px_-14px_rgba(13,92,87,.65)] active:translate-y-0",
    secondary: "bg-gold text-white shadow-[0_12px_28px_-12px_rgba(197,139,58,.55)] hover:-translate-y-1 hover:bg-[#ad762b] hover:shadow-[0_18px_36px_-14px_rgba(197,139,58,.6)] active:translate-y-0",
    outline: "border border-teal/20 bg-white/50 text-teal shadow-sm backdrop-blur-sm hover:-translate-y-1 hover:border-teal/45 hover:bg-white hover:shadow-card active:translate-y-0",
  };
  return <Link href={href} className={`group inline-flex min-h-13 items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[0.82rem] font-bold tracking-[-.01em] transition-all duration-300 ${styles[variant]} ${className}`}>{children}<ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /></Link>;
}

export function SectionHeading({ eyebrow, title, copy, align = "left" }: { eyebrow: string; title: string; copy?: string; align?: "left" | "center" }) {
  return <Reveal className={`max-w-[46rem] ${align === "center" ? "mx-auto text-center" : ""}`}>
    <p className={`eyebrow ${align === "center" ? "before:hidden" : ""}`}>{eyebrow}</p>
    <h2 className="font-display text-[2.75rem] font-medium leading-[.98] text-charcoal sm:text-5xl lg:text-[4rem]">{title}</h2>
    {copy && <p className="mt-7 max-w-[42rem] text-base leading-8 text-charcoal/65 sm:text-lg sm:leading-9">{copy}</p>}
  </Reveal>;
}

export function PageHeader({ eyebrow, title, copy, children }: { eyebrow: string; title: string; copy: string; children?: ReactNode }) {
  return <section className="hero-glow relative overflow-hidden border-b border-teal/[0.08] pt-28 sm:pt-36">
    <div className="absolute inset-y-0 right-0 hidden w-2/5 opacity-50 noise-grid lg:block" />
    <div className="container-site relative py-20 sm:py-28 lg:py-36">
      <Reveal className="max-w-[58rem]" y={30}>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="font-display text-[3.4rem] font-medium leading-[.92] tracking-[-.045em] sm:text-7xl lg:text-[5.25rem]">{title}</h1>
        <p className="mt-8 max-w-[44rem] text-lg leading-8 text-charcoal/65 sm:text-xl sm:leading-9">{copy}</p>
        {children && <div className="mt-10 flex flex-wrap gap-3">{children}</div>}
      </Reveal>
    </div>
  </section>;
}

export const PageHero = PageHeader;

export function NumberBadge({ children }: { children: ReactNode }) {
  return <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-teal text-sm font-bold text-white shadow-lg shadow-teal/15">{children}</span>;
}

export function CheckList({ items, light = false }: { items: string[]; light?: boolean }) {
  return <ul className="space-y-3">{items.map(item => <li key={item} className={`flex items-start gap-3 text-sm leading-6 ${light ? "text-white/75" : "text-charcoal/70"}`}><span className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${light ? "bg-white/15" : "bg-teal-light"}`}><CheckIcon className={`h-3 w-3 ${light ? "text-white" : "text-teal"}`} /></span>{item}</li>)}</ul>;
}

export function FinalCTA({ title = "Let’s make things clearer.", copy = "Bring me the part of your business that feels tangled, inconsistent, or harder than it should be. We’ll find the signal and build a practical way forward." }: { title?: string; copy?: string }) {
  return <Section>
      <div className="relative overflow-hidden rounded-5xl bg-teal px-6 py-16 text-center text-white shadow-soft sm:px-12 sm:py-24">
        <div className="absolute -left-20 -top-24 h-56 w-56 rounded-full border-[35px] border-white/5" />
        <div className="absolute -bottom-20 -right-12 h-52 w-52 rounded-full bg-gold/20 blur-2xl" />
        <div className="relative mx-auto max-w-2xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[.2em] text-gold-light">A clearer next step</p>
          <h2 className="font-display text-4xl leading-none sm:text-6xl">{title}</h2>
          <p className="mx-auto mt-7 max-w-xl leading-8 text-white/70">{copy}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-3"><Button href="/contact" variant="secondary">Start a conversation</Button><Button href="/services" className="border-white/20 bg-white/10 text-white hover:bg-white/20">Explore services</Button></div>
        </div>
      </div>
  </Section>;
}
