import Image from "next/image";
import React from "react";
import { DetailsProps } from "./Details";

const DetailsCard = ({ title, description, image, reversed }:DetailsProps) => {
    return (
        <div className={`flex md:flex-row flex-col my-10 items-center ${reversed ? "md:flex-row-reverse" : ""}`}>
            <div className="flex-[0.5] flex justify-center">
                <Image src={image} alt="apps" width={500} height={500} />
            </div>
            <div className="flex-[0.5]">
                <h1 className="mb-10 text-[35px] font-bold " dangerouslySetInnerHTML={{ __html: title}}></h1>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default DetailsCard;
