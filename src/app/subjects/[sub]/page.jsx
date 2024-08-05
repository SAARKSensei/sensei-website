"use client";
import React from "react";
import Mental from "@/assets/mental.svg";
import Cross from "@/assets/cross1.svg";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import addchild from "@/Images/addchild.png";
import { subjects } from "@/utils/data";
import { slug } from "@/utils/logic";
import { notFound } from "next/navigation";

const Page = ({ params: { sub } }) => {
  const [checkedId, setCheckedId] = useState(0);
  const subject = subjects.find((s) => slug(s?.slug || s?.title) === sub);
  if (!subject) return notFound();

  return (
    <div className="container mx-auto p-4 py-10 md:py-20">
      <div className="mx-auto flex h-min w-fit max-sm:flex-col">
        <div className="flex max-w-[600px] flex-col gap-2 lg:max-w-[700px]">
          <h4 className="h4 text-secondary">{subject.title}</h4>
          <h1 className="h1 text-grad">{subject.description}</h1>
          <p className="body_2 mb-4 mt-auto text-secondary">
            {subject.concernsHeading}
          </p>
        </div>
        <Mental className="mmin-h-full w-full max-w-[400px]" />
      </div>
      <div className="mx-auto flex h-min w-fit gap-4">
        <div className="scrollbar flex max-h-[658px] max-w-[524px] flex-col gap-2 overflow-y-scroll p-2 sm:max-h-[408px]">
          {subject.concerns.map((concern, index) => (
            <div
              key={index}
              onClick={() => setCheckedId(index)}
              className={`flex cursor-pointer flex-col gap-2 rounded-[10px] bg-white pb-4 shadow-cs`}
            >
              <div
                className={`flex ${checkedId === index ? "text-primary" : "text-secondary"} items-start justify-between p-4 pb-0`}
              >
                <h4 className="body_1">{concern.title}</h4>
                <svg
                  className={`w-5 min-w-5 ${checkedId === index ? "rotate-0" : "rotate-45"} transition-all md:w-6 md:min-w-6`}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.9492 4.94922L5.04972 14.8487"
                    stroke="currentcolor"
                    className="opacity-100"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M14.9492 14.8496L5.04972 4.95011"
                    stroke="currentcolor"
                    className="opacity-100"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>{" "}
              </div>
              {checkedId === index && checkedId !== -1 && (
                <Description className="block sm:hidden" concern={concern} />
              )}
            </div>
          ))}
        </div>
        {checkedId !== -1 && (
          <Description
            className="block max-sm:hidden"
            concern={subject.concerns[checkedId]}
          />
        )}
      </div>
      <div className="relative mx-auto mt-10 h-fit max-w-[min(1100px,90vw)] rounded-2xl bg-gradient-to-t from-[#EF5F3D] via-[#F97A23] to-[#F8BF3B] p-4 shadow-lg">
        <h1 className="h3 mb-4 w-[80%] text-left font-Nunito font-bold text-white">
          Teach your kid the Life-skill education they need.{" "}
        </h1>
        <Link
          href={"/child-details"}
          className="mr-auto flex h-fit w-fit cursor-pointer items-center rounded-[40px] bg-white p-2 px-4 font-Nunito text-base font-bold text-black md:px-8 md:py-6 md:text-xl"
        >
          Enroll Your Child{" "}
        </Link>
        <Image
          src={addchild}
          alt="addchild"
          sizes="auto"
          className="absolute -right-5 bottom-0 -z-[0] max-h-[120%] max-w-[min(298px,50%)] object-contain"
        />
      </div>
    </div>
  );
};
const Description = ({ className, concern }) => (
  <div
    className={
      className +
      " scrollbar h5 flex max-h-[658px] max-w-[540px] flex-col gap-2 overflow-y-scroll rounded-[10px] bg-secondary p-5 text-primary sm:max-h-[408px] sm:w-1/2 lg:p-10"
    }
  >
    <p>{concern?.description}</p>
    <p>Symptoms of {concern?.title}:</p>
    <ul className="llist-inside ml-3 list-disc md:ml-5">
      {concern?.symptoms.map((s, index) => (
        <li key={index} className="h5">
          {s?.title && <h6>{s?.title} :</h6>}
          <h6>{s?.description}</h6>
        </li>
      ))}
    </ul>
    <p>Preventive Measures for {concern?.title} :</p>
    <ul className="llist-inside ml-3 flex list-disc flex-col gap-1 md:ml-5">
      {concern?.preventions.map((s, index) => (
        <li key={index} className="h5">
          {s?.title && <h6>{s?.title} :</h6>}
          <h6>{s?.description}</h6>
        </li>
      ))}
    </ul>
    {concern?.conclusion && (
      <>
        <p>Conclusion :</p>
        <p>{concern?.conclusion}</p>
      </>
    )}
  </div>
);

export default Page;
