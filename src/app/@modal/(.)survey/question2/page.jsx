"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import { useLifeSkills } from "@/context/LifeSkillContext.jsx";

const Survey2 = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedSkills, setSelectedSkills] = useState([]);
    const { addSkillsForSurvey } = useLifeSkills();
    const router = useRouter();

    const options = [
        {
            label: "Try different ways to figure it out on their own.",
            skills: ["Creativity"],
        },
        {
            label: "Ask how others did it or wait for help.",
            skills: ["Decision Making"],
        },
        {
            label: "Say “It’s too hard” and stop trying.",
            skills: ["Stress Management"],
        }
    ];

    const handleOptionSelect = (option) => {
        setSelectedOption(option.label);
        setSelectedSkills(option.skills);
    };

    const handleNext = () => {
        if (selectedSkills.length > 0) {
            addSkillsForSurvey('survey2', selectedSkills);
            router.push('/survey/question3');
        } else {
            alert("Please select an option before continuing.");
        }
    };

    return (
        <div className="fixed inset-0 bg-white bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 px-2 sm:px-4">
            <div className="w-full max-w-[848px] max-h-[95vh] h-auto bg-white rounded-2xl shadow-xl relative px-4 sm:px-6 py-6 sm:py-8 overflow-auto">

                {/* Close Button */}
                <button onClick={() => router.push("/")} className="absolute right-3 sm:top-0 sm:right-4 w-8 sm:w-10 h-8 sm:h-10 rounded-full border border-gray-800 shadow text-xl font-bold text-gray-700 hover:bg-gray-200 transition">
                    ×
                </button>

                {/* Progress Bar */}
                <div className="absolute top-20 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 w-full max-w-xs sm:max-w-sm md:max-w-md">
                    {[...Array(7)].map((_, index) => (
                        <div
                            key={index}
                            className={`h-1 flex-1 max-w-[40px] sm:max-w-[48px] md:max-w-[56px] rounded-full ${index <= 1 ? 'bg-orange-400' : 'bg-gray-200'
                                }`}
                        />
                    ))}
                </div>

                {/* Main Content */}
                <div className="flex flex-col items-center text-center w-full max-w-[90%] sm:max-w-lg lg:max-w-xl mx-auto pt-20 sm:pt-24 pb-8">
                    {/* Question */}
                    <h2 className="text-1xl sm:text-1xl lg:text-2xl font-bold text-[#2b3a78] mb-8 sm:mb-12 leading-snug">
                        When your child is given a new puzzle or toy with instructions, what do they do?
                    </h2>

                    {/* Options */}
                    <div className="flex flex-col gap-4 w-full">
                        {options.map((opt, index) => (
                            <button
                                key={index}
                                onClick={() => handleOptionSelect(opt)}
                                className={`w-full text-left px-4 py-4 rounded-md border cursor-pointer flex items-center gap-3 transition duration-0 ${selectedOption === opt.label
                                    ? 'bg-orange-100 border-orange-300'
                                    : 'bg-white border-gray-300'
                                    }`}
                            >
                                <div
                                    className={`w-5 h-5 flex items-center justify-center rounded-full border ${selectedOption === opt.label
                                        ? 'border-orange-500 bg-orange-500'
                                        : 'border-gray-400'
                                        }`}
                                >
                                    {selectedOption === opt.label && <div className="w-2 h-2 bg-white rounded-full" />}
                                </div>
                                <span className="text-gray-800">{opt.label}</span>
                            </button>
                        ))}
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={handleNext}
                        disabled={!selectedOption}
                        className={`mt-10 sm:mt-12 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-10 sm:px-12 rounded-xl shadow-md transition text-base sm:text-lg lg:text-xl ${!selectedOption ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                            }`}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Survey2;
