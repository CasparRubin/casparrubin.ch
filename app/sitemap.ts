import type { MetadataRoute } from "next";

import { getSiteLastModified, SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: getSiteLastModified(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
