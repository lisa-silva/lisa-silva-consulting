import Link from "next/link";
import { ArrowRightIcon, CheckIcon } from "@heroicons/react/24/outline";
import type { ReactNode } from "react";

export function Button({ href, children, variant = "primary", className = "" }: { href: string; children: ReactNode; variant?: "primary" | "secondary" | "outline"; className?: string }) {
  const styles = {
    primary: "bg-teal text-white shadow-lg shadow-teal/15 hover:-translate-y-0.5 hover:bg-teal-dark",
    secondary: "bg-gold text-white shadow-lg shadow-gold/15 hover:-translate-y-0.5 hover:bg-[#ad762b]",
    outline: "border border-teal/25 bg-white/60 text-teal hover:-translate-y-0.5 hover:border-teal hover:bg-white",
  };
  return <Link href={href} className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all ${styles[variant]} ${className}`}>{children}<ArrowRightIcon className="h-4 w-4" /></Link>;
}

export function SectionHeading({ eyebrow, title, copy, align = "left" }: { eyebrow: string; title: string; copy?: string; align?: "left" | "center" }) {
  return <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
    <p className={`eyebrow ${align === "center" ? "before:hidden" : ""}`}>{eyebrow}</p>
    <h2 className="font-display text-4xl leading-[1.05] text-charcoal sm:text-5xl lg:text-6xl">{title}</h2>
    {copy && <p className="mt-5 max-w-2xl text-base leading-8 text-charcoal/70 sm:text-lg">{copy}</p>}
  </div>;
}

export function PageHero({ eyebrow, title, copy, children }: { eyebrow: string; title: string; copy: string; children?: ReactNode }) {
  return <section className="hero-glow relative overflow-hidden border-b border-teal/10 pt-28 sm:pt-36">
    <div className="absolute inset-y-0 right-0 hidden w-2/5 opacity-50 noise-grid lg:block" />
    <div className="container-site relative py-16 sm:py-20 lg:py-24">
      <div className="max-w-4xl">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="font-display text-5xl leading-[.98] sm:text-6xl lg:text-7xl">{title}</h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-charcoal/70 sm:text-xl">{copy}</p>
        {children && <div className="mt-9 flex flex-wrap gap-3">{children}</div>}
      </div>
    </div>
  </section>;
}

export function NumberBadge({ children }: { children: ReactNode }) {
  return <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-teal text-sm font-bold text-white shadow-lg shadow-teal/15">{children}</span>;
}

export function CheckList({ items, light = false }: { items: string[]; light?: boolean }) {
  return <ul className="space-y-3">{items.map(item => <li key={item} className={`flex items-start gap-3 text-sm leading-6 ${light ? "text-white/75" : "text-charcoal/70"}`}><span className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${light ? "bg-white/15" : "bg-teal-light"}`}><CheckIcon className={`h-3 w-3 ${light ? "text-white" : "text-teal"}`} /></span>{item}</li>)}</ul>;
}

export function FinalCTA({ title = "Let’s make things clearer.", copy = "Bring me the part of your business that feels tangled, inconsistent, or harder than it should be. We’ll find the signal and build a practical way forward." }: { title?: string; copy?: string }) {
  return <section className="section-pad">
    <div className="container-site">
      <div className="relative overflow-hidden rounded-4xl bg-teal px-6 py-14 text-center text-white shadow-soft sm:px-12 sm:py-16">
        <div className="absolute -left-20 -top-24 h-56 w-56 rounded-full border-[35px] border-white/5" />
        <div className="absolute -bottom-20 -right-12 h-52 w-52 rounded-full bg-gold/20 blur-2xl" />
        <div className="relative mx-auto max-w-2xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[.2em] text-gold-light">A clearer next step</p>
          <h2 className="font-display text-4xl sm:text-5xl">{title}</h2>
          <p className="mx-auto mt-5 max-w-xl leading-7 text-white/75">{copy}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3"><Button href="/contact" variant="secondary">Start a conversation</Button><Button href="/services" className="border-white/20 bg-white/10 text-white hover:bg-white/20">Explore services</Button></div>
        </div>
      </div>
    </div>
  </section>;
}
