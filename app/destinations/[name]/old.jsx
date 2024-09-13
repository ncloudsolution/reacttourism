"use client";
import Image from "next/image";
import React, { useContext, useState, useEffect } from "react";
import yala from "@/public/Destinations/dest1.jpg";
import sigiriya from "@/public/Destinations/dest2.jpg";
import kandy from "@/public/Destinations/dest3.jpg";
import ella from "@/public/Destinations/dest4.jpg";
import galle from "@/public/Destinations/dest5.jpg";
import nuwaraeliya from "@/public/Destinations/dest6.jpg";
import mirissa from "@/public/Destinations/dest7.jpg";
import polonnaruwa from "@/public/Destinations/dest8.jpg";
import arugambay from "@/public/Destinations/dest9.jpg";
import hortainplains from "@/public/Destinations/dest10.jpg";
import colombo from "@/public/Destinations/dest11.jpg";
import negambo from "@/public/Destinations/dest12.jpg";
import anuradhapura from "@/public/Destinations/dest13.jpg";
import hikkaduwa from "@/public/Destinations/dest14.jpg";
import ahangama from "@/public/Destinations/dest15.jpg";
import bentota from "@/public/Destinations/dest16.jpeg";
import { FaAnglesRight } from "react-icons/fa6";
import { TourContext } from "@/context/TourContextProvider";
import { IoCaretBack } from "react-icons/io5";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoCarSport } from "react-icons/io5";

