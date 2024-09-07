import React from "react";
import Image from "next/image";

import VideoPlay from "@/components/miniComps/VideoPlay";

import Doctor from "@/Images/dr.png";

const LeftSide = () => {
  return (
    <div className="my-auto h-full w-full">
      <div className="relative flex h-full w-full items-center justify-center">
        <VideoPlay />
        <div className="backgroud-color absolute left-[70%] top-[50%] z-20 h-fit w-40 lg:w-52">
          <h5 className="h4 px-3 pt-2 font-bold text-white md:px-6 md:pt-4">
            The world is evolving and so are learning methods.
          </h5>
          <div className="ml-auto mt-5 w-36 bg-[#FFF0DE]">
            <h5 className="px-2 font-sans font-bold">Dr. Aprajita Dixit</h5>
            <p className="px-2 pt-1 text-xs">
              Consultant Clinical Psychologist (RCI) | Mental Health Expert at
              MANODARPAN | Min of Education (MoE)
            </p>
          </div>
          <Image
            src={Doctor}
            alt="doctor pic"
            className="absolute -left-20 bottom-0 h-28 w-28 lg:-left-10"
          />
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
