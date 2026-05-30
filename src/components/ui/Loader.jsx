import React, { useEffect, useState } from "react";

const Loader = () => {

    const [hideLoader, setHideLoader] = useState(false);

    useEffect(() => {

        const timer = setTimeout(() => {

            setHideLoader(true);

        }, 1600);

        return () => clearTimeout(timer);

    }, []);


    return (

        <div
            className={`
                fixed
                inset-0

                flex
                items-center
                justify-center

                z-9999

                bg-(--bg-primary)

                transition-all
                duration-500

                ${hideLoader
                    ? "opacity-0 invisible"
                    : "opacity-100 visible"
                }
            `}
        >

            <div className="text-center">

                {/* LOGO */}

                <h1
                    className="
                        text-[2rem]
                        font-bold

                        mb-6
                    "
                >

                    <span className="text-(--primary)">

                        Ayush

                    </span>


                    <span className="text-[#f59e0b]">

                        {" "}Tyagi

                    </span>

                </h1>


                {/* BAR */}

                <div
                    className="
                        w-50
                        h-1

                        overflow-hidden

                        rounded-full

                        bg-(--loader-empty)

                        mx-auto
                    "
                >

                    <div
                        className="
                            h-full

                            bg-linear-to-r
                            from-(--primary-gradient-1)
                            to-(--primary-gradient-2)

                            animate-[loaderFill_1.5s_ease_forwards]
                        "
                    ></div>

                </div>


                {/* TEXT */}

                <p
                    className="
                        mt-4

                        text-[0.85rem]

                        text-(--text-secondary)
                    "
                >

                    Best experienced on desktop

                </p>

            </div>

        </div>

    );

};

export default Loader;