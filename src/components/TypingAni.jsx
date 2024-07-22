"use client";

import { searches } from "@/utils/data";
import { useState, useEffect } from "react";
import { TiTick } from "react-icons/ti";

const TypingAni = ({ texts, speed, delay }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ind, setInd] = useState(0);
  const [duration, setDuration] = useState(delay);
  useEffect(() => {
    let d = speed;
    if (currentIndex === texts[ind].length) {
      d = duration;
      setDuration(delay);
    } else setDuration((pre) => pre - speed);
    const timeout = setTimeout(() => {
      if (currentIndex === texts[ind].length) {
        let cci = ind === texts.length - 1 ? 0 : ind + 1;
        setCurrentText(texts[cci][0]);
        setCurrentIndex(1);
        setInd(cci);
      } else {
        setCurrentText((prevText) => prevText + texts[ind][currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }, d);
    return () => clearTimeout(timeout);
  }, [currentIndex, delay, ind, texts, speed, duration]);
  return <>{currentText}</>;
};

export const FadeInOut = ({ searches }) => {
  const [searchIndex, setSearchIndex] = useState(0);
  const delay = 4000 / searches.length;

  useEffect(() => {
    let d = delay;
    if (searchIndex >= searches.length) d = 1000;
    const timeout = setTimeout(() => {
      if (searchIndex >= searches.length) {
        setSearchIndex(0);
      } else {
        setSearchIndex((prevIndex) => prevIndex + 1);
      }
    }, d);
    return () => clearTimeout(timeout);
  }, [searchIndex, delay, searches.length]);
  return (
    <>
      {searches.map((s, index) => (
        <div
          key={index}
          style={{
            color: s.color,
            border: `1px solid ${s.color}`,
            backgroundColor: `${s.color}15`,
          }}
          className={` ${searchIndex > index ? "opacity-100" : "opacity-0"} flex w-fit items-center gap-2 rounded-md px-3 py-2 transition-opacity duration-1000 ease-in-out sm:gap-2.5`}
        >
          <p className="font-Nunito text-xs font-normal sm:text-lg">{s.text}</p>
          <TiTick />
        </div>
      ))}
    </>
  );
};
export default TypingAni;
