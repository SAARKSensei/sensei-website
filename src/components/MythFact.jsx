"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import brainimg from "@/assets/in-Use/brainimg.svg?url";

const MythFact = ({ questions = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [hasAnswered, setHasAnswered] = useState(false);

  const total = questions.length;
  const currentQuestion = questions[currentIndex];

  const handleSelect = (choice) => {
    if (hasAnswered) return;

    setSelected(choice);
    setHasAnswered(true);

    // auto move to next question
    setTimeout(() => {
      if (currentIndex < total - 1) {
        setCurrentIndex((prev) => prev + 1);
        setSelected(null);
        setHasAnswered(false);
      }
    }, 800);
  };

  const isCorrect =
    hasAnswered && selected === currentQuestion?.answer;
  const isWrong =
    hasAnswered && selected !== currentQuestion?.answer;

  if (!currentQuestion) return null;

  return (
    <section
      className="
        relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]
        flex w-screen items-center justify-center
        bg-[#F8BF3B] overflow-hidden
        h-[703px] md:h-[748px]
      "
    >
      <Image
        src={brainimg}
        alt="brain background"
        fill
        className="absolute object-cover opacity-60 mix-blend-color-dodge pointer-events-none"
        priority
      />

      <div className="relative z-10 flex w-full flex-col items-center px-4">
        {/* TITLE */}
        <h2 className="mb-2 md:mb-4 font-Nunito font-semibold text-[#2C3D68] text-[32px] md:text-[48px]">
          Myth or Fact?
        </h2>

        {/* PROGRESS */}
        <p className="mb-6 md:mb-10 font-Nunito text-[#2C3D68] text-[14px] md:text-[18px]">
          {currentIndex + 1} / {total}
        </p>

        {/* QUESTION RECTANGLE */}
        <div
          className={`
            flex items-center justify-center rounded-[16px]
            bg-[#FFF7F1] text-center shadow-md border-2
            px-6 md:px-20
            w-[348px] h-[420px]
            md:w-[838px] md:h-[271px]
            mb-10 md:mb-16
            ${
              isCorrect
                ? "border-green-500"
                : isWrong
                ? "border-red-500"
                : "border-transparent"
            }
          `}
        >
          <p className="font-Nunito font-medium text-[24px] md:text-[36px] leading-[32px] md:leading-normal">
            {currentQuestion.text}
          </p>
        </div>

        {/* BUTTONS */}
        <div className="flex gap-6 w-[348px] md:w-auto">
          {/* MYTH */}
          <button
            disabled={hasAnswered}
            onClick={() => handleSelect("myth")}
            className="flex-1 md:flex-none h-[52px] md:h-[60px] w-[162px]
              items-center justify-center rounded-[8px]
              bg-[#2C3D68] px-[22px] py-[14px]
              font-Nunito text-[16px] font-bold shadow-md"
          >
            <span
              className={
                hasAnswered && selected === "myth"
                  ? "text-[#FF8B13]"
                  : "text-white"
              }
            >
              It’s a Myth
            </span>
          </button>

          {/* FACT */}
          <button
            disabled={hasAnswered}
            onClick={() => handleSelect("fact")}
            className="flex-1 md:flex-none h-[52px] md:h-[60px] w-[162px]
              items-center justify-center rounded-[8px]
              bg-[#2C3D68] px-[22px] py-[14px]
              font-Nunito text-[16px] font-bold shadow-md"
          >
            <span
              className={
                hasAnswered && selected === "fact"
                  ? "text-[#FF8B13]"
                  : "text-white"
              }
            >
              It’s a Fact
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default MythFact;
