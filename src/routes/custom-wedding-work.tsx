import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";
import { BookingCta, Eyebrow } from "@/components/site-elements";
import { images } from "@/lib/site-content";
import { canonicalUrl } from "@/lib/seo";

export const Route = createFileRoute("/custom-wedding-work")({
  head: () => ({
    meta: [
      { title: "Custom Wedding Work Birmingham | The Tailor Lady" },
      {
        name: "description",
        content:
          "Custom wedding dress work in Birmingham city centre — bespoke adjustments and reworking, tailored around you.",
      },
      {
        property: "og:title",
        content: "Custom Wedding Work Birmingham | The Tailor Lady",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: canonicalUrl("/custom-wedding-work") }],
  }),
  component: CustomWeddingWork,
});

const LOCK_AT = 0.65; // fraction down the image where the text locks in place

function CustomWeddingWork() {
  const imageRef = useRef<HTMLDivElement>(null);
  const [stickyTop, setStickyTop] = useState(0);

  // The sticky offset is a *measured* pixel value (65% of the image's
  // rendered height), not a CSS percentage. Percentage `top` values need a
  // definite-height containing block to resolve against, which is an easy
  // way for this pattern to silently break. The fade-in only animates
  // opacity — transform/overflow on an ancestor would disable sticky.
  useLayoutEffect(() => {
    const el = imageRef.current;
    if (!el) return;
    const update = () => setStickyTop(el.offsetHeight * LOCK_AT);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="grid gap-12 bg-background px-5 pb-24 pt-28 md:grid-cols-2 md:gap-20 md:px-10 md:pb-32 md:pt-36"
    >
      <div ref={imageRef} className="self-start overflow-hidden bg-ink">
        <img
          src={images.wedding}
          alt="Bride in a custom wedding dress"
          width={600}
          height={750}
          loading="lazy"
          className="aspect-[4/5] w-full object-cover"
        />
      </div>

      <div>
        <div className="flex flex-col md:sticky" style={{ top: stickyTop }}>
          <Eyebrow>Custom wedding work</Eyebrow>
          <h1 className="mt-4 font-display text-5xl leading-[.95] md:text-7xl">
            Made around you.
          </h1>
          <p className="mt-8 max-w-prose leading-relaxed text-muted-foreground">
            Placeholder copy: describe the custom work you offer here, such as
            reworking a dress you already own, reshaping a bodice, adding
            sleeves or straps, redesigning a neckline or bustle, and how a
            project goes from first consultation to final fitting.
          </p>
          <div className="mt-9">
            <BookingCta />
          </div>
        </div>
      </div>
    </motion.section>
  );
}