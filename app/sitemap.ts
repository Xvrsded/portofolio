import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://portfolio-mgi.vercel.app",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1
    }
  ];
}
