"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { signOut } from "next-auth/react";

// import PinModal from "../Modals/pinmodal.jsx";

import Phoneicon from "@/Images/Phoneicon.png";
import DownArrow from "@/Images/varroww.svg?url";
import mainLogo from "@/Images/mainlogo.svg?url";
import user from "@/Images/user.svg?url";
import Bell from "@/Images/bell.svg?url";
import Logout from "@/Images/logoutnavbar.svg?url";

const Navbar = () => {
  const parentData = useSelector((state) => state?.parents?.data);
  const currentUserData = useSelector((state) => state?.currentUser?.data);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mg:px-10 flex h-auto w-full items-center justify-between rounded-b-2xl bg-[#2C3D68] px-5 py-2 lg:px-20">
      <Image src={mainLogo} alt="main logo" className="h-12 w-[102px]" />
      <div className="flex items-center justify-between gap-5">
        <div className="hidden items-center gap-2 sm:flex">
          <Link
            href=""
            className="font-Nunito text-base font-bold italic text-[#F58720]"
          >
            For support
          </Link>
          <Image src={Phoneicon} alt="phone icon" className="h-6 w-6" />
          <Link
            href=""
            className="font-Nunito text-base font-bold italic text-[#FF8B13]"
          >
            {" "}
            96659 52556
          </Link>
        </div>
        <div className="flex w-28 flex-row items-center justify-center gap-2 text-center">
          <h2 className="font-Nunito text-lg font-bold text-white">
            {parentData?.name ? parentData?.name : currentUserData?.name}
          </h2>
          <Image
            alt="user"
            src={user}
            className="h-8 min-w-8 rounded-full bg-white p-1 text-[#FF8B13]"
          />
          <div className="">
            <Image
              src={DownArrow}
              alt="down arrow"
              className="max-w-2 -rotate-90 cursor-pointer"
              onClick={toggleDropdown}
            />
            {isOpen && (
              <div className="absolute end-14 top-[50px] z-50 flex w-max flex-col rounded-xl bg-[#26355A] px-4 py-3">
                {/* <div
                    className=" h-[64px] w-full flex items-center gap-5"
                    onClick={() => setPinModal(true)}
                  >
                    <Image
                      src={Useraccount}
                      alt="useraccount"
                      className="cursor-pointer"
                    />
                    <h1
                      href={"parent/account"}
                      className=" cursor-pointer text-lg text-white"
                    >
                      Account
                    </h1>
                  </div>
                  <Link
                    className=" h-[64px] w-full flex items-center gap-5"
                    href={"/familypage"}
                  >
                    <Image src={Family} alt="Family" />
                    <p className="text-lg	text-white">
                      Family
                    </p>
                  </Link>
                  <div className=" h-[64px] w-full flex items-center gap-5">
                    <Image src={Lock} alt="Lock" />
                    <h1 className="text-lg	text-white">PIN Lock</h1>
                  </div> */}
                <div
                  className="flex h-[64px] w-full cursor-pointer items-center gap-5"
                  onClick={() => signOut()}
                >
                  <Image src={Logout} alt="Logout" />
                  <h1 className="cursor-pointer text-lg text-white">Logout</h1>
                </div>
              </div>
            )}
          </div>
        </div>
        <Image src={Bell} alt="bell" sizes="auto" />
      </div>
    </div>
  );
};

export default Navbar;
