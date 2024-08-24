import React from "react";
import wrong from "@/assets/wrong.svg?url";
import right from "@/assets/right.svg?url";
import Image from "next/image";

const Popup = ({ messege, status, action }) => {
  return (
    <div className="absolute -inset-10 backdrop-blur-[2px]">
      <div
        className={`popup relative bottom-1/2 top-1/2 mx-auto flex h-fit min-w-[min(95vw,360px)] max-w-[360px] -translate-y-1/2 flex-col gap-5 rounded-[20px] bg-secondary p-4 ${status ? "text-[#64FF6A]" : "text-primary"}`}
      >
        <div className="flex items-center gap-4">
          <Image src={status ? right : wrong} alt="status" />
          <h5 className="body1_b">{status ? "Nice !" : "Let's do again"}</h5>
        </div>
        <p className="body_3">{!status ? messege.wrong : messege.right}</p>

        <button
          onClick={action}
          className="h5_b mx-auto w-full rounded-lg border-b-4 border-[#CD9003] bg-[#F8BF3B] py-2 text-secondary"
        >
          {status ? "Next" : "Try Again"}
        </button>
      </div>
    </div>
  );
};

export default Popup;
