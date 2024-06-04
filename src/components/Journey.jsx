import React from 'react'
import Image from 'next/image';

import Path from "@/assets/path.svg";
import BigPath from "@/assets/bigpath.svg";
import Markings from "@/assets/markings.svg"
import BlackMarkings from "@/assets/blackmarkings.svg"
import StartFlag from "@/assets/startflag.svg"
import ChequredFlag from "@/assets/chequredflag.svg"
import SignUp from "@/assets/signup.svg"
import Monitor from "@/assets/monitor.svg"
import AddChild from "@/assets/addchild.svg"
import Plan from "@/assets/plan.svg"
import ABL from "@/assets/abl.svg"

const Journey = () => {
    return (
        <div className='w-full'>
            <div className='w-full relative block sm:hidden'>
                <Image
                    src={Path}
                    alt='path'
                    sizes='auto'
                    className='w-full'
                />
                <Image
                    src={Markings}
                    alt='markings'
                    sizes='auto'
                    className='w-full absolute z-10 top-[10%]'
                />
                <Image
                    src={StartFlag}
                    alt='start flag'
                    sizes='auto'
                    className='absolute -top-[45px] left-1'
                />
                <div className='absolute top-5 left-11 flex flex-col items-center gap-2'>
                    <div className='w-11 h-11 rounded-full bg-[#FF8B13] flex justify-center items-center'>
                        <Image
                            src={SignUp}
                            alt='sign up'
                            sizes='auto'
                        />
                    </div>
                    <p className='body3_b text-white'>Sign Up</p>
                </div>
                <div className='absolute top-[94px] right-[75px] flex items-center gap-2'>
                    <div className='w-11 h-11 rounded-full bg-[#FF8B13] flex justify-center items-center'>
                        <Image
                            src={Monitor}
                            alt='free activities'
                            sizes='auto'
                        />
                    </div>
                    <p className='body3_b text-white flex flex-col'>
                        <span>FREE</span>
                        <span>activities</span>
                    </p>
                </div>
                <div className='absolute top-[200px] left-[92px] flex items-center gap-2'>
                    <div className='w-11 h-11 rounded-full bg-[#FF8B13] flex justify-center items-center'>
                        <Image
                            src={AddChild}
                            alt='add button'
                            sizes='auto'
                        />
                    </div>
                    <p className='body3_b text-white flex flex-col'>Enroll Child</p>
                </div>
                <div className='absolute top-[310px] right-[76px] flex items-center gap-2'>
                    <p className='body3_b text-white flex flex-col'>
                        <span>Choose</span>
                        <span>Plan</span>
                    </p>
                    <div className='w-11 h-11 rounded-full bg-[#FF8B13] flex justify-center items-center'>
                        <Image
                            src={Plan}
                            alt='plan'
                            sizes='auto'
                        />
                    </div>
                </div>
                <div className='absolute bottom-[94px] right-[128px] flex items-center gap-2'>
                    <div className='w-11 h-11 rounded-full bg-[#FF8B13] flex justify-center items-center'>
                        <Image
                            src={ABL}
                            alt='abl'
                            sizes='auto'
                        />
                    </div>
                    <p className='body3_b text-white flex flex-col'>
                        <span>ABL</span>
                        <span>Modules</span>
                    </p>
                </div>
                <Image
                    src={ChequredFlag}
                    alt='chequred flag'
                    sizes='auto'
                    className='absolute bottom-[18px] right-1'
                />
            </div>
            <div className='w-full relative hidden sm:block'>
                <Image
                    src={BigPath}
                    alt='path'
                    sizes='auto'
                    className='w-full'
                />
                <Image
                    src={BlackMarkings}
                    alt='markings'
                    sizes='auto'
                    className='w-full absolute z-10 top-[30%]'
                />
                <Image
                    src={StartFlag}
                    alt='start flag'
                    sizes='auto'
                    className='absolute -top-[45px] left-1 w-[142px] h-[205px]'
                />
                <div className='absolute top-[22%] left-[10%] flex flex-col items-center gap-2 z-10'>
                    <div className='w-[70px] h-[70px] rounded-full bg-[#FF8B13] flex justify-center items-center'>
                        <Image
                            src={SignUp}
                            alt='sign up'
                            sizes='auto'
                            className='w-10 h-10'
                        />
                    </div>
                    <p className='body3_b text-white'>Sign Up</p>
                </div>
                <div className='absolute top-[45%] left-[27%] flex flex-col items-center gap-2 z-10'>
                    <div className='w-[70px] h-[70px] rounded-full bg-[#FF8B13] flex justify-center items-center'>
                        <Image
                            src={Monitor}
                            alt='free activities'
                            sizes='auto'
                            className='w-10 h-10'
                        />
                    </div>
                    <p className='body3_b text-white flex flex-col'>
                        FREE activities
                    </p>
                </div>
                <div className='absolute top-[16%] left-[47%] flex flex-col items-center gap-2 z-10'>
                    <div className='w-[70px] h-[70px] rounded-full bg-[#FF8B13] flex justify-center items-center'>
                        <Image
                            src={AddChild}
                            alt='add button'
                            sizes='auto'
                            className='w-10 h-10'
                        />
                    </div>
                    <p className='body3_b text-white flex flex-col'>Enroll Child</p>
                </div>
                <div className='absolute top-[45%] right-[27%] flex flex-col items-center gap-2 z-10'>
                    <div className='w-[70px] h-[70px] rounded-full bg-[#FF8B13] flex justify-center items-center'>
                        <Image
                            src={Plan}
                            alt='plan'
                            sizes='auto'
                            className='w-10 h-10'
                        />
                    </div>
                    <p className='body3_b text-white flex flex-col'>Choose Plan</p>
                </div>
                <div className='absolute top-[25%] right-[10%] flex flex-col items-center gap-2 z-10'>
                    <div className='w-[70px] h-[70px] rounded-full bg-[#FF8B13] flex justify-center items-center'>
                        <Image
                            src={ABL}
                            alt='abl'
                            sizes='auto'
                            className='w-10 h-10'
                        />
                    </div>
                    <p className='body3_b text-white flex flex-col'>
                        <span>ABL</span>
                        <span>Modules</span>
                    </p>
                </div>
                <Image
                    src={ChequredFlag}
                    alt='chequred flag'
                    sizes='auto'
                    className='absolute bottom-[53px] right-1 w-[142px] h-[205px]'
                />
            </div>
        </div>
    )
}

export default Journey