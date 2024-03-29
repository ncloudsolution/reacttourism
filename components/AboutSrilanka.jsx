import React from 'react';
import Image from 'next/image';
import srilanka from "@/public/AboutSl/sl1.jpg";

function AbooutSrilanka() {
  return (
    <>
      <div className=" flex justify-center  bg-blue-500 pb-[30px] pt-[30px]">

        <div className='w-[90%] flex justify-center'>
        <div className="w-1/2 flex justify-center bg-red-300">
          <Image className='w-[80%]' src={srilanka} alt="" />
        </div>

        <div className="w-1/2 bg-green-400 ">
          <p className=" ">Welcome to Sri Lanka, an island nation in the Indian Ocean renowned for its diverse 
            landscapes, rich history, and vibrant culture. Explore ancient cities like Sigiriya and 
            Anuradhapura, relax on palm-fringed beaches, or trek through lush tea plantations in Nuwara Eliya. Encounter majestic wildlife in national parks, 
            savor exotic cuisine, and experience the warmth of Sri Lankan hospitality. 
            Discover why Sri Lanka is a treasure trove for travelers seeking adventure, relaxation, and 
            cultural immersion.</p>
        </div>
        </div>
        
        
      </div>
    </>
  );
}

export default AbooutSrilanka;
