"use client";

import React, { useEffect, useState } from "react";
import EmotionNav from "@/components/activityComps/EmotionNav";
import ActivityCard from "@/components/Modules/ActivityCard";
import introbg from "@/assets/in-Use/introbg.svg?url";

const BASE_URL = "https://api.sensei.org.in";

export default function Home({ params: { Id } }) {
  const [subModule, setSubModule]             = useState(null);
  const [interactiveActivities, setInteractive] = useState([]);
  const [digitalActivities, setDigital]       = useState([]);
  const [loading, setLoading]                 = useState(true);
  const [error, setError]                     = useState(null);

  useEffect(() => {
    if (!Id) return;

    const fetchAll = async () => {
      try {
        setLoading(true);
        setError(null);

        // 1. Fetch submodule details to get the name
        const subRes = await fetch(`${BASE_URL}/api/sub-modules`);
        if (!subRes.ok) throw new Error("Failed to fetch submodule");
        const allSubs = await subRes.json();
        const currentSub = allSubs.find((s) => s.id === Id);
        setSubModule(currentSub || null);

        // 2. ✅ New API — fetch activities directly by submodule ID
        const actRes = await fetch(`${BASE_URL}/api/interactive-activities/by-submodule/${Id}`);
        if (!actRes.ok) throw new Error("Failed to fetch activities");
        const allActivities = await actRes.json();

        // 3. Filter only active + sort by orderIndex
        const sorted = allActivities
          .filter((a) => a.isActive === true)
          .sort((a, b) => (a.orderIndex ?? 0) - (b.orderIndex ?? 0));

        // 4. Split by activityType
        const interactive = sorted.filter(
          (a) => a.activityType === "DIY" || a.activityType === "Interactive"
        );
        const digital = sorted.filter(
          (a) => a.activityType === "Digital" || a.activityType === "Gamified"
        );

        setInteractive(interactive);
        setDigital(digital);

      } catch (err) {
        console.error("Error fetching funactivity data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, [Id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "18px", color: "#999" }}>
          Loading activities...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "18px", color: "red" }}>
          Failed to load. Please try again.
        </p>
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundImage: `url(${introbg.src})`,
        backgroundSize: "cover",
      }}
      className="mt-8 md:mt-16 container mx-auto mb-20 flex flex-wrap justify-between gap-5 p-4"
    >
      {/* Top nav with submodule name */}
      <EmotionNav name={subModule?.name} />

      <div className="flex w-full flex-col gap-10 md:px-24 px-6 py-12">

        {/* Page title */}
        <h1 className="body_1 w-fit text-primary text-4xl font-semibold">
          {subModule?.name}
        </h1>

        <div className="flex w-full flex-col lg:pr-24 gap-10">

          {/* ✅ Interactive / DIY Activities */}
          {interactiveActivities.length > 0 && (
            <div className="flex flex-col gap-4">
              <h4 className="h5 text-left uppercase text-black">
                Interactive Activities
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 overflow-x-scroll">
                {interactiveActivities.map((activity, index) => (
                  // ✅ uses activity.title from new API response
                  <ActivityCard key={activity.id || index} activity={activity} />
                ))}
              </div>
            </div>
          )}

          {/* ✅ Gamified / Digital Activities */}
          {digitalActivities.length > 0 && (
            <div className="flex flex-col gap-4">
              <h4 className="h5 text-left uppercase text-black">
                Gamified Activities
              </h4>
              <div className="flex gap-4 overflow-x-scroll">
                {digitalActivities.map((activity, index) => (
                  // ✅ uses activity.title from new API response
                  <ActivityCard key={activity.id || index} activity={activity} />
                ))}
              </div>
            </div>
          )}

          {/* ✅ Empty state */}
          {interactiveActivities.length === 0 && digitalActivities.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 gap-4">
              <span style={{ fontSize: "48px" }}>📭</span>
              <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: "16px", color: "#999" }}>
                No activities available for this submodule yet.
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}