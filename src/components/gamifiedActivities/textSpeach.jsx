import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Mainlogo from "@/assets/in-Use/mainlogo.svg";
import ParentRole from "@/assets/in-Use/parentRole.svg";
import pause from "@/assets/in-Use/pause.svg?url";
import mute from "@/assets/in-Use/sound-off.svg?url";
import replay from "@/assets/in-Use/replay.svg?url";
import { getTextToAudio } from "@/config/textToSpeech";

const TextReader = ({ text, role }) => {
  const [timer, setTimer] = useState(0);
  const [audio, setAudio] = useState(-1);
  const [play, setPlay] = useState(false);
  const [muted, setMuted] = useState(false);
  const audioRef = useRef(null);
  
  // Format text by handling pipe separators
  const formatTextWithLineBreaks = (text) => {
    if (!text) return [];
    
    // Split by pipe symbol and trim each segment
    return text.split("|").map(segment => segment.trim());
  };
  
  const formattedSegments = formatTextWithLineBreaks(text);
  
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
        {formattedSegments.map((segment, index) => (
          <p
            key={index}
            className={`${
              timer == 0 || (audio?.timestamps && audio.timestamps[index] && audio.timestamps[index].start <= timer) 
                ? "text-[#333333]" 
                : "text-primary/35"
            } mb-3`}
          >
            {segment}
          </p>
        ))}
      </div>
      {audio?.audio && (
        <audio
          ref={audioRef}
          muted={muted}
          onPlaying={() => setPlay(true)}
          onTimeUpdate={(e) => {
            setTimer(e.target.currentTime);
          }}
        >
          <source src={audio.audio} />
        </audio>
      )}
    </div>
  );
};

export default TextReader;