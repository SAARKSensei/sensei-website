import React from "react";
import Image from "next/image";

import varrow from "@/Images/varroww.svg";

const EmotionNav = () => {
  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-10 mx-auto flex flex-col flex-wrap gap-1 whitespace-nowrap rounded-2xl bg-white p-4 pb-20 md:mt-8 min-[800px]:bottom-auto min-[800px]:h-[80px] min-[800px]:flex-row min-[800px]:flex-nowrap min-[800px]:items-center min-[800px]:justify-between min-[800px]:pb-4 min-[1000px]:w-10/12">
        <div className="relative flex h-fit w-fit items-center gap-2 whitespace-nowrap rounded-md border-[2px] border-[#0764A7] border-b-[#0764A7] border-t-[#2C3D68] bg-white px-4 py-3 font-Nunito text-lg font-bold">
          <span className="text-grad">&larr;Module Name</span>

          {/* <Image src={varrow} alt="down arrow" className="max-w-2 -rotate-90" />
          <span className=" border-l border-solid border-[#2C3D68] h-[25px] " />
          <span className="bg-gradient-to-t from-[#0764A7] to-[#2C3D68] text-transparent bg-clip-text">
            Session 1
          </span>

          <Image src={varrow} alt="down arrow" className="max-w-2 -rotate-90" /> */}
        </div>
        <h1 className="mmin-[1300px]:h-[35px] w-fit bg-gradient-to-l from-[#EF5F3D] via-[#F97A23] to-[#F8BF3B] bg-clip-text text-left font-Nunito text-2xl font-bold leading-normal text-transparent min-[1300px]:text-[42px] min-[1300px]:font-extrabold">
          Social Emotional Learning
        </h1>
        <span className="hidden h-[25px] border-l border-solid border-[#2C3D68] min-[800px]:block" />
        <h1 className="text-left font-Nunito text-xl text-[#FF8B13] min-[1300px]:text-2xl min-[1300px]:font-bold">
          Superhero Challenge
        </h1>
        <span className="self-x-end font absolute right-2 top-9 font-Nunito text-2xl font-medium leading-7 tracking-normal min-[800px]:static">
          30 mins
        </span>
      </div>
      <span className="block w-full min-[800px]:h-[100px]" />
    </>
  );
};

export default EmotionNav;
