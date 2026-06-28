import Link from "next/link";

const nav = [["About", "/about"], ["Services", "/services"], ["AgentAirDirect", "/agentairdirect"], ["Portfolio", "/portfolio"], ["Contact", "/contact"]];

export default function SiteFooter() {
  return <footer className="border-t border-teal/10 bg-white/50">
    <div className="container-site py-14">
      <div className="grid gap-10 md:grid-cols-[1.2fr_.8fr_.8fr]">
        <div><Link href="/" className="font-display text-2xl">Lisa Silva <span className="text-teal">Consulting</span></Link><p className="mt-4 max-w-sm text-sm leading-6 text-charcoal/60">Practical clarity systems for businesses, operations, customer experiences, and ideas that deserve to work better.</p></div>
        <div><p className="text-xs font-bold uppercase tracking-[.18em] text-teal">Explore</p><div className="mt-4 grid gap-2">{nav.map(([label, href]) => <Link key={href} href={href} className="text-sm text-charcoal/65 transition-colors hover:text-teal">{label}</Link>)}</div></div>
        <div><p className="text-xs font-bold uppercase tracking-[.18em] text-teal">Start here</p><p className="mt-4 text-sm leading-6 text-charcoal/60">Not sure what kind of help you need? That’s okay. Describe what feels unclear.</p><Link href="/contact" className="link-arrow mt-4 text-sm">Let’s talk <span aria-hidden>→</span></Link></div>
      </div>
      <div className="mt-12 flex flex-col gap-3 border-t border-teal/10 pt-6 text-xs text-charcoal/45 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} Lisa Silva Consulting. All rights reserved.</p><p>Founder of AgentAirDirect™</p></div>
    </div>
  </footer>;
}
