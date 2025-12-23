"use client";
import React, { useEffect, useState } from "react";
import Rafiki from "@/assets/in-Use/rafiki.svg";
// import User from "@/assets//in-Use/user.svg";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Loading = ({ action, activity }) => {
  const formatOutcomes = (outcomesText) => {
    if (!outcomesText) return [];

    const outcomesArray = outcomesText.split("\n");

    return outcomesArray.map((outcome) => {
      return outcome.replace(/^\d+\.\s*/, "");
    });
  };

  const [outcomes, setOutcomes] = useState(() => {
    return activity?.outComes ? formatOutcomes(activity.outComes) : [];
  });

  const [countdown, setCountdown] = useState(6);

  const Router = useRouter();

  useEffect(() => {
    if (activity?.outComes) {
      setOutcomes(formatOutcomes(activity.outComes));
    }
  }, [activity]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      action();
    }, 6500);

    const countdownInterval = setInterval(() => {
      setCountdown((prevCount) => {
        if (prevCount <= 1) {
          clearInterval(countdownInterval);
          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);

    return () => {
      clearTimeout(timeout);
      clearInterval(countdownInterval);
    };
  }, [action]);

  return (
    <div className="relative mb-4 mt-20 flex h-full min-h-[90vh] flex-col gap-12">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => Router.back()}
        className="absolute right-1/4 top-6 z-10 translate-x-1/2 cursor-pointer rounded-full p-1 backdrop-blur-sm sm:right-1/4 sm:translate-x-0"
      >
        <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="grey" />
        <path
          d="M21.4213 11.9927C21.5169 11.9005 21.5931 11.7902 21.6456 11.6682C21.698 11.5462 21.7257 11.415 21.7269 11.2823C21.7281 11.1495 21.7029 11.0178 21.6527 10.8949C21.6024 10.7719 21.5282 10.6603 21.4344 10.5663C21.3405 10.4724 21.2289 10.3981 21.1061 10.3477C20.9832 10.2974 20.8515 10.272 20.7187 10.2731C20.586 10.2742 20.4547 10.3017 20.3327 10.3541C20.2107 10.4064 20.1003 10.4826 20.008 10.578L16 14.5847L11.9933 10.578C11.9018 10.4798 11.7914 10.401 11.6687 10.3463C11.546 10.2917 11.4136 10.2623 11.2794 10.2599C11.1451 10.2576 11.0117 10.2823 10.8872 10.3325C10.7627 10.3828 10.6496 10.4577 10.5546 10.5527C10.4597 10.6476 10.3848 10.7607 10.3345 10.8852C10.2842 11.0098 10.2595 11.1431 10.2619 11.2774C10.2642 11.4117 10.2936 11.5441 10.3483 11.6668C10.4029 11.7894 10.4817 11.8998 10.58 11.9914L14.584 15.9994L10.5773 20.006C10.4007 20.1956 10.3045 20.4463 10.3091 20.7054C10.3137 20.9645 10.4186 21.2117 10.6018 21.3949C10.7851 21.5781 11.0322 21.683 11.2913 21.6876C11.5504 21.6922 11.8011 21.596 11.9907 21.4194L16 17.4127L20.0067 21.4207C20.1962 21.5973 20.447 21.6935 20.706 21.6889C20.9651 21.6844 21.2123 21.5794 21.3955 21.3962C21.5787 21.213 21.6837 20.9658 21.6882 20.7067C21.6928 20.4477 21.5966 20.1969 21.42 20.0074L17.416 15.9994L21.4213 11.9927Z"
          fill="grey"
        />
      </svg>

      <div className="center-x relative mt-8 h-[150px] w-[150px]">
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
            strokeWidth="20px"
            strokeDasharray="565.48px"
            strokeDashoffset="0"
          ></circle>
          <circle
            className="loading-circle"
            r="90"
            cx="100"
            cy="100"
            stroke="url(#paint0_linear_7083_33769)"
            strokeWidth="20px"
            strokeLinecap="round"
            strokeDashoffset="565.48px"
            fill="transparent"
            strokeDasharray="565.48px"
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
              <stop stopColor="#F8BF3B" />
              <stop offset="0.305" stopColor="#FF8B13" />
              <stop offset="1" stopColor="#EF5F3D" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Countdown positioned inside the loader with relative sizing */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative flex h-3/4 w-3/4 items-center justify-center rounded-full border-2 border-primary bg-white text-secondary">
            <span className="text-6xl font-bold text-primary">{countdown}</span>
          </div>
        </div>
      </div>
      
      <div className="mx-auto mb-20 mt-10 flex flex-col justify-center gap-2">
        <h3 className="h3 text-grad mx-auto font-bold">
          {activity?.name || "Loading Activity..."}
        </h3>
        <p className="body-3 mx-auto text-secondary">
          Age Group: {activity?.ageGroup || "5-10"} years old
        </p>
        <div className="mx-auto flex flex-col justify-center">
          <h2 className="h5 text-semibold mx-auto mt-4 h-fit min-w-96 whitespace-pre-line text-center text-black underline-offset-4">
            {outcomes.map((outcome, index) => (
              <React.Fragment key={index}>
                {outcome}
                {index < outcomes.length - 1 && <br />}
              </React.Fragment>
            ))}
          </h2>
        </div>
      </div>

      <Rafiki className="absolute bottom-0 left-0 -z-10" />
    </div>
  );
};

export default Loading;