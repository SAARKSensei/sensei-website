"use client";
import React, { useEffect, useRef, useState } from "react";
import stars from "@/Images/BGstar.svg";
const Animatebg = ({ children }) => {
  const bgRef = useRef(null);

  // const [pos, setPos] = useState({ x: 0, y: 0 });
  // useEffect(() => {
  //   const handleMouseMove = (e) => {
  //     setPos({ x: -e.offsetX, y: -e.offsetY });
  //   };

  //   const el = bgRef.current;
  //   el.addEventListener("mousemove", handleMouseMove);

  //   // Cleanup function to remove event listener
  //   return () => {
  //     el.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, []);

  return (
    <div
      ref={bgRef}
      className="relative min-h-[600px] p-6 md:p-10 min-[1300px]:p-20"
    >
      <span className="rrounded-[calc(4vw)] absolute left-0 top-0 z-[-10] h-full w-full bg-gradient-to-b from-[#2C3D68] to-[#0764A7]" />
      <span
        style={{
          backgroundImage: `url(${stars.src})`,
          // backgroundPosition: `${pos.x}px ${pos.y}px`,
        }}
        className="bbg-[url('../../Images/BGstar.svg')] bbg-stars absolute left-0 top-0 z-[-1] h-full w-screen bg-repeat"
      />
      {children}
    </div>
  );
};

export default Animatebg;
