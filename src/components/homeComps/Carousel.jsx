"use client";
import { useState, useEffect, useRef, useContext, createContext } from "react";
import Image from "next/image";
import { comments } from "@/utils/data";
import arrow from "@/assets/rightArrow.svg?url";
const CarouselContext = createContext();

const Carousel = ({ children }) => {
  const [curr, setCurr] = useState(0);
  const slideInterval = useRef(null);

  const startInterval = () => {
    slideInterval.current = setInterval(next, 5000);
  };

  const stopInterval = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
      slideInterval.current = null;
    }
  };

  const prev = () => {
    stopInterval();
    setCurr((curr) => (curr === 0 ? comments.length - 1 : curr - 1));
    startInterval();
  };

  const next = () => {
    stopInterval();
    setCurr((curr) => (curr === comments.length - 1 ? 0 : curr + 1));
    startInterval();
  };

  useEffect(() => {
    startInterval();
    return stopInterval;
  }, []);

  return (
    <div className="relative">
      <div
        className="z-0 m-[55px] mt-0 flex transition-transform duration-1000 ease-out"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        <CarouselContext.Provider value={{ curr }}>
          {children}
        </CarouselContext.Provider>
      </div>
      <div className="absolute -inset-10 z-[1] mb-[55px] flex items-center justify-between p-4 max-sm:inset-0">
        <button
          onClick={prev}
          className="h-[60px] w-[60px] rounded-full bg-primary bg-opacity-25 shadow hover:bg-opacity-50 max-md:h-[40px] max-md:w-[40px]"
        >
          {" "}
          <Image
            src={arrow}
            alt="arrow"
            sizes="auto"
            className="mx-auto rotate-180"
          />
        </button>
        <button
          onClick={next}
          className="h-[60px] w-[60px] rounded-full bg-primary bg-opacity-25 shadow hover:bg-opacity-50 max-md:h-[40px] max-md:w-[40px]"
        >
          {" "}
          <Image src={arrow} alt="arrow" sizes="auto" className="mx-auto" />
        </button>
      </div>

      <div className="absolute bottom-4 left-0 right-0">
        <div className="flex items-center justify-center gap-2">
          {comments.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurr(i)}
              className={`h-3 w-3 rounded-full bg-primary opacity-25 transition-all ${curr === i ? "p-2" : "bg-opacity-50"} `}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export const CarouselItemWraper = ({ children, index }) => {
  const { curr } = useContext(CarouselContext);
  return (
    <div
      className={`p-8 ${
        curr === index ? "z-[10] !scale-100 !opacity-100 !blur-0" : ""
      } my-auto flex h-fit w-full min-w-[100%] scale-50 flex-col gap-2 rounded-[20px] bg-white opacity-[92%] shadow-cs blur-[3.5px] transition-all duration-1000 ease-out`}
    >
      {children}
    </div>
  );
};
export default Carousel;
