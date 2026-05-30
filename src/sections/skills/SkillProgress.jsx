import React from "react";

const SkillProgress = ({ name, level }) => {

    return (

        <div className="flex flex-col gap-2">

            <div className="flex justify-between text-sm">

                <span className="text-[var(--text-primary)]">

                    {name}

                </span>

                <span className="text-[var(--text-secondary)]">

                    {level}%

                </span>

            </div>


            {/* BAR */}

            <div
                className="
                    h-2
                    rounded-full
                    bg-white/10
                    overflow-hidden
                "
            >

                <div
                    className="
                        h-full
                        rounded-full
                        bg-gradient-to-r
                        from-[var(--primary-gradient-1)]
                        to-[var(--primary-gradient-2)]
                    "
                    style={{ width: `${level}%` }}
                />

            </div>

        </div>

    );

};

export default SkillProgress;