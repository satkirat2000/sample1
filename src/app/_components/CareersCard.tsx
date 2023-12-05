import React from "react";

const CareersCard = () => {
    return (
        <div className="relative bg-[linear-gradient(198deg,_#1F1F1F_9.55%,_#000_125.88%)] h-[367px] w-[339px] p-[20px] rounded-[5px] shadow">
            <h1 className="text-[24px]">Desenvolvedor Fullstack Pleno React Native</h1>
            <div className="flex gap-2 py-[30px]">
                <div className="w-[87px] h-[37px] rounded-[7px] border border-[#FA002D] flex items-center justify-center"><p className="text-[14px]">Node.js</p></div>
                <div className="w-[87px] h-[37px] rounded-[7px] border border-[#FA002D] flex items-center justify-center"><p className="text-[14px]">Node.js</p></div>
            </div>
            <div className="flex gap-[20px]">
                <i className="fa-solid fa-location-pin text-[22px] w-[22px]"></i>
                <p>Localização</p>
            </div>
            <div className="flex gap-[20px] mt-4">
                <i className="fa-solid fa-briefcase text-[22px] w-[22px]"></i>
                <p>Remoto: Sim</p>
            </div>
            <div className="absolute bottom-[20px] left-0 w-[100%] flex justify-center">
                <button className="text-[20px] p-4">Ver detalhes  <i className="fa-solid fa-chevron-right text-[#FA002D]"></i></button>
            </div>
        </div>
    );
};

export default CareersCard;
