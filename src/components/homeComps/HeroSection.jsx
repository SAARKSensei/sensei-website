import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div className="mx-4 mt-16 grid grid-cols-1 gap-6 md:mx-8 md:mt-24 md:pt-10 lg:mx-20 lg:mt-20 lg:grid-cols-2">
      <div className="maintext flex flex-col">
        <div className="max-w-full font-Nunito text-3xl font-black leading-tight text-slate-700 sm:text-4xl md:leading-snug lg:text-5xl lg:leading-[60px]">
          Empower Your Child with Essential Life Skills for the Digital Age.
        </div>
        <div className="mb-4 mt-2 max-w-full font-['Nunito'] text-base font-bold text-stone-500 sm:text-lg">
          Interactive, Activity based modules designed to foster emotional
          intelligence, resilience, and social skills in children.
        </div>
        <button className="group inline-flex w-full max-w-xs flex-col items-start justify-center rounded-2xl bg-[#FF8B13] px-5 py-3.5 shadow-[0px_1px_1px_0px_rgba(0,0,0,0.12)] shadow-[0px_2px_5px_0px_rgba(103,110,118,0.08)]">
          <Link href={"/survey"}>
            <div className="relative inline-flex w-full items-center justify-between gap-2 self-stretch">
              <div className="text-md justify-start text-center font-['Nunito'] font-black leading-snug text-white">
                Start Your Child&apos;s Journey
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
            </div>
          </Link>
        </button>
      </div>
      <div className="relative mx-auto h-64 w-full max-w-full overflow-hidden rounded-[20px] bg-slate-700 sm:h-80 md:h-96 lg:h-96 lg:max-w-[634px]">
        <iframe
          src="https://www.youtube.com/embed/IDGiY6r2HOw?autoplay=1&rel=0"
          className="absolute left-0 top-0 h-full w-full"
          allow="autoplay"
          allowFullScreen
          preload
        ></iframe>
      </div>
    </div>
  );
};

export default HeroSection;
