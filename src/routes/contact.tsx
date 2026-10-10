import { createFileRoute } from "@tanstack/react-router";
import {
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { ContactEnquiryForm } from "@/components/contact-enquiry-form";
import { Eyebrow } from "@/components/site-elements";
import { businessDetails } from "@/lib/site-content";
import contactImage from "@/assets/getInTouch.webp";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact a Tailor Birmingham City Centre | The Tailor Lady" },
      {
        name: "description",
        content:
          "Enquire about bespoke tailoring, made to measure suits and alterations with The Tailor Lady in Birmingham city centre.",
      },
      {
        property: "og:title",
        content: "Contact The Tailor Lady | Birmingham City Centre",
      },
      {
        property: "og:description",
        content:
          "Begin a conversation about bespoke tailoring, wedding suits or alterations in Birmingham.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://willg06.github.io/TheTailorLady/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <section className="min-h-dvh bg-background px-5 pb-24 pt-28 md:px-10 md:pt-36">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch lg:gap-12">
          <div className="space-y-6">
            <div className="overflow-hidden rounded-[28px] bg-ink shadow-[0_10px_40px_rgba(16,11,9,0.12)]">
              <img
                src={contactImage}
                alt="Bride adjusting a wedding dress in the atelier"
                width={1200}
                height={1500}
                className="h-[18rem] w-full object-cover md:h-[22rem] lg:h-[34rem]"
              />
            </div>

            <div className="rounded-[28px] border border-border bg-card p-6 md:p-7">
              <Eyebrow>Appointments</Eyebrow>
              <h1 className="mt-4 font-display text-5xl leading-[0.94] md:text-6xl">
                Begin your fitting.
              </h1>
              <p className="mt-4 max-w-md leading-7 text-muted-foreground">
                Share the garment, the occasion and the finish you want. We will review the brief and recommend the appropriate service or fitting plan.
              </p>

              <div className="mt-8 space-y-5 text-sm text-muted-foreground">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-4 text-accent" aria-hidden="true" />
                  <span>
                    {businessDetails.location}
                    <br />
                    Full atelier address to be confirmed
                  </span>
                </div>

                <a
                  href={businessDetails.phoneHref}
                  className="flex items-center gap-3 text-foreground transition-colors hover:text-accent"
                >
                  <Phone className="size-4 text-accent" aria-hidden="true" />
                  {businessDetails.phoneDisplay}
                </a>

                <a
                  href={businessDetails.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-foreground transition-colors hover:text-accent"
                >
                  <MessageCircle className="size-4 text-accent" aria-hidden="true" />
                  WhatsApp
                </a>

                <div className="flex items-center gap-3 text-foreground">
                  <Mail className="size-4 text-accent" aria-hidden="true" />
                  Email address to be confirmed
                </div>
              </div>
            </div>
          </div>

          <ContactEnquiryForm />
        </div>
      </div>
    </section>
  );
}
