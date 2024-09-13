"use client";

import Image from "next/image";
import { useState } from "react";

import { getSubColour } from "@/utils/logic";

const Subject = ({ subject, action, selected }) => {
  // console.log("subject", selected);

  const [show, setShow] = useState(false);
  let subjectName = subject?.subjectName;
  let Int = 24;
  let Gam = 12;
  if (subject?.subjectId === "2c92a70291d9309a0191dbcb6bff0039") {
    Int = 8;
    Gam = 4;
  }

  const colours = getSubColour(subjectName);
  const colorforinnerSubjectDiv = {
    background: colours.innerSubjectDivColor,
  };
  const sizeAndColorForInnerBar = {
    background: colours.innerBarColor,
    width: `${subject?.progress}%`,
  };
  return (
    <>
      <div
        onClick={action}
        className={`relative flex h-[153px] min-w-[303px] flex-shrink-0 items-end md:max-w-[min(400px,100vw)]`}
      >
        {/* {specificSubjectPicture?.length === 2 ? (
          <>
    w        <Image
              sizes="auto"
              className="absolute right-[41px] top-0"
              src={specificSubjectPicture[0]}
              alt={subjectName}
            />
            <Image
              sizes="auto"
              className="absolute right-0 top-[33px]"
              src={specificSubjectPicture[1]}
              alt={subjectName}
            />
          </>
        ) : ( */}
        <Image
          sizes="auto"
          className="absolute right-[10px] top-0 z-10 md:right-[31px]"
          src={colours.specificSubjectPicture}
          alt={"sub image"}
        />
        {/* )} */}
        <div
          style={colorforinnerSubjectDiv}
          className={`${selected ? "drop-shadow-lg" : " "} flex h-[120px] w-full cursor-pointer flex-col items-start gap-1.5 rounded-lg px-[10px] py-4`}
          onClick={() => setShow(!show)}
        >
          {/* <p className="font-Quicksand text-3xl font-normal leading-6 tracking-tighter text-[#2C3D68]">
            {subject?.progress}%
          </p> */}
          <p className="font-Quicksand my-auto text-lg font-bold tracking-tighter text-[#333]">
            {subjectName}
          </p>
          <p className="font-Quicksand text-md my-auto font-normal tracking-tighter text-[#333]">
            Interactive Activity : {Int}
          </p>
          <p className="font-Quicksand text-md my-auto font-normal tracking-tighter text-[#333]">
            Gamified Activity : {Gam}
          </p>
          {/* <div className="h-4 w-full flex-shrink-0">
            <div className="h-4 w-full flex-shrink-0 rounded-[18px] bg-white">
              <div
                className="h-4 rounded-[18px]"
                style={sizeAndColorForInnerBar}
              ></div>
            </div>
          </div> */}
        </div>
      </div>
      {/* {show && (
        <div className="animate-fade-in inline-flex h-[653px] w-[353px] flex-col items-start gap-[30px] sm:hidden sm:bg-[#E8ECF0]">
          <Activities />
        </div>
      )} */}
    </>
  );
};

export default Subject;
