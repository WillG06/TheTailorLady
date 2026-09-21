import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Instagram, MapPin, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { images, legalLinks, navItems } from "@/lib/site-content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  return <>
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8 md:pt-6">
      <div className="mx-auto flex max-w-7xl items-start justify-between">
        <Link to="/" aria-label="The Tailor Lady home" className="pointer-events-auto flex min-h-14 items-center border border-border/60 bg-background/92 px-5 shadow-lg backdrop-blur-xl md:min-h-16 md:px-7"><span className="font-display text-xl font-semibold md:text-2xl">The Tailor <em className="font-normal text-accent">Lady</em></span><span className="ml-5 hidden border-l border-border pl-5 text-[.62rem] font-semibold uppercase tracking-[.18em] text-muted-foreground sm:block">Birmingham<br/>Atelier</span></Link>
        <Button variant="pill" onClick={() => setOpen(true)} aria-expanded={open} aria-controls="site-menu" className="pointer-events-auto min-h-14 border-foreground/10 bg-ink px-5 text-primary-foreground shadow-lg hover:bg-accent md:min-h-16 md:px-7"><span className="text-[.62rem] uppercase tracking-[.18em]">Explore</span><Menu aria-hidden="true" /></Button>
      </div>
    </header>
    <AnimatePresence>
      {open && <motion.div id="site-menu" className="fixed inset-0 z-[60] bg-ink text-primary-foreground" role="dialog" aria-modal="true" aria-label="Site menu" initial={{ clipPath: "circle(0% at calc(100% - 64px) 48px)" }} animate={{ clipPath: "circle(150% at calc(100% - 64px) 48px)" }} exit={{ clipPath: "circle(0% at calc(100% - 64px) 48px)" }} transition={{ duration: .7, ease: [.76,0,.24,1] }}>
        <div className="page-wrap flex h-full flex-col py-6">
          <div className="flex items-center justify-between"><span className="font-display text-2xl">The Tailor <em className="text-accent">Lady</em></span><Button variant="ivory" size="icon" aria-label="Close menu" onClick={() => setOpen(false)} className="min-h-11 min-w-11 rounded-full"><X /></Button></div>
          <nav className="my-auto" aria-label="Main navigation"><ul className="space-y-1">{navItems.map(([label,to], i) => <motion.li key={to} initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .18 + i*.06 }}><Link to={to} className="group flex items-center justify-between border-b border-primary-foreground/15 py-3 font-display text-4xl md:text-6xl"><span>{label}</span><span className="text-sm opacity-0 transition-opacity group-hover:opacity-100">0{i+1}</span></Link></motion.li>)}</ul></nav>
          <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/55">Birmingham city centre · By appointment</p>
        </div>
      </motion.div>}
    </AnimatePresence>
  </>;
}

export function SiteFooter() {
  return <footer className="bg-ink text-primary-foreground">
    <div className="grid min-h-[68dvh] lg:grid-cols-2">
      <div className="relative min-h-[26rem] overflow-hidden"><img src={images.fabric} alt="Tailoring cloth and hand tools in The Tailor Lady atelier" width={1408} height={1008} loading="lazy" className="absolute inset-0 size-full object-cover opacity-75"/><div className="absolute inset-0 bg-process-image"/><p className="absolute bottom-6 left-6 text-[.65rem] uppercase tracking-[.2em] text-primary-foreground/70 md:bottom-10 md:left-10">A private atelier · Birmingham city centre</p></div>
      <div className="flex flex-col justify-between px-6 py-14 md:px-12 md:py-20 lg:px-16"><div><p className="text-[.68rem] font-semibold uppercase tracking-[.22em] text-accent">Your first fitting</p><h2 className="mt-6 max-w-xl font-display text-5xl leading-[.92] md:text-7xl">Begin with a conversation, <em className="text-accent">not a commitment.</em></h2><p className="mt-7 max-w-lg text-base leading-8 text-primary-foreground/65">Tell us about the garment, the occasion and how you want to feel. We will explain the most suitable route and arrange an unhurried appointment.</p><Button asChild variant="ivory" size="lg" className="mt-9"><Link to="/contact">Book a fitting <ArrowUpRight/></Link></Button></div><div className="mt-16 flex items-start gap-3 border-t border-primary-foreground/15 pt-6 text-sm text-primary-foreground/55"><MapPin className="mt-0.5 size-4 text-accent"/><p>Birmingham city centre<br/><span className="text-xs">Full atelier address to be confirmed</span></p></div></div>
    </div>
    <div className="px-5 pb-8 pt-16 md:px-10 md:pt-24"><div className="mx-auto max-w-7xl">
      <div className="grid gap-14 md:grid-cols-12"><div className="md:col-span-5"><p className="font-display text-4xl">The Tailor <em className="text-accent">Lady</em></p><p className="mt-5 max-w-sm text-sm leading-7 text-primary-foreground/55">Bespoke tailoring, made to measure and considered alterations, shaped around the person who will wear them.</p><a href="#" aria-label="Instagram profile placeholder" className="mt-7 inline-flex min-h-11 items-center gap-3 text-sm hover:text-accent"><Instagram/> Instagram</a></div>
        <nav aria-label="Footer navigation" className="md:col-span-3"><p className="mb-5 text-xs uppercase tracking-[.18em] text-primary-foreground/40">Explore</p><ul className="grid grid-cols-2 gap-x-5 gap-y-3 md:grid-cols-1">{navItems.map(([l,t])=><li key={t}><Link to={t} className="text-sm text-primary-foreground/70 hover:text-accent">{l}</Link></li>)}</ul></nav>
        <div className="md:col-span-4"><p className="mb-5 text-xs uppercase tracking-[.18em] text-primary-foreground/40">Atelier details</p><div className="space-y-3 text-sm leading-6 text-primary-foreground/70"><p>By appointment<br/>Tuesday–Saturday · hours to confirm</p><a href="mailto:hello@example.com" className="block hover:text-accent">hello@example.com</a><p className="text-xs text-primary-foreground/40">Contact details are placeholders until confirmed.</p></div></div>
      </div>
      <div className="mt-16 flex flex-col gap-5 border-t border-primary-foreground/10 pt-6 text-xs text-primary-foreground/40 md:flex-row md:items-center md:justify-between"><p>© 2026 The Tailor Lady. Template business details — replace before launch.</p><ul className="flex flex-wrap gap-5">{legalLinks.map(([l,t])=><li key={t}><Link to={t} className="hover:text-accent">{l}</Link></li>)}</ul></div>
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
