"use client"

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {

    const [showNavbar, setShowNavbar] = useState(false);
    const navbarRef = useRef<HTMLDivElement>(null);
    const handleShowNavbar = (e: React.MouseEvent<HTMLDivElement | HTMLAnchorElement>) => {
        const navbar = navbarRef.current;
        navbar!.classList.toggle("active");
        setShowNavbar(!showNavbar);
    }
    const handleHideNavbar = (e: React.MouseEvent<HTMLDivElement | HTMLAnchorElement>) => {
        const navbar = navbarRef.current;
        navbar!.classList.remove("active");
        setShowNavbar(false);
    }

    return (
        <div className="flex flex-row-reverse justify-center md:flex-row items-center md:justify-between h-[70px] bg-navfoot md:px-40 sticky top-0 z-50">
            <Link onClick={handleHideNavbar} href={"/"}><Image src="/logo.png" alt="logo" width={150} height={10} className="h-8 md:h-10 md:flex" /></Link>

            <div onClick={handleShowNavbar} className="top-[20px] left-[20px] text-[22px] absolute md:hidden">{showNavbar ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}</div>
            <div ref={navbarRef} className="customwidth shadow-[0_20px_20px_-30px_inset] md:shadow-none absolute bg-navfoot transition-all h-[calc(100vh-70px)] overflow-hidden left-0 top-[70px] md:top-0 md:relative md:bg-navfoot md:h-10 md:w-80 md:flex md:items-center">
                <ul className="text-snowWhite p-10 md:p-0 gap-6 md:gap-0 flex-col text-center md:flex-row flex w-full justify-between">
                    <li><Link onClick={handleHideNavbar} href={"/"}>Home</Link></li>
                    <li><Link onClick={handleHideNavbar} href={"/about"}>About</Link></li>
                    <li><Link onClick={handleHideNavbar} href={"/contact"}>Contact</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
