"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";
import Phoneicon from "@/assets/phone.svg?url";
import DownArrow from "@/assets/varroww.svg";
import MainLogo from "@/assets/mainlogo.svg";
import User from "@/assets/user.svg";
import Bell from "@/assets/bell.svg?url";
import Logout from "@/assets/logoutnavbar.svg?url";
import Useraccount from "@/assets/useraccount.svg?url";
import Family from "@/assets/family1.svg?url";
import Lock from "@/assets/lock1.svg?url";
import { usePathname } from "next/navigation";
import navmenu from "@/assets/navmenu.svg?url";
import { navLinks } from "@/utils/data";
import { useSession } from "next-auth/react";
import { current } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
const Navbar = () => {
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const [scrolled, setScrolled] = useState({ prev: 0, curr: 0 });
  useEffect(() => {
    if (typeof window === "undefined") return;
    const onScroll = () => {
      if (window.scrollY > 300) {
        setScrolled((pre) => {
          const updatedScrolled = { prev: pre.curr, curr: window.scrollY };
          return updatedScrolled;
        });
      } else {
        setScrolled({ prev: 0, curr: 0 });
      }
      //console.log(scrolled);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <span className="block h-[75px] w-full" />
      <div
        className={`${scrolled.curr >= 300 ? "fixed bg-secondary/80 " + (scrolled.prev > scrolled.curr ? "top-0 backdrop-blur-sm" : "-top-40 backdrop-blur-0") : "absolute"} tranmsition-all z-[100] flex h-auto w-full items-center justify-between bg-[#2C3D68] px-5 py-2 duration-500 md:px-10 lg:px-20`}
      >
        <Link href="/">
          <MainLogo className="h-[54px] w-[102px] text-white" />
        </Link>
        <div className="group ml-4 max-md:order-2">
          <Image src={navmenu} alt="navmenu" className="h-6 w-6 md:hidden" />
          <div className="absolute right-1 hidden flex-col rounded-lg p-4 text-white group-hover:flex max-md:bg-secondary md:static md:flex md:flex-row md:gap-5 lg:gap-10">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.link}
                className={`${pathname === link.link ? "text-primary" : ""} button_text`}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
        {status === "authenticated" ? (
          <div className="flex items-center justify-between gap-2 max-md:ml-auto">
            {/* <Link
          href=""
          className="flex items-center gap-1 font-Nunito text-base font-bold italic text-[#F58720] max-sm:hidden"
        >
          <span>For support</span>
          <Image src={Phoneicon} alt="phone icon" className="h-6 w-6" />
          <span>96659 52556</span>
        </Link>
        <h2 className="font-Nunito text-lg font-bold text-white">
          {/* {parentData?.name ? parentData?.name : currentUserData?.name} 
          ParentName
        </h2> */}
            <div className="relative flex items-center">
              <User className="mr-7 h-8 min-w-8 rounded-full bg-white p-1 text-[#FF8B13]" />
              <div className="group absolute left-7 flex align-middle">
                <DownArrow
                  className="m-4 h-4 -rotate-90 cursor-pointer text-primary transition-all group-hover:rotate-90"
                  // onClick={toggleDropdown}
                />
                <div className="absolute -right-4 top-10 z-[100] hidden w-max flex-col rounded-xl bg-[#26355A] p-2 group-hover:flex md:px-4 md:py-3">
                  {/* <div
                className="flex h-[64px] w-full items-center gap-5"
                // onClick={() => setPinModal(true)}
              >
                <Image
                  src={Useraccount}
                  alt="useraccount"
                  className="cursor-pointer"
                />
                <h1
                  href={"parent/account"}
                  className="cursor-pointer text-lg text-white"
                >
                  Account
                </h1>
              </div>
              <Link
                className="flex h-[64px] w-full items-center gap-5"
                href={"/familypage"}
              >
                <Image src={Family} alt="Family" />
                <p className="text-lg text-white">Family</p>
              </Link>
              <div className="flex h-[64px] w-full items-center gap-5">
                <Image src={Lock} alt="Lock" />
                <h1 className="text-lg text-white">PIN Lock</h1>
              </div> */}

                  <div
                    onClick={() => signOut()}
                    className="flex w-full cursor-pointer items-center gap-5"
                  >
                    <Image src={Logout} alt="Logout" />
                    <h1 className="cursor-pointer text-lg text-white">
                      Logout
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <Image src={Bell} alt="bell" sizes="auto" />
          </div>
        ) : (
          <Link
            href={"/login"}
            className="button_text flex max-w-[258px] cursor-pointer items-center rounded-[50px] bg-grad_1 px-6 py-3 text-white max-md:ml-auto"
          >
            Login
          </Link>
        )}
      </div>
    </>
  );
};

export default Navbar;
