"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Rafiki from "@/assets/rafiki.svg";
import User from "@/assets/user.svg";
import MainLogo from "@/assets/mainlogo.svg";
const Loading = ({ action, activity }) => {
  console.log("activity", activity);
  useEffect(() => {
    const timeout = setTimeout(() => {
      action();
    }, 7000);
    return () => {
      clearTimeout(timeout);
    };
  }, [action]);
  return (
    <div className="relative flex min-h-[90vh] flex-col justify-evenly gap-5">
      <div className="center-x relative h-[150px] w-[150px]">
        <MainLogo className="center-x absolute top-2 z-10 h-20 w-20 text-secondary" />
        <User className="center-y relative mx-auto h-[100px] min-w-[100px] rounded-full border-2 border-primary bg-white pt-5 text-secondary" />
        <svg
          className="absolute left-0 top-0 h-full w-full"
          viewBox="0 0 200 200"
          fill="none"
        >
          <circle
            r="90"
            cx="100"
            cy="100"
            fill="transparent"
            stroke="#e0e0e0"
            stroke-width="20px"
            stroke-dasharray="565.48px"
            stroke-dashoffset="0"
          ></circle>
          <circle
            className="loading-circle"
            r="90"
            cx="100"
            cy="100"
            stroke="url(#paint0_linear_7083_33769)"
            stroke-width="20px"
            strokeLinecap="round"
            stroke-dashoffset="565.48px"
            fill="transparent"
            stroke-dasharray="565.48px"
          ></circle>

          <defs>
            <linearGradient
              id="paint0_linear_7083_33769"
              x1="14.77"
              y1="21.5385"
              x2="107.011"
              y2="21.9894"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F8BF3B" />
              <stop offset="0.305" stop-color="#FF8B13" />
              <stop offset="1" stop-color="#EF5F3D" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="mx-auto flex flex-col justify-center gap-2">
        <h3 className="h3 text-grad mx-auto font-bold">{activity.name}</h3>
        <p className="body-3 mx-auto text-secondary">
          Age Group: {activity?.ageGroup || "5-10"} years old
        </p>
      </div>
      <div className="mx-auto flex flex-col justify-center gap-4">
        <h2 className="h4 uunderline mx-auto h-fit max-w-[min(90vw,500px)] text-center uppercase text-secondary underline-offset-8">
          {activity?.outComes}
        </h2>
        {/* <h2 className="h4 mx-auto h-fit max-w-[90vw] whitespace-nowrap text-center font-semibold">
          Identifying Emotions
          <br />
          Expressing Emotions
          <br />
          Parent-Child Bonding
          <br />
          Building Emotional Intelligence
        </h2> */}
      </div>
      {/* <button
        onClick={action}
        disabled={loading}
        className="h5_b mx-auto w-[min(90vw,300px)] rounded-lg border-b-4 border-[#CD9003] bg-[#F8BF3B] px-6 py-2 text-secondary disabled:opacity-50"
      >
        Let&apos;s Start
      </button> */}
      <Rafiki className="absolute bottom-0 left-0 -z-10" />
    </div>
  );
};

export default Loading;
