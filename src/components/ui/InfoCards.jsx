// src/components/ui/InfoCard.jsx

import React from "react";

const InfoCards = ({
    icon,
    title,
    description,
    href,
    children,
    centered = false,
    className = ""
}) => {
    const Component = href ? "a" : "div";
    return (

        <Component

            href={href}

            className={` group
        flex
        items-start
        gap-4

        p-6

        rounded-xl

        border
        border-white/10

        bg-(--bg-primary)

        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-(--primary)
        hover:shadow-[0_0_14px_var(--primary-glow)]
        active:scale-[0.98]
active:border-(--primary)

        ${href ? "no-underline text-inherit" : ""}

        ${centered ? "justify-center text-center" : ""}

${className}
    `}
        >
            {/* ICON */}

            <div
                className="
    w-11.5
    h-11.5

    min-w-11.5

    flex
    items-center
    justify-center

    rounded-full

    bg-(--primary-soft)

    text-[1.1rem]
    text-(--primary)

    transition-all
    duration-300

group-hover:bg-(--primary)
group-hover:text-white

group-active:bg-(--primary)
group-active:text-white
"
            >

                <i className={icon}></i>

            </div>


            {/* TEXT */}

            <div
                className={`
        flex
        flex-col
        justify-center

        ${centered ? "items-center text-center" : ""}
    `}
            >

                <h4
                    className="
            leading-[1.2]

            text-[1rem]
            font-semibold

            text-(--text-primary)

            mb-1
        "
                >

                    {title}

                </h4>


                {description && (

                    <p
                        className="
                leading-normal

                text-[0.9rem]

                text-(--text-secondary)
            "
                    >

                        {description}

                    </p>

                )}


                {children}

            </div>
        </Component>

    );
};

export default InfoCards;