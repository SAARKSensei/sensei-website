import React from "react";
import Image from "next/image";
import { features } from "@/utils/data";
const Features = () => {
  return (
    <div className="container mx-auto flex flex-col gap-10">
      <h2 className="h2 text-grad mx-auto">
        Our key features, gently delivered
      </h2>
      <div className="container flex flex-wrap  justify-center">
        {features.map((feature, index) => (
          <Feature key={index} feature={feature} />
        ))}
      </div>
    </div>
  );
};

export const Feature = ({ feature }) => {
  return (
    <div className="p-4 flex flex-col gap-2">
      <Image
        src={feature.image}
        alt={feature.title}
        className="p-2 rounded-md shadow-md"
      />
      <h5 className="h5_b">{feature.title}</h5>
      <p className="body_3 text-grey_1 max-w-[min(350px,90vw)] ">
        {feature.description}
      </p>
    </div>
  );
};

export default Features;
