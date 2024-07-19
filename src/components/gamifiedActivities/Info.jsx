import React from "react";
import ActivityIntro from "@/assets/activityIntro.svg";
import BookRef from "@/assets/bookRef.svg";
import VideoRef from "@/assets/videoRef.svg";
import PlayButton from "@/assets/playButton.svg";
import Cross from "@/assets/cross.svg";
const Info = ({ action }) => {
  return (
    <>
      <span className="fixed inset-y-0 left-0 top-0 block w-screen bg-black/20 backdrop-blur-sm" />
      <div className="min-h-1/2 absolute inset-x-0 bottom-0 left-0 flex flex-col gap-4 rounded-[10px] !bg-white p-10">
        <div className="flex items-center gap-5">
          <ActivityIntro className="h-9 w-9 rounded-full bg-primary px-2 shadow-cs shadow-primary" />
          <h6 className="body3_b text-secondary">Introduction</h6>
        </div>
        <span className="block h-1 w-40 rounded-full bg-primary shadow-cs shadow-primary" />
        <p className="body_4 text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex items-center gap-5">
          <BookRef className="h-9 w-9 rounded-full bg-[#3AA176] px-2 shadow-cs shadow-[#3AA176]" />
          <h6 className="body3_b text-secondary">Book Reference</h6>
        </div>
        <span className="block h-1 w-40 rounded-full bg-[#3AA176] shadow-cs shadow-[#3AA176]" />
        <div className="flex items-center gap-5">
          <span className="block h-[51px] w-[152px] rounded-md bg-grey_2" />
          <div>
            <p className="body3_b text-black">Book Name</p>
            <p className="body_5 text-grey_1">Auther Name</p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <VideoRef className="h-9 w-9 rounded-full bg-[#F8BF3B] px-2 shadow-cs shadow-[#F8BF3B]" />
          <h6 className="body3_b text-secondary">Video Reference</h6>
        </div>
        <span className="block h-1 w-40 rounded-full bg-[#F8BF3B] shadow-cs shadow-[#F8BF3B]" />
        <div className="flex items-center gap-5">
          <div className="grid h-[51px] w-[152px] place-items-center rounded-md bg-grey_2">
            <PlayButton />
          </div>
          <div>
            <p className="body3_b text-black">Video Tittle</p>
            <p className="body_5 text-grey_1">Channel Name</p>
          </div>
        </div>
        <button
          onClick={action}
          className="center-x absolute -top-16 grid w-fit place-items-center rounded-full bg-grey_2 bg-grad_1 p-2"
        >
          <Cross />
        </button>
      </div>
    </>
  );
};

export default Info;
