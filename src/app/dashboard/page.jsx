"use client";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import addchild from "@/Images/addchild.png";
import Subject from "@/components/Modules/Subject";
// import Navbar3 from "@/components/Navbar3";
// import CounsellorCard from "@/components/CounsellorCard";
import Background1 from "@/components/miniComps/BackGround.jsx";
import { getSubColour } from "@/utils/logic";
import Activities from "@/components/Modules/Activities";
import axios from "axios";

const UserDashboard = () => {
  const [modules, setModules] = useState([]);
  const [colours, setColours] = useState({});
  const [subjectId, setSubjectId] = useState(0);
  const [subjectData, setSubjectData] = useState([]);
  const currentUserData = useSelector((state) => state?.currentUser?.data);
  const fetchSubjectData = async () => {
    const res = await axios.get(`/subjects`).catch((err) => console.log(err));
    // console.log(res?.data);
    if (res?.data) {
      setSubjectData(res.data);
      setModules(res?.data[0]?.modules);
      setColours(getSubColour(res?.data[0]?.subject?.subjectName));
    }
  };
  const selectmodule = async (sid) => {
    setSubjectId(sid);
    setModules(subjectData[sid]?.modules);
  };

  useEffect(() => {
    fetchSubjectData();
  }, []);

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
      <div className="flex w-full gap-10">
        {!!subjectData?.length && (
          <div className="flex grow flex-col">
            <h4 className="h4 px-4 text-left uppercase text-black">
              {" "}
              Subjects
            </h4>
            <div className="scrollbar flex w-full flex-col gap-5 px-4 sm:h-[500px] sm:overflow-y-auto">
              {subjectData.map((item, i) => (
                <React.Fragment key={i}>
                  <Subject
                    subject={item}
                    selected={i === subjectId}
                    action={() => selectmodule(i)}
                  />
                  {i === subjectId && (
                    <Activities
                      hidden={"sm:hidden "}
                      colours={colours}
                      modules={modules}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}
        <Activities
          hidden={"max-sm:hidden"}
          colours={colours}
          modules={modules}
        />
      </div>
    </div>
  );
};

export default UserDashboard;
