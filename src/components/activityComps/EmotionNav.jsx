"use client";
import React from "react";
import Link from "next/link";
import Varrow from "@/Images/varroww.svg";
const EmotionNav = ({ name }) => {
  return (
    <>
      <div className="container mx-auto flex w-[80vw] items-center gap-4 rounded-[10px] bg-white p-4 shadow drop-shadow-md max-sm:w-[90vw] sm:p-5">
        <div className="text-grad text-grad flex flex-wrap items-center gap-2">
          <Link href="/dashboard" className="flex">
            <Varrow />
            <span className="relative right-3 top-[10.2px] h-[3px] w-8 rounded-full bg-primary sm:w-10" />
          </Link>
          {/* <span className="body3_b"> Module Name</span> */}
          {/* <Image src={varrow} alt="down arrow" className="max-w-2 -rotate-90" />
          <span className=" border-l border-solid border-[#2C3D68] h-[25px] " />
          <span className="bg-gradient-to-t from-[#0764A7] to-[#2C3D68] text-transparent bg-clip-text">
            Session 1
          </span>
          <Image src={varrow} alt="down arrow" className="max-w-2 -rotate-90" /> */}
          {/* <span className="hidden h-[25px] border-l border-solid border-[#2C3D68] sm:block" /> */}
          <h1 className="body_1 w-fit text-primary">{name} </h1>
        </div>
        {/* <h1 className="text-left font-Nunito text-xl text-[#FF8B13] min-[1300px]:text-2xl min-[1300px]:font-bold">
          Superhero Challenge
        </h1> */}
        {/* <span className="h5_b ml-auto text-secondary">30 mins</span> */}
      </div>
    </>
  );
};

export default EmotionNav;
