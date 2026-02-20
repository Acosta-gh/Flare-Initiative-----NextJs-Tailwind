import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CrisisBanner from "@/components/CrisisBanner";
import AccessibilityWidget from "@/components/AccessibilityWidget";

import "./globals.css";

export const metadata = {
  title: "The Flare Initiative",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        <link
          href="https://fonts.googleapis.com/css2?family=BBH+Bogle&family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />

      </head>

      <body>
        {/* Google Analytics con el componente de Next */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-37S5JYS2ZN"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-37S5JYS2ZN');
          `}
        </Script>

        <CrisisBanner />
        <Header />
        <main>{children}</main>
        <Footer />
        <AccessibilityWidget />
      </body>
    </html>
  );
}