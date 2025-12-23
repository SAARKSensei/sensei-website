"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import Lock from "@/assets/in-Use/lock.svg?url"; // ✅ your lock icon

// Arrow Icon
const ArrowSvg = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Activities({
  modules = [],
  hidden = "",
  colours = {},
  subjectId = "",
  locked = true,
  customUserData = false,
}) {
  const [openIndex, setOpenIndex] = useState(null);
  const router = useRouter();

  useEffect(() => {
    setOpenIndex(null);
  }, [modules]);

  const toggle = (i, module) => {
    const isFreeModule =
      module?.moduleId === "ff80818195387c6d0195387d8ce80001";
    const isDisabled = locked && !isFreeModule;
    if (isDisabled) return;

    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className={`${hidden} sm:grow`}>
      

      <div className="rounded-xl p-4">
        {modules && modules.length ? (
          <div className="flex flex-col gap-4">
            {modules.map((module, idx) => {
              const isFreeModule =
                module?.moduleId === "ff80818195387c6d0195387d8ce80001";
              const isDisabled = locked && !isFreeModule;
              const isOpen = openIndex === idx;

              const cardBg = isDisabled ? "bg-white/60" : "bg-white";
              const titleColor = isDisabled
                ? "text-gray-300"
                : "text-[#2C3D68]";
              const arrowColor = isDisabled
                ? "text-gray-300"
                : "text-[#FF8B13]";

              return (
                <div key={idx} className="w-full">
                  {/* MODULE CARD */}
                  <button
                    onClick={() => toggle(idx, module)}
                    disabled={isDisabled}
                    aria-expanded={isOpen}
                    className={`w-[1350px] ml-[70px] mt-[20px] flex items-center rounded-[58px] p-4 gap-4 transition-shadow duration-200 ${cardBg} shadow-sm hover:shadow-md focus:outline-none`}
                    style={{
                      border: `3px solid rgba(255,139,19,1.15)`,
                    }}
                  >
                    {/* LEFT SECTION (EMPTY NOW – CLOCK REMOVED) */}
                    <div
                      className="flex-shrink-0 flex items-center gap-3"
                      style={{ minWidth: 110 }}
                    >
                      <div className="p-2 rounded-md border border-transparent"></div>

                      {/* REMOVE DURATION TEXT */}
                      <div className={`text-sm font-bold text-transparent`}>
                        {/* removed "30 mins" */}
                      </div>
                    </div>

                    {/* MODULE TITLE */}
                    <div className="flex-1 text-left">
                     <div
  className={`font-extrabold text-[32px] ml-[-100px] leading-[49px] tracking-[-0.02em] capitalize font-Nunito ${titleColor}`}
  style={{
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    maxWidth: '900px'
  }}
>
  {module?.moduleName || "Untitled Module"}
</div>

                      {module?.meta && (
                        <div className="text-sm text-gray-500 mt-1">
                          {module.meta}
                        </div>
                      )}
                    </div>

                    {/* RIGHT SIDE – ARROW OR LOCK ICON */}
                    <div className="flex-shrink-0 ml-4">
                      {isDisabled ? (
                        <Image
                          src={Lock}
                          alt="Locked"
                          className="w-5 h-5 opacity-60"
                        />
                      ) : (
                        <ArrowSvg className={`w-8 h-8 ${arrowColor}`} />
                      )}
                    </div>
                  </button>

                  {/* SUBMODULES */}
                  {isOpen && (
                    <div className="mt-3 ml-16 mr-4">
                      {Array.isArray(module?.subModules) &&
                      module.subModules.length > 0 ? (
                        <ul className="flex flex-col gap-2">
                          {module.subModules.map((sub, sidx) => (
                            <li key={sidx}>
                             <Link
  href={`/funactivity/${sub.subModuleId}`}
  className="flex items-center justify-between rounded-full bg-white px-6 py-3 hover:bg-gray-50 transition-colors shadow-sm text-[25px] leading-[33px] tracking-[-0.02em] capitalize"
  style={{
    width: "40%",
    border: "3px solid #FF8B13",
    marginLeft: "5px",
  }}
>
  <span className="text-[#2C3D68] font-Nunito font-extrabold">
    {sub.subModuleName}
  </span>

  <svg
    className="w-6 h-6 text-[#FF8B13] flex-shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</Link>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <div className="text-sm text-gray-500 italic">
                          No submodules available
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="w-full h-40 flex items-center justify-center text-gray-500">
            No modules available
          </div>
        )}
      </div>
    </div>
  );
}
