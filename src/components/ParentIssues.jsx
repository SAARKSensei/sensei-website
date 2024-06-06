"use client";
import Image from 'next/image'
import React from 'react'

import { ReactTyped } from 'react-typed'
import { TiTick } from "react-icons/ti";

import Magnify from "@/assets/magnify.svg"
import Dots from "@/assets/dots.svg"
import Squares from "../assets/squares.svg"

import FreeActivityBtn from './FreeActivityBtn'

const ParentIssues = () => {

    return (
        <div className='max-w-7xl flex flex-col px-5 mx-auto gap-10'>
            <div className='w-fit flex flex-col gap-4 sm:gap-6'>
                <p className='text-secondary body_3'>What Indian Parents Say</p>
                <div className='w-fit flex flex-col sm:flex-row gap-2 font-bold font-Nunito text-4xl md:text-[54px]'>
                    <p>My Child</p>
                    <p className='text-grad'>
                        <ReactTyped
                            className='typewrite'
                            strings={[
                                `has difficulty expressing feelings`,
                                `has frequent tantrums/meltdowns`,
                                `struggles with focus and concentration`,
                                `has excessive worry or anxiety`
                            ]}
                            typeSpeed={40}
                            backSpeed={10}
                            showCursor={false}
                            loop >
                        </ReactTyped>
                    </p>
                </div>
            </div>
            <div className='w-full flex flex-col sm:flex-row gap-10'>
                <div className='w-full min-h-[362px] sm:w-1/2 rounded-3xl flex flex-col gap-6 px-4 pt-4 pb-16 sm:px-6 sm:py-6 shadow-cs'>
                    <div className='w-full flex gap-4 sm:gap-0 sm:justify-between items-start'>
                        <div className='w-full sm:w-[400px] border-[1px] border-[#DEDEDE] p-3 rounded-[50px] flex justify-between items-center'>
                            <p className='font-Nunito font-medium text-sm sm:text-lg text-grey_1'>L
                                <ReactTyped
                                    className='typewrite'
                                    strings={[`ife Skills that make You`]}
                                    typeSpeed={10}
                                    backSpeed={40}
                                    showCursor={false}
                                    loop
                                >
                                </ReactTyped>
                            </p>
                            <Image
                                src={Magnify}
                                alt='magnify'
                                sizes='auto'
                                className='sm:scale-125'
                            />
                        </div>
                        <Image
                            src={Dots}
                            alt='dots'
                            sizes='auto'
                            className='block sm:hidden'
                        />
                        <Image
                            src={Squares}
                            alt='squares'
                            sizes='auto'
                            className='hidden sm:block'
                        />
                    </div>
                    <div className='w-full min-h-52 sm:h-full flex flex-col gap-4'>
                        <div className='flex flex-wrap gap-2 block-1'>
                            <div className='flex items-center gap-2 sm:gap-2.5 px-3 py-2 rounded-md border-[1px] border-[#FF8B13] bg-[#FF8B13]/15'>
                                <p className='text-primary font-Nunito font-normal text-xs sm:text-lg'>Decision Making</p>
                                <TiTick className='text-primary' />
                            </div>
                            <div className='flex items-center gap-2 sm:gap-2.5 px-3 py-2 rounded-md border-[1px] border-[#F8BF3B] bg-[#F8BF3B]/15'>
                                <p className='text-[#F8BF3B] font-Nunito font-normal text-xs sm:text-lg'>Critical Thinking</p>
                                <TiTick className='text-[#F8BF3B]' />
                            </div>
                            <div className='flex items-center gap-2 sm:gap-2.5 px-3 py-2 rounded-md border-[1px] border-[#9FC5EF] bg-[#9FC5EF]/15'>
                                <p className='text-[#9FC5EF] font-Nunito font-normal text-xs sm:text-lg'>Empathy</p>
                                <TiTick className='text-[#9FC5EF]' />
                            </div>
                        </div>
                        <div className='flex flex-wrap gap-2 block-2'>
                            <div className='flex items-center gap-2 sm:gap-2.5 px-3 py-2 rounded-md border-[1px] border-[#3AA176] bg-[#3AA176]/15'>
                                <p className='text-[#3AA176] font-Nunito font-normal text-xs sm:text-lg'>Active Listening</p>
                                <TiTick className='text-[#3AA176]' />
                            </div>
                            <div className='flex items-center gap-2 sm:gap-2.5 px-3 py-2 rounded-md border-[1px] border-[#0764A7] bg-[#0764A7]/15'>
                                <p className='text-[#0764A7] font-Nunito font-normal text-xs sm:text-lg'>Building Resilience</p>
                                <TiTick className='text-[#0764A7]' />
                            </div>
                            <div className='flex items-center gap-2 sm:gap-2.5 px-3 py-2 rounded-md border-[1px] border-[#F6B0A8] bg-[#F6B0A8]/15'>
                                <p className='text-[#F6B0A8] font-Nunito font-normal text-xs sm:text-lg'>Mindfulness</p>
                                <TiTick className='text-[#F6B0A8]' />
                            </div>
                            <div className='flex items-center gap-2 sm:gap-2.5 px-3 py-2 rounded-md border-[1px] border-[#EF5F3D] bg-[#EF5F3D]/15'>
                                <p className='text-[#EF5F3D] font-Nunito font-normal text-xs sm:text-lg'>Social Skills</p>
                                <TiTick className='text-[#EF5F3D]' />
                            </div>
                            <div className='flex items-center gap-2 sm:gap-2.5 px-3 py-2 rounded-md border-[1px] border-[#FF8B13] bg-[#FF8B13]/15'>
                                <p className='text-[#FF8B13] font-Nunito font-normal text-xs sm:text-lg'>Stress Management</p>
                                <TiTick className='text-[#FF8B13]' />
                            </div>
                            <div className='flex items-center gap-2 sm:gap-2.5 px-3 py-2 rounded-md border-[1px] border-[#3AA176] bg-[#3AA176]/15'>
                                <p className='text-[#3AA176] font-Nunito font-normal text-xs sm:text-lg'>Boost Self-Esteem</p>
                                <TiTick className='text-[#3AA176]' />
                            </div>
                        </div>
                        <div className='flex flex-wrap gap-2 block-3'>
                            <div className='flex items-center gap-2 sm:gap-2.5 px-3 py-2 rounded-md border-[1px] border-[#0764A7] bg-[#0764A7]/15'>
                                <p className='text-[#0764A7] font-Nunito font-normal text-xs sm:text-lg'>Emotional intelligence</p>
                                <TiTick className='text-[#0764A7]' />
                            </div>
                            <div className='flex items-center gap-2 sm:gap-2.5 px-3 py-2 rounded-md border-[1px] border-[#F8BF3B] bg-[#F8BF3B]/15'>
                                <p className='text-[#F8BF3B] font-Nunito font-normal text-xs sm:text-lg'>Time Management</p>
                                <TiTick className='text-[#F8BF3B]' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full sm:w-1/2 flex flex-col justify-center gap-6 sm:gap-8'>
                    <p className='body_2'>Sensei is <span className='italic font-bold'>India&apos;s 1st ABL platform</span> focused on <span className='italic font-bold'>Life skills</span> development. We empower parents to navigate the <span className='italic font-bold'>Digital age</span> with confidence, offering resources and guidance to create a <span className='italic font-bold'>balance of academic and personal development.</span></p>
                    <FreeActivityBtn />
                </div>
            </div>
        </div>
    )
}

export default ParentIssues