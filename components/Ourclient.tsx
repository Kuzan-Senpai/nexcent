import Image from 'next/image'
import React from 'react'

const Ourclient = () => {
    const client = [
        "/ourclient/client1.png",
        "/ourclient/client2.png",
        "/ourclient/client3.png",
        "/ourclient/client4.png",
        "/ourclient/client5.png",
        "/ourclient/client6.png",
        "/ourclient/client7.png",
    ]


    return (
        <section className='flex flex-col justify-center items-center w-full gap-4 py-10 px-[144px]'>
            <div className='flex flex-col justify-center items-center gap-2'>
                <h1 className='text-[#4D4D4D] font-semibold text-4xl/[44px]'>Our Clients</h1>
                <h3 className='text-[#717171] font-normal text-[16px]/[24px]'>We have been working with some Fortune 500+ clients</h3>
            </div>

            <div className='w-full flex flex-row justify-between items-center px-[144px] pt-4 pb-4 h-[98px]'>
                {client.map((clientItem, index) => (
                <div key={index}>
                        <Image
                            src={clientItem}
                            alt={`Client ${index + 1}`}
                            width={48}
                            height={48}
                            className="p-2"
                        />
                </div>
                ))}
            </div>
        </section>
    )
}

export default Ourclient
