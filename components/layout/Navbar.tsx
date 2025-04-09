import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='w-full max-w-screen-xl mx-auto h-[84px] flex items-center justify-between px-6 md:px-12'>
            <div>
                <Image 
                src="/Logo.png"
                alt='LOGO'
                width={155}
                height={24}
            />
            </div>
            
            <ul className='hidden md:flex flex-row space-x-6 font-medium text-lg text-[#18191f] '>
                {["Home", "Service", "Feature", "Product", "Testimoial", "FAQ"].map((item) => (
                    <li key={item} className='hover:text-blue-600 cursor-pointer transition'>
                        {item}
                    </li>
                ))}
            </ul>

            <div className="flex flex-row px-[22px] gap-3.5">
                <button className="px-4 py-2 text-[#4CAF4F] border border-[#F5F7FA] rounded-md hover:bg-gray-100 transition">
                    Login
                </button>
                <button className="px-4 py-2 bg-[#4CAF4F] text-white border border-[#4CAF4F] rounded-md hover:bg-green-500 transition">
                    Signup
                </button>
            </div>

        </nav>
    )
}

export default Navbar
