import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Instagram, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { businessDetails, images, legalLinks, navItems } from "@/lib/site-content";

export function SiteFooter() {
  return <footer className="bg-ink text-primary-foreground">
    <div className="grid min-h-[68dvh] lg:grid-cols-2">
      <div className="relative min-h-[26rem] overflow-hidden"><img src={images.fabric} alt="Tailoring cloth and hand tools in The Tailor Lady atelier" width={1408} height={1008} loading="lazy" className="absolute inset-0 size-full object-cover opacity-75"/><div className="absolute inset-0 bg-process-image"/><p className="absolute bottom-6 left-6 text-[1rem] uppercase tracking-[.2em] text-primary-foreground/70 md:bottom-10 md:left-10">A private atelier · Birmingham city centre</p></div>
      <div className="flex flex-col justify-between px-6 py-14 md:px-12 md:py-20 lg:px-16"><div><p className="text-[1rem] font-semibold uppercase tracking-[.22em] text-accent">Your bridal fitting</p><h2 className="mt-6 max-w-xl font-display text-5xl leading-[.92] md:text-7xl">Bring the dress. <em className="text-accent">We’ll perfect the fit.</em></h2><p className="mt-7 max-w-lg text-base leading-8 text-primary-foreground/65">Tell us about your wedding dress, bridesmaid dress or alteration. We will advise on the work required and arrange an unhurried fitting.</p><Button asChild variant="ivory" size="lg" className="mt-9"><Link to="/contact">Book a fitting <ArrowUpRight/></Link></Button></div><div className="mt-16 flex items-start gap-3 border-t border-primary-foreground/15 pt-6 text-sm text-primary-foreground/55"><MapPin className="mt-0.5 size-4 text-accent"/><p>{businessDetails.location}<br/><span className="text-sm">Full atelier address to be confirmed</span></p></div></div>
    </div>
    <div className="px-5 pb-8 pt-16 md:px-10 md:pt-24"><div className="mx-auto max-w-7xl">
      <div className="grid gap-14 md:grid-cols-12"><div className="md:col-span-5"><p className="font-display text-4xl">The Tailor <em className="text-accent">Lady</em></p><p className="mt-5 max-w-sm text-sm leading-7 text-primary-foreground/55">Bespoke tailoring, made to measure and considered alterations, shaped around the person who will wear them.</p><a href="#" aria-label="Instagram profile placeholder" className="mt-7 inline-flex min-h-11 items-center gap-3 text-sm hover:text-accent"><Instagram/> Instagram</a></div>
        <nav aria-label="Footer navigation" className="md:col-span-3"><p className="mb-5 text-xs uppercase tracking-[.18em] text-primary-foreground/40">Explore</p><ul className="grid grid-cols-2 gap-x-5 gap-y-3 md:grid-cols-1">{navItems.map(([l,t])=><li key={t}><Link to={t} className="text-sm text-primary-foreground/70 hover:text-accent">{l}</Link></li>)}</ul></nav>
        <div className="md:col-span-4"><p className="mb-5 text-xs uppercase tracking-[.18em] text-primary-foreground/40">Atelier details</p><div className="space-y-3 text-sm leading-6 text-primary-foreground/70"><p>{businessDetails.hours.map(([day,hours])=><span key={day} className="block">{day} · {hours}</span>)}</p><a href={businessDetails.phoneHref} className="block hover:text-accent">{businessDetails.phoneDisplay}</a><a href={businessDetails.whatsappHref} target="_blank" rel="noreferrer" className="block hover:text-accent">WhatsApp</a><p className="text-xs text-primary-foreground/40">Full address and email to be confirmed.</p></div></div>
      </div>
      <div className="mt-16 flex flex-col gap-5 border-t border-primary-foreground/10 pt-6 text-xs text-primary-foreground/40 md:flex-row md:items-center md:justify-between"><p>© 2026 The Tailor Lady. Birmingham city centre.</p><ul className="flex flex-wrap gap-5">{legalLinks.map(([l,t])=><li key={t}><Link to={t} className="hover:text-accent">{l}</Link></li>)}</ul></div>
    </div></div>
  </footer>;
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false); const [manage, setManage] = useState(false); const [analytics, setAnalytics] = useState(false);
  useEffect(() => { setVisible(!localStorage.getItem("ttl-cookie-choice")); }, []);
  const save = (choice: string) => { localStorage.setItem("ttl-cookie-choice", choice); setVisible(false); };
  if (!visible) return null;
  return <div className="fixed bottom-4 left-4 right-4 z-[70] mx-auto max-w-2xl border border-border bg-background p-5 shadow-xl" role="dialog" aria-label="Cookie preferences">
    <div className="flex items-start justify-between gap-5"><div><p className="font-display text-2xl">Your privacy, tailored.</p><p className="mt-2 text-sm leading-6 text-muted-foreground">Essential cookies keep the site working. Analytics will remain off unless you choose it.</p></div></div>
    {manage && <label className="mt-4 flex min-h-11 items-center justify-between border-y border-border py-3 text-sm">Allow analytics<input type="checkbox" checked={analytics} onChange={e=>setAnalytics(e.target.checked)} className="size-5 accent-[var(--accent)]" /></label>}
    <div className="mt-4 flex flex-wrap gap-2"><Button variant="editorial" onClick={()=>save(analytics ? "custom-analytics" : "accepted")}>{manage ? "Save preferences" : "Accept"}</Button><Button variant="outline" onClick={()=>save("rejected")}>Reject</Button>{!manage && <Button variant="ghost" onClick={()=>setManage(true)}>Manage</Button>}</div>
  </div>;
}
