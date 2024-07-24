"use client";
import React, { useRef, useState } from "react";
import Animatebg from "@/Animatebg";
import Image from "next/image";
import varrow from "@/Images/varroww.svg";
const Process = () => {
  const menuRef = useRef(null);
  const [trans, setTrans] = useState({
    transform: "translateX(0px)",
    width: "0px",
  });

  const handleMouseOver = (event) => {
    if (event.currentTarget.offsetWidth !== 0) {
      setTrans({
        transform: `translateX(${event.currentTarget.offsetLeft}px)`,
        width: `${event.currentTarget.offsetWidth}px`,
      });
    }
    //console.log(trans);
  };

  return (
    <Animatebg>
      <div className="flex items-center justify-between font-Nunito text-base text-white">
        <h1 className="text-left font-Nunito text-xl min-[1300px]:text-2xl min-[1300px]:font-bold">
          PROCESS
        </h1>
        <span className="fflex hidden cursor-pointer gap-8 rounded-md bg-white p-2 px-3">
          <Image src={varrow} alt="varrow" sizes="auto" className="" />
          <Image
            src={varrow}
            alt="varrow"
            sizes="auto"
            className="-rotate-180"
          />
        </span>
      </div>
      <div className="scroll overflow-x-auto">
        <div
          ref={menuRef}
          className="scroll relative my-4 flex min-h-fit min-w-fit items-center justify-between gap-4 whitespace-nowrap pb-4 font-Nunito text-base text-white"
        >
          <span className="absolute bottom-2 left-0 right-0 h-1 rounded-full bg-white"></span>
          <span
            style={trans}
            className="white absolute bottom-2 left-0 z-10 h-1 min-w-10 rounded-full bg-gradient-to-r from-[#F8BF3B] to-[#EF5F3D] transition-all duration-500"
          />
          <label
            onClick={handleMouseOver}
            // onMouseLeave={handleMouseLeave}
            for="Introduction"
            className="menu__link flex min-w-fit items-center gap-1"
          >
            <input
              defaultChecked
              name="process"
              type="radio"
              id="Introduction"
              className="peer/1 checked: appearance-none"
            />
            <svg
              className="min-h-[25px] min-w-[25px] rounded-full border-2 border-gray-400 from-[#F8BF3B] to-[#EF5F3D] p-[5px] text-gray-400 peer-checked/1:border-0 peer-checked/1:bg-gradient-to-r peer-checked/1:text-white"
              width="12"
              height="9"
              viewBox="0 0 12 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6678 2.58538L6.39275 7.72003C6.33911 7.82053 6.26849 7.91407 6.18133 7.99717L5.45949 8.685C5.01208 9.11137 4.28755 9.10397 3.84953 8.66847L0.323444 5.16228C-0.114579 4.72677 -0.106534 4.02153 0.340428 3.59517L1.06227 2.90733C1.50968 2.4814 2.23421 2.4888 2.67223 2.9243L4.65049 4.89166L9.34404 0.323036C9.78653 -0.107679 10.5111 -0.107679 10.9536 0.323036L11.6678 1.01827C12.1107 1.44899 12.1107 2.15423 11.6678 2.58538Z"
                fill="currentColor"
              />
            </svg>
            <h1 className="text-left font-Nunito text-xl min-[1300px]:text-2xl min-[1300px]:font-bold">
              Introduction
            </h1>{" "}
            <span className="text-xs">(5 minutes)</span>
          </label>

          <label
            onClick={handleMouseOver}
            // onMouseLeave={handleMouseLeave}
            for="PickEmotionCard2"
            className="menu__link flex min-w-fit items-center gap-1"
          >
            <input
              name="process"
              type="radio"
              id="PickEmotionCard2"
              className="peer/2 checked: appearance-none"
            />
            <svg
              className="min-h-[25px] min-w-[25px] rounded-full border-2 border-gray-400 from-[#F8BF3B] to-[#EF5F3D] p-[5px] text-gray-400 peer-checked/2:border-0 peer-checked/2:bg-gradient-to-r peer-checked/2:text-white"
              width="12"
              height="9"
              viewBox="0 0 12 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6678 2.58538L6.39275 7.72003C6.33911 7.82053 6.26849 7.91407 6.18133 7.99717L5.45949 8.685C5.01208 9.11137 4.28755 9.10397 3.84953 8.66847L0.323444 5.16228C-0.114579 4.72677 -0.106534 4.02153 0.340428 3.59517L1.06227 2.90733C1.50968 2.4814 2.23421 2.4888 2.67223 2.9243L4.65049 4.89166L9.34404 0.323036C9.78653 -0.107679 10.5111 -0.107679 10.9536 0.323036L11.6678 1.01827C12.1107 1.44899 12.1107 2.15423 11.6678 2.58538Z"
                fill="currentColor"
              />
            </svg>
            <h1 className="text-left font-Nunito text-xl min-[1300px]:text-2xl min-[1300px]:font-bold">
              Pick Emotion Card
            </h1>{" "}
            <span className="text-xs">(5 minutes)</span>
          </label>
          <label
            onClick={handleMouseOver}
            // onMouseLeave={handleMouseLeave}
            for="PickEmotionCard3"
            className="menu__link flex min-w-fit items-center gap-1"
          >
            <input
              name="process"
              type="radio"
              id="PickEmotionCard3"
              className="peer/3 checked: appearance-none"
            />
            <svg
              className="min-h-[25px] min-w-[25px] rounded-full border-2 border-gray-400 from-[#F8BF3B] to-[#EF5F3D] p-[5px] text-gray-400 peer-checked/3:border-0 peer-checked/3:bg-gradient-to-r peer-checked/3:text-white"
              width="12"
              height="9"
              viewBox="0 0 12 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6678 2.58538L6.39275 7.72003C6.33911 7.82053 6.26849 7.91407 6.18133 7.99717L5.45949 8.685C5.01208 9.11137 4.28755 9.10397 3.84953 8.66847L0.323444 5.16228C-0.114579 4.72677 -0.106534 4.02153 0.340428 3.59517L1.06227 2.90733C1.50968 2.4814 2.23421 2.4888 2.67223 2.9243L4.65049 4.89166L9.34404 0.323036C9.78653 -0.107679 10.5111 -0.107679 10.9536 0.323036L11.6678 1.01827C12.1107 1.44899 12.1107 2.15423 11.6678 2.58538Z"
                fill="currentColor"
              />
            </svg>
            <h1 className="text-left font-Nunito text-xl min-[1300px]:text-2xl min-[1300px]:font-bold">
              Pick Emotion Card
            </h1>{" "}
            <span className="text-xs">(5 minutes)</span>
          </label>
          <label
            onClick={handleMouseOver}
            // onMouseLeave={handleMouseLeave}
            for="PickEmotionCard4"
            className="menu__link flex min-w-fit items-center gap-1"
          >
            <input
              name="process"
              type="radio"
              id="PickEmotionCard4"
              className="peer/4 checked: appearance-none"
            />
            <svg
              className="min-h-[25px] min-w-[25px] rounded-full border-2 border-gray-400 from-[#F8BF3B] to-[#EF5F3D] p-[5px] text-gray-400 peer-checked/4:border-0 peer-checked/4:bg-gradient-to-r peer-checked/4:text-white"
              width="12"
              height="9"
              viewBox="0 0 12 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6678 2.58538L6.39275 7.72003C6.33911 7.82053 6.26849 7.91407 6.18133 7.99717L5.45949 8.685C5.01208 9.11137 4.28755 9.10397 3.84953 8.66847L0.323444 5.16228C-0.114579 4.72677 -0.106534 4.02153 0.340428 3.59517L1.06227 2.90733C1.50968 2.4814 2.23421 2.4888 2.67223 2.9243L4.65049 4.89166L9.34404 0.323036C9.78653 -0.107679 10.5111 -0.107679 10.9536 0.323036L11.6678 1.01827C12.1107 1.44899 12.1107 2.15423 11.6678 2.58538Z"
                fill="currentColor"
              />
            </svg>
            <h1 className="text-left font-Nunito text-xl min-[1300px]:text-2xl min-[1300px]:font-bold">
              Pick Emotion Card
            </h1>{" "}
            <span className="text-xs">(5 minutes)</span>
          </label>
        </div>
      </div>
      <div className="group">
        <ul className="list-disc p-5 text-white group-[#PickEmotionCard2:checked~&]:block">
          <li>
            Begin by discussing emotions with the children. Ask them to name
            different emotions they know.
          </li>
          <li>
            Explain the importance of understanding and expressing emotions for
            healthy communication and relationships.
          </li>
        </ul>
      </div>
    </Animatebg>
  );
};

export default Process;
