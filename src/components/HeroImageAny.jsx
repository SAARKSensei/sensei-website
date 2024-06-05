"use client";
import React, { useEffect, useState } from "react";
import boy from "@/assets/DSC_0354.png";
import boy1 from "@/assets/DSC_0355.png";
import girl from "@/assets/DSC_0356.png";
import ellipse from "@/assets/Ellipse.svg";
const Images = [
  { image: boy, color: "secondary", rotate: "rotate-[12deg]" },
  { image: boy1, color: "[#9FC5EF]", rotate: "rotate-[-12deg]" },
  { image: girl, color: "[#3AA176]", rotate: "rotate-[20deg]" },
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

      <Image
        className={` absolute transition-all duration-500 ease-in-out  aanimate-spin pt-[170px] max-[1150px]:pt-[88px] ${Images[currentIndex].rotate} bottom-0 z-0`}
        src={ellipse}
        alt="ellipse"
        sizes="auto"
      />
    </div>
  );
};

export default HeroImageAny;
