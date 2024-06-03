import React from "react";
import { faqs } from "@/utils/data";
const FAQS = () => {
  return (
    <div className="flex flex-col max-w-[min(90vw,1000px)] container mx-auto items-center gap-11">
      <h2 className="h2 text-grad mx-auto">Frequently Asked Questions</h2>
      <div className="w-full flex flex-col gap-6">
        {faqs.map((faq, index) => (
          <FAQ key={index} faq={faq} />
        ))}
      </div>
      <div className="min-w-[258px] md:min-w-[273px] h-12 md:h-14 rounded-[50px] px-6 md:px-8 py-3 md:py-4 bg-grad_1">
        <p className="text-white text-center body1_b">Sign Up for FREE activity</p>
      </div>
    </div>
  );
};
export const FAQ = ({ faq }) => {
  return (
    <div className="flex gap-6 p-5 has-[:checked]:border-0 has-[:checked]:bg-[#FF8B13] has-[:checked]:bg-opacity-10 border-b-2 has-[:checked]:rounded-xl border-grey_2 align-middle h-fit">
      <div className="flex flex-col gap-4 w-full">
        <div className="peer body_1 flex items-center gap-4">
          <div className="flex gap-4 peer-checked:text-[#FF8B13] text-[#787878]">
            <p className="body1_b">{faq.id >= 10 ? "" : "0"}{faq.id}</p>
            <p className="h3">{faq.question}</p>
          </div>
          <input
            className="peer appearance-none"
            id={`question${faq.id}`}
            type="checkbox"
          />
          <label
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
        <p className="body_2 hidden peer-has-[:checked]:block text-[#787878]">{faq.answer}</p>
      </div>
    </div>
  );
};
export default FAQS;
