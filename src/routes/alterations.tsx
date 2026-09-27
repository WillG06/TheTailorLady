import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageHero, SectionHeading } from "@/components/site-elements";
import { ProcessStory } from "@/components/process-story";
import { alterationPrices, images } from "@/lib/site-content";

export const Route = createFileRoute("/alterations")({
  head: () => ({
    meta: [
      {
        title: "Suit & Wedding Dress Alterations Birmingham | The Tailor Lady",
      },
      {
        name: "description",
        content:
          "Expert suit alterations, dress alterations and wedding dress alterations in Birmingham city centre.",
      },
      {
        property: "og:title",
        content: "Suit & Wedding Dress Alterations Birmingham",
      },
      {
        property: "og:description",
        content:
          "Precise alterations for suits, dresses and wedding gowns in Birmingham city centre.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/alterations" }],
  }),
  component: Alterations,
});

function Alterations() {
  return (
    <>
      <PageHero
        eyebrow="Bridal alteration specialist"
        title="Wedding dress alterations in Birmingham, fitted around you."
        intro="From wedding gowns and bridesmaid dresses to everyday clothing, each change is planned around comfort, movement and the garment's original character."
        image={images.wedding}
        alt="Wedding dress prepared for expert alterations in Birmingham"
      />

      <PricingSection />

      <section className="page-wrap py-24 md:py-32">
        <div className="grid gap-14 md:grid-cols-2">
          <article>
            <SectionHeading
              eyebrow="Wedding dress alterations Birmingham"
              title="Your dress, beautifully resolved."
              body="Hems, bodice changes, lace and beadwork, corset conversions and train bustles are carefully assessed and fitted for the way you will move throughout the day."
            />
          </article>

          <article>
            <SectionHeading
              eyebrow="Bridesmaid dress alterations"
              title="A considered fit for every member of the party."
              body="Hems, side seams and shoulder adjustments create balance and comfort while respecting the cut and fabric of each dress."
            />
          </article>
        </div>
      </section>

      <ProcessStory kind="alterations" />

      <section className="page-wrap py-20 text-center">
        <h2 className="font-display text-4xl">
          Not sure what your garment needs?
        </h2>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button asChild variant="editorial">
            <Link to="/contact">Ask about an alteration</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/faq">Read common questions</Link>
          </Button>
        </div>
      </section>
    </>
  );
}

function PricingSection() {
  return (
    <section id="prices" className="scroll-mt-28 bg-secondary py-24 md:py-32">
      <div className="page-wrap">
        <SectionHeading
          eyebrow="Public price guide"
          title="Clear pricing, before the first pin."
          body="Wedding dress and bridesmaid alterations are our main focus. Complex construction, delicate fabrics or combined alterations may require an individual quotation after assessment."
        />

        <div className="mt-16 divide-y divide-border">
          {alterationPrices.map((category) => (
            <div
              key={category.id}
              className="grid gap-6 py-12 first:pt-0 last:pb-0 md:grid-cols-12 md:gap-12"
            >
              <div className="md:col-span-4">
                <h3
                  className={
                    category.featured
                      ? "border-l-2 border-accent pl-4 font-display text-2xl md:text-3xl"
                      : "font-display text-2xl md:text-3xl"
                  }
                >
                  {category.title}
                </h3>
                {category.featured && (
                  <p className="mt-3 pl-4 text-sm leading-6 text-muted-foreground">
                    Priority appointment service available by enquiry.
                  </p>
                )}
              </div>

              <div className="md:col-span-8">
                {category.groups.map((group) => (
                  <div key={group.title} className="mb-10 last:mb-0">
                    <p className="mb-4 text-sm font-medium text-foreground/70">
                      {group.title}
                    </p>
                    <ul className="space-y-3">
                      {group.items.map(([name, price]) => (
                        <li
                          key={name}
                          className="flex items-baseline gap-3 text-sm"
                        >
                          <span className="text-foreground/80">{name}</span>
                          <span
                            aria-hidden="true"
                            className="-translate-y-1 flex-1 border-b border-dotted border-border"
                          />
                          <span className="shrink-0 font-display text-lg">
                            {price}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 max-w-3xl text-sm leading-6 text-muted-foreground">
          Prices are a guide for standard alterations. Complex alterations,
          unusual construction, delicate fabrics and repairs may require an
          individual quotation after the garment has been assessed.
        </p>
      </div>
    </section>
  );
}