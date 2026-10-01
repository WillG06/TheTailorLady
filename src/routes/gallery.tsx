import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingCta, Eyebrow } from "@/components/site-elements";

const galleryAssets = import.meta.glob<string>(
	"/src/assets/{gal*,IMG_50*}.{jpg,webp}",
	{ eager: true, import: "default" },
);

const galleryAltText: Record<string, string> = {
	"gal1.jpg": "Bride wearing a strapless satin wedding gown in a bright paneled room",
	"gal2.webp": "Bride in a fitted lace wedding gown beside arched windows",
	"gal3.webp": "Bride and groom standing together in their wedding attire",
	"gal4.webp": "Bride in a full wedding gown on a marble staircase",
	"gal5.webp": "Bride wearing an off-the-shoulder gown in a bright studio",
	"gal6.webp": "Bride in a draped wedding gown beside tall windows",
	"gal7.webp": "Bride wearing a detailed lace wedding gown in a paneled room",
	"gal8.webp": "Bride in a minimalist satin column wedding dress",
	"gal9.webp": "Bride in a flowing wedding gown beside a bright window",
	"gal10.webp": "Bride in a full-skirted wedding gown beside arched windows",
	"gal11.webp": "Two bridesmaids wearing matching ivory lace dresses",
	"gal12.webp": "Bride showing the train of her gown in a paneled bridal studio",
	"gal13.webp": "Bride in a strapless full-skirted wedding gown against a paneled wall",
	"gal14.jpg": "Bride wearing a short lace wedding dress with a long train on a staircase",
	"gal15.jpg": "Bride modeling an ivory wedding gown in front of arched windows",
	"gal16.jpg": "Bride in a lace wedding gown with a full train against a paneled wall",
	"gal17.jpg": "Bride in a full lace wedding gown beside tall atelier windows",
	"gal18.jpg": "Bride modeling a wedding gown on a stone staircase",
	"IMG_5036.jpg": "Bride holding open the lace-edged veil of her full-skirted wedding dress",
	"IMG_5041.jpg": "Bride in a full lace wedding gown standing on a stone floor",
	"IMG_5043.jpg": "Bride in a voluminous wedding gown against a light paneled wall",
	"IMG_5045.jpg": "Bride wearing a fitted bodice and full tulle wedding skirt",
};

const imageRowSpans = [56, 72, 48, 84, 64, 92, 52, 76, 60, 88, 44];

const items = Object.entries(galleryAssets)
	.sort(([first], [second]) =>
		first.localeCompare(second, undefined, { numeric: true }),
	)
	.map(([path, image], index) => {
		const filename = path.split("/").pop() ?? `gallery-image-${index + 1}`;
		return {
			id: filename,
			image,
			alt: galleryAltText[filename] ?? "Wedding dress from The Tailor Lady gallery",
			rowSpan: imageRowSpans[index % imageRowSpans.length],
		};
	});

const alterationLinks = [
	{
		title: "Wedding dress alterations",
		description: "Hems, bodice adjustments, lace details and train finishing.",
		hash: "wedding-dress",
	},
	{
		title: "Bridesmaid dress alterations",
		description: "A comfortable, balanced fit for every member of the bridal party.",
		hash: "bridesmaid",
	},
	{
		title: "Dress and skirt alterations",
		description: "Thoughtful adjustments to length, straps and shape.",
		hash: "dresses-skirts",
	},
];

export const Route = createFileRoute("/gallery")({
	head: () => ({
		meta: [
			{ title: "Wedding Dress Alterations Gallery Birmingham | The Tailor Lady" },
			{
				name: "description",
				content:
					"Explore bridal and bridesmaid dress inspiration, then discover wedding dress alterations and fittings at The Tailor Lady in Birmingham city centre.",
			},
			{
				property: "og:title",
				content: "Wedding Dress Alterations Gallery Birmingham | The Tailor Lady",
			},
			{
				property: "og:description",
				content:
					"Bridal and bridesmaid dress inspiration, with wedding dress alterations in Birmingham city centre.",
			},
			{ property: "og:type", content: "website" },
			{ name: "twitter:card", content: "summary_large_image" },
		],
		links: [
			{
				rel: "canonical",
				href: "https://willg06.github.io/TheTailorLady/gallery",
			},
		],
	}),
	component: Gallery,
});

