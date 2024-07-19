"use client";
import React, { useState } from "react";
import { faqs } from "@/utils/data";
import FreeActivityBtn from "./FreeActivityBtn";
import Stars from "./Stars";
const FAQS = () => {
  const [checkedId, setCheckedId] = useState(-1);

  return (
    <div className="container relative mx-auto flex max-w-[min(90vw,1000px)] flex-col items-center gap-11">
      <Stars />
      <h2 className="h4 mx-auto h-fit max-w-[90vw] uppercase text-secondary lg:col-start-2">
        Frequently Asked Questions
      </h2>
      <div className="flex w-full flex-col gap-6">
        {faqs.map((faq, index) => (
          <FAQ
            key={index}
            checkedId={checkedId}
            setCheckedId={setCheckedId}
            faq={faq}
          />
        ))}
      </div>
      <FreeActivityBtn />
    </div>
  );
};
export const FAQ = ({ faq, checkedId, setCheckedId }) => {
  return (
    <div className="flex h-fit gap-6 border-b-2 border-grey_2 p-5 align-middle has-[:checked]:rounded-xl has-[:checked]:border-0 has-[:checked]:bg-[#FF8B13] has-[:checked]:bg-opacity-10">
      <div className="flex w-full flex-col gap-4">
        <div className="body_1 peer flex items-start gap-4">
          <div className="flex items-start gap-4">
            <p
              className={`body1_b ${
                checkedId === faq.id ? "text-[#FF8B13]" : "text-[#787878]"
              }`}
            >
              {faq.id >= 10 ? "" : "0"}
              {faq.id}
            </p>
            <p
              className={`h3 ${
                checkedId === faq.id ? "text-[#FF8B13]" : "text-[#787878]"
              }`}
            >
              {faq.question}
            </p>
          </div>
          <input
            className="peer appearance-none"
            id={`question${faq.id}`}
            type="checkbox"
            checked={checkedId === faq.id}
          />
          <label
            onClick={() => setCheckedId(checkedId === faq.id ? -1 : faq.id)}
            htmlFor={`question${faq.id}`}
            className="ml-auto rotate-45 cursor-pointer rounded-full bg-[#FF8B13] p-2 opacity-25 transition-transform peer-checked:rotate-0 peer-checked:opacity-100"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.9492 4.94922L5.04972 14.8487"
                stroke="white"
                className="opacity-100"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M14.9492 14.8496L5.04972 4.95011"
                stroke="white"
                className="opacity-100"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </label>
        </div>
        <p className="body_2 hidden text-[#787878] peer-has-[:checked]:block">
          {faq.answer}
        </p>
      </div>
    </div>
  );
};
export default FAQS;
