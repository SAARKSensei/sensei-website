import React from "react";
import Image from "next/image";
import Star from "@/assets/star.svg?url";
import Heart from "@/assets/heart.svg?url";
import Thumb from "@/assets/thumb.svg?url";
import Bulb from "@/assets/bulb.svg?url";
import Puzzle from "@/assets/puzzle.svg?url";
import SmileStar from "@/assets/smileStar.svg?url";
import fullSmileStar from "@/assets/fullSmileStar.svg?url";

const Background = () => {
  return (
    <div className="absolute left-0 top-0 z-[-1] h-full w-full overflow-hidden">
      <Image
        src={Star}
        alt="star"
        width={150}
        height={150}
        className="absolute left-1/3"
      />
      <Image src={Heart} alt="heart" className="absolute left-3/4 top-1/4" />
      <Image src={Thumb} alt="thumb" className="absolute left-[5vw] top-10" />
      <Image src={Bulb} alt="bulb" className="absolute right-0 top-10" />

      <Image src={Puzzle} alt="puzzle" className="absolute bottom-0 right-0" />
      <Image
        src={fullSmileStar}
        alt="fullSmileStar"
        sizes="auto"
        className="absolute right-3/4 top-2/3"
      />

      <Image
        src={SmileStar}
        alt="smilestar"
        className="absolute bottom-0 left-0"
      />
    </div>
  );
};

export default Background;
