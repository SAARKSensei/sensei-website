import React from 'react'
import Image from 'next/image'

import PsychologistsImg from "@/assets/psychologists.png"
import Aparjita from "../assets/aparjita.svg"
import RandomBoy1 from "../assets/randomboy1.png"
import RandomBoy2 from "../assets/randomboy2.png"
import RnadomGirl1 from "../assets/randomgirl1.png"
import RnadomGirl2 from "../assets/randomgirl2.png"
import RnadomGirl3 from "../assets/randomgirl3.png"
import RnadomGirl4 from "../assets/randomgirl4.png"

import FreeActivityBtn from './FreeActivityBtn'

const Psychologists = () => {
    return (
        <div className='max-w-7xl flex flex-col sm:flex-row items-center justify-center gap-10 px-5 mx-auto'>
            <div className='w-full block sm:hidden'>
                <Image
                    src={PsychologistsImg}
                    alt='psychologists'
                    sizes='auto'
                    className=''
                />
            </div>
            <div className='w-1/2 hidden sm:block group'>
                <div className='max-w-full sm:h-fit md:min-h-[443px] relative'>
                    <div className='bg-[#9FC5EF] w-11 h-11 rounded-md absolute top-[12%] left-[24%]' />
                    <div className='bg-[#3AA176] w-11 h-11 rounded-md absolute top-[4%] left-[65%] group-hover:top-[8%] group-hover:left-[69%] transition-all duration-500' />
                    <div className='bg-[#F8BF3B] w-11 h-11 rounded-md absolute top-[50%] right-[18%]' />
                    <div className='bg-[#F6B0A8] w-11 h-11 rounded-md absolute bottom-[11%] right-[32%]' />
                    <div className='bg-[#EF5F3D] w-11 h-11 rounded-md absolute bottom-[11%] left-[18%] group-hover:bottom-[15%] group-hover:left-[15%] transition-all duration-500' />
                    <Image
                        src={Aparjita}
                        alt='aparjita'
                        sizes='auto'
                        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-all duration-500'
                    />
                    <Image
                        src={RnadomGirl1}
                        alt='random girl'
                        sizes='auto'
                        className='absolute top-[12%] left-[2%] transition-all duration-500 group-hover:top-[15%] group-hover:left-0'
                    />
                    <Image
                        src={RandomBoy1}
                        alt='random boy'
                        sizes='auto'
                        className='absolute top-0 left-[40%] transition-all duration-500 group-hover:-top-[5%]'
                    />
                    <Image
                        src={RnadomGirl2}
                        alt='random girl'
                        sizes='auto'
                        className='absolute top-[20%] right-[8%] transition-all duration-500 group-hover:right-[4%]'
                    />
                    <Image
                        src={RnadomGirl3}
                        alt='random girl'
                        sizes='auto'
                        className='absolute bottom-[2%] right-0 transition-all duration-500 group-hover:bottom-0 group-hover:-right-[4%]'
                    />
                    <Image
                        src={RnadomGirl4}
                        alt='random girl'
                        sizes='auto'
                        className='absolute bottom-0 left-[30%] transition-all duration-500 group-hover:-bottom-[4%]'
                    />
                    <Image
                        src={RandomBoy2}
                        alt='random boy'
                        sizes='auto'
                        className='absolute top-[45%] left-[7%] transition-all duration-500 group-hover:top-[49%] group-hover:left-[3%]'
                    />
                </div>
            </div>
            <div className='w-full sm:w-1/2 flex flex-col gap-6'>
                <div className='w-full flex flex-col gap-4'>
                    <p className='body_2 text-secondary'>WHAT INDIAN PSYCHOLOGISTS SAY</p>
                    <p className='text-2xl md:text-4xl lg:text-5xl leading-7 font-Nunito font-bold'>Child with strong socio-emotional skills are better equipped to ⏱️ <span className='text-primary'>manage daily challenges,</span> <span className='text-[#3AA176]'>😇 build positive relationships</span> and <span className='text-[#0764A7]'>🧠make informed decisions</span></p>
                </div>
                <FreeActivityBtn />
            </div>
        </div>
    )
}

export default Psychologists