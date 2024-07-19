"use client";

import React from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useState, useRef, useEffect } from "react";
import { fetchParentsRequest } from "@/Redux/slice/parentSlice";
import { fetchChildrenRequest } from "@/Redux/slice/childrenSlice";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";

import Danger from "@/Images/danger.svg?url";
import LeftSide from "@/components/LeftSide";
import axios from "axios";

const Page = () => {
  //Fetching Parent and child data
  const { data: session, status } = useSession();
  const parentData = useSelector((state) => state?.parents?.data);
  const currentUserData = useSelector((state) => state?.currentUser?.data);
  const phone = currentUserData?.phoneNumber;
  const router = useRouter();
  const [canResend, setCanResend] = useState(false);
  let [countDown, setCountDown] = useState(120);
  const [loading, setLoading] = useState(false);
  //Getting phone nuomber from search params
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  //Dispatching actions to get parent and children data from provided details
  const dispatch = useDispatch();
  const id = parentData?.id;
  useEffect(() => {
    dispatch(fetchParentsRequest({ phone }));
    dispatch(fetchChildrenRequest({ id }));
  }, [id, phone, dispatch]);

  //otp input functionality

  const otpInputs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  const focusInput = (inputs, index) => {
    inputs[index].current.focus();
  };

  const handleInputChange = (inputs, index, value) => {
    // Move to the next input on value change
    if (value && index < inputs.length - 1) {
      focusInput(inputs, index + 1);
    }
  };

  const handleKeyDown = (inputs, index, e) => {
    //also select the value of the input

    // On pressing the Arrow keys, move the focus on the left and right side
    if (e.key === "ArrowLeft" && index > 0) {
      e.preventDefault();
      focusInput(inputs, index - 1);
    } else if (e.key === "ArrowRight" && index < inputs.length - 1) {
      e.preventDefault();
      focusInput(inputs, index + 1);
    }

    // Move to the previous input on Backspace if not on the first input
    if (e.key === "Backspace" && index > 0) {
      if (inputs[index].current.value !== "") {
        inputs[index].current.value = "";
      } else focusInput(inputs, index - 1);
    }
  };

  const detailsHandler = async () => {
    setLoading(true);
    const finalOtp = otpInputs.reduce((acc, input) => {
      return acc + input.current.value;
    }, "");
    console.log("otp", finalOtp);
    console.log("sign", {
      phone,
      name: currentUserData?.name,
      otp: finalOtp,
      orderId: currentUserData?.orderId,
    });
    const res = await signIn("credentials", {
      phone,
      name: currentUserData?.name,
      otp: finalOtp,
      orderId: currentUserData?.orderId,
      // callbackUrl: callbackUrl,
      redirect: false,
    });

    console.log(res);

    const status = res?.status;
    if (status === 200) router.push("/dashboard");
    setLoading(false);
    // console.log(res, session, status);
    // if (!res?.ok) return;
    // if (!session?.user?.parentDetails) {
    //   router.push("/parentdetails");
    // } else if (session?.user?.childrenDetails?.length === 0) {
    //   router.push("/childdetails");
    // } else {
    //   router.push(`/parent/${session?.user?.parentDetails?.name}`);
    // }
  };
  // useEffect(() => {
  //   console.log(session);
  // }, [session]);

  useEffect(() => {
    if (countDown > 0) {
      const timer = setTimeout(() => {
        setCountDown((prevCountDown) => prevCountDown - 1);
      }, 1000);

      return () => clearTimeout(timer);
    } else {
      setCountDown(0);
      setCanResend(true);
    }
  }, [countDown]);

  return (
    <div className="h-screen w-screen">
      <div className="flex flex-col sm:flex-row">
        <div className="hidden h-screen w-1/2 lg:flex">
          <LeftSide />
        </div>
        <div className="absolute bottom-[364px] left-7 flex flex-col sm:hidden">
          <p className="font-Nunito text-[33px] font-bold">Welcome</p>
          <p className="font-Nunito text-base font-normal">
            Sign in to continue
          </p>
        </div>
        <div className="absolute bottom-0 left-0 flex h-[355px] w-full flex-col justify-end rounded-3xl bg-[#FFEFDE] px-7 py-10 sm:relative sm:h-screen sm:w-1/2 sm:justify-center sm:bg-[#fff] sm:p-0">
          <div className="mr-auto flex h-full w-full flex-col justify-center text-center sm:top-4 sm:ml-24 sm:h-[382px] sm:max-w-fit sm:text-start">
            {status === 400 && (
              <div className="path mb-2 ml-2 hidden h-7 w-60 rounded-tl-2xl bg-[#FFF0DE] text-xs sm:block">
                <div className="absolute z-50 hidden sm:block">
                  <Image src={Danger} alt="Danger" className="z-50 h-8 w-8" />
                </div>
                <h6 className="ml-9 pt-1.5 font-medium text-blue-900">
                  Please enter the correct OTP
                </h6>
              </div>
            )}
            <h6 className="font-Nunito text-base font-light">Hello</h6>
            <h6 className="text-3xl font-semibold">{currentUserData?.name}</h6>
            <h6 className="text-xs sm:mt-3">Enter the OTP received to</h6>
            <h1 className="mt-3 text-3xl font-semibold">
              +91 {currentUserData?.phoneNumber}
            </h1>
            <p className="mx-auto mt-2.5 w-[300px] text-xs sm:mx-0">
              A 6 digit OTP will be sent via SMS to verify your mobile number.
            </p>
            <div className="mt-4 flex justify-center gap-2 lg:justify-start lg:gap-4">
              {otpInputs.map((inputRef, index) => (
                <input
                  key={index}
                  type="text"
                  className="h-12 w-12 rounded-md border-2 border-slate-500 text-center lg:h-14 lg:w-14"
                  maxLength={1}
                  pattern="\d+"
                  inputMode="numeric"
                  ref={inputRef}
                  onChange={(e) =>
                    handleInputChange(otpInputs, index, e.target.value)
                  }
                  onKeyDown={(e) => handleKeyDown(otpInputs, index, e)}
                  onClick={() => focusInput(otpInputs, index)}
                />
              ))}
            </div>
            <div className="mx-auto mt-3 flex w-full justify-between">
              {canResend ? (
                <>
                  <h4 className="text-sm font-semibold text-[#F58720]">
                    Resend OTP
                  </h4>
                </>
              ) : (
                <>
                  <h4 className="text-sm font-semibold text-[#F58720]">
                    You resend OTP in
                  </h4>
                  <h4 className="text-xs">{countDown} sec</h4>
                </>
              )}
            </div>
            <button
              disabled={loading}
              className="backgroud-button mt-5 h-10 w-28 self-center rounded-full px-5 py-2 text-white disabled:opacity-50 sm:self-start"
              onClick={detailsHandler}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
