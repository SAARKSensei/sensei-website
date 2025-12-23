"use client";
import React from "react";
import Link from "next/link";
import Varrow from "@/assets/in-Use/downArrow.svg?url";

import Image from "next/image";

const EmotionNav = ({ name }) => {
  return (
    <>
      <div className="container mx-auto flex w-[80vw] items-center gap-4 rounded-[10px] bg-white max-sm:w-[90vw] sm:p-5">
        <div className="text-grad text-grad flex flex-wrap items-center gap-2">
          <Link href="/dashboard">
            <span className="flex cursor-pointer items-center">
              <svg
                width="33"
                height="16"
                viewBox="0 0 33 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM31.5 9C32.0523 9 32.5 8.55228 32.5 8C32.5 7.44772 32.0523 7 31.5 7V9ZM1 9H31.5V7H1V9Z"
                  fill="#FF8B13"
                />
              </svg>

              <h1 className="ml-2 body_1 w-fit text-primary">Back</h1>
            </span>
          </Link>
          {/* <span className="body3_b"> Module Name</span> */}
          {/* <Image src={varrow} alt="down arrow" className="max-w-2 -rotate-90" />
          <span className=" border-l border-solid border-[#2C3D68] h-[25px] " />
          <span className="bg-gradient-to-t from-[#0764A7] to-[#2C3D68] text-transparent bg-clip-text">
            Session 1
          </span>
          <Image src={varrow} alt="down arrow" className="max-w-2 -rotate-90" /> */}
          {/* <span className="hidden h-[25px] border-l border-solid border-[#2C3D68] sm:block" /> */}
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
