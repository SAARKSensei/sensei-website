import React from "react";
import Userjourney from "@/assets/userjurney.svg";
import Mobilejourney from "@/assets/mobilejurney.svg";
const Journey = () => {
  return (
    <>
      <div className="max-sm:hidden">
        <Userjourney />
      </div>
      <div className="sm:hidden">
        <Mobilejourney />
      </div>
    </>
  );
};

export default Journey;
