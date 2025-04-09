import { CommunityProps } from "@/types/types";
import CommunityCard from "./CommunityCard";


const cards: CommunityProps[] = [
    {
        icon: "/community/Icon1.png",
        title: "Membership Organisations",
        description: "Our membership management software provides full automation of membership renewals and payments.",
        },

        {
        icon: "/community/Icon2.png",
        title: "National Associations",
        description: "Our membership management software provides full automation of membership renewals and payments.",
        },

        {
        icon: "/community/Icon3.png",
        title: "Clubs And Groups",
        description: "Our membership management software provides full automation of membership renewals and payments.",
    },
];

const Community = () => {
    return (
        <section className="flex flex-col items-center justify-center w-full">
            <div>
                <h1 className="text-[#4D4D4D] font-semibold text-4xl text-center w-full pb-2">
                    Manage your entire community <br/>in a single system
                </h1>
                <h3 className="text-[#717171] font-normal text-sm text-center">
                    Who is Nextcent suitable for?
                </h3>
            </div>

            <div className="flex flex-row justify-between items-center w-full px-[144px]">
                {cards.map((card, index) => (
                    <CommunityCard key={index} {...card} />
                ))}
            </div>
        </section   >
    )
}

export default Community
