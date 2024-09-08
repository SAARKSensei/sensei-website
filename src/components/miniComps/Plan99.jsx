import React from "react";
import Image from "next/image";
import Link from "next/link";
import addchild from "@/Images/addchild.png";

const Plan99 = () => {
  const features = [
    "For 5-10 years children",
    "Emotional Well-Being",
    "Self & Social Awareness",
    "8 Interactive activities",
    "4 Gamified activities",
  ];
  return (
    <div className="relative mx-auto mt-10 h-fit max-w-[min(1100px,90vw)] rounded-2xl bg-gradient-to-l from-[#EF5F3D] via-[#F97A23] to-[#F8BF3B] p-8 shadow-lg">
      <h1 className="h3 mb-4 w-[80%] text-left font-Nunito font-bold italic text-white">
        Designed by RCI psychologists for Social Emotional & Life-skills
        development of K-12 children{" "}
      </h1>
      <div className="flex items-center justify-between gap-4 max-sm:flex-wrap">
        <div className="flex max-w-[70%] flex-wrap gap-3">
          {features.map((f, index) => (
            <div
              key={index}
              className="flex items-center gap-2 whitespace-nowrap text-white"
            >
              <svg
                width="16"
                height="12"
                viewBox="0 0 16 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 6L6 10L14 2"
                  stroke="#FFFFFF"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="h5_b">{f}</p>
            </div>
          ))}
        </div>
        <Link
          href={"/child-details"}
          className="glow relative z-10 mr-auto flex h-fit w-fit cursor-pointer items-center whitespace-nowrap rounded-[40px] bg-grad_1 p-4 px-5 font-Nunito text-base font-bold text-white md:px-8 md:py-6 md:text-xl"
        >
          <span className="absolute inset-[7px] -z-10 rounded-[40px] bg-secondary" />
          Enroll Now @ Rs.99/-
        </Link>
      </div>
      <Image
        src={addchild}
        alt="addchild"
        sizes="auto"
        className="absolute -right-5 bottom-0 -z-[0] max-h-[120%] max-w-[min(298px,50%)] object-contain"
      />
      <div className="h5_b pack absolute -top-5 left-20 w-fit rounded-b-xl bg-secondary px-6 py-3 text-white">
        Trial Pack
      </div>
    </div>
  );
};

export default Plan99;
