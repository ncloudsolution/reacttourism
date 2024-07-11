import AirportComp from "./AirportComp";

export const metadata = {
  title: "Airport Transfer",
  description:
    "Start your journey in Sri Lanka with our exceptional airport transfer services. We provide seamless and reliable transportation from the airport to your destination, ensuring a stress-free start to your trip. Whether you're traveling to Colombo, Kandy, Galle, or any other location in Sri Lanka, our professional drivers and well-maintained vehicles guarantee a comfortable and safe ride. With our 24/7 availability, competitive rates, and commitment to punctuality, we make your airport transfers hassle-free. Trust us to deliver an outstanding travel experience from the moment you land.",
  // keywords: [
  //   "Airport",
  //   "Airport taxi",
  //   "Airport cars",
  //   "Hotel taxi",
  //   "City cabs",
  //   "City taxi",
  //   "Hotel",
  //   "City hotel",
  //   "Hotel cars",
  //   "Limousine",
  //   "Limos",
  //   "Budget hotel",
  //   "Colombo cabs",
  //   "transfer",
  //   "Hotel transfer",
  //   "Drop",
  //   "Pickup",
  //   "Shuttle service",
  //   "Bus hire",
  //   "Van hire",
  //   "colombo-bandaranaike-international-airport-transfers-cmb",
  //   "pasenger_guide",
  //   "taxi_service",
  //   "airport-taxi-cab-srilanka",
  //   "colombo-taxi-cabs",
  //   "mirissa-taxi-cabs",
  //   "galle-taxi-cabs",
  //   "waligamataxi-cab-airport",
  //   "ella-taxi-cabs",
  //   "kandytaxi-cabs",
  //   "sigiriya taxi-cabs-airport",
  //   "dabulla-taxi",
  //   "galle",
  //   "mirissa_ahangama",
  //   "kandy_ella_bentota",
  //   "nuwaraeliya_wadduwa",
  //   "hikkaduwa_sigiriya",
  //   "dabulla_tempel",
  //   "polonnaruwataxi-cabs-airport-transfers",
  // ],
  keywords:
    "Airport, Airport taxi, Airport cars, Hotel taxi, City cabs, City taxi, Hotel, City hotel, Hotel cars, Limousine, Limos, Budget hotel, Colombo cabs, transfer, Hotel transfer, Drop, Pickup, Shuttle service, Bus hire, Van hire, colombo-bandaranaike-international-airport-transfers-cmb, pasenger_guide, taxi_service, airport-taxi-cab-srilanka, colombo-taxi-cabs, mirissa-taxi-cabs, galle-taxi-cabs, waligamataxi-cab-airport, ella-taxi-cabs, kandytaxi-cabs, sigiriya taxi-cabs-airport, dabulla-taxi, galle, mirissa_ahangama, kandy_ella_bentota, nuwaraeliya_wadduwa, hikkaduwa_sigiriya, dabulla_tempel, polonnaruwataxi-cabs-airport-transfers",
  icons: {
    icon: ["/airport.ico"],
  },
};

const AirPage = () => {
  return (
    <>
      <AirportComp />
    </>
  );
};

export default AirPage;
