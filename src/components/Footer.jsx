"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import SenseiLogo from "@/assets/mainlogo.svg";
import Link from "next/link";
import Msme from "@/assets/msme.svg";
import startIndia from "@/assets/startIndia.svg";
import MiniSaark from "@/assets/minisaark.svg"
import mail from "@/assets/mail.svg";
import location from "@/assets/location.svg";
import phone from "@/assets/phone.svg";
import Stars from "@/assets/stars.svg";
const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();

  let show = useRef();

  show.current = true;
  useEffect(() => {
    if (window.innerWidth < 500) {
      show.current = false
    } else if (window.innerWidth > 500) {
      show.current = true;
    }
  }, [])


  return (
    <div>
      <div className="flex-col sm:flex-row flex-wrap sm:flex-nowrap rounded-[10px] sm:rounded-t-[60px] sm:rounded-b-none bg-grad_1 gap-2.5 sm:gap-2.5 lg:gap-[120px] justify-center px-6 py-5 md:px-20 md:py-5 flex md:text-base text-xs font-normal text-slate-200">
        <span className="w-fit flex gap-5 items-center">
          <Image className="mt-[2px] bg-white min-w-10 min-h-10 rounded-full p-2" alt="mail" src={mail} sizes="auto" />
          <p className="font-Nunito font-medium text-base">connect@sensei.org.in</p>
        </span>
        <span className="w-fit flex gap-5 items-center">
          {" "}
          <Image
            className="bg-white w-max min-w-10 min-h-10 rounded-full p-2"
            src={phone}
            alt="phone"
          />
          <p className="font-Nunito font-medium text-base">96659 52556</p>
        </span>
        <span className="w-fit flex gap-5 items-center">
          <Image
            className="bg-white w-max min-w-10 max-h-10 rounded-full p-2"
            src={location}
            alt="location"
            sizes="auto"
          />
          <p className="font-Nunito font-medium text-base">Pune, Maharastra</p>
        </span>
      </div>
      <div className="bg-[#2C3D68] rounded-[10px] sm:rounded-none sm:rounded-b-[20px] px-5 pt-16 pb-6">
        <div
          style={{
            backgroundImage: show ? "" : `url(${Stars.src})`,
          }}
          className="relative w-max-full"
        >
          <div className="flex flex-col justify-around md:flex-row gap-5 ">
            <div className="flex flex-wrap md:flex-col gap-5 justify-around md:justify-between">
              <div className="w-full flex items-center grow gap-2.5 md:gap-5 lg:gap-10">
                <div className="w-fit flex flex-col items-center ">
                  <Image
                    src={SenseiLogo}
                    size="auto"
                    className="w-fit sm:w-10 md:w-52"
                    alt="senseilogo"
                  />
                  <div className="hidden md:flex gap-1 text-white font-Nunito font-normal text-xs">
                    <p>A product by</p>
                    <Image
                      src={MiniSaark}
                      alt="mini saark"
                      sizes="auto"
                    />
                    <p>Edu. Pvt. Ltd.</p>
                  </div>
                </div>
                <h1
                  className="text-sm sm:text-lg leading-4 
                md:text-3xl lg:text-[42px] font-NunitoSans text-white font-bold"
                >
                  Life-Skills
                  <br />
                  Education
                </h1>
                <div className="flex flex-col text-white ml-auto gap-1 font-NunitoSans font-normal text-xs leading-4 md:hidden">
                  <p>9665952556</p>
                  <p>connect@sensei.org.in</p>
                </div>
              </div>

              <div className="flex items-center gap-24">
                <Image src={Msme} alt="msme" sizes="auto" />
                <Image src={startIndia} alt="startIndia" sizes="auto" />
              </div>
            </div>
            <div className="flex-grow-[.3] -order-1 md:order-none">
              <div className="flex gap-10 lg:gap-20 text-sm md:justify-normal md:text-base">
                <div className="w-1/2 cursor-pointer text-[#FF8B13] font-NunitoSans font-regular text-base leading-5 flex flex-col gap-2.5 md:gap-4">
                  <h2>About</h2>
                  <h2>Growers</h2>
                  <h2>Merchants</h2>
                  <h2>Partners</h2>
                  <h2>Contact</h2>
                </div>
                <div className="w-1/2 cursor-pointer text-white font-NunitoSans font-normal text-sm flex flex-col gap-2.5 leading-5 md:gap-4">
                  <h2>Facebook</h2>
                  <h2>Twitter</h2>
                  <Link
                    href={
                      "https://www.linkedin.com/company/mr-sensei/?viewAsMember=true"
                    }
                  >
                    <h2>Linkedin</h2>
                  </Link>
                  <Link
                    href={"https://www.instagram.com/the_sensei_community/"}
                  >
                    <h2>Instagram</h2>
                  </Link>
                </div>
              </div>
              <p className="hidden mt-5 mml-[10%]  md:block basis-full mx-auto text-gray-300 font-NunitoSans md:font-normal font-light text-xs md:text-sm">
                © {year} SAARK Edu. Pvt. Ltd. All rights reserved.
              </p>
            </div>
            <span className="md:hidden mx-4 h-[1.5px] bg-gradient-to-r from-gray-500 via-white to-gray-500"></span>
            <p className="md:hidden basis-full mx-auto text-gray-300 font-NunitoSans md:font-normal font-normal text-xs md:text-sm leading-3">
              © {year} SAARK Edu. Pvt. Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
