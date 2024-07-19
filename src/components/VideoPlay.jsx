"use client";
// import { GlobalContext } from "@/context";
import React, { useState, useEffect, useCallback } from "react";
import ReactPlayer from "react-player";

const VideoPlay = () => {

    return (
        <div className="relative h-full">
            <div className="flex w-full h-full items-center justify-center>">
                <ReactPlayer
                    url={"https://youtube.com/shorts/rj4aNyni_uk?si=xNE1mSz_UpmPWwyb"}
                    autoplay
                    loop={true}
                    muted
                    playing={true}
                    height="100%"
                    width="100%"
                />
            </div>
        </div >
    );
};

export default VideoPlay;