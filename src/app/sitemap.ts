import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date("2026-07-30"),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projects.map((project) => ({
      url: `${siteConfig.url}/projects/${project.slug}`,
      lastModified: new Date("2026-07-30"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
