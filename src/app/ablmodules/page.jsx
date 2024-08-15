import React from "react";
import thunder from "@/assets/thunder.svg?url";
import Image from "next/image";
import mobile from "@/assets/mobileHero.png";
import personality from "@/assets/personality.png";
import Topics from "@/components/homeComps/Topics";
import Features from "@/components/homeComps/Features";
import Activities from "@/components/activityComps/Activities";
const Page = () => {
  return (
    <div className="flex flex-col items-center gap-40 py-10">
      <div className="container flex w-fit items-center gap-4 p-4 max-sm:flex-col">
        <div className="flex flex-col gap-4">
          <h4 className="h4">Our Modules</h4>
          <h1 className="h2 lg:h1 min-h-max max-w-[800px] leading-snug">
            Created by psychologist and counsellor for{" "}
            <span className="text-grad">nurturing your child</span>
          </h1>
          <div className="relative flex w-fit items-center gap-2 rounded-full bg-white p-1">
            <Image
              src={thunder}
              alt="thunder"
              className="block h-12 w-12 rounded-full bg-primary p-2"
            />
            <h4 className="p-1 text-sm font-[450] text-black">
              Ayaan 36 mins ago
              <p className="body_5 text-grey_1">Played Activity Name</p>
            </h4>
            <span className="absolute -inset-[1px] z-[-1] rounded-full bg-grad_1" />
          </div>
        </div>
        <div className="relative flex h-fit w-[300px] min-w-[300px] flex-wrap">
          <svg
            width="120"
            height="120"
            viewBox="-40 -70 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.5 11.9914C19.7924 12.4191 17.0877 12.8125 15.4272 14.1126C13.4757 15.6351 13.0136 18.4234 12.5 24C11.9693 18.2181 11.49 15.4469 9.35021 13.9587C7.68973 12.7954 5.00214 12.4191 0.5 12.0086C5.19044 11.5809 7.91227 11.1875 9.55564 9.90449C11.5243 8.36493 11.9864 5.59373 12.5 0C12.9793 5.14897 13.4073 7.90306 14.9993 9.49394C16.5913 11.0848 19.3645 11.5296 24.5 11.9914Z"
              fill="#EF5F3D"
            />
          </svg>
          <Image src={mobile} alt="mobile" />
          <Image src={personality} alt="personality" className="" />
          <svg
            width="120"
            height="120"
            viewBox="-30 -20 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.5 11.9914C19.7924 12.4191 17.0877 12.8125 15.4272 14.1126C13.4757 15.6351 13.0136 18.4234 12.5 24C11.9693 18.2181 11.49 15.4469 9.35021 13.9587C7.68973 12.7954 5.00214 12.4191 0.5 12.0086C5.19044 11.5809 7.91227 11.1875 9.55564 9.90449C11.5243 8.36493 11.9864 5.59373 12.5 0C12.9793 5.14897 13.4073 7.90306 14.9993 9.49394C16.5913 11.0848 19.3645 11.5296 24.5 11.9914Z"
              fill="#F8BF3B"
            />
          </svg>
        </div>
      </div>
      <Activities />
      <Topics />
      <Features />
    </div>
  );
};

export default Page;
