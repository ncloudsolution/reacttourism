import React from "react";
import Activities from "@/components/Activities";

export const metadata = {
  title: "Popular Destinations",
  description:
    "Explore the best of Sri Lanka's popular destinations with our comprehensive travel guide. Discover the ancient wonders of Sigiriya and Polonnaruwa, the serene beauty of Ella and Nuwara Eliya, the coastal charm of Mirissa and Galle, the wildlife adventures in Yala National Park, and the cultural richness of Kandy. Our detailed insights into each destination ensure you experience the highlights of this beautiful island, from the misty landscapes of Horton Plains to the surfing haven of Arugambay and beyond. Start your journey with us and uncover the magic of Sri Lanka.",
  icons: {
    icon: ["/destination.ico"],
  },
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
