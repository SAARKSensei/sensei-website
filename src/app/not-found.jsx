import React from "react";
import ClientLink from "@/components/miniComps/ClientLink";
import Background from "@/components/miniComps/BackGround";
import Pana from "@/assets/pana.svg";
const Page = () => {
  return (
    <div className="container relative mx-auto flex items-center justify-center p-4 py-10 max-md:flex-wrap">
      <Background />
      <div className="flex h-fit max-w-[400px] flex-col gap-2">
        <h2 className="h2 text-secondary">Ooooppssss!!!</h2>
        <p className="body_1 text-grey_1">
          The page you are looking for does not exists or an other error
          occurred
        </p>
        <ClientLink
          href={"/"}
          className="flex h-12 w-fit cursor-pointer items-center rounded-[50px] bg-grad_1 px-6 py-3 text-lg font-extrabold text-white md:h-14 md:max-w-fit md:px-8 md:py-4"
        >
          Go Back to Home
        </ClientLink>
      </div>
      <Pana className="max-w-[90vw]" />
    </div>
  );
};

export default Page;
