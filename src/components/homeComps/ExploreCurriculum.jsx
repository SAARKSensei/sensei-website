"use client";

import Marquee from "react-fast-marquee";
import { ScrollButton, ScrollCard } from "./ScrollCard";
import scrollBg from "@/assets/in-Use/scrollBg.svg?url";
import Image from "next/image";
import Link from "next/link";

import { ScrollButtonData, ScrollCardData } from "@/utils/data";

const ExploreCurriculum = () => {
  return (
    <div className="relative flex h-fit w-screen flex-col overflow-hidden">
      <Image src={scrollBg} alt="Background" layout="fill" objectFit="cover" />
      <div className="container mx-auto z-10 flex flex-1 flex-col items-center justify-start py-5 md:py-8">
        <div className="mt-2 md:mt-8 text-center font-['Nunito'] text-3xl md:text-4xl font-black capitalize leading-tight md:leading-[60px] text-white">
          Explore Our Curriculum
        </div>

        <div className="w-full mt-6 md:mt-8 flex flex-col space-y-6 md:space-y-8">
          <div className="w-full overflow-hidden">
            <Marquee pauseOnHover={true} direction="right" speed={150} gradient={false}>
              <div className="flex">
                {ScrollButtonData.map((item, index) => (
                  <ScrollButton key={`first-right-${index}`} {...item} />
                ))}
              </div>
            </Marquee>
          </div>
          
          <div className="w-full overflow-hidden">
            <Marquee pauseOnHover={true} direction="left" speed={150} gradient={false}>
              <div className="flex">
                {ScrollButtonData.map((item, index) => (
                  <ScrollButton key={`second-left-${index}`} {...item} />
                ))}
              </div>
            </Marquee>
          </div>
          
          <div className="w-full overflow-hidden" style={{ maxHeight: "calc(100vh - 350px)" }}>
            <Marquee pauseOnHover={true} speed={100} gradient={false}>
              <div className="flex pb-12">
                {ScrollCardData.map((item, index) => (
                  <ScrollCard key={`card-${index}`} {...item} />
                ))}
              </div>
            </Marquee>
          </div>
        </div>

        <div className="mt-6 md:mt-8 mb-6 md:mb-8 relative z-20">
          <Link href="/subjects/emotionalwellness">
          <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#ff8b13] px-4 py-3 md:px-5 md:py-3.5 shadow-[0px_1px_1px_0px_rgba(0,0,0,0.12),0px_2px_5px_0px_rgba(103,110,118,0.08)] transition-all hover:bg-amber-600">
            <span className="text-center font-['Nunito'] text-base md:text-lg font-black leading-normal text-white">
              See All
            </span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
            >
              <path
                d="M11.25 3.75L17.5 10M17.5 10L11.25 16.25M17.5 10H2.5"
                stroke="white"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExploreCurriculum;