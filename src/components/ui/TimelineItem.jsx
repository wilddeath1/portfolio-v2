import React from "react";

const TimelineItem = ({ year, title, description }) => {

    return (

        <div
            className="
                relative

                grid
                md:grid-cols-[220px_1fr]

                gap-6
                md:gap-16
            "
        >

            {/* YEAR */}

            <div
                className="
                    text-[0.9rem]
                    text-(--text-secondary)

                    md:pt-7
                "
            >

                {year}

            </div>


            {/* DOT */}

            <div
                className="
                    hidden md:block

                    absolute

                    left-43
                    top-7

                    w-4
                    h-4

                    rounded-full

                    bg-(--primary)

                    shadow-[0_0_0_4px_var(--bg-primary)]
                "
            ></div>


            {/* CONTENT */}

            <div
                className="
                    border
                    border-white/10

                    rounded-xl

                    p-6

                    bg-(--bg-primary)

                    transition-all
                    duration-300

                    hover:border-(--primary)
                    hover:shadow-[0_0_16px_var(--primary-glow)]
                    hover:-translate-y-0.5
                    active:scale-[0.98]
                    active:border-(--primary)
                "
            >

                <h3
                    className="
                        text-[1.1rem]
                        font-semibold

                        mb-2

                        text-(--text-primary)
                    "
                >

                    {title}

                </h3>


                <p
                    className="
                        text-[0.95rem]
                        leading-7

                        text-(--text-secondary)
                    "
                >

                    {description}

                </p>

            </div>

        </div>

    );

};

export default TimelineItem;