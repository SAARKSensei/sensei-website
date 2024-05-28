import React from "react";
import Image from "next/image";
import Discover from "@/assets/discover.png";
const DiscoverSensei = () => {
  return (
    <div className="flex container mx-auto max-md:flex-wrap gap-10 justify-around items-center">
      <Image
        src={Discover}
        sizes="auto"
        alt="Discover Sensei"
        className="max-w-[min(648px,100vw)] md:max-w-[50%]"
      />
      <div className="max-w-[min(100vw,648px)] flex md:max-w-[max(400px,50vw)] flex-col justify-center gap-2">
        <h2 className="  h2 text-transparent bg-grad_1 bg-clip-text">
          Discover Sensei&apos;s story{" "}
        </h2>
        <p className=" body_2">
          At Sensei, we are dedicated to revolutionizing education by blending
          activity-based learning (ABL) with essential life skills, mental
          resilience, and strong ethical values. We&apos;re on a mission to
          revolutionize education and make it accessible to over 1.5 lakh
          students across India by 2025.
        </p>
        <button className="button_1 w-fit  bg-grad_1 text-white">
          About Us
        </button>
      </div>
    </div>
  );
};

export default DiscoverSensei;
