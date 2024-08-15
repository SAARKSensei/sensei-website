import React from "react";
import f1 from "@/Images/f1.svg";
import f2 from "@/Images/f2.svg";
import f3 from "@/Images/f3.svg";
import f4 from "@/Images/f4.svg";
import Image from "next/image";
import Animatebg from "@/Animatebg";
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
      <h1 className="font-nunito px-4 py-4 pb-5 pl-4 text-left font-Nunito text-4xl font-bold text-white md:px-0 lg:text-6xl lg:font-extrabold">
        What we offer to Schools
      </h1>
      <div className="scroll max-w-screen flex items-center gap-10 overflow-x-scroll px-4 md:px-0">
        <div className="min-h-[257px] min-w-[239px] md:min-h-[315px] md:min-w-[308px]">
          <Image
            src={f1}
            alt="f1"
            className="rounded-lg border border-white py-4 md:py-10"
            sizes="auto"
          />
          <h1 className="grad-bg-2 max-w-[308px] rounded-lg p-2 px-3 text-xl text-white md:p-4">
            Acitvity based Learning Modules
          </h1>
        </div>

        <div className="min-h-[257px] min-w-[239px] md:min-h-[315px] md:min-w-[308px]">
          <Image
            src={f2}
            alt="f2"
            className="rounded-lg border border-white py-4 md:py-10"
            sizes="auto"
          />
          <h1 className="grad-bg-2 max-w-[308px] rounded-lg p-2 px-3 text-xl text-white md:p-4">
            Upskilling your Teacher/Counsellor{" "}
          </h1>
        </div>
        <div className="min-h-[257px] min-w-[239px] md:min-h-[315px] md:min-w-[308px]">
          <Image
            src={f3}
            alt="f3"
            className="rounded-lg border border-white py-4 md:py-10"
            sizes="auto"
          />
          <h1 className="grad-bg-2 max-w-[308px] rounded-lg p-2 px-3 text-xl text-white md:p-4">
            Customer Relationship Management Tool{" "}
          </h1>
        </div>
        <div className="min-h-[257px] min-w-[239px] md:min-h-[315px] md:min-w-[308px]">
          <Image
            src={f4}
            alt="f4"
            className="rounded-lg border border-white py-4 md:py-10"
            sizes="auto"
          />
          <h1 className="grad-bg-2 max-w-[308px] rounded-lg p-2 px-3 text-xl text-white md:p-4">
            Personalized Student Life-skill Report
          </h1>
        </div>
      </div>
      <h1 className="p-4 pt-10 text-left font-Nunito text-4xl font-bold text-white md:p-0 md:pb-5 md:pt-10 lg:text-6xl lg:font-extrabold min-[1300px]:pt-20">
        How are we doing it?
      </h1>
      <div className="max-w-screen flex flex-wrap items-center md:gap-5 lg:gap-10">
        {howdoing.map((cur) => (
          <div key={cur.id} className="max-w-[393px]">
            <div className="flex items-center">
              <span className="h-[54px] w-[71px] rounded-r-lg bg-[#FF8B13] p-2 text-right text-2xl font-bold text-white md:text-4xl">
                {cur.id}
              </span>
              <h1 className="rounded-lg p-2 px-3 text-xl text-white md:p-4">
                {cur.heading}
              </h1>
            </div>
            <p className="p-4 font-light text-white md:px-0">{cur.content}</p>
          </div>
        ))}
        ;
      </div>
    </Animatebg>
  );
};

export default Facilities;
