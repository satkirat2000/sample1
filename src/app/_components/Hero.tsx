import Image from "next/image";
import React from "react";

const Hero = () => {
    return (
        <div className="md:h-[630px] bg-[linear-gradient(180deg,_#FA002D_0%,_#FA002D_100%)] h-[694px] md:bg-[url('/hero/herobgimg.png')] bg-center bg-cover flex items-center">
            <div className="md:pl-[220px] p-[20px] w-[100%] md:w-[50%] md:block flex flex-col items-center gap-14">
                <h1 className="md:w-[560px] leading-tight text-[40px] md:text-[48px]">
                    Desenvolvimento de Sistemas Web e Mobile
                </h1>
                <p className="md:pl-4 md:w-[520px] text-[16px]">
                    Atuamos no desenvolvimento de sistemas web, mobile e
                    integração de banco de dados, sob medida e sob demanda.
                </p>
                <button className="outline-none md:m-10 w-[271px] h-[60px] bg-gradient-to-bl from-[#FFF] to-[#555] rounded-[5px] text-[black] font-bold text-[18px]">
                    SABER MAIS AGORA
                </button>
            </div>
            <div className="w-[50%] p-20 md:block hidden">
                <Image
                    src="/hero/set2.png"
                    alt="set2"
                    width={600}
                    height={20}
                />
            </div>
        </div>
    );
};

export default Hero;
