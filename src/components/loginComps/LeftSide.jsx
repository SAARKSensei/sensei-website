import React from "react";
import Image from "next/image";

import VideoPlay from "@/components/miniComps/VideoPlay";

// import loginvideo from "/videos/login.mp4";
// import { Muxplayer } from "@/components/miniComps/VideoPlay";

const LeftSide = () => {
  return (
    <div className="m-auto h-full w-full mx-4 md:mx-2 sm:px-0">
      <div className="relative mx-auto flex h-full w-full max-w-[320px] sm:max-w-[360px] md:max-w-[400px] items-center justify-center">
        <VideoPlay />
        {/* <Muxplayer url={loginvideo} /> */}
        <div className="backgroud-color absolute left-[70%] top-[50%] z-20 h-fit w-32 sm:w-36 md:w-40 lg:w-52">
          <h5 className="h4 px-2 pt-1 sm:px-3 sm:pt-2 md:px-6 md:pt-4 text-sm sm:text-base font-bold text-white">
            The world is evolving and so are learning methods.
          </h5>
          <div className="ml-auto mt-3 sm:mt-4 md:mt-5 w-28 sm:w-32 md:w-36 bg-[#FFF0DE]">
            <h5 className="px-2 font-sans text-xs sm:text-sm font-bold">Dr. Aprajita Dixit</h5>
            <p className="px-2 pt-1 text-xs hidden sm:block">
              Consultant Clinical Psychologist (RCI) | Mental Health Expert at
              MANODARPAN | Min of Education (MoE)
            </p>
            <p className="px-2 pt-1 text-xs sm:hidden">
              Consultant Clinical Psychologist (RCI)
            </p>
          </div>
          <Image
            src={"/images/dr.png"}
            width={100}
            height={100}
            alt="doctor pic"
            className="absolute -left-16 sm:-left-18 md:-left-20 bottom-0 h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:-left-10"
          />
        </div>
      </div>
    </div>
  );
};

export default LeftSide;