import React from "react";
import DetailsCard from "./DetailsCard";

export interface DetailsProps {
    title: string,
    description: string,
    image: string,
    reversed?: string
}

const Details = () => {

    const detailsCardData: DetailsProps[] = [
        {
            title: `Desenvolvimento de sistemas <span style="color: #FA002D;">web</span> e <span style="color: #FA002D;">mobile</span>`,
            description: `Trabalhamos no desenvolvimento de sistemas web, mobile e integração de banco de dados, sob medida e sob demanda. As tecnologias principais são php, c#, react native, angular.js, react.js, node.js, java, entre outras. O desenvolvimento de sistemas tem as seguintes modalidades:
            Desenvolvimento de projeto, da análise a implantação;
            Desenvolvimento de projeto, desenvolvimento e implantação;
            Desenvolvimento de demandas pontuais em sistemas legados;
            Sustentação de sistemas reativa ou preditiva;`,
            image: "/Details/webmobile.png",
        },
        {
            title: `Maximizando sua produtividade <span style="color: #FA002D;">Outsourcing</span>`,
            description: `Buscamos profissionais no mercado de trabalho para atuar em nossos clientes. O profissional passa por uma seleção, testes e avaliações para identificar se o perfil do candidato é compatível com o perfil da vaga de nossos clientes. O profissional pode ser contratado das seguintes maneiras:
            PJ ou CLT por nós e alocado dentro do escritório do cliente;
            PJ ou CLT por nós e atuando em nosso escritório com demandas do cliente;`,
            image: `/Details/Outsourcing.png`,
            reversed: "flex-row-reverse"
        },
        {
            title: `Sustentação de sistemas <span style="color: #FA002D;">legados</span> e <span style="color: #FA002D;">aplicativos</span>`,
            description: `Trabalhamos no conhecimento dos sistemas legado de nossos clientes para que possamos dar o suporte, pequenos ajustes e desenvolvimento necessário para a evolução e continuidade dos mesmos. Montamos e adequamos a equipe de sustentação conforme a realidade de cada empresa. Linguagens que atendemos na sustentação: .Net, C#, PHP e React Native`,
            image: "/Details/apps.png",
        },
        {
            title: `Seleção com <span style="color: #FA002D;">precisão hunting</span>`,
            description: `Buscamos profissionais no mercado de trabalho para os nossos clientes contratarem internamente. O profissional passa por uma seleção, testes e avaliações para identificar se o perfil do candidato é compatível com o perfil da vaga de nossos clientes. O profissional pode ser contratado da seguinte maneira:
            PJ ou CLT vinculado ao cliente, e atuando dentro das dependências do cliente;`,
            image: "/Details/hunting.png",
            reversed: "flex-row-reverse"
        }
    ]

    return (
        <div className="p-[50px] px-[20px] md:px-[150px]">
            {
                detailsCardData.map((item, index) => (<DetailsCard key={index} title={item.title} description={item.description} image={item.image} reversed={item.reversed} />))
            }
        </div>
    );
};

export default Details;
