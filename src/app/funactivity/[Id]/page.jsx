import React from "react";

import EmotionNav from "@/components/activityComps/EmotionNav";
import Intro from "@/components/activityComps/Intro";
import Navbar from "@/components/Modules/Navbar";
import Process from "@/components/activityComps/Process";
import BackToTop from "@/components/activityComps/BackToTop";
import Bookm from "@/components/activityComps/bookm";
import ActivityCard from "@/components/Modules/ActivityCard";
import introbg from "@/Images/introbg.svg?url";
import Print from "@/components/miniComps/Print";
// import { gamifiedActivities, interactivieActivities } from "@/utils/data";
export const Home = async ({ params: { Id } }) => {
  let activities = [];
  let interactivieActivities = [];
  let digitalActivities = [];
  console.log(Id);
  try {
    activities = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}activities/filter?subModuleRef=${Id}`,
    ).then((res) => res.json());
    if (activities) {
      const InteractivieActivityId = activities.find((activity) =>
        activity?.activityType.startsWith("Interactive"),
      )?.activityId;
      const DigitalActivityId = activities.find((activity) =>
        activity?.activityType.startsWith("Digital"),
      )?.activityId;
      console.log(InteractivieActivityId, DigitalActivityId);
      if (InteractivieActivityId) {
        interactivieActivities = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}interactiveActivities/filter?activityRef=${InteractivieActivityId}`,
        ).then((res) => res.json());
      }
      if (DigitalActivityId) {
        digitalActivities = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}digitalActivities/filter?activityRef=${DigitalActivityId}`,
        ).then((res) => res.json());
        //console.log(InteractivieActivities?.data);
      }
    }
  } catch (err) {
    // console.log(err);
  }
  //console.log(InteractivieActivities?.data);
  return (
    <div
      style={{
        backgroundImage: `url(${introbg.src})`,
        backgroundSize: "cover",
      }}
      className="container mx-auto mb-20 flex flex-wrap justify-between gap-5 p-4"
    >
      <Print data={activities} />
      <Print data={interactivieActivities} />
      <EmotionNav name={activities[0]?.subModule?.subModuleName} />
      <div className="flex max-w-full flex-col gap-10">
        {!!interactivieActivities.length && (
          <div className="mmd:max-w-[45%] flex flex-col gap-4">
            <h4 className="h4 text-left uppercase text-black">
              Interactive Activities
            </h4>

            <div className="flex gap-4 overflow-x-scroll">
              {interactivieActivities?.map((activity, index) => (
                <ActivityCard key={index} activity={activity} />
              ))}
            </div>
          </div>
        )}
        {!!digitalActivities.length && (
          <div className="mmd:max-w-[45%] flex flex-col gap-4">
            <h4 className="h4 text-left uppercase text-black">
              Gamified Activities
            </h4>

            <div className="flex gap-4 overflow-x-scroll">
              {digitalActivities.map((activity, index) => (
                <ActivityCard key={index} activity={activity} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* <Intro />
      <Process />
      <BackToTop />
      <Bookm />  */}
    </div>
  );
};
export default Home;
