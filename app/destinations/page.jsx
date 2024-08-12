import React from "react";
import Activities from "@/components/Activities";

export const metadata = {
  title: "Popular Destinations",
  description:
    "Explore the best of Sri Lanka's popular destinations with our comprehensive travel guide. Discover the ancient wonders of Sigiriya and Polonnaruwa, the serene beauty of Ella and Nuwara Eliya, the coastal charm of Mirissa, Galle, Colombo, and Negombo, the wildlife adventures in Yala National Park, and the cultural richness of Kandy and Anuradhapura. Our detailed insights into each destination ensure you experience the highlights of this beautiful island, from the misty landscapes of Horton Plains to the surfing haven of Arugambay, Hikkaduwa, and Ahangama, and beyond. Start your journey with us and uncover the magic of Sri Lanka.",
  icons: {
    icon: ["/destination.ico"],
  },
  keywords:
    "sigiriya, colombo, yala, kandy, ella, galle, nuwara eliya, mirissa, polonnaruwa, arugambay, hortain plains, ahangama, beruwala, anuradhapura, hikkaduwa, bentota",
};

const page = () => {
  return (
    <>
      <div className="py-5 ">
        <Activities />
      </div>
    </>
  );
};

export default page;
