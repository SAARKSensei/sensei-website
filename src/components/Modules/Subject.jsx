"use client";

import Image from "next/image";
import { useState } from "react";

import Activities from "./Activities";

import MentalHealthPic from "@/Images/mentalhealthpic.svg?url";
import SexEducationPic from "@/Images/sexeducationpic.svg?url";
import MoralScience from "@/Images/moralsciencepic.svg?url";
import CareerGuidance1 from "@/Images/careerguidance1.svg?url";
import CareerGuidance2 from "@/Images/careerguidance2.svg?url";

const Subject = ({
  subjectName,
  percentage,
  innerSubjectDivColor,
  innerBarColor,
  action,
}) => {
  const [show, setShow] = useState(false);

  const colorforinnerSubjectDiv = {
    background: innerSubjectDivColor,
  };

  const sizeAndColorForInnerBar = {
    background: innerBarColor,
    width: percentage,
  };

  let specificSubjectPicture;
  // {
  //   subjectName: "Emotional Wellness",
  //   percentage: "54%",
  //   innerSubjectDivColor: "#CEE2E5",
  //   innerBarColor: "#89DAE5",
  // },
  // {
  //   subjectName: "Self And Social Awareness",
  //   percentage: "36%",
  //   innerSubjectDivColor: "#FFD9B2",
  //   innerBarColor: "#FF8B13",
  // },
  // {
  //   subjectName: "Moral Guidence",
  //   percentage: "71%",
  //   innerSubjectDivColor: "#FCEECA",
  //   innerBarColor: "#FCD97D",
  // },
  switch (subjectName) {
    case "Emotional Wellness":
      specificSubjectPicture = MentalHealthPic;
      break;
    case "Self And Social Awareness":
      specificSubjectPicture = SexEducationPic;
      break;
    case "Moral Guidence":
      specificSubjectPicture = MoralScience;
      break;
    // case "Career Guidance":
    //   specificSubjectPicture = [CareerGuidance1, CareerGuidance2];
    //   break;
    default:
      break;
  }

  return (
    <>
      <div
        onClick={action}
        className="relative flex h-[153px] w-[min(353px,90vw)] flex-shrink-0 items-end"
      >
        {specificSubjectPicture.length === 2 ? (
          <>
            <Image
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
        ) : (
          <Image
            sizes="auto"
            className="absolute right-[41px] top-0"
            src={specificSubjectPicture}
            alt={subjectName}
          />
        )}
        <div
          className="flex h-[120px] w-full cursor-pointer flex-col items-start gap-1.5 rounded-lg px-[10px] py-4"
          style={colorforinnerSubjectDiv}
          onClick={() => setShow(!show)}
        >
          <p className="font-Quicksand text-3xl font-normal leading-6 tracking-tighter text-[#2C3D68]">
            {percentage}
          </p>
          <p className="font-Quicksand text-lg font-medium tracking-tighter text-[#333]">
            {subjectName}
          </p>
          <div className="h-4 w-full flex-shrink-0">
            <div className="h-4 w-full flex-shrink-0 rounded-[18px] bg-white">
              <div
                className="h-4 rounded-[18px]"
                style={sizeAndColorForInnerBar}
              ></div>
            </div>
          </div>
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
