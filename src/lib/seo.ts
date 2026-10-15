export const siteUrl = "https://thetailorlady.co.uk";
export const ogImageUrl = `${siteUrl}/og-image.jpg`;

export function canonicalUrl(path: string) {
  return `${siteUrl}${path}`;
}