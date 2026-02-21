"use client";

import React, { useEffect, useState } from "react";
import { useParams, useSearchParams, useRouter } from "next/navigation";
import Activities from "@/components/Modules/Activities";
import { getSubColour } from "@/utils/logic";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";
import Person1 from "@/assets/people/person1.svg?url";
import Person2 from "@/assets/people/person2.svg?url";
import Person3 from "@/assets/people/person3.svg?url";
import Person4 from "@/assets/people/person4.svg?url";
import Image from "next/image";
import TRTopology from "@/assets/in-Use/TRTopology.svg?url";
import CStar from "@/assets/in-Use/CStar.svg?url";
import LStar from "@/assets/in-Use/LStar.svg?url";
import BLStar from "@/assets/in-Use/BLStar.svg?url";


export default function SubjectPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();

  const subjectName = searchParams?.get("name") || "";
  const subjectId = params?.id;

  const [modules, setModules] = useState([]);
  const [colours, setColours] = useState({});
  const [locked, setLocked] = useState(true);
  const [customUserData, setCustomUserData] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!subjectId) {
      setLoading(false);
      return;
    }

    try {
      const rawModules = localStorage.getItem(`subject_modules_${subjectId}`);
      const rawLocked = localStorage.getItem(`subject_locked_${subjectId}`);
      const rawCustom = localStorage.getItem(`subject_custom_${subjectId}`);

      if (rawModules) {
        const parsed = JSON.parse(rawModules);
        setModules(parsed || []);
        setColours(getSubColour(subjectName || (parsed[0]?.subjectName || "")));
      } else {
        // no modules in localStorage — optional: try fetching modules from API here
        console.warn("No modules for subject in localStorage:", subjectId);
      }

      if (rawLocked !== null) {
        setLocked(JSON.parse(rawLocked));
      } else {
        // default behavior (if dashboard set locked=true when no purchase)
        setLocked(true);
      }

      setCustomUserData(rawCustom ? JSON.parse(rawCustom) : false);
    } catch (e) {
      console.error("Error reading subject data from localStorage", e);
    } finally {
      setLoading(false);
    }
  }, [subjectId, subjectName]);

  if (loading) {
    return <div className="flex h-40 items-center justify-center">Loading modules…</div>;
  }

  return (
    <>
   <div className="relative p-6 mt-[90px] bg-[#FFFBF0] min-h-screen w-full ">
    <Image
      src={CStar}
      alt="star"
      width={40}
      height={40}
      className="absolute left-[590px] top-[150px]"
    />
     <Image
      src={LStar}
      alt="star"
      width={25}
      height={25}
      className="absolute right-[220px] top-[130px]"
    />
     <Image
      src={BLStar}
      alt="star"
      width={50}
      height={50}
      className="absolute left-[10px] bottom-[595px]"
    />
     <img
        src={TRTopology.src}
        alt="bg"
        className="absolute mt-[-50px] right-20 w-[900px] opacity-100 pointer-events-none select-none"
      />
      <div className="mb-6">
        <button onClick={() => router.push("/dashboard")} className="cursor-pointer font-Nunito font-normal text-[18px] leading-[25px] text-[#FF8B13] flex items-center gap-2">
          <ArrowLeft size={22} strokeWidth={2.5} />
                    <span className="font-semibold text-[20px] font-Nunito leading-[28px]">Back</span>
        </button>
      </div>
      {/* MAIN TWO-COLUMN LAYOUT */}
<div className="flex w-full justify-between gap-10 mt-6  pr-[250px]">

  {/* LEFT SUBJECT INFO BLOCK */}
  <div className="w-[55%] ml-[100px] max-w-[600px] rounded-b-[12px] p-5 flex flex-col gap-5">

    {/* AGE GROUP */}
    <div className="flex items-center gap-2">
      <div className="w-[32px] h-[32px] bg-white rounded-[3px] border border-[#FF8B13] flex items-center justify-center">
        <span className="text-[#FF8B13] text-[16px] font-bold">🎂</span>
      </div>
      <p className="font-Nunito font-bold text-[16px] text-[#333333]">5–10 Years</p>
    </div>

    {/* SUBJECT NAME */}
    <h2 className="font-Nunito font-black text-[42px] leading-[57px] text-[#2C3D68]">
      {subjectName}
    </h2>

    {/* DESCRIPTION */}
    <p className="font-Nunito font-semibold text-[16px] leading-[22px] text-[#666]">
      Hey there, feeling fanatics! Are you ready to embark on an epic adventure
      and become a Master of Feelings? This amazing journey will take you deep
      into the world of emotions.
    </p>

    {/* ACTIVITY INFO */}
    <div className="flex flex-col gap-2">

      <div className="flex items-start gap-1">
        <p className="font-Nunito font-bold text-[18px] text-[#666]">Interactive Activity :</p>
        <p className="font-Nunito font-extrabold text-[18px] text-[#FF8B13]">120+</p>
      </div>

      <div className="flex items-start gap-1">
        <p className="font-Nunito font-bold text-[18px] text-[#666]">Gamified Activity :</p>
        <p className="font-Nunito font-extrabold text-[18px] text-[#FF8B13]">12+</p>
      </div>

    </div>

    {/* PLAYERS */}
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-2">
        <Image className="-ml-3 h-7 w-7 rounded-full" src={Person1} width={30} height={30} alt="" />
        <Image className="-ml-3 h-7 w-7 rounded-full" src={Person2} width={30} height={30} alt="" />
        <Image className="-ml-3 h-7 w-7 rounded-full" src={Person3} width={30} height={30} alt="" />
        <Image className="-ml-3 h-7 w-7 rounded-full" src={Person4} width={30} height={30} alt="" />
        <p className="font-Nunito font-bold text-[16px] text-[#666]">654+</p>
      </div>
      <button className="w-[32px] h-[32px] rounded-[8px]  flex items-center justify-center"> <svg width="20" height="20" stroke="#FF8B13" strokeWidth="2" fill="none"> <path d="M10 18s-6-4.35-6-9A4 4 0 0110 5a4 4 0 016 4c0 4.65-6 9-6 9z" /> </svg> </button>
    </div>
  </div>

  {/* RIGHT-SIDE CTA RECTANGLE (MATCH Figma) */}
  <div className="relative ml-[-100px] w-[528px] h-[391px] rounded-[20px] 
      bg-gradient-to-r from-[#EF5F3D] via-[#F97A23] to-[#F8BF3B]
      p-6 shadow-md overflow-hidden">

      <h1 className="font-Nunito font-extrabold text-white text-[22px] leading-[30px] w-[70%] mb-6">
        Teach your kid the <br/>
        Life-skill education <br/>
        they need.
      </h1>

      <Link href="/child-details" 
            className="bg-white text-black font-Nunito font-bold rounded-[40px] px-6 py-3 text-[20px] shadow-md w-fit">
        Enroll Your Child
      </Link>

      <Image
        src="/images/addchild.png"
        width={280}
        height={280}
        alt="child"
        className="absolute bottom-0 right-0 max-w-[55%] max-h-[110%] object-contain"
      />
  </div>

</div>


      

      

      {modules && modules.length > 0 ? (
        <div className="mt-4">
          <Activities
            modules={modules}
            colours={colours}
            locked={locked}
            hidden={""}
            subjectId={subjectId}
            customUserData={customUserData}
          />
        </div>
      ) : (
        <div className="mt-6 text-gray-500">No modules available for this subject.</div>
      )}
    </div>
    <Footer />
    </>
  );
}
