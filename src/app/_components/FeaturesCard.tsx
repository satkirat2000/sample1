import Image from "next/image";
import React from "react";

interface cardData {
    image: string;
    title: string;
    description: string;
}

const FeaturesCard = ({ image, title, description }: cardData) => {
    return (
        <div className="h-[371px] w-[339px] flex flex-col items-center bg-gradient-to-b from-[#1F1F1F] from-10% to-[#000] to-100% rounded-[15px]">
            <div className="flex flex-col h-48 justify-end">
                <Image src={image} alt="image" width={130} height={50} />
            </div>
            <h1 className="text-[30px]">{title}</h1>
            <p className="text-[13px]">{description}</p>
        </div>
    );
};

export default FeaturesCard;
