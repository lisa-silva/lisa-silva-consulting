import Link from "next/link";

const services = [["AI Clarity", "/services#ai-clarity"], ["Operational Consulting", "/services#operations"], ["Product Innovation", "/services#innovation"]];
const company = [["About", "/about"], ["Portfolio", "/portfolio"], ["Contact", "/contact"]];

export default function SiteFooter() {
  return <footer className="relative overflow-hidden border-t border-white/10 bg-teal-dark text-white">
    <div className="absolute -right-32 -top-48 h-[32rem] w-[32rem] rounded-full border-[80px] border-white/[.025]" />
    <div className="container-site relative py-20 sm:py-24">
      <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-[1.35fr_.7fr_.8fr_1fr]">
        <div><Link href="/" className="font-display text-3xl tracking-tight">Lisa Silva <span className="italic text-gold-light">Consulting</span></Link><p className="mt-6 max-w-sm text-sm leading-7 text-white/55">Practical clarity systems for businesses, operations, customer experiences, and ideas that deserve to work better.</p><Link href="/contact" className="link-arrow mt-7 text-sm !text-gold-light">Let’s work together <span aria-hidden>→</span></Link></div>
        <div><p className="text-[10px] font-bold uppercase tracking-[.22em] text-gold-light">About</p><div className="mt-6 grid gap-3">{company.map(([label, href]) => <Link key={href} href={href} className="text-sm text-white/55 transition-all hover:translate-x-1 hover:text-white">{label}</Link>)}</div></div>
        <div><p className="text-[10px] font-bold uppercase tracking-[.22em] text-gold-light">Services</p><div className="mt-6 grid gap-3">{services.map(([label, href]) => <Link key={href} href={href} className="text-sm text-white/55 transition-all hover:translate-x-1 hover:text-white">{label}</Link>)}</div></div>
        <div><p className="text-[10px] font-bold uppercase tracking-[.22em] text-gold-light">AgentAirDirect</p><p className="mt-6 text-sm leading-7 text-white/55">Control how AI describes your business.</p><Link href="/agentairdirect" className="mt-4 inline-block text-sm font-bold text-white transition-colors hover:text-gold-light">Explore the platform →</Link><div className="mt-8 flex gap-2" aria-label="Social links">{["in","ig","x"].map(x=><span key={x} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-[10px] font-bold uppercase text-white/50 transition-colors hover:border-gold-light/50 hover:text-gold-light">{x}</span>)}</div></div>
      </div>
      <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-7 text-[11px] text-white/35 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} Lisa Silva Consulting. All rights reserved.</p><p>Business Systems Consultant · Founder of AgentAirDirect™</p></div>
    </div>
  </footer>;
}
