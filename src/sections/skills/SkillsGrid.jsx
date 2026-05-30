import React, { useState } from "react";

import SkillCard from "./SkillCard";

import skillsData from "./skillsData";

const SkillsGrid = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const handleCardClick = (index) => {

        setActiveIndex(

            activeIndex === index
                ? null
                : index

        );

    };

    return (

        <div
            className="
                grid
                grid-cols-1
                lg:grid-cols-2
                gap-6
            "
        >

            {skillsData.map((card, index) => (

                <div
                    key={index}
                    className="reveal"
                >

                    <SkillCard

                        {...card}

                        isActive={activeIndex === index}

                        onClick={() =>
                            handleCardClick(index)
                        }

                    />

                </div>

            ))}

        </div>

    );

};

export default SkillsGrid;