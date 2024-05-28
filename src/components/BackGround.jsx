import React from "react";
import Image from "next/image";
import Star from "@/assets/star.svg";
import Heart from "@/assets/heart.svg";
import Thumb from "@/assets/thumb.svg";
import Bulb from "@/assets/bulb.svg";
import Puzzle from "@/assets/puzzle.svg";
import SmileStar from "@/assets/smileStar.svg";
import fullSmileStar from "@/assets/fullSmileStar.svg";

const Background = () => {
  return (
    <div className="w-screen overflow-hidden absolute left-0 top-0 h-full z-[-1]">
      <Image
        src={Star}
        alt="star"
        width={150}
        height={150}
        className="absolute left-1/3"
      />
      <Image src={Heart} alt="heart" className="absolute top-1/4 left-3/4" />
      <Image src={Thumb} alt="thumb" className="absolute top-10 left-[5vw]" />
      <Image src={Bulb} alt="bulb" className="absolute top-10 right-0" />

      <Image src={Puzzle} alt="puzzle" className="absolute right-0 bottom-0" />
      <Image
        src={fullSmileStar}
        alt="fullSmileStar"
        sizes="auto"
        className="absolute right-3/4  top-2/3"
      />

      <Image
        src={SmileStar}
        alt="smilestar"
        className="absolute bottom-0  left-0"
      />
    </div>
  );
};

export default Background;
