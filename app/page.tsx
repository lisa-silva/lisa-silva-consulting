import Link from "next/link";
import {
  ArrowRightIcon, BoltIcon, BuildingOffice2Icon, BuildingStorefrontIcon,
  ChatBubbleLeftRightIcon, CircleStackIcon, ClipboardDocumentCheckIcon,
  EyeIcon, LightBulbIcon, MapIcon, PuzzlePieceIcon, SparklesIcon,
} from "@heroicons/react/24/outline";
import { Button, FinalCTA, NumberBadge, SectionHeading } from "@/components/ui";
import { Card, Reveal, Stagger } from "@/components/primitives";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Business Systems Consultant", "Lisa Silva builds clarity systems for AI visibility, operations, workflows, documentation, customer experiences, and physical environments.", "/");

const claritySystems = [
  { icon: EyeIcon, title: "AI Clarity", division: "AgentAirDirect", copy: "Make your business easier for AI systems to understand, verify, and describe accurately." },
  { icon: PuzzlePieceIcon, title: "Operational Clarity", division: "Operations", copy: "Turn scattered processes and daily workarounds into a system your team can rely on." },
  { icon: BoltIcon, title: "Workflow Clarity", division: "Operations", copy: "Remove friction from how information, decisions, and responsibilities move through the business." },
  { icon: ClipboardDocumentCheckIcon, title: "Documentation Clarity", division: "Operations", copy: "Create useful instructions, standards, and knowledge that people can actually follow." },
  { icon: MapIcon, title: "Environment Clarity", division: "Innovation", copy: "Shape physical spaces and products around the real behavior and needs of the people using them." },
];

const industries = [
  { icon: BuildingStorefrontIcon, title: "Restaurants & retail", copy: "Fast-moving businesses where inventory, service, space, and customer expectations collide." },
  { icon: BuildingOffice2Icon, title: "Apartment communities", copy: "Offices and environments that need clearer handoffs, communication, and resident experiences." },
  { icon: CircleStackIcon, title: "Local & small businesses", copy: "Owner-led companies ready to replace accumulated workarounds with practical systems." },
  { icon: ChatBubbleLeftRightIcon, title: "Service-based teams", copy: "Healthcare-adjacent, gig-dependent, and Hispanic-owned businesses where trust matters deeply." },
];

const process = [
  ["01", "Observe", "See how the work really happens—not only how it is supposed to happen."],
  ["02", "Organize", "Bring the people, information, tools, and physical environment into one clear picture."],
  ["03", "Design", "Shape the right response: a workflow, tool, message, product, or space."],
  ["04", "Simplify", "Remove unnecessary decisions and make the better path easier to follow."],
  ["05", "Improve", "Learn from real use and strengthen the system where it matters most."],
];

