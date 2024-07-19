"use client";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import addchild from "@/Images/addchild.png";
import Subject from "@/components/Modules/Subject";
// import Navbar3 from "@/components/Navbar3";
// import CounsellorCard from "@/components/CounsellorCard";
import Background1 from "@/components/BackGround.jsx";
import Activities from "@/components/Modules/Activities";
import { subjectData, counsellorData } from "@/utils/data";

const UserDashboard = () => {
  const [activities, setActivities] = useState(subjectData[0]);
  const currentUserData = useSelector((state) => state?.currentUser?.data);

  return (
    <div className="hh-screen container relative mx-auto flex w-fit flex-col items-center gap-10 from-gray-200 to-white p-4 py-10 sm:py-20">
      <Background1 />

      <div className="flex flex-wrap justify-center gap-5 md:gap-10">
        <div className="flex flex-col items-start gap-1 py-4">
          <p className="h4 text-grey_1">Hello!</p>
          <Link className="no-underline" href="/familypage">
            <p className="h3 font-bold text-black">
              {currentUserData?.name || "Avatar name"}
            </p>
          </Link>
          <p className="body-1 text-grey_1">
            Let&apos;s start your journey to a brighter future.
          </p>
        </div>
        <div className="relative h-fit max-w-[min(650px,90vw)] rounded-2xl bg-gradient-to-t from-[#EF5F3D] via-[#F97A23] to-[#F8BF3B] p-4 shadow-lg">
          <h1 className="h3 mb-4 w-[80%] text-left font-Nunito font-bold text-white">
            Teach your kid the Life-skill education they need.{" "}
          </h1>
          <Link
            href={"/child-details"}
            className="mr-auto flex h-fit w-fit cursor-pointer items-center rounded-[40px] bg-white p-2 px-4 font-Nunito text-base font-bold text-black md:px-8 md:py-6 md:text-xl"
          >
            Enroll Your Child{" "}
          </Link>
          <Image
            src={addchild}
            alt="addchild"
            sizes="auto"
            className="absolute -right-5 bottom-0 -z-[0] max-h-full max-w-[min(298px,50%)] object-contain"
          />
        </div>
      </div>
      <div className="mx-auto flex flex-wrap justify-center gap-10 lg:justify-start">
        <div className="flex flex-col">
          <h4 className="h4 text-left uppercase text-black"> Subjects</h4>
          <div className="flex max-w-[90vw] gap-5 overflow-x-scroll lg:flex-col">
            {subjectData.map((item, i) => (
              <Subject
                key={i}
                subjectName={item?.subjectName}
                percentage={item?.percentage}
                innerSubjectDivColor={item?.innerSubjectDivColor}
                innerBarColor={item?.innerBarColor}
                action={() => setActivities(item)}
              />
            ))}
          </div>
        </div>
        {activities && (
          <div>
            <h4 className="h4 pb-4 text-left uppercase text-black">
              {" "}
              Activities
            </h4>

            <div
              style={{ backgroundColor: activities.innerSubjectDivColor }}
              className={`animate-fade-in flex h-[500px] w-[min(632px,90vw)] overflow-y-auto rounded-[10px] p-4 pt-10`}
            >
              <Activities />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
