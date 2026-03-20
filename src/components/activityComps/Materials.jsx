"use client";

import React, { useState } from "react";

// ─── Helper: parse pipe-separated numbered list into array of strings ─────────
const parseList = (str) => {
  if (!str) return [];
  return str
    .split(/\s*\|\s*/)
    .map((item) => item.trim().replace(/^\d+\.\s*/, "").trim())
    .filter(Boolean);
};

const Materials = ({ keyObjectives, objective, action }) => {
  // screen 0 = Key Objectives, screen 1 = Materials (objective field)
  const [screen, setScreen] = useState(0);

  const objectiveItems = parseList(keyObjectives);
  const materialItems = parseList(objective);

  // ── Screen 0: Key Objectives ─────────────────────────────────────────────
  if (screen === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 font-['Nunito'] relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-40 h-40 opacity-10">
            <svg viewBox="0 0 200 200" fill="none">
              <circle cx="50" cy="50" r="80" fill="#FF8B13" />
            </svg>
          </div>
          <div className="absolute bottom-0 right-0 w-48 h-48 opacity-10">
            <svg viewBox="0 0 200 200" fill="none">
              <circle cx="150" cy="150" r="80" fill="#2C3D68" />
            </svg>
          </div>
        </div>

        <div className="w-full max-w-lg z-10">
          {/* Title */}
          <h1 className="text-3xl font-bold text-center mb-1 font-['Nunito']">
            <span className="text-[#FF8B13]">Are you</span>{" "}
            <span className="text-[#2C3D68]">ready?</span>
          </h1>

          {/* Section label */}
          <p className="text-center text-[#999999] text-sm font-medium mb-6 mt-2">
            Key Objectives
          </p>

          {/* Objectives list */}
          <div className="flex flex-col gap-4 mb-10">
            {objectiveItems.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                {/* Numbered badge */}
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#2C3D68] text-white text-xs font-bold flex items-center justify-center mt-0.5">
                  {index + 1}
                </span>
                <p className="text-[#333333] text-base leading-6 font-medium">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* Next button → goes to materials screen */}
          <button
            onClick={() => setScreen(1)}
            className="w-full h-14 bg-[#FF8B13] hover:bg-[#e57a10] text-white font-bold text-base rounded-xl transition-all shadow-md"
          >
            Next
          </button>
        </div>
      </div>
    );
  }

  // ── Screen 1: Materials (objective field) ────────────────────────────────
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 font-['Nunito'] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-40 h-40 opacity-10">
          <svg viewBox="0 0 200 200" fill="none">
            <circle cx="50" cy="50" r="80" fill="#FF8B13" />
          </svg>
        </div>
        <div className="absolute bottom-0 right-0 w-48 h-48 opacity-10">
          <svg viewBox="0 0 200 200" fill="none">
            <circle cx="150" cy="150" r="80" fill="#2C3D68" />
          </svg>
        </div>
      </div>

      <div className="w-full max-w-lg z-10">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center mb-1 font-['Nunito']">
          <span className="text-[#FF8B13]">Materials</span>{" "}
          <span className="text-[#2C3D68]">Required</span>
        </h1>

        {/* Section label */}
        <p className="text-center text-[#999999] text-sm font-medium mb-6 mt-2">
          Gather these before you begin
        </p>

        {/* Materials list */}
        <div className="flex flex-col gap-3 mb-10">
          {materialItems.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              {/* Numbered badge */}
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#2C3D68] text-white text-xs font-bold flex items-center justify-center mt-0.5">
                {index + 1}
              </span>
              <p className="text-[#333333] text-base leading-6 font-medium">
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* Back + Let's Start buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => setScreen(0)}
            className="flex-1 h-14 bg-white border border-[#999999] text-[#999999] font-bold text-base rounded-xl transition-all hover:bg-gray-50"
          >
            Back
          </button>
          <button
            onClick={action}
            className="flex-1 h-14 bg-[#FF8B13] hover:bg-[#e57a10] text-white font-bold text-base rounded-xl transition-all shadow-md"
          >
           Let&apos;s Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default Materials;