import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRightIcon, BoltIcon, BuildingStorefrontIcon, ChatBubbleLeftRightIcon, EyeIcon, LightBulbIcon, MapIcon, PuzzlePieceIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { Button, FinalCTA, NumberBadge, SectionHeading } from "@/components/ui";
import { Card, Stagger } from "@/components/primitives";

export const metadata: Metadata = {
  title: "Business Systems Consultant",
  description: "I build clarity systems for businesses—from AI visibility and operations to customer experiences and product innovation.",
};

const divisions = [
  { n: "01", icon: EyeIcon, title: "AI Clarity Consulting", tag: "Control how AI describes your business.", copy: "Through AgentAirDirect, I uncover what AI can—or can’t—understand about your business and turn those findings into a clear action plan.", href: "/agentairdirect", color: "bg-teal text-white" },
  { n: "02", icon: PuzzlePieceIcon, title: "Operational Consulting", tag: "Make the everyday work better.", copy: "I simplify workflows, documentation, inventory, automation, and customer experiences so your business runs with less friction.", href: "/services#operations", color: "bg-white text-charcoal" },
  { n: "03", icon: LightBulbIcon, title: "Product & Environment Innovation", tag: "Turn real problems into thoughtful products.", copy: "I develop practical concepts across products, spaces, mobility, retail, and pet-centered living—with the real user always in view.", href: "/services#innovation", color: "bg-gold-light/60 text-charcoal" },
];

const audiences = ["Restaurants & retail", "Apartment communities", "Local & small businesses", "Healthcare-adjacent offices", "Hispanic-owned businesses", "Businesses powered by gig workers"];

