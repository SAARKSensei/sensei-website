"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import { ReactTyped } from "react-typed";

import Magnify from "@/assets/magnify.svg?url";
import Dots from "@/assets/dots.svg?url";
import Squares from "../assets/squares.svg?url";

import FreeActivityBtn from "./FreeActivityBtn";
import TypingAni, { FadeInOut } from "./TypingAni";
import { searches } from "@/utils/data";
const ParentIssues = () => {
  return (
    <div className="container mx-auto flex flex-col gap-10 px-5 min-[1200px]:mt-10">
      <div className="flex w-fit flex-col gap-4 lg:gap-6">
        <h2 className="h4 h-fit max-w-[90vw] uppercase text-secondary lg:col-start-2">
          What Indian Parents Say
        </h2>
        <div className="inline h-[8rem] w-fit gap-2 font-Nunito text-3xl font-bold leading-tight max-md:h-[4rem] max-[500px]:h-[6rem] sm:text-4xl md:text-[54px] md:leading-snug min-[1300px]:h-fit">
          <span className="text-nowrap">My Child </span>
          <ReactTyped
            className="typewrite text-grad"
            strings={[
              `has difficulty expressing feelings`,
              `has frequent tantrums/meltdowns`,
              `struggles with focus and concentration`,
              `has excessive worry or anxiety`,
            ]}
            typeSpeed={40}
            backSpeed={10}
            showCursor={false}
            loop
          ></ReactTyped>
        </div>
      </div>
      <div className="flex w-full flex-col justify-between gap-10 lg:flex-row">
        <div className="flex w-full flex-col gap-6 rounded-3xl p-4 shadow-cs lg:w-1/2 lg:p-6">
          <div className="flex w-full items-start justify-between gap-4 lg:gap-0">
            <div className="flex w-[400px] items-center justify-between rounded-[50px] border-[1px] border-[#DEDEDE] p-3 lg:w-[400px]">
              <p className="px-2 font-Nunito text-sm font-medium text-grey_1 lg:text-lg">
                <TypingAni
                  texts={[`Life Skills that make You`]}
                  speed={10}
                  delay={5000}
                />
              </p>
              <Image
                src={Magnify}
                alt="magnify"
                sizes="auto"
                className="lg:scale-125"
              />
            </div>
            <Image
              src={Dots}
              alt="dots"
              sizes="auto"
              className="block lg:hidden"
            />
            <Image
              src={Squares}
              alt="squares"
              sizes="auto"
              className="hidden lg:block"
            />
          </div>
          <div className="flex flex-wrap gap-2 md:gap-4">
            <FadeInOut searches={searches} />
          </div>
        </div>
        <div className="flex w-full flex-col justify-center gap-6 lg:w-1/2 lg:gap-8">
          <p className="body_2">
            Sensei is{" "}
            <span className="font-bold italic">
              India&apos;s 1st ABL platform
            </span>{" "}
            focused on <span className="font-bold italic">Life skills</span>{" "}
            development. We empower parents to navigate the{" "}
            <span className="font-bold italic">Digital age</span> with
            confidence, offering resources and guidance to create a{" "}
            <span className="font-bold italic">
              balance of academic and personal development.
            </span>
          </p>
          <FreeActivityBtn />
        </div>
      </div>
    </div>
  );
};

export default ParentIssues;
