import React from "react";
import InfoCards from "../../components/ui/InfoCards";


const AboutRight = () => {

    const aboutCards = [

        {
            icon: "fa-solid fa-layer-group",

            title: "Cross-Functional Execution",

            description:
                "I work across design, development, and content production workflows.",
        },

        {
            icon: "fa-solid fa-bolt",

            title: "Problem Solver",

            description:
                "I approach tasks with a focus on clarity, efficiency, and practical outcomes.",
        },

        {
            icon: "fa-solid fa-rocket",

            title: "Fast Learner",

            description:
                "I quickly adapt to new tools, workflows, and creative or technical systems.",
        },

    ];


    return (

        <div className="flex flex-col gap-6">

    {aboutCards.map((card, index) => (

        <div
            key={index}
            className="reveal"
            style={{
                transitionDelay: `${index * 150}ms`
            }}
        >

            <InfoCards
                icon={card.icon}
                title={card.title}
                description={card.description}
            />

        </div>

    ))}

</div>
    );
};

export default AboutRight;