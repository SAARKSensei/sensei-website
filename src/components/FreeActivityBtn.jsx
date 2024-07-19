"use client";
import React from "react";
import { useRouter } from "next/navigation";
const FreeActivityBtn = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/login")}
      className="flex h-12 max-w-[258px] cursor-pointer items-center rounded-[50px] bg-grad_1 px-6 py-3 md:h-14 md:max-w-fit md:px-8 md:py-4"
    >
      <p className="body1_b text-center text-white">
        Sign Up for FREE activity
      </p>
    </div>
  );
};

export default FreeActivityBtn;
