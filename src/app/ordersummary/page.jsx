"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import Script from "next/script";
import axios from "axios";
import { removeCurrentChild } from "@/Redux/slice/currentChildSlice";

import Background from "@/components/miniComps/BackGround";
import OrderCard from "@/components/OrderCard";
import Link from "next/link";

const Page = () => {
  const [paymentSuccesful, setPaymentSuccesful] = useState(false);
  const [paymentFailed, setPaymentFailed] = useState(false);
  const [checked, setChecked] = useState(false);

  const parentData = useSelector((state) => state?.parents?.data);
  const currentChildData = useSelector((state) => state?.currentChild?.data);
  const currentUserData = useSelector((state) => state?.currentUser?.data);

  // console.log(currentChildData, currentUserData);

  const router = useRouter();

  const paymentHandler = async (e) => {
    e.preventDefault();

    const amount = currentChildData?.planPrice * 100;
    const currency = "INR";
    // console.log(
    //   process.env.NEXT_PUBLIC_RAZORPAY_KEY,
    //   amount,
    //   currency,
    //   currentUserData?.orderId,
    // );
    var options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
      amount,
      currency,
      name: "Sensei",
      description: `Family plan payement request for ${currentChildData?.childName}`,
      image: "",
      order_id: currentUserData?.orderId,
      handler: async function (response) {
        // console.log(currentChildData);

        const createChildRes = await axios.post(
          `/child-users`,
          currentChildData,
        );
        // console.log(createChildRes);
        if (createChildRes?.id) {
          setPaymentFailed(false);
          setPaymentSuccesful(true);
        }

        // setPaymentFailed(false);
        // setPaymentSuccesful(true);
        setTimeout(() => {
          removeCurrentChild();
          router.push(`/dashboard`);
        }, 3000);
        clearTimeout();
      },
      prefill: {
        name: "Sensei",
        email: "sensei@gmail.com",
        // contact: parentData?.phone,
      },
      theme: {
        color: "#f97316",
      },
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.open();
    rzp1.on("payment.failed", function (response) {
      if (response.error.code) {
        alert(
          `${response.error.description} Please enter correct payment information`,
        );
      }
      setPaymentSuccesful(false);
      setPaymentFailed(true);
    });
  };

  return (
    <>
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />

      <div className="relative h-full">
        <Background />
        {/* Main div */}
        <div className="container mx-auto my-10 flex flex-col items-center justify-center gap-10 p-4 md:my-20 lg:flex-row">
          <div className="w-full sm:max-w-[550px]">
            {/* Title and order number */}
            <div className="mt-9 flex w-full items-center justify-between sm:mt-0">
              <h1 className="font-Nunito text-2xl font-bold text-[#2C3D68] sm:text-[32px]">
                Order Summary
              </h1>
              <p className="font-Nunito text-base font-semibold text-[#2C3D68]">
                1 item
              </p>
            </div>
            {/* orders div */}
            <div className="mt-4 flex w-full flex-col items-center justify-center gap-5">
              <OrderCard childData={currentChildData} />
            </div>
          </div>
          {/* Referal div */}
          <div className="flex w-full flex-col items-center gap-2 md:max-w-[500px]">
            <div className="mt-10 flex h-max w-full flex-col items-end justify-between rounded-[20px] bg-white p-8 shadow-lg sm:mt-0">
              <div className="mx-auto flex h-full w-full flex-col items-center justify-center gap-6">
                <div className="flex w-full flex-col gap-3">
                  <div className="flex w-full items-center justify-between text-[#2C3D68]">
                    <h1 className="font-Nunito text-lg font-semibold">
                      Subscription
                    </h1>
                    <h1 className="font-Nunito text-xl font-bold">
                      ₹{currentChildData?.planPrice}
                    </h1>
                  </div>
                  {/* <div className="w-full flex items-center justify-between text-[#f97316] border-b-2	border-[#f97316]">
                      <h1 className="font-Nunito font-semibold text-lg">
                        Referral dis.
                      </h1>
                      <h1 className="font-Nunito font-bold text-xl">₹0</h1>
                    </div> */}
                  <div className="flex w-full items-center justify-between text-[#2C3D68]">
                    <h1 className="font-Nunito text-lg font-bold">Total</h1>
                    <h1 className="font-Nunito text-2xl font-extrabold">
                      ₹{currentChildData?.planPrice}
                    </h1>
                  </div>
                </div>
                <div className="flex w-full flex-col justify-center gap-8">
                  {/* <div className="w-full flex flex-col justify-center">
                      <h1 className="font-Nunito text-xl items-start text-[#2C3D68] font-bold mb-6">
                        Have a Referral code?
                      </h1>
                      <p className=" font-NunitoSans text-base font-normal text-gray-400 mb-2">
                        Add your code for instant discount
                      </p>
                      <div className="flex flex-row w-full drop-shadow-lg justify-between items-center bg-white rounded-[10px] px-4 py-2">
                        <input
                          type="text"
                          placeholder="Enter referral code"
                          className="rounded-[10px] outline-none font-NunitoSans font-semibold text-base text-[#1A1A1A] text-start"
                        />
                        <button className="h-full px-6 py-1 text-[#f97316] font-Nunito text-lg items-center border-2 border-[#f97316] font-extrabold rounded-xl">
                          Apply
                        </button>
                      </div>
                    </div> */}
                  <div className="flex w-full flex-row justify-center gap-4">
                    <input
                      type="checkbox"
                      name="terms"
                      className="h-7 w-7"
                      onClick={() => setChecked(!checked)}
                    />
                    <div className="font-PlusJakartaSans flex flex-wrap gap-2 text-sm font-medium leading-6 tracking-normal md:text-lg">
                      <p className="text-black opacity-50">
                        I agree to Sensei&apos;s
                      </p>{" "}
                      <Link href="/t&c" className="text-[#f97316]">
                        Terms & Conditions
                      </Link>{" "}
                      <span className="text-black opacity-50">and</span>{" "}
                      <Link href="/privacy-policy" className="text-[#f97316]">
                        Privacy policy
                      </Link>
                    </div>
                  </div>
                  <button
                    onClick={paymentHandler}
                    type="Submit"
                    disabled={!checked}
                    className="backgroud-button flex w-full items-center justify-center rounded-full px-6 py-2 font-Nunito text-lg font-extrabold text-white disabled:opacity-50"
                  >
                    Proceed to Payment
                  </button>
                </div>
              </div>
            </div>
            {paymentSuccesful && (
              <div className="mt-10 font-Nunito text-2xl font-extrabold text-green-300">
                Payment Successful
              </div>
            )}
            {paymentFailed && (
              <div className="mt-10 font-Nunito text-2xl font-extrabold text-red-600">
                Payment Failed.
                {/* {response.error.reason}. {response.error.description} */}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
