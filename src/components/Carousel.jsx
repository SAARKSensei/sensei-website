"use client";
import { useState, useEffect, useRef, useContext, createContext } from "react";
import Image from "next/image";
import { comments } from "@/utils/data";
import arrow from "@/assets/rightArrow.svg";
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
        className="flex m-[55px] mt-0 z-0 transition-transform ease-out duration-1000"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        <CarouselContext.Provider value={{ curr }}>
          {children}
        </CarouselContext.Provider>
      </div>
      <div className="absolute z-[1] mb-[55px] -inset-10 inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="w-[60px] h-[60px] max-md:w-[40px] max-md:h-[40px] rounded-full shadow bg-primary hover:bg-opacity-50 bg-opacity-25"
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
          className="w-[60px] h-[60px] max-md:w-[40px] max-md:h-[40px] rounded-full shadow bg-primary hover:bg-opacity-50 bg-opacity-25"
        >
          {" "}
          <Image src={arrow} alt="arrow" sizes="auto" className="mx-auto " />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {comments.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurr(i)}
              className={`
                  transition-all w-3 h-3 bg-primary opacity-25 rounded-full
                  ${curr === i ? "p-2" : "bg-opacity-50"}
                `}
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
      className={`p-8  ${
        curr === index ? "z-[10] !opacity-100 !scale-100 !blur-0" : ""
      } scale-50 opacity-[92%] my-auto h-fit blur-[3.5px] bg-white transition-all ease-out duration-1000 flex flex-col gap-2 w-full min-w-[100%] rounded-[20px] shadow-cs`}
    >
      {children}
    </div>
  );
};
export default Carousel;
