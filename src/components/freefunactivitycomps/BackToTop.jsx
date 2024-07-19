"use client";

import Image from "next/image";
import React from "react";
import { useEffect, useState } from "react";
import UpArrow from "../../Images/uparrow.svg";

const BackToTop = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 300) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return window.removeEventListener("scroll", onscroll);
  }, []);
  return (
    <Image
      className={`z-10 fixed  bottom-44 right-10  p-2 md:p-3 md:right-8 w-[32px] h-[32px]  md:w-[52px] md:h-[52px] rounded-[50%] bg-gray-100 bg-opacity-45 hover:bg-[#F8BF3B] items-center justify-center cursor-pointer 
        ${scrolled ? "block" : "hidden"}        `}
      src={UpArrow}
      alt="uparrow"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    />
  );
};

export default BackToTop;
