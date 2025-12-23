"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';


const Survey1 = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const router = useRouter();

    const options = [
        'Yes',
        'No, Only father works',
        'No, Only mother works',
    ];

    const handleNext = () => {
        if (selectedOption) {
            // Save selected option if needed
            router.push('/survey/question2'); // Navigate to the next question
        } else {
            alert('Please select an option before proceeding.');
        }
    };

    return (
        <div className="fixed inset-0 bg-white bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 px-2 sm:px-4">
            <div className="w-full max-w-[848px] max-h-[95vh] h-auto bg-white rounded-2xl shadow-xl relative px-4 sm:px-6 py-6 sm:py-8 overflow-auto">

                {/* Close Button */}
                <button onClick={() => router.push("/")}
                    className="absolute right-3 sm:top-0 sm:right-4 w-8 sm:w-10 h-8 sm:h-10 rounded-full border border-gray-800 shadow text-xl font-bold text-gray-700 hover:bg-gray-200 transition">
                    ×
                </button>

                {/* Progress Bar */}
                <div className="absolute top-20 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 w-full max-w-xs sm:max-w-sm md:max-w-md">
                    {[...Array(7)].map((_, index) => (
                        <div
                            key={index}
                            className={`h-1 flex-1 max-w-[40px] sm:max-w-[48px] md:max-w-[56px] rounded-full ${index === 0 ? 'bg-orange-400' : 'bg-gray-200'}`}
                        />
                    ))}
                </div>

                {/* Main Content */}
                <div className="flex flex-col items-center text-center w-full max-w-[90%] sm:max-w-lg lg:max-w-xl mx-auto pt-20 sm:pt-24 pb-8">
                    <h2 className="text-2xl sm:text-3xl lg:text-2xl font-bold text-[#2b3a78] mb-8 sm:mb-16">
                        Are you both working parents?
                    </h2>

                    <div className="flex flex-col gap-4 w-full">
                        {options.map((opt, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedOption(opt)}
                                className={`w-full py-4 rounded-md border cursor-pointer text-center font-medium transition duration-0 ${selectedOption === opt
                                    ? 'bg-orange-100 border-orange-300 text-[#444]'
                                    : 'bg-white border-gray-300 text-gray-700'
                                    }`}
                            >
                                {opt}
                            </button>
                        ))}
                    </div>

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

export default Survey1;