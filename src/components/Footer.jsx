import React from "react";
import Image from "next/image";
import SenseiLogo from "@/assets/mainlogo.svg";
import Link from "next/link";
import minisaark from "@/assets/minisaark.svg?url";
import Msme from "@/assets/msme.svg?url";
import startIndia from "@/assets/startIndia.svg?url";
import mail from "@/assets/mail.svg?url";
import location from "@/assets/location.svg?url";
import phone from "@/assets/phone.svg?url";
import Stars from "@/assets/stars.svg?url";
import { navLinks } from "@/utils/data";
const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <div className="">
      <div className="flex flex-col flex-wrap justify-center gap-4 rounded-[calc(4vw)] bg-grad_1 p-4 text-xs font-normal text-slate-200 sm:flex-row sm:flex-nowrap sm:gap-10 md:rounded-b-none md:text-base lg:gap-20">
        <span className="flex items-center gap-2">
          {" "}
          <Image
            className="min-h-10 w-max min-w-10 rounded-full bg-white p-2"
            src={phone}
            alt="phone"
          />
          96659 52556
        </span>
        <span className="flex items-center gap-2">
          <span className="min-h-10 min-w-10 rounded-full bg-white p-2">
            <Image className="mt-[2px]" alt="mail" src={mail} sizes="auto" />
          </span>
          connect@sensei.org.in
        </span>

        <span className="flex items-center gap-2">
          <Image
            className="max-h-10 w-max min-w-10 rounded-full bg-white p-2"
            src={location}
            alt="location"
            sizes="auto"
          />
          Pune, Maharastra
        </span>
      </div>
      <div className="bg-gradient-to-t from-[#2C3D68] to-[#0764A7]">
        <div
          style={{
            backgroundImage: `url(${Stars.src})`,
          }}
          className="w-max-full rrounded-bl-none rrounded-[calc(4vw)] md:rrounded-t-none relative p-6 md:p-10 min-[1300px]:p-20"
        >
          <div className="flex flex-col justify-around gap-5 md:flex-row">
            <div className="flex flex-wrap justify-around gap-5 md:flex-col md:justify-between">
              <div className="flex grow items-center justify-around gap-2 md:gap-5 lg:gap-10">
                <div className="flex w-fit flex-col items-center">
                  <SenseiLogo className="w-fit text-white md:h-[70px] lg:h-[97px]" />
                  <p className="flex flex-wrap justify-center pt-0 text-xs text-white">
                    A product by &nbsp;
                    <Image
                      alt="minisaark"
                      className="relative"
                      src={minisaark}
                      sizes="auto"
                    />
                    <span>&nbsp;Edu. Pvt. Ltd.</span>
                  </p>
                </div>
                <h1 className="font-NunitoSans text-lg font-bold text-white sm:text-xl md:text-3xl lg:text-[42px]">
                  Life-Skills
                  <br />
                  Education
                </h1>
              </div>

              <div className="flex justify-center gap-4">
                <Image src={Msme} alt="msme" sizes="auto" />
                <Image src={startIndia} alt="startIndia" sizes="auto" />
              </div>
            </div>
            <div className="-order-1 flex-grow-[.3] md:order-none">
              <div className="flex justify-around gap-10 text-sm md:justify-normal md:text-base lg:gap-20">
                <div className="flex cursor-pointer flex-col gap-3 font-NunitoSans text-sm font-normal text-white md:gap-4">
                  {navLinks.map((link, index) => (
                    <Link key={index} href={link.link}>
                      <h2>{link.title}</h2>
                    </Link>
                  ))}
                </div>
                <div className="flex cursor-pointer flex-col gap-3 font-NunitoSans text-sm font-normal text-white md:gap-4">
                  <h2></h2>
                  <h2></h2>
                  <Link
                    href={
                      "https://www.facebook.com/people/Sensei/61550832106968/"
                    }
                  >
                    <h2>Facebook</h2>
                  </Link>
                  <Link href={"https://x.com/senseilifeskill"}>
                    <h2>Twitter</h2>
                  </Link>
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
              <p className="mml-[10%] mx-auto mt-5 hidden basis-full font-NunitoSans text-xs font-light text-gray-300 md:block md:text-sm md:font-normal">
                © {year} SAARK Edu. Pvt. Ltd. All rights reserved.
              </p>
            </div>
            <span className="mx-4 h-[1.5px] bg-gradient-to-r from-gray-500 via-white to-gray-500 md:hidden"></span>
            <p className="mx-auto basis-full font-NunitoSans text-xs font-light text-gray-300 md:hidden md:text-sm md:font-normal">
              © {year} SAARK Edu. Pvt. Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
