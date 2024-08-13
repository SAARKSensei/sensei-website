"use client";

import React from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Kami from "@/Images/kami.png";
import PlayButton from "@/Images/playbutton.svg";
import SuccedFailing from "@/Images/succedfailing.png";
import Link from "next/link";

const Bookm = () => {
  // const { data: session } = useSession();
  // const router = useRouter();

  // const nextPage = () => {
  //   if (!session?.user?.parentDetails) {
  //     router.push("/parentdetails");
  //   } else if (
  //     !session?.user?.childrenDetails ||
  //     session?.user?.childrenDetails?.length === 0
  //   ) {
  //     router.push("/childdetails");
  //   } else {
  //     router.push("/familypage");
  //   }
  // };

  return (
    <div className="flex flex-col gap-10 py-6 md:py-10 items-center">
      <div className="w-full flex flex-wrap md:flex-nowrap p-6 md:p-10 min-[1300px]:p-20 gap-4 sm:gap-10 lg:gap-20">
        <div className="w-full md:w-1/2 flex flex-col gap-5">
          <h2 className="text-black text-lg font-bold tracking-normal font-Nunito">
            BOOK REFERENCE
          </h2>
          <div className="flex-wrap min-[400px]:flex-nowrap flex gap-5 font-medium text-lg font-Nunito">
            <Link
              target="_blank"
              href={
                "https://www.amazon.in/Kami-Koala-Makes-Decision-Making/dp/1732390665"
              }
            >
              <Image
                src={Kami}
                alt="monster"
                sizes="auto"
                className="w-fit max-h-44 object-contain grow md:grow-0 rounded-3xl"
              />
            </Link>
            <div className="flex flex-col gap-4 order-1 sm:order-none max-w-fit h-fit">
              <p className="text-2xl tracking-normal font-Nunito font-bold text-[#FF8B13] leading-7">
                Kami Koala Makes A Decision
              </p>
              <p className="text-[#2C3D68] font-Nunito font-bold text-base">
                by Marvin R. Goldfried & Linda B. Shapiro
              </p>
            </div>
          </div>
          <p className="text-base font-Nunito font-normal tracking-normal">
            This book offers practical strategies to help parents guide children
            through decision-making processes, focusing on communication and
            building children&apos;s confidence.
          </p>
          <h2 className="text-black text-lg font-bold tracking-normal font-Nunito">
            Video Referance
          </h2>
          <div className="w-fit">
            <Link
              target="_blank"
              href={"https://www.youtube.com/watch?v=TcUX6eNT2j4"}
              className=" block w-fit relative"
            >
              <Image
                src={SuccedFailing}
                alt="succed failing"
                sizes="auto"
                className="rounded-3xl object-contain grow"
              />
              <Image
                src={PlayButton}
                alt="playbutton"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </Link>
            <div className="w-full flex flex-col gap-2 mt-2">
              <p className="text-[#FF8B13] text-2xl font-Nunito font-bold leading-7 tracking-normal">
                Crash Course Kids - Making Good Decisions
              </p>
              <p className="text-base font-Nunito font-normal tracking-normal">
                This informative video from Crash Course Kids uses animation to
                explain the decision-making process, considering different
                factors and potential consequences.
              </p>
            </div>
          </div>
        </div>
        <div className="m-4 h-fit md:w-1/2 max-w-[500px] rounded-2xl bg-white p-5 text-black relative flex flex-col gap-2.5">
          <span className="rounded-2xl absolute z-[-1] -inset-4 bg-gradient-to-l from-[#EF5F3D] via-[#F97A23] to-[#F8BF3B]" />
          <p className="text-lg font-Nunito font-bold tracking-normal">
            KEY MESSAGES
          </p>
          <ul className="list-disc px-5 text-2xl font-medium font-Nunito">
            <li>
              Improved Decision-Making Skills: By considering consequences and
              brainstorming solutions, kids learn to approach choices
              thoughtfully.
            </li>
            <li>
              Enhanced Problem-Solving Skills: The activity encourages kids to
              identify problems, explore options, and make responsible
              decisions.
            </li>
            <li>
              Development of Critical Thinking: Discussing different solutions
              and their outcomes fosters critical thinking and analysis.
            </li>
            <li>
              Stronger Communication: The game promotes open communication
              between parent and child about difficult choices.
            </li>
            <li>
              Understanding of Values: Connecting decision-making with personal
              values helps kids understand their moral compass.
            </li>
          </ul>
        </div>
      </div>
      {/* <Link
        href={"/childdetails"}
        className="w-fit px-8 py-4 rounded-[40px] grad-bg-2 text-center text-white text-lg font-extrabold font-Nunito">
        Enroll Your Child
      </Link> */}
    </div>
  );
};

export default Bookm;
