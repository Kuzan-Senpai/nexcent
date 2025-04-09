// import { CommunityProps } from "@/types/types";
import CommunityCard from "../card/CommunityCard";
import { cards } from "@/data/communityTypes";

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
                {cards.map((cards, index) => (
                    <CommunityCard key={index} {...cards} />
                ))}
            </div>
        </section   >
    )
}

export default Community