function Gallery() {
	const [active, setActive] = useState<(typeof items)[number] | null>(null);

	return (
		<>
			<header className="px-5 pb-10 pt-28 text-center md:px-10 md:pb-12 md:pt-36">
				<Eyebrow>Bridal alterations · Birmingham</Eyebrow>
				<h1 className="mt-3 font-display text-5xl leading-none md:text-7xl">
					Bridal style and fitting inspiration
				</h1>
				<p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-muted-foreground md:text-base">
					A selection of our recent bridal, bridesmaid and alteration work.
					Each piece is tailored with care, precision and attention to detail.
				</p>
				<span className="mt-5 inline-flex rounded-full border border-border px-4 py-1.5 text-xs text-muted-foreground">
					{items.length}+ photographs
				</span>
			</header>

			<section aria-label="Gallery photographs" className="w-full px-4 pb-12 sm:px-5 md:px-8 lg:px-10">
				<div className="grid w-full grid-cols-2 auto-rows-[4px] grid-flow-dense gap-2 sm:grid-cols-3 lg:grid-cols-5 lg:gap-3">
					{items.map((item, index) => (
						<motion.button
							key={item.id}
							type="button"
							aria-label={`View gallery image ${index + 1}`}
							onClick={() => setActive(item)}
							initial={{ opacity: 0, y: 32, scale: 0.96 }}
							whileInView={{ opacity: 1, y: 0, scale: 1 }}
							viewport={{ once: true, amount: 0.15 }}
							transition={{
								type: "spring",
								stiffness: 380,
								damping: 18,
								delay: (index % 5) * 0.035,
							}}
							style={{ gridRowEnd: `span ${item.rowSpan}` }}
							className="group relative block h-full min-w-0 overflow-hidden bg-secondary"
						>
							<img
								src={item.image}
								alt={item.alt}
								loading="lazy"
								className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
							/>
						</motion.button>
					))}
				</div>
			</section>

			<section className="bg-background px-6 py-16 sm:px-8 md:px-12 md:py-24 xl:px-16">
				<div className="grid w-full gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-16">
					<div>
						<Eyebrow>Wedding dress alterations · Birmingham</Eyebrow>
						<h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
							A considered fit, from first pin to final hem.
						</h2>
						<p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
							Use the gallery for bridal style inspiration. At our Birmingham city-centre atelier,
							wedding dress and bridesmaid alterations are planned around each gown, from hem and
							bodice adjustments to delicate lace and train finishing.
						</p>
						<div className="mt-8 flex flex-wrap gap-3">
							<BookingCta />
							<Button asChild variant="outline">
								<Link to="/alterations" hash="prices">View alteration prices</Link>
							</Button>
						</div>
					</div>
					<nav aria-label="Explore alteration services">
						<ul className="divide-y divide-border border-y border-border">
							{alterationLinks.map((item) => (
								<li key={item.hash}>
									<Link
										to="/alterations"
										hash={item.hash}
										className="group flex items-center justify-between gap-5 py-5"
									>
										<span>
											<span className="block font-display text-2xl">{item.title}</span>
											<span className="mt-1 block text-sm leading-6 text-muted-foreground">
												{item.description}
											</span>
										</span>
										<ArrowUpRight className="size-5 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</section>

			<AnimatePresence>
				{active && (
					<motion.div
						className="fixed inset-0 z-[80] grid place-items-center bg-ink/95 p-5"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						role="dialog"
						aria-modal="true"
						aria-label="Gallery image"
						onClick={() => setActive(null)}
					>
						<Button
							variant="ivory"
							size="icon"
							className="absolute right-5 top-5 min-h-11 min-w-11 rounded-full"
							aria-label="Close image"
						>
							<X />
						</Button>
						<motion.figure
							initial={{ scale: 0.94 }}
							animate={{ scale: 1 }}
							onClick={(event) => event.stopPropagation()}
							className="max-h-[88dvh] max-w-5xl"
						>
							<img
								src={active.image}
								alt={active.alt}
								className="max-h-[78dvh] w-auto object-contain"
							/>
						</motion.figure>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
