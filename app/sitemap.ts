import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://lisasilvaconsulting.com";
  return ["", "/about", "/services", "/agentairdirect", "/portfolio", "/contact"].map((path, index) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: index === 0 ? "weekly" as const : "monthly" as const,
    priority: index === 0 ? 1 : .8,
  }));
}
