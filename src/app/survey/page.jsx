"use client";

import surveyIntroSvg from "@/assets/in-Use/surveyIntro.svg?url";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import DeviceImg from "@/assets/in-Use/Device.svg?url";


export default function SurveyPage() {
    const router = useRouter();
    
    return (
        <div className="fixed inset-0 bg-white bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-20 px-2 sm:px-4">
            <div className="w-full max-w-[848px] max-h-[95vh] h-auto bg-[#fff7f1] rounded-2xl shadow-xl relative px-4 sm:px-6 py-6 sm:py-8 overflow-hidden">

                {/* Close button */}
                <button onClick={() => router.back()} aria-label="Close" title="Close"
                className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 sm:w-10 h-8 sm:h-10 rounded-full shadow text-xl font-bold border border-gray-800 text-gray-700 hover:bg-gray-200 transition">
                    ×
                </button>

                {/* Top Content */}
                <div className="flex flex-col items-center text-center px-2 pt-10 sm:pt-14 font-Nunito">
                    <h1 className="text-2xl sm:text-4xl xl:text-5xl font-bold text-[#2b3a78] mb-3 sm:mb-4">
                        Welcome to Sensei
                    </h1>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg xl:text-xl max-w-[90%] sm:max-w-2xl mb-4 sm:mb-6">
                        You&apos;re one step closer to raising a confident, emotionally strong child.
                    </p>
                        <button onClick={() => router.push("/survey/question1")}
                        className="bg-[#ff8b13] hover:bg-orange-500 text-white font-semibold py-2 sm:py-3 px-5 sm:px-6 rounded-xl shadow-md transition flex items-center gap-2 text-sm sm:text-lg xl:text-xl">
                            Get Started <span>🚀</span>
                        </button>
                </div>

                {/* Bottom Illustration */}
                <div className="w-full max-w-[500px] mx-auto mt-6 sm:mt-8 relative">
                    <Image
                        src={surveyIntroSvg}
                        alt="Welcome"
                        className="w-full h-auto object-contain"
                    />
                    <Image
                        src={DeviceImg}
                        alt="Device"
                        className="absolute bottom-0 left-4 w-[120px] sm:w-[130px] md:w-[170px] h-auto object-contain z-0"
                    />
                </div>
            </div>
        </div>
    )
}


