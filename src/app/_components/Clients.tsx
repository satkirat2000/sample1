import Image from "next/image";
import React from "react";

const Clients = () => {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-[30px]">Clientes que  confiam no nosso trabalho</h1>
            <div className="py-10 px-30 shadow-lg">
                <Image src="/brands/clients.png" alt="clients" width={1280} height={20} />
            </div>
        </div>
    );
};

export default Clients;
