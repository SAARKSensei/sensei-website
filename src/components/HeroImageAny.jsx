"use client";
import React, { useEffect, useState } from "react";
import boy from "@/assets/DSC_0354.png";
import boy1 from "@/assets/DSC_0355.png";
import girl from "@/assets/DSC_0356.png";
import ellipse from "@/assets/Ellipse.svg";
const Images = [
  { image: boy, color: "text-[#2C3D68]", rotate: "rotate-[12deg]" },
  { image: boy1, color: "text-[#9FC5EF]", rotate: "rotate-[-12deg]" },
  { image: girl, color: "text-[#3AA176]", rotate: "rotate-[20deg]" },
];
import Image from "next/image";
const HeroImageAny = ({ delay = 2000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === Images.length - 1 ? 0 : prevIndex + 1
      );
    }, delay);

    return () => clearTimeout(timeout);
  }, [currentIndex, delay]);
  return (
    <div className="relative mx-auto max-[900px]:left-[12vw] sm:top-1/2 bottom-1/2 min-[900px]:translate-y-[-50%] z-[0] w-[350px] h-[412px] max-[1150px]:w-[275px] max-[1150px]:h-[275px] max-sm:w-[175px] max-sm:h-[200px]">
      <Image
        src={Images[currentIndex].image}
        alt="boy"
        sizes="auto"
        className="absolute transition-opacity bottom-0 z-[1] rounded-full min-w-[176px] "
      />
      <div
        className={` ${Images[currentIndex].color} absolute transition-all duration-500 ease-in-out   aanimate-spin pt-[175px] max-[1150px]:pt-[137px] max-sm:pt-[87.7px] ${Images[currentIndex].rotate} bottom-0 z-0`}
      >
        {" "}
        <svg
          className=" w-[350px] max-[1150px]:w-[275px] max-sm:w-[175px]"
          viewBox="0 0 409 205"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-0.00181322 0.0068613C-0.00181795 54.1128 21.4917 106.003 59.7504 144.261C98.0091 182.52 149.899 204.014 204.005 204.014C258.111 204.014 310.001 182.52 348.26 144.261C386.518 106.003 408.012 54.1129 408.012 0.00692778L204.005 0.00687914L-0.00181322 0.0068613Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeroImageAny;
