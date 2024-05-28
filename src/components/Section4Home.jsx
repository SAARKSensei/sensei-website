import React from "react";
import Background from "./BackGround";
import Image from "next/image";
import wellBeing from "@/assets/wellBeing.svg";
import awareness from "@/assets/awareness.svg";
import decision from "@/assets/decision.svg";
const Section4Home = () => {
  return (
    <div className=" relative z-[1]  flex flex-col gap-2">
      <div className="container my-40 mx-auto flex flex-col gap-10  ">
        <div className=" flex flex-col gap-4  text-center text-white">
          <h2 className="h2   ">
            Created with heartfelt expertise for nurturing your child{" "}
          </h2>
          <p className="body_2 max-w-[1000px] mx-auto">
            We believe in nurturing each child&apos;s unique potential. Our
            Activity Based Learning (ABL) modules, designed by RCI-approved
            clinical psychologists, personalizes learning through engaging
            activities. This fosters individualized growth and creates optimal
            learning experiences for your child.
          </p>
        </div>
        <div className="flex  flex-wrap justify-around gap-5">
          <div className="w-[min(416px,90vw)] flex flex-col gap-2 rounded-lg p-4 bg-gradient-to-r from-[#E5F1FE] to-[#9FC5EF]">
            <div className="p-1 bg-[#9FC5EF] w-fit rounded-md">
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
          <div className="w-[min(416px,90vw)] flex flex-col gap-2 rounded-lg p-4 bg-gradient-to-r from-[#FFE5E2] to-[#F6B0A8]">
            <div className="p-1 bg-[#F6B0A8] w-fit rounded-md">
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
          <div className="w-[min(416px,90vw)] flex flex-col gap-2 rounded-lg p-4 bg-gradient-to-r from-[#FFE8B1] to-[#F8BF3B]">
            <div className="p-1 bg-[#F8BF3B] w-fit rounded-md">
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
      </div>
      <div className="w-full absolute  h-full bg-grad_1 z-[-1]">
        <Background />
      </div>
    </div>
  );
};

export default Section4Home;
