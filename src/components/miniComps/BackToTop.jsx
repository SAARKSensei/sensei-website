"use client";

import Image from "next/image";
import React from "react";
import { useEffect, useState } from "react";
import UpArrow from "@/Images/uparrow.svg?url";

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
      className={`fixed bottom-44 right-10 z-10 h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-[50%] bg-gray-100 bg-opacity-45 p-2 hover:bg-[#F8BF3B] md:right-8 md:h-[52px] md:w-[52px] md:p-3 ${scrolled ? "block" : "hidden"} `}
      src={UpArrow}
      alt="uparrow"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    />
  );
};

export default BackToTop;
