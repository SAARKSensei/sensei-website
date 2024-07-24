import React from "react";

import Collage from "@/assets/us/collage.png";
import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  return (
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-5 sm:flex-row">
      <div className="w-full sm:order-2 sm:w-1/2">
        <Image
          src={Collage}
          alt="Collage"
          sizes="auto"
          loading="lazy"
          className="w-full"
        />
      </div>
      <div className="flex w-full flex-col gap-6 sm:order-1 sm:w-1/2">
        <h2 className="h4 h-fit max-w-[90vw] uppercase text-secondary lg:col-start-2">
          About Us
        </h2>
        <p className="para leading-10">
          At Sensei, we are dedicated to revolutionizing education by blending
          activity-based learning (ABL) with essential life-skills, mental
          resilience, and strong ethical values. We&apos;re on a mission to
          revolutionize education and make life-skills accessible to over 1.5
          lakh students across India by 2025.
        </p>
        {/* <div className='w-fit relative button_1 z-[0] cursor-pointer'>
                    <span className="absolute -inset-[2px] z-[-1] rounded-full bg-grad_1" />
                    <span className="absolute bg-[#FEF5F3] inset-0 rounded-full z-[-1]" />
                    <span className="text-grad">About Us</span>
                </div> */}
        <Link
          href={"/about"}
          className="text-grad button_text relative flex w-fit cursor-pointer items-center justify-center rounded-full border-2 border-[#FF8B13] bg-white px-8 py-4"
        >
          About Us
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
