import type { MetadataRoute } from "next";

import { BRAND_COLOR, getManifestDescription, SITE_NAME } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "Caspar Rubin",
    description: getManifestDescription(),
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: BRAND_COLOR,
  };
}
