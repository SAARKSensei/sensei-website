"use Client";
import React from "react";
import { getRandomLightColor } from "@/utils/logic";
const Stars = () => {
  const randomColor1 = getRandomLightColor();
  const randomColor2 = getRandomLightColor();
  const randomColor3 = getRandomLightColor();

  const randomPos = Math.random() < 0.5;
  const randomHide = Math.random() < 0.5;
  return (
    <>
      <svg
        width="33"
        height="32"
        viewBox="0 0 33 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ animationDuration: "3s" }}
        className={`absolute z-[-1] ${!randomPos ? "-bottom-5" : "-top-10"} -right-[10vw] animate-spin`}
      >
        <path
          d="M16.5 0L17.7246 13.0436L27.8137 4.68629L19.4564 14.7754L32.5 16L19.4564 17.2246L27.8137 27.3137L17.7246 18.9564L16.5 32L15.2754 18.9564L5.18629 27.3137L13.5436 17.2246L0.5 16L13.5436 14.7754L5.18629 4.68629L15.2754 13.0436L16.5 0Z"
          fill={randomColor1}
        />
      </svg>
      <svg
        width="18"
        height="18"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`animate-scale absolute z-[-1] ${randomPos ? "bottom-0" : "-top-16"} -left-[10vw]`}
      >
        <path
          d="M24.5 11.9914C19.7924 12.4191 17.0877 12.8125 15.4272 14.1126C13.4757 15.6351 13.0136 18.4234 12.5 24C11.9693 18.2181 11.49 15.4469 9.35021 13.9587C7.68973 12.7954 5.00214 12.4191 0.5 12.0086C5.19044 11.5809 7.91227 11.1875 9.55564 9.90449C11.5243 8.36493 11.9864 5.59373 12.5 0C12.9793 5.14897 13.4073 7.90306 14.9993 9.49394C16.5913 11.0848 19.3645 11.5296 24.5 11.9914Z"
          fill={randomColor2}
        />
      </svg>
      {randomHide && (
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`animate-scale1 absolute z-[-1] ${randomPos ? "bottom-5" : "-top-10"} -left-[calc(10vw-40px)]`}
        >
          <path
            d="M24.5 11.9914C19.7924 12.4191 17.0877 12.8125 15.4272 14.1126C13.4757 15.6351 13.0136 18.4234 12.5 24C11.9693 18.2181 11.49 15.4469 9.35021 13.9587C7.68973 12.7954 5.00214 12.4191 0.5 12.0086C5.19044 11.5809 7.91227 11.1875 9.55564 9.90449C11.5243 8.36493 11.9864 5.59373 12.5 0C12.9793 5.14897 13.4073 7.90306 14.9993 9.49394C16.5913 11.0848 19.3645 11.5296 24.5 11.9914Z"
            fill={randomColor3}
          />
        </svg>
      )}
    </>
  );
};

export default Stars;
