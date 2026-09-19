import hero from "@/assets/tailor-hero.jpg";
import fabric from "@/assets/fabric-detail.jpg";
import wedding from "@/assets/wedding-suit.jpg";
import twoPiece from "@/assets/two-piece-suit.jpg";
import dinner from "@/assets/dinner-jacket.jpg";
import overcoat from "@/assets/overcoat.jpg";

export const images = { hero, fabric, wedding, twoPiece, dinner, overcoat };

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
