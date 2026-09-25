# Tailor Lady Studio

Build a premium, minimal website for a bespoke tailor based in Birmingham city centre named 'The Tailor Lady'. 

Brand feel: Modern, minimal, professional, sleek — "minimal but bold." Quiet luxury: generous whitespace, one striking full-bleed photo per section, restrained typography, muted neutral palette (charcoal, cream, camel/tan, off-white) with a single accent colour. No stock-photo clichés — every section should feel considered.

Typography: A refined serif (e.g. Fraunces, Canela-style, or Playfair Display) for headlines paired with a clean geometric sans (e.g. Inter or Neue Montreal) for body text.

Loading screen (standout feature): On first load, show a dark full-screen preloader with a live percentage counter (0–100%) centred on screen. Once it hits 100%, the brand name appears split by a thin vertical hairline (e.g. "[Brand] | Tailors"). That hairline then splits apart and both halves of the screen slide outward (left half left, right half right) like opening curtains, revealing the hero section underneath as they move — the hero should already be visible peeking through the gap before the curtains fully clear.

Navigation: A minimal floating pill nav — logo left, single "Menu" pill button right, persistent across every section (it should sit fixed/floating over the content, never scroll away). Tapping it triggers a full-screen overlay menu: a solid or blurred-background panel that expands from the pill's position to fill the viewport, with nav links (Home, Gallery, About, Services, Alterations, Contact, FAQ) staggering in one-by-one with a slight vertical fade-and-slide, and a smooth reverse animation on close.

Showcase section transitions (standout feature): As the user scrolls, each major section should slide up and visually overlap the trailing edge of the section before it — a brief layered moment where the incoming section covers roughly 15–20% of the outgoing one before settling into its own full viewport position. Apply this specifically between: hero → stats bar, stats bar → popular designs intro, and between individual gallery/project cards in the showcase sections. This should feel like a stack of cards being drawn upward, not a plain scroll-past.

Pages:

Home

Full-bleed hero (tailor at work / fabric close-up / finished suit) with the loading curtain-reveal on entry. Use a looping brand video/cinemagraph in the hero if footage is available, not just a static photo

Bold serif headline + short subhead, single CTA ("Book a Fitting")

Stats bar overlapping up from the hero on scroll (e.g. "500+ Garments Tailored", "15 Years Craft", "100% Made to Measure", "98% Client Return Rate")

"Popular Designs" — asymmetric grid of cards (mixed large/small tiles) for signature pieces (Two-Piece Suit, Wedding Suit, Dinner Jacket, Overcoat), each revealing on scroll with the overlap transition, linking to Services/Gallery

Testimonials section with client photos and short quotes, placed just before a CTA block

Closing brand statement section + footer CTA

A secondary CTA ("Book a Fitting") repeated at each major scroll depth, not just in the hero

Gallery

Opens with a large "Atrium"-style intro tile (headline + short description + a "800+ Project Images" style stat chip)

Masonry/asymmetric image grid below, filterable by category (Suits, Shirts, Outerwear, Weddings, Fabrics)

Each filtered result set animates in with the same overlap/stack transition

Lightbox on click with smooth fade/scale transition

Include 2–3 "case study" style entries (a signature commission shown start-to-finish: consultation → fitting → finished garment) rather than just single finished-product shots

Gallery content should be manageable through a simple CMS so the client can add new commission photos without developer help

About

Full-bleed founder/atelier photo hero

The tailor's story, craftsmanship philosophy, process (consultation → measurement → fitting → finish) as a horizontal or stacked step sequence, each step revealing with scroll overlap

Team/atelier photos, closing link through to Contact

Press/media mentions or "as seen in" strip if applicable

Services

Made-to-measure vs bespoke explained side-by-side

Starting prices and turnaround times in a clean stat/table layout

Cards for each garment type linking to Gallery examples

Alterations

Own dedicated page with its own hero and H1, covering suit alterations and wedding dress alterations specifically

Process explanation (drop-off/measurement → pinning → fitting → collection) and turnaround times

Links to Contact and FAQ

Contact

Map embed (Birmingham city centre location)

Real appointment scheduling (embedded booking calendar synced to the tailor's availability), not just a static form

Pre-consultation intake questions built into the booking flow (occasion, budget range, fabric preference, timeline)

Optional deposit/payment collection at time of booking (Stripe) to reduce no-shows

Automated confirmation and reminder email/SMS on booking

Phone/WhatsApp/email links, opening hours, atelier address

FAQ

Accordion-style, smooth expand/collapse (fabric sourcing, alterations policy, turnaround times, payment/deposits, how measurements work, appointment policy)

Links through to Services and Contact

Editable through the CMS so the client can add new questions themselves

Legal pages — Privacy Policy, Terms & Conditions, Cookie Policy, plus a full footer sitemap-style link list to every main page.

Animations overall: Scroll-triggered fade/slide reveals (Framer Motion or similar), the curtain-split loading reveal, the overlapping section-stack transitions described above, subtle parallax on hero images, gentle hover scale/opacity shifts on cards and buttons. Calm and premium, never gimmicky.

Technical requirements:

React + Tailwind CSS + Framer Motion

Fully responsive, mobile-first

Fast load — compress/lazy-load images, defer non-critical JS, green Core Web Vitals

GDPR-compliant cookie consent banner (accept/reject/manage preferences)

Semantic HTML5, alt tags, proper heading hierarchy, ARIA labels

Full accessibility pass: keyboard navigation support, sufficient colour contrast ratios, screen-reader-friendly markup — not just alt text

A lightweight CMS or admin panel for the Gallery, Testimonials, and FAQ sections so the client can update content without a developer

GA4 analytics integrated with conversion tracking on the booking form specifically, not just pageview tracking

SEO requirements:

Target keywords worked naturally into titles, H1s, meta descriptions, URL slugs, body copy: "bespoke tailor Birmingham," "tailor Birmingham city centre," "made to measure suits Birmingham," "wedding suit tailor Birmingham," "suit alterations Birmingham," "dress alterations Birmingham," "wedding dress alterations Birmingham"

Unique meta title/description per page, primary keyword near the front

Clean URL slugs: /gallery, /about, /contact, /services, /alterations, /faq

Internal linking between all relevant pages (as noted per page above)

Descriptive, keyword-natural alt text on every image

JSON-LD schema in <head> using LocalBusiness + ClothingStore/ProfessionalService — name, address, phone, hours, price range, service list

sitemap.xml and robots.txt

H1 on every page containing the primary local keyword

Open Graph + Twitter card tags

Post-launch handover:

Build in a simple content-editing walkthrough (or note that one is needed) so the client can manage Gallery/Testimonials/FAQ independently after launch

Goal: built to realistically compete for and rank #1 for "bespoke tailor Birmingham" and related local search terms — strong on-page SEO and genuine page speed, not just design. The site should also be structured to actually convert visitors into booked consultations, not just look good. She wants to have sections that link to different parts on the services page eg wedding, etc etc.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/28501ba0-3609-4f28-8537-c440ae236030).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
