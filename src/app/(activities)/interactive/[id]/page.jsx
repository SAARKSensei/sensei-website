"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import cross from "@/assets/in-Use/cross-solid.svg?url";
import Infosvg from "@/assets/in-Use/info.svg";
import IconImage from "@/assets/in-Use/IconImage.svg?url";
import Loading from "@/components/gamifiedActivities/Loading";
import Materials from "@/components/activityComps/Materials";
import axios from "axios";
import { notFound, useRouter } from "next/navigation";
import Feedback from "@/components/activityComps/Feedback";
import { MOCK_SUBMODULE_DATA } from "@/utils/mock-data";

const Page = ({ params: { id } }) => {
  const Router = useRouter();
  const [outcomesText, setOutcomesText] = useState("");
  const [state, setState] = useState(0);
  const [infoOpen, setInfoOpen] = useState(false);
  const [currProcess, setCurrProcess] = useState(0); // Main step (0-5)
  const [currChildTask, setCurrChildTask] = useState(0); // Child task within step (0-5)
  const [interactiveActivity, setInteractiveActivity] = useState(null);
  const [useMockData, setUseMockData] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  const TOTAL_STEPS = 6;
  const CHILD_TASKS_PER_STEP = 6;

  const nextProcess = () => {
    setActiveButton('next');
    setTimeout(() => setActiveButton(null), 200);
    
    // Check if we're on the last child task of current step
    if (currChildTask < CHILD_TASKS_PER_STEP - 1) {
      // Move to next child task
      setCurrChildTask((pre) => pre + 1);
    } else {
      // All child tasks done, move to next main step
      if (currProcess < TOTAL_STEPS - 1) {
        setCurrProcess((pre) => pre + 1);
        setCurrChildTask(0); // Reset child tasks for new step
      } else {
        // All steps completed, go to feedback
        setState((pre) => pre + 1);
      }
    }
    window.scrollTo(0, 0);
  };

  const prevProcess = () => {
    setActiveButton('back');
    setTimeout(() => setActiveButton(null), 200);
    
    // Check if we're on the first child task
    if (currChildTask > 0) {
      // Go to previous child task
      setCurrChildTask((pre) => pre - 1);
    } else {
      // Go to previous main step's last child task
      if (currProcess > 0) {
        setCurrProcess((pre) => pre - 1);
        setCurrChildTask(CHILD_TASKS_PER_STEP - 1);
      }
    }
    window.scrollTo(0, 0);
  };

  const currentProcess = interactiveActivity?.processes?.[currProcess];
  const imageUrl = currentProcess?.image;
  const imageId = imageUrl?.split("/")?.[5];
  
  // Calculate step progress (not total task progress)
  const currentStepNumber = currProcess + 1; // 1-6
  const stepProgressPercentage = (currentStepNumber / TOTAL_STEPS) * 100;
  
  // Check if this is the last task of the last step
  const isLastTask = currProcess === TOTAL_STEPS - 1 && currChildTask === CHILD_TASKS_PER_STEP - 1;
  const BASE_URL = "https://api.sensei.org.in";

  useEffect(() => {
    if (useMockData) {
      console.log("📌 Using MOCK DATA for Interactive Activity");
      const mockActivity = MOCK_SUBMODULE_DATA.interactiveActivities[0];
      setInteractiveActivity(mockActivity);
      return;
    }

    const fetchProcessData = async () => {
      const res = await axios
        .get(`${ BASE_URL}/interactive-activities/${id}`)
        .catch((err) => console.log(err));

      if (res?.data) {
        setInteractiveActivity(res?.data);
      }
    };
    fetchProcessData();
  }, [id, useMockData]);

  useEffect(() => {
    if (interactiveActivity?.keyOutcomes) {
      setOutcomesText(processText(interactiveActivity.keyOutcomes));
    }
  }, [interactiveActivity?.keyOutcomes]);

  const processText = (outcomes) => {
    const withoutPipes = outcomes?.replace(/\s*\|\s*/g, "\n");
    return withoutPipes?.replace(/(\d+\.)/g, "$1 ").trim();
  };

  switch (state) {
    case 0:
      return (
        <Loading
          activity={{
            outComes: outcomesText,
            name: interactiveActivity?.interactiveActivityName,
            ageGroup: "5-7 years",
          }}
          action={() => setState((pre) => pre + 1)}
        />
      );
    case 1:
      return !interactiveActivity ? (
        notFound()
      ) : (
        <Materials
          materials={interactiveActivity?.materialsRequired}
          action={() => setState((pre) => pre + 1)}
        />
      );
    case 3:
      return interactiveActivity ? (
        <Feedback
          activityId={interactiveActivity.interactiveActivityId}
          activityName={interactiveActivity.interactiveActivityName}
        />
      ) : (
        "please wait"
      );
    case 2:
      return (
        <div className="min-h-screen bg-white pb-24 font-['Nunito']">
          {/* DEV TOGGLE - Remove in production */}
          <div className="w-full bg-yellow-100 border-2 border-yellow-500 p-3">
            <p className="font-bold">🚧 Development Mode</p>
            <button 
              onClick={() => setUseMockData(!useMockData)}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              {useMockData ? "Switch to REAL API" : "Switch to MOCK DATA"}
            </button>
          </div>

          {/* Header */}
          <header className="bg-[#2C3D68] px-5 pt-6 pb-5 w-full md:px-8 lg:px-12">
            {/* Breadcrumbs & Activity Name */}
            <div className="flex flex-col gap-2">
              {/* Breadcrumbs */}
              <div className="flex items-center gap-1 text-white text-sm font-semibold">
                <span>Home</span>
                <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none">
                  <path d="M5 3L9 7L5 11" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span>1</span>
                <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none">
                  <path d="M5 3L9 7L5 11" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span>DIY</span>
              </div>

              {/* Activity Name */}
              <h1 className="text-white text-xl font-medium leading-[30px] md:text-2xl lg:text-3xl">
                {interactiveActivity?.interactiveActivityName || "Feeling Freeze Sculpture"}
              </h1>
            </div>
          </header>

          {/* Main Content */}
          <div className="px-5 md:px-8 lg:px-12 xl:max-w-7xl xl:mx-auto">
            {/* Sensei Voice & Subheader */}
            <div className="mt-6 flex flex-col gap-4">
              {/* Subheader with Title and Hint */}
              <div className="flex justify-between items-center gap-3">
                <h2 className="text-[#FF8B13] text-lg font-medium leading-7 md:text-xl">
                  {`${currProcess + 1}. ${currentProcess?.processName || "Get Ready to Move!"}`}
                </h2>
                
                <button 
                  onClick={() => setInfoOpen(true)}
                  className="flex items-center gap-2 px-[9px] py-[9px] rounded-[20px] border border-[#FF8B13] hover:bg-[#FFF5E6] transition-colors"
                >
                  <svg className="w-5 h-[18px]" viewBox="0 0 20 18" fill="none">
                    <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM11 15H9V13H11V15ZM11 11H9V5H11V11Z" fill="#FF8B13"/>
                  </svg>
                  <span className="text-[#FF8B13] font-bold text-base leading-5">Hint</span>
                </button>
              </div>

              {/* Sensei Avatar and Message */}
              <div className="flex gap-4 md:gap-6">
                {/* Avatar with Sensei Icon - Full Size */}
                <div className="flex-shrink-0">
                  <div className="w-[116px] h-[116px] rounded border-4 border-white shadow-[-1px_2px_6px_rgba(0,0,0,0.36)] bg-gray-200 md:w-32 md:h-32 flex items-center justify-center overflow-hidden">
                    <Image 
                      src={IconImage} 
                      alt="Sensei"
                      width={116}
                      height={116}
                      className="object-cover w-full h-full md:w-32 md:h-32"
                    />
                  </div>
                </div>

                {/* Message Bubble */}
                <div className="flex-1 flex items-center max-w-[200px] md:max-w-xs lg:max-w-md">
                  <div className="bg-white shadow-[-1px_2px_24px_rgba(0,0,0,0.16)] rounded-lg p-4">
                    <p className="text-[#666666] text-base leading-6 font-normal">
                      {currentProcess?.senseiMessage || "Let's dance and move our bodies freely to the music."}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Bar Section */}
            <div className="mt-6 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                {/* Progress Bar */}
                <div className="flex-1 h-2 bg-[#E6E6E6] rounded-[4px] overflow-hidden">
                  <div 
                    className="h-full bg-[#FF8B13] rounded-[4px] transition-all duration-300"
                    style={{ width: `${stepProgressPercentage}%` }}
                  />
                </div>
                
                {/* Counter - Shows Step Progress (01/06) */}
                <span className="text-[#666666] text-sm font-semibold leading-5 min-w-[38px] text-right">
                  {String(currentStepNumber).padStart(2, '0')}/{String(TOTAL_STEPS).padStart(2, '0')}
                </span>
              </div>

              <p className="text-[#999999] text-sm font-medium leading-5">
                Follow below steps
              </p>
            </div>

            {/* Video/Image Preview */}
            <div className="mt-4 relative w-full h-[197px] bg-[#D9D9D9] rounded-2xl overflow-hidden md:h-[300px] lg:h-[400px]">
              {imageId ? (
                <Image
                  src={`https://drive.google.com/uc?export=view&id=${imageId}`}
                  alt={currentProcess?.processName || "Activity step"}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[74px] h-[74px] rounded-lg flex items-center justify-center">
                    <svg className="w-[70px] h-[50px]" viewBox="0 0 70 50" fill="white">
                      <path d="M0 6C0 2.68629 2.68629 0 6 0H46C49.3137 0 52 2.68629 52 6V44C52 47.3137 49.3137 50 46 50H6C2.68629 50 0 47.3137 0 44V6Z" fill="white"/>
                      <path d="M52 12L70 0V50L52 38V12Z" fill="white"/>
                    </svg>
                  </div>
                </div>
              )}
            </div>

            {/* Child Tasks Card */}
            <div className="mt-4 bg-white shadow-[0_2px_5px_rgba(0,0,0,0.12)] rounded-xl p-3">
              <p className="text-[#999999] text-sm font-medium leading-5 mb-3">
                Child Tasks - Step {currProcess + 1}
              </p>

              {/* Step Numbers - Shows 6 child tasks for current step */}
              <div className="flex justify-between items-center mb-3">
                {Array.from({ length: CHILD_TASKS_PER_STEP }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrChildTask(index)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                      index <= currChildTask
                        ? 'bg-[#FF8B13] text-white shadow-[0_2px_5px_rgba(0,0,0,0.12)]'
                        : 'border border-[#A4A4A4] text-[#999999] shadow-[0_2px_5px_rgba(0,0,0,0.12)]'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>

              {/* Task Description - Shows data from current process */}
              <p className="text-[#333333] text-base font-semibold leading-6">
                {currentProcess?.childMessage || `Complete task ${currChildTask + 1} of step ${currProcess + 1}`}
              </p>
            </div>
          </div>

          {/* Bottom Navigation Buttons */}
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-5 md:px-8 lg:px-12">
            <div className="flex gap-8 max-w-[348px] mx-auto xl:max-w-7xl">
              {/* Back Button - Show only if not on first task */}
              {(currProcess > 0 || currChildTask > 0) && (
                <button
                  onClick={prevProcess}
                  className={`flex-1 flex items-center justify-center gap-2 h-14 px-4 bg-white border border-[#999999] rounded-lg transition-all ${
                    activeButton === 'back' ? 'bg-blue-50 border-blue-500' : ''
                  }`}
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <path d="M15 18L9 12L15 6" stroke="#999999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-[#999999] font-bold text-base leading-6">
                    Back
                  </span>
                </button>
              )}

              {/* Next/Finish Button */}
              <button
                onClick={nextProcess}
                className={`flex-1 flex items-center justify-center gap-2 h-14 px-4 bg-[#2C3D68] rounded-lg transition-all ${
                  activeButton === 'next' ? 'bg-blue-600' : ''
                } ${currProcess === 0 && currChildTask === 0 ? 'w-full' : ''}`}
              >
                <span className="text-white font-bold text-base leading-6">
                  {isLastTask ? 'Finish' : 'Next'}
                </span>
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Info Modal */}
          {infoOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-5 z-50">
              <div className="bg-white rounded-2xl p-6 max-w-md w-full">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-[#2C3D68]">Activity Info</h3>
                  <button onClick={() => setInfoOpen(false)} className="text-gray-500 hover:text-gray-700">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <p className="text-[#666666] leading-6">
                  {interactiveActivity?.intro || "This is an interactive activity designed to help children learn through movement and exploration."}
                </p>
              </div>
            </div>
          )}
        </div>
      );
  }
};

export default Page;