"use client";
// import { GlobalContext } from "@/context";
import React, { useState, useEffect, useCallback } from "react";
import ReactPlayer from "react-player";

const VideoPlay = () => {
  return (
    <div className="relative h-0 w-full max-w-[300px] overflow-hidden pt-[min(177.77%,533px)]">
      <ReactPlayer
        className="absolute left-0 top-0"
        url={"https://youtube.com/shorts/rj4aNyni_uk?si=xNE1mSz_UpmPWwyb"}
        autoplay
        loop={true}
        muted
        playing={true}
        height="100%"
        width="100%"
      />
    </div>
  );
};
export const Bigplayer = ({ url }) => {
  return (
    <div className="relative mb-4 pt-[56.25%]">
      <ReactPlayer
        className="absolute left-0 top-0"
        url={url}
        autoplay
        loop={true}
        muted
        controls={true}
        playing={true}
        height="100%"
        width="100%"
      />
    </div>
  );
};

export default VideoPlay;
