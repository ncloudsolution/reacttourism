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
import { FaAnglesRight } from "react-icons/fa6";
import { TourContext } from "@/context/TourContextProvider";
import { IoCaretBack } from "react-icons/io5";
import Link from "next/link";
import { useRouter } from "next/navigation";

const DestinationComp = ({ params }) => {
  const selectedLabel = params.name;
  const router = useRouter();
  const { tourDetails, setTourDetails } = useContext(TourContext);
  const [imageLoaded, setImageLoaded] = useState(false);
  const places = [
    {
      urlLabel: "yala-national-park",
      img: yala,
      title: "Yala National Park",
      description:
        "Yala National Park in southeastern Sri Lanka is famous for its biodiversity and abundant wildlife, including leopards, elephants, sloth bears, and over 200 bird species. Covering 979 square kilometers, it features diverse landscapes like jungles, grasslands, lagoons, and beaches, making it a top destination for nature lovers.",
    },
    {
      urlLabel: "sigiriya",
      img: sigiriya,
      title: "Sigiriya",
      description:
        "Sigiriya, known as the 'Lion Rock,' is an ancient fortress in Sri Lanka's Matale District. Constructed by King Kasyapa in the 5th century, it boasts frescoes, gardens, and an iconic lion staircase. This UNESCO World Heritage Site is celebrated for its historical significance, stunning views, and remarkable engineering, attracting numerous visitors.",
    },
    {
      urlLabel: "kandy",
      img: kandy,
      title: "Kandy",
      description:
        "Kandy, a UNESCO World Heritage Site in Sri Lanka, hosts the sacred Temple of the Tooth Relic. Surrounded by lush hills, it features colonial architecture, Kandyan arts, and Kandy Lake. The annual Esala Perahera ceremony, a vibrant procession with dancers and decorated elephants, celebrates the Tooth Relic",
    },
    {
      urlLabel: "ella",
      img: ella,
      title: "Ella",
      description:
        "Ella, a picturesque town in Sri Lanka's hill country, is renowned for its breathtaking landscapes and serene atmosphere. Surrounded by tea plantations, Ella offers stunning views from spots like Ella Rock and Little Adam's Peak. The Nine Arches Bridge and Ravana Falls add to its charm, making it a popular destination for nature lovers and hikers.",
    },
    {
      urlLabel: "galle",
      img: galle,
      title: "Galle",
      description:
        "Galle, a historic city on Sri Lanka's southwestern coast, is famed for its well-preserved colonial architecture and rich history. The Galle Fort, a UNESCO World Heritage Site, features cobblestone streets, Dutch-era buildings, and museums. Scenic beaches, boutique hotels, and vibrant markets enhance Galle's charm, making it a must-visit destination.",
    },
    {
      urlLabel: "nuwara-eliya",
      img: nuwaraeliya,
      title: "Nuwara Eliya",
      description:
        "Nuwara Eliya, often called 'Little England,' is a charming town in Sri Lanka's central highlands. Known for its cool climate and tea plantations, it features colonial architecture, beautiful gardens, and attractions like Horton Plains, Gregory Lake, and waterfalls such as St. Clair's and Devon Falls.",
    },
    {
      urlLabel: "mirissa",
      img: mirissa,
      title: "Mirissa",
      description:
        "Mirissa's charm lies on Sri Lanka's south coast. Beaches fringed with palms beckon sunbathers, while fresh catches tempt seafood lovers. Boat trips offer a glimpse of majestic whales and playful dolphins breaching the crystal-clear waters. This delightful blend of relaxation and adventure awaits.",
    },
    {
      urlLabel: "polonnaruwa",
      img: polonnaruwa,
      title: "Polonnaruwa",
      description:
        "Nestled in Sri Lanka's heart, Polonnaruwa whispers tales of a bygone era. Ancient ruins, like the colossal Gal Vihara statues and the intricately carved Vatadage, stand as testaments to a glorious kingdom.  Wander through royal palaces and climb the towering stupa, marveling at the engineering feats of the past.  Polonnaruwa offers a glimpse into Sri Lanka's rich history, where nature and architecture intertwine.",
    },
    {
      urlLabel: "arugambay",
      img: arugambay,
      title: "Arugambay",
      description:
        "Arugam Bay, Sri Lanka's east coast gem, is a surfer's paradise. Uncrowded beaches with rolling waves and consistent winds attract surfers worldwide. Nature enthusiasts can spot wildlife in nearby Lahugala National Park, while lagoons offer opportunities for kayaking and boat safaris. Arugam Bay's charm lies in its laid-back atmosphere and vibrant surf culture.",
    },
    {
      urlLabel: "hortain-plains",
      img: hortainplains,
      title: "Hortan Plains",
      description:
        "Chilly winds whip Horton Plains, Sri Lanka's highland plateau. Meadows, trees, misty forests - a hiker's paradise. World's End's drop stuns. Baker's Falls cascades. Wildlife thrives - deer, birds, maybe elephants.",
    },
  ];

  const [indexCount, setIndexCount] = useState(
    tourDetails.placesImagePropIndex || 0
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
          <div className="text-white absolute 2xl:top-[65%] bxs:top-[55%] xs:top-[60%] xxs:top-[55%] bottom-[10%] bigmd:right-[25%] left-[5%] bigmd:left-[25%] right-[5%]">
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

              <div
                onClick={handleClick}
                className="bg-primary cursor-pointer w-1/2 gap-x-1 2xl:hidden py-2 flex justify-center items-center text-[20px] text-black rounded-md font-semibold"
              >
                <div>Next</div>
                <FaAnglesRight className="text-[20px]" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DestinationComp;
