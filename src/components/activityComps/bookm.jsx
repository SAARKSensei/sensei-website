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
    <div className="flex flex-col items-center gap-10 py-6 md:py-10">
      <div className="flex w-full flex-wrap gap-4 p-6 sm:gap-10 md:flex-nowrap md:p-10 lg:gap-20 min-[1300px]:p-20">
        <div className="flex w-full flex-col gap-5 md:w-1/2">
          <h2 className="font-Nunito text-lg font-bold tracking-normal text-black">
            BOOK REFERENCE
          </h2>
          <div className="flex flex-wrap gap-5 font-Nunito text-lg font-medium min-[400px]:flex-nowrap">
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
                className="max-h-44 w-fit grow rounded-3xl object-contain md:grow-0"
              />
            </Link>
            <div className="order-1 flex h-fit max-w-fit flex-col gap-4 sm:order-none">
              <p className="font-Nunito text-2xl font-bold leading-7 tracking-normal text-[#FF8B13]">
                Kami Koala Makes A Decision
              </p>
              <p className="font-Nunito text-base font-bold text-[#2C3D68]">
                by Marvin R. Goldfried & Linda B. Shapiro
              </p>
            </div>
          </div>
          <p className="font-Nunito text-base font-normal tracking-normal">
            This book offers practical strategies to help parents guide children
            through decision-making processes, focusing on communication and
            building children&apos;s confidence.
          </p>
          <h2 className="font-Nunito text-lg font-bold tracking-normal text-black">
            Video Referance
          </h2>
          <div className="w-fit">
            <Link
              target="_blank"
              href={"https://www.youtube.com/watch?v=TcUX6eNT2j4"}
              className="relative block w-fit"
            >
              <Image
                src={SuccedFailing}
                alt="succed failing"
                sizes="auto"
                className="grow rounded-3xl object-contain"
              />
              <Image
                src={PlayButton}
                alt="playbutton"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </Link>
            <div className="mt-2 flex w-full flex-col gap-2">
              <p className="font-Nunito text-2xl font-bold leading-7 tracking-normal text-[#FF8B13]">
                Crash Course Kids - Making Good Decisions
              </p>
              <p className="font-Nunito text-base font-normal tracking-normal">
                This informative video from Crash Course Kids uses animation to
                explain the decision-making process, considering different
                factors and potential consequences.
              </p>
            </div>
          </div>
        </div>
        <div className="relative m-4 flex h-fit max-w-[500px] flex-col gap-2.5 rounded-2xl bg-white p-5 text-black md:w-1/2">
          <span className="absolute -inset-4 z-[-1] rounded-2xl bg-gradient-to-l from-[#EF5F3D] via-[#F97A23] to-[#F8BF3B]" />
          <p className="font-Nunito text-lg font-bold tracking-normal">
            KEY MESSAGES
          </p>
          <ul className="list-disc px-5 font-Nunito text-2xl font-medium">
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
        Enroll at Rs. 99
      </Link> */}
    </div>
  );
};

export default Bookm;
