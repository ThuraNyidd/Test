// import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
'use client'
import SubLinks from "./SubMenu";
import Image from "next/image";
import logo from '../../../public/images/logo (2).png'
import Link from "next/link";
import { useState, useEffect } from "react";

const HeaderComponent = () => {
  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [open])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);
  return (
    <nav className="mb-[123px] sm:mb-0">
      <div className="fixed top-0 left-0 right-0 z-40 bg-white  ">
        <div className=" flex flex-cols-2 justify-between items-center font-medium lg:px-4 xl:px-4 px-2 pt-3 sm:pt-0 nav-underline  lg:mx-4 xl:mx-4 mx-2">
          <Link href="/">
            <Image src={logo} alt="logo" width={140} className=" ss:mb-2 sm:mb-2 xs:mb-2 md:mb-0 lg:mb-0 xl:mb-0" />
            {/* <h1 className="text-xl md:cursor-pointer">SmilaxGolbal</h1> */}
             
          </Link>
          <div
            className="sm:hidden text-black  text-3xl "
            onClick={() => setOpen(!open)}
          >
            <svg className="w-6 h-6 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <SubLinks />
          </div>

        </div>
        <div className="px-4 ss:px-4">
          <span className={`header-underline ${isLoading ? "loading" : ""}`}></span>
        </div>
      </div>
      {/* mobile */}

      {/* <div
        className={
          open
            ? " z-40 bg-mobilebgcolor absolute right-0 h-full w-4/5 pt-16 -top-[60px]  bottom-0 text-white pl-10 duration-500 "
            : " xs:hidden bg-black absolute right-0 w-4/5 pt-16 h-full bottom-0 text-white pl-10 duration-500 "
        }
      > */}

      <div className={`fixed z-40 bg-[#1C1D20] right-0 h-full w-full pt-16 bottom-0 text-white pl-0 duration-1000 ${open ? "transform translate-x-0 mobileNav mobileMenu" : "transform translate-x-full mobileNavClosed normalMenu"
        }`}>
        {/* <div
          className=" top-6 text-3xl right-5 absolute "
          onClick={() => setOpen(!open)}
        >
          <svg className="w-6 h-6 text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
        </div> */}
        <div className={`h-full overflow-y-auto border-t border-[rgba(255, 255, 255, 0.225)] pt-[1em]`}>
          {/* <h6 className="mx-4 text-[.6em] font-[300] opacity-[0.5] border-b border-[rgba(255, 255, 255, 0.225)] pb-[3em] mb-[1em]">NAVIGATION</h6> */}
          <SubLinks />
        </div>
      </div>
      {open && <div className="fixed" onClick={() => setOpen(false)}></div>}
    </nav>
  );
}

export default HeaderComponent;
