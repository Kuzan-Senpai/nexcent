"use client"

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <section className='w-full flex flex-col-reverse md:flex-row items-center justify-between py-16 md:py-[96px] px-6 sm:px-10 lg:px-[144px] gap-12 md:gap-[104px] bg-[#F5F7FA] overflow-hidden'>
            <motion.div
                className="text-center md:text-left max-w-xl w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            >

                <p className='text-[#4D4D4D] font-bold text-4xl sm:text-5xl md:text-[64px] leading-tight md:leading-[76px] pb-4'>
                    Lessons and insights 
                    <br className='hidden md:block'/>
                    <span className='text-[#4CAF4F]'>from 8 years</span>
                </p>

                <h2 className='pb-8 text-[#717171] text-base md:text-lg leading-[24px] font-normal'>
                    Where to grow your business as a photographer: site or social media?
                </h2>

                <button className="px-6 py-3 bg-[#4CAF4F] text-white border border-[#4CAF4F] rounded-md hover:bg-green-500 transition">
                    Register
                </button>
            </motion.div>

            <motion.div
                className=" w-full max-w-md md:max-w-none flex items-center justify-center md:justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
            >
                <Image
                    src="/Illustration.png"
                    alt='illustration image'
                    width={391}
                    height={407}
                />
            </motion.div>
        </section>
    )
}

export default Hero
