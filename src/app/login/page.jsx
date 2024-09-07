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
import Backgroud from "@/Images/background.svg?url";
import Image from "next/image";

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
    <div className="h-full w-screen">
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-20">
        <div className="flex h-full w-[70%] items-center max-sm:order-1 max-sm:mb-10 sm:w-1/2">
          <Image
            src={Backgroud}
            alt="background served with static path of image folder in src directory"
            className="absolute z-[-10] h-full w-full sm:w-1/2"
          />
          <LeftSide />
        </div>
        {/* <div className="flex flex-col sm:hidden">
          <p className="font-Nunito text-[33px] font-bold">Welcome</p>
          <p className="font-Nunito text-base font-normal">
            Sign in to continue
          </p>
        </div> */}
        <div className="flex h-max w-full flex-col justify-end p-4 sm:relative sm:h-screen sm:w-1/2 sm:justify-center">
          <p className="h3 font-semibold text-primary max-sm:pt-10">
            Login now and get started with the fun & easy-to-use interactive &
            gamified activities at{" "}
            <span className="text-secondary">₹ 99/-</span>
          </p>
          <div className="flex w-full flex-col gap-4 rounded-3xl py-11 sm:items-start">
            <div className="flex w-full flex-col gap-4 sm:w-[335px] sm:items-start sm:justify-start">
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
              <p className="font-Nunito text-xs font-light sm:mx-0 sm:w-[276px]">
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
            <p className="w-full max-w-[276px] text-xs">
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
            {/* <p className="font-Nunito text-xs font-bold sm:hidden">
              <Link href="/t&c">Terms of Service</Link> |{" "}
              <Link href="/privacy-policy">Privacy Policy</Link>
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
