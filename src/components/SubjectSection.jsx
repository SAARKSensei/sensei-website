// "use client";
// import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Person1 from "@/assets/people/person1.svg?url";
import Person2 from "@/assets/people/person2.svg?url";
import Person3 from "@/assets/people/person3.svg?url";
import Person4 from "@/assets/people/person4.svg?url";


import { ScrollButtonData,socialAwarenessButtonData } from "@/utils/data";
import { urlParamSubjectData } from "@/utils/data";

export const SubjectSection = ({ sub }) => {
  const subjectData = urlParamSubjectData.find((item) => item.key == sub);
  return (
    <section className="px-4 md:px-6 lg:px-8">
      <div className="mt-6 flex flex-col items-center justify-center gap-8 md:mt-16">
        {/* First Section with Subject Info and CTA */}
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
          {/* Subject Info */}
          <div className="sub-name flex w-full justify-center">
            <div className="flex w-full max-w-lg flex-col items-center justify-start gap-5 rounded-xl px-4 py-4 md:items-start">
              <div className="flex w-full flex-col items-center justify-center gap-4 md:items-start">
                <div className="flex items-center justify-center gap-2 md:justify-start">
                  <div className="flex h-8 w-8 items-center justify-center gap-1 overflow-hidden rounded-[3px] bg-white px-px py-[0.75px]">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 5.57465V4.30517M9 5.57465C7.79542 5.57465 6.60249 5.62218 5.42319 5.71537C4.41777 5.79483 3.66667 6.6099 3.66667 7.57046V9.69739M9 5.57465C10.2046 5.57465 11.3975 5.62218 12.5768 5.71537C13.5822 5.79483 14.3333 6.6099 14.3333 7.57046V9.69739M11.6667 5.57465V4.30517M6.33333 5.57465V4.30517M17 12.5568L15.6667 13.1916C14.8273 13.5911 13.8394 13.5911 13 13.1916C12.1606 12.792 11.1727 12.792 10.3333 13.1916C9.49398 13.5911 8.50602 13.5911 7.66667 13.1916C6.82731 12.792 5.83935 12.792 5 13.1916C4.16065 13.5911 3.17269 13.5911 2.33333 13.1916L1 12.5568M14.3333 9.69739C12.5862 9.48996 10.8062 9.3831 9 9.3831C7.19381 9.3831 5.41384 9.48996 3.66667 9.69739M14.3333 9.69739C14.6792 9.73846 15.0239 9.78347 15.3671 9.83238C16.3174 9.96775 17 10.7582 17 11.673V16.0479C17 16.5737 16.5523 17 16 17H2C1.44772 17 1 16.5737 1 16.0479V11.673C1 10.7582 1.6826 9.96775 2.63286 9.83238C2.97614 9.78347 3.32076 9.73846 3.66667 9.69739M9.23575 1.22442C9.36593 1.34836 9.36593 1.54931 9.23575 1.67325C9.10558 1.79719 8.89452 1.79719 8.76435 1.67325C8.63417 1.54931 8.63417 1.34836 8.76435 1.22442C8.8315 1.16048 9.00005 1 9.00005 1C9.00005 1 9.17273 1.16441 9.23575 1.22442ZM6.56909 1.22442C6.69926 1.34836 6.69926 1.54931 6.56909 1.67325C6.43891 1.79719 6.22786 1.79719 6.09768 1.67325C5.96751 1.54931 5.96751 1.34836 6.09768 1.22442C6.16483 1.16048 6.33338 1 6.33338 1C6.33338 1 6.50606 1.16441 6.56909 1.22442ZM11.9024 1.22442C12.0326 1.34836 12.0326 1.54931 11.9024 1.67325C11.7722 1.79719 11.5612 1.79719 11.431 1.67325C11.3008 1.54931 11.3008 1.34836 11.431 1.22442C11.4982 1.16048 11.6667 1 11.6667 1C11.6667 1 11.8394 1.16441 11.9024 1.22442Z"
                        stroke="#FF8B13"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="font-['Nunito'] text-base font-bold text-zinc-800">
                    5-10 Years
                  </div>
                </div>
                <div className="flex w-full flex-col items-center justify-start gap-4 md:items-start">
                  <div className="flex w-full flex-col items-center justify-start gap-2 md:items-start">
                    <div className="text-center font-['Nunito'] text-2xl font-black text-[#2c3d68] md:text-left md:text-4xl">
                      {subjectData.title}
                    </div>
                    <div className="text-center font-['Nunito'] text-base font-bold text-stone-500 md:text-left">
                      {subjectData.description}
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start gap-2 md:items-start">
                    <div className="flex items-center justify-center gap-1 md:justify-start">
                      <div className="font-['Nunito'] text-lg font-bold text-stone-500">
                        Interactive Activity :
                      </div>
                      <div className="font-['Nunito'] text-lg font-extrabold text-[#ff8b13]">
                        120+
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-1 md:justify-start">
                      <div className="font-['Nunito'] text-lg font-bold text-stone-500">
                        Gamified Activity :
                      </div>
                      <div className="font-['Nunito'] text-lg font-extrabold text-[#ff8b13]">
                        12+
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between">
                  <div className="flex items-center justify-start gap-1">
                    <div className="flex w-20 items-center justify-between">
                      <Image
                        className="h-7 w-7 rounded-full"
                        src={Person1}
                        width={30}
                        height={30}
                        alt="placeholder"
                      />
                      <Image
                        className="-ml-3 h-7 w-7 rounded-full"
                        src={Person2}
                        width={30}
                        height={30}
                        alt="placeholder"
                      />
                      <Image
                        className="-ml-3 h-7 w-7 rounded-full"
                        src={Person3}
                        width={30}
                        height={30}
                        alt="placeholder"
                      />
                      <Image
                        className="-ml-3 h-7 w-7 rounded-full"
                        src={Person4}
                        width={30}
                        height={30}
                        alt="placeholder"
                      />
                    </div>
                    <div className="text-center font-['Nunito'] text-base font-bold leading-none text-stone-500">
                      654+
                    </div>
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center gap-2.5 overflow-hidden rounded-lg px-[3px] py-1">
                    <svg
                      width="20"
                      height="18"
                      viewBox="0 0 20 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19 5.25C19 2.76472 16.9013 0.75 14.3125 0.75C12.3769 0.75 10.7153 1.87628 10 3.48342C9.28472 1.87628 7.62312 0.75 5.6875 0.75C3.09867 0.75 1 2.76472 1 5.25C1 12.4706 10 17.25 10 17.25C10 17.25 19 12.4706 19 5.25Z"
                        stroke="#FF8B13"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="CTA-section flex justify-center md:w-full">
            <div className="relative h-64 w-full max-w-lg rounded-2xl bg-gradient-to-t from-[#EF5F3D] via-[#F97A23] to-[#F8BF3B] p-4 shadow-lg md:h-96">
              <h1 className="mb-2 w-[80%] text-left font-Nunito text-xl font-bold text-white md:mb-4 md:text-2xl">
                Teach your kid the Life-skill education they need.{" "}
              </h1>
              <Link
                href={"/child-details"}
                className="mr-auto flex h-fit w-fit cursor-pointer items-center rounded-[40px] bg-white p-2 px-3 font-Nunito text-sm font-bold text-black md:px-6 md:py-4 md:text-xl"
              >
                Enroll Your Child
              </Link>
              <Image
                src={"/images/addchild.png"}
                width={250}
                height={200}
                alt="addchild"
                sizes="auto"
                className="absolute bottom-0 right-3 -z-[0] max-h-[110%] max-w-[min(200px,45%)] object-contain md:right-5 md:max-h-[120%] md:max-w-[min(298px,50%)]"
              />
            </div>
          </div>
        </div>
        {/* Subject Buttons Section */}
        {sub == "emotionalwellness" ? (<LinkSection data = {ScrollButtonData} />) : <LinkSection data = {socialAwarenessButtonData} />}
      </div>
    </section>
  );
};

