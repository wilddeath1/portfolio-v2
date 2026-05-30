import React from "react";
const ProjectCard = ({
    title,
    image,
    link,
}) => {

    return (

        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"

            className="
                relative

                block

                w-full
                h-105

                overflow-hidden

                rounded-3xl

                border
                border-white/10

                bg-(--bg-primary)

                shadow-2xl
            "
        >

            {/* IMAGE */}

            <img
                src={image}
                alt={title}
                loading="lazy"
                className="
                    absolute
                    inset-0

                    w-full
                    h-full

                    object-cover
                "
            />


            {/* DARK OVERLAY */}

            <div
                className="
                    absolute
                    inset-0

                    bg-linear-to-t
                    from-black/80
                    via-black/20
                    to-transparent
                "
            />


            {/* TITLE */}

            <div
                className="
                    absolute
                    bottom-0
                    left-0

                    w-full

                    p-8

                    z-10
                "
            >

                <h3
                    className="
                        text-2xl
                        font-bold

                        text-white

                        text-center
                    "
                >

                    {title}

                </h3>

            </div>

        </a>

    );

};

export default ProjectCard;