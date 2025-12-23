"use client";
import React, { useState } from "react";

import Image from "next/image";
import { useLifeSkills } from "@/context/LifeSkillContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Result = () => {
  const { getAllSkills } = useLifeSkills();
  const userSkills = getAllSkills();
  const [showFullResult, setShowFullResult] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const allSkills = [
    "Decision Making",
    "Creativity",
    "Communication",
    "Coping with Emotions",
    "Stress Management",
    "Self-awareness",
    "Interpersonal Communication",
    "Empathy",
    "Problem Solving",
    "Critical Thinking",
  ];

  const router = useRouter();
  const strongSkills = allSkills.filter((skill) => userSkills.includes(skill));
  const needAttentionSkills = allSkills.filter(
    (skill) => !userSkills.includes(skill),
  );
  localStorage.setItem(
    "SenseiNeedAttentionSkills",
    JSON.stringify(needAttentionSkills),
  );
  localStorage.setItem("SenseiStrongSkills", JSON.stringify(strongSkills));

  if (!isVisible) {
    return null; // Don't render anything if not visible
  } else {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-50 px-2 py-6 backdrop-blur-sm sm:px-4">
        <div className="relative h-auto max-h-[95vh] w-full max-w-[848px] overflow-auto rounded-2xl bg-[#fdf5ef] px-4 py-6 shadow-xl sm:px-6 sm:py-8">
          {/* Close Button */}
          <button
            onClick={() => router.replace("/")}
            className="absolute right-3 h-8 w-8 rounded-full border border-gray-800 text-xl font-bold text-gray-700 shadow transition hover:bg-gray-200 sm:right-4 sm:top-3 sm:h-10 sm:w-10"
          >
            ×
          </button>

          {/* Top Content: V-Stacked on Mobile */}
          <div className="mt-16 flex flex-col items-center gap-10 lg:mt-12 lg:flex-row lg:items-start lg:justify-center">
            {/* Skills Section */}
            <div className="w-full max-w-md transition-all duration-500 lg:max-w-sm">
              <h2 className="mb-4 text-center text-2xl font-semibold lg:text-left">
                Life-skills your child shows:
              </h2>

              {/* Legend */}
              <div className="mb-4 flex items-center justify-center gap-4 lg:justify-start">
                <div className="flex items-center gap-1">
                  <span className="h-3 w-3 rounded-full bg-green-600"></span>
                  <span className="text-sm">Strong</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="h-3 w-3 rounded-full bg-red-400"></span>
                  <span className="text-sm">Need Attention</span>
                </div>
              </div>

              {/* Skills Display */}
              <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start">
                {/* Strong */}
                <div className="flex flex-col items-start gap-2">
                  {strongSkills.map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="h-6 w-1 rounded bg-green-600"></div>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>

                {/* Needs Attention */}
                <div
                  className={`flex flex-col items-start gap-2 transition-all duration-500 ${showFullResult ? "opacity-100 blur-0" : "opacity-95 blur-sm"}`}
                >
                  {needAttentionSkills.map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="h-6 w-1 rounded bg-red-400"></div>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="flex flex-col items-center gap-4">
              <button
                onClick={() => {
                    setIsVisible(false);
                    router.replace("/login")}
                }
                className="flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-orange-600 lg:mt-36"
              >
                {showFullResult ? "Hide Results ❌" : "View Full Results 🚀"}
              </button>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mt-16 flex flex-col items-center gap-10 lg:flex-row lg:justify-center lg:gap-8">
            {/* Testimonial 1 */}
            <div className="relative w-full max-w-md rounded-xl bg-white p-6 shadow-md">
              <div className="absolute left-4 top-[-20px] text-4xl text-orange-400">
                ❝
              </div>
              <p className="mb-6 text-sm">
                Sensei&apos;s activity-based learning modules are a fantastic
                addition to my classroom. The social-emotional learning focus is
                refreshing, and I&apos;ve seen a positive difference in how
                students interact with each other.
              </p>
              <div className="flex items-center gap-3">
                <Image
                  src={"/images/Roma Kaushik.jpg"}
                  alt="Dr. Roma Kaushik"
                  className="h-10 w-10 rounded-full"
                  width={40}
                  height={40}
                />
                <div>
                  <div className="text-sm font-semibold text-blue-600">
                    Dr. Roma Kaushik
                  </div>
                  <div className="text-xs text-gray-500">
                    Clinical Psychologist, Raipur
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="relative w-full max-w-md rounded-xl bg-white p-6 shadow-md">
              <div className="absolute left-4 top-[-20px] text-4xl text-orange-400">
                ❝
              </div>
              <p className="mb-6 text-sm">
                As a practicing psychologist, I&apos;m impressed by
                Sensei&apos;s commitment to well-being. This can be a game
                changer for Indian parenting specially the introduction of SEL
                modules
              </p>
              <div className="flex items-center gap-3">
                <Image
                  src={"/images/Bhamini Sachar.jpg"}
                  alt="Bhamini Sachar"
                  className="h-10 w-10 rounded-full"
                  width={40}
                  height={40}
                />
                <div>
                  <div className="text-sm font-semibold text-blue-600">
                    Bhamini Sachar
                  </div>
                  <div className="text-xs text-gray-500">
                    Counselling Psychologist, Pune
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Result;
