import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import { HomePreloader } from "@/components/home-preloader";
import {
  BookingCta,
  Eyebrow,
  Reveal,
  SectionHeading,
} from "@/components/site-elements";
import { Button } from "@/components/ui/button";
import { images, services } from "@/lib/site-content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wedding Dress Alterations Birmingham | The Tailor Lady" },
      {
        name: "description",
        content:
          "Wedding dress and bridesmaid dress alterations in Birmingham city centre, alongside clothing alterations, tailoring and dry cleaning.",
      },
      {
        property: "og:title",
        content: "Wedding Dress Alterations Birmingham | The Tailor Lady",
      },
      {
        property: "og:description",
        content:
          "Expert bridal, bridesmaid and clothing alterations in Birmingham city centre.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preload", as: "image", href: images.hero, fetchPriority: "high" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["LocalBusiness", "ProfessionalService", "ClothingStore"],
          name: "The Tailor Lady",
          description:
            "Wedding dress, bridesmaid dress and clothing alterations in Birmingham city centre.",
          telephone: "+447342477032",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Birmingham",
            addressCountry: "GB",
          },
          areaServed: "Birmingham",
          priceRange: "££",
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
              ],
              opens: "10:00",
              closes: "18:30",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Saturday",
              opens: "10:00",
              closes: "17:00",
            },
          ],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Alteration services",
            itemListElement: [
              "Wedding dress alterations",
              "Bridesmaid dress alterations",
              "General clothing alterations",
              "Tailoring",
              "Dry cleaning",
            ],
          },
        }),
      },
    ],
  }),
  component: Home,
});

// NOTE: swap these image keys / routes for whatever actually exists in
// site-content.ts and your router. I reused images.wedding / images.hero
// as placeholders since I don't have your full images object or route
// tree — ideally each card gets its own dedicated shot (e.g. images.work,
// images.contact).
const exploreLinks = [
  {
    title: "Our work",
    note: "Finished alterations and bridal transformations",
    cta: "Take a look",
    to: "/gallery",
    image: images.wedding,
  },
  {
    title: "Alterations",
    note: "Services, turnaround times and pricing",
    cta: "View services",
    to: "/alterations",
    image: images.hero,
  },
  {
    title: "Get in touch",
    note: "Book a fitting or ask a question",
    cta: "Contact us",
    to: "/contact",
    image: images.hero,
  },
];

// NOTE: I only have three real image references to work with (tailorAtWork,
// hero, wedding), so the 2nd and 3rd slots reuse hero/wedding as
// placeholders. Swap these for two dedicated shots from the fitting room
// once you have them, e.g. images.tailorAtWork2 / images.tailorAtWork3.
const bridalGalleryImages = [images.tailorAtWork, images.hero, images.wedding];

