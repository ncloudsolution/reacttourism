"use client";
import { useState } from "react";

import Image from "next/image";
import logo from "@/public/Navbar/bgremovedlogo.png";
import newlogo from "@/public/Navbar/tblogo.png";
import menu from "@/public/Navbar/menu.svg";
import close from "@/public/Navbar/close.svg";

import Link from "next/link";

// Import SVG icons
import FacebookIcon from "@/public/Navbar/facebook.svg";
import EmailIcon from "@/public/Navbar/email.svg";

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      {/* <nav class="w-full bg-gradient-to-r from-white from-40% to-primary bg-opacity-100 fixed top-0 left-0 right-0 z-10 "> */}
      <nav class="w-full  bg-primary xs:h-[80px] h-[60px] bg-opacity-100 fixed top-0 left-0 right-0 z-10 ">
        <div className="bg-white midxl:w-[35%] md:w-[30%] xs:w-[40%] xxs:w-[50%] w-[60%] -translate-x-10 skew-x-[-30deg] absolute xs:h-[80px] h-[60px] z-20 shadow-navshadow">
          <a href="/" className="h-full">
            <Image
              className="xs:w-[120px]  w-[80px] py-2 h-full z-30 skew-x-[30deg] midxl:translate-x-20 translate-x-16"
              src={newlogo}
              alt="logo"
            />
          </a>
        </div>
        <div className="justify-between  mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between  md:block">
              {/* LOGO */}

              {/* <a href="/">
                <Image
                  className="xs:w-[80px] w-[60px] py-1 h-auto z-30 "
                  src={logo}
                  alt="logo"
                />
              </a> */}
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden absolute z-50 right-10 xs:top-5 top-2">
                <button
                  className="p-2 text-primary rounded-md outline-none focus:border-primary focus:border "
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src={close} width={30} height={30} alt="close" />
                  ) : (
                    <Image
                      src={menu}
                      width={30}
                      height={30}
                      alt="menu"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              onClick={() => setNavbar(!navbar)}
              className={` pb-3 xs:mt-[80px] mt-[60px] md:block md:pb-0 md:mt-0 ${
                navbar ? "h-[100vh] bg-[#000000CC] relative" : "hidden"
              }`}
            >
              <ul
                className={`  ${
                  navbar
                    ? "bg-white absolute left-10 right-10 rounded-md top-1/2 -translate-y-[150px]  md:hidden"
                    : "h-fit md:h-[80px] items-center justify-center  md:flex md:bg-transparent w-full "
                } `}
              >
                <li className=" text-lg font-semibold py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-secondary  border-primary  md:hover:text-secondary md:hover:bg-transparent">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Home
                  </Link>
                </li>
                <li className=" text-lg font-semibold py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-secondary  border-primary  md:hover:text-secondary md:hover:bg-transparent">
                  <Link href="/about" onClick={() => setNavbar(!navbar)}>
                    About
                  </Link>
                </li>
                <li className="text-lg font-semibold py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-secondary  border-primary  md:hover:text-secondary md:hover:bg-transparent">
                  <Link href="/booking" onClick={() => setNavbar(!navbar)}>
                    Booking
                  </Link>
                </li>
                <li className=" text-lg font-semibold py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-secondary  border-primary  md:hover:text-secondary md:hover:bg-transparent">
                  <Link href="/contactus" onClick={() => setNavbar(!navbar)}>
                    Contact
                  </Link>
                </li>
                <div className=" flex justify-center py-2">
                  <li className="px-1 md:border-b-0 md:hover:text-secondary md:hover:bg-transparent">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <Image
                        className=" md:hover:text-secondary"
                        src={FacebookIcon}
                        width={30}
                        height={30}
                        alt="Facebook"
                      />
                    </a>
                  </li>
                  <li className="px-1 md:border-b-0 md:hover:text-secondary md:hover:bg-transparent">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <Image
                        className=" md:hover:text-secondary"
                        src={EmailIcon}
                        width={30}
                        height={30}
                        alt="Facebook"
                      />
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
