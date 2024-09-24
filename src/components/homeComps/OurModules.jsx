import Image from "next/image";
import React from "react";

import TopologySmall from "@/assets/topologyourmodules.svg?url";
import TopologyBig from "@/assets/topologybig.svg?url";
import BurstStarOrange from "@/assets/burststarorange.svg?url";
import BurstStarWhite from "@/assets/burststarwhite.svg?url";
import BurstPuckerPeach from "@/assets/burstpuckerpeach.svg?url";
import BurstPuckerYellow from "@/assets/burstpuckeryellow.svg?url";
import Ticked from "@/assets/tick.svg?url";
import ClientLink from "@/components/miniComps/ClientLink";
import SmallPhone from "@/assets/smallphone.svg?url";
import BigPhones from "@/assets/bigphone.svg?url";

const OurModules = () => {
  return (
    <div className="group relative z-10 h-fit w-full rounded-[20px] bg-[#2C3D68] px-5 pt-16 sm:rounded-[60px] sm:px-0 sm:py-0">
      <Image
        src={TopologySmall}
        alt="topology"
        sizes="auto"
        className="absolute bottom-0 left-0 -z-10 block w-full sm:hidden"
      />
      <Image
        src={TopologyBig}
        alt="topology"
        sizes="auto"
        className="absolute bottom-0 right-0 -z-10 hidden h-full w-[70%] sm:block"
      />
      <div className="absolute inset-0 block sm:hidden">
        <Image
          src={BurstStarWhite}
          alt="burst white"
          sizes="auto"
          className="absolute left-[5%] top-[3%]"
        />
        <Image
          src={BurstPuckerYellow}
          alt="burst yellow"
          sizes="auto"
          className="absolute right-[5%] top-[6%]"
        />
        <Image
          src={BurstStarOrange}
          alt="burst orange"
          sizes="auto"
          className="absolute bottom-[50%] right-[10%]"
        />
        <Image
          src={BurstPuckerPeach}
          alt="burst peach"
          sizes="auto"
          className="absolute bottom-[40%] left-[10%]"
        />
      </div>
      <div className="relative mx-auto flex w-full flex-col items-center overflow-hidden p-1 sm:max-w-7xl sm:flex-row">
        <div className="flex w-full flex-col gap-8 sm:w-1/2 sm:px-10 sm:py-12">
          <div className="flex w-full flex-col gap-4 text-white">
            <h2 className="body_3">OUR MODULES</h2>
            <div className="flex items-center gap-4">
              <Image src={Ticked} alt="tick" sizes="auto" />
              <p className="font-Nunito text-base font-normal sm:text-lg sm:font-medium">
                Early intervention for emotional challenges
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Image src={Ticked} alt="tick" sizes="auto" />
              <p className="font-Nunito text-base font-normal sm:text-lg sm:font-medium">
                Enhances academic achievement and emotional well-being
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Image src={Ticked} alt="tick" sizes="auto" />
              <p className="font-Nunito text-base font-normal sm:text-lg sm:font-medium">
                Improves social skills - cooperation, communication, and
                conflict resolution
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Image src={Ticked} alt="tick" sizes="auto" />
              <p className="font-Nunito text-base font-normal sm:text-lg sm:font-medium">
                ABL modules promote knowledge retention, engagement and critical
                thinking
              </p>
            </div>
          </div>
          <ClientLink
            href="/login"
            className="button_text btn_lnrbg relative flex w-fit items-center justify-center rounded-full border-none bg-[#2C3D68] px-6 py-4 text-white"
          >
            Sign Up FREE Activity
          </ClientLink>
        </div>
        <div className="mx-auto flex h-fit w-full sm:hidden">
          <Image
            src={SmallPhone}
            alt="small phones"
            sizes="auto"
            className="z-20 translate-x-8"
          />
          <Image
            src={BigPhones}
            alt="big phone"
            sizes="auto"
            className="z-10 -translate-x-8"
          />
        </div>
        <div className="relative hidden h-[356px] w-full sm:block sm:w-1/2">
          <div className="absolute inset-0">
            <Image
              src={BurstStarWhite}
              alt="burst white"
              sizes="auto"
              className="absolute left-[5%] top-[3%] scale-125"
            />
            <Image
              src={BurstPuckerYellow}
              alt="burst yellow"
              sizes="auto"
              className="absolute right-[30%] top-[6%] scale-125"
            />
            <Image
              src={BurstStarOrange}
              alt="burst orange"
              sizes="auto"
              className="absolute bottom-[50%] right-[10%] scale-125"
            />
            <Image
              src={BurstPuckerPeach}
              alt="burst peach"
              sizes="auto"
              className="absolute bottom-[40%] left-[10%] scale-125"
            />
          </div>
        </div>
        <Image
          src={SmallPhone}
          alt="small phones"
          sizes="auto"
          className="absolute -bottom-[22%] right-[29%] hidden scale-125 transition-all duration-500 group-hover:bottom-[6%] sm:block"
        />
        <Image
          src={BigPhones}
          alt="big phone"
          sizes="auto"
          className="absolute -bottom-[51%] right-[10%] hidden scale-125 transition-all duration-500 group-hover:bottom-[6%] sm:block"
        />
      </div>
    </div>
  );
};

export default OurModules;
