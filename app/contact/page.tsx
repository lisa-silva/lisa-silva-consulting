import type { Metadata } from "next";
import { ChatBubbleLeftRightIcon, ClockIcon, LightBulbIcon } from "@heroicons/react/24/outline";
import ContactForm from "@/components/contact-form";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = { title: "Contact", description: "Contact Lisa Silva Consulting to discuss a Signal Audit, operational challenge, product concept, or clarity project." };

export default function ContactPage(){return <>
  <PageHeader eyebrow="Start a conversation" title="Let’s make things clearer." copy="You don’t need to diagnose the problem before you reach out. Tell me what’s happening, what feels stuck, or what you wish worked differently."/>
  <section className="section-pad"><div className="container-site grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:items-start"><div className="lg:sticky lg:top-32"><p className="eyebrow">What happens next</p><h2 className="font-display text-4xl sm:text-5xl">A thoughtful first step, without the sales theater.</h2><p className="mt-5 leading-8 text-charcoal/65">I’ll read your note carefully, consider what kind of clarity the situation needs, and respond with a useful next step.</p><div className="mt-9 space-y-4">{[
    [ChatBubbleLeftRightIcon,"A human response","Your inquiry goes to Lisa—not a scripted sales funnel."],
    [ClockIcon,"A focused conversation","We’ll use the first call to understand the problem and test the fit."],
    [LightBulbIcon,"A practical direction","You’ll leave knowing what kind of engagement makes sense, if any."],
  ].map(([Icon,t,c])=>{const I=Icon as typeof ClockIcon;return <div key={t as string} className="flex gap-4"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-teal-light text-teal"><I className="h-5 w-5"/></span><div><h3 className="font-bold">{t as string}</h3><p className="mt-1 text-sm leading-6 text-charcoal/60">{c as string}</p></div></div>})}</div><div className="mt-10 rounded-3xl bg-gold-light/45 p-6"><p className="font-display text-2xl">Not sure which service fits?</p><p className="mt-3 text-sm leading-6 text-charcoal/65">Choose “I’m not sure yet.” Naming the right shape of the problem is part of my work.</p></div></div><ContactForm/></div></section>
  </>}
