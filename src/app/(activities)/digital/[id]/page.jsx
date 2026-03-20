"use client";
import Popup from "@/components/gamifiedActivities/Popup";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import cross from "@/assets/in-Use/cross-solid.svg?url";
import Activitybg from "@/assets/in-Use/activitybg.svg?url";
import TextReader from "@/components/gamifiedActivities/textSpeach";
import Loading from "@/components/gamifiedActivities/Loading";
import Info from "@/components/gamifiedActivities/Info";
import axios from "axios";
import Feedback from "@/components/activityComps/Feedback";
import { notFound, useRouter } from "next/navigation";

const BASE_URL = "https://api.sensei.org.in/api";

const Page = ({ params: { id } }) => {
  const Router = useRouter();
  const [status, setStatus]               = useState(null);
  const [state, setState]                 = useState(0);
  const [infoOpen, setInfoOpen]           = useState(false);
  const [currQuestion, setCurrQuestion]   = useState(0);
  const [questions, setQuestions]         = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  // ✅ Handle answer selection
  const handleAnswer = (option) => {
    if (status !== null) return; // prevent re-clicking after answered
    setSelectedOption(option);
    setStatus(option.correct === true);
  };

  // ✅ Move to next question or go to feedback
  const nextQuestion = () => {
    if (status === null) return;
    if (currQuestion !== questions.length - 1) {
      setCurrQuestion((prev) => prev + 1);
    } else {
      setState(2);
    }
    setStatus(null);
    setSelectedOption(null);
  };

  // ✅ Single API call only
  useEffect(() => {
    if (!id) return;
    const fetchData = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/questions/digital-activity/${id}`);
        if (res?.data && Array.isArray(res.data)) {
          const sorted = res.data.sort((a, b) => (a.orderIndex ?? 0) - (b.orderIndex ?? 0));
          setQuestions(sorted);
        }
      } catch (err) {
        console.error("Error fetching questions:", err);
      }
    };
    fetchData();
  }, [id]);

  const currentQ = questions[currQuestion];

  switch (state) {
    case 0:
      return (
        <Loading
          activity={{
            name: "Activity",       // no title in questions API
            outComes: null,
            ageGroup: "5-7 years",
          }}
          action={() => setState(1)}
        />
      );

    case 2:
      return (
        <Feedback
          activityName={"Activity"}
          activityId={id}
        />
      );

    case 1:
      if (!questions.length || !currentQ) return notFound();

      return (
        <div
          style={{ backgroundImage: `url(${Activitybg.src})` }}
          className="container relative mx-auto my-10 mb-5 flex h-fit max-w-[1000px] flex-col gap-8 p-5"
        >
          {/* Info overlay — uses counsellorNote from first question */}
          {infoOpen && (
            <Info
              activity={{ intro: questions[0]?.counsellorNote }}
              action={() => setInfoOpen((prev) => !prev)}
            />
          )}

          {/* Top bar — close + progress bar + counter */}
          <div className="mt-8 flex items-center justify-center gap-4 md:mt-16">
            <Image
              src={cross}
              onClick={() => Router.back()}
              alt="close"
              className="cursor-pointer"
            />
            <div className="flex w-full gap-1 p-2 sm:gap-2">
              {questions.map((_, index) => (
                <div
                  key={index}
                  className="relative -z-[1] block h-2 w-1/4 rounded-full bg-grey_1"
                >
                  {index <= currQuestion && (
                    <span className="absolute z-[0] h-2 w-full rounded-full bg-primary" />
                  )}
                </div>
              ))}
            </div>
            <h5 className="h5 text-secondary">
              {currQuestion + 1}/{questions.length}
            </h5>
          </div>

          {/* Info icon top right */}
          <div className="flex justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="none"
              onClick={() => setInfoOpen((prev) => !prev)}
              className="cursor-pointer"
            >
              <rect width="31" height="31" x="0.5" y="0.5" stroke="#9FC5EF" rx="15.5" />
              <path
                fill="#9FC5EF"
                d="m17.279 14.059-3.15.394-.112.523.619.114c.404.096.484.242.396.645l-1.015 4.768c-.267 1.233.145 1.814 1.111 1.814.75 0 1.62-.347 2.015-.823l.12-.572c-.274.242-.676.339-.943.339-.378 0-.515-.266-.418-.733zm.096-2.871a1.375 1.375 0 1 1-2.75 0 1.375 1.375 0 0 1 2.75 0"
              />
            </svg>
          </div>

          {/* ✅ Question text */}
          <p className="body_2 text-secondary">
            {currQuestion + 1}. {currentQ.questionText}
          </p>

          {/* ✅ Hint */}
          {currentQ.hint && (
            <p style={{
              fontFamily: "Nunito, sans-serif",
              fontSize: "13px",
              color: "#888",
              fontStyle: "italic",
            }}>
              💡 {currentQ.hint}
            </p>
          )}

          {/* ✅ Text reader */}
          <TextReader
            key={currentQ.id}
            text={currentQ.questionText}
            role={"Child"}
          />

          {/* ✅ Options */}
          <div className="flex flex-col items-center gap-5 p-2">
            {currentQ.options
              .sort((a, b) => (a.orderIndex ?? 0) - (b.orderIndex ?? 0))
              .map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleAnswer(option)}
                  disabled={status !== null}
                  className="button-action-outline"
                  style={{
                    opacity: status !== null && selectedOption?.id !== option.id ? 0.6 : 1,
                    border: selectedOption?.id === option.id
                      ? status ? "2px solid green" : "2px solid red"
                      : undefined,
                  }}
                >
                  {option.optionText}
                </button>
              ))}

            {/* ✅ Popup */}
            {status !== null && (
              <Popup
                messege={{
                  right: currentQ.explanation || "Great job! That's correct!",
                  wrong: selectedOption?.hint || "That's not quite right!",
                }}
                status={status}
                action={nextQuestion}
              />
            )}
          </div>
        </div>
      );
  }
};

export default Page;