import React from "react";
import Image from "next/image";
import parentChild from "@/assets/parentChild.png";
import hands from "@/assets/hands.png";
const Section2Home = () => {
  return (
    <div className="flex flex-col gap-10 p-4 container mx-auto ">
      <div className="flex  max-sm:flex-col gap-10 justify-around items-center">
        <Image
          src={parentChild}
          sizes="auto"
          alt="parentChild"
          className="max-w-[min(648px,100vw)]"
        />
        <div className="max-w-[648px] flex min-w-[min(100vw,400px)] flex-col justify-center gap-2">
          <h2 className="  h2 text-transparent bg-grad_1 bg-clip-text">
            Dear Parents
          </h2>
          <p className=" body_2">
            Sensei is here to be your partner in this mix of digital and
            traditional learning adventure. We&apos;re not just another learning
            app - we&apos;re the first platform in India designed by licensed
            RCI psychologists to focus on life skills. We empower young parents
            to navigate the digital age with confidence, offering resources and
            guidance to create balanced routines.
          </p>
        </div>
      </div>
      <div className="flex max-sm:flex-col gap-10 justify-around items-center ">
        <div className="max-w-[648px] flex min-w-[min(100vw,400px)] flex-col justify-center gap-4">
          <h2 className="  h2 text-transparent bg-grad_1 bg-clip-text">
            Supporting you in every step{" "}
          </h2>
          <p className=" body_2">
            Sensei is a learning and development platform for kids and parents
            prioritizing well-being of the next generation by equipping them
            with essential life skills before they navigate the complexities of
            the modern world. Sensei brings in a solution crafted by
            RCI-approved Clinical Psychologists and meticulously aligned with
            National Education Policy (NEP 2020) guidelines, Sensei&apos;s
            captivating Activity-based learning (ABL) modules cultivate social
            emotional learning, self-awareness, and a strong foundation in
            ethical decision-making.
          </p>
          <button className="button_1 w-fit  bg-grad_1 text-white">
            Try our FREE activity
          </button>
        </div>
        <Image
          src={hands}
          sizes="auto"
          alt="hands"
          className="max-w-[min(648px,100vw)]"
        />
      </div>
    </div>
  );
};

export default Section2Home;
