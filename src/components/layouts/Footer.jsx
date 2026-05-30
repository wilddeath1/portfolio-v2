import React from "react";

const Footer = () => {

    return (

        <footer
            className="
                relative

                px-6
                md:px-12

                py-7

                border-t
                border-white/10
                 bg-(--bg-primary)
            "
        >

            <div
                className="
                    w-full

                    flex
                    flex-col
                    md:block

                    items-center
                "
            >

                {/* LOGO */}

                <div
                    className="
                        md:absolute
                        md:left-12
                        md:top-1/2
                        md:-translate-y-1/2

                        text-[1.1rem]
                        font-bold

                        mb-2
                        md:mb-0
                    "
                >

                    <span className="text-(--primary)">

                        Ayush

                    </span>


                    <span className="text-[#f59e0b]">

                        {" "}Tyagi

                    </span>

                </div>


                {/* COPYRIGHT */}

                <p
                    className="
                        text-center

                        text-[0.9rem]

                        text-(--text-secondary)
                    "
                >

                    © 2026 Ayush Tyagi.
                    All rights reserved.

                </p>

            </div>

        </footer>

    );

};

export default Footer;