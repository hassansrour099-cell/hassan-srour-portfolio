import { Geist_Mono, Inter, DM_Mono, Instrument_Sans } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { cn } from "@/lib/utils";
import { getPersonJsonLd, getSEO } from "@/lib/seo";

import "./globals.css";
import { Footer } from "@/components/footer";

export const metadata = getSEO();

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  weight: ["500", "600", "700"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  weight: ["400", "500", "600", "700", "800"],
});

const DMMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  weight: ["300", "400", "500"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = getPersonJsonLd();

  return (
    <html lang="en">
      <body
        className={cn(
          inter.variable,
          instrument.variable,
          geistMono.variable,
          DMMono.variable,
          `bg-background relative font-sans antialiased`,
        )}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
