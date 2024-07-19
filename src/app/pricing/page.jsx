"use client";
import React, { useState } from "react";
import { plans } from "@/utils/data";
import Image from "next/image";
import right from "@/assets/tick.svg?url";
import cross from "@/assets/cross1.svg?url";
import Stars from "@/components/Stars";
import ABLTopology from "@/assets/ABLTopology-1.svg?url";
const Page = () => {
  const [plan, setPlan] = useState("Family");
  //   console.log(plan);
  return (
    <div
      style={{
        backgroundImage: `url(${ABLTopology.src})`,
      }}
      className="flex flex-col items-center gap-10 px-5 py-20"
    >
      <div className="relative flex flex-col items-center gap-2">
        <Stars />
        <h4 className="h4 mx-auto h-fit w-full max-w-[90vw] text-center uppercase text-secondary lg:col-start-2">
          Pricing
        </h4>
        <h1 className="h1 text-secondary">
          {" "}
          Get the <span className="text-primary">Results</span> You Deserve
        </h1>
        {/* <p className="body_1 max-w-[600px] text-center">
          Lorem ipsum dolor sit amet consectetur. Proin nunc sodales netus
          pharetra lacus. Massa fringilla urna risus eleifend viverra ac quam
          euismod in. Diam tincidunt.
        </p> */}
      </div>
      <div className="flex w-fit gap-2 rounded-full shadow-cs shadow-orange-100">
        {["Family", "Society"].map((p, index) => (
          <button
            key={index}
            onClick={() => setPlan(p)}
            className={`h5_b rounded-full px-6 py-3 ${plan === p ? "bg-primary text-white" : ""}`}
          >
            {p}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {plans[plan]?.plans?.map((p, index) => (
          <Plan key={index} plan={p} features={plans[plan].features} />
        ))}
      </div>
    </div>
  );
};
const Plan = ({ plan, features }) => {
  return (
    <div
      className={`max-w-[min(416px,calc(100vw-16px))] rounded-[10px] ${plan.tag === "Recomended" ? "bg-secondary text-white" : "bg-white"} shadow-cs`}
    >
      <div className="relative flex flex-col gap-2 p-6 md:p-12">
        {plan?.tag && (
          <div
            className={`body3_b ribbon absolute right-0 top-6 ${plan.name === "Intermediate" ? "bg-[#EF5F3D] text-white before:border-[#EF5F3D]" : "bg-[#F8BF3B] text-secondary before:border-[#F8BF3B]"} p-1 px-4 before:border-l-transparent`}
          >
            {plan.tag}
          </div>
        )}
        <h2
          className={`h3 font-bold ${plan.tag === "Recomended" ? "" : "text-secondary"}`}
        >
          {plan.name}
        </h2>
        <p
          className={`body_3 ${plan.tag === "Recomended" ? "" : "text-grey_1"}`}
        >
          {plan.description}
        </p>
        <p
          className={`body_3 ${plan.tag === "Recomended" ? "" : "text-grey_1"}`}
        >
          {plan.billed}
        </p>
        <div className="flex items-center gap-2">
          <h3 className={`h1 ${plan.tag === "Recomended" ? "" : "text-grad"}`}>
            {plan.curr_price}
          </h3>
          <h4
            className={`h4 ${plan.tag === "Recomended" ? "" : "text-grey_1"} line-through`}
          >
            {plan.price}
          </h4>
        </div>
        <p
          className={`body_3 ${plan.tag === "Recomended" ? "" : "text-grey_1"}`}
        >
          Subject
        </p>
        {features.subjects.map((s, index) => (
          <div key={index} className={`flex items-center gap-2`}>
            <Image src={plan.subjects[s.id] ? right : cross} alt={"mark"} />
            <p
              className={`body_2 ${plan.subjects[s.id] ? "" : "line-through"}`}
            >
              {s.name}
            </p>
          </div>
        ))}
        <p
          className={`body_3 ${plan.tag === "Recomended" ? "" : "text-grey_1"}`}
        >
          Duration
        </p>

        <p className={`body_2`}>{plan.duration}</p>
        <p
          className={`body_3 ${plan.tag === "Recomended" ? "" : "text-grey_1"}`}
        >
          Includes
        </p>
        {features.includes.map((s, index) => (
          <div key={index} className="flex items-center gap-2">
            <Image src={plan.includes[s.id] ? right : cross} alt={"mark"} />
            <p
              className={`body_2 ${plan.includes[s.id] ? "" : "line-through"}`}
            >
              {s.name}
            </p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-2 rounded-b-[10px] bg-grad_1 p-4 text-white">
        <h5 className="h5_b">Monthly Payment</h5>
        <p className="body_1 text-gray-200 line-through">
          {plan.monthly.price}
        </p>
        <h3 className="h3 font-bold">
          {plan.monthly.curr_price}
          <span className="text-lg">/mo</span>
        </h3>
      </div>
    </div>
  );
};
export default Page;
