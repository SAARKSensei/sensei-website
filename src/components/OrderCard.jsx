"use client";

import React, { useState } from "react";
import Image from "next/image";

import { removeCurrentChild } from "@/Redux/slice/currentChildSlice";
import { useRouter } from "next/navigation";

import Book from "@/Images/books.svg?url";
import DeletIcon from "@/Images/Deleteicon.svg?url";

const OrderCard = ({ childData }) => {
  const [deleteChild, setDeleteChild] = useState(false);

  const childDOB = childData?.dateOfBirth
    ? childData.dateOfBirth.slice(0, 10).split("-").reverse().join("/")
    : "";

  // Split the input date string into day, month, and year
  const [day, month, year] = childDOB.split("/").map(Number);

  // Get the current date
  const currentDate = new Date();

  // Calculate the difference in years between the current date and the input date
  let age = currentDate.getFullYear() - year;

  // Adjust the age if the birthday hasn't occurred yet this year
  if (
    currentDate.getMonth() < month - 1 ||
    (currentDate.getMonth() === month - 1 && currentDate.getDate() < day)
  ) {
    age--;
  }
  const router = useRouter();

  const deleteCurrentChild = (e) => {
    e.preventDefault();
    removeCurrentChild();
    router.push("/childdetails");
  };

  if (deleteChild) {
    return (
      <div className="flex h-32 w-full flex-col items-center justify-center gap-5 rounded-md border-2 border-[#B8B8B8] bg-[#DBDBDB] p-2 sm:h-[184px] sm:bg-white sm:p-5">
        <h1 className="font-Nunito text-base font-bold tracking-wide text-[#2C3D68] sm:text-2xl">
          Do you want to cancel?
        </h1>
        <div className="flex h-14 w-max gap-6">
          <button
            className="h-10 w-48 rounded-[40px] font-Nunito text-lg font-semibold hover:bg-red-500 hover:text-white"
            onClick={deleteCurrentChild}
          >
            Yes
          </button>
          <button
            className="h-10 w-48 rounded-[40px] font-Nunito text-lg font-semibold"
            onClick={() => setDeleteChild(false)}
          >
            No
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="felx-row flex h-32 w-full justify-between rounded-md border-2 border-[#B8B8B8] bg-[#DBDBDB] p-2 sm:h-[184px] sm:bg-white sm:p-5">
        <div className="flex w-full items-center justify-between">
          <div className="flex w-full items-center sm:gap-2">
            <Image
              src={Book}
              alt="book"
              className="mr-5 h-[78px] w-[66px] sm:h-[161px] sm:w-[140px]"
            />
            <div className="flex flex-col justify-center gap-1">
              <h3 className="font-Nunito text-base font-bold tracking-wide text-[#2C3D68] sm:text-2xl">
                {childData?.childName}
              </h3>
              <div className="flex gap-1 text-xs font-bold text-[#787878] sm:gap-2 sm:text-lg">
                <h6>Age: {age} years </h6>
                <h6>Grade: {childData?.grade}</h6>
              </div>
              <h4 className="whitespace-nowrap rounded-sm border-[1px] border-[#0764A7] bg-blue-200 px-1 text-xs font-semibold text-[#0764A7] sm:text-lg">
                Foundational Course
              </h4>
            </div>
          </div>
          <div className="ml-3 flex h-full flex-col items-center justify-around">
            <div className="flex items-center justify-center gap-2 sm:gap-4">
              <Image
                className="w-4 cursor-pointer sm:w-8"
                alt="delete icon"
                src={DeletIcon}
                onClick={() => setDeleteChild(true)}
              />
            </div>
            <div className="flex flex-col items-center">
              <h4 className="font-Nunito text-base font-bold text-[#2C3D68] sm:text-2xl">
                ₹{childData?.planPrice / 100}
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default OrderCard;
