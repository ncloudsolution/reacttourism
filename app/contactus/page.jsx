"use client";
import { SingleVehicleContext } from "@/context/SingleVehicalContextProvider";
import React, { useContext } from "react";


const Contact = () => {
  const { vehicle, setVehical } = useContext(SingleVehicleContext);
  return (
    <>
      <div className="bg-slate-400  h-[300px] flex flex-col">
        <h1 className="text-center text-[50px] pt-[70px] font-semibold">Contact Us</h1>
      </div>

       <div className="flex flex-row justify-center pt-[50px] gap-10 ">
        <div className="bg-green-300 p-10 rounded"><h1>Address</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesettin
           industry. Lorem Ipsum has been the industry
           's standard dummy te
          </p>
        
        </div>
        <div className="bg-green-300 p-10"><h1>Phone</h1></div>
        <div className="bg-green-300 p-10"><h1>E-mail</h1></div>
      </div>
    </>
  );
};

export default Contact;
