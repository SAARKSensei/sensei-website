"use client";
import React, { useState } from "react";
import { faqs } from "@/utils/data";
import FreeActivityBtn from "./FreeActivityBtn";
const FAQS = () => {
  const [checkedId, setCheckedId] = useState(-1);

  return (
    <div className="flex flex-col max-w-[min(90vw,1000px)] container mx-auto items-center gap-11">
      <h2 className="h2 text-grad mx-auto">Frequently Asked Questions</h2>
      <div className="w-full flex flex-col gap-6">
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
    <div className="flex gap-6 p-5 has-[:checked]:border-0 has-[:checked]:bg-[#FF8B13] has-[:checked]:bg-opacity-10 border-b-2 has-[:checked]:rounded-xl border-grey_2 align-middle h-fit">
      <div className="flex flex-col gap-4 w-full">
        <div className="peer body_1 flex items-start gap-4">
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
            className="ml-auto peer-checked:rotate-0 peer-checked:opacity-100 opacity-25 rotate-45 transition-transform rounded-full bg-[#FF8B13]   p-2 cursor-pointer"
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
        <p className="body_2 hidden peer-has-[:checked]:block text-[#787878]">
          {faq.answer}
        </p>
      </div>
    </div>
  );
};
export default FAQS;
