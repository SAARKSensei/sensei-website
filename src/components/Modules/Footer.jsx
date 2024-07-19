import React from "react";
import Image from "next/image";
import SenseiLogo from "../../Images/Main logo.svg";
import Link from "next/link";
import minisaark from "../../Images/minisaark.svg";
import Msme from "../../Images/msme.svg";
import startIndia from "../../Images/startIndia.svg";
import mail from "../../Images/mail.svg";
import location from "../../Images/location.svg";
import phone from "../../Images/phone.svg";

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <>
      <div className="flex-col sm:flex-row  flex-wrap sm:flex-nowrap rounded-[calc(4vw)] md:rounded-b-none grad-bg-2 gap-4 sm:gap-10 lg:gap-20 justify-center p-4 flex md:text-base text-xs font-normal text-slate-200">
        <span className="flex gap-2 items-center">
          {" "}
          <Image
            className="bg-white w-max  min-w-10 min-h-10 rounded-full p-2"
            src={phone}
            alt="phone"
          />
          96659 52556
        </span>
        <span className="flex gap-2 items-center">
          <span className=" bg-white min-w-10 min-h-10 rounded-full p-2 ">
            <Image className="mt-[2px]" alt="mail" src={mail} sizes="auto" />
          </span>
          connect@sensei.org.in
        </span>

        <span className="flex gap-2 items-center">
          <Image
            className="bg-white w-max min-w-10 max-h-10 rounded-full p-2"
            src={location}
            alt="location"
            sizes="auto"
          />
          Pune, Maharastra
        </span>
      </div>
      <div className="relative w-max-full bg-[#2C3D68] rrounded-bl-none rrounded-[calc(4vw)] md:rrounded-t-none p-6 md:p-10 min-[1300px]:p-20 ">
        <div className="flex flex-col justify-around md:flex-row gap-5 ">
          <div className="flex flex-wrap md:flex-col gap-5 justify-around md:justify-between  ">
            <div className=" flex items-center grow justify-around gap-2 md:gap-5 lg:gap-10">
              <div className="w-fit flex flex-col items-center ">
                <Image
                  src={SenseiLogo}
                  size="auto"
                  className="w-fit md:h-[70px] lg:h-[97px] "
                  alt="senseilogo"
                />
                <p className=" justify-center  pt-0 text-xs flex flex-wrap text-white">
                  A product by &nbsp;
                  <Image
                    alt="minisaark"
                    className="relative  "
                    src={minisaark}
                    sizes="auto"
                  />
                  <span>&nbsp;Edu. Pvt. Ltd.</span>
                </p>
              </div>
              <h1
                className="text-lg sm:text-xl 
               md:text-3xl lg:text-[42px]  font-NunitoSans text-white font-bold "
              >
                Life-Skills
                <br />
                Education
              </h1>
            </div>

            <div className="flex justify-center  gap-4">
              <Image src={Msme} alt="msme" sizes="auto" />
              <Image src={startIndia} alt="startIndia" sizes="auto" />
            </div>
          </div>
          <div className=" flex-grow-[.3] -order-1 md:order-none">
            <div className="  flex gap-10 lg:gap-20 text-sm justify-around md:justify-normal md:text-base">
              <div className="cursor-pointer text-white font-NunitoSans font-normal text-sm flex flex-col gap-3 md:gap-4">
                <h2>About</h2>
                <h2>Growers</h2>
                <h2>Merchants</h2>
                <h2>Partners</h2>
                <h2>Contact</h2>
              </div>
              <div className="cursor-pointer text-white font-NunitoSans font-normal text-sm flex flex-col gap-3 md:gap-4">
                <h2>Facebook</h2>
                <h2>Twitter</h2>
                <Link
                  href={
                    "https://www.linkedin.com/company/mr-sensei/?viewAsMember=true"
                  }
                >
                  <h2>Linkedin</h2>
                </Link>
                <Link href={"https://www.instagram.com/the_sensei_community/"}>
                  <h2>Instagram</h2>
                </Link>
              </div>
            </div>
            <p className="hidden mt-5 mml-[10%]  md:block basis-full mx-auto text-gray-300 font-NunitoSans md:font-normal font-light text-xs md:text-sm">
              © {year} SAARK Edu. Pvt. Ltd. All rights reserved.
            </p>
          </div>
          <span className="md:hidden mx-4 h-[1.5px] bg-gradient-to-r from-gray-500 via-white to-gray-500"></span>
          <p className="md:hidden basis-full mx-auto text-gray-300 font-NunitoSans md:font-normal font-light text-xs md:text-sm">
            © {year} SAARK Edu. Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};
export default Footer;
