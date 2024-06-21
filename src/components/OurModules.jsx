import Image from 'next/image'
import React from 'react'

import TopologySmall from "@/assets/topologyourmodules.svg"
import TopologyBig from "@/assets/topologybig.svg"
import BurstStarOrange from "@/assets/burststarorange.svg"
import BurstStarWhite from "@/assets/burststarwhite.svg"
import BurstPuckerPeach from "@/assets/burstpuckerpeach.svg"
import BurstPuckerYellow from "@/assets/burstpuckeryellow.svg"
import Ticked from "@/assets/tick.svg"

import SmallPhone from "@/assets/smallphone.svg"
import BigPhones from "@/assets/bigphone.svg"
import FreeActivityBtn from './FreeActivityBtn'


const OurModules = () => {
    return (
        <div className='w-full h-fit bg-[#2C3D68] rounded-[20px] sm:rounded-[60px] px-5 sm:px-0 pt-16 sm:py-0 relative z-10 group'>
            <Image
                src={TopologySmall}
                alt='topology'
                sizes='auto'
                className='w-full absolute -z-10 bottom-0 left-0 block sm:hidden'
            />
            <Image
                src={TopologyBig}
                alt='topology'
                sizes='auto'
                className='w-[70%] h-full absolute -z-10 bottom-0 right-0 sm:block hidden'
            />
            <div className='absolute inset-0 block sm:hidden'>
                <Image
                    src={BurstStarWhite}
                    alt='burst white'
                    sizes='auto'
                    className='absolute top-[3%] left-[5%]'
                />
                <Image
                    src={BurstPuckerYellow}
                    alt='burst yellow'
                    sizes='auto'
                    className='absolute top-[6%] right-[5%]'
                />
                <Image
                    src={BurstStarOrange}
                    alt='burst orange'
                    sizes='auto'
                    className='absolute bottom-[50%] right-[10%]'
                />
                <Image
                    src={BurstPuckerPeach}
                    alt='burst peach'
                    sizes='auto'
                    className='absolute bottom-[40%] left-[10%]'
                />
            </div>
            <div className='w-full sm:max-w-7xl p-1 flex items-center flex-col sm:flex-row mx-auto overflow-hidden relative'>
                <div className='w-full sm:w-1/2 flex flex-col gap-8 sm:px-10 sm:py-12'>
                    <div className='w-full flex flex-col gap-4 text-white'>
                        <h2 className='body_3'>OUR MODULES</h2>
                        <div className='flex gap-4 items-center'>
                            <Image
                                src={Ticked}
                                alt='tick'
                                sizes='auto'
                            />
                            <p className='font-Nunito text-base sm:text-lg font-normal sm:font-medium'>Early intervention for emotional challenges</p>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <Image
                                src={Ticked}
                                alt='tick'
                                sizes='auto'
                            />
                            <p className='font-Nunito text-base sm:text-lg font-normal sm:font-medium'>Enhances academic achievement and emotional well-being</p>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <Image
                                src={Ticked}
                                alt='tick'
                                sizes='auto'
                            />
                            <p className='font-Nunito text-base sm:text-lg font-normal sm:font-medium'>Improves social skills - cooperation, communication, and conflict resolution</p>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <Image
                                src={Ticked}
                                alt='tick'
                                sizes='auto'
                            />
                            <p className='font-Nunito text-base sm:text-lg font-normal sm:font-medium'>ABL modules promote knowledge retention, engagement and critical thinking</p>
                        </div>
                    </div>
                    {/* <button className='w-fit bg-[#2C3D68] border-none flex items-center justify-center px-6 py-4 rounded-full text-white button_text relative btn_lnrbg'>
                        Explore ABL Modules
                    </button> */}
                    <FreeActivityBtn />
                </div>
                <div className='w-full h-fit flex sm:hidden mx-auto'>
                    <Image
                        src={SmallPhone}
                        alt='small phones'
                        sizes='auto'
                        className='z-20 translate-x-8'
                    />
                    <Image
                        src={BigPhones}
                        alt='big phone'
                        sizes='auto'
                        className='z-10 -translate-x-8'
                    />
                </div>
                <div className='w-full h-[356px] sm:w-1/2 hidden sm:block relative'>
                    <div className='absolute inset-0'>
                        <Image
                            src={BurstStarWhite}
                            alt='burst white'
                            sizes='auto'
                            className='absolute top-[3%] left-[5%] scale-125'
                        />
                        <Image
                            src={BurstPuckerYellow}
                            alt='burst yellow'
                            sizes='auto'
                            className='absolute top-[6%] right-[30%] scale-125'
                        />
                        <Image
                            src={BurstStarOrange}
                            alt='burst orange'
                            sizes='auto'
                            className='absolute bottom-[50%] right-[10%] scale-125'
                        />
                        <Image
                            src={BurstPuckerPeach}
                            alt='burst peach'
                            sizes='auto'
                            className='absolute bottom-[40%] left-[10%] scale-125'
                        />
                    </div>
                </div>
                <Image
                    src={SmallPhone}
                    alt='small phones'
                    sizes='auto'
                    className='hidden sm:block absolute -bottom-[22%] right-[29%] scale-125 group-hover:bottom-[6%] transition-all duration-500'
                />
                <Image
                    src={BigPhones}
                    alt='big phone'
                    sizes='auto'
                    className='hidden sm:block absolute -bottom-[51%] right-[10%] scale-125 group-hover:bottom-[6%] transition-all duration-500'
                />
            </div>
        </div>
    )
}

export default OurModules