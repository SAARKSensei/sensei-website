"use client";

import { useState, useEffect } from "react";

const TypingAni = ({ texts, delay }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ind, setInd] = useState(0);
  useEffect(() => {
    let d = currentIndex === texts[ind].length ? 1000 : delay;
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
  }, [currentIndex, delay, ind, texts]);
  return (
    <span className="bg-grad_1 inline-block min-w-[200px] max-w-fit bg-clip-text text-transparent">
      {currentText}
    </span>
  );
};

export default TypingAni;
