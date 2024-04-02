import React from "react";
import ncloudlogo from "@/public/Footers/Ft1.png";
import Image from "next/image";
import CashOnDelivery from "@/public/Footers/cashondelivery.svg";
import Visa from "@/public/Footers/visa.svg";
import MasterCard from "@/public/Footers/mastercard.svg";

import Link from "next/link";

function AbsoluteFooter() {
  return (
    <>
      <div className="absolute bottom-0 left-0 right-0 flex justify-between px-[5%] bg-gradient-to-r from-primary via-Secondary to-white py-4 items-center">
        <div className="flex items-center">
          <div>
            <p className=" text-white text-sm">
              {" "}
              Copyright 2024 © <a href="#">
                {" "}
                Ceylon Taxi and Tours (PVT) Ltd
              </a>{" "}
              - All Rights Reserved. Web by
            </p>
          </div>

          <div>
            <Image className=" w-[100px] ml-1" src={ncloudlogo} alt="" />
          </div>
        </div>

        <div className="flex items-center">
          <Image
            className="w-[60px] h-auto"
            src={CashOnDelivery}
            alt="Cash on Delivery"
          />
          <Image className="w-[60px] h-auto" src={Visa} alt="Visa" />
          <Image
            className="w-[60px] h-auto"
            src={MasterCard}
            alt="MasterCard"
          />
        </div>
      </div>
    </>
  );
}

export default AbsoluteFooter;
