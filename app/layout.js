import { Inter } from "next/font/google";
import "./globals.css";

import AbsoluteFooter from "@/components/AbsoluteFooter";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TourContextProvider from "../context/TourContextProvider";
import CustomCurrencyDropDown from "@/components/standalone/CustomCurrencyDropDown";
import UpperFooter from "@/components/UpperFooter";

import Script from "next/script";
import FoloatingActionBtn from "@/components/standalone/FoloatingActionBtn";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    absolute: "",
    default: "Tour Booking Sri Lanka",
    template: "%s | Tour Booking Sri Lanka",
  },
  description:
    "Discover the beauty of Sri Lanka with our comprehensive taxi booking services. Whether you need airport transfers, point-to-point transfers, arranged tour packages, custom tour packages, or day tours, we've got you covered. Explore the cultural heritage, scenic landscapes, and vibrant cities of Sri Lanka with our reliable and efficient transportation services. We also offer train bookings and a wide range of other services to ensure a seamless and enjoyable travel experience. Your journey in Sri Lanka begins with us.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16563747465"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16563747465');
        `}
        </Script>
        <Script
          id="google-conversion"
          dangerouslySetInnerHTML={{
            __html: `
      gtag('event', 'conversion', {'send_to': 'AW-16563747465/h3caCMDywbIZEIn1mto9'});
    `,
          }}
        />

        <TourContextProvider>
          <div className="  relative  min-h-[100vh]   w-full">
            <NavBar />

            <FoloatingActionBtn />
            <main className="min-h-[23vh] xs:mt-[80px] mt-[60px] px-0">
              {children}
            </main>

            {/* <Footer /> */}
            <UpperFooter />
            <AbsoluteFooter />
          </div>
        </TourContextProvider>
      </body>
    </html>
  );
}
