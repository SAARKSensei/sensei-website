/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";
import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { setCurrentUserData } from "@/Redux/slice/currentuserslice";
// import { toast } from "react-toastify";
import Link from "next/link";
import LeftSide from "@/components/loginComps/LeftSide";

const page = () => {
  const [phoneNum, setPhoneNum] = useState("");
  const [parentName, setParentName] = useState("");
  const [login, setLogin] = useState(false);
  const [orderId, setOrderid] = useState(uuid());
  const dispatch = useDispatch();

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";
  const router = useRouter();

  const handleClick = async () => {
    //phonenum validation using regex
    dispatch(
      setCurrentUserData({
        phoneNumber: phoneNum,
        name: parentName,
        parentId: "",
        orderId: orderId,
      }),
    );

    try {
      const otpRes = await axios.post(`/v1/otp/send`, {
        dtCode: orderId,
        phoneNumber: phoneNum,
        name: parentName,
        //"email": "yashpratapsingh125@gmail.com",
        //"orderId": "ABC1235",
        otpTTL: 60,
        otpLength: 6,
        // "channel": "WHATSAPP/SMS/EMAIL"
      });
      // const status = otpRes;
      // console.log(otpRes);
      // setOrderid(otpRes?.data?.orderId);
      router.push("/otpverification?callbackUrl=" + callbackUrl);
    } catch (error) {
      // toast.warn("Enter correct number");
      alert(error?.response?.data || "Enter correct number");
      console.error(error);
    }
  };

  const handleChange = (pn) => {
    const phoneNumRegex = /^[0-9]\d{9}$/;
    if (phoneNumRegex.test(pn)) {
      setPhoneNum(91 + pn);
      setLogin(true);
    } else {
      setLogin(false);
    }
  };

  return (
    <div className="h-screen w-screen">
      <div className="flex flex-col sm:flex-row">
        <div className="hidden w-1/2 sm:flex">
          <LeftSide />
        </div>
        <div className="absolute bottom-[450px] left-7 flex flex-col sm:hidden">
          <p className="font-Nunito text-[33px] font-bold">Welcome</p>
          <p className="font-Nunito text-base font-normal">
            Sign in to continue
          </p>
        </div>
        <div className="absolute bottom-0 left-0 flex h-max w-full flex-col justify-end rounded-3xl bg-[#FFEFDE] px-7 py-11 sm:relative sm:h-screen sm:w-1/2 sm:justify-center sm:bg-[#FFF]">
          <div className="flex w-full flex-col items-center gap-4 sm:ml-24 sm:h-[298px] sm:w-[382px] sm:items-start">
            <div className="flex w-full flex-col items-center gap-4 sm:w-[335px] sm:items-start sm:justify-start">
              <label
                htmlFor="name"
                className="font-Nunito text-base font-normal"
              >
                Child Name
              </label>
              <div className="mt-1.5 flex w-full rounded-md border border-gray-300 bg-white px-3 py-3 shadow-lg sm:w-[276px]">
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={(e) => setParentName(e.target.value)}
                  className="w-full outline-none"
                />
              </div>
              <label
                type="number"
                className="font-Nunito text-base font-normal"
              >
                Phone number
              </label>
              <div className="mt-1.5 flex w-full rounded-md border border-gray-300 bg-white px-3 py-3 shadow-lg sm:w-[276px]">
                <span className="mr-2 px-2 font-bold text-gray-600">+91</span>
                <input
                  type="tel"
                  maxLength={10}
                  onChange={(e) => handleChange(e.target.value)}
                  className="w-full outline-none"
                />
              </div>
              <p className="mx-7 font-Nunito text-xs font-light sm:mx-0 sm:w-[276px]">
                A 6 digit OTP will be sent via SMS to verify your mobile number.
              </p>
            </div>
            {login && (
              <button
                className="backgroud-button cursor-pointer rounded-full px-6 py-3 text-white"
                onClick={handleClick}
              >
                Login
              </button>
            )}
            <p className="hidden w-full pr-28 text-xs sm:block">
              By signing in, you agree to the{" "}
              <Link href="/t&c" className="font-semibold">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy-policy" className="font-semibold">
                Privacy Policy
              </Link>
              . You also agree that you have parental consent (if child). We use
              WhatsApp for important updates
            </p>
            <p className="font-Nunito text-xs font-bold sm:hidden">
              <Link href="/t&c">Terms of Service</Link> |{" "}
              <Link href="/privacy-policy">Privacy Policy</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
