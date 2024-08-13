import React from "react";
import Image from "next/image";
import ABLTopology from "@/assets/ABLTopology-1.svg?url";
import { ABLFilters } from "@/utils/data";
import reset from "@/assets/reset.svg?url";
import filterOutline from "@/assets/filter-outline.svg?url";
const Activities = () => {
  return (
    <div className="relative w-full">
      <div className="absolute inset-0 -inset-y-20 -z-10 w-screen bg-opacity-10 bg-gradient-to-r from-[#F8BF3B]/10 from-[0%] via-[#FF8B13]/10 via-[31%] to-[#EF5F3D]/10 to-[100%]">
        {/* <Image src={ABLTopology} alt="ABLTopology" /> */}
      </div>
      <div className="container mx-auto mb-10 flex flex-col gap-4 text-center">
        <h2 className="h4 text-secondary">Activities </h2>
        <p className="body_2 mx-auto max-w-[650px]">
          We believe in nurturing each child&apos;s unique potential. This
          fosters individualized growth and creates optimal learning experiences
          for your child.
        </p>
      </div>
      <div className="group container relative mx-auto flex items-start justify-center gap-4 p-4 max-md:flex-col max-sm:flex-col">
        <div className="flex max-md:w-full">
          <span className="body_3 text-grey_1 md:hidden">Filter</span>

          <Image
            src={filterOutline}
            alt="filterOutline"
            className="peer ml-auto md:hidden"
          />
          <div className="right-0 z-10 flex flex-col gap-[33px] rounded-[10px] bg-white px-[29px] py-[33px] transition-all hover:flex peer-hover:flex max-md:absolute max-md:hidden">
            <div className="flex items-center gap-2">
              <input className="h-6 w-6 accent-primary" type="checkbox" />
              <label className="body3_b text-grey_1">All</label>

              <Image reset src={reset} alt="reset" className="ml-auto" />
              <span>Reset</span>
            </div>
            {ABLFilters.map((filter, index) => (
              <Filter filter={filter} key={index} />
            ))}
          </div>
        </div>
        <div className="flex max-h-[852px] flex-wrap justify-center gap-4 overflow-y-scroll">
          {new Array(10).fill().map((_, index) => (
            <Activity key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const Activity = () => {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return (
    <div className="">
      <div className="relative">
        <span
          style={{ backgroundColor: randomColor }}
          className={`block h-[169px] w-[276px] rounded-[10px]`}
        />
        <div className="absolute right-2 top-2 z-0">
          <svg
            width="41"
            height="38"
            viewBox="0 0 41 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.4339 1C21.785 1 22.1104 1.1841 22.2911 1.48505L27.6873 10.468C27.8345 10.713 28.0795 10.8833 28.3605 10.9359L38.2675 12.7912C39.0456 12.9369 39.3539 13.8859 38.8101 14.4611L31.901 21.769C31.6958 21.986 31.5984 22.2835 31.6354 22.58L32.8595 32.376C32.9341 32.9728 32.4687 33.5 31.8673 33.5H28.8084C28.6075 33.5 28.4112 33.4395 28.2452 33.3263L21.9998 29.07L15.1375 25.08C15.0464 25.027 14.9642 24.9599 14.8941 24.8813L12.4226 22.1118L5.18939 14.4611C4.64558 13.8859 4.95393 12.9369 5.73198 12.7912L15.4797 10.9658C15.8487 10.8967 16.1478 10.6268 16.2545 10.2669L18.7879 1.71593C18.9137 1.2913 19.3038 1 19.7467 1H21.4339Z"
              fill="#F1B323"
            />
            <path
              d="M18.1221 1.60978C18.5011 0.914844 19.4989 0.914845 19.8779 1.60979L24.6917 10.4365C24.8355 10.7002 25.0903 10.8853 25.3856 10.9406L35.2678 12.7912C36.0458 12.9369 36.3542 13.8859 35.8104 14.4611L28.9033 21.7669C28.6969 21.9851 28.5996 22.2846 28.6382 22.5825L29.932 32.5529C30.0338 33.3379 29.2265 33.9245 28.5115 33.585L19.4288 29.2736C19.1575 29.1447 18.8425 29.1447 18.5712 29.2736L9.48855 33.585C8.77345 33.9245 7.96617 33.3379 8.06803 32.5529L9.36178 22.5825C9.40043 22.2846 9.30312 21.9851 9.09675 21.7669L2.18963 14.4611C1.64582 13.8859 1.95417 12.9369 2.73222 12.7912L12.6144 10.9406C12.9097 10.8853 13.1645 10.7002 13.3083 10.4365L18.1221 1.60978Z"
              fill="#F8BF3B"
            />
          </svg>
          <span className="absolute left-1/2 top-1/2 m-auto -translate-x-1/2 -translate-y-1/2 text-xs font-semibold text-secondary">
            {4 + Number(Math.random().toFixed(1))}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2 rounded-[10px] bg-white p-4">
        <h5 className="h5_b text-black">Activity Name</h5>
        <div className="body_4 flex items-center gap-2 font-semibold text-grey_1">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.33333 13.7493V16.666C3.33333 17.108 3.50893 17.532 3.82149 17.8445C4.13405 18.1571 4.55797 18.3327 5 18.3327H15C15.442 18.3327 15.866 18.1571 16.1785 17.8445C16.4911 17.532 16.6667 17.108 16.6667 16.666V13.7493M2.5 11.666V10.8327C2.5 10.3907 2.67559 9.96673 2.98816 9.65417C3.30072 9.34161 3.72464 9.16602 4.16667 9.16602H15.8333C16.2754 9.16602 16.6993 9.34161 17.0118 9.65417C17.3244 9.96673 17.5 10.3907 17.5 10.8327V11.666M10 6.66602V9.16602M10 6.66602C11.0517 6.66602 11.6667 5.85935 11.6667 4.47852C11.6667 3.09768 10 1.66602 10 1.66602C10 1.66602 8.33333 3.09768 8.33333 4.47852C8.33333 5.85935 8.94833 6.66602 10 6.66602Z"
              stroke="#FF8B13"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.5 11.666C2.5 12.3291 2.76339 12.9649 3.23223 13.4338C3.70107 13.9026 4.33696 14.166 5 14.166C5.66304 14.166 6.29893 13.9026 6.76777 13.4338C7.23661 12.9649 7.5 12.3291 7.5 11.666C7.5 12.3291 7.76339 12.9649 8.23223 13.4338C8.70107 13.9026 9.33696 14.166 10 14.166C10.663 14.166 11.2989 13.9026 11.7678 13.4338C12.2366 12.9649 12.5 12.3291 12.5 11.666C12.5 12.3291 12.7634 12.9649 13.2322 13.4338C13.7011 13.9026 14.337 14.166 15 14.166C15.663 14.166 16.2989 13.9026 16.7678 13.4338C17.2366 12.9649 17.5 12.3291 17.5 11.666"
              stroke="#FF8B13"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>5-7 years&nbsp; </span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.0013 4.83268V3.16602C9.0013 2.945 9.0891 2.73304 9.24538 2.57676C9.40166 2.42048 9.61362 2.33268 9.83464 2.33268C10.0556 2.33268 10.2676 2.24488 10.4239 2.0886C10.5802 1.93232 10.668 1.72036 10.668 1.49935V0.666016M7.33464 12.3327L6.08464 11.0827M6.08464 11.0827L4.83464 9.83268M6.08464 11.0827L4.83464 12.3327M6.08464 11.0827L7.33464 9.83268M13.168 11.916V10.2493M0.667969 11.0827C0.667969 8.34352 0.667969 6.97352 1.42464 6.05102C1.56305 5.88239 1.71768 5.72776 1.8863 5.58935C2.80964 4.83268 4.17797 4.83268 6.91797 4.83268H11.0846C13.8246 4.83268 15.1938 4.83268 16.1163 5.58935C16.2849 5.72776 16.4396 5.88239 16.578 6.05102C17.3346 6.97435 17.3346 8.34268 17.3346 11.0827C17.3346 13.8227 17.3346 15.1918 16.578 16.1143C16.4396 16.283 16.2849 16.4376 16.1163 16.576C15.193 17.3327 13.8246 17.3327 11.0846 17.3327H6.91797C4.1788 17.3327 2.8088 17.3327 1.8863 16.576C1.71768 16.4376 1.56305 16.283 1.42464 16.1143C0.667969 15.191 0.667969 13.8227 0.667969 11.0827Z"
              stroke="#FF8B13"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>{500 + Number(Math.random().toFixed(2) * 100)}</span>
        </div>
        <div className="body_5 flex gap-2">
          <p className="rounded-[5px] border border-[#9FC5EF] bg-[#9FC5EF] bg-opacity-25 p-1 px-2 py-1 text-[#9FC5EF]">
            Empathy
          </p>
          <p className="rounded-[5px] border border-[#F8BF3B] bg-[#F8BF3B] bg-opacity-25 p-1 px-2 py-1 text-[#F8BF3B]">
            Critical Thinking
          </p>
        </div>
      </div>
    </div>
  );
};
const Filter = ({ filter }) => {
  return (
    <div className="flex h-fit w-[308px] flex-col gap-[13px]">
      <h5 className="h5_b text-secondary">{filter.name}</h5>

      {filter.options.map((f, index) => (
        <div key={index} className="flex items-center gap-2">
          <input className="h-6 w-6 accent-primary" type="checkbox" />
          <label className="body3_b text-grey_1">{f.name}</label>
        </div>
      ))}
    </div>
  );
};
export default Activities;
