import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import { HomePreloader } from "@/components/home-preloader";
import {
  BookingCta,
  Eyebrow,
  SectionHeading,
} from "@/components/site-elements";
import { Button } from "@/components/ui/button";
import { images } from "@/lib/site-content";
import { canonicalUrl } from "@/lib/seo";

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
      { rel: "canonical", href: canonicalUrl("/") },
      { rel: "preload", as: "image", href: images.hero, fetchPriority: "high" },
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
    cta: "Take a look",
    to: "/gallery",
    image: images.wedding,
  },
  {
    title: "Alterations",
    cta: "View services",
    to: "/alterations",
    image: images.scissors,
  },
  {
    title: "Get in touch",
    cta: "Contact us",
    to: "/contact",
    image: images.hero,
  },
];

const alterationCards = [
  {
    id: "wedding-dress",
    title: "Wedding dress alterations",
    mobileTitle: "Wedding dresses",
    image: images.bridalFitting,
    alt: "Wedding dress prepared for a bridal fitting",
  },
  {
    id: "bridesmaid",
    title: "Bridesmaid dresses",
    image: images.bridesmaidFitting,
    alt: "Bridesmaid dress being fitted",
  },
  {
    id: "dresses-skirts",
    title: "Dresses & skirts",
    image: images.laceDetail,
    alt: "Delicate dress fabric detail",
  },
  {
    id: "trousers-jeans",
    title: "Trousers & jeans",
    image: images.twoPiece,
    alt: "Tailored trousers in a suit",
  },
  {
    id: "jackets-coats",
    title: "Jackets & coats",
    image: images.overcoat,
    alt: "Tailored overcoat",
  },
  {
    id: "dry-cleaning",
    title: "Dry cleaning",
    image: images.fabric,
    alt: "Garment fabric prepared for professional care",
  },
];

