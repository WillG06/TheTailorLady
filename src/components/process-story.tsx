import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef, useState } from "react";
import { BookingCta, Eyebrow } from "@/components/site-elements";
import { images } from "@/lib/site-content";

type ProcessKind = "alterations" | "bespoke";

const content = {
  alterations: {
    eyebrow: "How alterations work",
    title: "A careful process, from first pin to final press.",
    intro: "Every garment arrives with its own construction, history and purpose. We take time to understand all three before a single stitch is opened.",
    steps: [
      { number: "01", title: "Drop-off & assessment", image: images.bridalFitting, alt: "Wedding dress hem being assessed and pinned during a bridal fitting in Birmingham", text: "We begin with the garment on you, not on a hanger. The full silhouette is assessed — balance, proportion, movement and the way the original maker intended it to sit. We then agree what should change, what should remain untouched, and the finish you are hoping to achieve.", detail: "You leave with a clear scope, estimated timing and price." },
      { number: "02", title: "Pinning & preparation", image: images.bowBack, alt: "Bridal lace and beadwork being altered carefully by hand", text: "Adjustments are marked directly on the body so every line relates to your posture. For gowns and constructed jackets, internal layers are considered separately before seams are opened. This is where experience matters: a small external change can require careful internal rebuilding.", detail: "Original seam allowances and construction are preserved wherever possible." },
      { number: "03", title: "The fitting", image: images.hero, alt: "Tailor checking the balance and fit of a jacket during a fitting", text: "At the fitting we check the garment in motion as well as at rest. Hem lines, sleeve pitch, waist shape and ease are refined together. Complex commissions may need a second fitting, particularly when several areas of a garment affect one another.", detail: "Nothing is finished permanently until the balance feels right." },
      { number: "04", title: "Finish & collection", image: images.bridesmaidFitting, alt: "Finished sage bridesmaid dresses receiving final adjustments in the atelier", text: "The garment is completed with the quiet details that make an alteration disappear: clean internal work, matched thread, restored pressing and a final quality check. At collection, we ask you to try it once more so that fit, comfort and confidence are all confirmed.", detail: "Pressed, checked and ready for the occasion it was made to meet." },
    ],
  },
  bespoke: {
    eyebrow: "The making process",
    title: "Four chapters, one garment entirely your own.",
    intro: "The pace is deliberate. Each appointment resolves a different question, moving from how you want to feel to how the finished garment should move.",
    steps: [
      { number: "01", title: "Consultation", image: images.fabric, alt: "Fine cloth and tailoring tools selected during a private consultation", text: "We talk through the occasion, your wardrobe and the details you naturally return to. Cloth is considered for drape and longevity as much as colour. The conversation creates a clear direction without imposing a house style.", detail: "Purpose, silhouette, cloth and personal expression." },
      { number: "02", title: "Measurement", image: images.hero, alt: "Female tailor taking precise jacket measurements in the atelier", text: "Measurements are only the beginning. Posture, shoulder angle, stance and balance are observed so the pattern reflects the person rather than a list of numbers. These details shape how the garment hangs and moves.", detail: "Proportion read precisely, with space for comfort." },
      { number: "03", title: "Fitting", image: images.twoPiece, alt: "Charcoal tailored jacket being refined through a personal fitting", text: "A fitting brings the garment and body into conversation. We refine balance, length and volume directly on you, then return to the workroom to resolve every marked adjustment by hand.", detail: "The silhouette is tested, discussed and refined." },
      { number: "04", title: "Finish", image: images.dinner, alt: "Hand-finished dinner jacket ready at the end of the bespoke process", text: "Final pressing gives the cloth its shape. Buttonholes, linings and internal finishes are checked before your collection appointment, where we make sure the garment feels as effortless as it looks.", detail: "Hand-finished, pressed and ready to become part of your life." },
    ],
  },
} as const;

