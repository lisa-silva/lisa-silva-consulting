"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";

const links = [
  ["Home", "/"], ["About", "/about"], ["Services", "/services"],
  ["AgentAirDirect", "/agentairdirect"], ["Portfolio", "/portfolio"], ["Contact", "/contact"],
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", value => setCompact(value > 36));

  return <motion.header initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .6, ease: [0.22,1,0.36,1] }} className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-2xl transition-all duration-500 ${compact ? "border-teal/10 bg-ivory/95 shadow-[0_12px_40px_-28px_rgba(18,55,51,.5)]" : "border-transparent bg-ivory/75"}`}>
    <div className={`container-site flex items-center justify-between transition-all duration-500 ${compact ? "h-16" : "h-20"}`}>
      <Link href="/" className="group flex items-center gap-3" aria-label="Lisa Silva Consulting home">
        <span className={`flex items-center justify-center bg-teal font-display italic text-white transition-all duration-500 group-hover:-rotate-3 ${compact ? "h-9 w-9 rounded-xl text-base" : "h-10 w-10 rounded-2xl text-lg"}`}>LS</span>
        <span className="leading-tight"><span className={`block font-display transition-all duration-500 ${compact ? "text-base" : "text-lg"}`}>Lisa Silva</span><span className="block text-[9px] font-bold uppercase tracking-[.19em] text-teal/65">Consulting</span></span>
      </Link>
      <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
        {links.map(([label, href]) => <Link key={href} href={href} className={`relative rounded-full px-3 py-2 text-[12px] font-bold transition-colors ${pathname === href ? "text-teal" : "text-charcoal/55 hover:text-teal"}`}>{label}{pathname === href && <motion.span layoutId="nav-active" className="absolute inset-x-3 -bottom-0.5 h-px bg-gold" />}</Link>)}
      </nav>
      <Link href="/contact" className={`hidden rounded-full bg-teal px-5 text-xs font-bold text-white shadow-[0_10px_24px_-12px_rgba(13,92,87,.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-dark sm:block lg:hidden xl:block ${compact ? "py-2.5" : "py-3"}`}>Book a consultation</Link>
      <button onClick={() => setOpen(!open)} className="rounded-xl border border-teal/10 bg-white/70 p-2.5 text-teal shadow-sm transition-colors hover:bg-white lg:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label="Toggle navigation">{open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}</button>
    </div>
    <AnimatePresence>{open && <motion.nav initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: .3 }} id="mobile-menu" className="overflow-hidden border-t border-teal/10 bg-ivory/98 px-5 py-5 shadow-soft lg:hidden" aria-label="Mobile navigation">
      <div className="mx-auto grid max-w-7xl gap-1">{links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className={`rounded-2xl px-4 py-3 font-semibold ${pathname === href ? "bg-teal-light text-teal" : "text-charcoal/75"}`}>{label}</Link>)}</div>
    </motion.nav>}</AnimatePresence>
  </motion.header>;
}
