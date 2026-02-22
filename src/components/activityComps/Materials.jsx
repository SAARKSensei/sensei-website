import React from "react";
import Activitybg from "@/assets/in-Use/activitybg.svg?url";

const Materials = ({ action, materials, keyObjectives }) => {
  // Parse keyObjectives: split by "|", strip leading "1." "2." etc, trim
  const objectivesList = keyObjectives
    ? keyObjectives
        .split(/\s*\|\s*/)
        .map((item) => item.trim().replace(/^\d+\.\s*/, "").trim())
        .filter(Boolean)
    : [];

  // Parse materials the same way
  const materialsList = materials
    ? materials
        .split("|")
        .map((m) => m.trim())
        .filter(Boolean)
    : [];

  return (
    <div
      style={{ backgroundImage: `url(${Activitybg.src})` }}
      className="relative my-10 flex min-h-[90vh] flex-col justify-evenly gap-4"
    >
      <div className="mx-auto flex flex-col justify-center gap-8">
        <h3 className="h3 text-grad mx-auto font-bold">Are you ready?</h3>

        {/* ── Key Objectives Section ───────────────────────── */}
        {objectivesList.length > 0 && (
          <div className="flex flex-col gap-3">
            <p className="body_3 mx-auto text-grey_1 font-semibold">
              Key Objectives
            </p>
            <ol className="flex flex-col gap-2 list-none">
              {objectivesList.map((objective, index) => (
                <li
                  key={index}
                  className="body_2 max-w-[min(90vw,500px)] text-black flex items-start gap-2"
                >
                  {/* Number badge */}
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#F8BF3B] border-b-2 border-[#CD9003] flex items-center justify-center text-[#2C3D68] font-bold text-xs">
                    {index + 1}
                  </span>
                  {/* Sentence — ensure ends with period */}
                  <span>
                    {objective.endsWith(".") ? objective : objective + "."}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* ── Materials Section ────────────────────────────── */}
        {materialsList.length > 0 && (
          <div className="flex flex-col gap-3">
            <p className="body_3 mx-auto text-grey_1">
              Be ready with the following materials
            </p>
            <ul className="flex list-inside list-disc flex-col gap-2">
              {materialsList.map((material, index) => (
                <li
                  key={index}
                  className="body_2 max-w-[min(90vw,500px)] text-black"
                >
                  {material}
                </li>
              ))}
            </ul>
          </div>
        )}

        <button
          onClick={action}
          className="h5_b mx-auto w-[min(90vw,300px)] rounded-lg border-b-4 border-[#CD9003] bg-[#F8BF3B] px-6 py-2 text-secondary disabled:opacity-50"
        >
          Let&apos;s Start
        </button>
      </div>
    </div>
  );
};

export default Materials;