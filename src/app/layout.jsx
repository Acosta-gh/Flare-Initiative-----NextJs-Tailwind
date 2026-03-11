import Script from "next/script";
import { Fira_Sans, BBH_Bogle } from 'next/font/google';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CrisisBanner from "@/components/CrisisBanner";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import "./globals.css";

const firaSans = Fira_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-fira-sans',
  display: 'swap',
});

const bbhBogle = BBH_Bogle({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bbh-bogle',
  display: 'swap',
});

export const metadata = {
  title: "The Flare Initiative",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${firaSans.variable} ${bbhBogle.variable}`}>
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-37S5JYS2ZN" strategy="afterInteractive" />
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