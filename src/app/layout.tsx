import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-cormorant",
  preload: true,
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
  variable: "--font-dm-sans",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "Prana Studio Bremen | Yoga & Meditation im Herzen Bremens",
    template: "%s | Prana Studio Bremen",
  },
  description:
    "Erlebe transformative Yoga-Klassen in Bremen-Mitte. Vinyasa, Yin, Power Yoga für alle Levels. Erste Stunde kostenlos.",
  keywords: [
    "Yoga Bremen",
    "Yoga Studio Bremen",
    "Vinyasa Bremen",
    "Meditation Bremen",
    "Yin Yoga",
    "Yogakurs Bremen",
  ],
  authors: [{ name: "Prana Studio Bremen" }],
  creator: "Prana Studio Bremen",
  openGraph: {
    title: "Prana Studio Bremen — Yoga & Meditation",
    description: "Transformativer Yoga im Herzen Bremens. Alle Levels willkommen.",
    siteName: "Prana Studio Bremen",
    locale: "de_DE",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
