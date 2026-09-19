# The Tailor Lady — Website Build Plan

## Direction
Build a multi-page, quiet-luxury website for a Birmingham city-centre bespoke tailor. Use a restrained charcoal, off-white, camel and soft blush palette, refined editorial serif headlines, geometric sans-serif body text, generous whitespace, and generated atelier photography inspired by the supplied references without embedding them.

## Pages and content
- **Home:** animated 0–100 loading curtain, full-bleed atelier hero, booking CTA, overlapping stats strip, asymmetric Popular Designs grid, testimonials, closing statement and footer.
- **Gallery:** editorial intro tile, category filters, asymmetric commission gallery, accessible lightbox, and three process-led commission case studies.
- **About:** founder/atelier hero, brand story, craft philosophy, four-step process, atelier imagery, optional clearly labelled placeholder press strip, and contact link.
- **Services:** made-to-measure versus bespoke comparison, starting-price and turnaround template, and deep links for wedding suits, two-piece suits, dinner jackets, overcoats and related gallery examples.
- **Alterations:** dedicated local-search page for suit, dress and wedding-dress alterations, process steps, template turnaround guidance, FAQ and enquiry links.
- **Contact:** distinctive enquiry form with occasion, budget, fabric preference and timeline fields; address, hours, phone, WhatsApp and social details shown as obvious template content until real details arrive. Form validation will be ready for a later Resend connection but will not pretend to send email now.
- **FAQ:** accessible accordion with tailoring, alterations, turnaround, payment and appointment questions.
- **Legal:** Privacy Policy, Terms & Conditions and Cookie Policy templates, plus a complete footer sitemap.

## Shared experience
- Fixed floating brand/menu pill and keyboard-accessible full-screen menu with staggered open/close animation.
- Calm scroll reveals, subtle image parallax, gentle card interaction and stacked section transitions, with reduced-motion fallbacks.
- Repeated “Book a Fitting” actions will route to the enquiry section rather than a booking calendar.
- GDPR consent banner with accept, reject and granular preference controls stored in the browser.
- Responsive, semantic layouts with visible focus states, sensible heading order, descriptive image alternatives and accessible dialogs/accordions.

## Images and performance
- Generate a cohesive set of editorial atelier, tailoring, fabric and finished-garment photographs.
- Prioritise the home hero; lazy-load supporting images and reserve their dimensions to prevent layout shift.
- No video will be added without suitable footage; the hero will use restrained motion on a generated still instead.

## SEO
- Give every route a unique keyword-led title, description, H1, Open Graph tags and Twitter card metadata.
- Add LocalBusiness/ProfessionalService structured data using clearly marked template business details until genuine details are supplied.
- Add contextual internal links across services, gallery, alterations, FAQ and contact.
- Preserve and update robots.txt. A production sitemap will be deferred until the site has a public domain, because no valid live URL exists yet.

## Technical details
- Use TanStack Start routes, React 19, Tailwind CSS v4 semantic tokens and Motion for React.
- Keep content in a central typed content module so future changes are straightforward; no CMS or admin panel is included by request.
- The enquiry form will validate in the browser and show a transparent “ready to connect” success state; Resend delivery is not included yet.
- GA4 will be prepared behind analytics consent, but no Measurement ID is available, so real analytics and conversion reporting remain disconnected until supplied.
- Real business claims, prices, press mentions, address, phone, email and opening hours will remain labelled template content and must be replaced before launch.

## Validation
- Check all routes at desktop and mobile sizes, menu, filters, lightbox, accordion, consent controls and enquiry validation.
- Confirm no overflow, overlap, inaccessible controls, runtime errors or build errors.
