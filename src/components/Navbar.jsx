import React from "react";
import Image from "next/image";
import Link from "next/link";
// import { useSelector } from "react-redux";
// import { signOut } from "next-auth/react";

import Phoneicon from "@/assets/phone.svg";
import DownArrow from "@/assets/varroww.svg";
import mainLogo from "@/assets/Main logo.svg";
import user from "@/assets/user.svg";
import Bell from "@/assets/bell.svg";
import Logout from "@/assets/logoutnavbar.svg";
import Useraccount from "@/assets/useraccount.svg";
import Family from "@/assets/family1.svg";
import Lock from "@/assets/lock1.svg";

const Navbar = () => {
  // const parentData = useSelector((state) => state?.parents?.data);
  // const currentUserData = useSelector((state) => state?.currentUser?.data);

  return (
    <div className="flex justify-between items-center w-full h-auto py-2 rounded-b-2xl px-5 mg:px-10 lg:px-20 bg-[#2C3D68] ">
      <Image src={mainLogo} alt="main logo" className="w-[102px] h-12" />
      <div className="flex items-center justify-between gap-2">
        <Link
          href=""
          className=" max-sm:hidden flex items-center gap-1 text-[#F58720] font-Nunito font-bold italic text-base"
        >
          <span>For support</span>
          <Image src={Phoneicon} alt="phone icon" className="w-6 h-6" />
          <span>96659 52556</span>
        </Link>
        <h2 className="text-white font-bold font-Nunito text-lg">
          {/* {parentData?.name ? parentData?.name : currentUserData?.name} */}
          ParentName
        </h2>
        <div className="flex relative items-center">
          <Image
            alt="user"
            src={user}
            className="text-[#FF8B13] mr-7 bg-white rounded-full min-w-8 h-8 p-1"
          />
          <div className="flex absolute left-7 align-middle group ">
            <Image
              src={DownArrow}
              alt="down arrow"
              className=" h-4 m-4  -rotate-90 group-hover:rotate-90 transition-all cursor-pointer"
              // onClick={toggleDropdown}
            />
            <div className="hidden group-hover:flex rounded-xl py-3 px-4 w-max bg-[#26355A] flex-col absolute -right-4 top-10 z-50">
              <div
                className=" h-[64px] w-full flex items-center gap-5"
                // onClick={() => setPinModal(true)}
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
                <p className="text-lg	text-white">Family</p>
              </Link>
              <div className=" h-[64px] w-full flex items-center gap-5">
                <Image src={Lock} alt="Lock" />
                <h1 className="text-lg	text-white">PIN Lock</h1>
              </div>
              <div
                className="h-[64px] w-full flex items-center gap-5 cursor-pointer"
                // onClick={() => signOut()}
              >
                <Image src={Logout} alt="Logout" />
                <h1 className="text-lg cursor-pointer	text-white">Logout</h1>
              </div>
            </div>
          </div>
        </div>
        <Image src={Bell} alt="bell" sizes="auto" />
      </div>
    </div>
  );
};

export default Navbar;
