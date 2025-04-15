import Image from 'next/image'
import React from 'react'

const Learnmore = () => {
    return (
        <section className='w-full flex items-center gap-10 px-[144px] py-12'>

            <div>
                <Image
                    src="/rafiki.png"
                    alt="rafiki"    
                    width={500}
                    height={500}
                />
            </div>

            <div className="w-full flex-col gap-4">
                <h2 className='font-semibold text-4xl text-[#4D4D4D] leading-11 '>
                    The unseen of spending three years at Pixelgrade
                </h2>

                <p className="text-blue-600 italic text-sm font-normal">
                    “When joining the JustGo Community, you’re joining a vibrant network...”
                </p>

                <p className='text-[#717171] text-sm leading-5 font-normal pb-8'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
                </p>

                <button className='px-8 py-3.5 gap-2.5 rounded-md bg-[#4CAF4F] text-white'>
                    LearnMore
                </button>
            </div>
        </section>
    )
}

export default Learnmore
