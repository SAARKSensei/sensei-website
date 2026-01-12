"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Subject from "@/components/Modules/Subject";
import Background1 from "@/components/miniComps/BackGround.jsx";
import { getSubColour } from "@/utils/logic";
import Activities from "@/components/Modules/Activities";
import axios from "axios";
import { useSession } from "next-auth/react";
import Footer from "@/components/Footer";
import { ArrowLeft, AlertCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import Btopology from "@/assets/in-Use/BTopology.svg?url";
import TRTopology from "@/assets/in-Use/TRTopology.svg?url";
import CStar from "@/assets/in-Use/CStar.svg?url";
import LStar from "@/assets/in-Use/LStar.svg?url";
import BLStar from "@/assets/in-Use/BLStar.svg?url";
import emotionalImg from "@/assets/in-Use/emotionalimg.svg?url";
import trialImg from "@/assets/in-Use/trialimg.svg?url";
import socialImg from "@/assets/in-Use/socialimg.svg?url";
import ethicsImg from "@/assets/in-Use/ethicsimg.svg?url";
import Person1 from "@/assets/people/person1.svg?url";
import Person2 from "@/assets/people/person2.svg?url";
import Person3 from "@/assets/people/person3.svg?url";
import Person4 from "@/assets/people/person4.svg?url";

// ============================================
// DASHBOARD CONTROL - CHANGE THIS TO ENABLE/DISABLE
// ============================================
const DASHBOARD_ENABLED = false; // Set to 'false' to disable dashboard, 'true' to enable
// ============================================

// Maintenance Page Component
const MaintenancePage = () => {
  const router = useRouter();
  
  return (
    <div className="min-h-screen bg-[#FFFBF0] flex items-center justify-center p-4 relative">
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
        className="absolute left-[100px] bottom-[190px]"
      />
      
      <img
        src={TRTopology.src}
        alt="bg"
        className="absolute top-10 right-20 w-[1000px] opacity-100 pointer-events-none select-none"
      />
      <img
        src={Btopology.src}
        alt="bg"
        className="absolute bottom-[-300px] right-30 w-[900px] opacity-150 pointer-events-none select-none"
      />

      <button
        onClick={() => router.back()}
        className="absolute top-[100px] left-[60px] flex items-center gap-2 text-[#FF8B13] hover:text-[#e1760c] transition-colors z-20"
      >
        <ArrowLeft size={22} strokeWidth={2.5} />
        <span className="font-semibold text-[20px] font-Nunito leading-[28px]">Back</span>
      </button>

      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center relative z-10">
        <div className="mb-6">
          <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
            <AlertCircle className="w-10 h-10 text-[#FF8B13]" />
          </div>
        </div>
        
        <h1 className="text-3xl font-bold font-Nunito text-[#2C3D68] mb-3">
          Dashboard Temporarily Unavailable
        </h1>
        
        <p className="text-gray-600 font-Nunito mb-6">
          We're currently performing maintenance on our dashboard. 
          We apologize for any inconvenience and appreciate your patience.
        </p>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <p className="text-sm text-blue-800 font-Nunito">
            <strong>Status:</strong> We're working to resolve this as quickly as possible. 
            Please check back shortly.
          </p>
        </div>
        
        <button 
          onClick={() => router.push('/')}
          className="w-full bg-[#FF8B13] hover:bg-[#e1760c] text-white font-bold font-Nunito py-3 px-6 rounded-lg transition-colors"
        >
          Return to Home Page
        </button>
        
        <p className="text-xs text-gray-500 mt-6 font-Nunito">
          If you continue to experience issues, please contact our support team.
        </p>
      </div>
    </div>
  );
};

const UserDashboard = () => {
  const { data: session, status } = useSession();
  const [modules, setModules] = useState([]);
  const [colours, setColours] = useState({});
  const [locked, setLocked] = useState(true);
  const [subjectId, setSubjectId] = useState(0);
  const [subjectData, setSubjectData] = useState([]);
  const [customUserData, setCustomUserData] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [plan, setPlan] = useState("");
  const [childName, setChildName] = useState("");

  const [surveyDataNeedAttention, setSurveyDataNeedAttention] = useState([]);
  const [surveyDataStrong, setSurveyDataStrong] = useState([]);
  const [surveyDataDeveloping, setSurveyDataDeveloping] = useState([]);
  const router = useRouter();

  const SUBJECTS_API = process.env.NEXT_PUBLIC_API_SUBJECTS;

  const selectModule = (sid) => {
    setSubjectId(sid);
    setModules(subjectData[sid]?.modules || []);
    const col = getSubColour(
      subjectData[sid]?.subject?.subjectName ||
        subjectData[sid]?.subjectName ||
        ""
    );
    setColours(col);
  };
  
  const normalize = (str) =>
    (str || "").toString().toLowerCase().replace(/[^a-z0-9]+/g, "");

  const subjectImages = {
    [normalize("Emotional Well-Being")]: (emotionalImg && emotionalImg.src) || emotionalImg,
    [normalize("1-Month Trial @Rs.99")]: (trialImg && trialImg.src) || trialImg,
    [normalize("Self and Social Awareness")]: (socialImg && socialImg.src) || socialImg,
    [normalize("Moral Guidance and Ethics")]: (ethicsImg && ethicsImg.src) || ethicsImg,
  };
  
  const colors = ["#4AA6FF", "#F0ABA4", "#4B926F", "#EC5F3D"];

  const getColor = (i) => {
    return colors[i % colors.length];
  };

  const fetchSubjectData = async () => {
    setLoading(true);
    setError(null);

    try {
      if (status === "loading") return;
      if (status === "unauthenticated") throw new Error("User not authenticated");

      const email = session?.user?.email;
      if (!email) throw new Error("No email found in session");

      console.log("Fetching subject data for:", email);

      let hasUserData = false;
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/parent-users/getPricingPlan?email=${email}`
        );
        console.log("User data response:", res.data);

        if (res.data?.pricingPlan) {
          if (res.data.pricingPlan.name === "No active plan found for this user.") {
            setPlan("Upgrade Now!");
          } else {
            setPlan(res.data.pricingPlan.name);
          }
        }

        if (res.data.childName) {
          setChildName(res.data.childName);
        } else {
          setChildName(session?.user?.name || "User");
        }

        if (res?.data?.pricingPlan?.subjects && res.data.pricingPlan.subjects.length > 0) {
          console.log("Setting user-specific subjects:", res.data.pricingPlan.subjects);
          setSubjectData(res.data.pricingPlan.subjects);
          setCustomUserData(true);
          setLocked(false);
          setModules(res.data.pricingPlan.subjects[0]?.modules || []);
          setColours(getSubColour(res.data.pricingPlan.subjects[0]?.subject?.subjectName || ""));
          hasUserData = true;
        }
      } catch (userDataError) {
        console.error("Error fetching user-specific data:", userDataError);
      }

      if (!hasUserData) {
        try {
          const res = await axios.get(SUBJECTS_API);
          console.log("Subjects response:", res?.data);
          if (res?.data && res.data.length > 0) {
            setSubjectData(res.data);
            setLocked(true);
            setModules(res.data[0]?.modules || []);
            setColours(getSubColour(res.data[0]?.subjectName || ""));
          }
        } catch (generalSubjectsError) {
          console.error("Error fetching subjects:", generalSubjectsError);
          throw new Error("Failed to fetch any subject data");
        }
      }
    } catch (error) {
      console.error("Error in fetchSubjectData:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubjectData();
  }, [status, session]);

  useEffect(() => {
    const strong = localStorage.getItem("SenseiStrongSkills");
    const need = localStorage.getItem("SenseiNeedAttentionSkills");
    const dev = localStorage.getItem("SenseiDevelopingSkills");

    if (strong) setSurveyDataStrong(JSON.parse(strong));
    if (need) setSurveyDataNeedAttention(JSON.parse(need));
    if (dev) setSurveyDataDeveloping(JSON.parse(dev));
  }, []);

  // Check if dashboard is disabled - show maintenance page
  if (!DASHBOARD_ENABLED) {
    return <MaintenancePage />;
  }

  if (status === "loading" || loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (status === "unauthenticated" || error) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-xl text-red-500">
          {error || "Please sign in to access this page"}
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="relative flex flex-col items-center w-full min-h-screen py-10 bg-[#FFFBF0]">
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
          className="absolute left-[100px] bottom-[190px]"
        />
        
        <img
          src={TRTopology.src}
          alt="bg"
          className="absolute top-10 right-20 w-[1000px] opacity-100 pointer-events-none select-none"
        />
        <img
          src={Btopology.src}
          alt="bg"
          className="absolute bottom-[-300px] right-30 w-[900px] opacity-150 pointer-events-none select-none"
        />
        
        <button
          onClick={() => router.back()}
          className="absolute top-[100px] left-[60px] flex items-center gap-2 text-[#FF8B13] hover:text-[#e1760c] transition-colors"
        >
          <ArrowLeft size={22} strokeWidth={2.5} />
          <span className="font-semibold text-[20px] font-Nunito leading-[28px]">Back</span>
        </button>

        {/* Greeting Section */}
        <div className="w-full max-w-[1200px] px-6 mb-8 flex flex-wrap mt-20 md:mt-28 justify-between items-start gap-5">
          <div className="flex flex-col items-start gap-1">
            <p className="h4 text-grey_1">Hello!</p>
            <Link href="/familypage" className="no-underline">
              <p className="h3 font-bold font-Nunito capitalize text-[#2C3D68]">
                {childName || session?.user?.name || "User"}
              </p>
            </Link>
            <p className="body-1 text-grey_1">
              Let&apos;s start your journey to a brighter future.
            </p>
            <div className="inline-flex items-center gap-4 mt-2">
              <div className="font-['Nunito'] text-2xl font-semibold text-[#2C3D68]">
                {plan}
              </div>
              {plan !== "Upgrade Now!" && (
                <div className="inline-flex items-center gap-2 rounded-lg bg-green-100 px-2 py-[3px]">
                  <div className="w-3 h-3 bg-[#3AA176] rounded-full" />
                  <span className="text-sm font-medium text-green-500">
                    Active
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Hero Section */}
          <div className="flex flex-col items-end gap-2 rounded-2xl bg-[#EDF2FA] p-6 shadow-md w-[524px]">
            <div className="flex justify-between w-full">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <p className="text-[24px] font-Nunito font-extrabold text-[#2C3D68]">
                    Trial Plan
                  </p>
                  <div className="flex items-center gap-1 rounded-lg bg-[#D9F9E6] px-2 py-[3px]">
                    <div className="w-2 h-2 rounded-full bg-[#3AA176]" />
                    <p className="text-[14px] font-Nunito font-medium text-[#3AA176]">
                      Active
                    </p>
                  </div>
                </div>
                <p className="italic text-[16px] font-Nunito font-bold text-[#999]">
                  Everyday counts! Keep practicing. Just 2hrs/week.
                </p>
                <p className="text-[16px] font-Nunito font-bold text-[#666]">
                  Valid:{" "}
                  <span className="text-[#FF8B13] font-bold">
                    21 DAYS LEFT
                  </span>
                </p>
              </div>
              <div className="flex items-start gap-1">
                <p className="text-[24px] font-bold text-[#2C3D68]">₹</p>
                <p className="text-[48px] font-extrabold text-[#2C3D68]">99</p>
                <p className="text-[16px] font-Nunito font-bold text-[#999]">/month</p>
              </div>
            </div>
            <Link href="/child-details">
              <button className="mt-4 flex items-center font-Nunito justify-center gap-[10px] rounded-2xl bg-white px-[22px] py-[14px] text-[18px] font-extrabold text-[#FF8B13] shadow-sm">
                Upgrade Plan
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#FF8B13"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>

        {/* Personalized Report */}
        <div className="w-full flex justify-start mt-50">
          <div className="w-full max-w-[500px] bg-[#FFF7F1]/80 backdrop-blur-sm rounded-2xl p-6 mb-10 shadow-sm ml-[250px]">
            <h2
              className="absolute"
              style={{
                left: "25px",
                top: "-20px",
                fontFamily: "Nunito",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "24px",
                lineHeight: "33px",
                textTransform: "uppercase",
                color: "#FF8B13",
              }}
            >
              Personalized Report
            </h2>
            <h2 className="font-extrabold font-Nunito text-[24px] text-black mb-4">
              Life-skills your child shows:
            </h2>

            {/* Legend */}
            <div className="flex items-center gap-6 mb-4">
              <div className="flex items-center gap-1">
                <div className="w-[18px] h-[18px] bg-[#389F78] rounded-full" />
                <span className="font-bold font-Nunito text-[#666]">Strong</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-[18px] h-[18px] bg-[#F4BC37] rounded-full" />
                <span className="font-bold font-Nunito text-[#666]">Developing</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-[18px] h-[18px] bg-[#EC5F3D] rounded-full" />
                <span className="font-bold font-Nunito text-[#666]">Need Attention</span>
              </div>
            </div>
            <div className="flex flex-row items-end gap-6 flex-wrap">
              {/* Strong Skills */}
              <div className="flex flex-row items-center gap-2 w-[155px] h-[96px]">
                <div className="w-2 h-[96px] bg-[#389F78] rounded-[16px]"></div>
                <div className="text-[#333333] font-Nunito font-bold text-[17px] leading-[32px]">
                  Communication<br />
                  Self-awareness<br />
                  Problem Solving
                </div>
              </div>

              {/* Developing Skills */}
              <div className="flex flex-row items-center gap-2 w-[201px] h-[96px] hidden">
                <div className="w-2 h-[96px] bg-[#F4BC37] rounded-[16px]"></div>
                <div className="text-[#333333] font-Nunito font-bold text-[17px] leading-[32px]">
                  Decision Making<br />
                  Critical Thinking<br />
                  Coping with Emotions
                </div>
              </div>

              {/* Need Attention Skills */}
              <div className="flex flex-row items-center gap-2 w-[247px] h-[128px]">
                <div className="w-2 h-[128px] bg-[#EC5F3D] rounded-[16px]"></div>
                <div className="text-[#333333] font-Nunito font-bold text-[17px] leading-[32px]">
                  Creativity<br />
                  Empathy<br />
                  Stress Management<br />
                  Interpersonal Relationships
                </div>
              </div>
            </div>

            {/* Skill Lists */}
            <div className="flex flex-col md:flex-row gap-6 w-full">
              {surveyDataStrong?.length > 0 && (
                <div className="flex gap-2">
                  <div className="w-[8px] bg-[#389F78] rounded-full" />
                  <div className="font-bold text-[18px] text-[#333]">
                    {surveyDataStrong.join(" • ")}
                  </div>
                </div>
              )}

              {surveyDataDeveloping?.length > 0 && (
                <div className="flex gap-2">
                  <div className="w-[8px] bg-[#F4BC37] rounded-full" />
                  <div className="font-bold text-[18px] text-[#333]">
                    {surveyDataDeveloping.join(" • ")}
                  </div>
                </div>
              )}

              {surveyDataNeedAttention?.length > 0 && (
                <div className="flex gap-2">
                  <div className="w-[8px] bg-[#EC5F3D] rounded-full" />
                  <div className="font-bold text-[18px] text-[#333]">
                    {surveyDataNeedAttention.join(" • ")}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Subjects Section */}
        <div className="w-full max-w-[1200px] px-6 mx-auto relative z-10 py-8">
          <h4 className="text-[20px] font-bold text-[#FF8B13] uppercase mb-6 font-Nunito">
            Subjects
          </h4>

          {subjectData && subjectData.length > 0 ? (
            <div className="relative w-full min-h-[520px]">
              {/* Left Scroll Button */}
              <button
                onClick={() =>
                  document
                    .getElementById("subjectScroll")
                    .scrollBy({ left: -400, behavior: "smooth" })
                }
                className="absolute right-[-80px] top-1/2 -translate-y-1/2 w-[62px] h-[62px] rounded-full z-10 flex items-center justify-center"
                style={{
                  background: 'rgba(255, 141, 40, 0.25)',
                }}
              >
                <svg
                  width="25"
                  height="13"
                  viewBox="0 0 25 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="-rotate-90"
                >
                  <path
                    d="M2 2L12.5 11L23 2"
                    stroke="#FF8B13"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Subject Cards */}
              <div
                id="subjectScroll"
                className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-2 py-4"
              >
                {subjectData.map((item, i) => (
                  <React.Fragment key={i}>
                    <div
                      onClick={() => {
                        const subjectId = item.subjectId || item.subject?.subjectId || "";
                        const modulesForThisSubject = item.modules || [];

                        try {
                          localStorage.setItem(
                            `subject_modules_${subjectId}`,
                            JSON.stringify(modulesForThisSubject)
                          );
                          localStorage.setItem(`subject_locked_${subjectId}`, JSON.stringify(locked));
                          localStorage.setItem(`subject_custom_${subjectId}`, JSON.stringify(customUserData));
                        } catch (e) {
                          console.warn("Failed to store modules in localStorage", e);
                        }

                        router.push(
                          `/subject/${subjectId}?name=${encodeURIComponent(item.subjectName)}`
                        );
                      }}
                      className="flex-shrink-0 w-[348px] h-[480px] rounded-[16px] shadow-md cursor-pointer transition-all duration-300 hover:shadow-lg"
                      style={{
                        transform: i === subjectId ? 'scale(1.02)' : 'scale(1)',
                      }}
                    >
                      {/* Top Gradient */}
                      <div
                        key={i}
                        className="flex flex-col justify-center items-center p-5 gap-3 h-[230px] rounded-t-[20px] rounded-b-[20px]"
                        style={{
                          backgroundColor: getColor(i),
                        }}
                      >
                        <img
                          src={
                            subjectImages[
                              normalize(item?.subject?.subjectName || item.subjectName || "")
                            ]
                          }
                          alt={item.subject?.subjectName || item.subjectName}
                          className="w-[380px] h-[220px] object-contain drop-shadow-lg"
                        />
                      </div>

                      {/* Bottom Info */}
                      <div className="flex flex-col p-5 h-[229px] justify-between pb-6">
                        <div>
                          <div className="flex items-center gap-2 text-[#333333] mb-2">
                            <div className="flex justify-center items-center w-[20px] h-[20px] bg-white border border-[#FF8B13] rounded">
                              🎂
                            </div>
                            <p className="text-[14px] font-semibold">5–7 Years</p>
                          </div>

                          <p className="text-[24px] font-black text-[#2C3D68] font-Nunito leading-[33px] mb-2 whitespace-nowrap overflow-hidden text-ellipsis">
                            {item.subject?.subjectName ||
                              item.subjectName ||
                              "Subject Name"}
                          </p>

                          <div className="flex flex-wrap gap-3 text-[16px] font-Nunito font-bold text-[#666]">
                            <p>
                              Interactive Activity:{" "}
                              <span className="text-[#FF8B13]">120+</span>
                            </p>
                            <p>
                              Gamified Activity:{" "}
                              <span className="text-[#FF8B13]">12+</span>
                            </p>
                          </div>
                        </div>

                        <div className="w-full mt-3">
                          <div className="w-full h-[7px] bg-[#F2F2F2] rounded-full">
                            <div
                              className="h-[7px] bg-[#F58720] rounded-full"
                              style={{ width: "45%" }}
                            ></div>
                          </div>
                          <div className="flex justify-between mt-1 text-[12px] font-bold text-[#999]">
                            <p>45% Completed</p>
                            <p>2/6 Modules</p>
                          </div>
                        </div>

                        <div className="flex justify-between items-center mt-3 mb-4">
                          <div className="flex items-center gap-2">
                            <div className="flex items-center -space-x-2">
                              <Image 
                                className="w-[30px] h-[30px] rounded-full border-2 border-white" 
                                src={Person1} 
                                width={30} 
                                height={30} 
                                alt="avatar" 
                              />
                              <Image 
                                className="w-[30px] h-[30px] rounded-full border-2 border-white" 
                                src={Person2} 
                                width={30} 
                                height={30} 
                                alt="avatar" 
                              />
                              <Image 
                                className="w-[30px] h-[30px] rounded-full border-2 border-white" 
                                src={Person3} 
                                width={30} 
                                height={30} 
                                alt="avatar" 
                              />
                              <Image 
                                className="w-[30px] h-[30px] rounded-full border-2 border-white" 
                                src={Person4} 
                                width={30} 
                                height={30} 
                                alt="avatar" 
                              />
                            </div>
                            <p className="text-[12px] font-bold text-[#666]">
                              654+
                            </p>
                          </div>
                          <div className="flex justify-center items-center w-[32px] h-[32px] border rounded-lg">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="#FF8B13"
                              className="w-5 h-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 8.25c0-2.485-2.013-4.5-4.5-4.5S12 5.765 12 8.25c0-2.485-2.013-4.5-4.5-4.5S3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              </div>

              {/* Right Scroll Button */}
              <button
                onClick={() =>
                  document
                    .getElementById("subjectScroll")
                    .scrollBy({ left: 400, behavior: "smooth" })
                }
                className="absolute left-[-80px] top-1/2 -translate-y-1/2 w-[62px] h-[62px] rounded-full z-10 flex items-center justify-center"
                style={{
                  background: 'rgba(255, 139, 19, 0.25)',
                }}
              >
                <svg
                  width="25"
                  height="13"
                  viewBox="0 0 25 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="rotate-90"
                >
                  <path
                    d="M2 2L12.5 11L23 2"
                    stroke="#FF8B13"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          ) : (
            <div className="flex w-full justify-center py-10">
              <p className="text-lg">No subjects available</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default UserDashboard;