import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const GTM_ID = "GTM-54JXZHLW";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://maximapools.com"),
  title: {
    default: "Maxima Pools - Premium Fiberglass Pools & Spas in Columbus, OH",
    template: "%s | Maxima Pools",
  },
  description:
    "High-quality fiberglass pools and custom patios installed by trusted experts in Columbus, Ohio. Authorized San Juan Pools dealer. Free estimates available.",
  keywords:
    "fiberglass pools, pool installation, Columbus Ohio, San Juan Pools, inground pools, pool builder, pool closing/opening, outdoor living, fiberglass pool gallery",
  authors: [{ name: "Maxima Pools" }],
  creator: "Maxima Pools",
  publisher: "Maxima Pools",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    title: "Maxima Pools - Premium Fiberglass Pools & Spas",
    description:
      "High-quality fiberglass pools and custom patios installed by trusted experts in Columbus, Ohio.",
    type: "website",
    locale: "en_US",
    siteName: "Maxima Pools",
    url: "https://maximapools.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maxima Pools - Premium Fiberglass Pools & Spas",
    description:
      "High-quality fiberglass pools and custom patios in Columbus, OH. Authorized San Juan Pools dealer.",
  },
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
  alternates: {
    canonical: "https://maximapools.com",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  other: {
    "theme-color": "#0c4a6e",
    "google-site-verification": "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      </head>
      <body className="bg-white text-gray-900 antialiased">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
