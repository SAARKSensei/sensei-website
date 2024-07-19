import React from "react";
import Background from "@/components/BackGround.jsx";
import Image from "next/image";
import girl from "@/assets/girl.jpg";
import boy from "@/assets/boyj.jpg";
import boxes from "@/assets/boxes.svg?url";
import muser from "@/assets/miniuser.svg?url";
import flower from "@/assets/flower.svg?url";
import InfiniteScroll from "./InfiniteScroll";
import Navbar from "./Navbar";
import Boy from "@/assets/DSC_0354.png";
import topology from "@/assets/Topology-1.svg?url";
import ellipse from "@/assets/Ellipse.svg?url";
import personality from "@/assets/personality.png";
import heromobile from "@/assets/mobileHero.png";
import tic from "@/assets/tick.svg?url";
import google from "@/assets/google.svg?url";
import whatsapp from "@/assets/whatsapp.svg?url";
import userround from "@/assets/user-round.svg?url";
import bgtopo from "@/assets/bgtopo.svg?url";
import TypingAni from "./TypingAni";
import { Herotexts } from "@/utils/data";
import HeroImageAny from "./HeroImageAny";
import FreeActivityBtn from "./FreeActivityBtn";
const HeroSection = () => {
  return (
    <div className="min-h-max">
      <div className="relative z-[1]">
        {/* <Background /> */}
        <div className="container mx-auto flex h-full w-full max-w-[90vw] justify-between gap-10 pb-10 pt-20 max-[900px]:flex-col">
          <div className="flex min-w-[40vw] flex-col gap-10">
            <h1 className="h2 lg:h1 min-h-max max-w-[800px] leading-snug">
              Life skills that empower your child in this digital world{" "}
              <span className="inline-block min-w-[200px] max-w-fit bg-grad_1 bg-clip-text text-transparent">
                <TypingAni texts={Herotexts} delay={2000} speed={100} />
              </span>
            </h1>
            <FreeActivityBtn />

            <div className="whitespace-nowrap">
              <p className="body_3 flex items-center gap-1 text-grey_1">
                <Image src={tic} alt="tic" sizes="auto" />
                Designed by Psychologists & Counselors
              </p>

              <p className="body_3 flex items-center gap-1 text-grey_1">
                <Image src={tic} alt="tic" sizes="auto" />
                Aligned with National Education Policy{" "}
              </p>
            </div>
            <div className="flex min-w-max items-center gap-4">
              <div>
                <p className="body1_b flex items-center gap-2 border-b-2 border-grey_2 pb-1">
                  <Image src={google} alt="google" width={36} height={36} />
                  4.3/5
                </p>
                <p className="body_3 text-grey_1">Google rating</p>
              </div>
              <div>
                <p className="body1_b flex items-center gap-2 border-b-2 border-grey_2 pb-1">
                  <Image src={userround} alt="userround" sizes="auto" />
                  150+
                </p>
                <p className="body_3 text-grey_1">Active users</p>
              </div>
              <div>
                <p className="body1_b flex items-center gap-2 border-b-2 border-grey_2 pb-1">
                  <Image src={whatsapp} alt="whatsapp" sizes="auto" />
                  350+{" "}
                </p>
                <p className="body_3 text-grey_1">Parents Community</p>
              </div>
            </div>
          </div>
          <div className="relative mx-auto max-h-[min(900px,50vw)] min-w-[min(900px,50vw)] max-[900px]:order-[-1] max-[900px]:mb-40 max-[900px]:min-w-[90vw] max-sm:mb-20">
            <Image
              src={bgtopo}
              alt="bgtopo"
              sizes="auto"
              className="absolute -right-[20vw] min-w-[700px] max-[900px]:-bottom-[20vw] max-[900px]:min-w-[150vw] md:max-w-[min(900px,70vw)] min-[900px]:-top-[10vw] min-[900px]:left-0"
            />
            <HeroImageAny />
            <Image
              src={personality}
              alt="personality"
              sizes="auto"
              className="absolute left-[2vw] top-20 max-w-[max(15vw,80px)] max-[900px]:left-[10vw] max-[900px]:top-10"
            />
            <Image
              src={heromobile}
              alt="heromobile"
              sizes="auto"
              className="absolute right-10 top-28 max-w-[max(15vw,65px)] max-[900px]:-right-5 max-[900px]:top-20"
            />
            <div className="absolute bottom-0 left-0 h-[60px] w-[165px] rounded-lg bg-white p-2 drop-shadow-lg max-[900px]:-bottom-10 max-[900px]:left-16 max-sm:h-[39px] max-sm:w-[107px]">
              <Image
                src={flower}
                alt="flower"
                width={86}
                className="absolute -top-[30px] right-5 max-sm:-top-5 max-sm:right-2 max-sm:max-w-[56px]"
              />
              <div className="absolute bottom-2 left-0 right-0 mx-auto h-[13px] w-[90%] rounded-full bg-[#F2F2F2] max-sm:h-[8px]">
                <span className="absolute h-full w-1/2 rounded-full bg-primary" />
              </div>
            </div>
            <div className="absolute right-0 top-0 h-[90px] w-[180px] rounded-xl bg-white p-2 drop-shadow-lg max-[900px]:-right-10 max-[900px]:-top-20 max-sm:scale-50">
              <h1 className="h5_b text-grad">30 Lakhs</h1>
              <p className="body_5 text-grey_1">
                Class 10th student failed in 2023 board exams
              </p>
            </div>
            <div className="absolute -top-10 left-20 h-[90px] w-[180px] rounded-xl bg-white p-2 drop-shadow-lg max-sm:left-0 max-sm:scale-50">
              <h1 className="h5_b text-grad">1 out of 7</h1>
              <p className="body_5 text-grey_1">
                children experiences a mental health disorder{" "}
              </p>
            </div>
            <div className="absolute bottom-0 right-10 h-[90px] w-[180px] rounded-xl bg-white p-2 drop-shadow-lg max-[900px]:-bottom-16 max-[900px]:-right-10 max-sm:scale-50">
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
