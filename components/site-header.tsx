"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const links = [
  ["Home", "/"], ["About", "/about"], ["Services", "/services"],
  ["AgentAirDirect", "/agentairdirect"], ["Portfolio", "/portfolio"], ["Contact", "/contact"],
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return <header className="fixed inset-x-0 top-0 z-50 border-b border-teal/10 bg-ivory/90 backdrop-blur-xl">
    <div className="container-site flex h-20 items-center justify-between">
      <Link href="/" className="group flex items-center gap-3" aria-label="Lisa Silva Consulting home">
        <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-teal font-display text-lg italic text-white transition-transform group-hover:-rotate-3">LS</span>
        <span className="leading-tight"><span className="block font-display text-lg">Lisa Silva</span><span className="block text-[9px] font-bold uppercase tracking-[.17em] text-teal/70">Consulting</span></span>
      </Link>
      <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
        {links.map(([label, href]) => <Link key={href} href={href} className={`rounded-full px-3 py-2 text-[13px] font-semibold transition-colors ${pathname === href ? "bg-teal-light text-teal" : "text-charcoal/65 hover:bg-white hover:text-teal"}`}>{label}</Link>)}
      </nav>
      <Link href="/contact" className="hidden rounded-full bg-teal px-5 py-3 text-xs font-bold text-white transition-colors hover:bg-teal-dark sm:block lg:hidden xl:block">Book a consultation</Link>
      <button onClick={() => setOpen(!open)} className="rounded-xl border border-teal/15 bg-white p-2.5 text-teal lg:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label="Toggle navigation">{open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}</button>
    </div>
    {open && <nav id="mobile-menu" className="border-t border-teal/10 bg-ivory px-5 py-5 shadow-soft lg:hidden" aria-label="Mobile navigation">
      <div className="mx-auto grid max-w-7xl gap-1">{links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className={`rounded-2xl px-4 py-3 font-semibold ${pathname === href ? "bg-teal-light text-teal" : "text-charcoal/75"}`}>{label}</Link>)}</div>
    </nav>}
  </header>;
}
