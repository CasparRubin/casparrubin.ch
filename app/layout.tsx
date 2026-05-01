import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://casparrubin.ch"),
  applicationName: "Caspar Camille Rubin",
  title: "Caspar Camille Rubin, Full-Stack Software Engineer",
  description:
    "Software engineer at ETH Zurich building Microsoft and Azure tools that automate internal workflows.",
  keywords: [
    "Caspar Camille Rubin",
    "Full Stack Engineer",
    "Software Engineer",
    "Workflow Automation",
    "ETH Zürich",
    "Azure",
    "Next.js",
    "Microsoft",
    "Power Platform",
    "Dataverse",
    "SharePoint",
    "Process Automation",
  ],
  authors: [{ name: "Caspar Camille Rubin", url: "https://casparrubin.ch" }],
  creator: "Caspar Camille Rubin",
  publisher: "Caspar Camille Rubin",
  alternates: { canonical: "https://casparrubin.ch" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Caspar Camille Rubin, Full-Stack Software Engineer",
    description:
      "Software engineer at ETH Zurich building Microsoft and Azure tools that automate internal workflows.",
    url: "https://casparrubin.ch",
    siteName: "Caspar Camille Rubin",
    locale: "en_US",
    type: "profile",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Caspar Camille Rubin, Full-Stack Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Caspar Camille Rubin, Full-Stack Software Engineer",
    description:
      "Software engineer at ETH Zurich building Microsoft and Azure tools that automate internal workflows.",
    images: ["/opengraph-image.png"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Caspar Camille Rubin",
  jobTitle: "Full-Stack Software Engineer",
  description:
    "Software engineer at ETH Zurich building Microsoft and Azure tools that automate internal workflows.",
  worksFor: { "@type": "Organization", name: "ETH Zürich" },
  url: "https://casparrubin.ch",
  image: "https://casparrubin.ch/caspar/casparCamilleRubin_1200x1600px_8.webp",
  sameAs: [
    "https://github.com/CasparRubin",
    "https://www.linkedin.com/in/caspar-camille-rubin",
    "https://helvety.com",
  ],
  knowsAbout: [
    "Azure",
    "Next.js",
    "Dataverse",
    "SharePoint",
    "Power Automate",
    "Power Apps",
    "Dynamics 365",
    "AI Foundry",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Basel",
    addressCountry: "CH",
  },
};

const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Caspar Camille Rubin",
    jobTitle: "Full-Stack Software Engineer",
    description:
      "Software engineer at ETH Zurich building Microsoft and Azure tools that automate internal workflows.",
    url: "https://casparrubin.ch",
    image:
      "https://casparrubin.ch/caspar/casparCamilleRubin_1200x1600px_8.webp",
    sameAs: [
      "https://github.com/CasparRubin",
      "https://www.linkedin.com/in/caspar-camille-rubin",
      "https://helvety.com",
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [personJsonLd, profilePageJsonLd],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {process.env.NODE_ENV === "development" && (
          <Script
            src="https://unpkg.com/react-scan/dist/auto.global.js"
            strategy="beforeInteractive"
          />
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TooltipProvider>
            <Navbar />
            <main className="mx-auto max-w-[1600px] px-4">{children}</main>
          </TooltipProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
