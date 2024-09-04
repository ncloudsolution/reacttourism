import { Inter } from "next/font/google";
import "./globals.css";

import AbsoluteFooter from "@/components/AbsoluteFooter";
import NavBar from "@/components/Navbar";

import TourContextProvider from "../context/TourContextProvider";
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
  keywords:
    "cab service, taxi service, airport taxi service, cab near me, taxi cab, taxi booking, taxi service near me, book taxi online, cab booking, taxi company, cab service near me, taxi near me, taxi cab near me, taxi company near me, cab company near me, cab company, taxi number, airport taxi near me, airport taxi, taxi to airport near me, airport taxi booking, taxi cab service near me, cheap cabs near me, airport cab, taxi number near me, taxi hire, airport taxi service near me, taxi cab service, taxi booking near me, airport transfers near me, online taxi, airport cab service, airport taxi transfers, cab number, cab booking near me, taxi online, online cab booking, city cab, taxi near, taxi transfers, best taxi service near me, cab drivers near me, book taxi near me, booking transfer, taxi driver near me, taxi from my location, book taxi online near me, nearest cab service, cab number near me, taxi best, city airport taxis, cab service colombo, near me taxi, city taxis, taxi online booking near me, near me taxi service, cheap taxi to airport, nearest cab company, taxi phone number near me, taxi price, taxi hire near me, schedule taxi to airport, airport cab booking, online taxi booking near me, taxi car, best taxi, airport taxi schiphol, near taxi service, taxi pick up, airport transport near me, taxicabs near me, taxi near by, taxi cost, black cabs near me, taxi booking number, taxi rates, taxi near me phone number, taxi service to airport near me, near by taxi, cab service to airport, black cab booking, airport cabs near me, taxi near me to airport, taxi cab companies near me, taxi fare, taxi near my location, taxi to airport cost, mini cab it, cab firms near me, fort taxi, nearest cab, online taxi near me, car taxi service near me, online cab, taxi near me number, online taxi services, cab service near my location, best taxi near me, car taxi, book car to airport, near taxi me, taxi transport, taxi firms, book cab to airport, 24 hour cab service near me, schiphol taxi service, taxi near by me, teksi online, airport cab service near me, near taxi, taxi contact number, taxi places near me, taxi service near my location, taxi cab phone number, sri lanka airport taxi price, i need taxi, best taxi service, taxi rates near me, cheap taxi to airport near me, taxi service colombo, cab to airport near me, car service near me taxi, taxi for airport drop, airport car booking, car taxi near me, taxi service to the airport, yellow cabs near me, cab hire, get taxi near me, best cab service near me, taxi to airport from my location, drop taxi near me, airport taxi transfers near me, airport taxi rates, city cab near me, taxi service near me to airport, hire taxi near me, car service taxi near me, taxi by me, any taxi near me, taxi car service near me, taxi for airport near me, taxi telephone number, taxi pickup near me, taxi vans, need taxi, book online taxi near me, sri lanka taxi, i need taxi near me, airport taxi flat rate, taxi to the airport near me, need taxi near me, taxi me, airport drop service, kandy cab service, taxi contact, online booking car service, book cab near me, city taxi near me, taxi stand, taxi service number, schedule cab to airport, taxi near me book online, online cab service, cab company closest to me, booking taxi service, best cab service, taxi near us, sri lanka airport taxi, call taxi booking, taxi cab near my location, reliable taxi service near me, best cab, taxicabs near my location, near me cab service, near me taxi number, pick me taxi booking, taxis on booking, travel taxi, black cab number, the nearest taxi, cabs near my location, car taxi service, taxi service close to me, taxi driver number near me, booking transfers from airport to hotel, cheap taxi cab near me, cab for airport drop, cheap airport cabs, cab near, cheap cab services near me, taxi cab number near me, taxi for hire near me, cab fare, airport taxi price, taxi service around me, taxi fare to airport, book cheap taxi online, nearest cab company to me, taxi booking online near me, best cab company near me, cab to airport cost, cheap airport taxi near me, booking transfer airport, taxis combined book online, taxi in sri lanka, us taxi service, car service taxi, taxi near me online booking, airport taxi pickup, taxi booking service, taxi from my location to airport, cab taxi service, online cab service near me, cheap cabs to airport, cab service number, taxi cab to airport, near by cab service, looking for taxi near me, number for taxi near me, best airport taxi service near me, service taxi near me, the nearest cab company, taxi cab booking, green cab near me, online cab booking near me, taxi contact number near me, taxi van hire, car cab booking, online taxi service near me, taxi driver number, cab price, cheap taxi booking, taxi places, taxi cab closest to me, taxi fare to airport from my location, taxi airport near me, cabs available near me, airport taxi number, city taxi number, taxi online near me, taxi airport service near me, cab places near me, cabs near by, my cab, tax8 near me, airport pick and drop, sri lanka taxi service, taxi service near, taxi taxi near me, the nearest cab service, airport taxi hire, near taxi number, reliable taxi service, taxi to city airport, taxi near me airport, taxi cab near me phone number, cab booking price, taxi operators near me, cab company near my location, cab facility near me, cab service to airport near me, your taxi, number taxi near me, cab taxi number, cab closest to me, taxi agency near me, yellow cabs online, city yellow cab, near me cab, cab transportation, taxi near airport, airport drop service near me, airport taxi transport, taxi service near by me, taxi at airport, cab car booking, bus taxi service, cab service sri lanka, cab near me phone number, cab cost, airport travel near me, houston cab service, black cabs taxi, taxis available near me, i need taxi service near me, taxi cab service near my location, airport taxi company, hire cab, taxi for the airport, any cab service near me, taxi cabs around me, online cabs near me, reliable taxi, cab near me number, airport taxi driver, the nearest taxi service, near taxi near me, book my taxi, taxi service in my location, cheap cab companies near me, cab service to the airport, the airport taxi, taxi airport booking, the nearest taxi cab, near by cab, taxi car booking, taxi websites, taxi close to my location, taxi options near me, cab rates near me, city cab taxi, taxi in near me, us cab service, taxi lanka, book taxi to the airport, near by taxi service, airport drop taxi near me, cheap taxi cab, taxi call center, airport taxi online booking, nearest cab company to my location, reliable taxi near me, book for taxi online, book taxi transfer, taxi travel, taxi car near me, taxi cab drivers near me, taxis closest to me, cab from my location, yellow cab driver, kandy taxi service, looking for taxi, best airport taxi, best cabs near me, taxi service book online, tourist taxi near me, taxi airport transfers near me, taxi flat rate, taxi price check, cab fare to airport, arrange taxi pick up, city cab company, cab near me taxi, best airport taxi service, taxi van booking, best taxi to airport, cab in metro, cab service for airport, taxi service from my location, book cab online near me, any taxi service near me, cab companies around me, taxi cab phone number near me, taxi service number near me, best taxi company near me, airport booking taxi, colombo taxi, taxi bus near me, airport transfer colombo sri lanka, trip taxi, srilanka taxi service, taxi driver near me phone number, cab from airport, taxi in airport, book taxi near me online, taxi options, need taxi to airport, available taxis near me, airport taxi charges, green cab service, taxi ist airport, near me taxi cab, cheap cab booking, the nearest cab, taxi to airport booking, travel taxi near me, transport taxi service, taxi reservations, cheap taxi hire, taxi service airport near me, long trip taxi service, schedule airport taxi, taxi taxi phone number, near me taxi stand, srilanka taxi, taxi service near to me, taxi hire to airport, cab it taxi, tours taxi, sri lanka airport taxi service, transportation taxi services near me, car booking services, contact taxi near me, taxi cab drivers, compare taxi fares, cab rates, reliable cab service, airport taxi compare, airport taxi cab services, sri lanka taxi service colombo, cost of cab to airport, cab service closest to me, airport taxi's, cheap cab companies, cabs near us, drop me taxi, schedule taxi pickup, taxi service closest to my location, colombo to airport taxi cost, mini cab service, car booking to airport, taxi service near us, best taxi for airport, the nearest taxi to me, the nearest taxi company, the closest cab company, car cabs, cabs by me, near to me taxi, taxi in colombo, taxi service near by, number for taxi service, best taxi company, cabs and taxis near me, i need taxi number, taxi in best, us taxi, phone number to taxi cab, cab service around me, cab to my location, travel taxi service, cab agency near me, taxi car price, cheap taxi fares, cab operators near me, taxi to and from airport, taxi taxi number, taxi near me online, taxi calling, taxi cab from my location, taxi us, get taxi to airport, service cab, budget taxi near me, taxi cost near me, taxi rates to airport, my cabs, colombo to kandy taxi, bus taxi near me, car cab service, taxi airport driver, taxi cab close to my location, taxi for airport drop near me, cab service number near me, kandy cab service price, phone number for taxi service near me, cab service packages, taxis near me location, book airport transfer online, call taxi to airport, taxi telephone number near me, cab service cab service, galle cab service, cab charges, city cab service, i need taxi service, taxi at the airport, hire cab near me, cab company near me phone number, drop taxi service, service taxis, transfer taxi service, best cab company, airport travel service, airport transfer taxi near me, cheap taxi transfer, travel to airport taxi, cab booking number, available cabs near me, taxi service near me phone number, book and pay for taxi online, sigiriya to kandy taxi, get taxi online, tourist taxi service, taxi sigiriya to kandy, taxi service by me, airport private hire, car cab service near me, taxi driver service, get cab near me, cheap online taxi service, bentota taxi, taxi near me for airport, cab near to me, need cab, taxi cabs in, number of taxi near me, book your taxi online",
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
          <div className="  relative  min-h-[100vh]   w-full">
            <NavBar />

            <FoloatingActionBtn />
            <main className="min-h-[23vh] xs:mt-[80px] mt-[60px] px-0">
              {children}
            </main>

            <UpperFooter />
            <AbsoluteFooter />
          </div>
        </TourContextProvider>
      </body>
    </html>
  );
}
