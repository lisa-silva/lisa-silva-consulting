import type { Metadata } from "next";
import { CpuChipIcon, LightBulbIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
import { Button, FinalCTA, PageHero, SectionHeading } from "@/components/ui";

export const metadata: Metadata = { title: "Portfolio", description: "Explore selected AI clarity, operational systems, and product innovation work by Lisa Silva." };

const groups = [
  { title:"AI Clarity Projects", eyebrow:"Make the invisible interpretable", icon:CpuChipIcon, projects:[
    ["AgentAirDirect","A business intelligence platform created to help companies understand and improve how AI systems describe them.","Flagship platform"],
    ["Signal Audit™","A repeatable diagnostic system that compares AI answers, traces signal gaps, and turns findings into prioritized action.","Audit framework"],
    ["Schema Intelligence","A structured approach to making key business facts more legible, connected, and trustworthy to machines.","Information system"],
    ["Persona Engine","A way to test business visibility through the different questions, priorities, and language of real customer types.","Customer intelligence"],
  ]},
  { title:"Operational Projects", eyebrow:"Make the work make sense", icon:WrenchScrewdriverIcon, projects:[
    ["Giorgio’s restaurant inventory system","An inventory concept shaped around the speed, variability, and accountability needs of a working restaurant.","Restaurant operations"],
    ["Apartment office automation concepts","Practical ways to reduce repetitive communication, missed handoffs, and administrative friction for property teams.","Office systems"],
    ["Chatbot automation","Conversation flows designed to answer routine questions clearly while preserving an easy path to human help.","Customer support"],
    ["Workflow redesigns","Clearer sequences, roles, documentation, and decision points for everyday work that had become needlessly difficult.","Process design"],
  ]},
  { title:"Product Innovation", eyebrow:"Invent what real life is missing", icon:LightBulbIcon, projects:[
    ["Teacup Chihuahua bunk beds","Space-conscious rest and enrichment designed for the scale, warmth, and behavior of very small dogs.","Pet lifestyle"],
    ["Teacup bathtub + spa accessories","A safer, more ergonomic bathing ecosystem for tiny dogs and the people caring for them.","Pet care"],
    ["Carrier → cart → car → bike system","An adaptable carrier concept that moves with a person across errands, driving, cycling, and walking.","Mobility system"],
    ["Foldable shopping cart","A practical cart concept focused on compact living, easier storage, and smoother everyday transport.","Urban utility"],
    ["Bubble umbrella","A protective form rethought for better coverage, visibility, and movement through real weather.","Everyday product"],
    ["Apartment kennel architecture","Pet-safe space integrated into apartment design instead of added as a bulky afterthought.","Built environment"],
    ["Teacup dog park concept","A scaled environment for the safety, social behavior, and enrichment needs of the smallest dogs.","Community space"],
  ]},
] as const;

export default function PortfolioPage(){return <>
  <PageHero eyebrow="Selected work" title="Ideas made practical." copy="My portfolio moves across AI, operations, products, and environments. The connecting thread is a real problem, observed closely, and a solution designed around how people actually live and work."><Button href="/contact">Discuss a project</Button></PageHero>
  <section className="py-8 border-b border-teal/10 bg-white/55"><div className="container-site flex flex-wrap gap-2">{groups.map((g,i)=><a key={g.title} href={`#category-${i+1}`} className="rounded-full border border-teal/15 bg-ivory px-4 py-2 text-xs font-bold text-teal transition-colors hover:bg-teal hover:text-white">{g.title}</a>)}</div></section>
  {groups.map((group, gi)=><section id={`category-${gi+1}`} key={group.title} className={`section-pad scroll-mt-24 ${gi%2===1?"border-y border-teal/10 bg-[#F2EEE5]":""}`}><div className="container-site"><div className="grid gap-8 lg:grid-cols-[.65fr_1.35fr]"><div><group.icon className="h-8 w-8 text-teal"/><p className="eyebrow mt-8">{group.eyebrow}</p><h2 className="font-display text-4xl sm:text-5xl">{group.title}</h2></div><div className="grid gap-4 sm:grid-cols-2">{group.projects.map(([title,copy,label],i)=><article key={title} className={`group rounded-3xl border border-teal/10 p-7 shadow-card transition-transform hover:-translate-y-1 ${gi===1?"bg-white/85":"bg-white/70"}`}><div className="flex items-center justify-between"><span className="rounded-full bg-teal-light px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.12em] text-teal">{label}</span><span className="font-display text-xl text-gold">0{i+1}</span></div><h3 className="mt-8 font-display text-2xl leading-tight">{title}</h3><p className="mt-4 text-sm leading-7 text-charcoal/65">{copy}</p></article>)}</div></div></div></section>)}
  <section className="pb-6"><div className="container-site"><div className="rounded-4xl bg-gold-light/45 p-8 sm:p-12"><SectionHeading eyebrow="A note on innovation" title="Some work begins before there is a category for it." copy="These concepts are not exercises in novelty. Each starts with an overlooked user, a repeated frustration, or a physical environment that could serve people and animals more thoughtfully. Selected concepts are available for prototype development, licensing, manufacturing, and retail partnership."/><Button href="/contact" variant="outline" className="mt-8">Explore a partnership</Button></div></div></section>
  <FinalCTA title="Have a problem worth solving?" copy="Tell me what people are working around, putting up with, or wishing existed. That observation may be the beginning of the next useful system."/>
  </>}
