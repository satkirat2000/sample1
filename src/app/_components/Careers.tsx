import React from "react";
import CareersCard from "./CareersCard";

const Careers = () => {
    return (
        <div className="md:overflow-x-scroll flex flex-col md:flex-row md:px-[100px] md:py-[50px] md:h-[486px] bg-[url('/careers/backgroundimg.png')]">
            <div className="p-[40px] md:pl-24 md:pr-4 w-fit min-w-fit">
                <h1 className="text-[36px] md:text-[48px] md:mt-[12%]">Vagas recentes</h1>
                <p className="text-[20px] md:text-[24px] m-0">Construa uma carreira com a gente</p>
            </div>
            <div className="p-[20px] pt-0 md:p-0 overflow-x-scroll flex items-center">
                <div className="flex gap-4">
                    <CareersCard />
                    <CareersCard />
                    <CareersCard />
                    <CareersCard />
                </div>
            </div>
        </div>
    );
};

export default Careers;
