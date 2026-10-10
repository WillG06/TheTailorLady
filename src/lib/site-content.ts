import hero from "@/assets/hero.jpg";
import heroMobile from "@/assets/hero-mobile.jpg";
import suits from "@/assets/suits.jpg";
import scissors from "@/assets/scissors.jpg";
import fabric from "@/assets/fabric-detail.jpg";
import wedding from "@/assets/wedding-suit.jpg";
import twoPiece from "@/assets/two-piece-suit.jpg";
import dinner from "@/assets/dinner-jacket.jpg";
import overcoat from "@/assets/overcoat.jpg";
import bridalFitting from "@/assets/bridal-fitting.jpg";
import laceDetail from "@/assets/lace-detail.jpg";
import bridesmaidFitting from "@/assets/bridesmaid-fitting.jpg";
import brideBlur from "@/assets/brideBlur.jpg";
import footer from "@/assets/footer.jpg";
import veil from "@/assets/veil.jpg";
import bowBack from "@/assets/bowBack.jpg";
import mirror from "@/assets/mirror.webp";
import gall11 from "@/assets/gal11.webp";import gal12 from "@/assets/gal12.webp";
import gal18 from "@/assets/gal18.jpg";
import gal3 from "@/assets/gal3.webp";
import gal2 from "@/assets/gal2.webp";
import smile from "@/assets/brideSmile.webp";
import contact from "@/assets/getInTouch.webp";
import alterations from "@/assets/alterations.webp";


export const images = { hero, heroMobile, suits, scissors, fabric, wedding, twoPiece, 
  dinner, overcoat, bridalFitting, laceDetail, bridesmaidFitting, brideBlur, footer, veil, bowBack, mirror, gall11, gal12, gal18, gal3, gal2, smile, contact, alterations } 

export const navItems = [
  ["Home", "/"], ["Gallery", "/gallery"],
  ["Our Services", "/alterations"], ["About", "/about"],
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
  { id: "dresses-skirts", title: "Dresses & skirts", featured: false, groups: [{ title: "Alterations", items: [["Shorten hem — plain", "£15"], ["Shorten hem — lined", "£19"], ["Shorten hem — pleated", "£25"], ["Take in", "£36"], ["Shorten strap", "£23"]] }] },
  { id: "trousers-jeans", title: "Trousers & jeans", featured: false, groups: [{ title: "Alterations", items: [["Shorten — plain", "£15"], ["Shorten — vent, turn-up or lined", "£19"], ["Lengthen — plain", "£19"], ["Lengthen — false hem", "£19"], ["Waist take in", "£19"], ["Waist take out", "£19"], ["Full leg taper", "£23"], ["Shorten & taper", "£29"], ["New zip", "£19"]] }] },
  { id: "shirts", title: "Shirts", featured: false, groups: [{ title: "Alterations", items: [["Shorten — original finish", "£15"], ["Shorten sleeve with cuff", "£23"], ["Take in sides", "£19"], ["Repairs", "Please ask for a quote"]] }] },
  { id: "jackets-coats", title: "Jackets & coats", featured: false, groups: [{ title: "Alterations", items: [["Shorten sleeves — plain, unlined", "£17"], ["Shorten sleeves with vent", "£29"], ["Lengthen sleeves", "£39"], ["Shorten hem", "£48"], ["Take in sides", "£58"], ["Lift shoulder", "£33"], ["Lift shoulder & take in side seam", "£58"], ["Replace zip", "£29"]] }] },
  { id: "dry-cleaning", title: "Dry cleaning", featured: false, groups: [{ title: "Care", items: [["Trousers", "£9"], ["Jacket", "£10"], ["Two-piece suit", "£19"], ["Three-piece suit", "£22"], ["Shirt", "£5"], ["Medium coat", "£13"], ["Long coat", "£17"], ["Skirt", "£9"], ["Leather jacket", "£55"], ["Dress", "£25"], ["Wedding dress", "£95"], ["Feather jacket", "£34"], ["Gilet", "£15"], ["Feather gilet", "£23"]] }] },
] as const;
