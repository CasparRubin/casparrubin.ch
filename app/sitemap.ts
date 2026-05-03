import type { MetadataRoute } from "next";

const DEFAULT_LAST_MODIFIED = "2026-05-01T00:00:00.000Z";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(
    process.env.NEXT_PUBLIC_SITE_LAST_MODIFIED ?? DEFAULT_LAST_MODIFIED
  );

  return [
    {
      url: "https://casparrubin.ch",
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
