import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";
import gal2 from "@/assets/gal2.webp";
import { Button } from "@/components/ui/button";
import {
  BookingCta,
  Eyebrow,
  Reveal,
  SectionHeading,
} from "@/components/site-elements";
import { images } from "@/lib/site-content";
import { canonicalUrl } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Your Bespoke Tailor Birmingham | The Tailor Lady" },
      {
        name: "description",
        content:
          "Discover the craft philosophy behind The Tailor Lady, a modern bespoke tailor in Birmingham city centre.",
      },
      {
        property: "og:title",
        content: "About The Tailor Lady | Birmingham Bespoke Tailoring",
      },
      {
        property: "og:description",
        content:
          "A modern atelier built on proportion, personal expression and enduring craft.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: canonicalUrl("/about") }],
  }),
  component: About,
});

const HERO_START_WIDTH = "95%";
const HERO_START_HEIGHT = "85%";

// PLACEHOLDER COPY — replace with the atelier's real process.
const processSteps = [
  {
    title: "Consultation",
    copy: "A private conversation about the occasion, how you want to feel in the garment, and what you already own and love.",
  },
  {
    title: "Measure & pattern",
    copy: "Precise measurements and a pattern drafted for your proportions, not adjusted from a standard size.",
  },
  {
    title: "Cloth & detail",
    copy: "Cloth, lining and finishing chosen together, in daylight, with time to look and touch.",
  },
  {
    title: "Fittings",
    copy: "Considered fittings to refine balance, line and movement before anything is finished.",
  },
  {
    title: "Finishing & collection",
    copy: "Hand finishing, a final fitting, and a garment that is ready to be worn.",
  },
];

function About() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroWidth = useTransform(
    scrollYProgress,
    [0, 0.31],
    [HERO_START_WIDTH, "100%"],
  );
  const heroHeight = useTransform(
    scrollYProgress,
    [0, 0.31],
    [HERO_START_HEIGHT, "100%"],
  );

  return (
    <>
      <section ref={heroRef} className="relative h-[145dvh] bg-background">
        <div className="sticky top-16 h-[calc(100dvh-4rem)] md:top-[72px] md:h-[calc(100dvh-72px)]">
          <motion.div
            style={{ width: heroWidth, height: heroHeight }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden bg-ink text-primary-foreground"
          >
            <motion.img
              src={images.scissors}
              alt="Tailoring scissors and cloth in the atelier"
              className="absolute inset-0 size-full object-cover"
              width={960}
              height={1200}
              initial={{ scale: 1.06 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.8 }}
            />
            <div className="absolute inset-0 bg-hero-overlay" />
            <div className="relative size-full">
              <h1 className="absolute bottom-7 left-5 z-10 font-display text-4xl leading-none md:bottom-9 md:left-[7.5rem] md:text-6xl">
                About
              </h1>
              <ArrowDown
                className="absolute bottom-5 right-5 animate-bounce md:bottom-7 md:right-8"
                aria-hidden="true"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <div className="bg-background">
        {/* Story */}
        <section className="relative px-5 py-20 md:px-10 md:py-28">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-1 z-10 h-0.5 bg-[#c21869]"
          />
          <div className="mx-auto grid max-w-screen-2xl gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="lg:col-span-3">
              <Eyebrow>Our story</Eyebrow>
              <div className="mt-8 size-48 overflow-hidden rounded-full border border-border bg-secondary md:size-56">
                <img
                  src={gal2}
                  alt="Portrait for The Tailor Lady founder"
                  width={256}
                  height={256}
                  loading="lazy"
                  className="size-full object-cover object-top"
                />
              </div>
            </div>
            <div className="lg:col-span-9">
              <h2 className="font-display text-4xl leading-[1] md:text-6xl">
                Clothes should hold your shape and story.
              </h2>
              <div className="mt-7 grid gap-6 text-base leading-7 text-muted-foreground md:mt-10 md:grid-cols-[1.1fr_0.9fr] md:gap-10 md:text-lg md:leading-8">
                <p>
                  A view of the Founders story: Mahi. Mahi is a bespoke tailor with a passion for creating garments that are not only beautiful but also deeply personal. With years of experience in the industry, Mahi has honed her craft to ensure that every piece she creates is a true reflection of the individual wearing it.
                </p>
                <blockquote>
                  <p className="font-display text-2xl leading-snug text-foreground md:text-3xl">
                    “I want everyone who visits to feel listened to. Together,
                    we’ll find the right fit and finish to make a garment feel
                    truly theirs.”
                  </p>
                  <cite className="mt-4 block text-sm not-italic text-muted-foreground">
                    Mahi, owner
                  </cite>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Process — dark, hairline-ruled, numbered. The heading column pins
            on desktop while the steps scroll past it. No ancestor has
            overflow set, which would break the sticky. */}
        <section className="bg-ink px-5 py-24 text-primary-foreground md:px-10 md:py-36">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
              <Eyebrow light>The process</Eyebrow>
              <h2 className="mt-5 font-display text-4xl leading-[1] md:text-6xl">
                From first conversation to final fitting.
              </h2>
              <p className="mt-6 max-w-sm leading-7 text-primary-foreground/70">
                Every commission moves at the pace the garment needs, never
                faster.
              </p>
            </div>

            <ol className="lg:col-span-8">
              {processSteps.map((step, i) => (
                <li
                  key={step.title}
                  className="border-t border-primary-foreground/15 last:border-b"
                >
                  <Reveal>
                    <div className="grid grid-cols-[2.5rem_1fr] gap-x-4 py-8 md:grid-cols-[4rem_1fr_1fr] md:gap-x-8 md:py-12">
                      <span className="pt-2 text-xs tracking-[.18em] text-primary-foreground/50">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-display text-3xl leading-none md:text-4xl">
                        {step.title}
                      </h3>
                      <p className="col-start-2 mt-3 leading-7 text-primary-foreground/70 md:col-start-3 md:row-start-1 md:mt-1">
                        {step.copy}
                      </p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* The room */}
        <section className="px-5 py-24 md:px-10 md:py-36">
          <div className="grid w-full gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink sm:aspect-[4/3] lg:aspect-[3/2]">
                <img
                  src={images.mirror}
                  alt="Hand-finished camel cloth and silk lining in the atelier"
                  width={1408}
                  height={1008}
                  loading="lazy"
                  className="size-full object-cover object-bottom"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink/60 to-transparent"
                />
                <div className="absolute bottom-4 left-4 z-10 text-left">
                  <Eyebrow light>The room</Eyebrow>
                </div>
              </div>
            </div>
            <div className="text-center lg:flex lg:flex-col lg:justify-center">
              <SectionHeading
                eyebrow="The room"
                title="An atelier for looking, touching and deciding slowly."
                body="Appointments are private and personal. Explore cloth, discuss the occasion and leave with a clear direction."
              />
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <BookingCta />
                <Button asChild variant="outline">
                  <Link to="/contact">Visit the atelier</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="border-y border-border py-8 text-center text-xs uppercase tracking-[.22em] text-muted-foreground">
          Press mentions to be added when confirmed
        </section> */}
      </div>
    </>
  );
}