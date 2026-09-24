import hero from "@/assets/tailor-hero.jpg";
import fabric from "@/assets/fabric-detail.jpg";
import wedding from "@/assets/wedding-suit.jpg";
import twoPiece from "@/assets/two-piece-suit.jpg";
import dinner from "@/assets/dinner-jacket.jpg";
import overcoat from "@/assets/overcoat.jpg";
import bridalFitting from "@/assets/bridal-fitting.jpg";
import laceDetail from "@/assets/lace-detail.jpg";
import bridesmaidFitting from "@/assets/bridesmaid-fitting.jpg";

export const images = { hero, fabric, wedding, twoPiece, dinner, overcoat, bridalFitting, laceDetail, bridesmaidFitting };

export const navItems = [
  ["Home", "/"], ["Gallery", "/gallery"], ["About", "/about"],
  ["Services", "/services"], ["Alterations", "/alterations"],
  ["Contact", "/contact"], ["FAQ", "/faq"],
] as const;

export const services = [
  { id: "two-piece", title: "Two-Piece Suit", note: "Balanced, exacting and made for repeat wear.", image: twoPiece, alt: "Charcoal made to measure two-piece suit in a Birmingham tailoring atelier" },
  { id: "wedding", title: "Wedding Suit", note: "A considered silhouette for a singular day.", image: wedding, alt: "Ivory bespoke wedding suit displayed in a Birmingham city centre atelier" },
  { id: "dinner", title: "Dinner Jacket", note: "Clean evening lines, finished by hand.", image: dinner, alt: "Black bespoke dinner jacket beside blush silk in a tailoring studio" },
  { id: "overcoat", title: "Overcoat", note: "Architectural warmth cut to your proportions.", image: overcoat, alt: "Camel made to measure overcoat on a tailor's mannequin" },
] as const;

export const faqs = [
  ["How long does a bespoke commission take?", "As a template guide, allow 8–12 weeks for a full bespoke commission and several fittings. Confirm current lead times when enquiring."],
  ["Do you offer made to measure suits in Birmingham?", "Yes. Made to measure is ideal when you want a personal fit and cloth choice with a more streamlined process than full bespoke."],
  ["Can you alter wedding dresses?", "Wedding dress alterations are planned around the gown, construction and wedding date. Early enquiries are recommended, especially in peak season."],
  ["What happens at the first fitting?", "We discuss the occasion, style and budget, then take measurements and study posture and proportion before advising on cloth and construction."],
  ["Is a deposit required?", "Deposit terms will be confirmed with your quotation. This template does not currently take online payment."],
  ["Where are appointments held?", "Appointments will be held at the Birmingham city centre atelier. The precise address will be added before launch."],
] as const;

export const legalLinks = [["Privacy", "/privacy"], ["Terms", "/terms"], ["Cookies", "/cookies"]] as const;

export const businessDetails = {
  location: "Birmingham city centre",
  phoneDisplay: "07342 477032",
  phoneHref: "tel:+447342477032",
  whatsappHref: "https://wa.me/447342477032",
  hours: [
    ["Monday–Friday", "10:00am–6:30pm"],
    ["Saturday", "10:00am–5:00pm"],
    ["Sunday", "Closed"],
  ],
} as const;

export const alterationPrices = [
  {
    id: "wedding-dress",
    title: "Wedding dress alterations",
    featured: true,
    groups: [
      { title: "Hem", items: [["Slim hem", "£84"], ["Standard hem", "£120"], ["Layered hem", "£120"], ["Ballgown style", "£140"], ["Lace hem", "£140"]] },
      { title: "Bodice", items: [["Plain side seams", "£90"], ["Side seams with lace or beadwork", "£100"], ["Standard shoulders — taking up", "£40"], ["Shoulders with sleeve or dart adjustments", "£60"], ["String straps", "£30"], ["Change zip back to corset", "£85"], ["Make new panel", "£25"]] },
      { title: "Skirt & finishing", items: [["Letting out — plain", "£70"], ["Letting out — laced or beaded", "£70"], ["Take in over hip or thigh — plain", "£70"], ["Take in over hip or thigh — laced or beaded", "£70"], ["Bust pads", "£20"], ["Bridal belt", "£30"], ["Larger skirt with multiple bustles", "£20"], ["Standard train bustle", "£15"], ["Change or add train ribbon", "£10"]] },
    ],
  },
  { id: "bridesmaid", title: "Bridesmaid dresses", featured: true, groups: [{ title: "Alterations", items: [["Standard hem", "£35"], ["Layered hem", "£40"], ["Standard side seams — take in or let out", "£40"], ["Standard shoulders — taking up", "£30"]] }] },
  { id: "dresses-skirts", title: "Dresses & skirts", featured: false, groups: [{ title: "Alterations", items: [["Shorten hem — plain", "£14.99"], ["Shorten hem — lined", "£18.99"], ["Shorten hem — pleated", "£24.99"], ["Take in", "£35.99"], ["Shorten strap", "£22.99"]] }] },
  { id: "trousers-jeans", title: "Trousers & jeans", featured: false, groups: [{ title: "Alterations", items: [["Shorten — plain", "£14.99"], ["Shorten — vent, turn-up or lined", "£18.99"], ["Lengthen — plain", "£18.99"], ["Lengthen — false hem", "£18.99"], ["Waist take in", "£18.99"], ["Waist take out", "£18.90"], ["Full leg taper", "£22.99"], ["Shorten & taper", "£28.99"], ["New zip", "£18.99"]] }] },
  { id: "shirts", title: "Shirts", featured: false, groups: [{ title: "Alterations", items: [["Shorten — original finish", "£14.99"], ["Shorten sleeve with cuff", "£22.99"], ["Take in sides", "£18.99"], ["Repairs", "Please ask for a quote"]] }] },
  { id: "jackets-coats", title: "Jackets & coats", featured: false, groups: [{ title: "Alterations", items: [["Shorten sleeves — plain, unlined", "£16.99"], ["Shorten sleeves with vent", "£28.99"], ["Lengthen sleeves", "£38.99"], ["Shorten hem", "£48"], ["Take in sides", "£58"], ["Lift shoulder", "£33"], ["Lift shoulder & take in side seam", "£58"], ["Replace zip", "£28.99"]] }] },
  { id: "dry-cleaning", title: "Dry cleaning", featured: false, groups: [{ title: "Care", items: [["Trousers", "£8.99"], ["Jacket", "£9.99"], ["Two-piece suit", "£18.99"], ["Three-piece suit", "£21.99"], ["Shirt", "£4.99"], ["Medium coat", "£12.99"], ["Long coat", "£16.99"], ["Skirt", "£8.99"], ["Leather jacket", "£54.99"], ["Dress", "£24.99"], ["Wedding dress", "£95"], ["Feather jacket", "£34"], ["Gilet", "£14.99"], ["Feather gilet", "£22.99"]] }] },
] as const;
