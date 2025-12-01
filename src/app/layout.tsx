import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Providers } from "@/components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://maxwell.ltd'),
  title: {
    default: "Maxwell Wickersham | Portfolio",
    template: "%s | Maxwell Wickersham"
  },
  description: "Web portfolio of Maxwell Wickersham. Building digital experiences that matter.",
  keywords: ["Maxwell Wickersham", "Portfolio", "Web Developer", "Designer", "Creative Technologist"],
  authors: [{ name: "Maxwell Wickersham" }],
  creator: "Maxwell Wickersham",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://maxwell.ltd",
    title: "Maxwell Wickersham | Portfolio",
    description: "Building digital experiences that matter.",
    siteName: "Maxwell Wickersham",
    images: [
      {
        url: "/icon.png", // Fallback to icon if no specific OG image yet
        width: 1200,
        height: 630,
        alt: "Maxwell Wickersham Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maxwell Wickersham | Portfolio",
    description: "Building digital experiences that matter.",
    images: ["/icon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <Providers>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
