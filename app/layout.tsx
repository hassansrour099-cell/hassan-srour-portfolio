import { Space_Grotesk, DM_Sans, DM_Mono } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { cn } from "@/lib/utils";
import { getSEO } from "@/lib/seo";

import "./globals.css";
import { Footer } from "@/components/footer";

export const metadata = getSEO();

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
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
  return (
    <html lang="en">
      <body
        className={cn(
          display.variable,
          body.variable,
          DMMono.variable,
          "bg-background relative font-sans antialiased",
        )}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
