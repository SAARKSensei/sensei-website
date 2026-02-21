"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import brainimg from "@/assets/in-Use/brainimg.svg?url";
import TrophyImg from "@/assets/in-Use/TrophyImg.svg?url";

const MythFact = ({ questions = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [hasAnswered, setHasAnswered] = useState(false);

  const [showLoader, setShowLoader] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const total = questions.length;
  const currentQuestion = questions[currentIndex];
  const wrong = total - score;

  const handleSelect = (choice) => {
    if (hasAnswered) return;

    setSelected(choice);
    setHasAnswered(true);

    if (choice === currentQuestion.answer) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      // LAST QUESTION
      if (currentIndex === total - 1) {
        setShowLoader(true);

        setTimeout(() => {
          setShowLoader(false);
          setShowResult(true);
        }, 1500); // buffering time
      } else {
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

  if (!currentQuestion && !showResult) return null;

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

        {/* ===== LOADER ===== */}
        {showLoader && (
          <div className="flex flex-col items-center justify-center">
            <div className="mb-6 h-10 w-10 animate-spin rounded-full border-4 border-[#2C3D68] border-t-transparent"></div>
            <p className="font-Nunito text-[18px] text-[#2C3D68]">
              Calculating your result...
            </p>
          </div>
        )}

        {/* ===== RESULT ===== */}
        {showResult && (
          <div className="flex flex-col items-center w-full max-w-[838px]">
            {/* Result Card */}
            <div className="flex flex-col items-center rounded-[16px]
              bg-[#FFF7F1] shadow-[0px_4px_8px_rgba(0,0,0,0.25)]
              w-[348px] md:w-[838px]
              px-6 md:px-0
              py-8 md:py-0
              relative"
            >
              {/* Trophy Image - positioned to overflow top */}
              <div className="absolute -top-[115px] md:-top-[115px] left-1/2 -translate-x-1/2 w-[227px] h-[231px]">
                <Image
                  src={TrophyImg}
                  alt="Trophy"
                  width={227}
                  height={231}
                  className="object-contain"
                  priority
                />
              </div>

              {/* Content with top padding to accommodate trophy */}
              <div className="flex flex-col items-center w-full pt-[140px] md:pt-[140px] pb-6 md:pb-8">
                {/* Title Section */}
                <div className="flex flex-col items-center gap-3 md:gap-3 pb-4 md:pb-4 border-b border-[#999999] w-full px-4 md:px-[154px]">
                  <h2 className="font-Nunito font-medium text-[28px] md:text-[36px] leading-[38px] text-center text-[#2C3D68]">
                    Congratulations
                  </h2>
                  <p className="font-Nunito font-medium text-[16px] md:text-[20px] leading-[30px] text-center text-[#333333]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </p>
                </div>

                {/* Stats Section */}
                <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-6 md:gap-6 pt-6 md:pt-4 w-full px-4">
                  {/* Total Questions */}
                  <div className="flex flex-col justify-center items-center gap-1 w-[136px]">
                    <div className="flex flex-row items-center gap-[11px]">
                      <div className="flex justify-center items-center w-10 h-10 bg-[#2C3D68] rounded-[8px]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="font-Nunito font-bold text-[20px] leading-[30px] text-center text-[#2C3D68]">
                        {String(total).padStart(2, '0')}
                      </span>
                    </div>
                    <p className="font-Nunito font-medium text-[18px] leading-[30px] text-center text-[#333333]">
                      Total Question
                    </p>
                  </div>

                  {/* Correct Answers */}
                  <div className="flex flex-col justify-center items-center gap-1 w-[136px]">
                    <div className="flex flex-row items-center gap-[11px]">
                      <div className="flex justify-center items-center w-10 h-10 bg-[#3AA176] rounded-[8px]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 6L9 17L4 12" stroke="#2C3D68" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="font-Nunito font-bold text-[20px] leading-[30px] text-center text-[#2C3D68]">
                        {String(score).padStart(2, '0')}
                      </span>
                    </div>
                    <p className="font-Nunito font-medium text-[18px] leading-[30px] text-center text-[#333333]">
                      Correct
                    </p>
                  </div>

                  {/* Wrong Answers */}
                  <div className="flex flex-col justify-center items-center gap-1 w-[136px]">
                    <div className="flex flex-row items-center gap-[11px]">
                      <div className="flex justify-center items-center w-10 h-10 bg-[#EC3D13] rounded-[8px]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18 6L6 18M6 6L18 18" stroke="#2C3D68" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="font-Nunito font-bold text-[20px] leading-[30px] text-center text-[#2C3D68]">
                        {String(wrong).padStart(2, '0')}
                      </span>
                    </div>
                    <p className="font-Nunito font-medium text-[18px] leading-[30px] text-center text-[#333333]">
                      Wrong
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===== QUIZ ===== */}
        {!showLoader && !showResult && (
          <>
            {/* TITLE */}
            <h2 className="mb-2 md:mb-4 font-Nunito font-semibold text-[#2C3D68] text-[32px] md:text-[48px]">
              Myth or Fact?
            </h2>

            {/* PROGRESS */}
            <p className="mb-6 md:mb-10 font-Nunito text-[#2C3D68] text-[14px] md:text-[18px]">
              {currentIndex + 1} / {total}
            </p>

            {/* QUESTION */}
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
                  Its a Myth
                </span>
              </button>

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
                  Its a Fact
                </span>
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default MythFact;