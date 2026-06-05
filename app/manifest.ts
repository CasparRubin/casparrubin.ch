import type { MetadataRoute } from "next";

import { getManifestDescription, SITE_NAME } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "Caspar Rubin",
    description: getManifestDescription(),
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ec003f",
  };
}
