import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import Script from "next/script";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import Script from "next/script";

const inter = Inter({
  weight: ["200", "300", "400", "500", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "JoureLiten",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KHV7BCTV"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>

      {/* <!-- Google Tag Manager --> */}
      <Script id="gtm-script">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KHV7BCTV');`}</Script>
      {/* <!-- End Google Tag Manager --> */}
      {/* <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=GTM-KHV7BCTV"
      ></Script> */}

      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-997KQ0H8V0"
      ></Script>
      <Script id="google-analytics">
        {` 
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-997KQ0H8V0');`}
      </Script>
    </html>
  );
}
