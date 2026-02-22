import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "YEKE PLUG — The Future of Sound",
  description:
    "Premium VST plugins for modern producers. Crafted for the future of music production.",
  keywords: [
    "VST",
    "plugins",
    "music production",
    "synthesizer",
    "drums",
    "effects",
    "YEKE PLUG",
    "producer tools",
  ],
  openGraph: {
    title: "YEKE PLUG — The Future of Sound",
    description: "Premium VST plugins for modern producers.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "YEKE PLUG — The Future of Sound",
    description: "Premium VST plugins for modern producers.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
