import React, { useEffect, useState } from 'react';
import GradientButton from '../ui/GradientButton';

const Navbar = () => {

    // =============================
    // MOBILE MENU STATE
    // =============================

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // =============================
    // ACTIVE NAV LINK
    // =============================

    const [activeSection, setActiveSection] = useState("home");


    // =============================
    // NAV LINKS ARRAY
    // =============================

    const navLinks = [

        { name: "Home", href: "#home" },

        { name: "About", href: "#about" },

        { name: "Skills", href: "#skills" },

        { name: "Projects", href: "#projects" },

        { name: "Education", href: "#education" },

        { name: "Contact", href: "#contact" }

    ];

    useEffect(() => {

        const sections = document.querySelectorAll("section");

const handleScroll = () => {

    let current = "home";

    const middleOfScreen =
        window.scrollY + window.innerHeight / 2;

    sections.forEach((section) => {

        const sectionTop = section.offsetTop;

        const sectionHeight = section.offsetHeight;

        const sectionBottom =
            sectionTop + sectionHeight;

        if (
            middleOfScreen >= sectionTop &&
            middleOfScreen < sectionBottom
        ) {

            current = section.getAttribute("id");

        }

    });

    // Last section fix

    const bottomReached =
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 50;

    if (bottomReached) {

        current = "contact";

    }

    setActiveSection(current);

};

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => {

            window.removeEventListener("scroll", handleScroll);

        };

    }, []);


    // =============================
    // COMMON NAV LINK STYLES
    // =============================

    const navLinkAnchor = `
    no-underline
    text-[clamp(0.9rem,1vw,1rem)]
    transition-colors
    duration-300
`;


    return (

        <nav
            id="navbar"
            className="
                fixed
                top-0
                left-0
                w-full
                z-50
                backdrop-blur-md
                bg-(--navbar-bg)
                
                border-white/5
            "
        >

            <div
                id="nav-container"
                className="
                    flex
                    items-center
                    justify-between
                    px-6
                    md:px-12
                    py-5
                "
            >

                {/* ============================= */}
                {/* LOGO */}
                {/* ============================= */}

<a
    href="#home"
    id="logo"
    className="
        text-xl
        font-bold
        select-none
        cursor-pointer
        no-underline
    "
>

                    <span className="text-(--primary)">
                        Ayush{" "}
                    </span>

                    <span className="text-[#f59e0b]">
                        Tyagi
                    </span>

                </a>


                {/* ============================= */}
                {/* DESKTOP NAVIGATION */}
                {/* ============================= */}

                <div
                    id="nav-right"
                    className="
                        hidden
                        md:flex
                        items-center
                        gap-6
                    "
                >

                    {/* NAV LINKS */}

                    <div
                        id="nav-links"
                        className="
                            flex
                            items-center
                            gap-[clamp(1rem,2vw,2rem)]
                        "
                    >

                        {navLinks.map((link) => (

                            <a
                                key={link.name}
                                href={link.href}
                                className={`
    ${navLinkAnchor}

    ${activeSection === link.href.replace("#", "")
                                        ? "text-(--primary)"
                                        : "text-(--text-secondary) hover:text-(--text-primary)"
                                    }
`}
                            >
                                {link.name}
                            </a>

                        ))}

                    </div>


                    {/* RESUME BUTTON */}

                    <GradientButton
                        href="/Ayush-Tyagi-Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >

                        Resume

                    </GradientButton>

                </div>


                {/* ============================= */}
                {/* MOBILE HAMBURGER */}
                {/* ============================= */}

                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="
                        md:hidden
                        flex
                        flex-col
                        justify-between
                        w-7
                        h-5
                        relative
                        z-1000
                    "
                >

                    <span
                        className={`
                            h-0.75
                            w-full
                            rounded-full
                            bg-white
                            transition-all
                            duration-300

                            ${isMenuOpen
                                ? "rotate-45 translate-y-2"
                                : ""
                            }
                        `}
                    />

                    <span
                        className={`
                            h-0.75
                            w-full
                            rounded-full
                            bg-white
                            transition-all
                            duration-300

                            ${isMenuOpen
                                ? "opacity-0"
                                : ""
                            }
                        `}
                    />

                    <span
                        className={`
                            h-0.75
                            w-full
                            rounded-full
                            bg-white
                            transition-all
                            duration-300

                            ${isMenuOpen
                                ? "-rotate-45 -translate-y-2"
                                : ""
                            }
                        `}
                    />

                </button>

            </div>


            {/* ============================= */}
            {/* MOBILE MENU */}
            {/* ============================= */}

            <div
                className={`
                    md:hidden
                    absolute
                    top-full
                    right-6

                    flex
                    flex-col
                    gap-5

                    min-w-40

                    px-6
                    py-6

                    rounded-2xl

                    border
                    border-white/10

                    bg-[rgba(5,6,10,0.92)]

                    backdrop-blur-xl

                    transition-all
                    duration-300

                    ${isMenuOpen
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-3"
                    }
                `}
            >

                {/* MOBILE NAV LINKS */}

                {navLinks.map((link) => (

                    <a
                        key={link.name}
                        href={link.href}
                        className={`
    ${navLinkAnchor}

    ${activeSection === link.href.replace("#", "")
                                ? "text-(--primary)"
                                : "text-(--text-secondary) hover:text-(--text-primary)"
                            }
`}
                        onClick={() => setIsMenuOpen(false)}
                    >

                        {link.name}

                    </a>

                ))}


                {/* MOBILE RESUME BUTTON */}

                <GradientButton
                    href="/Ayush-Tyagi-Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                >

                    <i className="fa-solid fa-file-arrow-down mr-1 mt-0.5"> </i>{" "}Resume

                </GradientButton>

            </div>

        </nav>

    );

};

export default Navbar;