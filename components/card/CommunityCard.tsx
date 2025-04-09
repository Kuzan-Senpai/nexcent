import Image from "next/image";
import { CommunityProps } from "@/types/types";

type Props = CommunityProps;

export default function CommunityCard({ icon, title, description }: Props) {
    return (
        <div className="flex flex-col items-center justify-center text-center w-[295px] h-[275px] gap-4 px-8">
            <div>
                <Image
                    src={icon}
                    alt="community icon"
                    width={48}
                    height={48}
                />
            </div>
                <h2 className="text-[#4D4D4D] font-bold text-[28px] text-center gap-2"> {title} </h2>
                <p className="text-[#717171] font-normal text-sm text-center "> {description} </p>
            
        </div>
    )
}