import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div className='w-full flex flex-row py-[96px] px-[144px] gap-[104px] items-start bg-[#F5F7FA]'>
            <div>
                <p className='text-[#4D4D4D] font-bold text-[64px]/[76px] pb-4'>
                    Lessons and insights <span className='text-[#4CAF4F]'>from 8 years</span>
                </p>
                <h2 className='pb-8 text-[#717171] text-[16px]/[24px] font-normal'>
                    Where to grow your business as a photographer: site or social media?
                </h2>
                <button className="px-4 py-2 bg-[#4CAF4F] text-white border border-[#4CAF4F] rounded-md hover:bg-green-500 transition">
                    Register
                </button>
            </div>

            <div>
                <Image
                    src="/Illustration.png"
                    alt='illustration image'
                    width={391}
                    height={407}
                />
            </div>
        </div>
    )
}

export default Hero
