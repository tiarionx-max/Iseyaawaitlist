import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { MotionConfig } from "motion/react";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://iseyaa.com";
const OG_IMAGE = "/images/iseyaa-og-image.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "ISEYAA — A New Way to Experience Ogun",
    template: "%s — ISEYAA",
  },
  description:
    "Discover places, events, culture, creativity and more across Ogun State through one connected ISEYAA experience. Join the waitlist.",
  keywords: [
    "ISEYAA",
    "Ogun State",
    "Abeokuta",
    "Nigeria tourism",
    "Ogun events",
    "Ogun marketplace",
    "digital wallet Nigeria",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "A New Way to Experience Ogun.",
    description: "Everything Connects with ISEYAA. Join the waitlist.",
    url: SITE_URL,
    siteName: "ISEYAA",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "ISEYAA — Everything Connects" }],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "A New Way to Experience Ogun.",
    description: "Everything Connects with ISEYAA. Join the waitlist.",
    images: [OG_IMAGE],
  },
};

export const viewport: Viewport = {
  themeColor: "#003d24",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body id="top" className="bg-cream text-ink antialiased">
        <MotionConfig reducedMotion="user">
          <SmoothScroll>
            <Navbar />
            {children}
            <Footer />
          </SmoothScroll>
        </MotionConfig>
      </body>
    </html>
  );
}
