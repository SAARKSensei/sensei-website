import React from "react";
import Activitybg from "@/assets/activitybg.svg?url";
const Materials = ({ action, materials }) => {
  return (
    <div
      style={{ backgroundImage: `url(${Activitybg.src})` }}
      className="relative flex min-h-[90vh] flex-col justify-evenly"
    >
      <div className="mx-auto flex flex-col justify-center gap-4">
        <h3 className="h3 text-grad mx-auto font-bold">Are you ready? </h3>
        <p className="body-3 mx-auto text-grey_1">
          Be ready with the following materials{" "}
        </p>
        <ul className="flex list-inside list-disc flex-col gap-2">
          {materials.split(",").map((material, index) => (
            <li
              key={index}
              className="body-2 mx-auto max-w-[min(90vw,500px)] text-black"
            >
              {material}
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={action}
        className="h5_b mx-auto w-[min(90vw,300px)] rounded-lg border-b-4 border-[#CD9003] bg-[#F8BF3B] px-6 py-2 text-secondary disabled:opacity-50"
      >
        Let&apos;s Start
      </button>
    </div>
  );
};

export default Materials;
