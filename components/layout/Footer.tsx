import Image from "next/image";
import { FaInstagram, FaDribbble, FaTwitter, FaYoutube } from "react-icons/fa";
import { footerLinks } from "@/data/footerLinks";

const Footer = () => {
    return (
        <footer className="w-full bg-[#263238] py-16 px-[165px]">
            <div className="flex flex-row justify-center gap-8">
                <div className="flex flex-col items-start w-[350px] gap-4 mr-30">
                    <div className="flex items-center space-x-2 mb-4">
                        <Image src="/FooterLogo.png" alt="Nexcent Logo" width={138} height={26} />
                    </div>
                    <p className="text-sm text-white">Copyright © 2020 Nexcent ltd.</p>
                    <p className="text-sm mb-4 text-white">All rights reserved</p>
                    <div className="flex space-x-4 mt-2 text-xl text-white">
                        <FaInstagram/>
                        <FaDribbble />
                        <FaTwitter />
                        <FaYoutube />
                    </div>
                </div>

                {footerLinks.map((section, index) => (
                <div key={index} className="flex flex-col items-start gap-6 pr-2">
                    <h3 className="text-white font-semibold">{section.title}</h3>
                    <ul className="space-y-2 text-[#F5F7FA] text-sm">
                    {section.links.map((link, i) => (
                        <li key={i} className="hover:text-white cursor-pointer">
                        {link}
                        </li>
                    ))}
                    </ul>
                </div>
                ))}

                <div className="pl-4 flex flex-col items-start gap-6">
                    <h3 className="text-white font-semibold">Stay up to date</h3>
                    <div className="flex">
                        <input
                        type="email"
                        placeholder="Your email address"
                        className="flex-1 px-3 py-2 rounded-l-md bg-[#2e4652] text-white text-sm focus:outline-none placeholder:text-white"
                        />
                        <button className="px-4 rounded-r-md text-white bg-[#2e4652]">
                        ➤
                        </button>
                    </div>
                </div>
        </div>
        </footer>
    );
};

export default Footer;
