import React from "react";

import SectionTag from "../../components/ui/SectionTag";

import SectionHeading from "../../components/ui/SectionHeading";

import Timeline from "./Timeline";

const Journey = () => {

    return (

        <section
            id="education"
            className="
                py-24

                bg-(--bg-primary)
            "
        >

            <div
                className="
                    w-[min(92vw,85rem)]
                    mx-auto
                "
            >

                {/* HEADER */}

                <div
                    className="
                        text-center

                        mb-12

                        reveal
                    "
                >

                    <SectionTag text="Education" />

                    <SectionHeading text="Education & Experience" />

                </div>


                {/* TIMELINE */}

                <Timeline />

            </div>

        </section>

    );

};

export default Journey;