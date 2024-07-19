import React from "react";
import Image from "next/image";
import { features } from "@/utils/data";
import Stars from "./Stars";
const Features = () => {
  return (
    <div className="container mx-auto flex flex-col items-center gap-10">
      <div className="relative flex flex-col gap-4 text-center">
        <Stars />
        <h2 className="h4 text-secondary">Key Features </h2>
        <p className="body_2 mx-auto max-w-[650px]">
          Our Activity Based Learning (ABL) modules, designed by RCI-approved
          clinical psychologists, personalizes learning through engaging
          activities.
        </p>
      </div>
      <div className="flex flex-wrap justify-center">
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
