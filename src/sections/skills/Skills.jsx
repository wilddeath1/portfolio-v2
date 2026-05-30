import React from "react";

import SectionTag from "../../components/ui/SectionTag";

import SectionHeading from "../../components/ui/SectionHeading";

import SkillsGrid from "./SkillsGrid";

const Skills = () => {

    return (

        <section
            id="skills"
            className="
                py-24
                bg-[var(--bg-primary)]
            "
        >

            <div
                className="
                    w-[min(92vw,85rem)]
                    mx-auto
                "
            >

                {/* HEADER */}

                <div className="text-center mb-12 reveal">

                    <SectionTag text='Skills' />

                    <SectionHeading text='Technical Expertise' />

                    <p
    className="
        text-[var(--text-secondary)]
        mt-4
        max-w-2xl
        mx-auto
    "
>

    A combination of technical,
    creative, and workflow-based
    digital skills.

</p>

                </div>


                {/* GRID */}

                <SkillsGrid />


            </div>

        </section>

    );

};

export default Skills;