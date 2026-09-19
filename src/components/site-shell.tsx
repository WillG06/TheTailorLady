import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Instagram, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { legalLinks, navItems } from "@/lib/site-content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  return <>
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8 md:pt-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-border/60 bg-background/90 px-5 py-2.5 shadow-sm backdrop-blur-xl">
        <Link to="/" aria-label="The Tailor Lady home" className="font-display text-xl font-semibold md:text-2xl">The Tailor <em className="font-normal text-accent">Lady</em></Link>
        <Button variant="pill" onClick={() => setOpen(true)} aria-expanded={open} aria-controls="site-menu"><Menu aria-hidden="true" /> Menu</Button>
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
  return <footer className="bg-ink px-5 pb-8 pt-20 text-primary-foreground md:px-10 md:pt-28">
    <div className="mx-auto max-w-7xl"><p className="font-display text-5xl leading-none md:text-8xl">Clothes that feel<br/><em className="text-accent">entirely yours.</em></p>
      <div className="mt-16 grid gap-10 border-t border-primary-foreground/20 pt-10 md:grid-cols-[1.5fr_1fr_1fr]">
        <div><p className="font-display text-2xl">The Tailor Lady</p><p className="mt-3 max-w-xs text-sm leading-6 text-primary-foreground/60">Bespoke tailoring, made to measure and considered alterations in Birmingham city centre.</p></div>
        <nav aria-label="Footer navigation"><p className="mb-3 text-xs uppercase tracking-[.18em] text-primary-foreground/50">Explore</p><ul className="space-y-2">{navItems.map(([l,t])=><li key={t}><Link to={t} className="text-sm hover:text-accent">{l}</Link></li>)}</ul></nav>
        <div><p className="mb-3 text-xs uppercase tracking-[.18em] text-primary-foreground/50">Legal & social</p><ul className="space-y-2">{legalLinks.map(([l,t])=><li key={t}><Link to={t} className="text-sm hover:text-accent">{l}</Link></li>)}</ul><a href="#" aria-label="Instagram profile placeholder" className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm"><Instagram/> Instagram</a></div>
      </div><p className="mt-14 border-t border-primary-foreground/10 pt-6 text-xs text-primary-foreground/45">© 2026 The Tailor Lady. Template business details — replace before launch.</p>
    </div>
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
