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
import axios from "axios";
import next from "next";

import Feedback from "@/components/activityComps/Feedback";
const Page = ({ params: { id } }) => {
  const [status, setStatus] = useState(false);
  const [state, setState] = useState(0);
  const [infoOpen, setInfoOpen] = useState(false);
  const [currProcess, setCurrProcess] = useState(0);
  const [interactiveActivity, setInteractiveActivity] = useState([]);
  const nextProcess = () => {
    if (currProcess !== interactiveActivity?.processes?.length - 1) {
      setCurrProcess((pre) => pre + 1);
    } else {
      setState((pre) => pre + 1);
    }
  };
  useEffect(() => {
    const fetchProcessData = async () => {
      const res = await axios
        .get(`/interactive-activities/${id}`)
        .catch((err) => console.log(err));
      if (res?.data) {
        // console.log(res?.data);
        setInteractiveActivity(res?.data);
      }
    };
    fetchProcessData();
  }, []);

  switch (state) {
    case 0:
      return (
        <Loading
          activity={{
            outComes: interactiveActivity?.keyOutcomes,
            name: interactiveActivity?.interactiveActivityName,
            ageGroup: "5-7 years",
          }}
          action={() => setState((pre) => pre + 1)}
        />
      );
    case 1:
      return (
        <Materials
          materials={interactiveActivity?.materialsRequired}
          action={() => setState((pre) => pre + 1)}
        />
      );
    case 3:
      return <Feedback />;
    case 2:
      return (
        <>
          <div
            style={{ backgroundImage: `url(${Activitybg.src})` }}
            className="container relative mx-auto mb-5 flex h-fit max-h-[min(calc(100vh-60px),1000px)] max-w-[1000px] flex-col gap-8 p-5"
          >
            {infoOpen && (
              <Info
                activity={{
                  intro: interactiveActivity?.intro,
                }}
                action={() => setInfoOpen((pre) => !pre)}
              />
            )}
            <div className="flex items-center justify-center gap-4">
              <Image src={cross} alt="cross" />
              <div className="flex w-full gap-1 p-2 sm:gap-2">
                {Array.from({
                  length: interactiveActivity?.processes?.length || 0,
                }).map((_, index) => (
                  <div
                    className="relative -z-[1] block h-2 w-1/4 rounded-full bg-grey_1"
                    key={index}
                  >
                    {index <= currProcess && (
                      <span className="absolute z-[0] h-2 w-full rounded-full bg-primary" />
                    )}
                  </div>
                ))}
              </div>
              <h5 className="h5 text-secondary">
                {currProcess + 1 + "/" + interactiveActivity?.processes?.length}
              </h5>
            </div>
            <div>
              <div className="flex justify-between">
                <h5 className="body1_b text-grad">
                  {interactiveActivity?.interactiveActivityName}
                </h5>
                <Infosvg
                  onClick={() => setInfoOpen((pre) => !pre)}
                  className="cursor-pointer"
                />
              </div>
              <p className="body_2 text-secondary">
                {interactiveActivity?.processes[currProcess]?.processNumber +
                  ". " +
                  interactiveActivity?.processes[currProcess]?.processName}{" "}
              </p>
            </div>
            <Image
              src={`https://drive.google.com/uc?export=view&id=${interactiveActivity?.processes[currProcess]?.image.split("/")[5]}`}
              alt={interactiveActivity?.processes[currProcess]?.processName}
              objectFit="cover"
              sizes="100%"
              width={500}
              height={500}
              className="mx-auto"
            />
            <div className="flex flex-col gap-5 overflow-y-scroll">
              <TextReader
                key={
                  interactiveActivity?.processes[currProcess]?.processNumber +
                  "sensei"
                }
                text={
                  interactiveActivity?.processes[currProcess]?.senseiMessage
                }
                role={"Child"}
              />
              <TextReader
                key={interactiveActivity?.processes[currProcess]?.processNumber}
                text={
                  interactiveActivity?.processes[currProcess]?.parentMessage
                }
                role={"Parent"}
              />
              {/* <button
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
              */}
            </div>
            <button
              onClick={() => nextProcess()}
              className="h5_b mx-auto w-[min(90vw,300px)] rounded-lg border-b-4 border-[#CD9003] bg-[#F8BF3B] px-6 py-2 text-secondary"
            >
              {currProcess !== interactiveActivity?.processes?.length - 1
                ? "Continue"
                : "Finish"}
            </button>
          </div>
        </>
      );
  }
};

export default Page;
