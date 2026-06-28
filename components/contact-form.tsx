"use client";

import { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

const field = "w-full rounded-2xl border border-teal/10 bg-ivory/50 px-4 py-4 text-sm text-charcoal placeholder:text-charcoal/30 shadow-sm transition-all duration-300 hover:border-teal/25 hover:bg-white focus:border-teal/40 focus:bg-white focus:outline-none focus:ring-4 focus:ring-teal/[.06]";

export default function ContactForm(){
  const [sent,setSent]=useState(false);
  if(sent) return <div aria-live="polite" className="flex min-h-[520px] flex-col items-center justify-center rounded-4xl border border-teal/10 bg-white p-8 text-center shadow-card"><span className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-light text-teal"><CheckCircleIcon className="h-9 w-9"/></span><h2 className="mt-7 font-display text-4xl">Your note is ready.</h2><p className="mt-4 max-w-md leading-7 text-charcoal/65">This demonstration form is working on the front end. Connect it to your preferred email or form service before launch to receive submissions.</p><button className="mt-7 text-sm font-bold text-teal underline underline-offset-4" onClick={()=>setSent(false)}>Send another note</button></div>;
  return <form onSubmit={e=>{e.preventDefault();setSent(true)}} className="rounded-5xl border border-teal/[.08] bg-white p-6 shadow-soft sm:p-10 lg:p-12"><div className="grid gap-6 sm:grid-cols-2">
    <label className="text-sm font-bold">Name <span className="text-gold">*</span><input className={`${field} mt-2`} name="name" autoComplete="name" required placeholder="Your name"/></label>
    <label className="text-sm font-bold">Business name<input className={`${field} mt-2`} name="business" autoComplete="organization" placeholder="Your business"/></label>
    <label className="text-sm font-bold">Phone<input className={`${field} mt-2`} name="phone" type="tel" autoComplete="tel" placeholder="(555) 000-0000"/></label>
    <label className="text-sm font-bold">Email <span className="text-gold">*</span><input className={`${field} mt-2`} name="email" type="email" autoComplete="email" required placeholder="you@example.com"/></label>
    <label className="text-sm font-bold sm:col-span-2">What do you need help with? <span className="text-gold">*</span><select className={`${field} mt-2`} name="service" required defaultValue=""><option value="" disabled>Select the closest fit</option><option>Signal Audit™ / AI clarity</option><option>Operational systems & workflows</option><option>Documentation or customer experience</option><option>Product or environment innovation</option><option>Partnership or licensing</option><option>I’m not sure yet</option></select></label>
    <fieldset className="sm:col-span-2"><legend className="text-sm font-bold">Preferred contact method</legend><div className="mt-3 flex flex-wrap gap-3">{["Email","Phone","Text message"].map((x,i)=><label key={x} className="flex cursor-pointer items-center gap-2 rounded-full border border-teal/15 bg-ivory px-4 py-2.5 text-sm font-semibold text-charcoal/65"><input type="radio" name="contact-method" value={x} defaultChecked={i===0} className="accent-teal"/>{x}</label>)}</div></fieldset>
    <label className="text-sm font-bold sm:col-span-2">Tell me what’s happening<textarea className={`${field} mt-2 min-h-36 resize-y`} name="message" required placeholder="You don’t need the perfect words. What feels unclear, difficult, or ready to work better?"/></label>
  </div><button type="submit" className="mt-6 w-full rounded-full bg-teal px-6 py-4 text-sm font-bold text-white shadow-lg shadow-teal/15 transition-all hover:-translate-y-0.5 hover:bg-teal-dark">Send inquiry</button><p className="mt-4 text-center text-xs leading-5 text-charcoal/45">Your information will only be used to respond to your inquiry.</p></form>
}
