import React from "react";
import FreeActivityBtn from "@/components/activityComps/FreeActivityBtn";
import Stars from "@/components/miniComps/Stars";
import Link from "next/link";
const GetStarted = () => {
  return (
    <div className="relative mx-auto flex max-w-[320px] flex-col items-center gap-6 md:max-w-[572px]">
      <Stars />{" "}
      <h2 className="h4 mx-auto h-fit max-w-[90vw] uppercase text-secondary lg:col-start-2">
        GET STARTED
      </h2>
      <p className="h5_b text-center md:text-2xl md:font-medium md:leading-7">
        Explore our activities, meet our expert team, and unlock Sensei&apos;s
        full potential today!
      </p>
      <Link
        href={"/child-details"}
        className="flex h-12 max-w-[258px] cursor-pointer items-center rounded-[50px] bg-grad_1 px-6 py-3 md:h-14 md:max-w-fit md:px-8 md:py-4"
      >
        <p className="body1_b text-center text-white">Enroll at Rs.99</p>
      </Link>
    </div>
  );
};

export default GetStarted;
