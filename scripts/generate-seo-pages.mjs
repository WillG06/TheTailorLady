import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const siteUrl = "https://willg06.github.io/TheTailorLady";
const routes = [
  {
    path: "/about",
    title: "About Your Bespoke Tailor Birmingham | The Tailor Lady",
    description:
      "Discover the craft philosophy behind The Tailor Lady, a modern bespoke tailor in Birmingham city centre.",
    ogTitle: "About The Tailor Lady | Birmingham Bespoke Tailoring",
    ogDescription:
      "A modern atelier built on proportion, personal expression and enduring craft.",
  },
  {
    path: "/services",
    title: "Made to Measure Suits Birmingham | The Tailor Lady",
    description:
      "Compare bespoke and made to measure suits in Birmingham, including wedding suits, dinner jackets and overcoats.",
    ogTitle: "Made to Measure Suits Birmingham | The Tailor Lady",
    ogDescription:
      "Bespoke and made to measure tailoring for weddings, work and evening wear.",
  },
  {
    path: "/alterations",
    title: "Suit & Wedding Dress Alterations Birmingham | The Tailor Lady",
    description:
      "Expert suit alterations, dress alterations and wedding dress alterations in Birmingham city centre.",
    ogTitle: "Suit & Wedding Dress Alterations Birmingham",
    ogDescription:
      "Precise alterations for suits, dresses and wedding gowns in Birmingham city centre.",
  },
  {
    path: "/gallery",
    title: "Bespoke Suit Gallery Birmingham | The Tailor Lady",
    description:
      "Explore bespoke suits, wedding tailoring, outerwear and fine fabrics created by a Birmingham city centre tailor.",
    ogTitle: "Bespoke Suit Gallery Birmingham | The Tailor Lady",
    ogDescription:
      "A considered gallery of bespoke and made to measure commissions in Birmingham.",
  },
  {
    path: "/contact",
    title: "Contact a Tailor Birmingham City Centre | The Tailor Lady",
    description:
      "Enquire about bespoke tailoring, made to measure suits and alterations with The Tailor Lady in Birmingham city centre.",
    ogTitle: "Contact The Tailor Lady | Birmingham City Centre",
    ogDescription:
      "Begin a conversation about bespoke tailoring, wedding suits or alterations in Birmingham.",
  },
  {
    path: "/faq",
    title: "Bespoke Tailoring FAQ Birmingham | The Tailor Lady",
    description:
      "Answers about bespoke tailoring, made to measure suits, appointments and alterations in Birmingham.",
    ogTitle: "Bespoke Tailoring FAQ Birmingham",
    ogDescription:
      "Answers to common questions about fittings, timelines, deposits and alterations.",
  },
  {
    path: "/privacy",
    title: "Privacy Policy | The Tailor Lady",
    description:
      "Privacy information for The Tailor Lady bespoke tailoring website.",
    ogTitle: "Privacy Policy | The Tailor Lady",
    ogDescription:
      "How The Tailor Lady handles website and enquiry information.",
  },
  {
    path: "/terms",
    title: "Terms & Conditions | The Tailor Lady",
    description:
      "Template terms for The Tailor Lady tailoring services in Birmingham.",
    ogTitle: "Terms & Conditions | The Tailor Lady",
    ogDescription:
      "Terms applying to tailoring enquiries, fittings and commissions.",
  },
  {
    path: "/cookies",
    title: "Cookie Policy | The Tailor Lady",
    description:
      "Cookie choices and analytics information for The Tailor Lady website.",
    ogTitle: "Cookie Policy | The Tailor Lady",
    ogDescription:
      "How this website uses essential and optional analytics cookies.",
  },
];

const template = await readFile(resolve("dist/index.html"), "utf8");

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function replaceMeta(html, attribute, key, value) {
  const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(
    `<meta\\s+${attribute}="${escapedKey}"\\s+content="[^"]*"\\s*\\/?>`,
  );
  if (!pattern.test(html)) {
    throw new Error(`Missing ${attribute} metadata: ${key}`);
  }
  return html.replace(
    pattern,
    `<meta ${attribute}="${key}" content="${escapeHtml(value)}" />`,
  );
}

for (const route of routes) {
  const url = `${siteUrl}${route.path}`;
  let html = template.replace(
    /<title>[^<]*<\/title>/,
    `<title>${escapeHtml(route.title)}</title>`,
  );
  html = replaceMeta(html, "name", "description", route.description);
  html = replaceMeta(html, "property", "og:title", route.ogTitle);
  html = replaceMeta(html, "property", "og:description", route.ogDescription);
  html = replaceMeta(html, "property", "og:url", url);
  html = replaceMeta(html, "name", "twitter:title", route.title);
  html = replaceMeta(html, "name", "twitter:description", route.description);
  html = html.replace(
    /<link rel="canonical" href="[^"]*"\s*\/>/,
    `<link rel="canonical" href="${url}" />`,
  );

  const outputPath = resolve("dist", route.path.slice(1), "index.html");
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, html);
}