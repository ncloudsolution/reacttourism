import { Inter } from "next/font/google";
import "./globals.css";

import AbsoluteFooter from "@/components/AbsoluteFooter";
import NavBar from "@/components/Navbar";

import TourContextProvider from "../context/TourContextProvider";
import UpperFooter from "@/components/UpperFooter";

import Script from "next/script";
import FoloatingActionBtn from "@/components/standalone/FoloatingActionBtn";
import CallBtn from "@/components/CallBtn";
import NewNavBar from "@/components/NewNavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    absolute:
      "Taxi Airport | Airport Taxi Shuttle | Taxi Service | Airport Cab | Price List | Booking Contact | Taxis | Tours | Day Trip | Trusted Airport Transfer In Sri Lanka",
    default: "Taxi Airport",
    template: "%s | Taxi Airport",
  },
  description:
    "Discover top-notch taxi services in Sri Lanka! Our airport taxi and cab services ensure a smooth ride to and from the airport. Enjoy affordable rates, professional drivers, and convenience. Book your airport taxi today for a stress-free travel experience!",
  keywords:
    "airport taxi,airport transfer, airport taxi transfers, taxi cab, airport taxi service, taxi cab service near me, airport cab, taxi cab service, airport cab service, cab service to airport, taxi for airport drop, taxis service, taxi service close to me, cab for airport drop, taxi, uber taxi, cab service near me, taxi service, cab service, taxi cab service, sigiriya taxi, sigiriya taxi service, Negombo taxi, Ella taxi, Kandy taxi, Polonnaruwa taxi, Ahangama taxi, Galle taxi, Bentota taxi, Weligama taxi",
  icons: { icon: ["/favicon.ico"] },
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
          <div className="relative min-h-[100vh] w-full">
            {/* <NavBar /> */}
            <NewNavBar />
            <CallBtn />
            <FoloatingActionBtn />
            <main className="min-h-[23vh] pt-[60px] px-0">{children}</main>

            <UpperFooter />
            <AbsoluteFooter />
          </div>
        </TourContextProvider>
      </body>
    </html>
  );
}
