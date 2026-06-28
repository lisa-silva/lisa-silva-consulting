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
  openGraph: { title: "Lisa Silva Consulting", description: "Practical clarity systems for businesses.", type: "website", locale: "en_US" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${manrope.variable} ${newsreader.variable} antialiased`}><SiteHeader /><ScrollOrchestrator /><main>{children}</main><SiteFooter /></body></html>;
}
