import type { Metadata } from "next";
import { Manrope, Newsreader } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import ScrollOrchestrator from "@/components/scroll-orchestrator";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const newsreader = Newsreader({ subsets: ["latin"], variable: "--font-newsreader", display: "swap", style: ["normal", "italic"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://lisasilvaconsulting.com"),
  title: { default: "Lisa Silva Consulting | Clarity Systems for Businesses", template: "%s | Lisa Silva Consulting" },
  description: "Lisa Silva helps businesses clarify operations, workflows, information, customer experiences, and how AI describes their brand.",
  keywords: ["business systems consultant", "AI clarity consulting", "operational consulting", "workflow consulting", "Signal Audit", "AgentAirDirect"],
  authors: [{ name: "Lisa Silva" }],
  creator: "Lisa Silva",
  openGraph: { title: "Lisa Silva Consulting", description: "Practical clarity systems for businesses.", type: "website", locale: "en_US", siteName: "Lisa Silva Consulting", url: "/" },
  twitter: { card: "summary_large_image", title: "Lisa Silva Consulting", description: "Practical clarity systems for businesses." },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Lisa Silva Consulting",
    url: "https://lisasilvaconsulting.com",
    founder: { "@type": "Person", name: "Lisa Silva", jobTitle: "Business Systems Consultant" },
    description: "Clarity systems for AI visibility, operations, workflows, documentation, customer experiences, products, and environments.",
    areaServed: "United States",
  };
  return <html lang="en"><body className={`${manrope.variable} ${newsreader.variable} antialiased`}><a href="#main-content" className="skip-link">Skip to main content</a><SiteHeader /><ScrollOrchestrator /><main id="main-content">{children}</main><SiteFooter /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></body></html>;
}