export default function Home() {
  return <>
    <section className="hero-glow relative min-h-[820px] overflow-hidden pt-28 sm:pt-36">
      <div className="absolute right-0 top-20 h-[620px] w-2/5 opacity-40 noise-grid" />
      <div className="container-site relative grid items-center gap-16 py-20 sm:py-24 lg:grid-cols-[1.15fr_.85fr] lg:py-32">
        <Reveal>
          <p className="eyebrow">Business Systems Consultant</p>
          <h1 className="max-w-4xl font-display text-[3.75rem] font-medium leading-[.89] tracking-[-.05em] sm:text-7xl lg:text-[5.9rem]">I Build <span className="italic text-teal">Clarity Systems</span> for Businesses.</h1>
          <p className="mt-8 max-w-3xl text-base leading-8 text-charcoal/65 sm:text-lg sm:leading-9">I help businesses fix unclear information, operations, workflows, documentation, and customer experiences—whether online, in-store, inside the office, or built into the physical environment.</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap"><Button href="/contact">Book a Consultation</Button><Button href="/contact?service=signal-audit" variant="secondary">Request a Signal Audit™</Button><Button href="/services" variant="outline">Explore Consulting Services</Button></div>
        </Reveal>
        <div className="relative mx-auto hidden aspect-square w-full max-w-lg lg:block" aria-hidden="true">
          <div className="orb absolute inset-[8%] rounded-full border border-teal/20 bg-white/45 shadow-soft backdrop-blur-sm" />
          <div className="absolute inset-[21%] rounded-full bg-teal shadow-2xl shadow-teal/20" />
          <div className="absolute inset-[34%] flex items-center justify-center rounded-full border border-white/30 bg-teal-dark text-center font-display text-2xl italic text-white">See the<br />whole system.</div>
          {["Information", "Operations", "Experience", "Environment"].map((item, i) => <div key={item} className={`absolute rounded-full border border-teal/10 bg-white px-4 py-2 text-xs font-bold text-teal shadow-card ${i === 0 ? "left-0 top-[24%]" : i === 1 ? "right-0 top-[18%]" : i === 2 ? "bottom-[18%] right-0" : "bottom-[12%] left-[5%]"}`}>{item}</div>)}
        </div>
      </div>
    </section>

    <section className="section-pad bg-teal-dark text-white"><div className="container-site grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
      <div><p className="mb-5 text-[.68rem] font-extrabold uppercase tracking-[.23em] text-gold-light">The problem</p><h2 className="font-display text-4xl leading-none sm:text-6xl">Businesses rarely break in just one place.</h2></div>
      <div><p className="max-w-2xl text-lg leading-9 text-white/65">Information gets scattered. Operations become harder to explain. Customers receive inconsistent experiences. Old workflows survive because everyone has learned to work around them.</p><div className="mt-9 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10">{["Scattered information", "Confusing operations", "Inconsistent experiences", "Outdated workflows"].map((x, i) => <div key={x} className="bg-teal-dark/80 p-5 text-sm font-semibold text-white/70 sm:p-6"><span className="mr-3 text-gold-light">0{i + 1}</span>{x}</div>)}</div></div>
    </div></section>

    <section className="section-pad overflow-hidden"><div className="container-site relative text-center"><div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-3xl" /><Reveal className="relative mx-auto max-w-4xl"><p className="eyebrow before:hidden">The idea</p><h2 className="font-display text-5xl leading-[.92] sm:text-7xl lg:text-[5.5rem]">Clarity changes <span className="italic text-teal">everything.</span></h2><p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-charcoal/60">When the system becomes visible, the next decision gets easier. Teams move with more confidence. Customers feel the difference. Better ideas have room to emerge.</p></Reveal></div></section>

    <section className="section-pad border-y border-teal/[.08] bg-[#F2EEE5]"><div className="container-site"><SectionHeading eyebrow="What Lisa builds" title="Five kinds of clarity. Three consulting divisions." copy="The deliverable changes with the problem. The standard stays the same: a thoughtful system that makes real life easier to understand and navigate." />
      <Stagger className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">{claritySystems.map((item, i) => <Card key={item.title} className={`p-8 ${i < 3 ? "lg:col-span-2" : "lg:col-span-3"}`}><div className="flex items-center justify-between"><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-light text-teal"><item.icon className="h-6 w-6" /></span><span className="text-[10px] font-bold uppercase tracking-[.16em] text-gold">{item.division}</span></div><h3 className="mt-10 font-display text-3xl">{item.title}</h3><p className="mt-4 text-sm leading-7 text-charcoal/60">{item.copy}</p></Card>)}</Stagger>
      <div className="mt-12 flex justify-center"><Button href="/services" variant="outline">Explore all three divisions</Button></div>
    </div></section>

    <section className="section-pad overflow-hidden"><div className="container-site"><div className="relative overflow-hidden rounded-5xl bg-teal p-8 text-white shadow-soft sm:p-14 lg:p-20">
      <div className="absolute right-0 top-0 h-full w-1/2 opacity-20 noise-grid" /><div className="absolute -right-20 -top-24 h-80 w-80 rounded-full border-[60px] border-white/5" />
      <div className="relative grid gap-14 lg:grid-cols-[1.1fr_.9fr] lg:items-center"><div><p className="mb-5 text-[.68rem] font-extrabold uppercase tracking-[.23em] text-gold-light">Flagship system · AgentAirDirect</p><h2 className="font-display text-5xl leading-[.92] sm:text-7xl">Control How AI Describes Your Business.</h2><p className="mt-7 max-w-xl leading-8 text-white/70">AgentAirDirect is Lisa’s flagship AI clarity system. It reveals what AI systems understand about your business, what they miss, and which signals need to become clearer.</p><div className="mt-10 flex flex-wrap gap-3"><Button href="/agentairdirect" variant="secondary">Discover AgentAirDirect</Button><Button href="/contact?service=signal-audit" className="border-white/20 bg-white/10 text-white hover:bg-white/20">Request an audit</Button></div></div>
      <div className="grid gap-3 sm:grid-cols-2">{["See the current AI story", "Find missing trust signals", "Prioritize the right fixes", "Track clarity over time"].map((x, i) => <div key={x} className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm transition-colors hover:bg-white/15"><span className="text-xs font-bold text-gold-light">0{i + 1}</span><p className="mt-5 font-display text-xl">{x}</p></div>)}</div></div>
    </div></div></section>

    <section className="section-pad border-y border-teal/[.08] bg-white/50"><div className="container-site"><SectionHeading eyebrow="How Lisa works" title="Careful observation. Practical movement." copy="The process creates enough structure to find the pattern without forcing every problem into the same answer." align="center" /><Stagger className="mx-auto mt-16 grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-5">{process.map(([n, title, copy], i) => <div key={n} className="relative"><NumberBadge>{n}</NumberBadge>{i < 4 && <div className="absolute left-14 right-0 top-5 hidden h-px bg-teal/15 lg:block" />}<h3 className="mt-7 font-display text-2xl">{title}</h3><p className="mt-4 text-sm leading-7 text-charcoal/60">{copy}</p></div>)}</Stagger></div></section>

    <section className="section-pad"><div className="container-site"><SectionHeading eyebrow="Industries served" title="Built for businesses where the details matter." copy="Lisa works especially well where online information, daily operations, physical spaces, and human experience overlap." /><Stagger className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{industries.map(({ icon: Icon, title, copy }) => <Card key={title} className="p-8"><Icon className="h-7 w-7 text-teal" /><h3 className="mt-10 font-display text-2xl">{title}</h3><p className="mt-4 text-sm leading-7 text-charcoal/60">{copy}</p></Card>)}</Stagger><div className="mt-12 rounded-4xl bg-gold-light/40 p-8 sm:flex sm:items-center sm:justify-between sm:gap-10 sm:p-10"><div><SparklesIcon className="h-7 w-7 text-gold" /><p className="mt-5 font-display text-2xl">You may know something isn’t working before you have language for it.</p></div><p className="mt-5 max-w-lg text-sm leading-7 text-charcoal/60 sm:mt-0">That’s a perfectly good place to begin. You bring the lived experience. Lisa helps name the pattern and shape the solution.</p></div></div></section>

    <section className="section-pad bg-[#F2EEE5]"><div className="container-site"><div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end"><SectionHeading eyebrow="Featured projects" title="Ideas made practical." /><Link href="/portfolio" className="link-arrow">View all projects <ArrowRightIcon className="h-4 w-4" /></Link></div><Stagger className="mt-14 grid gap-5 md:grid-cols-3">{[
      ["AI clarity", "Signal Audit™", "A structured view of how AI interprets a business—and the signals that can make that picture more accurate."],
      ["Operations", "Restaurant inventory system", "A practical system designed around the actual pace, people, and realities of a working restaurant."],
      ["Product innovation", "Carrier → cart → car → bike", "One adaptable mobility concept built around the real routines of people with very small dogs."],
    ].map(([category, title, copy]) => <Card key={title} className="group p-8"><p className="text-[10px] font-bold uppercase tracking-[.18em] text-gold">{category}</p><h3 className="mt-9 font-display text-3xl">{title}</h3><p className="mt-5 text-sm leading-7 text-charcoal/60">{copy}</p><ArrowRightIcon className="mt-10 h-5 w-5 text-teal transition-transform group-hover:translate-x-1" /></Card>)}</Stagger></div></section>
    <FinalCTA />
  </>;
}
