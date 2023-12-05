import React from "react";
import FeaturesCard from "./FeaturesCard";

interface cardData {
    image: string;
    title: string;
    description: string;
}

const Features = () => {
    const cards: cardData[] = [
        {
            image: "/features/artificial-intelligence.png",
            title: "+150",
            description: "Profissionais já contratados",
        },
        {
            image: "/features/group.png",
            title: "+100",
            description: "Profissionais já contratados",
        },
        {
            image: "/features/world-grid.png",
            title: "+2500",
            description: "Profissionais já contratados",
        },
    ];

    return (
        <div className="custom-scroll overflow-x-scroll flex md:justify-center">
            <div className="p-4 py-20 md:p-20 flex gap-4 justify-center">
            {cards.map((item, index) => (
                <FeaturesCard
                    key={index}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                />
            ))}
            </div>
        </div>
    );
};

export default Features;