// NOTE: I only have three real image references to work with (tailorAtWork,
// hero, wedding), so the 2nd and 3rd slots reuse hero/wedding as
// placeholders. Swap these for two dedicated shots from the fitting room
// once you have them, e.g. images.tailorAtWork2 / images.tailorAtWork3.
const bridalGalleryImages = [images.heroMobile, images.brideBlur, images.footer];

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
            <picture className="absolute inset-0 size-full">
              <source media="(max-width: 767px)" srcSet={images.heroMobile} />

              <motion.img
                src={images.hero}
                alt="Tailor at work in a Birmingham city centre atelier"
                className="size-full object-cover object-[center_30%] max-md:object-cover max-md:scale-[1.2]"
                width={700}
                height={700}
                initial={{ scale: 1.06 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.8 }}
              />
            </picture>

            <div className="absolute inset-0 bg-hero-overlay" />

            <div className="relative flex size-full flex-col justify-end px-5 pb-28 pt-10 md:pb-16 md:pl-[7.5rem] md:pr-10 lg:pb-20">

              {/* Desktop eyebrow — unchanged */}
              <div className="hidden md:block">
                <Eyebrow light>Bridal alterations · Birmingham</Eyebrow>
              </div>

              {/* Mobile marquee */}
              <div className="absolute left-0 top-5 z-10 w-full overflow-hidden md:hidden">
                <motion.div
                  className="flex w-max whitespace-nowrap text-xs font-medium uppercase tracking-[.18em] text-primary-foreground"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                    duration: 14,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                >
                  <span className="shrink-0 pr-8">
                    Bridal alterations · Birmingham
                  </span>
                  <span className="shrink-0 pr-8">
                    Bridal alterations · Birmingham
                  </span>
                </motion.div>
              </div>

              <h1 className="mt-5 font-display text-[clamp(3.5rem,10vw,9rem)] leading-[.88] tracking-[.02em]">
                Made to be yours.
                <br />
                {/* <em className="text-accent">Made truly yours.</em> */}
              </h1>

              <div className="mt-7 flex max-w-3xl flex-col items-start justify-between gap-5 sm:flex-row sm:items-end sm:gap-7">
                <div className="max-w-[22rem] md:max-w-md">
                  <p className="text-[13px] leading-6 text-primary-foreground/80 md:text-base md:leading-7">
                    Wedding dress and bridesmaid alterations in Birmingham city
                    centre, tailored for comfort, movement and confidence.
                  </p>
                  <Link
                    to="/alterations"
                    className="mt-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[.14em] text-primary-foreground transition-colors hover:text-accent"
                  >
                    Our Services
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </Link>
                </div>

                {/* Button moves lower only on mobile */}
                <BookingCta
                  dark
                  className="px-3 max-md:absolute max-md:bottom-5 max-md:left-5"
                />
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
        <section className="relative w-full px-5 py-20 md:px-10 md:py-28">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-1 z-10 h-0.5 bg-[#c21869]"
          />
          <div className="w-full">
            <div className="flex flex-col gap-8 md:grid md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:gap-10">
              <SectionHeading
                eyebrow="Alterations & tailoring"
                title="Beautiful clothes, fitted for YOU."
                body="Bridal is at the heart of the atelier, supported by considered alterations, tailoring and professional garment care."
              />
              <div className="md:pb-1">
                <BookingCta />
              </div>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 md:mt-14 md:grid-cols-3 md:gap-x-6 md:gap-y-10">
              {alterationCards.map((card) => (
                <Link
                  key={card.id}
                  to="/alterations"
                  hash={card.id}
                  className="group min-w-0"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-tl-[16px] rounded-tr-[48px] rounded-br-[16px] rounded-bl-[48px] bg-ink">
                    <img
                      src={card.image}
                      alt={card.alt}
                      width={1200}
                      height={900}
                      loading="lazy"
                      className="image-hover absolute inset-0 size-full object-cover"
                    />
                  </div>
                  <div className="flex items-start justify-between gap-3 pt-3">
                    <h3 className="font-display text-xl leading-tight md:text-2xl">
                      {card.mobileTitle ? (
                        <>
                          <span className="whitespace-nowrap md:hidden">
                            {card.mobileTitle}
                          </span>
                          <span className="hidden md:inline">
                            {card.title}
                          </span>
                        </>
                      ) : (
                        card.title
                      )}
                    </h3>
                    <ArrowUpRight className="mt-1 size-4 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </Link>
              ))}
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
            phone.

            IMAGE SIZING: every card image is rendered in a fixed-size box
            (md:w-[50vw] — the widest a card can ever get) centred inside
            the card, and the card just masks/reveals it. Previously the
            img was size-full object-cover, so its scale changed with each
            card's width and with the source photo's aspect ratio (portrait
            shots got zoomed hard as a card expanded, landscape ones didn't).
            Now every card shows its image at the same size as the expanded
            "Get in touch" one. */}
        <section className="relative flex min-h-[75dvh] flex-col overflow-hidden bg-card md:min-h-dvh">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[15px] z-10 h-0.5 bg-[#c21869]"
          />
          <div className="flex w-full flex-1 flex-col px-5 pb-6 pt-12 md:px-10 md:py-20">
            <Eyebrow>Explore the atelier</Eyebrow>
            <h2 className="mt-5 font-display text-[clamp(2.75rem,12vw,4rem)] leading-[0.9] md:mt-6 md:whitespace-nowrap md:text-[clamp(2rem,4.5vw,7.25rem)]">
              See the work, then bring us yours.
            </h2>
            <p className="mt-5 max-w-[32ch] text-base leading-6 text-muted-foreground md:mt-8 md:max-w-xl md:text-lg md:leading-8 md:text-xl">
              Browse finished alterations, check bridal pricing, or get in
              touch to book your own fitting.
            </p>

            <div
              className="mt-12 flex flex-col gap-1 md:mt-16 md:flex-1 md:flex-row md:gap-3 md:pt-0"
              onMouseLeave={() => setActiveCard(-1)}
            >
              {exploreLinks.map((item, i) => (
                <Link
                  key={item.title}
                  to={item.to}
                  className={
                    "group relative flex w-full items-center gap-4 py-1 md:min-h-0 md:flex-1 md:gap-0 md:overflow-hidden md:rounded-tl-[28px] md:rounded-tr-[96px] md:rounded-br-[28px] md:rounded-bl-[96px] md:bg-ink md:py-0 md:transition-[flex-grow] md:duration-500 md:ease-out " +
                    (activeCard === i
                      ? i === 1
                        ? "md:flex-[2]"
                        : "md:flex-[1.6]"
                      : "md:flex-1")
                  }
                  onMouseEnter={() => setActiveCard(i)}
                  onFocus={() => setActiveCard(i)}
                >
                  <div className="relative size-[5.25rem] shrink-0 overflow-hidden rounded-[1.5rem] md:absolute md:inset-0 md:flex md:size-auto md:justify-center md:rounded-none">
                    <img
                      src={item.image}
                      alt=""
                      width={1600}
                      height={1104}
                      loading="lazy"
                      className={
                        "size-full rounded-[1.25rem] object-cover md:h-full md:w-full md:rounded-none md:transition-all md:duration-500 md:ease-out md:w-[50vw] md:max-w-none md:shrink-0 md:scale-105 " +
                        (activeCard === i
                          ? "md:scale-100 md:opacity-100 md:blur-0"
                          : "md:opacity-40 md:blur-[2px]")
                      }
                    />
                  </div>
                  <div className="absolute inset-0 hidden bg-gradient-to-t from-ink/95 via-ink/20 to-transparent md:block" />
                  <div
                    className={
                      "flex min-w-0 flex-1 items-center justify-between gap-3 text-left md:absolute md:inset-0 md:flex md:flex-col md:items-start md:justify-end md:p-10 md:transition-all md:duration-500 " +
                      (activeCard === i
                        ? "md:flex-row md:items-end md:justify-between md:text-left"
                        : "md:items-center md:justify-center md:text-center")
                    }
                  >
                    <div className="min-w-0">
                      <h3
                        className={
                          "max-w-full overflow-hidden text-ellipsis whitespace-nowrap font-display text-2xl leading-none md:text-4xl md:text-primary-foreground md:text-5xl " +
                          (activeCard === i ? "md:hidden" : "")
                        }
                      >
                        {item.title}
                      </h3>
                    </div>
                    <span
                      className={
                        "hidden shrink-0 items-center gap-2.5 text-xl font-medium text-primary-foreground drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] md:mt-0 md:inline-flex " +
                        (activeCard === i ? "" : "md:hidden")
                      }
                    >
                      {item.cta}
                      <ArrowUpRight className="size-6" />
                    </span>
                    <ArrowUpRight className="size-5 shrink-0 text-foreground md:hidden" aria-hidden="true" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Custom wedding work — full-screen section (min-h-dvh) with a
            single photo at 75% of the viewport height, inset by the same
            page padding as the other sections. The whole photo is a link to
            /custom-wedding-work, with the title centred over a dark wash so
            it reads on any image. Swap images.wedding for a dedicated shot
            (the reference style is a moody, desaturated editorial photo). */}
        <section className="relative flex min-h-dvh items-center bg-background px-5 py-10 md:px-10">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-2 z-10 h-0.5 bg-[#c21869]"
          />
          <Link
            to="/custom-wedding-work"
            className="group relative block h-[75dvh] w-full overflow-hidden bg-ink"
          >
            <img
              src={images.fabric}
              alt="Bride in a custom wedding dress"
              width={1600}
              height={1104}
              loading="lazy"
              className="image-hover absolute inset-0 size-full object-cover"
            />
            <div className="absolute inset-0 bg-ink/40 transition-colors duration-500 group-hover:bg-ink/25" />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-primary-foreground">
              <h2 className="font-display text-5xl leading-[.95] md:text-8xl">
                Custom wedding work
              </h2>
              <span className="mt-6 inline-flex items-center gap-2.5 text-lg font-medium md:text-xl">
                Explore
                <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 md:size-6" />
              </span>
            </div>
          </Link>
        </section>

        {/* Bridal gallery.

            MOBILE (below lg): a single plain rectangular photo, inset by the
            same px-5 page padding as the hero, no rounded corners, border,
            caption or arrow. The "Bridal is our focus" eyebrow sits on the
            photo's top-right corner, with a soft dark gradient behind it so
            it stays readable over the light image. Swap
            bridalGalleryImages[0] for a dedicated image if you'd rather not
            reuse the hero's mobile shot.

            DESKTOP (lg+): unchanged — two full-size images followed by the
            arrow, with the eyebrow back in the text column. Each mobile-only
            piece is lg:hidden and each desktop-only piece is hidden lg:*, so
            only one version is ever visible. */}
        <section className="relative overflow-hidden bg-ink text-primary-foreground">
          <div className="grid w-full lg:min-h-[85dvh] lg:grid-cols-12">
            {/* Mobile — plain rectangle with eyebrow overlaid top-right */}
            <div className="px-5 pt-10 lg:hidden">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink sm:aspect-[5/4]">
                <img
                  src={bridalGalleryImages[0]}
                  alt="Wedding dress tailoring detail for a bridal fitting"
                  width={1200}
                  height={1504}
                  loading="lazy"
                  className="size-full object-cover"
                />
                {/* Soft top gradient so the light eyebrow reads on a pale photo */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-ink/60 to-transparent"
                />
                <div className="absolute right-4 top-4 z-10 text-right">
                  <Eyebrow light>Bridal is our focus</Eyebrow>
                </div>
              </div>
            </div>

            {/* Desktop — two-image carousel */}
            <div className="relative hidden min-h-[38rem] items-center gap-10 overflow-hidden lg:col-span-7 lg:flex lg:justify-center lg:py-14 lg:pl-0 lg:pr-14">
              {/* Left — active image */}
              <div className="relative z-10 aspect-[4/5] w-[33%] shrink-0 overflow-hidden rounded-tl-[20px] rounded-tr-[60px] rounded-br-[20px] rounded-bl-[60px] border border-white">
                <img
                  src={bridalGalleryImages[bridalIndex]}
                  alt="Wedding dress tailoring detail for a bridal fitting"
                  width={1200}
                  height={1504}
                  loading="lazy"
                  className={`absolute inset-0 size-full scale-125 ${bridalGalleryImages[bridalIndex] === images.brideBlur ? "object-contain" : "object-cover"} opacity-80`}
                />
                <div className="absolute inset-0 bg-process-image" />
                <p className="absolute bottom-6 left-6 max-w-[75%] text-xs uppercase tracking-[.18em] text-primary-foreground/70 md:bottom-8 md:left-8">
                  Wedding dresses · Bridesmaid dresses · Birmingham
                </p>
              </div>

              {/* Right — second full-size image */}
              <div className="relative aspect-[4/5] w-[33%] shrink-0 overflow-hidden rounded-tl-[20px] rounded-tr-[60px] rounded-br-[20px] rounded-bl-[60px] border border-white">
                <img
                  src={bridalGalleryImages[(bridalIndex + 1) % bridalGalleryImages.length]}
                  alt=""
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="absolute inset-0 size-full scale-125 object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-process-image" />
              </div>

              {/* Arrow — unchanged */}
              <button
                type="button"
                onClick={() =>
                  setBridalIndex(
                    (i) => (i + 1) % bridalGalleryImages.length,
                  )
                }
                aria-label="Show next photo"
                className="relative z-20 ml-6 flex size-11 shrink-0 translate-x-2 items-center justify-center rounded-full border border-primary-foreground/40 bg-ink/70 text-primary-foreground backdrop-blur transition hover:bg-ink"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>

            <div className="flex flex-col justify-center px-7 pb-16 pt-10 lg:col-span-5 lg:px-14 lg:py-20">
              {/* Desktop-only eyebrow — on mobile it lives on the photo */}
              <div className="hidden lg:block">
                <Eyebrow light>Bridal is our focus</Eyebrow>
              </div>
              <h2 className="font-display text-5xl leading-[.95] md:text-7xl lg:mt-5">
                Professionally considered from design to fitting.
              </h2>
              <p className="mt-7 max-w-lg text-base leading-7 text-primary-foreground/85 md:text-[28px] md:leading-9">
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
          <div className="absolute inset-x-0 bottom-1 h-0.5 bg-[#c21869]" />
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