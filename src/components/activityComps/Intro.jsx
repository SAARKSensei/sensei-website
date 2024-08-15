import React from "react";

const Intro = () => {
  return (
    <div className="flex flex-wrap gap-5 rounded-3xl bg-[#FFF7EF] p-5 text-justify md:flex-row md:gap-10 lg:max-w-[50%] lg:gap-20 lg:p-10">
      <div className="font-Nunito text-lg tracking-normal text-[#28385F]">
        <h1 className="pb-1 font-bold"> INTRODUCTION</h1>
        <p className="font-medium">
          {" "}
          Calling all parents! Today, we&apos;re going to play a game that turns
          you and your child into a superhero team. But instead of fighting
          villains, you&apos;ll be tackling a different kind of challenge:
          making the right choices!Being a hero (or a regular kid!) means
          knowing how to navigate tricky situations. This game will help your
          child understand the consequences of their choices, making them a
          responsible decision-maker ready to face anything the day throws their
          way!
        </p>
      </div>
      <div className="flex flex-wrap justify-between gap-2.5 rounded-3xl bg-gradient-to-r from-[#EF5F3D] via-[#F97A23] to-[#F8BF3B] p-5 font-Nunito text-lg tracking-normal text-white md:p-10">
        <div className="flex flex-col gap-2.5 sm:w-[50%]">
          <h1 className="w-fit font-bold">OBJECTIVE</h1>
          <p className="font-medium">
            Through a collaborative scenario-building game, this activity aims
            to improve a child&apos;s ability to make responsible decisions by
            considering the consequences of their choices.
          </p>
        </div>
        <div className="flex flex-col gap-2.5">
          <h1 className="w-fit font-bold">MATERIALS REQUIRED</h1>
          <p className="flex flex-col gap-1.5 font-medium">
            <span>- Paper</span>
            <span>- Markers or crayons</span>
            <span>- Dice (optional)</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
