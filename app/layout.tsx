import type { Metadata } from "next";
import { Inter, Poppins, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { profile } from "@/data/profile";
import { MotionProvider } from "@/components/ui/MotionProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-poppins", display: "swap" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-mgi.vercel.app"),
  title: `${profile.name} | ${profile.headline}`,
  description: `${profile.name} portfolio - Network Engineer, IoT & Web Developer from ${profile.location}.`,
  openGraph: {
    title: `${profile.name} Portfolio`,
    description: profile.hero.tagline,
    type: "website",
    url: "https://portfolio-mgi.vercel.app",
    locale: "id_ID"
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} Portfolio`,
    description: profile.hero.tagline
  },
  alternates: { canonical: "/" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} ${spaceGrotesk.variable} font-sans`}>
        <MotionProvider>{children}</MotionProvider>
        <Analytics />
      </body>
    </html>
  );
}
