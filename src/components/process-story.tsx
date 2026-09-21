import { motion, useReducedMotion } from "framer-motion";
import { BookingCta, Eyebrow } from "@/components/site-elements";
import { images } from "@/lib/site-content";

type ProcessKind = "alterations" | "bespoke";

const content = {
  alterations: {
    eyebrow: "How alterations work",
    title: "A careful process, from first pin to final press.",
    intro: "Every garment arrives with its own construction, history and purpose. We take time to understand all three before a single stitch is opened.",
    steps: [
      { number: "01", title: "Drop-off & assessment", image: images.fabric, alt: "Tailoring cloth, shears and measuring tools prepared for an alteration assessment", text: "We begin with the garment on you, not on a hanger. The full silhouette is assessed — balance, proportion, movement and the way the original maker intended it to sit. We then agree what should change, what should remain untouched, and the finish you are hoping to achieve.", detail: "You leave with a clear scope, estimated timing and price." },
      { number: "02", title: "Pinning & preparation", image: images.twoPiece, alt: "Charcoal suit being prepared for precise pinning and alteration", text: "Adjustments are marked directly on the body so every line relates to your posture. For gowns and constructed jackets, internal layers are considered separately before seams are opened. This is where experience matters: a small external change can require careful internal rebuilding.", detail: "Original seam allowances and construction are preserved wherever possible." },
      { number: "03", title: "The fitting", image: images.hero, alt: "Tailor checking the balance and fit of a jacket during a fitting", text: "At the fitting we check the garment in motion as well as at rest. Hem lines, sleeve pitch, waist shape and ease are refined together. Complex commissions may need a second fitting, particularly when several areas of a garment affect one another.", detail: "Nothing is finished permanently until the balance feels right." },
      { number: "04", title: "Finish & collection", image: images.wedding, alt: "Finished ivory occasion suit ready for collection after alterations", text: "The garment is completed with the quiet details that make an alteration disappear: clean internal work, matched thread, restored pressing and a final quality check. At collection, we ask you to try it once more so that fit, comfort and confidence are all confirmed.", detail: "Pressed, checked and ready for the occasion it was made to meet." },
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
  const reduce = useReducedMotion();
  const section = content[kind];
  return <section className="bg-secondary px-5 pb-24 pt-28 md:px-10 md:pb-36 md:pt-36">
    <div className="mx-auto max-w-7xl">
      <div className="mx-auto max-w-3xl text-center"><Eyebrow>{section.eyebrow}</Eyebrow><h2 className="mt-5 font-display text-5xl leading-[.96] md:text-7xl">{section.title}</h2><p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">{section.intro}</p></div>
      <div className="mt-20 md:mt-28">
        {section.steps.map((step, index) => {
          const dark = index % 2 === 1;
          const reversed = index % 2 === 1;
          return <motion.article key={step.number} className={`process-panel relative overflow-hidden border border-border ${dark ? "bg-ink text-primary-foreground" : "bg-background text-foreground"}`} initial={reduce ? false : { opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .12 }} transition={{ duration: .9, ease: [.22,1,.36,1] }}>
            <div className="grid min-h-[72dvh] lg:grid-cols-12">
              <div className={`relative min-h-[22rem] overflow-hidden lg:col-span-7 lg:min-h-full ${reversed ? "lg:order-2" : ""}`}><motion.img src={step.image} alt={step.alt} width={1400} height={1000} loading="lazy" className="absolute inset-0 size-full object-cover" initial={reduce ? false : { scale: 1.08 }} whileInView={{ scale: 1 }} viewport={{ once: true, amount: .2 }} transition={{ duration: 1.25, ease: [.22,1,.36,1] }}/><div className="absolute inset-0 bg-process-image"/></div>
              <div className={`relative flex flex-col justify-between p-7 md:p-12 lg:col-span-5 lg:p-16 ${reversed ? "lg:order-1" : ""}`}>
                <span className={`font-display text-8xl leading-none ${dark ? "text-primary-foreground/10" : "text-foreground/10"}`}>{step.number}</span>
                <div className="mt-16 lg:mt-auto"><p className={`text-[.68rem] font-semibold uppercase tracking-[.2em] ${dark ? "text-accent" : "text-accent"}`}>Step {step.number}</p><h3 className="mt-4 font-display text-4xl leading-none md:text-5xl">{step.title}</h3><p className={`mt-6 text-base leading-8 ${dark ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{step.text}</p><p className={`mt-8 border-t pt-5 text-xs uppercase leading-6 tracking-[.14em] ${dark ? "border-primary-foreground/20 text-primary-foreground/55" : "border-border text-muted-foreground"}`}>{step.detail}</p></div>
              </div>
            </div>
          </motion.article>;
        })}
      </div>
      <div className="mt-16 flex flex-col items-center text-center"><p className="mb-6 max-w-lg font-display text-3xl">Ready to begin with a considered conversation?</p><BookingCta/></div>
    </div>
  </section>;
}
