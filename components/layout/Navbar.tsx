"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <nav className="w-full max-w-screen-xl mx-auto h-[84px] flex items-center justify-between px-6 md:px-12 relative z-50">
        {/* Logo */}
        <div>
            <Image
            src="/Logo.png"
            alt="LOGO"
            width={155}
            height={24}
            />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex flex-row space-x-6 font-medium text-lg text-[#18191f]">
            {["Home", "Service", "Feature", "Product", "Testimoial", "FAQ"].map((item) => (
            <li key={item} className="hover:text-blue-600 cursor-pointer transition">
                {item}
            </li>
            ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex flex-row px-[22px] gap-3.5">
            <button className="px-4 py-2 text-[#4CAF4F] border border-[#F5F7FA] rounded-md hover:bg-gray-100 transition">
                Login
            </button>
            <button className="px-4 py-2 bg-[#4CAF4F] text-white border border-[#4CAF4F] rounded-md hover:bg-green-500 transition">
                Signup
            </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
            <button onClick={toggleMenu}>
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
        </div>

        {/* Slide-in Mobile Nav */}
        <AnimatePresence>
            {isOpen && (
            <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="fixed top-0 right-0 w-3/4 h-full bg-white shadow-xl flex flex-col p-6 gap-6 z-50 md:hidden"
            >
                <div className="flex justify-between items-center mb-4">
                    <Image src="/Logo.png" alt="LOGO" width={120} height={20} />
                    <button onClick={toggleMenu}>
                        <X size={28} />
                    </button>
                </div>

                <ul className="flex flex-col gap-4 text-[#18191f] font-medium text-lg">
                    {["Home", "Service", "Feature", "Product", "Testimoial", "FAQ"].map((item) => (
                        <li key={item} className="hover:text-blue-600 cursor-pointer transition" onClick={toggleMenu}>
                        {item}
                        </li>
                    ))}
                </ul>

                <div className="flex flex-col gap-3 pt-4">
                    <button className="w-full px-4 py-2 text-[#4CAF4F] border border-[#F5F7FA] rounded-md hover:bg-gray-100 transition">
                        Login
                    </button>
                    <button className="w-full px-4 py-2 bg-[#4CAF4F] text-white border border-[#4CAF4F] rounded-md hover:bg-green-500 transition">
                        Signup
                    </button>
                </div>
            </motion.div>
            )}
        </AnimatePresence>
        </nav>
    )
}

export default Navbar
