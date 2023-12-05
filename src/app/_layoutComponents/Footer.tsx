import React from "react";
import Image from "next/image";

const Footer = () => {
    return (
        <div className="flex flex-col justify-between items-center h-60 bg-navfoot b">
            <div className="flex flex-col items-center">
                <Image className="mt-16 mb-4" src="/logo.png" alt="logo" width={200} height={50} />
                <ul className="flex items-center gap-5">
                    <li><i className="fa-lg fa-brands fa-instagram"></i></li>
                    <li><i className="fa-lg fa-brands fa-facebook-f"></i></li>
                    <li><i className="fa-lg fa-brands fa-x-twitter"></i></li>
                    <li><i className="fa-lg fa-brands fa-linkedin-in"></i></li>
                </ul>
            </div>
            <p className="mb-4">Ⓒ 2020, MazzaFC - Systems & Outsourcing</p>
        </div>
    );
};

export default Footer;
