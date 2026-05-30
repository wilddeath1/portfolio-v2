import React from "react";
import SkillProgress from "./SkillProgress";

const SkillCard = ({
    title,
    subtitle,
    preview,
    more,
    skills,
    isActive,
    onClick,
}) => {

    return (

        <div

            onClick={onClick}

            className={`
                cursor-pointer

                rounded-2xl

                border
                border-white/10

                bg-[var(--bg-primary)]

                p-6

                transition-all
                duration-300

                hover:border-[var(--primary)]
                hover:-translate-y-1

                ${isActive
                    ? "border-[var(--primary)] shadow-[0_0_18px_var(--primary-glow)]"
                    : ""
                }
            `}
        >

            {/* HEADER */}

            <div className="mb-6">

                <h3
                    className="
                        text-xl
                        font-semibold
                        text-[var(--text-primary)]
                        mb-2
                    "
                >

                    {title}

                </h3>


                <p
                    className="
                        text-sm
                        text-[var(--text-secondary)]
                        mb-5
                    "
                >

                    {subtitle}

                </p>


                {/* PREVIEW PILLS */}

                <div className="flex flex-wrap gap-2">

                    {preview.map((item, index) => (

                        <span
                            key={index}
                            className="
                                px-3
                                py-1

                                rounded-full

                                text-xs

                                bg-[var(--primary-soft)]
                                text-[var(--primary)]
                            "
                        >

                            {item}

                        </span>

                    ))}


                    <span
                        className="
                            px-3
                            py-1

                            rounded-full

                            text-xs

                            bg-white/10
                            text-[var(--text-secondary)]
                        "
                    >

                        {more}

                    </span>

                </div>

            </div>


            {/* EXPANDABLE CONTENT */}

            <div
                className={`
                    grid
                    transition-all
                    duration-500

                    ${isActive
                        ? "grid-rows-[1fr] opacity-100 mt-6"
                        : "grid-rows-[0fr] opacity-0"
                    }
                `}
            >

                <div className="overflow-hidden">

                    <div className="flex flex-col gap-5">

                        {skills.map((skill, index) => (

                            <SkillProgress
                                key={index}
                                name={skill.name}
                                level={skill.level}
                            />

                        ))}

                    </div>

                </div>

            </div>

        </div>

    );

};

export default SkillCard;