const LinkSection = ({ data }) => {
  return (
    <div className="subjects mx-auto w-full max-w-6xl px-4">
      <div className="flex w-full flex-col items-center justify-center gap-6">
        {data.map((item, index) => (
          <Link
            href={"/freeactivity"}
            key={index}
            className="flex w-full items-center gap-3 rounded-[58px] px-4 py-2 outline outline-[3px] outline-offset-[-3px] outline-orange-300 md:px-6 md:py-4 lg:px-10"
          >
            <div className="ml-2">
              <Image src={item.svgUrl} alt="book" />
            </div>
            <div className="flex flex-1 flex-col items-start justify-start gap-1">
              <div className="flex items-center justify-center gap-1">
                <div className="flex h-6 w-6 items-center justify-center gap-1 overflow-hidden rounded-[3px] p-px">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.88574 4.16667V9.5H13.8857M17.8857 9.5C17.8857 13.9183 14.304 17.5 9.88574 17.5C5.46746 17.5 1.88574 13.9183 1.88574 9.5C1.88574 5.08172 5.46746 1.5 9.88574 1.5C14.304 1.5 17.8857 5.08172 17.8857 9.5Z"
                      stroke="#FF8B13"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="font-['Nunito'] text-base font-bold leading-none text-[#ff8b13]">
                  30 Mins.
                </div>
              </div>
              <div className="text-left font-['Nunito'] text-xl font-extrabold capitalize text-[#2c3d68] md:text-2xl">
                {item.title}
              </div>
            </div>
            <div className="relative h-6 w-6 flex-shrink-0 overflow-hidden md:h-8 md:w-8">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L28 16M28 16L18 26M28 16H4"
                  stroke="#FF8B13"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
