import React from "react";

import SectionTag from "../../components/ui/SectionTag";

import SectionHeading from "../../components/ui/SectionHeading";

import ProjectsSlider from "./ProjectsSlider";

const Projects = () => {

    return (

        <section
            id="projects"

            className="
                py-24

                bg-(--bg-secondary)

                overflow-hidden
            "
        >

            <div
                className="
                    w-[min(92vw,85rem)]
                    mx-auto
                "
            >

                {/* ============================= */}
                {/* HEADER */}
                {/* ============================= */}

                <div
                    className="
                        text-center

                        mb-12

                        reveal
                    "
                >

                    <SectionTag text="Projects" />

                    <SectionHeading text="Featured Projects" />


                    <p
                        className="
                            mt-4

                            max-w-2xl
                            mx-auto

                            leading-7

                            text-(--text-secondary)
                        "
                    >

                        A collection of creative,
                        development, and media-focused
                        projects showcasing design,
                        production, and technical execution.

                    </p>

                </div>


                {/* ============================= */}
                {/* PROJECT SLIDER */}
                {/* ============================= */}

<ProjectsSlider />

                

            </div>

        </section>

    );

};

export default Projects;