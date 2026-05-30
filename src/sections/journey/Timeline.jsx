import React from "react";

import TimelineItem from "../../components/ui/TimelineItem";

const Timeline = () => {

    const timelineData = [

        {
            year: "Mid 2025 – Present",

            title: "Web Development Journey",

            description:
                "Started learning modern web development with HTML, CSS, JavaScript, and responsive design. Built multiple personal projects focused on clean UI structure and usability.",
        },

        {
            year: "Dec 2024 – Present",

            title: "E-commerce Side Project",

            description:
                "Explored e-commerce workflows including product listings, branding visuals, and workflow management while gaining practical exposure to digital operations and user-focused design.",
        },

        {
            year: "2019 – Present",

            title: "Content Creation & Video Production",

            description:
                "Developed experience in video editing, thumbnail design, and visual storytelling while understanding audience-focused content workflows.",
        },

        {
            year: "2018 – 2020",

            title: "Diploma in Computer Science",

            description:
                "Studied programming basics, problem solving, and core technical concepts.",
        },

        {
            year: "2016 – 2018",

            title: "Senior Secondary (CBSE)",

            description:
                "Completed higher secondary education under CBSE curriculum with focus on foundational academic development.",
        },

        {
            year: "2014 – 2016",

            title: "High School (CBSE)",

            description:
                "Completed secondary education under CBSE curriculum, building core academic and analytical foundations.",
        }

    ];

    return (

        <div
            className="
                relative

                flex
                flex-col

                gap-12
            "
        >

            {/* TIMELINE LINE */}

            <div
                className="
                    hidden md:block

                    absolute

                    left-44.75
                    top-0

                    w-0.5
                    h-full

                    opacity-60

                    bg-linear-to-b
                    from-transparent
                    via-(--primary)
                    to-transparent
                "
            ></div>


            {timelineData.map((item, index) => (

                <div
                    key={index}
                    className="reveal"
                >

                    <TimelineItem
                        year={item.year}
                        title={item.title}
                        description={item.description}
                    />

                </div>

            ))}

        </div>

    );

};

export default Timeline;