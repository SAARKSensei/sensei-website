"use client";
import React, { useEffect, useRef, useState } from "react";
import stars from "../../Images/BGstar.svg";
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
      className="min-h-[600px] p-6 md:p-10 min-[1300px]:p-20  relative"
    >
      <span className="left-0 top-0 absolute w-full h-full z-[-10] bg-gradient-to-b from-[#2C3D68] to-[#0764A7] rrounded-[calc(4vw)]" />
      <span
        style={{
          backgroundImage: `url(${stars.src})`,
          // backgroundPosition: `${pos.x}px ${pos.y}px`,
        }}
        className="absolute left-0 top-0 bbg-[url('../../Images/BGstar.svg')] z-[-1] bg-repeat bbg-stars w-screen h-full "
      />
      {children}
    </div>
  );
};

export default Animatebg;
