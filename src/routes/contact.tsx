import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";
import { type ChangeEvent, type FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/site-elements";
import { businessDetails } from "@/lib/site-content";
import contactImage from "@/assets/getInTouch.webp";

type ContactFormState = {
  name: string;
  email: string;
  service: string;
  occasion: string;
  eventDate: string;
  budget: string;
  message: string;
  consent: boolean;
};

const initialForm: ContactFormState = {
  name: "",
  email: "",
  service: "",
  occasion: "",
  eventDate: "",
  budget: "",
  message: "",
  consent: false,
};

const fieldClass =
  "min-h-12 w-full border-0 border-b border-border bg-transparent px-0 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_MESSAGE = 1200;
const MAX_NAME = 100;
const MAX_EMAIL = 255;
const MAX_EVENT = 80;

const sanitizeText = (value: string, maxLength: number) =>
  String(value ?? "")
    .replace(/[\u0000-\u001F\u007F]/g, "")
    .replace(/[<>]/g, "")
    .replace(/\s{2,}/g, " ")
    .trim()
    .slice(0, maxLength);

const hasPromptInjectionRisk = (value: string) =>
  /ignore\s+(?:previous|all)|system\s+prompt|developer\s+prompt|<script|javascript:|onerror=|onload=|prompt\s+injection/i.test(
    value,
  );

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
  const [form, setForm] = useState<ContactFormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusText, setStatusText] = useState("");

  const updateField = (field: keyof ContactFormState, value: string | boolean) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    if (status !== "idle") {
      setStatus("idle");
      setStatusText("");
    }
  };

  const validate = (values: ContactFormState) => {
    const nextErrors: Partial<Record<keyof ContactFormState, string>> = {};

    if (values.name.trim().length < 2) {
      nextErrors.name = "Please add your name.";
    }

    if (!EMAIL_RE.test(values.email.trim())) {
      nextErrors.email = "Please provide a valid email address.";
    }

    if (!values.service.trim()) {
      nextErrors.service = "Please choose the service you need.";
    }

    if (!values.occasion.trim()) {
      nextErrors.occasion = "Please tell us the occasion.";
    }

    if (values.message.trim().length < 20) {
      nextErrors.message = "Please add a little more detail so we can advise properly.";
    }

    if (values.message.trim().length > MAX_MESSAGE) {
      nextErrors.message = `Please keep your enquiry to ${MAX_MESSAGE} characters or fewer.`;
    }

    if (values.eventDate.trim().length > MAX_EVENT) {
      nextErrors.eventDate = "Please keep the date field concise.";
    }

    if (hasPromptInjectionRisk(values.message) || hasPromptInjectionRisk(values.name)) {
      nextErrors.message = "Please keep the message free of scripting or instruction text.";
    }

    if (!values.consent) {
      nextErrors.consent = "Please confirm your consent before sending.";
    }

    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const sanitizedForm: ContactFormState = {
      name: sanitizeText(form.name, MAX_NAME),
      email: sanitizeText(form.email, MAX_EMAIL),
      service: sanitizeText(form.service, 80),
      occasion: sanitizeText(form.occasion, 80),
      eventDate: sanitizeText(form.eventDate, MAX_EVENT),
      budget: sanitizeText(form.budget, 60),
      message: sanitizeText(form.message, MAX_MESSAGE),
      consent: form.consent,
    };

    const nextErrors = validate(sanitizedForm);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("error");
      setStatusText("Please review the highlighted fields and try again.");
      return;
    }

    const body = [
      `Name: ${sanitizedForm.name}`,
      `Email: ${sanitizedForm.email}`,
      `Service: ${sanitizedForm.service}`,
      `Occasion: ${sanitizedForm.occasion}`,
      `Event date: ${sanitizedForm.eventDate || "Not supplied"}`,
      `Budget: ${sanitizedForm.budget || "Not supplied"}`,
      "",
      "Enquiry:",
      sanitizedForm.message,
      "",
      "Consent: yes",
    ].join("\n");

    const subject = `Enquiry from ${sanitizedForm.name}`;
    const mailto = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setErrors({});
    setStatus("success");
    setStatusText(
      "Your enquiry is ready to send. Your mail app should open with a pre-filled draft.",
    );

    if (typeof window !== "undefined") {
      window.location.href = mailto;
    }
  };

  const onChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = event.target;

    if (type === "checkbox") {
      updateField(name as keyof ContactFormState, (event.target as HTMLInputElement).checked);
      return;
    }

    updateField(name as keyof ContactFormState, value);
  };

  return (
    <section className="min-h-dvh bg-background px-5 pb-24 pt-28 md:px-10 md:pt-36">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-12">
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

          <div className="rounded-[28px] border border-border bg-card p-5 shadow-[0_15px_40px_rgba(15,14,13,0.04)] md:p-8">
            <div className="mb-8 flex items-center justify-between gap-4 border-b border-border pb-4">
              <div>
                <Eyebrow>Tell us about the piece</Eyebrow>
                <h2 className="mt-3 font-display text-4xl md:text-5xl">Your enquiry.</h2>
              </div>
              <div className="rounded-full border border-accent/30 bg-accent/10 p-2 text-accent">
                <Sparkles className="size-5" aria-hidden="true" />
              </div>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-6" aria-describedby="contact-form-status">
              <div className="grid gap-6 md:grid-cols-2">
                <label className="block text-xs font-medium uppercase tracking-[.16em] text-muted-foreground">
                  Name
                  <input
                    name="name"
                    type="text"
                    maxLength={MAX_NAME}
                    value={form.name}
                    onChange={onChange}
                    className={fieldClass}
                    placeholder="Your name"
                    aria-invalid={Boolean(errors.name)}
                  />
                  {errors.name && <span className="mt-2 block text-xs text-destructive">{errors.name}</span>}
                </label>

                <label className="block text-xs font-medium uppercase tracking-[.16em] text-muted-foreground">
                  Email
                  <input
                    name="email"
                    type="email"
                    maxLength={MAX_EMAIL}
                    value={form.email}
                    onChange={onChange}
                    className={fieldClass}
                    placeholder="you@example.com"
                    aria-invalid={Boolean(errors.email)}
                  />
                  {errors.email && <span className="mt-2 block text-xs text-destructive">{errors.email}</span>}
                </label>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <label className="block text-xs font-medium uppercase tracking-[.16em] text-muted-foreground">
                  Service
                  <select
                    name="service"
                    value={form.service}
                    onChange={onChange}
                    className={fieldClass}
                    aria-invalid={Boolean(errors.service)}
                  >
                    <option value="">Select one</option>
                    <option value="Wedding dress alterations">Wedding dress alterations</option>
                    <option value="Bridesmaid dress alterations">Bridesmaid dress alterations</option>
                    <option value="Bespoke tailoring">Bespoke tailoring</option>
                    <option value="Made to measure">Made to measure</option>
                    <option value="General alterations">General alterations</option>
                    <option value="Dry cleaning">Dry cleaning</option>
                  </select>
                  {errors.service && <span className="mt-2 block text-xs text-destructive">{errors.service}</span>}
                </label>

                <label className="block text-xs font-medium uppercase tracking-[.16em] text-muted-foreground">
                  Occasion
                  <select
                    name="occasion"
                    value={form.occasion}
                    onChange={onChange}
                    className={fieldClass}
                    aria-invalid={Boolean(errors.occasion)}
                  >
                    <option value="">Select one</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Bridesmaid / bridal party">Bridesmaid / bridal party</option>
                    <option value="Evening wear">Evening wear</option>
                    <option value="Workwear">Workwear</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.occasion && <span className="mt-2 block text-xs text-destructive">{errors.occasion}</span>}
                </label>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <label className="block text-xs font-medium uppercase tracking-[.16em] text-muted-foreground">
                  Event date
                  <input
                    name="eventDate"
                    type="text"
                    maxLength={MAX_EVENT}
                    value={form.eventDate}
                    onChange={onChange}
                    className={fieldClass}
                    placeholder="Wedding date or ideal timing"
                    aria-invalid={Boolean(errors.eventDate)}
                  />
                  {errors.eventDate && <span className="mt-2 block text-xs text-destructive">{errors.eventDate}</span>}
                </label>

                <label className="block text-xs font-medium uppercase tracking-[.16em] text-muted-foreground">
                  Budget
                  <select name="budget" value={form.budget} onChange={onChange} className={fieldClass}>
                    <option value="">Select one</option>
                    <option value="Under £500">Under £500</option>
                    <option value="£500–£1,000">£500–£1,000</option>
                    <option value="£1,000–£2,500">£1,000–£2,500</option>
                    <option value="£2,500+">£2,500+</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </label>
              </div>

              <label className="block text-xs font-medium uppercase tracking-[.16em] text-muted-foreground">
                Tell us about the garment
                <textarea
                  name="message"
                  rows={6}
                  maxLength={MAX_MESSAGE}
                  value={form.message}
                  onChange={onChange}
                  className={`${fieldClass} resize-none border border-border px-3 py-3`}
                  placeholder="Share the garment, fit concerns, any fabric details and the look you want to achieve."
                  aria-invalid={Boolean(errors.message)}
                />
                {errors.message && <span className="mt-2 block text-xs text-destructive">{errors.message}</span>}
              </label>

              <label className="flex items-start gap-3 text-sm leading-6 text-muted-foreground">
                <input
                  type="checkbox"
                  name="consent"
                  checked={form.consent}
                  onChange={onChange}
                  className="mt-1 size-5 accent-[var(--accent)]"
                  aria-invalid={Boolean(errors.consent)}
                />
                <span>
                  I consent to The Tailor Lady using my details only to respond to this enquiry, and I understand this information is not used for any automated AI processing or marketing without my explicit permission. See the <Link to="/privacy" className="underline underline-offset-4 hover:text-accent">Privacy Policy</Link>.
                </span>
              </label>
              {errors.consent && <p className="-mt-2 text-xs text-destructive">{errors.consent}</p>}

              <div id="contact-form-status" aria-live="polite">
                {status !== "idle" && (
                  <p
                    className={
                      status === "success"
                        ? "mt-2 text-sm text-foreground"
                        : "mt-2 text-sm text-destructive"
                    }
                  >
                    {statusText}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-3 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs uppercase tracking-[.16em] text-muted-foreground">
                  Birmingham city centre
                </p>
                <Button type="submit" variant="editorial" size="lg" className="self-start">
                  Send enquiry
                  <ArrowUpRight aria-hidden="true" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
