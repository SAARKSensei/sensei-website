"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef, useMemo } from "react";
// import SignUpScreen from "@/assets/signUpScreen.svg?url";
// import StartLearning from "@/assets/startLearning.svg?url";
// import TakeAssessment from "@/assets/takeAssessment.svg?url";
// import TrackGrowth from "@/assets/trackGrowth.svg?url";

export const HowItWorks = () => {
  const [activeSection, setActiveSection] = useState("signup");
  const [currentImage, setCurrentImage] = useState("/images/signUpScreen.png");
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  const sectionRefs = {
    signup: useRef(null),
    learning: useRef(null),
    assessment: useRef(null),
    growth: useRef(null),
  };

  // Images mapping to sections
  const sectionImages = useMemo(
    () => ({
      signup: "/images/signUpScreen.png",
      learning: "/images/startLearning.png",
      assessment: "/images/takeAssessment.png",
      growth: "/images/trackGrowth.png",
    }),
    [],
  );

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Listen for resize events
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Handle section click for all screen sizes
  const handleSectionClick = (sectionName) => {
    setActiveSection(sectionName);
    setCurrentImage(sectionImages[sectionName]);
  };

  const getSectionClasses = (sectionName) => {
    const baseClasses =
      "flex w-full items-center gap-4 rounded-2xl bg-orange-50 px-6 py-4 transition-all duration-300 cursor-pointer";

    return activeSection === sectionName
      ? `${baseClasses} outline outline-2 outline-offset-[-2px] outline-amber-600 shadow-lg`
      : `${baseClasses}`;
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="mb-12 text-center">
        <h2 className="font-['Nunito'] text-4xl font-black capitalize text-[#2C3D68]">
          How It Works
        </h2>
      </div>

      <div
        ref={containerRef}
        className={`how-it-works mx-auto max-w-6xl ${!isMobile ? "grid grid-cols-1 gap-8 md:grid-cols-2" : ""}`}
      >
        {/* Desktop image column */}
        {!isMobile && (
          <div className="image flex h-fit items-start justify-center md:mt-8">
            <Image
              src={currentImage}
              alt={`${activeSection} illustration`}
              className="transition-all duration-500 ease-in-out"
              width={500}
              height={500}
              fetchPriority="low"
            />
          </div>
        )}

        <div className="text flex flex-col items-center justify-start gap-12 py-8">
          {/* Sign Up Section */}
          <div className="w-full" ref={sectionRefs.signup}>
            <div
              className={getSectionClasses("signup")}
              onClick={() => handleSectionClick("signup")}
            >
              <div className="flex-shrink-0">
                <svg
                  width="56"
                  height="57"
                  viewBox="0 0 56 57"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="0.5" width="56" height="56" rx="28" fill="#FF8B13" />
                  <path
                    d="M35.3636 22.6667V15.375C35.3636 12.9588 33.41 11 31 11L19.3636 11C16.9537 11 15 12.9588 15 15.375L15 41.625C15 44.0412 16.9537 46 19.3636 46H31C33.41 46 35.3636 44.0412 35.3636 41.625V34.3333M41.1818 34.3333L47 28.5M47 28.5L41.1818 22.6667M47 28.5L22.2727 28.5"
                    stroke="white"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <div className="font-['Nunito'] text-3xl font-black capitalize text-zinc-800">
                  Sign Up
                </div>
                <div className="font-['Nunito'] text-lg font-bold text-stone-500">
                  Create an account & set learning preferences.
                </div>
              </div>
            </div>
            {/* Mobile image for signup */}
            {isMobile && activeSection === "signup" && (
              <div className="mt-4 flex justify-center transition-all duration-300 ease-in-out">
                <Image
                  src={"/images/signUpScreen.png"}
                  alt="Sign up illustration"
                  className="transition-all duration-500 ease-in-out"
                  width={500}
                  height={500}
                  fetchPriority="low"
                />
              </div>
            )}
          </div>

          {/* Start Learning Section */}
          <div className="w-full" ref={sectionRefs.learning}>
            <div
              className={getSectionClasses("learning")}
              onClick={() => handleSectionClick("learning")}
            >
              <div className="flex-shrink-0">
                <svg
                  width="56"
                  height="57"
                  viewBox="0 0 56 57"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="0.5" width="56" height="56" rx="28" fill="#FF8B13" />
                  <path
                    d="M28 18.0177C25.1693 15.5192 21.4312 14 17.3333 14C15.4633 14 13.6682 14.3164 12 14.8978V39.8802C13.6682 39.2987 15.4633 38.9823 17.3333 38.9823C21.4312 38.9823 25.1693 40.5016 28 43M28 18.0177C30.8307 15.5192 34.5688 14 38.6667 14C40.5367 14 42.3318 14.3164 44 14.8978V39.8802C42.3318 39.2987 40.5367 38.9823 38.6667 38.9823C34.5688 38.9823 30.8307 40.5016 28 43M28 18.0177V43"
                    stroke="white"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <div className="font-['Nunito'] text-3xl font-black capitalize text-zinc-800">
                  Start Learning
                </div>
                <div className="font-['Nunito'] text-lg font-bold text-stone-500">
                  Engage with fun, expert-designed lessons.
                </div>
              </div>
            </div>
            {/* Mobile image for learning */}
            {isMobile && activeSection === "learning" && (
              <div className="mt-4 flex justify-center transition-all duration-300 ease-in-out">
                <Image
                  src={"/images/startLearning.png"}
                  alt="Start learning illustration"
                  className="transition-all duration-500 ease-in-out"
                  width={500}
                  height={500}
                />
              </div>
            )}
          </div>

          {/* Assessment Section */}
          <div className="w-full" ref={sectionRefs.assessment}>
            <div
              className={getSectionClasses("assessment")}
              onClick={() => handleSectionClick("assessment")}
            >
              <div className="flex-shrink-0">
                <svg
                  width="56"
                  height="57"
                  viewBox="0 0 56 57"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="0.5" width="56" height="56" rx="28" fill="#FF8B13" />
                  <path
                    d="M40.4444 12H15.5556C13.6 12 12 13.6 12 15.5556V40.4444C12 42.4 13.6 44 15.5556 44H40.4444C42.4 44 44 42.4 44 40.4444V15.5556C44 13.6 42.4 12 40.4444 12ZM40.4444 40.4444H15.5556V15.5556H40.4444V40.4444ZM19.1111 24.4444H22.6667V36.8889H19.1111V24.4444ZM26.2222 19.1111H29.7778V36.8889H26.2222V19.1111ZM33.3333 29.7778H36.8889V36.8889H33.3333V29.7778Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <div className="font-['Nunito'] text-3xl font-black capitalize text-zinc-800">
                  Take Assessment
                </div>
                <div className="font-['Nunito'] text-lg font-bold text-stone-500">
                  Identify strengths, weaknesses, focus areas & behavioral
                  issues.
                </div>
              </div>
            </div>
            {/* Mobile image for assessment */}
            {isMobile && activeSection === "assessment" && (
              <div className="mt-4 flex justify-center transition-all duration-300 ease-in-out">
                <Image
                  src={"/images/takeAssessment.png"}
                  alt="Take assessment illustration"
                  className="transition-all duration-500 ease-in-out"
                  width={500}
                  height={500}
                />
              </div>
            )}
          </div>

          {/* Growth Section */}
          <div className="w-full" ref={sectionRefs.growth}>
            <div
              className={getSectionClasses("growth")}
              onClick={() => handleSectionClick("growth")}
            >
              <div className="flex-shrink-0">
                <svg
                  width="56"
                  height="57"
                  viewBox="0 0 56 57"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="0.5" width="56" height="56" rx="28" fill="#FF8B13" />
                  <path
                    d="M32.5714 17.5V19.8333H40.0983L30.2857 29.8503L25.3794 24.8418C25.1651 24.6231 24.8745 24.5002 24.5714 24.5002C24.2684 24.5002 23.9777 24.6231 23.7634 24.8418L12 36.8503L13.616 38.5L24.5714 27.3163L29.4777 32.3248C29.692 32.5435 29.9827 32.6664 30.2857 32.6664C30.5888 32.6664 30.8794 32.5435 31.0937 32.3248L41.7143 21.483V29.1667H44V17.5H32.5714Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <div className="font-['Nunito'] text-3xl font-black capitalize text-zinc-800">
                  Track Growth
                </div>
                <div className="font-['Nunito'] text-lg font-bold text-stone-500">
                  Get insights on emotional & cognitive development.
                </div>
              </div>
            </div>
            {/* Mobile image for growth */}
            {isMobile && activeSection === "growth" && (
              <div className="mt-4 flex justify-center transition-all duration-300 ease-in-out">
                <Image
                  src={"/images/trackGrowth.png"}
                  alt="Track growth illustration"
                  className="transition-all duration-500 ease-in-out"
                  width={500}
                  height={500}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center mt-4">
        <Link href={"/login"}>
          <button className="group mx-auto flex items-center justify-center gap-3 rounded-2xl bg-[#FF8B13] px-6 py-3.5 shadow-[0px_1px_1px_0px_rgba(0,0,0,0.12)] shadow-[0px_2px_5px_0px_rgba(103,110,118,0.08)]">
            <div className="text-md font-['Nunito'] font-black leading-snug text-white">
              Get started for Free
            </div>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-all duration-200"
            >
              <g id="hugeicons:ai-magic">
                <path
                  id="Vector"
                  d="M13.3333 9.33333L12.6453 11.192C11.744 13.6293 11.2933 14.848 10.404 15.7373C9.51467 16.6267 8.296 17.0773 5.85867 17.9787L4 18.6667L5.85867 19.3547C8.296 20.256 9.51467 20.708 10.404 21.596C11.2933 22.484 11.744 23.704 12.6453 26.1413L13.3333 28L14.0213 26.1413C14.9227 23.704 15.3747 22.4853 16.2627 21.596C17.1507 20.7067 18.3707 20.256 20.808 19.3547L22.6667 18.6667L20.808 17.9787C18.3707 17.0773 17.152 16.6267 16.2627 15.7373C15.3733 14.848 14.9227 13.6293 14.0213 11.192L13.3333 9.33333ZM24 4L23.7053 4.796C23.3187 5.84133 23.1253 6.364 22.7453 6.744C22.364 7.12533 21.8413 7.31867 20.796 7.704L20 8L20.7973 8.29467C21.8413 8.68133 22.364 8.87467 22.744 9.25467C23.1253 9.636 23.3187 10.1587 23.704 11.204L24 12L24.2947 11.204C24.6813 10.1587 24.8747 9.636 25.2547 9.256C25.636 8.87467 26.1587 8.68133 27.204 8.296L28 8L27.2027 7.70533C26.1587 7.31867 25.636 7.12533 25.256 6.74533C24.8747 6.364 24.6813 5.84133 24.296 4.796L24 4Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:fill-[#2C3D68] group-hover:stroke-[#2C3D68]"
                />
              </g>
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
};
