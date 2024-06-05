import React from 'react'
import FreeActivityBtn from './FreeActivityBtn'

const GetStarted = () => {
    return (
        <div className='max-w-[320px] md:max-w-[572px] mx-auto flex flex-col gap-6 items-center'>
            <h2 className='body_3 text-[#2C3D68]'>GET STARTED</h2>
            <p className='h5_b text-center md:text-2xl md:font-medium md:leading-7'>Explore our activities, meet our expert team, and unlock Sensei&apos;s full potential today!</p>
            <FreeActivityBtn />
        </div>
    )
}

export default GetStarted