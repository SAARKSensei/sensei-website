import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Mainlogo from "@/assets/mainlogo.svg";
import ParentRole from "@/assets/parentRole.svg";
import pause from "@/assets/pause.svg?url";
import mute from "@/assets/sound-off.svg?url";
import replay from "@/assets/replay.svg?url";
import { getTextToAudio } from "@/config/textToSpeech";
const TextReader = ({ text, role }) => {
  const [timer, setTimer] = useState(0);
  const [audio, setAudio] = useState(-1);
  const [play, setPlay] = useState(false);
  const [muted, setMuted] = useState(false);
  const audioRef = useRef(null);
  useEffect(() => {
    getTextToAudio(text).then((response) => {
      setAudio(response);
    });
  }, [text]);
  const togglePlay = () => {
    if (play) {
      audioRef.current.pause();
      setPlay(false);
    } else {
      audioRef.current.play();
    }
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between gap-4">
        <div className="flex items-center gap-2">
          {role === "Child" ? (
            <Mainlogo className="h-8 w-8 rounded-full bg-secondary text-white" />
          ) : (
            <ParentRole className="h-8 w-8 rounded-full bg-[#3AA176] text-white" />
          )}
          <h5 className="h5_b text-secondary">
            {role === "Child" ? "Sensei" : "Parents role"}
          </h5>
        </div>
        {audio?.audio && (
          <div className="flex gap-2">
            <Image
              src={replay}
              onClick={() => {
                audioRef.current.currentTime = 0;
                audioRef.current.play();
              }}
              alt="replay"
            />
            <Image src={pause} onClick={togglePlay} alt="pause" />
            <Image
              src={mute}
              onClick={() => setMuted((pre) => !pre)}
              alt="mute"
            />
          </div>
        )}
      </div>
      <div className="max-w-full text-wrap text-grey_1">
        {text.split(" ").map((segment, index) => (
          <span
            key={index}
            className={`${timer == 0 || (audio.hasOwnProperty("timestamps") && audio.timestamps[index] && audio.timestamps[index].start <= timer) ? "text-primary" : "text-primary/35"}`}
          >
            {segment.length > 1 &&
              index > 1 &&
              segment[segment.length - 1] == "." &&
              !isNaN(segment[0]) && <br />}
            {segment}{" "}
          </span>
        ))}
      </div>
      {audio?.audio && (
        <audio
          ref={audioRef}
          muted={muted}
          onPlaying={() => setPlay(true)}
          onTimeUpdate={(e) => {
            setTimer(e.target.currentTime);
            console.log(e.target.currentTime);
          }}
        >
          <source src={audio.audio} />
        </audio>
      )}
    </div>
  );
};

export default TextReader;
