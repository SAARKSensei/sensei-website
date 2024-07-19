import { useState } from "react";
import Image from "next/image";

import ActivityCard from "./ActivityCard";

import LeftScroll from "@/Images/leftScroll.svg?url";
import RightScroll from "@/Images/rightScroll.svg?url";
import Varroww from "@/assets/varroww.svg";
import Lock from "@/assets/lock.svg";
import { activityData } from "@/utils/data";
import { useRouter } from "next/navigation";
const Activities = () => {
  const [value, setValue] = useState("fruit");
  const router = useRouter();
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const options = [
    { label: "All", value: "all" },
    { label: "New", value: "new" },
    { label: "Completed", value: "completed" },
    { label: "Incomplete", value: "incomplete" },
    { label: "Upcoming", value: "upcoming" },
  ];

  const inSchoolActivities = activityData[0];
  const afterSchoolActivities = activityData[1];
  const modules = [
    {
      title: "In School Activities",
      free: true,
      subModules: [
        {
          title: "Self Identity",
          data: inSchoolActivities[0],
        },
        {
          title: "Strengths And Challenges",
          data: inSchoolActivities[1],
        },
        {
          title: "My Body And Emotions",
          data: inSchoolActivities[2],
        },
        {
          title: "Strengths And Challenges",
          data: inSchoolActivities[3],
        },
      ],
    },
    {
      title: "After School Activities",
      free: false,
      subModules: [
        {
          title: "My Favourite Things",
          data: afterSchoolActivities[0],
        },
        {
          title: "My Proud Moments And Rest",
          data: afterSchoolActivities[1],
        },
        {
          title: "My Proud Moments And Rest",
          data: afterSchoolActivities[2],
        },
        {
          title: "My Proud Moments And Rest",
          data: afterSchoolActivities[3],
        },
      ],
    },
  ];
  return (
    <>
      <ol
        onClick={() => router.push("/funactivity")}
        className="body1_b flex w-full cursor-pointer list-decimal flex-col gap-4 rounded-2xl"
      >
        {modules.map((module, index) => (
          <div
            key={index}
            className={`${module?.free ? "group text-primary" : "text-grey_2"} flex flex-col gap-5`}
          >
            <div className="flex w-full items-center gap-2 rounded-2xl bg-white px-4">
              {!module?.free && <Lock />}
              <li className={`ml-8 py-4 pr-2`}>{module.title}</li>
              <Varroww className="ml-auto mr-4 w-4 rotate-180 transition-all group-hover:rotate-90" />
            </div>
            <ol className="flex max-h-0 list-decimal flex-col items-end justify-end gap-5 overflow-hidden transition-all duration-700 group-hover:max-h-full">
              {module.subModules.map((subModule, index) => (
                <div
                  key={index}
                  className="flex w-[80%] min-w-max items-center justify-between gap-2 rounded-2xl bg-white p-4 pl-12"
                >
                  <li className="pr-2 text-primary">{subModule.title}</li>
                </div>
              ))}
            </ol>
          </div>
        ))}
      </ol>
    </>
  );
};

export default Activities;
