import type { MetadataRoute } from "next";
import { collections } from "@/lib/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ralf-faber.vercel.app";

  const collectionPages: MetadataRoute.Sitemap =
    collections.map((collection) => ({
      url: `${baseUrl}/collection/${collection.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...collectionPages,
  ];
}