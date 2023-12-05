import React from "react";
import { IContactCard } from "./Contact";

const ContactCard = ({ name, type, email, phoneNumber }:IContactCard) => {
    return (
        <div className="h-[409px] w-[342px] bg-[linear-gradient(198deg,_#1F1F1F_9.55%,_#000_125.88%)]">
            <div className="bg-[#FA002D] h-[156px]"></div> 
            <div className="p-6 text-center">
                <h1 className="text-[24px] font-bold">{name}</h1>
                <h1 className="text-[20px] my-4">{type}</h1>
                <h1 className="text-[20px]">{email}</h1>
                <h1 className="text-[20px]">{phoneNumber}</h1>
            </div>
        </div>
    );
};

export default ContactCard;
