import React from "react";
import Image from "next/image";

import VideoPlay from "./VideoPlay.jsx";

import Doctor from "@/Images/dr.png";
import Backgroud from "@/Images/background.svg?url";

const LeftSide = () => {
  return (
    <div className="relative h-screen w-full">
      <Image
        src={Backgroud}
        alt="background served with static path of image folder in src directory"
        className="h-screen w-screen"
      />
      <div className="absolute left-0 top-0 flex h-screen w-full items-center justify-center">
        <div className="h-[460px] w-[285px] rounded-md border-8 border-cyan-400">
          <VideoPlay />
        </div>
        <div className="backgroud-color relative z-20 -ml-8 h-72 w-52">
          <h5 className="px-6 pt-4 font-Nunito text-2xl font-bold text-white">
            The world is evolving and so are learning methods.
          </h5>
          <Image
            src={Doctor}
            alt="doctor pic"
            className="-ml-9 mt-[70px] h-28 w-28"
          />
          <div className="absolute left-20 top-40 mt-5 h-28 w-40 bg-[#FFF0DE]">
            <h5 className="px-2 font-sans font-bold">Dr. Aprajita Dixit</h5>
            <p className="px-2 pt-1 text-xs">
              Consultant Clinical Psychologist (RCI) | Mental Health Expert at
              MANODARPAN | Min of Education (MoE)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
