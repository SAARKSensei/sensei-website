import React from "react";
import Image from "next/image";
import { features } from "@/utils/data";
const Features = () => {
  return (
    <div className="container relative mx-auto flex flex-col items-center gap-10">
      <svg
        width="33"
        height="32"
        viewBox="0 0 33 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -top-10 right-[10vw]"
      >
        <path
          d="M16.5 0L17.7246 13.0436L27.8137 4.68629L19.4564 14.7754L32.5 16L19.4564 17.2246L27.8137 27.3137L17.7246 18.9564L16.5 32L15.2754 18.9564L5.18629 27.3137L13.5436 17.2246L0.5 16L13.5436 14.7754L5.18629 4.68629L15.2754 13.0436L16.5 0Z"
          fill="#FF8B13"
        />
      </svg>
      <div className="flex flex-col gap-4 text-center">
        <h2 className="h4 text-secondary">Key Features </h2>
        <p className="body_2 mx-auto max-w-[650px]">
          Our Activity Based Learning (ABL) modules, designed by RCI-approved
          clinical psychologists, personalizes learning through engaging
          activities.
        </p>
      </div>
      <div className="relative flex flex-wrap justify-center">
        <svg
          width="18"
          height="18"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -top-16 left-16"
        >
          <path
            d="M24.5 11.9914C19.7924 12.4191 17.0877 12.8125 15.4272 14.1126C13.4757 15.6351 13.0136 18.4234 12.5 24C11.9693 18.2181 11.49 15.4469 9.35021 13.9587C7.68973 12.7954 5.00214 12.4191 0.5 12.0086C5.19044 11.5809 7.91227 11.1875 9.55564 9.90449C11.5243 8.36493 11.9864 5.59373 12.5 0C12.9793 5.14897 13.4073 7.90306 14.9993 9.49394C16.5913 11.0848 19.3645 11.5296 24.5 11.9914Z"
            fill="#0764A7"
          />
        </svg>
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -top-12 left-20"
        >
          <path
            d="M24.5 11.9914C19.7924 12.4191 17.0877 12.8125 15.4272 14.1126C13.4757 15.6351 13.0136 18.4234 12.5 24C11.9693 18.2181 11.49 15.4469 9.35021 13.9587C7.68973 12.7954 5.00214 12.4191 0.5 12.0086C5.19044 11.5809 7.91227 11.1875 9.55564 9.90449C11.5243 8.36493 11.9864 5.59373 12.5 0C12.9793 5.14897 13.4073 7.90306 14.9993 9.49394C16.5913 11.0848 19.3645 11.5296 24.5 11.9914Z"
            fill="#F8BF3B"
          />
        </svg>
        {features.map((feature, index) => (
          <Feature key={index} feature={feature} />
        ))}
      </div>
      <button className="button_1 button_text w-fit bg-grad_1 text-white">
        Sign Up for FREE activity
      </button>
    </div>
  );
};

export const Feature = ({ feature }) => {
  return (
    <div className="flex flex-col gap-2 p-4">
      <Image
        src={feature.image}
        alt={feature.title}
        width={72}
        height={72}
        className="rounded-md shadow-md"
      />
      <h5 className="h5_b">{feature.title}</h5>
      <p className="body_3 max-w-[min(350px,90vw)] text-grey_1">
        {feature.description}
      </p>
    </div>
  );
};

export default Features;