function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroWidth = useTransform(scrollYProgress, [0, 0.31], ["95%", "100%"]);
  const heroHeight = useTransform(scrollYProgress, [0, 0.31], ["85%", "100%"]);

  const [activeCard, setActiveCard] = useState(-1);
  const [bridalIndex, setBridalIndex] = useState(0);

  return (
    <>
      <HomePreloader />

      <section ref={heroRef} className="relative h-[145dvh] bg-background">
        <div className="sticky top-16 h-[calc(100dvh-4rem)] md:top-[72px] md:h-[calc(100dvh-72px)]">
          <motion.div
            style={{ width: heroWidth, height: heroHeight }}
            className="absolute left-1/2 top-1/2 overflow-hidden bg-ink text-primary-foreground -translate-x-1/2 -translate-y-1/2"
          >
            <motion.img
              src={images.hero}
              alt="Tailor at work in a Birmingham city centre atelier"
              className="absolute inset-0 size-full object-cover object-[center_25%]"
              width={1600}
              height={1104}
              initial={{ scale: 1.06 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.8 }}
            />
            <div className="absolute inset-0 bg-hero-overlay" />
            <div className="relative mx-auto flex size-full max-w-7xl flex-col justify-end px-5 pb-12 pt-10 md:px-10 md:pb-16 lg:pb-20">
              <Eyebrow light>Bridal alterations · Birmingham</Eyebrow>
              <h1 className="mt-5 max-w-5xl font-display text-5xl leading-[.88] sm:text-6xl md:text-8xl lg:text-[7.6rem]">
                The perfect dress.
                <br />
                <em className="text-accent">Made truly yours.</em>
              </h1>
              <div className="mt-7 flex max-w-2xl flex-col items-start justify-between gap-5 sm:flex-row sm:items-end sm:gap-7">
                <p className="max-w-md text-sm leading-6 text-primary-foreground/80 md:text-base md:leading-7">
                  Specialist wedding dress and bridesmaid alterations in
                  Birmingham city centre, shaped around comfort, movement and
                  confidence.
                </p>
                <BookingCta dark />
              </div>
              <ArrowDown
                className="absolute bottom-5 right-5 animate-bounce md:bottom-7 md:right-8"
                aria-hidden="true"
              />
            </div>
        </motion.div>
        </div>
      </section>

      <div className="bg-background">
        <section className="relative px-5 py-24 md:px-10 md:py-32">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-1 z-10 h-1 bg-[#c21869]"
          />
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Alterations & tailoring"
              title="Beautiful clothes, fitted for your life."
              body="Bridal is at the heart of the atelier, supported by considered alterations, tailoring and professional garment care."
            />
            <div className="mt-14 grid gap-4 md:grid-cols-12">
              {services.map((s, i) => (
                <Reveal
                  key={s.id}
                  className={i === 0 || i === 3 ? "md:col-span-7" : "md:col-span-5"}
                >
                  <Link
                    to="/services"
                    hash={s.id}
                    className="group block overflow-hidden bg-card"
                  >
                    <div
                      className={
                        i === 0 || i === 3
                          ? "aspect-[16/11] overflow-hidden"
                          : "aspect-[4/5] overflow-hidden"
                      }
                    >
                      <img
                        src={s.image}
                        alt={s.alt}
                        width={1200}
                        height={1504}
                        loading="lazy"
                        className="image-hover size-full object-cover"
                      />
                    </div>
                    <div className="flex items-end justify-between p-5">
                      <div>
                        <h3 className="font-display text-3xl">{s.title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {s.note}
                        </p>
                      </div>
                      <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
            <div className="mt-12">
              <BookingCta />
            </div>
          </div>
        </section>

        {/* Explore section — full-screen, full-width panel with an
            accordion-style image gallery: hovering (or focusing) a card
            grows it to roughly 1.5x its resting width while the other two
            compress evenly. The middle card uses flex-[2] on hover/focus
            (2 units of 4 = 50%, others 25% each). The two edge cards use a
            slightly smaller flex-[1.6] instead of flex-[2] — an edge card
            reads visually bigger than a middle card at the *same* width,
            since it's flush against the screen edge with nothing visible
            past it, so the edge ratio is dialed back a touch to feel
            equivalent rather than merely measure equal. All three cards
            rest equal (activeCard = -1 matches none of them) and only grow
            on hover/focus — no card is pre-selected. Mobile drops the hover dependency entirely: cards
            stack full width, nothing dims, and every title/note/CTA stays
            visible since there's no hover state to discover on a touch
            screen. Card titles are locked to one line (whitespace-nowrap)
            so they stay level across all three cards as the widths change.
            The headline stays on one line from md up too, sized off vw so
            it scales to fit the full-width section without wrapping; below
            md it still wraps normally so it doesn't shrink to nothing on a
            phone. */}
        <section className="relative flex min-h-dvh flex-col overflow-hidden bg-card">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[15px] z-10 h-px bg-[#c21869]"
          />
          <div className="flex w-full flex-1 flex-col px-5 py-16 md:px-10 md:py-20">
            <Eyebrow>Explore the atelier</Eyebrow>
            <h2 className="mt-6 font-display leading-[0.9] text-[clamp(3rem,8vw,8.5rem)] md:whitespace-nowrap md:text-[clamp(2rem,4.5vw,7.25rem)]">
              See the work, then bring us yours.
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground md:text-xl">
              Browse finished alterations, check bridal pricing, or get in
              touch to book your own fitting.
            </p>

            <div
              className="mt-12 flex flex-1 flex-col gap-3 md:mt-16 md:flex-row"
              onMouseLeave={() => setActiveCard(-1)}
            >
              {exploreLinks.map((item, i) => (
                <Link
                  key={item.title}
                  to={item.to}
                  className={
                    "group relative min-h-[22rem] w-full overflow-hidden rounded-tl-[28px] rounded-tr-[96px] rounded-br-[28px] rounded-bl-[96px] bg-ink transition-[flex-grow] duration-500 ease-out md:min-h-0 " +
                    (activeCard === i
                      ? i === 1
                        ? "md:flex-[2]"
                        : "md:flex-[1.6]"
                      : "md:flex-1")
                  }
                  onMouseEnter={() => setActiveCard(i)}
                  onFocus={() => setActiveCard(i)}
                >
                  <img
                    src={item.image}
                    alt=""
                    width={800}
                    height={1000}
                    loading="lazy"
                    className={
                      "size-full object-cover transition-all duration-500 ease-out md:scale-105 " +
                      (activeCard === i
                        ? "md:scale-100 md:opacity-100 md:blur-0"
                        : "md:opacity-40 md:blur-[2px]")
                    }
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/20 to-transparent" />
                  <div
                    className={
                      "absolute inset-0 flex flex-col items-start justify-end p-7 text-left transition-all duration-500 md:p-10 " +
                      (activeCard === i
                        ? "md:flex-row md:items-end md:justify-between md:text-left"
                        : "md:items-center md:justify-center md:text-center")
                    }
                  >
                    <div className="min-w-0">
                      <h3 className="max-w-full overflow-hidden text-ellipsis whitespace-nowrap font-display text-4xl leading-none text-primary-foreground md:text-5xl">
                        {item.title}
                      </h3>
                      <p
                        className={
                          "mt-3 max-w-[26ch] text-base leading-6 text-primary-foreground/75 " +
                          (activeCard === i ? "" : "md:hidden")
                        }
                      >
                        {item.note}
                      </p>
                    </div>
                    <span
                      className={
                        "mt-6 inline-flex shrink-0 items-center gap-2.5 text-xl font-medium text-primary-foreground drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] md:mt-0 " +
                        (activeCard === i ? "" : "md:hidden")
                      }
                    >
                      {item.cta}
                      <ArrowUpRight className="size-6" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="relative px-5 py-24 md:px-10 md:py-32">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-2 z-10 h-1 bg-[#c21869]"
          />
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <Eyebrow>Beyond the bridal suite</Eyebrow>
                <h2 className="mt-5 font-display text-5xl leading-none md:text-7xl">
                  Care for the rest of your wardrobe.
                </h2>
              </div>
              <div className="grid gap-px bg-border lg:col-span-8 md:grid-cols-2">
                {[
                  [
                    "General alterations",
                    "Dresses, skirts, trousers, jeans, shirts, jackets and coats — refined for fit, length and everyday ease.",
                  ],
                  [
                    "Dry cleaning",
                    "Professional care for tailoring, outerwear, dresses, wedding dresses and specialist pieces.",
                  ],
                  [
                    "Bridesmaid dresses",
                    "Hems, side seams and shoulder adjustments for a beautifully balanced bridal party.",
                  ],
                  [
                    "Personal assessment",
                    "Complex construction, delicate cloth and involved repairs are assessed individually before work begins.",
                  ],
                ].map(([title, copy], i) => (
                  <article
                    key={title}
                    className={
                      i === 0
                        ? "bg-ink p-8 text-primary-foreground md:p-10"
                        : "bg-card p-8 md:p-10"
                    }
                  >
                    <p className="text-xs uppercase tracking-[.18em] text-accent">
                      0{i + 1}
                    </p>
                    <h3 className="mt-9 font-display text-4xl">{title}</h3>
                    <p
                      className={
                        i === 0
                          ? "mt-4 leading-7 text-primary-foreground/65"
                          : "mt-4 leading-7 text-muted-foreground"
                      }
                    >
                      {copy}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        
        {/* Moved here from its old spot between the services grid and
            "Beyond the bridal suite" — now sits directly above the final
            booking CTA. */}
        <section className="relative overflow-hidden bg-ink text-primary-foreground">
          <div className="mx-auto grid min-h-[85dvh] max-w-[100rem] lg:grid-cols-12">
            <div className="relative flex min-h-[30rem] items-center justify-center overflow-hidden p-8 lg:col-span-7 lg:min-h-[38rem] lg:p-14">
              {/* Previous image — same card size as the active one, half cropped off the left edge with a gap */}
              <div className="pointer-events-none absolute left-0 top-1/2 z-0 aspect-[4/5] w-full max-w-md -translate-x-[calc(50%+1rem)] -translate-y-1/2 overflow-hidden rounded-tl-[20px] rounded-tr-[60px] rounded-br-[20px] rounded-bl-[60px] opacity-50 blur-[2px] md:max-w-lg">
                <img
                  src={
                    bridalGalleryImages[
                      (bridalIndex + bridalGalleryImages.length - 1) %
                        bridalGalleryImages.length
                    ]
                  }
                  alt=""
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="absolute inset-0 size-full object-cover"
                />
                <div className="absolute inset-0 bg-ink/40" />
              </div>

              {/* Next image — same card size, mostly cropped off the right edge with a gap */}
              <div className="pointer-events-none absolute right-0 top-1/2 z-0 aspect-[4/5] w-full max-w-md translate-x-[calc(70%+1rem)] -translate-y-1/2 overflow-hidden rounded-tl-[20px] rounded-tr-[60px] rounded-br-[20px] rounded-bl-[60px] opacity-50 blur-[2px] md:max-w-lg">
                <img
                  src={
                    bridalGalleryImages[
                      (bridalIndex + 1) % bridalGalleryImages.length
                    ]
                  }
                  alt=""
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="absolute inset-0 size-full object-cover"
                />
                <div className="absolute inset-0 bg-ink/40" />
              </div>

              {/* Active image */}
              <div className="relative z-10 aspect-[4/5] w-full max-w-md overflow-hidden rounded-tl-[20px] rounded-tr-[60px] rounded-br-[20px] rounded-bl-[60px] md:max-w-lg">
                <img
                  src={bridalGalleryImages[bridalIndex]}
                  alt="Wedding dress tailoring detail for a bridal fitting"
                  width={1200}
                  height={1504}
                  loading="lazy"
                  className="absolute inset-0 size-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-process-image" />
                <p className="absolute bottom-6 left-6 max-w-[75%] text-xs uppercase tracking-[.18em] text-primary-foreground/70 md:bottom-8 md:left-8">
                  Wedding dresses · Bridesmaid dresses · Birmingham
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  setBridalIndex(
                    (i) => (i + 1) % bridalGalleryImages.length,
                  )
                }
                aria-label="Show next photo"
                className="absolute right-3 top-1/2 z-20 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-primary-foreground/40 bg-ink/70 text-primary-foreground backdrop-blur transition hover:bg-ink md:right-6"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
            <div className="flex flex-col justify-center px-7 pb-16 pt-10 lg:col-span-5 lg:px-14 lg:py-20">
              <Eyebrow light>Bridal is our focus</Eyebrow>
              <h2 className="mt-5 font-display text-5xl leading-[.95] md:text-7xl">
                Considered from first pin to final fitting.
              </h2>
              <p className="mt-7 max-w-lg text-[24px] leading-9 text-primary-foreground/85 md:text-[28px]">
                From a clean hem to intricate lace, beadwork, bodice
                reshaping and train bustles, every alteration is assessed
                around the construction of your dress and how you want to
                move through the day.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild variant="ivory" size="lg">
                  <Link to="/alterations" hash="prices">
                    View bridal prices <ArrowUpRight />
                  </Link>
                </Button>
                <BookingCta dark />
              </div>
            </div>
          </div>
        </section>

        <div aria-hidden="true" className="relative h-[20px] bg-white">
          <div className="absolute inset-x-0 bottom-1 h-[3px] bg-[#c21869]" />
        </div>

        {/* <section className="px-5 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-4xl md:text-6xl">
              Bring the dress, we&apos;ll perfect it.
            </h2>
            <div className="mt-8 flex justify-center">
              <BookingCta />
            </div>
          </div>
        </section> */}
      </div>
    </>
  );
}