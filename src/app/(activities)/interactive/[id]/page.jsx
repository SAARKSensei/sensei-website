"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import IconImage from "@/assets/in-Use/IconImage.svg?url";
import Loading from "@/components/gamifiedActivities/Loading";
import Materials from "@/components/activityComps/Materials";
import axios from "axios";
import { notFound, useRouter } from "next/navigation";
import Feedback from "@/components/activityComps/Feedback";

const BASE_URL = "https://api.sensei.org.in/api";

// ─── Helper: parse childTask string split by | into array of strings ──────────
const parseChildTasks = (childTaskStr) => {
  if (!childTaskStr) return [];
  return childTaskStr
    .split(/\s*\|\s*/)
    .map((t) => t.trim())
    .filter(Boolean);
};

const Page = ({ params: { id } }) => {
  const Router = useRouter();

  // ── Activity metadata (cases 0, 1, 3) ──────────────────────────────────────
  const [interactiveActivity, setInteractiveActivity] = useState(null);
  const [outcomesText, setOutcomesText] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ── Processes from /interactive-processes/by-activity API (case 2) ──────────
  const [processes, setProcesses] = useState([]);
  const [processesLoading, setProcessesLoading] = useState(false);
  const [processesError, setProcessesError] = useState(null);

  // ── UI state ────────────────────────────────────────────────────────────────
  const [state, setState] = useState(0);
  const [infoOpen, setInfoOpen] = useState(false);
  const [currProcess, setCurrProcess] = useState(0);
  const [currChildTask, setCurrChildTask] = useState(0);
  const [activeButton, setActiveButton] = useState(null);

  // ── Derived — all dynamic, no hardcoded 6 ───────────────────────────────────
  const TOTAL_STEPS = processes.length;
  const currentStep = processes[currProcess] ?? null;
  const childTasks = parseChildTasks(currentStep?.childTask);
  const CHILD_TASKS_PER_STEP = childTasks.length;
  const currentStepNumber = currProcess + 1;
  const stepProgressPercentage =
    TOTAL_STEPS > 0 ? (currentStepNumber / TOTAL_STEPS) * 100 : 0;
  const isLastTask =
    currProcess === TOTAL_STEPS - 1 &&
    currChildTask === CHILD_TASKS_PER_STEP - 1;

  // Strip leading "1." numbering from child task text
  const currentChildTaskText =
    childTasks[currChildTask]?.replace(/^\d+\.\s*/, "").trim() || "";

  // mediaUrl: skip if "N.A" or empty
  const mediaUrl =
    currentStep?.mediaUrl && currentStep.mediaUrl.trim() !== "N.A"
      ? currentStep.mediaUrl
      : null;

  // ── Navigation ──────────────────────────────────────────────────────────────
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
        // Jump to last child task of the previous step
        const prevTasks = parseChildTasks(processes[currProcess - 1]?.childTask);
        setCurrProcess((pre) => pre - 1);
        setCurrChildTask(Math.max(prevTasks.length - 1, 0));
      }
    }
    window.scrollTo(0, 0);
  };

  // ── Fetch: activity metadata ────────────────────────────────────────────────
  useEffect(() => {
    const fetchActivity = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(`${BASE_URL}/interactive-activities/${id}`);
        if (res?.data) setInteractiveActivity(res.data);
      } catch (err) {
        console.error("Error fetching interactive activity:", err);
        setError(err?.response?.status || "unknown");
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchActivity();
  }, [id]);

  // ── Fetch: processes for case 2 ─────────────────────────────────────────────
  useEffect(() => {
    const fetchProcesses = async () => {
      setProcessesLoading(true);
      setProcessesError(null);
      try {
        const res = await axios.get(
          `${BASE_URL}/interactive-processes/by-activity/${id}`
        );
        if (Array.isArray(res?.data)) {
          // Sort by stepOrder to guarantee correct sequence
          const sorted = [...res.data].sort((a, b) => a.stepOrder - b.stepOrder);
          setProcesses(sorted);
        }
      } catch (err) {
        console.error("Error fetching processes:", err);
        setProcessesError(err?.response?.status || "unknown");
      } finally {
        setProcessesLoading(false);
      }
    };
    if (id) fetchProcesses();
  }, [id]);

  // ── Learning outcomes text ──────────────────────────────────────────────────
  const processText = (outcomes) => {
    if (!outcomes) return "";
    return outcomes
      .split(/\s*\|\s*/)
      .map((sentence) => {
        const trimmed = sentence.trim().replace(/^\d+\.\s*/, "");
        if (!trimmed) return null;
        return trimmed.endsWith(".") ? trimmed : trimmed + ".";
      })
      .filter(Boolean)
      .join(" | ");
  };

  useEffect(() => {
    if (interactiveActivity?.learningOutcome) {
      setOutcomesText(processText(interactiveActivity.learningOutcome));
    }
  }, [interactiveActivity?.learningOutcome]);

  // ── Global loading / error ──────────────────────────────────────────────────
  if (loading && state !== 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-600 font-semibold font-['Nunito']">Loading activity…</p>
        </div>
      </div>
    );
  }

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

  // ── Switch ──────────────────────────────────────────────────────────────────
  switch (state) {
    case 0:
      return (
        <Loading
          activity={{
            outComes: outcomesText,
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
          keyObjectives={interactiveActivity?.keyObjectives}
          action={() => setState((pre) => pre + 1)}
        />
      );

    case 3:
      return interactiveActivity ? (
        <Feedback
          activityId={interactiveActivity.id}
          activityName={interactiveActivity.title}
        />
      ) : (
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
        </div>
      );

    case 2:
      // Processes loading
      if (processesLoading) {
        return (
          <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              <p className="text-gray-600 font-semibold font-['Nunito']">Loading steps…</p>
            </div>
          </div>
        );
      }

      // Processes error
      if (processesError && processes.length === 0) {
        return (
          <div className="min-h-screen flex items-center justify-center bg-white px-6">
            <div className="text-center max-w-md">
              <div className="text-6xl mb-4">⚠️</div>
              <h2 className="text-2xl font-bold text-[#2C3D68] mb-2 font-['Nunito']">
                Failed to load steps
              </h2>
              <p className="text-gray-500 mb-6 font-['Nunito']">
                Could not load the activity steps. Please try again.
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

      return (
        <div className="min-h-screen bg-white pb-24 font-['Nunito']">

          {/* ── Header ─────────────────────────────────────────────────────── */}
          <header className="bg-[#2C3D68] px-5 pt-6 pb-5 w-full md:px-8 lg:px-12">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1 text-white text-sm font-semibold">
                <span>Home</span>
                <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none">
                  <path d="M5 3L9 7L5 11" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span>Subjects</span>
                <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none">
                  <path d="M5 3L9 7L5 11" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span>{interactiveActivity?.activityType || "DIY"}</span>
              </div>
              <h1 className="text-white text-xl font-medium leading-[30px] md:text-2xl lg:text-3xl">
                {interactiveActivity?.title || "Activity"}
              </h1>
            </div>
          </header>

          {/* ── Main Content ────────────────────────────────────────────────── */}
          <div className="px-5 md:px-8 lg:px-12 xl:max-w-7xl xl:mx-auto">
            <div className="mt-6 flex flex-col gap-4">

              {/* Step title + Hint button */}
              <div className="flex justify-between items-center gap-3">
                <h2 className="text-[#FF8B13] text-lg font-medium leading-7 md:text-xl">
                  {`Step ${currentStep?.stepOrder ?? currentStepNumber}`}
                </h2>
                {/* Hint button — only shown when hint text is available */}
                {currentStep?.hint && (
                  <button
                    onClick={() => setInfoOpen(true)}
                    className="flex items-center gap-2 px-[9px] py-[9px] rounded-[20px] border border-[#FF8B13] hover:bg-[#FFF5E6] transition-colors"
                  >
                    <svg className="w-5 h-[18px]" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM11 15H9V13H11V15ZM11 11H9V5H11V11Z"
                        fill="#FF8B13"
                      />
                    </svg>
                    <span className="text-[#FF8B13] font-bold text-base leading-5">Hint</span>
                  </button>
                )}
              </div>

              {/* Sensei Avatar + Message — bubble auto-grows with long text */}
              <div className="flex gap-4 md:gap-6 items-start">
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
                {/* flex-1 lets bubble take remaining width; no max-w cap */}
                <div className="flex-1">
                  <div className="bg-white shadow-[-1px_2px_24px_rgba(0,0,0,0.16)] rounded-lg p-4">
                    <p className="text-[#666666] text-base leading-6 font-normal">
                      {currentStep?.senseiMessage ||
                        "Follow the steps carefully and have fun!"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Progress Bar ─────────────────────────────────────────────── */}
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
              <p className="text-[#999999] text-sm font-medium leading-5">Follow below steps</p>
            </div>

            {/* ── Image — only rendered when mediaUrl is valid ─────────────── */}
            {mediaUrl && (
              <div className="mt-4 relative w-full h-[197px] bg-[#D9D9D9] rounded-2xl overflow-hidden md:h-[300px] lg:h-[400px]">
                <Image
                  src={mediaUrl}
                  alt={`Step ${currentStep?.stepOrder}`}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {/* ── Child Tasks Card — height auto-expands with content ───────── */}
            <div className="mt-4 bg-white shadow-[0_2px_5px_rgba(0,0,0,0.12)] rounded-xl p-3">
              <p className="text-[#999999] text-sm font-medium leading-5 mb-3">
                Child Tasks - Step {currentStepNumber}
              </p>

              {/* Dynamic buttons — exactly as many as there are parsed tasks */}
              <div className="flex flex-wrap gap-2 mb-3">
                {childTasks.map((_, index) => (
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
                ))}
              </div>

              {/* Actual task text — no fixed height, wraps naturally */}
              <p className="text-[#333333] text-base font-semibold leading-7 whitespace-pre-line">
                {currentChildTaskText}
              </p>
            </div>
          </div>

          {/* ── Bottom Navigation ───────────────────────────────────────────── */}
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
                  <span className="text-[#999999] font-bold text-base leading-6">Back</span>
                </button>
              )}
              <button
                onClick={nextProcess}
                disabled={CHILD_TASKS_PER_STEP === 0}
                className={`flex-1 flex items-center justify-center gap-2 h-14 px-4 bg-[#2C3D68] rounded-lg transition-all disabled:opacity-50 ${
                  activeButton === "next" ? "bg-[#1f2d4d]" : ""
                } ${currProcess === 0 && currChildTask === 0 ? "w-full" : ""}`}
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

          {/* ── Hint Modal — shows hint from API ────────────────────────────── */}
          {infoOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-5 z-50">
              <div className="bg-white rounded-2xl p-6 max-w-md w-full max-h-[80vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-[#2C3D68]">Hint</h3>
                  <button
                    onClick={() => setInfoOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <p className="text-[#666666] leading-6">
                  {currentStep?.hint || "No hint available for this step."}
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