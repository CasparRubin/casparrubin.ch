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
  title: "Caspar Camille Rubin — Full Stack Enterprise System Engineer",
  description:
    "Software Engineer at ETH Zürich specializing in process automation with enterprise-grade Microsoft and Azure services.",
  keywords: [
    "Caspar Camille Rubin",
    "Full Stack Engineer",
    "Enterprise Software Engineer",
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
  openGraph: {
    title: "Caspar Camille Rubin — Full Stack Enterprise System Engineer",
    description:
      "Software Engineer at ETH Zürich specializing in process automation with enterprise-grade Microsoft and Azure services.",
    url: "https://casparrubin.ch",
    siteName: "Caspar Camille Rubin",
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Caspar Camille Rubin — Full Stack Enterprise System Engineer",
    description:
      "Software Engineer at ETH Zürich specializing in process automation with enterprise-grade Microsoft and Azure services.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Caspar Camille Rubin",
  jobTitle: "Full Stack Enterprise System Engineer",
  worksFor: { "@type": "Organization", name: "ETH Zürich" },
  url: "https://casparrubin.ch",
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
