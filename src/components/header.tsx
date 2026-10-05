import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/site-elements";
import { images, navItems } from "@/lib/site-content";

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
        className="fixed inset-0 z-[60] overflow-hidden bg-ink/100 text-primary-foreground"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        initial={{ clipPath: "circle(0% at 150% 50%)" }}
        animate={{ clipPath: "circle(170% at 150% 50%)" }}
        exit={{ clipPath: "circle(0% at 150% 50%)" }}
        transition={{ duration: .8, ease: [.22, 1, .36, 1] }}
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute inset-y-0 left-[-18vw] w-[60vw] -skew-x-[18deg] bg-black/20 backdrop-blur-[2px]" />
          <div className="absolute inset-y-0 left-[-14vw] w-[48vw] skew-x-[8deg] bg-ink/30" />
        </div>
        <div className="page-wrap relative z-10 flex min-h-dvh flex-col py-5 md:py-7 lg:pl-[15vw]">
          <div className="relative flex items-center justify-end border-b border-primary-foreground/15 pb-5 md:pb-6">
            <Button variant="ivory" size="icon" aria-label="Close menu" onClick={() => setOpen(false)} className="min-h-11 min-w-11 rounded-full">
              <X />
            </Button>
          </div>

          <div className="grid flex-1 items-stretch gap-10 py-8 md:py-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-10 lg:py-10">
            <nav aria-label="Main navigation" className="flex min-h-full flex-col items-center justify-center text-center lg:items-start lg:text-left">
              <Eyebrow light>Explore</Eyebrow>
              <ul className="mt-3 flex w-full flex-1 flex-col justify-center gap-1 sm:mt-4 sm:border-t sm:border-primary-foreground/15 lg:w-[28rem]">
                {navItems.map(([label, to], index) => <motion.li
                  key={to}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: .18 + index * .06 }}
                  className="w-full"
                >
                  <Link to={to} className="group flex w-full items-center justify-center gap-2 border-b border-primary-foreground/15 py-3 text-center sm:py-4 lg:justify-start lg:text-left">
                    <span className="font-display text-2xl leading-tight transition-colors group-hover:text-accent sm:text-4xl sm:leading-none lg:text-5xl">{label}</span>
                    <ArrowUpRight className="hidden size-4 text-accent opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 sm:block" aria-hidden="true" />
                  </Link>
                </motion.li>)}
              </ul>
              <div className="mt-auto pt-8 sm:hidden">
                <div className="relative aspect-[2.2/1] overflow-hidden bg-secondary">
                  <img
                    src={images.bowBack}
                    alt="A tailor fitting the back of a wedding dress"
                    width={900}
                    height={1200}
                    className="absolute inset-0 size-full object-cover object-[center_52%]"
                  />
                </div>
              </div>
            </nav>

            <div className="relative mx-auto hidden aspect-[3/4] w-full max-w-[520px] overflow-hidden bg-secondary lg:block lg:justify-self-end">
              <img
                src={images.bowBack}
                alt="A tailor fitting the back of a wedding dress"
                width={900}
                height={1200}
                className="absolute inset-0 size-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />
              <div className="absolute inset-x-6 bottom-6 text-center">
                <Eyebrow light>Birmingham atelier</Eyebrow>
                <p className="mt-3 max-w-sm font-display text-4xl leading-none text-primary-foreground xl:text-5xl">
                  Made to be yours.
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-10 flex flex-col items-center gap-4 border-t border-primary-foreground/15 pt-5 text-center md:pt-6">
            <p className="text-xs uppercase tracking-[.16em] text-primary-foreground/55">Wedding dress alterations · Birmingham city centre</p>
            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 border border-primary-foreground/50 px-5 text-xs font-medium uppercase tracking-[.14em] transition-colors hover:border-accent hover:text-accent"
            >
              Book an appointment <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </motion.div>}
    </AnimatePresence>
  </>;
}