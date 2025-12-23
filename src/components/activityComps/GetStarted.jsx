import React from "react";
import GettingStarted from "@/assets/GettingStarted.svg";
const GetStarted = ({ action, loading }) => {
  return (
    <div className="relative flex min-h-[90vh] flex-col justify-evenly">
      <div className="mx-auto flex flex-col justify-center gap-2">
        <h3 className="h3 text-grad mx-auto font-bold">Getting Started </h3>
        <p className="body-3 mx-auto text-grey_1">
          Choose the right time when your child is away from distractions{" "}
        </p>
      </div>
      <button
        onClick={action}
        disabled={loading}
        className="h5_b mx-auto w-[min(90vw,300px)] rounded-lg border-b-4 border-[#CD9003] bg-[#F8BF3B] px-6 py-2 text-secondary disabled:opacity-50"
      >
        Let&apos;s Start
      </button>
      <GettingStarted className="center-x absolute bottom-0 right-0 -z-10 max-w-[800px]" />
    </div>
  );
};

export default GetStarted;
