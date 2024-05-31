import React from "react";
import Image from "next/image";
import logo from "@/public/Footers/Ft1.png";
import bgimaged from "@/public/Footers/bgimg1.jpeg";
import bgimagem from "@/public/Footers/bgimgm.jpeg";

import Link from "next/link";

function Footer() {
  return (
    <>
      <div className="flex justify-center items-center py-[150px] relative">
        <div
          className="absolute inset-0 bg-black opacity-30 -z-30 "
          style={{
            backgroundImage: `url(${bgimaged.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="w-[full] text-black grid md:grid-cols-2 lg:grid-cols-4">
          <div className="text-center py-[30px] px-[10px] mx-[10px] hover:shadow-2xl hover:duration-1000 rounded-[10px]">
            <div className="flex justify-center">
              <Image src={logo} alt="" className="w-[180px]" />
            </div>
            <p className="my-2 text-black">Nawala, Sri Lanka</p>
          </div>
          <div className="text-center py-[30px] px-[10px] mx-[10px] hover:shadow-2xl hover:duration-1000 rounded-[10px]">
            <Link href="/"> Home </Link>
            <br />
            <Link href="/">About Us</Link>
            <br />
            <Link href="/contactus">Contact Us</Link>
            <br />
            <Link href="/packages">Packages</Link>
            <br />
          </div>
          <div className="text-center py-[30px] px-[10px] mx-[10px] hover:shadow-2xl hover:duration-1000 rounded-[10px]">
            <p className="mb-2 text-black">Call - +94 760 588 588</p>
            <p className="my-2 text-black">
              Email - ceylotaxiandtours@gmail.com
            </p>
            <p className="my-2 text-black">
              Webmail - Info@tourbookingsrilanka.com
            </p>
          </div>
          <div className="text-center items-center py-[30px] px-[10px] mx-[10px] hover:shadow-2xl hover:duration-1000 rounded-[10px]">
            <Link href="/">Terms & Conditions</Link>
            <br />
            <Link href="/">Privacy Policy</Link>
            <br />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
