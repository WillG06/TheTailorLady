import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/site-elements";
import { agencyDetails, businessDetails, legalLinks, navItems } from "@/lib/site-content";
// Adjust this path to wherever footer.jpg lives in your project.
import footerImage from "@/assets/footer.jpg";

const linkClass =
  "inline-block text-primary-foreground/80 transition-colors duration-300 hover:text-accent";

/**
 * Booking CTA + footer as ONE continuous surface.
 * - Outer wrapper matches the page background so the previous section flows in.
 * - The plum panel "rises" with the same asymmetric corners as the cards/images.
 * - The photo sits inside the panel (padded, rounded), not full-bleed.
 */
export function SiteFooter() {
  return (
    <footer className="bg-background px-3 pt-16 md:px-5 md:pt-24">
      <div className="relative overflow-hidden rounded-t-[40px] bg-ink text-primary-foreground md:rounded-tl-[56px] md:rounded-tr-[140px]">
        {/* CTA */}
        <div className="grid gap-10 p-5 md:p-10 lg:grid-cols-12 lg:gap-16 lg:p-14">
          <div className="relative aspect-[4/5] overflow-hidden rounded-tl-[28px] rounded-tr-[96px] rounded-br-[28px] rounded-bl-[96px] lg:col-span-6 lg:aspect-auto lg:min-h-[36rem]">
            <img
              src={footerImage}
              alt="Tailoring scissors resting on blush pink satin and camel wool in The Tailor Lady atelier"
              width={1200}
              height={1500}
              loading="lazy"
              className="absolute inset-0 size-full object-cover max-md:scale-[1.15] md:max-xl:scale-[1.25]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <p className="absolute bottom-7 right-8 text-right text-sm text-primary-foreground/85 md:bottom-9 md:right-10">
              Make it your day
            </p>
          </div>

          <div className="flex flex-col justify-between pb-6 lg:col-span-6 lg:pb-0 lg:pr-6">
            <div>
              <Eyebrow light>Your bridal fitting</Eyebrow>
              <h2 className="mt-5 font-display text-5xl leading-[.95] md:text-7xl">
                Bring the dress. We&rsquo;ll perfect the fit.
              </h2>
              <p className="mt-7 max-w-xl leading-8 text-primary-foreground/80">
                Tell us about your wedding dress, bridesmaid dress or alteration.
                We will advise on the work required and arrange an unhurried
                fitting.
              </p>
            </div>

            <div className="mt-9 lg:mt-0">
              <Button asChild variant="ivory" size="lg" className="self-start">
                <Link to="/contact">
                  Book a fitting <ArrowUpRight />
                </Link>
              </Button>

              <div className="mt-14 flex items-start gap-3 border-t border-white pt-7 text-primary-foreground/70">
                <MapPin className="mt-1 size-4 shrink-0 text-accent" aria-hidden="true" />
                <p className="text-sm leading-6">
                  {businessDetails.address}
                </p>
              </div>
            </div>
          </div>
        </div>

       

        {/* Footer */}
        <div className="grid gap-12 px-5 pb-10 pt-14 md:px-10 lg:grid-cols-12 lg:px-14 lg:pt-16">
          <div className="lg:col-span-5">
            <p className="font-display text-4xl leading-none">
              The Tailor Lady. <br /> <em className="text-accent">Bespoke tailoring and alterations.</em>
            </p>
            <p className="mt-5 max-w-sm text-sm leading-6 text-primary-foreground/70">
              Bespoke tailoring, made to measure and considered alterations,
              shaped around the person who will wear them.
            </p>
            <a
              href="#"
              aria-label="Instagram profile placeholder"
              className="mt-7 inline-flex min-h-11 items-center gap-2.5 rounded-full border border-accent/40 px-5 text-sm text-primary-foreground transition-colors duration-300 hover:border-accent hover:bg-accent/15"
            >
              <Instagram className="size-4" aria-hidden="true" />
              Instagram
            </a>
          </div>

          <nav aria-label="Footer navigation" className="lg:col-span-3">
            <h3 className="text-xs uppercase tracking-[.18em] text-accent">
              Explore
            </h3>
            <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 text-sm lg:grid-cols-1">
              {navItems.map(([label, to]) => (
                <li key={to}>
                  <Link to={to} className={linkClass}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <h3 className="text-xs uppercase tracking-[.18em] text-accent">
              Opening Hours
            </h3>
            <dl className="mt-6 grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 text-sm text-primary-foreground/80">
              {businessDetails.hours.map(([day, hours]) => (
                <div key={day} className="contents">
                  <dt className="text-primary-foreground/55">{day}</dt>
                  <dd>{hours}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 flex flex-col gap-2 text-sm">
              <a href={businessDetails.phoneHref} className={linkClass}>
                {businessDetails.phoneDisplay}
              </a>
              <a
                href={businessDetails.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className={linkClass}
              >
                WhatsApp
              </a>
              <a href={businessDetails.emailHref} className={linkClass}>
                {businessDetails.email}
              </a>
            </div>
          </div>
        </div>

        <aside
          aria-label={`Website designed by ${agencyDetails.name}`}
          className="agency-credit mx-0 mb-8 px-4 py-4 sm:mx-5 sm:px-5 sm:py-3 md:mx-10 lg:mx-14"
        >
          <div className="agency-credit__content">
            <div className="agency-credit__identity">
              <p className="agency-credit__eyebrow">Website designed by</p>
              <a
                href={agencyDetails.websiteHref}
                target="_blank"
                rel="noreferrer"
                className="agency-credit__wordmark"
              >
                {agencyDetails.name}
              </a>
            </div>
            <nav aria-label={`${agencyDetails.name} contact details`} className="agency-credit__links">
              <a href={agencyDetails.phoneHref} className="agency-credit__link">
                <Phone aria-hidden="true" />
                {agencyDetails.phoneDisplay}
              </a>
              <a href={agencyDetails.emailHref} className="agency-credit__link">
                <Mail aria-hidden="true" />
                {agencyDetails.email}
              </a>
              <a
                href={agencyDetails.websiteHref}
                target="_blank"
                rel="noreferrer"
                className="agency-credit__link agency-credit__link--website"
              >
                {agencyDetails.website}
                <ArrowUpRight aria-hidden="true" />
              </a>
            </nav>
          </div>
        </aside>

        <div className="flex flex-col gap-5 border-t border-white px-5 py-6 text-xs text-primary-foreground/50 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
          <p>
            © {new Date().getFullYear()} The Tailor Lady. {businessDetails.location}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-5">
            {legalLinks.map(([label, to]) => (
              <li key={to}>
                <Link to={to} className="transition-colors hover:text-accent">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={businessDetails.whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label={`Chat with The Tailor Lady on WhatsApp at ${businessDetails.whatsappDisplay}`}
      className="group fixed bottom-5 left-5 z-50 flex h-14 w-14 items-center overflow-hidden rounded-full bg-[#25D366] text-white shadow-lg transition-[width,transform] duration-300 hover:w-[13.5rem] hover:scale-[1.03] focus-visible:w-[13.5rem] motion-reduce:transition-none sm:bottom-7 sm:left-7"
    >
      <svg
        viewBox="0 0 24 24"
        className="ml-3.5 size-7 shrink-0"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.768.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.273.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.83 9.83 0 0 1-1.511-5.26c.001-5.45 4.437-9.884 9.889-9.884 2.64.001 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.946L.057 24l6.304-1.654a11.882 11.882 0 0 0 5.684 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"
        />
      </svg>
      <span className="ml-3 max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-[max-width,opacity] duration-300 group-hover:max-w-[10rem] group-hover:opacity-100 group-focus-visible:max-w-[10rem] group-focus-visible:opacity-100 motion-reduce:transition-none">
        {businessDetails.whatsappDisplay}
      </span>
    </a>
  );
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [manage, setManage] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    setVisible(!localStorage.getItem("ttl-cookie-choice"));
  }, []);

  const save = (choice: string) => {
    localStorage.setItem("ttl-cookie-choice", choice);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-4 left-4 right-4 z-[70] mx-auto max-w-2xl border border-border bg-background p-5 shadow-xl"
      role="dialog"
      aria-label="Cookie preferences"
    >
      <div className="flex items-start justify-between gap-5">
        <div>
          <p className="font-display text-2xl">Your privacy, tailored.</p>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Essential cookies keep the site working. Analytics will remain off
            unless you choose it.
          </p>
        </div>
      </div>
      {manage && (
        <label className="mt-4 flex min-h-11 items-center justify-between border-y border-border py-3 text-sm">
          Allow analytics
          <input
            type="checkbox"
            checked={analytics}
            onChange={(e) => setAnalytics(e.target.checked)}
            className="size-5 accent-[var(--accent)]"
          />
        </label>
      )}
      <div className="mt-4 flex flex-wrap gap-2">
        <Button
          variant="editorial"
          onClick={() => save(analytics ? "custom-analytics" : "accepted")}
        >
          {manage ? "Save preferences" : "Accept"}
        </Button>
        <Button variant="outline" onClick={() => save("rejected")}>
          Reject
        </Button>
        {!manage && (
          <Button variant="ghost" onClick={() => setManage(true)}>
            Manage
          </Button>
        )}
      </div>
    </div>
  );
}