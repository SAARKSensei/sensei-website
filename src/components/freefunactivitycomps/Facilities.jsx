import React from "react";
import f1 from "../../Images/f1.svg";
import f2 from "../../Images/f2.svg";
import f3 from "../../Images/f3.svg";
import f4 from "../../Images/f4.svg";
import Image from "next/image";
import Animatebg from "./Animatebg";
const Facilities = () => {
  const howdoing = [
    {
      id: 1,
      heading: "Comprehensive Module",
      content:
        "Sensei's module covers essential life skills, mental wellness, and moral values, ensuring students are well-prepared for life's challenges.",
    },
    {
      id: 2,
      heading: "Interactive Learning:",
      content:
        "Sensei's module covers essential life skills, mental wellness, and moral values, ensuring students are well-prepared for life's challenges.",
    },
    {
      id: 3,
      heading: "Expert Guidance:",
      content:
        "Our team of experienced psychologist provides personalized support to address academic challenges and foster emotional resilience.",
    },
    {
      id: 4,
      heading: "Expert Guidance",
      content:
        "Sensei offers resources like podcasts, case studies, workshops, and personalized growth reports to support young parents in their child's development.",
    },
    {
      id: 5,
      heading: "Personalized Strategic Growth Report:",
      content:
        "Our strategic growth reports provide valuable insights into students' progress, helping parents understand their strengths and weaknesses.",
    },
  ];
  return (
    <Animatebg>
      <h1 className="px-4 pb-5 md:px-0 pl-4 text-white font-nunito  py-4 font-Nunito text-4xl lg:text-6xl lg:font-extrabold font-bold  text-left ">
        What we offer to Schools
      </h1>
      <div className="px-4 md:px-0 scroll flex max-w-screen overflow-x-scroll items-center gap-10">
        <div className="min-h-[257px] min-w-[239px] md:min-h-[315px] md:min-w-[308px] ">
          <Image
            src={f1}
            alt="f1"
            className=" border rounded-lg border-white py-4 md:py-10"
            sizes="auto"
          />
          <h1 className="text-white max-w-[308px] text-xl rounded-lg  grad-bg-2 p-2 md:p-4 px-3">
            Acitvity based Learning Modules
          </h1>
        </div>

        <div className="min-h-[257px] min-w-[239px] md:min-h-[315px] md:min-w-[308px] ">
          <Image
            src={f2}
            alt="f2"
            className=" border rounded-lg border-white py-4 md:py-10"
            sizes="auto"
          />
          <h1 className="text-white max-w-[308px] text-xl rounded-lg  grad-bg-2 p-2 md:p-4 px-3">
            Upskilling your Teacher/Counsellor{" "}
          </h1>
        </div>
        <div className="min-h-[257px] min-w-[239px] md:min-h-[315px] md:min-w-[308px]">
          <Image
            src={f3}
            alt="f3"
            className=" border rounded-lg border-white py-4 md:py-10"
            sizes="auto"
          />
          <h1 className="text-white max-w-[308px] text-xl rounded-lg  grad-bg-2 p-2 md:p-4 px-3 ">
            Customer Relationship Management Tool{" "}
          </h1>
        </div>
        <div className="min-h-[257px] min-w-[239px] md:min-h-[315px] md:min-w-[308px]">
          <Image
            src={f4}
            alt="f4"
            className=" border rounded-lg border-white py-4 md:py-10"
            sizes="auto"
          />
          <h1 className="text-white max-w-[308px] text-xl rounded-lg  grad-bg-2 p-2 md:p-4 px-3">
            Personalized Student Life-skill Report
          </h1>
        </div>
      </div>
      <h1 className=" text-white font-Nunito p-4 pt-10  md:p-0 md:pt-10 md:pb-5 min-[1300px]:pt-20  text-4xl lg:text-6xl lg:font-extrabold font-bold  text-left ">
        How are we doing it?
      </h1>
      <div className=" flex max-w-screen flex-wrap items-center md:gap-5 lg:gap-10">
        {howdoing.map((cur) => (
          <div key={cur.id} className="max-w-[393px] ">
            <div className="flex  items-center">
              <span className="h-[54px] text-white rounded-r-lg font-bold p-2 text-right  w-[71px] bg-[#FF8B13] text-2xl md:text-4xl">
                {cur.id}
              </span>
              <h1 className="text-white text-xl rounded-lg p-2 md:p-4 px-3 ">
                {cur.heading}
              </h1>
            </div>
            <p className="text-white p-4 md:px-0 font-light">{cur.content}</p>
          </div>
        ))}
        ;
      </div>
    </Animatebg>
  );
};

export default Facilities;
