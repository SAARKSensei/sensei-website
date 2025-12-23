/* eslint-disable react-hooks/rules-of-hooks */
"use client";

// import React, { useEffect, useState } from "react";
// import Google_Icon from "./google.png";
import { signIn } from "next-auth/react";
// import axios from "axios";
// import { v4 as uuid } from "uuid";
// import { useRouter, useSearchParams } from "next/navigation";
// import { useDispatch } from "react-redux";
// import { setCurrentUserData } from "@/Redux/slice/currentuserslice";
// import { toast } from "react-toastify";
import Link from "next/link";
import LeftSide from "@/components/loginComps/LeftSide";
import Backgroud from "@/assets/in-Use/background.svg?url";
import Image from "next/image";
import WhyChooseSenseiSection from "@/components/homeComps/WhyChooseSensei";
import ExploreCurriculum from "@/components/homeComps/ExploreCurriculum";
import Footer from "@/components/Footer";

const page = () => {
  // const [phoneNum, setPhoneNum] = useState("");
  // const [parentName, setParentName] = useState("");
  // const [login, setLogin] = useState(false);
  // const [orderId, setOrderid] = useState(uuid());
  // const dispatch = useDispatch();

  // const searchParams = useSearchParams();
  // const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";
  // const router = useRouter();

  // const handleClick = async () => {
  //   //phonenum validation using regex
  //   dispatch(
  //     setCurrentUserData({
  //       phoneNumber: phoneNum,
  //       name: parentName,
  //       parentId: "",
  //       orderId: orderId,
  //     }),
  //   );

  //   try {
  //     const otpRes = await axios.post(`/v1/otp/send`, {
  //       dtCode: orderId,
  //       phoneNumber: phoneNum,
  //       name: parentName,
  //       //"email": "yashpratapsingh125@gmail.com",
  //       //"orderId": "ABC1235",
  //       otpTTL: 60,
  //       otpLength: 6,
  //       // "channel": "WHATSAPP/SMS/EMAIL"
  //     });
  //     // const status = otpRes;
  //     // console.log(otpRes);
  //     // setOrderid(otpRes?.data?.orderId);
  //     router.push("/otpverification?callbackUrl=" + callbackUrl);
  //   } catch (error) {
  //     // toast.warn("Enter correct number");
  //     alert(error?.response?.data || "Enter correct number");
  //     console.error(error);
  //   }
  // };

  // const handleChange = (pn) => {
  //   const phoneNumRegex = /^[0-9]\d{9}$/;
  //   if (phoneNumRegex.test(pn)) {
  //     setPhoneNum(91 + pn);
  //     setLogin(true);
  //   } else {
  //     setLogin(false);
  //   }
  // };

  return (
    <>
      <div className="max-w-screen mt-6 h-full overflow-hidden md:mt-12">
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-20">
          <div className="flex h-full max-w-[calc(100vw-100px)] items-center max-sm:order-1 max-sm:mb-10 sm:w-1/2">
            <Image
              src={Backgroud}
              alt="background served with static path of image folder in src directory"
              className="absolute z-[-10] h-full w-full sm:w-1/2"
              fetchPriority="high"
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
            <p className="h3 font-semibold text-primary text-secondary max-sm:pt-10">
              Login now and get started with the fun & easy-to-use interactive &
              gamified activities.
            </p>
            <div className="mt-12 flex h-12 w-full items-center">
              <button
                onClick={() => {
                  signIn("google");
                }}
                className="flex items-center gap-4 rounded-xl bg-[#FF8B13] px-8 py-3 pl-6 font-semibold text-white"
              >
                {/* <Image
                src={Google_Icon}
                alt="google icon"
                width={20}
                height={20}
                className="saturate-0"
              /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="25"
                  height="25"
                  viewBox="0,0,256,256"
                  style={{ fill: "#FFFFFF" }}
                >
                  <g
                    fill="#ffffff"
                    fill-rule="nonzero"
                    stroke="none"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit="10"
                    strokeDasharray=""
                    strokeDashoffset="0"
                    fontFamily="none"
                    fontWeight="none"
                    fontSize="none"
                    textAnchor="none"
                    style={{ mixBlendMode: "normal" }}
                  >
                    <g transform="scale(5.33333,5.33333)">
                      <path d="M23,21.5v5c0,0.828 0.671,1.5 1.5,1.5h10.809c-0.499,1.416 -1.256,2.698 -2.205,3.805l6.033,5.229c3.022,-3.505 4.863,-8.054 4.863,-13.034c0,-0.828 -0.064,-1.688 -0.202,-2.702c-0.101,-0.743 -0.736,-1.298 -1.486,-1.298h-17.812c-0.829,0 -1.5,0.672 -1.5,1.5zM12.612,27.761c-0.392,-1.184 -0.612,-2.447 -0.612,-3.761c0,-1.314 0.22,-2.577 0.612,-3.761l-6.557,-5.014c-1.303,2.653 -2.055,5.624 -2.055,8.775c0,3.151 0.752,6.122 2.056,8.775zM30.865,33.835c-1.959,1.369 -4.333,2.165 -6.865,2.165c-4.212,0 -7.917,-2.186 -10.059,-5.478l-6.362,4.865c3.616,5.198 9.623,8.613 16.421,8.613c4.968,0 9.508,-1.832 13.009,-4.84zM37.515,9.297c-3.702,-3.416 -8.502,-5.297 -13.515,-5.297c-6.798,0 -12.805,3.415 -16.421,8.614l6.362,4.865c2.142,-3.293 5.847,-5.479 10.059,-5.479c2.944,0 5.776,1.081 7.974,3.043c0.593,0.53 1.498,0.504 2.06,-0.059l3.525,-3.524c0.289,-0.288 0.447,-0.683 0.439,-1.091c-0.008,-0.408 -0.183,-0.795 -0.483,-1.072z"></path>
                    </g>
                  </g>
                </svg>
                <span>FREE Sign Up</span>
              </button>
            </div>

            <div className="mb-5 flex w-full flex-col gap-4 rounded-3xl sm:items-start md:py-2">
              <div className="flex w-full flex-col gap-4 sm:w-[335px] sm:items-start sm:justify-start">
                {/* <label
                htmlFor="name"
                className="font-Nunito text-base font-normal"
              >
                Child Name
              </label>
              <div className="mt-1.5 flex w-full rounded-md border border-gray-300 bg-white px-3 py-3 shadow-lg sm:w-[276px]">
                {/* <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={(e) => setParentName(e.target.value)}
                  className="w-full outline-none"
                /> */}
              </div>
              {/* <label
                type="number"
                className="font-Nunito text-base font-normal"
              >
                Phone number
              </label>
              <div className="mt-1.5 flex w-full rounded-md border border-gray-300 bg-white px-3 py-3 shadow-lg sm:w-[276px]">
                <span className="mr-2 px-2 font-bold text-gray-600">+91</span>
                {/* <input
                  type="tel"
                  maxLength={10}
                  onChange={(e) => handleChange(e.target.value)}
                  className="w-full outline-none"
                /> */}
            </div>
            {/* <p className="font-Nunito text-xs font-light sm:mx-0 sm:w-[276px]">
                A 6 digit OTP will be sent via SMS to verify your mobile number.
              </p>
            </div> */}
            {/* <button
              className="backgroud-button cursor-pointer rounded-full px-6 py-3 text-white"
              onClick={handleClick}
            >
              Login
            </button> */}

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
        {/* <WhyChooseSenseiSection />
        <ExploreCurriculum /> */}
      </div>
      <Footer />
    </>
    // </div>
  );
};

export default page;
