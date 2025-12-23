"use client";

import React, { useEffect, useState } from "react";
import EmotionNav from "@/components/activityComps/EmotionNav";
import ActivityCard from "@/components/Modules/ActivityCard";
import introbg from "@/assets/in-Use/introbg.svg?url";
import axios from "axios";

export const Home = () => {
    const [activities, setactivities] = useState({})
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `/submodules/ff80818195387c6d019538830e99002f`,
          );
          setactivities(response.data);
          console.log(response.data);
          
        } catch (error) {
          console.log(error, "error in fetching data");
        }
      };
      fetchData();
    },[]);
  
    // console.log(activities);
    return (
      <div
        style={{
          backgroundImage: `url(${introbg.src})`,
          backgroundSize: "cover",
        }}
        className="mt-8 md:mt-16 container mx-auto mb-20 flex flex-wrap justify-between gap-5 p-4"
      >
        {/* <Print data={activities} /> */}
        {/* <Print data={interactivieActivities} /> */}
        <EmotionNav name={activities?.subModuleName} />
  
        <div className="flex w-full flex-col gap-10 md:px-24 px-6 py-12">
        <h1 className="body_1 w-fit text-primary text-4xl font-semibold">{activities?.subModuleName} </h1>
        <div className="flex w-full flex-wrap lg:pr-24 justify-between items-center">
        {!!activities?.interactiveActivities?.length && (
            <div className="nmd:max-w-[45%] flex flex-col gap-4">
              <h4 className="h5 text-left uppercase text-black">
                Interactive Activities
              </h4>
  
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 overflow-x-scroll">
                {activities?.interactiveActivities?.map((activity, index) => (
                  <ActivityCard key={index} activity={activity} />
                ))}
              </div>
            </div>
          )}
          {!!activities?.digitalActivities?.length && (
            <div className="nmd:max-w-[45%] flex flex-col gap-4">
              <h4 className="h5 text-left uppercase text-black">
                Gamified Activities
              </h4>
  
              <div className="flex gap-4 overflow-x-scroll">
                {activities?.digitalActivities.map((activity, index) => (
                  <ActivityCard key={index} activity={activity} />
                ))}
              </div>
            </div>
          )}
        </div>
        </div>
  
        {/* <Intro />
        <Process />
        <BackToTop />
        <Bookm />  */}
      </div>
    );
  };
  export default Home;