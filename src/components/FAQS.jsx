import React from "react";
import { faqs } from "@/utils/data";
const FAQS = () => {
  return (
    <div className="flex flex-col max-w-[min(90vw,1000px)] container mx-auto">
      <h2 className="h2 text-grad mb-20 mx-auto">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <FAQ key={index} faq={faq} />
      ))}
    </div>
  );
};
export const FAQ = ({ faq }) => {
  return (
    <div className="flex gap-5 p-10 has-[:checked]:border-0 has-[:checked]:bg-[#FF8B13] has-[:checked]:bg-opacity-10 border-b-2 has-[:checked]:rounded-xl border-grey_2 align-middle h-fit">
      <p className="body1_b mt-1 text-grey_1">{faq.id}</p>
      <div className=" has-[:checked]:text-black  text-grey_1 flex flex-col gap-1 w-full">
        <p className="peer body_1 flex items-center ">
          {faq.question}
          <input
            className="peer appearance-none "
            id={`question${faq.id}`}
            type="checkbox"
          />
          <label
            htmlFor={`question${faq.id}`}
            className="ml-auto peer-checked:bg-[#FF8B13] peer-checked:rotate-0 rotate-45 transition-transform rounded-full bg-grey_2 p-2"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.9492 4.94922L5.04972 14.8487"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M14.9492 14.8496L5.04972 4.95011"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </label>
        </p>
        <p className="body_2 hidden peer-has-[:checked]:block ">{faq.answer}</p>
      </div>
    </div>
  );
};
export default FAQS;