export function ProcessStory({ kind }: { kind: ProcessKind }) {
  const section = content[kind];
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const goToStep = (stepIndex: number) => {
    const track = trackRef.current;
    const panel = track?.children.item(stepIndex);
    if (track && panel instanceof HTMLElement) {
      track.scrollTo({ left: panel.offsetLeft - track.offsetLeft, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const panels = Array.from(track.children);
    const nearestIndex = panels.reduce((nearest, panel, index) => {
      const currentDistance = Math.abs(panel.getBoundingClientRect().left - track.getBoundingClientRect().left);
      const nearestDistance = Math.abs(panels[nearest].getBoundingClientRect().left - track.getBoundingClientRect().left);
      return currentDistance < nearestDistance ? index : nearest;
    }, 0);
    setActiveStep(nearestIndex);
  };

  return (
    <section className="bg-secondary px-5 pb-24 pt-24 md:px-10 md:pb-32 md:pt-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 border-b border-border pb-8 md:grid-cols-[1fr_1.2fr] md:items-end md:gap-16 md:pb-10">
          <div>
            <Eyebrow>{section.eyebrow}</Eyebrow>
            <h2 className="mt-4 max-w-xl font-display text-5xl leading-[.98] md:text-6xl">{section.title}</h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground md:justify-self-end md:text-lg md:leading-8">{section.intro}</p>
        </div>

        <div className="mt-8 flex items-center gap-5 md:mt-10">
          <div
            className="h-px flex-1 bg-border"
            role="progressbar"
            aria-label="Process steps"
            aria-valuemin={1}
            aria-valuemax={section.steps.length}
            aria-valuenow={activeStep + 1}
          >
            <div className="h-px bg-foreground transition-[width] duration-300" style={{ width: `${((activeStep + 1) / section.steps.length) * 100}%` }} />
          </div>
          <span className="min-w-12 text-right text-xs tabular-nums text-muted-foreground">{section.steps[activeStep].number} / {section.steps.length.toString().padStart(2, "0")}</span>
          <div className="flex gap-2">
            <button type="button" onClick={() => goToStep(Math.max(0, activeStep - 1))} disabled={activeStep === 0} aria-label="Previous process step" className="grid size-10 place-items-center border border-border text-foreground transition-colors hover:bg-background disabled:cursor-not-allowed disabled:opacity-35">
              <ArrowLeft className="size-4" aria-hidden="true" />
            </button>
            <button type="button" onClick={() => goToStep(Math.min(section.steps.length - 1, activeStep + 1))} disabled={activeStep === section.steps.length - 1} aria-label="Next process step" className="grid size-10 place-items-center border border-border text-foreground transition-colors hover:bg-background disabled:cursor-not-allowed disabled:opacity-35">
              <ArrowRight className="size-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div ref={trackRef} onScroll={handleScroll} className="process-track mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto md:gap-6" aria-label="Process steps">
          {section.steps.map((step) => (
            <article key={step.number} className="grid min-w-full snap-start overflow-hidden border border-border bg-background md:grid-cols-2">
              <div className="relative aspect-[4/3] overflow-hidden md:aspect-auto md:min-h-[30rem]">
                <img src={step.image} alt={step.alt} width={1400} height={1000} loading="lazy" className="absolute inset-0 size-full object-cover" />
              </div>
              <div className="flex min-h-[22rem] flex-col justify-between p-6 sm:p-9 md:min-h-[30rem] md:p-12 lg:p-16">
                <p className="text-xs font-medium uppercase tracking-[.18em] text-muted-foreground">Step {step.number}</p>
                <div className="mt-12 md:mt-0">
                  <h3 className="font-display text-4xl leading-tight md:text-5xl">{step.title}</h3>
                  <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground md:leading-8">{step.text}</p>
                </div>
                <p className="mt-8 border-t border-border pt-4 text-sm leading-6 text-foreground">{step.detail}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start gap-5 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-lg font-display text-3xl">Ready to begin with a considered conversation?</p>
          <BookingCta />
        </div>
      </div>
    </section>
  );
}
