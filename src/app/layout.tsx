import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { company } from "@/data/company";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.propropertycaresolutions.com"),
  title: { default: `${company.name} | Property Maintenance & Repair`, template: `%s | ${company.shortName}` },
  description: "Dependable residential and commercial property maintenance, repairs, turnovers, grounds care, and coordinated property solutions.",
  openGraph: { title: company.name, description: company.tagline, type: "website", locale: "en_US" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${inter.variable} ${manrope.variable}`}><a className="skip-link" href="#main">Skip to main content</a><Header/><main id="main">{children}</main><Footer/></body></html>;
}
