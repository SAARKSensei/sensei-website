import React from "react";
import Background from "@/components/BackGround.jsx";
import Image from "next/image";
import girl from "@/assets/girl.jpg";
import boy from "@/assets/boyj.jpg";
import boxes from "@/assets/boxes.svg";
import muser from "@/assets/miniuser.svg";
import flower from "@/assets/flower.svg";
import InfiniteScroll from "./InfiniteScroll";
import Navbar from "./Navbar";
import Boy from "@/assets/DSC_0354.png";
import topology from "@/assets/Topology-1.svg";
import ellipse from "@/assets/Ellipse.svg";
import personality from "@/assets/personality.png";
import heromobile from "@/assets/mobileHero.png";
import tic from "@/assets/tick.svg";
import google from "@/assets/google.svg";
import whatsapp from "@/assets/whatsapp.svg";
import userround from "@/assets/user-round.svg";
import bgtopo from "@/assets/bgtopo.svg";
import TypingAni from "./TypingAni";
import { Herotexts } from "@/utils/data";
import HeroImageAny from "./HeroImageAny";
const HeroSection = () => {
  return (
    <div className="min-h-max">
      <Navbar />
      <div className=" relative z-[1] ">
        {/* <Background /> */}
        <div className=" container max-w-[90vw]  pt-20 pb-10 mx-auto gap-10 flex max-[900px]:flex-col  justify-between w-full h-full">
          <div className="flex min-w-[40vw]  flex-col gap-10">
            <h1 className="max-w-[800px] h2 lg:h1 min-h-max  leading-snug">
              Life skills that empower your child in this digital world{" "}
              <TypingAni texts={Herotexts} delay={100} />
            </h1>
            <button className=" whitespace-nowrap  button_1 bg-grad_1 text-white w-fit">
              Sign Up for FREE activity
            </button>

            <div className=" whitespace-nowrap ">
              <p className="body_3 text-grey_1 flex items-center gap-1">
                <Image src={tic} alt="tic" sizes="auto" />
                Designed by Psychologists & Counselors
              </p>

              <p className="body_3 text-grey_1 flex items-center gap-1">
                <Image src={tic} alt="tic" sizes="auto" />
                Aligned with National Education Policy{" "}
              </p>
            </div>
            <div className=" flex min-w-max gap-4 items-center">
              <div>
                <p className="body1_b flex items-center gap-2 border-b-2 border-grey_2 pb-1  ">
                  <Image src={google} alt="google" width={36} height={36} />
                  4.3/5
                </p>
                <p className="body_3 text-grey_1">Google rating</p>
              </div>
              <div>
                <p className="body1_b flex items-center gap-2 border-b-2 border-grey_2 pb-1  ">
                  <Image src={userround} alt="userround" sizes="auto" />
                  150+
                </p>
                <p className="body_3 text-grey_1">Active users</p>
              </div>
              <div>
                <p className="body1_b flex items-center gap-2 border-b-2 border-grey_2 pb-1  ">
                  <Image src={whatsapp} alt="whatsapp" sizes="auto" />
                  350+{" "}
                </p>
                <p className="body_3 text-grey_1">Parents Community</p>
              </div>
            </div>
          </div>
          <div className="relative min-w-[min(900px,50vw)] max-h-[min(900px,50vw)] max-[900px]:min-w-[90vw] max-[900px]:order-[-1] max-[900px]:mb-40 max-sm:mb-20 mx-auto">
            <Image
              src={bgtopo}
              alt="bgtopo"
              sizes="auto"
              className="absolute  max-[900px]:min-w-[150vw] max-[900px]:-bottom-[20vw] -right-[20vw]  min-[900px]:left-0 md:max-w-[min(900px,70vw)] min-w-[700px] min-[900px]:-top-[10vw]"
            />
            <HeroImageAny />
            <Image
              src={personality}
              alt="personality"
              sizes="auto"
              className="absolute max-w-[max(15vw,80px)] max-[900px]:top-10 max-[900px]:left-[10vw] top-20 left-[2vw]"
            />
            <Image
              src={heromobile}
              alt="heromobile"
              sizes="auto"
              className="absolute max-w-[max(15vw,65px)] max-[900px]:-right-5 max-[900px]:top-20 top-28 right-10"
            />
            <div className="absolute bg-white drop-shadow-lg p-2 bottom-0 w-[165px] max-sm:w-[107px] max-sm:h-[39px] h-[60px] left-0 rounded-lg max-[900px]:-bottom-10 max-[900px]:left-16">
              <Image
                src={flower}
                alt="flower"
                width={86}
                className="right-5 max-sm:right-2 max-sm:max-w-[56px] absolute -top-[30px] max-sm:-top-5"
              />
              <div className=" w-[90%] bg-[#F2F2F2] h-[13px] max-sm:h-[8px] rounded-full absolute bottom-2 left-0 right-0 mx-auto  ">
                <span className=" bg-primary rounded-full w-1/2 h-full absolute" />
              </div>
            </div>
            <div className="w-[180px] absolute max-sm:scale-50 max-[900px]:-top-20 top-0 max-[900px]:-right-10 right-0 h-[90px] drop-shadow-lg bg-white p-2 rounded-xl">
              <h1 className="h5_b text-grad">30 Lakhs</h1>
              <p className="body_5 text-grey_1">
                Class 10th student failed in 2023 board exams
              </p>
            </div>
            <div className="w-[180px] absolute max-sm:scale-50  h-[90px] max-sm:left-0 -top-10 left-20 drop-shadow-lg bg-white p-2 rounded-xl">
              <h1 className="h5_b text-grad">1 out of 7</h1>
              <p className="body_5 text-grey_1">
                children experiences a mental health disorder{" "}
              </p>
            </div>
            <div className="w-[180px] absolute max-sm:scale-50 max-[900px]:-right-10 max-[900px]:-bottom-16 h-[90px] bottom-0 right-10 drop-shadow-lg bg-white p-2 rounded-xl">
              <h1 className="h5_b text-grad">1,673</h1>
              <p className="body_5 text-grey_1">
                Suicide cases due to failure in examination in year 2021{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <InfiniteScroll /> */}
    </div>
  );
};

export default HeroSection;
