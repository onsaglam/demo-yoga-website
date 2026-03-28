import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Classes from "@/components/Classes";
import { PranaIntro } from "@/components/PranaIntro";

const VideoBreak = dynamic(() => import("@/components/VideoBreak"));
const FalImageBreak = dynamic(() => import("@/components/FalImageBreak"));
const Instructors = dynamic(() => import("@/components/Instructors"));
const Schedule = dynamic(() => import("@/components/Schedule"));
const Pricing = dynamic(() => import("@/components/Pricing"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const Contact = dynamic(() => import("@/components/Contact"));
const Impressum = dynamic(() => import("@/components/Impressum"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsClub",
    name: "Prana Studio Bremen",
    description: "Yoga und Meditation Studio in Bremen-Mitte",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ostertorsteinweg 42",
      addressLocality: "Bremen",
      postalCode: "28203",
      addressCountry: "DE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 53.0758,
      longitude: 8.8136,
    },
    telephone: "+49-421-000-0000",
    openingHours: ["Mo-Fr 06:30-21:00", "Sa 08:00-18:00", "Su 08:00-18:00"],
    priceRange: "€€",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PranaIntro />
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Classes />
        <VideoBreak />
        <Instructors />
        <Schedule />
        <FalImageBreak />
        <Pricing />
        <Testimonials />
        <Contact />
        <Impressum />
        <Footer />
      </main>
    </>
  );
}
