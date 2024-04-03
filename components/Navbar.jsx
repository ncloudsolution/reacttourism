"use client";
import { useState } from "react";

import Image from "next/image";
import logo from "@/public/NavBar/bgremovedlogo.png";
import menu from "@/public/NavBar/menu.svg";
import close from "@/public/NavBar/close.svg";

import Link from "next/link";

// Import SVG icons
import FacebookIcon from "@/public/NavBar/facebook.svg";
import EmailIcon from "@/public/NavBar/email.svg";

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full bg-white bg-opacity-70 fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-1 md:py-1 md:block">
              {/* LOGO */}

              <a href="/">
                <Image className="w-[100px] h-auto" src={logo} alt="logo" />
              </a>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-primary rounded-md outline-none focus:border-primary focus:border"
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
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className=" text-lg font-semibold py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-secondary  border-primary  md:hover:text-secondary md:hover:bg-transparent">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Home
                  </Link>
                </li>
                <li className=" text-lg font-semibold py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-secondary  border-primary  md:hover:text-secondary md:hover:bg-transparent">
                  <Link href="/About" onClick={() => setNavbar(!navbar)}>
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
                <div className=" flex justify-center">
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
