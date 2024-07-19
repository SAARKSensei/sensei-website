import React from "react";
import Image from "next/image";

import PsychologistsImg from "@/assets/us/psychologists.png";
import Aparjita from "../assets/us/aparjita.svg?url";
import RandomBoy1 from "../assets/us/randomboy1.png";
import RandomBoy2 from "../assets/us/randomboy2.png";
import RnadomGirl1 from "../assets/us/randomgirl1.png";
import RnadomGirl2 from "../assets/us/randomgirl2.png";
import RnadomGirl3 from "../assets/us/randomgirl3.png";
import RnadomGirl4 from "../assets/us/randomgirl4.png";

import FreeActivityBtn from "./FreeActivityBtn";
import Stars from "./Stars";

const Psychologists = () => {
  return (
    <div className="container relative mx-auto flex flex-col items-center justify-center gap-10 px-5 md:flex-row">
      <div className="block w-full md:hidden">
        <Image
          src={PsychologistsImg}
          alt="psychologists"
          sizes="auto"
          className=""
        />
      </div>
      <div className="group hidden w-1/2 md:block">
        <div className="relative max-w-full md:h-fit md:min-h-[443px]">
          <div className="absolute left-[24%] top-[12%] h-11 w-11 rounded-md bg-[#9FC5EF]" />
          <div className="absolute left-[65%] top-[4%] h-11 w-11 rounded-md bg-[#3AA176] transition-all duration-500 group-hover:left-[69%] group-hover:top-[8%]" />
          <div className="absolute right-[18%] top-[50%] h-11 w-11 rounded-md bg-[#F8BF3B]" />
          <div className="absolute bottom-[11%] right-[32%] h-11 w-11 rounded-md bg-[#F6B0A8]" />
          <div className="absolute bottom-[11%] left-[18%] h-11 w-11 rounded-md bg-[#EF5F3D] transition-all duration-500 group-hover:bottom-[15%] group-hover:left-[15%]" />
          <Image
            src={Aparjita}
            alt="aparjita"
            sizes="auto"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 group-hover:scale-110"
          />
          <Image
            src={RnadomGirl1}
            alt="random girl"
            sizes="auto"
            className="absolute left-[2%] top-[12%] w-28 transition-all duration-500 group-hover:left-0 group-hover:top-[15%]"
          />
          <Image
            src={RandomBoy1}
            alt="random boy"
            sizes="auto"
            className="absolute left-[40%] top-0 w-[90px] transition-all duration-500 group-hover:-top-[5%]"
          />
          <Image
            src={RnadomGirl2}
            alt="random girl"
            sizes="auto"
            className="absolute right-[8%] top-[20%] w-[93px] transition-all duration-500 group-hover:right-[4%]"
          />
          <Image
            src={RnadomGirl3}
            alt="random girl"
            sizes="auto"
            className="absolute bottom-[2%] right-0 w-36 transition-all duration-500 group-hover:-right-[4%] group-hover:bottom-0"
          />
          <Image
            src={RnadomGirl4}
            alt="random girl"
            sizes="auto"
            className="absolute bottom-0 left-[30%] w-[92px] transition-all duration-500 group-hover:-bottom-[4%]"
          />
          <Image
            src={RandomBoy2}
            alt="random boy"
            sizes="auto"
            className="absolute left-[7%] top-[45%] w-[85px] transition-all duration-500 group-hover:left-[3%] group-hover:top-[49%]"
          />
        </div>
      </div>
      <div className="relative flex w-full flex-col gap-6 md:w-1/2">
        <Stars />
        <div className="flex w-full flex-col gap-4">
          <p className="body_2 text-secondary">WHAT INDIAN PSYCHOLOGISTS SAY</p>
          <p className="font-Nunito text-2xl font-bold !leading-[3.5rem] md:text-4xl lg:text-5xl">
            Child with strong socio-emotional skills are better equipped to ⏱️{" "}
            <span className="italic text-primary">
              manage daily challenges,
            </span>{" "}
            😇{" "}
            <span className="italic text-[#3AA176]">
              build positive relationships
            </span>{" "}
            and{" "}
            <span className="italic text-[#0764A7]">
              🧠 make informed decisions
            </span>
          </p>
        </div>
        <FreeActivityBtn />
      </div>
    </div>
  );
};

export default Psychologists;
