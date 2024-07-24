import React from "react";

import EmotionNav from "@/components/activityComps/EmotionNav";
import Intro from "@/components/activityComps/Intro";
import Navbar from "@/components/Modules/Navbar";
import Process from "@/components/activityComps/Process";
import BackToTop from "@/components/activityComps/BackToTop";
import Bookm from "@/components/activityComps/bookm";
import ActivityCard from "@/components/Modules/ActivityCard";
import introbg from "@/Images/introbg.svg?url";

import { gamifiedActivities, interactivieActivities } from "@/utils/data";
export const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${introbg.src})`,
        backgroundSize: "cover",
      }}
      className="container mx-auto mb-20 flex flex-wrap justify-between gap-5 p-4"
    >
      <EmotionNav />
      <div className="flex max-w-full flex-col gap-4 lg:max-w-[45%]">
        <h4 className="h4 text-left uppercase text-black">
          {" "}
          Interactive Activities
        </h4>

        <div className="flex gap-4 overflow-x-scroll">
          {interactivieActivities.map((activity, index) => (
            <ActivityCard key={index} activity={activity} />
          ))}
        </div>
        <h4 className="h4 text-left uppercase text-black">
          {" "}
          Gamified Activities
        </h4>

        <div className="flex gap-4 overflow-x-scroll">
          {gamifiedActivities.map((activity, index) => (
            <ActivityCard key={index} activity={activity} />
          ))}
        </div>
      </div>
      <Intro />
      {/* <Process /> */}
      {/* <BackToTop />
      <Bookm />  */}
    </div>
  );
};
export default Home;
