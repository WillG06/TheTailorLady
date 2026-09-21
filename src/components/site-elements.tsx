import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <p className={cn("text-[0.68rem] font-semibold uppercase tracking-[0.22em]", light ? "text-primary-foreground/70" : "text-accent")}>{children}</p>;
}

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 38 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: .75, ease: [.22, 1, .36, 1] }}>{children}</motion.div>;
}

export function PageHero({ eyebrow, title, intro, image, alt, align = "left" }: { eyebrow: string; title: string; intro: string; image: string; alt: string; align?: "left" | "center" }) {
  return <section className="relative min-h-[88dvh] overflow-hidden bg-ink text-primary-foreground">
    <motion.img src={image} alt={alt} className="absolute inset-0 size-full object-cover opacity-75" initial={{ scale: 1.04 }} animate={{ scale: 1 }} transition={{ duration: 1.5, ease: [.22,1,.36,1] }} width={1600} height={1104} />
    <div className="absolute inset-0 bg-hero-overlay" />
    <div className={cn("relative mx-auto flex min-h-[88dvh] max-w-7xl flex-col justify-end px-5 pb-20 pt-40 md:px-10 md:pb-24", align === "center" && "items-center text-center")}>
      <Eyebrow light>{eyebrow}</Eyebrow><h1 className="mt-5 max-w-5xl font-display text-5xl leading-[.92] md:text-7xl lg:text-[6.5rem]">{title}</h1>
      <p className="mt-6 max-w-2xl border-l border-accent pl-5 text-base leading-7 text-primary-foreground/80 md:text-lg">{intro}</p>
    </div>
  </section>;
}

export function BookingCta({ dark = false }: { dark?: boolean }) {
  return <Button asChild variant={dark ? "ivory" : "editorial"} size="lg"><Link to="/contact">Book a fitting <ArrowUpRight aria-hidden="true" /></Link></Button>;
}

export function SectionHeading({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return <Reveal className="max-w-3xl"><Eyebrow>{eyebrow}</Eyebrow><h2 className="mt-4 font-display text-4xl leading-tight md:text-6xl">{title}</h2>{body && <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">{body}</p>}</Reveal>;
}

export function PageIntro({ children }: { children: ReactNode }) { return <div className="page-wrap py-20 md:py-28">{children}</div>; }
