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
import Print from "@/components/miniComps/Print";
import { notFound, useRouter } from "next/navigation";

const Page = ({ params: { id } }) => {
  const Router = useRouter();
  const [status, setStatus] = useState(null);
  const [state, setState] = useState(0);
  const [infoOpen, setInfoOpen] = useState(false);
  const [currQuestion, setcurrQuestion] = useState(0);
  const [digitalActivity, setDigitalActivity] = useState(null);
  const nextquestion = () => {
    if (!status) {
      setStatus(null);
      return;
    }
    if (currQuestion !== digitalActivity?.questions?.length - 1) {
      setcurrQuestion((pre) => pre + 1);
    } else {
      setState((pre) => pre + 1);
    }
    setStatus(null);
  };
  useEffect(() => {
    const fetchquestionData = async () => {
      const res = await axios
        .get(`/digital-activities/${id}`)
        .catch((err) => console.log(err));
      // console.log("digital: " + res);

      if (res?.data) {
        // console.log(res?.data);
        setDigitalActivity(res?.data);
      }
    };
    fetchquestionData();
  }, []);

  switch (state) {
    case 0:
      return (
        <Loading
          activity={{
            outComes: digitalActivity?.keyOutcomes,
            name: digitalActivity?.digitalActivityName,
            ageGroup: "5-7 years",
          }}
          action={() => setState((pre) => pre + 1)}
        />
      );

    case 2:
      return <Feedback />;
    case 1:
      return !digitalActivity ? (
        notFound()
      ) : (
        <>
          <div
            style={{ backgroundImage: `url(${Activitybg.src})` }}
            className="container relative mx-auto my-10 mb-5 flex h-fit max-w-[1000px] flex-col gap-8 p-5"
          >
            {infoOpen && (
              <Info
                activity={{
                  intro: digitalActivity?.intro,
                }}
                action={() => setInfoOpen((pre) => !pre)}
              />
            )}
            <div className="flex items-center justify-center gap-4">
              <Image src={cross} onClick={() => Router.back()} alt="cross" />
              <div className="flex w-full gap-1 p-2 sm:gap-2">
                {Array.from({
                  length: digitalActivity?.questions?.length || 0,
                }).map((_, index) => (
                  <div
                    className="relative -z-[1] block h-2 w-1/4 rounded-full bg-grey_1"
                    key={index}
                  >
                    {index <= currQuestion && (
                      <span className="absolute z-[0] h-2 w-full rounded-full bg-primary" />
                    )}
                  </div>
                ))}
              </div>
              <h5 className="h5 text-secondary">
                {currQuestion + 1 + "/" + digitalActivity?.questions?.length}
              </h5>
            </div>
            <div>
              <div className="flex justify-between">
                <h5 className="body1_b text-grad">
                  {digitalActivity?.digitalActivityName}
                </h5>
                <Infosvg
                  onClick={() => setInfoOpen((pre) => !pre)}
                  className="cursor-pointer"
                />
              </div>
              <p className="body_2 text-secondary">
                {digitalActivity?.questions[currQuestion]?.questionNumber +
                  ". " +
                  digitalActivity?.questions[currQuestion]?.questionName}{" "}
              </p>
            </div>

            <Image
              src={`https://drive.google.com/uc?export=view&id=${digitalActivity?.questions[currQuestion]?.questionImage.split("/")[5]}`}
              alt={digitalActivity?.questions[currQuestion]?.questionName}
              objectFit="cover"
              sizes="100%"
              width={500}
              height={500}
              className="mx-auto"
            />
            <div className="flex flex-col items-center gap-5 p-2">
              <TextReader
                key={
                  digitalActivity?.questions[currQuestion]?.questionNumber +
                  "sensei"
                }
                text={digitalActivity?.questions[currQuestion]?.senseiQuestion}
                role={"Child"}
              />
              {[
                digitalActivity?.questions[currQuestion]?.option1,
                digitalActivity?.questions[currQuestion]?.option2,
                digitalActivity?.questions[currQuestion]?.option3,
              ].map((option, index) => (
                <button
                  onClick={() =>
                    setStatus(
                      digitalActivity?.questions[currQuestion]?.senseiAnswer ===
                        option,
                    )
                  }
                  key={index}
                  className="button-action-outline"
                >
                  {option}
                </button>
              ))}{" "}
              {status !== null && (
                <Popup
                  messege={{
                    wrong:
                      digitalActivity?.questions[currQuestion]
                        ?.incorrectAnswerDescription,
                    right:
                      digitalActivity?.questions[currQuestion]
                        ?.correctAnswerDescription,
                  }}
                  status={status}
                  action={() => nextquestion()}
                />
              )}
              {/* <div className="flex items-center gap-2">
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
              </div> */}
            </div>
            {/* <button
              onClick={() => nextquestion()}
              className="h5_b mx-auto w-[min(90vw,300px)] rounded-lg border-b-4 border-[#CD9003] bg-[#F8BF3B] px-6 py-2 text-secondary"
            >
              {currQuestion !== digitalActivity?.questions?.length - 1
                ? "Continue"
                : "Finish"}
            </button> */}
          </div>
        </>
      );
  }
};

export default Page;
