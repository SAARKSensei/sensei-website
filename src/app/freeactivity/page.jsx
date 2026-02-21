"use client";

import React, { useEffect, useState } from "react";
import EmotionNav from "@/components/activityComps/EmotionNav";
import ActivityCard from "@/components/Modules/ActivityCard";
import introbg from "@/assets/in-Use/introbg.svg?url";
import axios from "axios";
import { MOCK_SUBMODULE_DATA } from "@/utils/mock-data"; // ← Import mock data

export const Home = () => {
  const [activities, setactivities] = useState({});
  const [useMockData, setUseMockData] = useState(true); // ← Toggle for mock/real API
  
  useEffect(() => {
    // 🎯 USE MOCK DATA - Perfect for development
    if (useMockData) {
      console.log("📌 Using MOCK DATA from centralized file");
      setactivities(MOCK_SUBMODULE_DATA);
      return; // Skip API call
    }

    // 🌐 REAL API CALL - Use when API is back
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/submodules/ff80818195387c6d0195387d8ce80002`,
        );
        setactivities(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error, "error in fetching data");
      }
    };
    fetchData();
  }, [useMockData]);

  return (
    <div
      style={{
        backgroundImage: `url(${introbg.src})`,
        backgroundSize: "cover",
      }}
      className="mt-8 md:mt-16 container mx-auto mb-20 flex flex-wrap justify-between gap-5 p-4"
    >
      {/* 🚧 DEV TOGGLE - Remove when going to production */}
     
      {/* Navigation */}
      <EmotionNav name={activities?.subModuleName} />

      {/* Main Content */}
      <div className="flex w-full flex-col gap-10 md:px-24 px-6 py-12">
        {/* Page Title */}
        <h1 className="body_1 w-fit text-primary text-4xl font-semibold">
          {activities?.subModuleName || "Loading..."}
        </h1>
        
        {/* Activities Grid */}
        <div className="flex w-full flex-col gap-8">
          
          {/* Interactive Activities Section */}
          {!!activities?.interactiveActivities?.length && (
            <div className="w-full flex flex-col gap-4">
              <h4 className="h5 text-left uppercase text-black">
                Interactive Activities
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {activities.interactiveActivities.map((activity, index) => (
                  <ActivityCard key={activity.interactiveActivityId || index} activity={activity} />
                ))}
              </div>
            </div>
          )}
          
          {/* Digital/Gamified Activities Section */}
          {!!activities?.digitalActivities?.length && (
            <div className="w-full flex flex-col gap-4">
              <h4 className="h5 text-left uppercase text-black">
                Gamified Activities
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {activities.digitalActivities.map((activity, index) => (
                  <ActivityCard key={activity.digitalActivityId || index} activity={activity} />
                ))}
              </div>
            </div>
          )}

          {/* Empty State - Show if no activities */}
          {!activities?.interactiveActivities?.length && !activities?.digitalActivities?.length && (
            <div className="w-full text-center py-12">
              <p className="text-gray-500 text-lg">No activities available yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;