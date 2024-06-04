import React from 'react'

import SmallScreenCollage from "@/assets/smallscreencollage.svg"
import LargeScreenCollage from "@/assets/largescreencollage.svg"
import Image from 'next/image'

const AboutUs = () => {
    return (
        <div className='w-full px-5 flex flex-col items-center sm:flex-row gap-8'>
            <div className='w-full sm:w-1/2 sm:order-2'>
                <Image
                    src={SmallScreenCollage}
                    alt='Collage'
                    sizes='auto'
                    loading='lazy'
                    className='w-full block sm:hidden'
                />
                <Image
                    src={LargeScreenCollage}
                    alt='Collage'
                    sizes='auto'
                    loading='lazy'
                    className='w-full hidden sm:block'
                />
            </div>
            <div className='w-full sm:w-1/2 flex flex-col gap-6 sm:order-1'>
                <p className='text-[#2C3D68] body_2'>About Us</p>
                <p className='para leading-10'>At Sensei, we are dedicated to revolutionizing education by blending activity-based learning (ABL) with essential life-skills, mental resilience, and strong ethical values.  We&apos;re on a mission to revolutionize education and make life-skills accessible to over 1.5 lakh students across India by 2025.</p>
                <div className='w-fit relative button_1 z-[0] cursor-pointer'>
                    <span className="absolute -inset-[2px] z-[-1] rounded-full bg-grad_1" />
                    <span className="absolute bg-[#FEF5F3] inset-0 rounded-full z-[-1]" />
                    <span className="text-grad">About Us</span>
                </div>
            </div>
        </div>
    )
}

export default AboutUs