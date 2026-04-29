import type { Metadata, Viewport } from "next";
import { Montserrat, Allura, Inter } from "next/font/google";
import "./globals.css";

// Configure Montserrat for headings and UI elements
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "500"],
  variable: "--font-montserrat",
});

// Configure Allura for that handwritten/artisan accent
const allura = Allura({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-allura",
});

// Configure Inter for body readability
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Artisan Catering | Private Event Caterers South West & Devon",
  description: "Premium private event caterers serving the South West. Michelin-standard dining for weddings, parties, and corporate events in Devon by Jordan Hatfield.",
  keywords: ["event caterers south west", "private chef devon", "wedding catering south west", "artisan catering jordan hatfield"],
  authors: [{ name: "Joshua Hatfield" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${montserrat.variable} ${allura.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}