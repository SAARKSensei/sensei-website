import React from "react";
import Background from "@/components/BackGround.jsx";
import Image from "next/image";
import girl from "@/assets/girl.jpg";
import boy from "@/assets/boyj.jpg";
import boxes from "@/assets/boxes.svg";
import muser from "@/assets/miniuser.svg";
import flower from "@/assets/flower.svg";
import InfiniteScroll from "./InfiniteScroll";
import Navbar from "./Navbar";
const HeroSection = () => {
  return (
    <div>
      <Navbar />
      <div className="relative z-[0] ">
        <Background />
        <div className=" container py-20 mx-auto gap-10 flex flex-col w-full">
          <h1 className="max-w-[800px] mx-auto h2 lg:h1 text-center leading-snug">
            Life skills that empower your child in this digital world{" "}
            <span className="bg-grad_1 bg-clip-text text-transparent ">
              mentally
            </span>
          </h1>
          <div className="flex flex-wrap lg:flex-nowrap max-md:gap-10  my-5 md:my-0  justify-around">
            <div className="w-fit relative  pl-[64px] pr-[23px] pb-[20px]">
              <Image
                src={girl}
                alt="girl"
                height={254}
                width={189}
                className="rounded-full min-w-[189px] "
              />
              <div className="absolute bg-secondary p-4 bottom-0 left-0 rounded-lg">
                <Image src={boxes} alt="boxes" sizes="auto" />
              </div>
              <div className="absolute bg-primary p-2 top-0 right-1 rounded-lg">
                <Image src={muser} alt="muser" sizes="auto" />
              </div>{" "}
            </div>
            <div className="lg:order-1 max-md:order-1 w-fit relative ml-10 pr-[98px] pl-[27px] pb-[20px]">
              <Image
                src={boy}
                alt="boy"
                height={254}
                width={189}
                className="rounded-full min-w-[189px]"
              />
              <div className="absolute bg-white drop-shadow-lg p-2 bottom-0 w-[219px] h-[80px] right-1 rounded-lg">
                <Image
                  src={flower}
                  alt="flower"
                  sizes="auto"
                  className="right-5 absolute -top-7"
                />
                <div className=" w-[90%] bg-[#F2F2F2] h-[18px] rounded-full absolute bottom-4 left-0 right-0 mx-auto  ">
                  <span className=" bg-primary rounded-full w-1/2 h-full absolute" />
                </div>
              </div>
              <div className="absolute top-10 h-fit bg-orange-600 text-white w-[68px] text-center p-2 bottom-0 left-0 rounded-lg">
                &#x25B6;
              </div>{" "}
            </div>
            <div className="flex max-w-[416px] flex-col gap-4 md:gap-[44px] md:mt-[44px]">
              <div className="border rounded-full items-center p-[2px] pl-2 gap-2 border-grey_2 flex mx-auto body1_b max-w-[95vw] w-full h-[65px]">
                <h1 className="text-grey_2 ">+91</h1>
                <input
                  type="Number"
                  className="w-1 flex-grow [appearance:textfield] bg-transparent focus:outline-none"
                  maxLength={10}
                />
                <h4 className="button_text bg-grad_1 p-4 px-9 rounded-full text-white">
                  Login
                </h4>
              </div>
              <p className="body_3 text-grey_1 text-center">
                Designed by Psychologists & Counselors and aligned with National
                Education Policy 2020
              </p>
            </div>
          </div>
          <div className="flex gap-10 justify-around container flex-wrap">
            <div className="w-[200px]">
              <h1 className="h2 text-secondary">30 Lakhs</h1>
              <p className="body_3 text-grey_1">
                Class 10th student failed in 2023 board exams
              </p>
            </div>
            <div className="w-[200px]">
              <h1 className="h2 text-secondary">35%</h1>
              <p className="body_3 text-grey_1">
                Students have lack of social interaction{" "}
              </p>
            </div>
            <div className="w-[200px]">
              <h1 className="h2 text-secondary">1,673</h1>
              <p className="body_3 text-grey_1">
                Suicide cases due to failure in examination in year 2021{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <InfiniteScroll />
    </div>
  );
};

export default HeroSection;
