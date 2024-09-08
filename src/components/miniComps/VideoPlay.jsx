"use client";
// import Video from "next-video";
import React from "react";
import ReactPlayer from "react-player/youtube";
const VideoPlay = () => {
  return (
    <div className="relative h-0 w-full overflow-hidden pt-[min(177.77%,733px)]">
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
      {/* <iframe
        src={url}
        className="absolute left-0 top-0"
        width="100%"
        height="100%"
        playing={true}
        loop={true}
        controls={false}
        allow="autoplay"
      ></iframe> */}
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
// export const Muxplayer = ({ url }) => {
//   return (
//     <Video
//       className="max-w-[300px]"
//       src={url}
//       autoplay
//       loop={true}
//       muted
//       controls={false}
//       playing={true}
//       style={{ aspectRatio: 0.5625 }}
//       height="100%"
//       width="100%"
//     />
//   );
// };
export default VideoPlay;