const DestinationComp = ({ params }) => {
  const selectedLabel = params.name;
  const router = useRouter();
  const { tourDetails, setTourDetails } = useContext(TourContext);
  const [imageLoaded, setImageLoaded] = useState(false);
  const places = [
    {
      btnName: "Yala",
      urlLabel: "yala-national-park-taxi-service",
      img: yala,
      title: "Yala National Park",
      description:
        "Yala National Park in southeastern Sri Lanka is famous for its biodiversity and abundant wildlife, including leopards, elephants, sloth bears, and over 200 bird species. Covering 979 square kilometers, it features diverse landscapes like jungles, grasslands, lagoons, and beaches, making it a top destination for nature lovers.",
    },
    {
      btnName: "Sigiriya",
      urlLabel: "sigiriya-taxi-service",
      img: sigiriya,
      title: "Sigiriya",
      description:
        "Sigiriya, known as the 'Lion Rock,' is an ancient fortress in Sri Lanka's Matale District. Constructed by King Kasyapa in the 5th century, it boasts frescoes, gardens, and an iconic lion staircase. This UNESCO World Heritage Site is celebrated for its historical significance, stunning views, and remarkable engineering, attracting numerous visitors.",
    },
    {
      btnName: "Kandy",
      urlLabel: "kandy-taxi-service",
      img: kandy,
      title: "Kandy",
      description:
        "Kandy, a UNESCO World Heritage Site in Sri Lanka, hosts the sacred Temple of the Tooth Relic. Surrounded by lush hills, it features colonial architecture, Kandyan arts, and Kandy Lake. The annual Esala Perahera ceremony, a vibrant procession with dancers and decorated elephants, celebrates the Tooth Relic",
    },
    {
      btnName: "Ella",
      urlLabel: "ella-taxi-service",
      img: ella,
      title: "Ella",
      description:
        "Ella, a picturesque town in Sri Lanka's hill country, is renowned for its breathtaking landscapes and serene atmosphere. Surrounded by tea plantations, Ella offers stunning views from spots like Ella Rock and Little Adam's Peak. The Nine Arches Bridge and Ravana Falls add to its charm, making it a popular destination for nature lovers and hikers.",
    },
    {
      btnName: "Galle",
      urlLabel: "galle-taxi-service",
      img: galle,
      title: "Galle",
      description:
        "Galle, a historic city on Sri Lanka's southwestern coast, is famed for its well-preserved colonial architecture and rich history. The Galle Fort, a UNESCO World Heritage Site, features cobblestone streets, Dutch-era buildings, and museums. Scenic beaches, boutique hotels, and vibrant markets enhance Galle's charm, making it a must-visit destination.",
    },
    {
      btnName: "Nuwara Eliya",
      urlLabel: "nuwara-eliya-taxi-service",
      img: nuwaraeliya,
      title: "Nuwara Eliya",
      description:
        "Nuwara Eliya, often called 'Little England,' is a charming town in Sri Lanka's central highlands. Known for its cool climate and tea plantations, it features colonial architecture, beautiful gardens, and attractions like Horton Plains, Gregory Lake, and waterfalls such as St. Clair's and Devon Falls.",
    },
    {
      btnName: "Mirissa",
      urlLabel: "mirissa-taxi-service",
      img: mirissa,
      title: "Mirissa",
      description:
        "Mirissa's charm lies on Sri Lanka's south coast. Beaches fringed with palms beckon sunbathers, while fresh catches tempt seafood lovers. Boat trips offer a glimpse of majestic whales and playful dolphins breaching the crystal-clear waters. This delightful blend of relaxation and adventure awaits.",
    },
    {
      btnName: "Polonnaruwa",
      urlLabel: "polonnaruwa-taxi-service",
      img: polonnaruwa,
      title: "Polonnaruwa",
      description:
        "Nestled in Sri Lanka's heart, Polonnaruwa whispers tales of a bygone era. Ancient ruins, like the colossal Gal Vihara statues and the intricately carved Vatadage, stand as testaments to a glorious kingdom.  Wander through royal palaces and climb the towering stupa, marveling at the engineering feats of the past.  Polonnaruwa offers a glimpse into Sri Lanka's rich history, where nature and architecture intertwine.",
    },
    {
      btnName: "Arugambay",
      urlLabel: "arugambay-taxi-service",
      img: arugambay,
      title: "Arugambay",
      description:
        "Arugam Bay, Sri Lanka's east coast gem, is a surfer's paradise. Uncrowded beaches with rolling waves and consistent winds attract surfers worldwide. Nature enthusiasts can spot wildlife in nearby Lahugala National Park, while lagoons offer opportunities for kayaking and boat safaris. Arugam Bay's charm lies in its laid-back atmosphere and vibrant surf culture.",
    },
    {
      btnName: "Hortain Plains",
      urlLabel: "hortain-plains-taxi-service",
      img: hortainplains,
      title: "Hortan Plains",
      description:
        "Chilly winds whip Horton Plains, Sri Lanka's highland plateau. Meadows, trees, misty forests - a hiker's paradise. World's End's drop stuns. Baker's Falls cascades. Wildlife thrives - deer, birds, maybe elephants.",
    },
    {
      btnName: "Ahangama",
      urlLabel: "ahangama-taxi-service",
      img: ahangama,
      title: "Ahangama",
      description:
        "Ahangama, a serene coastal village, is a surfer's haven with its uncrowded beaches and consistent waves. Stilt fishermen dot the shoreline, reflecting local tradition. The calm atmosphere is perfect for relaxation, with palm-fringed shores and quiet retreats. Nearby, lush coconut plantations and scenic views add to Ahangama's laid-back charm.",
    },
    {
      btnName: "Colombo",
      urlLabel: "colombo-taxi-service",
      img: colombo,
      title: "Colombo",
      description:
        "Colombo, Sri Lanka's bustling capital, blends modern urban life with colonial charm. Skyscrapers rise beside historic temples and churches. The Galle Face Green offers seaside serenity, while Pettah's markets buzz with energy. The city's diverse culture is reflected in its cuisine, from street food to fine dining. Shopping, nightlife, and the vibrant arts scene thrive.",
    },
    {
      btnName: "Negombo",
      urlLabel: "negombo-taxi-service",
      img: negambo,
      title: "Negombo",
      description:
        "Negombo, a coastal city near Colombo, is known for its sandy beaches and historic charm. The Dutch Canal winds through, reflecting colonial past. Fishing boats dot the lagoon, and seafood markets bustle. St. Mary’s Church stands tall, showcasing local Catholic heritage. Resorts line the shore, offering relaxation and water sports.",
    },
    {
      btnName: "Anuradhapura",
      urlLabel: "anuradhapura-taxi-service",
      img: anuradhapura,
      title: "Anuradhapura",
      description:
        "Anuradhapura, an ancient city in Sri Lanka, is rich in history and spirituality. Sacred Bodhi Tree, centuries old, draws pilgrims. Majestic stupas like Ruwanwelisaya and Jetavanarama tower over the landscape. Ruins of palaces and monasteries echo a grand past. Lakes and lush greenery create a serene backdrop for exploration.",
    },
    {
      btnName: "Hikkaduwa",
      urlLabel: "hikkaduwa-taxi-service",
      img: hikkaduwa,
      title: "Hikkaduwa",
      description:
        "Hikkaduwa, a vibrant coastal town, is famous for its golden beaches and lively coral reefs. Snorkeling and diving reveal colorful marine life. Surfing waves attract enthusiasts from around the world. Beachfront cafes and bars buzz with energy, offering seafood delights. The town's relaxed vibe makes it a favorite for both adventure and leisure.",
    },
    {
      btnName: "Bentota",
      urlLabel: "bentota-taxi-service",
      img: bentota,
      title: "Bentota",
      description:
        "Bentota, a picturesque coastal town, is renowned for its golden beaches and tranquil river. The Bentota River offers water sports like jet-skiing and boat rides, while the beaches are perfect for sunbathing and swimming. Luxurious resorts line the shore, providing relaxation and indulgence. Nearby, the Brief Garden and Lunuganga Estate showcase local art and design, adding to Bentota's allure.",
    },
  ];

  const filteredIndex = places.findIndex(
    (pla) => pla.urlLabel === selectedLabel
  );

  const [indexCount, setIndexCount] = useState(
    filteredIndex || tourDetails.placesImagePropIndex || 0
  );

  const [selectedEntry, setSelectedEntry] = useState(places[indexCount]);

  // Update selectedEntry when indexCount changes
  //   useEffect(() => {
  //     setSelectedEntry(places[indexCount]);
  //   }, [indexCount]);

  // Update indexCount when tourDetails.placesImagePropIndex changes
  useEffect(() => {
    setIndexCount(tourDetails.placesImagePropIndex || 0);
  }, [tourDetails.placesImagePropIndex]);

  const handleClick = () => {
    setImageLoaded(false);
    setTourDetails((prevTourDetails) => {
      const newIndex =
        tourDetails.placesImagePropIndex < places.length - 1
          ? tourDetails.placesImagePropIndex + 1
          : 0;
      return {
        ...prevTourDetails,
        placesImagePropIndex: newIndex,
      };
    });
    router.push(
      `/destinations/${
        places[
          tourDetails.placesImagePropIndex < places.length - 1
            ? tourDetails.placesImagePropIndex + 1
            : 0
        ].urlLabel
      }`
    );
  };

  const taxiHandleClick = () => {
    setTourDetails((prevTourDetails) => ({
      ...prevTourDetails,
      destinationpage: true,
      destination: selectedEntry.title,
      origin: null,
    }));

    router.push("/point-to-point");
  };

  const returnTaxiHandleClick = () => {
    setTourDetails((prevTourDetails) => ({
      ...prevTourDetails,
      destinationpage: true,
      origin: selectedEntry.title,
      destination: null,
    }));

    router.push("/point-to-point");
  };

  const taxiHandleToAirport = () => {
    setTourDetails((prevTourDetails) => ({
      ...prevTourDetails,
      ispickup: false,
      isDrop: true,
      destinationpage: true,
      origin: selectedEntry.title,
    }));
    router.push("/airport-pickup-and-drop");
  };

  return (
    <>
      {selectedEntry && (
        <div className="xs:h-[92vh] h-[85vh] border-b-2 border-primary w-full overflow-hidden relative">
          <div className="relative w-full h-full">
            <Image
              src={selectedEntry.img}
              alt=""
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                imageLoaded ? "opacity-100 blur-0" : "opacity-0 blur-lg"
              }`}
              onLoadingComplete={() => setImageLoaded(true)}
            />
            <div
              className={`absolute inset-0 w-full h-full bg-gray-500 transition-all duration-500 ${
                imageLoaded ? "opacity-0" : "opacity-100"
              }`}
            />
          </div>
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <Link
            className="absolute top-[10%] bigmd:right-[25%] right-[5%] bg-white rounded-full size-[40px]"
            href={"/"}
          >
            <IoCaretBack className="text-[40px] absolute -translate-x-[2px]" />
          </Link>
          <div className="text-white absolute  bottom-[5%] bigmd:right-[25%] left-[5%] bigmd:left-[25%] right-[5%]">
            <div className="flex flex-col gap-y-5">
              <div className="flex justify-between">
                <div className="bigmd:text-[60px] bxs:text-[50px] text-[30px] bigmd:leading-[60px] bxs:leading-[50px] leading-[30px]">
                  {selectedEntry.title}
                </div>
                <div
                  onClick={handleClick}
                  className="bg-primary cursor-pointer w-[200px] hidden gap-x-1 2xl:flex justify-center items-center text-[20px] text-black rounded-md font-semibold"
                >
                  <div>Next</div>
                  <FaAnglesRight className="text-[20px]" />
                </div>
              </div>

              <div className="bxs:text-[16px] text-[14px]">
                {selectedEntry.description}
              </div>

              <div className="bxs:text-[16px] text-[14px]">
                Book your {selectedEntry.btnName} taxi service with Tour Booking
                Srilanka. Government registered taxi service & in-bound tour
                service in Sri Lanka. Tour Booking Srilanka provides{" "}
                {selectedEntry.btnName} taxi cab service to travelers who are
                looking for taxi service in the {selectedEntry.btnName} area. We
                can offer you the best taxi price with a reliable and trusted
                taxi service in {selectedEntry.btnName}.
                <div className="flex gap-x-5">
                  <div
                    className="text-primary cursor-pointer"
                    onClick={returnTaxiHandleClick}
                  >
                    Need a taxi from {selectedEntry.btnName} ?{" "}
                  </div>
                  <div
                    onClick={taxiHandleToAirport}
                    className="text-primary cursor-pointer"
                  >
                    {selectedEntry.btnName} to airport transfers ?
                  </div>
                </div>
              </div>

              <div
                onClick={taxiHandleClick}
                className="w-full gap-x-3 hidden 2xl:flex justify-center items-center bg-primary  text-black py-2 rounded-md text-[16px] font-semibold cursor-pointer"
              >
                <div>{`Need a Taxi to ${selectedEntry.btnName}`}</div>
                <IoCarSport className="text-[24px]" />
              </div>

              <div className="flex bxs:flex-row-reverse flex-col-reverse w-full gap-3">
                <div
                  onClick={handleClick}
                  className="bg-primary bxs:w-[200px] w-full cursor-pointer gap-x-1 2xl:hidden py-2 flex justify-center items-center text-[16px] text-black rounded-md font-semibold"
                >
                  <div>Next</div>
                  <FaAnglesRight className="text-[16px]" />
                </div>
                <div
                  onClick={taxiHandleClick}
                  className="w-full px-4  gap-x-3 2xl:hidden flex justify-center items-center bg-primary  text-black py-2 rounded-md text-[16px] font-semibold cursor-pointer"
                >
                  <div>{`Need a Taxi to ${selectedEntry.btnName}`}</div>
                  <IoCarSport className="text-[24px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DestinationComp;
