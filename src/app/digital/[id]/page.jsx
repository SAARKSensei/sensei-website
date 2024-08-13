"use client";
import Popup from "@/components/gamifiedActivities/Popup";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import cross from "@/assets/cross-solid.svg?url";
import Infosvg from "@/assets/info.svg";
import Activitybg from "@/assets/activitybg.svg?url";
import TextReader from "@/components/gamifiedActivities/textSpeach";
import Loading from "@/components/gamifiedActivities/Loading";
import Star from "@/assets/star1.svg";
import Reward from "@/assets/reward.svg";
import Info from "@/components/gamifiedActivities/Info";
import GetStarted from "@/components/activityComps/GetStarted";
import Materials from "@/components/activityComps/Materials";
const Page = () => {
  const [status, setStatus] = useState(false);
  const [state, setState] = useState(0);
  const [infoOpen, setInfoOpen] = useState(false);

  switch (state) {
    case 0:
      return <Loading action={() => setState((pre) => pre + 1)} />;
    // case 1:
    //   return <GetStarted action={() => setState((pre) => pre + 1)} />;
    case 1:
      return <Materials action={() => setState((pre) => pre + 1)} />;
    default:
      return (
        <>
          <div
            style={{ backgroundImage: `url(${Activitybg.src})` }}
            className="container relative mx-auto mb-5 flex h-fit max-h-[min(calc(100vh-60px),1000px)] max-w-[1000px] flex-col gap-8 p-5"
          >
            {infoOpen && <Info action={() => setInfoOpen((pre) => !pre)} />}
            <div className="flex items-center justify-center gap-4">
              <Image src={cross} alt="cross" />
              <div className="flex w-full gap-1 p-2 sm:gap-2">
                {[1, 2, 3, 4].map((_, index) => (
                  <div
                    className="relative -z-[1] block h-2 w-1/4 rounded-full bg-grey_1"
                    key={index}
                  >
                    <span className="absolute z-[0] h-2 w-full rounded-full bg-primary" />
                  </div>
                ))}
              </div>
              <h5 className="h5 text-secondary">1/4</h5>
            </div>
            <div>
              <div className="flex justify-between">
                <h5 className="body1_b text-grad">Sibling Superhero</h5>
                <Infosvg
                  onClick={() => setInfoOpen((pre) => !pre)}
                  className="cursor-pointer"
                />
              </div>
              <p className="body_2 text-secondary">1. The Toy Tug-of-War</p>
            </div>
            <div className="flex flex-col gap-5 overflow-y-scroll">
              <TextReader
                text={
                  "Let's enter the Compliment Cavern! Here, we'll find magical gems filled with compliments for your child."
                }
                role={"Child"}
              />
              <TextReader
                text={
                  "1. Hide 5 to 10 pieces of paper with positive affirmations written on them (e.g., You're a great artist!, You're so kind to your friends!) around the room. 2. The child searches for the gems (affirmation papers) while you give encouraging hints. 3. Once all the gems are found, read the affirmations together and discuss what makes them true."
                }
                role={"Parent"}
              />
              <button
                onClick={() => setStatus((pre) => !pre)}
                className="button-action-outline min-w-max"
              >
                Snatch It!
              </button>{" "}
              {status && (
                <Popup status={false} action={() => setStatus((pre) => !pre)} />
              )}
              <div className="flex items-center gap-2">
                <Reward className="h-8 w-8 rounded-full bg-secondary text-white" />

                <h5 className="h5_b text-secondary">Reward</h5>
              </div>
              <div className="mx-auto flex w-full items-center gap-2 rounded-[10px] bg-[#0764A7] p-4 text-white">
                <div className="flex flex-col gap-2">
                  <p className="body_3">Congrats you have unlocked</p>
                  <h5 className="h5_b">Confidence Star</h5>
                </div>
                <Star className="ml-auto h-[54px] w-[54px]" />
                <span className="h5_b">x 1</span>
              </div>
            </div>
            <button className="h5_b mx-auto w-[min(90vw,300px)] rounded-lg border-b-4 border-[#CD9003] bg-[#F8BF3B] px-6 py-2 text-secondary">
              Continue
            </button>
          </div>
        </>
      );
  }
};

export default Page;