export default function Home() {
  return <>
    <section className="hero-glow relative min-h-[760px] overflow-hidden pt-28 sm:pt-36">
      <div className="absolute right-0 top-20 h-[620px] w-2/5 opacity-40 noise-grid" />
      <div className="container-site relative grid items-center gap-14 py-14 lg:grid-cols-[1.15fr_.85fr] lg:py-24">
        <div>
          <p className="eyebrow">Business Systems Consultant</p>
          <h1 className="max-w-4xl font-display text-[3.6rem] leading-[.92] tracking-[-.035em] sm:text-7xl lg:text-[5.6rem]">I Build <span className="italic text-teal">Clarity Systems</span> for Businesses.</h1>
          <p className="mt-7 max-w-3xl text-base leading-8 text-charcoal/70 sm:text-lg">I help businesses fix unclear information, unclear operations, unclear workflows, unclear documentation, and unclear customer experiences — whether online, in-store, inside the office, or built into the physical environment.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap"><Button href="/contact">Book a Consultation</Button><Button href="/contact?service=signal-audit" variant="secondary">Request a Signal Audit™</Button><Button href="/services" variant="outline">Explore Consulting Services</Button></div>
        </div>
        <div className="relative mx-auto hidden aspect-square w-full max-w-lg lg:block" aria-hidden="true">
          <div className="orb absolute inset-[8%] rounded-full border border-teal/20 bg-white/45 shadow-soft backdrop-blur-sm" />
          <div className="absolute inset-[21%] rounded-full bg-teal shadow-2xl shadow-teal/20" />
          <div className="absolute inset-[34%] flex items-center justify-center rounded-full border border-white/30 bg-teal-dark text-center font-display text-2xl italic text-white">See the<br />whole system.</div>
          {["Information", "Operations", "Experience", "Environment"].map((x, i) => <div key={x} className={`absolute rounded-full border border-teal/10 bg-white px-4 py-2 text-xs font-bold text-teal shadow-card ${i === 0 ? "left-0 top-[24%]" : i === 1 ? "right-0 top-[18%]" : i === 2 ? "bottom-[18%] right-0" : "bottom-[12%] left-[5%]"}`}>{x}</div>)}
          <div className="absolute right-[3%] top-[48%] h-5 w-5 rounded-full bg-gold" /><div className="absolute left-[12%] top-[51%] h-3 w-3 rounded-full bg-gold/60" />
        </div>
      </div>
    </section>

    <section className="border-y border-teal/10 bg-white/55 py-8"><div className="container-site flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center"><p className="font-display text-2xl sm:text-3xl">You don’t need more noise. <span className="italic text-teal">You need a clearer system.</span></p><p className="max-w-md text-sm leading-6 text-charcoal/60">I notice what’s being missed, connect the pieces, and build solutions people can actually use.</p></div></section>

    <section className="section-pad"><div className="container-site grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:items-start">
      <div className="lg:sticky lg:top-32"><SectionHeading eyebrow="What I do" title="Find the friction. Build the fix." copy="My work begins with careful observation. I look at how information moves, where people get stuck, and what the business is quietly asking for." /><Button href="/about" variant="outline" className="mt-8">How I think</Button></div>
      <Stagger className="grid gap-5 sm:grid-cols-2">
        {[{icon:EyeIcon,title:"See what’s unclear",copy:"I find the gaps that have become invisible because everyone is used to working around them."},{icon:MapIcon,title:"Map the whole system",copy:"People, tools, information, spaces, and customer moments all belong in the same picture."},{icon:BoltIcon,title:"Create practical changes",copy:"The answer might be a workflow, clearer content, a tool, an automation, or a physical design."},{icon:ChatBubbleLeftRightIcon,title:"Make it human",copy:"Good systems should reduce stress, make sense quickly, and work for the people actually using them."}].map(({icon:Icon,title,copy}) => <Card key={title} className="p-8 sm:p-9"><span className="mb-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-light text-teal"><Icon className="h-6 w-6" /></span><h3 className="font-display text-2xl">{title}</h3><p className="mt-4 text-sm leading-7 text-charcoal/60">{copy}</p></Card>)}
      </Stagger>
    </div></section>

    <section className="section-pad bg-[#F2EEE5]"><div className="container-site"><SectionHeading eyebrow="Three consulting divisions" title="Different problems. One way of seeing." copy="Every division is grounded in the same idea: make the invisible visible, then make the system easier to trust." />
      <div className="mt-12 grid gap-5 lg:grid-cols-3">{divisions.map(({icon:Icon,...d}) => <article key={d.title} className={`group flex min-h-[430px] flex-col rounded-4xl border border-teal/10 p-7 shadow-card transition-transform hover:-translate-y-1 ${d.color}`}><div className="flex items-center justify-between"><span className="text-xs font-bold tracking-[.2em] opacity-50">{d.n}</span><Icon className="h-7 w-7 opacity-70" /></div><div className="mt-auto"><p className="mb-3 text-xs font-bold uppercase tracking-[.14em] opacity-60">{d.tag}</p><h3 className="font-display text-4xl leading-none">{d.title}</h3><p className="mt-5 text-sm leading-7 opacity-70">{d.copy}</p><Link href={d.href} className="mt-7 inline-flex items-center gap-2 text-sm font-bold">Explore division <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link></div></article>)}</div>
    </div></section>

    <section className="section-pad overflow-hidden"><div className="container-site"><div className="relative overflow-hidden rounded-4xl bg-teal p-7 text-white shadow-soft sm:p-12 lg:p-16">
      <div className="absolute right-0 top-0 h-full w-1/2 opacity-20 noise-grid" /><div className="absolute -right-20 -top-24 h-80 w-80 rounded-full border-[60px] border-white/5" />
      <div className="relative grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center"><div><p className="mb-5 text-xs font-bold uppercase tracking-[.2em] text-gold-light">Featured · AgentAirDirect</p><h2 className="font-display text-5xl leading-[.95] sm:text-6xl">Control How AI Describes Your Business.</h2><p className="mt-6 max-w-xl leading-8 text-white/70">AI answers are already shaping what customers believe. AgentAirDirect shows you what those systems see, what they miss, and which signals need to become clearer.</p><div className="mt-8 flex flex-wrap gap-3"><Button href="/agentairdirect" variant="secondary">Discover AgentAirDirect</Button><Button href="/contact?service=signal-audit" className="border-white/20 bg-white/10 text-white hover:bg-white/20">Request an audit</Button></div></div>
      <div className="grid gap-3 sm:grid-cols-2">{["See how AI describes you", "Find missing trust signals", "Prioritize the right fixes", "Track clarity over time"].map((x,i)=><div key={x} className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-sm"><span className="text-xs font-bold text-gold-light">0{i+1}</span><p className="mt-4 font-display text-xl">{x}</p></div>)}</div></div>
    </div></div></section>

    <section className="section-pad border-y border-teal/10 bg-white/50"><div className="container-site grid gap-12 lg:grid-cols-2 lg:items-center"><div><SectionHeading eyebrow="Who I help" title="Built for real businesses in the real world." copy="I work especially well with businesses where online information, daily operations, physical spaces, and human experience overlap." /><div className="mt-8 flex flex-wrap gap-2">{audiences.map(x=><span key={x} className="rounded-full border border-teal/15 bg-ivory px-4 py-2.5 text-sm font-semibold text-charcoal/70">{x}</span>)}</div></div><div className="rounded-4xl bg-gold-light/45 p-8 sm:p-10"><SparklesIcon className="h-8 w-8 text-gold" /><p className="mt-8 font-display text-3xl leading-tight">“You may know something isn’t working without having the language for it yet.”</p><p className="mt-5 leading-7 text-charcoal/65">That’s a perfectly good place to begin. You bring the lived experience. I’ll help name the pattern and shape the solution.</p></div></div></section>

    <section className="section-pad"><div className="container-site"><SectionHeading eyebrow="How I work" title="Clear, thoughtful, and grounded." align="center" /><div className="mx-auto mt-14 grid max-w-5xl gap-8 md:grid-cols-3">{[["01","Listen & observe","We start with what you’re seeing, what people are doing, and where the strain shows up."],["02","Find the pattern","I connect the visible problem to the system underneath it and identify the clearest leverage points."],["03","Build the way forward","You get focused recommendations—and, when needed, the workflow, tool, content, or concept itself."]].map(([n,t,c],i)=><div key={n} className="relative"><NumberBadge>{n}</NumberBadge>{i<2&&<div className="absolute left-14 right-0 top-5 hidden h-px bg-teal/15 md:block"/>}<h3 className="mt-6 font-display text-2xl">{t}</h3><p className="mt-3 text-sm leading-7 text-charcoal/65">{c}</p></div>)}</div></div></section>

    <section className="section-pad bg-[#F2EEE5]"><div className="container-site"><div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><SectionHeading eyebrow="Selected work" title="Ideas made practical." /><Link href="/portfolio" className="link-arrow">View all projects <ArrowRightIcon className="h-4 w-4" /></Link></div><div className="mt-10 grid gap-5 md:grid-cols-3">{[["AI clarity","Signal Audit™","A structured view of how AI interprets a business—and the signals that can make that picture more accurate."],["Operations","Restaurant inventory system","A practical system designed around the actual pace, people, and realities of a working restaurant."],["Product innovation","Carrier → cart → car → bike","One adaptable mobility concept built around the real routines of people with very small dogs."]].map(([cat,title,copy])=><article key={title} className="card group p-7 transition-transform hover:-translate-y-1"><p className="text-xs font-bold uppercase tracking-[.15em] text-gold">{cat}</p><h3 className="mt-7 font-display text-3xl">{title}</h3><p className="mt-4 text-sm leading-7 text-charcoal/65">{copy}</p><ArrowRightIcon className="mt-8 h-5 w-5 text-teal transition-transform group-hover:translate-x-1" /></article>)}</div></div></section>
    <FinalCTA />
  </>;
}
