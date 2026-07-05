import type { Metadata } from "next";
import { siteConfig } from "@/constants/seo";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/next";
import {
  Inter
} from "next/font/google";


const inter = Inter({

  subsets:[
    "latin"
  ],


  display:
    "swap",

});
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteConfig.title,

    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,

  keywords: siteConfig.keywords,

  authors: [
    {
      name: siteConfig.author,
    },
  ],

  creator: siteConfig.name,

  openGraph: {
    type: "website",

    locale: "en_US",

    url: siteConfig.url,

    title: siteConfig.title,

    description: siteConfig.description,

    siteName: siteConfig.name,

    images: [
      {
        url: siteConfig.ogImage,

        width: 1200,

        height: 630,

        alt: siteConfig.title,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: siteConfig.title,

    description: siteConfig.description,

    images: [siteConfig.ogImage],
  },

  robots: {
    index: true,

    follow: true,

    googleBot: {
      index: true,

      follow: true,
    },
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
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} {inter.className} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        {children}
        <Analytics />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
