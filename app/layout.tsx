import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Sap.Hi - AI-Powered Recruitment Excellence | GenAI Recruitment Specialist",
  description:
    "Transform your hiring with AI-powered recruitment solutions. Sapir German combines human intelligence with cutting-edge generative AI to help organizations build exceptional teams. Expert in AI strategy consulting, talent acquisition, and executive search.",
  keywords: [
    "AI recruitment",
    "generative AI hiring",
    "talent acquisition",
    "executive search",
    "recruitment automation",
    "AI strategy consulting",
    "team building",
    "recruitment specialist",
    "GenAI recruitment",
    "AI-powered hiring",
  ],
  authors: [{ name: "David Kochav", url: "https://www.mldk.tech" }],
  creator: "David Kochav",
  publisher: "MLDK.tech",
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
    locale: "en_US",
    alternateLocale: ["he_IL"],
    url: "https://www.sapirgerman.com",
    siteName: "Sap.Hi - AI Recruitment Excellence",
    title: "Sap.Hi - AI-Powered Recruitment Excellence | GenAI Recruitment Specialist",
    description:
      "Transform your hiring with AI-powered recruitment solutions. Expert in generative AI, talent acquisition, and executive search services.",
    images: [
      {
        url: "/sapir-logo.png",
        width: 1200,
        height: 630,
        alt: "Sap.Hi - AI Recruitment Excellence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sap.Hi - AI-Powered Recruitment Excellence",
    description:
      "Transform your hiring with AI-powered recruitment solutions. Expert in generative AI, talent acquisition, and executive search services.",
    images: ["/sapir-logo.png"],
    creator: "@sapirhi",
  },
  alternates: {
    canonical: "https://www.sapirgerman.com",
    languages: {
      "en-US": "https://www.sapirgerman.com",
      "he-IL": "https://www.sapirgerman.com/he",
    },
  },
  category: "Business Services",
  classification: "Recruitment and Human Resources",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.sapirgerman.com"),
  verification: {
    google: "google-site-verification-code", // Replace with actual verification code
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Structured Data JSON-LD */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Sap.Hi - AI Recruitment Excellence",
              description:
                "AI-powered recruitment solutions combining human intelligence with cutting-edge generative AI technology",
              url: "https://www.sapirgerman.com",
              logo: "https://www.sapirgerman.com/sapir-logo.png",
              image: "https://www.sapirgerman.com/sapir-logo.png",
              founder: {
                "@type": "Person",
                name: "David Kochav",
                jobTitle: "AI Recruitment Specialist",
                url: "https://www.sapirgerman.com",
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "IL",
              },
              serviceType: [
                "AI Strategy Consulting",
                "Talent Acquisition",
                "Executive Search",
                "Team Building",
                "Recruitment Automation",
                "Training & Development",
              ],
              areaServed: "Worldwide",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "AI Recruitment Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "AI Strategy Consulting",
                      description:
                        "Develop comprehensive AI recruitment strategies tailored to your organization's unique needs and goals",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Executive Search",
                      description:
                        "Specialized executive recruitment leveraging AI insights for C-level and senior leadership positions",
                    },
                  },
                ],
              },
              sameAs: ["https://linkedin.com/in/sapir-german"],
            }),
          }}
        />

        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-L206S31JJC" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-L206S31JJC');
          `}
        </Script>
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
