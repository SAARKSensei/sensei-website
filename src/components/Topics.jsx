import React from "react";
import Background from "./BackGround";
import Image from "next/image";
import wellBeing from "@/assets/wellBeing.svg?url";
import awareness from "@/assets/awareness.svg?url";
import decision from "@/assets/decision.svg?url";
const Topics = () => {
  return (
    <div className="container relative z-[1] flex flex-col items-center gap-2 p-4">
      <svg
        width="60"
        height="60"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[10vw] top-0"
      >
        <path
          d="M24.5 11.9914C19.7924 12.4191 17.0877 12.8125 15.4272 14.1126C13.4757 15.6351 13.0136 18.4234 12.5 24C11.9693 18.2181 11.49 15.4469 9.35021 13.9587C7.68973 12.7954 5.00214 12.4191 0.5 12.0086C5.19044 11.5809 7.91227 11.1875 9.55564 9.90449C11.5243 8.36493 11.9864 5.59373 12.5 0C12.9793 5.14897 13.4073 7.90306 14.9993 9.49394C16.5913 11.0848 19.3645 11.5296 24.5 11.9914Z"
          fill="#F8BF3B"
        />
      </svg>
      <div className="mmy-40 container mx-auto flex flex-col items-center gap-10">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="h4 text-secondary">Topics covered </h2>
          <p className="body_2 mx-auto max-w-[650px]">
            We believe in nurturing each child&apos;s unique potential. This
            fosters individualized growth and creates optimal learning
            experiences for your child.
          </p>
        </div>
        <div className="flex flex-wrap justify-around gap-5">
          <div className="flex w-[min(400px,90vw)] flex-col gap-2 rounded-[20px] bg-gradient-to-r from-[#E5F1FE] to-[#9FC5EF] p-4">
            <div className="w-fit rounded-md bg-[#9FC5EF] p-1">
              <Image src={wellBeing} alt="wellBeing" />
            </div>
            <p className="body1_b">Emotional Well-Being</p>
            <ul className="list-disc pl-4">
              <li className="body_3">Understanding and regulating emotions</li>
              <li className="body_3">Mindfulness</li>
              <li className="body_3">Building Self-Esteem</li>
              <li className="body_3">Coping with daily stressors</li>
              <li className="body_3">Building Resilience</li>
            </ul>
          </div>
          <div className="flex w-[min(400px,90vw)] flex-col gap-2 rounded-[20px] bg-gradient-to-r from-[#FFE5E2] to-[#F6B0A8] p-4">
            <div className="w-fit rounded-md bg-[#F6B0A8] p-1">
              <Image src={awareness} alt="wellBeing" />
            </div>
            <p className="body1_b">Self and Social Awareness</p>
            <ul className="list-disc pl-4">
              <li className="body_3">Personal Boundaries</li>
              <li className="body_3">Diversity and Inclusivity</li>
              <li className="body_3">Personal Hygiene and Health</li>
              <li className="body_3">
                Healthy Relationships and Communication
              </li>
              <li className="body_3">Safe and Unsafe Touch</li>
            </ul>
          </div>
          <div className="flex w-[min(400px,90vw)] flex-col gap-2 rounded-[20px] bg-gradient-to-r from-[#FFE8B1] to-[#F8BF3B] p-4">
            <div className="w-fit rounded-md bg-[#F8BF3B] p-1">
              <Image src={decision} alt="wellBeing" />
            </div>
            <p className="body1_b">Ethical Decision Making</p>
            <ul className="list-disc pl-4">
              <li className="body_3">Integrity</li>
              <li className="body_3">Respect and Kindness</li>
              <li className="body_3">Honesty and Truthfulness</li>
              <li className="body_3">Responsibility and Accountability</li>
              <li className="body_3">Fairness and Equality</li>
            </ul>
          </div>
        </div>
        <button className="button_1 button_text w-fit bg-grad_1 text-white">
          Sign Up for FREE activity
        </button>
      </div>
      {/* <div className="absolute z-[-1] h-full w-full bg-grad_1">
        <Background />
      </div> */}
    </div>
  );
};

export default Topics;
