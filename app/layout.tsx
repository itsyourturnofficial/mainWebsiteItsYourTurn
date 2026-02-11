import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.itsyourturn.co.in"),
  title: "Its Your Turn — IoT & Embedded Systems Placement Training | EdTech",
  description:
    "Launch your IoT career with 100% placement support. Job-oriented training in ESP32, STM32, AWS IoT, PCB Design with guaranteed placement at top companies.",
  keywords:
    "IoT placement training, Embedded Systems job guarantee, EdTech India, IoT career course, Industrial IoT jobs, ESP32, STM32, PCB Design, Edge AI, AWS IoT Core",
  authors: [{ name: "Its Your Turn" }],
  creator: "Its Your Turn",
  publisher: "Its Your Turn",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "https://www.itsyourturn.co.in/",
    title: "Its Your Turn — 100% Placement Guarantee | IoT & Embedded Training",
    description:
      "Get hired at top IoT companies. Hands-on training with guaranteed placement assistance.",
    siteName: "Its Your Turn",
    locale: "en_IN",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Its Your Turn - IoT Placement Training",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Its Your Turn — IoT Career & Placement Training",
    description:
      "Launch your career in IoT. 100% placement support with real-world projects.",
    images: ["/images/logo.png"],
    creator: "@itsyourturn",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Its Your Turn",
  "url": "https://www.itsyourturn.co.in",
  "logo": "https://www.itsyourturn.co.in/images/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-7530035770",
    "contactType": "customer service"
  },
  "sameAs": [
    "https://linkedin.com/company/itsyourturn",
    "https://twitter.com/itsyourturn"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-white text-slate-900 selection:bg-brand-accent selection:text-white overflow-x-hidden`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
