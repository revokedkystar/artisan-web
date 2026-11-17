import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Allura, Inter } from "next/font/google";
import "./globals.css";

// Elegant editorial serif for headings
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

// Handwritten accent, echoing the "Catering" script in the logo
const allura = Allura({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-allura",
});

// Clean sans for body copy and UI
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1c1814",
};

export const metadata: Metadata = {
  title: "Artisan Catering | Private Event Caterers South West & Devon",
  description:
    "Premium private event caterers serving the South West. Michelin-standard dining for weddings, parties, and corporate events in Devon by Jordan Hatfield.",
  keywords: [
    "event caterers south west",
    "private chef devon",
    "wedding catering south west",
    "artisan catering jordan hatfield",
    "hog roast devon",
    "pop-up events devon",
  ],
  authors: [{ name: "Joshua Hatfield" }],
  openGraph: {
    title: "Artisan Catering | Devon & the South West",
    description: "Devon's finest just got a whole lot finer. Bespoke catering for weddings, private dining and events.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} ${allura.variable}`}
    >
      <body className="antialiased">
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important;clip-path:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
