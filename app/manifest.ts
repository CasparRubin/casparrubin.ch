import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Caspar Camille Rubin",
    short_name: "Caspar Rubin",
    description:
      "Software Engineer at ETH Zürich specializing in process automation with enterprise-grade Microsoft and Azure services.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ec003f",
  };
}
