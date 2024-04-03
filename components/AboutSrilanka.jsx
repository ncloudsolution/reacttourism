import React from "react";
import Image from "next/image";
import bgimage from "@/public/AboutSl/sl4.png";
import srilanka2 from "@/public/AboutSl/sl2.webp";
import srilanka4 from "@/public/AboutSl/sl6.png";

function AbooutSrilanka() {
  return (
    <>
      <div
        className="flex justify-center pb-[30px] pt-[30px] bg-gradient-to-b from-blue-100" /*</>style={{ backgroundImage: `url(${srilanka4.src})`, backgroundSize: 'cover',  backgroundRepeat: 'no-repeat'}} */
      >
        <div className="w-[90%] flex flex-col md:flex-row justify-center items-center">
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              className="w-[85%] border-dotted border-2 border-green-200 rounded-[10px] p-6 h-auto overflow-hidden transition-transform duration-500 ease-in-out transform hover:scale-105"
              src={srilanka2}
              alt=""
            />
          </div>

          <div className="w-full text-justify md:w-1/2 md:text-center">
            <h1 className="mb-[40px]">Welcome to Sri Lanka</h1>
            <p>
              Welcome to Sri Lanka, an island nation in the Indian Ocean
              renowned for its diverse landscapes, rich history, and vibrant
              culture. Explore ancient cities like Sigiriya and Anuradhapura,
              relax on palm-fringed beaches, or trek through lush tea
              plantations in Nuwara Eliya. Encounter majestic wildlife in
              national parks, savor exotic cuisine, and experience the warmth of
              Sri Lankan hospitality. Discover why Sri Lanka is a treasure trove
              for travelers seeking adventure, relaxation, and cultural
              immersion.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AbooutSrilanka;
