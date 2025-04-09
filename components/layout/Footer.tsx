import Image from "next/image";
import { FaInstagram, FaDribbble, FaTwitter, FaYoutube } from "react-icons/fa";
import { footerLinks } from "@/data/footerLinks";

const Footer = () => {
    return (
        <footer className="w-full bg-[#263238] py-16 px-[165px] gap-[125px]">
        <div className="flex flex-row justify-center gap-8">
            {/* Logo and Socials */}
            <div className="flex flex-col items-start mr-32 gap-4">
                <div className="flex items-center space-x-2 mb-4">
                    <Image src="/FooterLogo.png" alt="Nexcent Logo" width={138} height={26} />
                </div>
                <p className="text-sm">Copyright © 2020 Nexcent ltd.</p>
                <p className="text-sm mb-4">All rights reserved</p>
                <div className="flex space-x-4 mt-2 text-xl">
                    <FaInstagram />
                    <FaDribbble />
                    <FaTwitter />
                    <FaYoutube />
                </div>
            </div>

            {/* Dynamic Footer Sections */}
            {footerLinks.map((section, index) => (
            <div key={index}>
                <h3 className="text-white font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-2 text-sm">
                {section.links.map((link, i) => (
                    <li key={i} className="hover:text-white cursor-pointer">
                    {link}
                    </li>
                ))}
                </ul>
            </div>
            ))}

            {/* Subscribe Section */}
            <div>
            <h3 className="text-white font-semibold mb-4">Stay up to date</h3>
            <div className="flex">
                <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-3 py-2 rounded-l-md bg-gray-800 text-white text-sm focus:outline-none"
                />
                <button className="px-4 bg-blue-600 rounded-r-md text-white hover:bg-blue-500">
                ➤
                </button>
            </div>
            </div>
        </div>
        </footer>
    );
};

export default Footer;
