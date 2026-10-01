import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { navItems } from "@/lib/site-content";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cursorInRevealZone, setCursorInRevealZone] = useState(true);
  const [atPageEnd, setAtPageEnd] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const headerHidden = scrolled && !cursorInRevealZone && !atPageEnd && !open;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      setAtPageEnd(
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8,
      );
    };
    const onMouseMove = (event: MouseEvent) => {
      const inRevealZone = event.clientY <= window.innerHeight * 0.4;
      setCursorInRevealZone((previous) =>
        previous === inRevealZone ? previous : inRevealZone,
      );
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => setOpen(false), [pathname]);

  return <>
    <header className={`fixed inset-x-0 top-0 z-50 h-[72px] bg-background text-foreground transition-transform duration-700 ease-in-out md:h-[88px] ${headerHidden ? "lg:pointer-events-none lg:-translate-y-full" : "translate-y-0"}`}>
      <div className="grid h-full grid-cols-[1fr_auto_1fr] items-center pl-5 pr-[2.5vw] md:pl-8">
        <Button
          variant="pill"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="site-menu"
          className="size-12 justify-self-start border-0 bg-transparent p-0 text-foreground shadow-none hover:bg-transparent hover:text-accent [&_svg]:size-6"
        >
          <Menu aria-hidden="true" />
        </Button>
        <Link
          to="/"
          className="justify-self-center whitespace-nowrap font-sans text-xs font-semibold uppercase tracking-[.16em] md:text-sm"
          aria-label="The Tailor Lady home"
        >
          The Tailor Lady
        </Link>
        <Link
          to="/contact"
          className="hidden justify-self-end border-b border-foreground pb-1 text-[1rem] font-medium uppercase tracking-[.08em] transition-colors hover:border-accent hover:text-accent sm:inline-flex sm:text-sm"
        >
          Book an appointment
        </Link>
      </div>
    </header>
    <AnimatePresence>
      {open && <motion.div
        id="site-menu"
        className="fixed inset-0 z-[60] bg-ink text-primary-foreground"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        initial={{ clipPath: "circle(0% at 40px 32px)" }}
        animate={{ clipPath: "circle(150% at 40px 32px)" }}
        exit={{ clipPath: "circle(0% at 40px 32px)" }}
        transition={{ duration: .7, ease: [.76, 0, .24, 1] }}
      >
        <div className="page-wrap flex h-full flex-col py-6">
          <div className="flex items-center justify-between">
            <span className="font-display text-2xl">The Tailor <em className="text-accent">Lady</em></span>
            <Button variant="ivory" size="icon" aria-label="Close menu" onClick={() => setOpen(false)} className="min-h-11 min-w-11 rounded-full">
              <X />
            </Button>
          </div>
          <nav className="my-auto" aria-label="Main navigation">
            <ul className="space-y-1">
              {navItems.map(([label, to], index) => <motion.li
                key={to}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: .18 + index * .06 }}
              >
                <Link to={to} className="group flex items-center justify-between border-b border-primary-foreground/15 py-3 font-display text-4xl md:text-6xl">
                  <span>{label}</span>
                  <span className="text-sm opacity-0 transition-opacity group-hover:opacity-100">0{index + 1}</span>
                </Link>
              </motion.li>)}
            </ul>
          </nav>
          <Link
            to="/contact"
            className="mb-8 inline-flex min-h-12 items-center justify-center border border-primary-foreground/50 px-5 text-xs font-medium uppercase tracking-[.14em] transition-colors hover:border-accent hover:text-accent sm:hidden"
          >
            Book an appointment
          </Link>
          <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/55">Wedding dress alterations · Birmingham city centre</p>
        </div>
      </motion.div>}
    </AnimatePresence>
  </>;
}