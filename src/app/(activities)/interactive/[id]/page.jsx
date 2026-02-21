"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import IconImage from "@/assets/in-Use/IconImage.svg?url";
import Loading from "@/components/gamifiedActivities/Loading";
import Materials from "@/components/activityComps/Materials";
import axios from "axios";
import { notFound, useRouter } from "next/navigation";
import Feedback from "@/components/activityComps/Feedback";

// ✅ FIX 1: Correct BASE_URL with /api prefix
const BASE_URL = "https://api.sensei.org.in/api";

const Page = ({ params: { id } }) => {
  const Router = useRouter();
  const [outcomesText, setOutcomesText] = useState("");
  const [state, setState] = useState(0);
  const [infoOpen, setInfoOpen] = useState(false);
  const [currProcess, setCurrProcess] = useState(0);
  const [currChildTask, setCurrChildTask] = useState(0);
  const [interactiveActivity, setInteractiveActivity] = useState(null);
  const [activeButton, setActiveButton] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const TOTAL_STEPS = 6;
  const CHILD_TASKS_PER_STEP = 6;

  const nextProcess = () => {
    setActiveButton("next");
    setTimeout(() => setActiveButton(null), 200);

    if (currChildTask < CHILD_TASKS_PER_STEP - 1) {
      setCurrChildTask((pre) => pre + 1);
    } else {
      if (currProcess < TOTAL_STEPS - 1) {
        setCurrProcess((pre) => pre + 1);
        setCurrChildTask(0);
      } else {
        setState((pre) => pre + 1);
      }
    }
    window.scrollTo(0, 0);
  };

  const prevProcess = () => {
    setActiveButton("back");
    setTimeout(() => setActiveButton(null), 200);

    if (currChildTask > 0) {
      setCurrChildTask((pre) => pre - 1);
    } else {
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

  const currentStepNumber = currProcess + 1;
  const stepProgressPercentage = (currentStepNumber / TOTAL_STEPS) * 100;
  const isLastTask =
    currProcess === TOTAL_STEPS - 1 &&
    currChildTask === CHILD_TASKS_PER_STEP - 1;

  useEffect(() => {
    const fetchProcessData = async () => {
      setLoading(true);
      setError(null);
      try {
        // ✅ FIX 1: Correct endpoint with /api prefix
        const res = await axios.get(
          `${BASE_URL}/interactive-activities/${id}`
        );
        if (res?.data) {
          setInteractiveActivity(res.data);
        }
      } catch (err) {
        console.error("Error fetching interactive activity:", err);
        setError(err?.response?.status || "unknown");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProcessData();
    }
  }, [id]);

  useEffect(() => {
    // ✅ FIX 2: Correct field name — learningOutcome (not keyOutcomes)
    if (interactiveActivity?.learningOutcome) {
      setOutcomesText(processText(interactiveActivity.learningOutcome));
    }
  }, [interactiveActivity?.learningOutcome]);

  const processText = (outcomes) => {
    const withoutPipes = outcomes?.replace(/\s*\|\s*/g, "\n");
    return withoutPipes?.replace(/(\d+\.)/g, "$1 ").trim();
  };

  // Loading state
  if (loading && state !== 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-600 font-semibold font-['Nunito']">
            Loading activity…
          </p>
        </div>
      </div>
    );
  }

  // Error state
  if (error && !interactiveActivity) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white px-6">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-[#2C3D68] mb-2 font-['Nunito']">
            {error === 401
              ? "Unauthorized"
              : error === 404
              ? "Activity Not Found"
              : "Something went wrong"}
          </h2>
          <p className="text-gray-500 mb-6 font-['Nunito']">
            {error === 401
              ? "You don't have permission to view this activity. Please log in."
              : error === 404
              ? "This activity doesn't exist or has been removed."
              : "Failed to load the activity. Please try again."}
          </p>
          <button
            onClick={() => Router.back()}
            className="px-6 py-3 bg-[#2C3D68] text-white rounded-lg font-bold font-['Nunito'] hover:bg-[#1f2d4d] transition-all"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  switch (state) {
    case 0:
      return (
        <Loading
          activity={{
            outComes: outcomesText,
            // ✅ FIX 2: Correct field — title (not interactiveActivityName)
            name: interactiveActivity?.title,
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
          // ✅ FIX 2: Correct fields — id and title
          activityId={interactiveActivity.id}
          activityName={interactiveActivity.title}
        />
      ) : (
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
        </div>
      );

    case 2:
      return (
        <div className="min-h-screen bg-white pb-24 font-['Nunito']">
          {/* Header */}
          <header className="bg-[#2C3D68] px-5 pt-6 pb-5 w-full md:px-8 lg:px-12">
            <div className="flex flex-col gap-2">
              {/* Breadcrumbs */}
              <div className="flex items-center gap-1 text-white text-sm font-semibold">
                <span>Home</span>
                <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M5 3L9 7L5 11"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <span>Subjects</span>
                <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M5 3L9 7L5 11"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                {/* ✅ FIX 2: Correct field — activityType */}
                <span>{interactiveActivity?.activityType || "DIY"}</span>
              </div>

              {/* ✅ FIX 2: Correct field — title */}
              <h1 className="text-white text-xl font-medium leading-[30px] md:text-2xl lg:text-3xl">
                {interactiveActivity?.title || "Activity"}
              </h1>
            </div>
          </header>

          {/* Main Content */}
          <div className="px-5 md:px-8 lg:px-12 xl:max-w-7xl xl:mx-auto">
            {/* Subheader with Title and Hint */}
            <div className="mt-6 flex flex-col gap-4">
              <div className="flex justify-between items-center gap-3">
                <h2 className="text-[#FF8B13] text-lg font-medium leading-7 md:text-xl">
                  {`${currProcess + 1}. ${
                    currentProcess?.processName || "Get Ready!"
                  }`}
                </h2>

                <button
                  onClick={() => setInfoOpen(true)}
                  className="flex items-center gap-2 px-[9px] py-[9px] rounded-[20px] border border-[#FF8B13] hover:bg-[#FFF5E6] transition-colors"
                >
                  <svg
                    className="w-5 h-[18px]"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM11 15H9V13H11V15ZM11 11H9V5H11V11Z"
                      fill="#FF8B13"
                    />
                  </svg>
                  <span className="text-[#FF8B13] font-bold text-base leading-5">
                    Hint
                  </span>
                </button>
              </div>

              {/* Sensei Avatar and Message */}
              <div className="flex gap-4 md:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-[116px] h-[116px] rounded border-4 border-white shadow-[-1px_2px_6px_rgba(0,0,0,0.36)] bg-gray-200 md:w-32 md:h-32 flex items-center justify-center overflow-hidden">
                    <Image
                      src={IconImage}
                      alt="Sensei"
                      width={116}
                      height={116}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>

                <div className="flex-1 flex items-center max-w-[200px] md:max-w-xs lg:max-w-md">
                  <div className="bg-white shadow-[-1px_2px_24px_rgba(0,0,0,0.16)] rounded-lg p-4">
                    <p className="text-[#666666] text-base leading-6 font-normal">
                      {currentProcess?.senseiMessage ||
                        "Follow the steps carefully and have fun!"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-6 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="flex-1 h-2 bg-[#E6E6E6] rounded-[4px] overflow-hidden">
                  <div
                    className="h-full bg-[#FF8B13] rounded-[4px] transition-all duration-300"
                    style={{ width: `${stepProgressPercentage}%` }}
                  />
                </div>
                <span className="text-[#666666] text-sm font-semibold leading-5 min-w-[38px] text-right">
                  {String(currentStepNumber).padStart(2, "0")}/
                  {String(TOTAL_STEPS).padStart(2, "0")}
                </span>
              </div>
              <p className="text-[#999999] text-sm font-medium leading-5">
                Follow below steps
              </p>
            </div>

            {/* Image Preview */}
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
                    <svg
                      className="w-[70px] h-[50px]"
                      viewBox="0 0 70 50"
                      fill="white"
                    >
                      <path
                        d="M0 6C0 2.68629 2.68629 0 6 0H46C49.3137 0 52 2.68629 52 6V44C52 47.3137 49.3137 50 46 50H6C2.68629 50 0 47.3137 0 44V6Z"
                        fill="white"
                      />
                      <path d="M52 12L70 0V50L52 38V12Z" fill="white" />
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

              <div className="flex justify-between items-center mb-3">
                {Array.from({ length: CHILD_TASKS_PER_STEP }).map(
                  (_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrChildTask(index)}
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                        index <= currChildTask
                          ? "bg-[#FF8B13] text-white shadow-[0_2px_5px_rgba(0,0,0,0.12)]"
                          : "border border-[#A4A4A4] text-[#999999] shadow-[0_2px_5px_rgba(0,0,0,0.12)]"
                      }`}
                    >
                      {index + 1}
                    </button>
                  )
                )}
              </div>

              <p className="text-[#333333] text-base font-semibold leading-6">
                {currentProcess?.childMessage ||
                  `Complete task ${currChildTask + 1} of step ${
                    currProcess + 1
                  }`}
              </p>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-5 md:px-8 lg:px-12">
            <div className="flex gap-8 max-w-[348px] mx-auto xl:max-w-7xl">
              {(currProcess > 0 || currChildTask > 0) && (
                <button
                  onClick={prevProcess}
                  className={`flex-1 flex items-center justify-center gap-2 h-14 px-4 bg-white border border-[#999999] rounded-lg transition-all ${
                    activeButton === "back" ? "bg-gray-50 border-gray-400" : ""
                  }`}
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M15 18L9 12L15 6"
                      stroke="#999999"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-[#999999] font-bold text-base leading-6">
                    Back
                  </span>
                </button>
              )}

              <button
                onClick={nextProcess}
                className={`flex-1 flex items-center justify-center gap-2 h-14 px-4 bg-[#2C3D68] rounded-lg transition-all ${
                  activeButton === "next" ? "bg-[#1f2d4d]" : ""
                } ${
                  currProcess === 0 && currChildTask === 0 ? "w-full" : ""
                }`}
              >
                <span className="text-white font-bold text-base leading-6">
                  {isLastTask ? "Finish" : "Next"}
                </span>
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Info Modal */}
          {infoOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-5 z-50">
              <div className="bg-white rounded-2xl p-6 max-w-md w-full">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-[#2C3D68]">
                    Activity Info
                  </h3>
                  <button
                    onClick={() => setInfoOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                {/* ✅ FIX 2: Correct field — objective (not intro) */}
                <p className="text-[#666666] leading-6">
                  {interactiveActivity?.objective ||
                    "This is an interactive activity designed to help children learn through movement and exploration."}
                </p>
              </div>
            </div>
          )}
        </div>
      );

    default:
      return null;
  }
};

export default Page;