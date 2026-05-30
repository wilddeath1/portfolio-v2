import React, {
    useState,
    useEffect,
    useRef
} from "react";

import { motion } from "framer-motion";
import projectsData from "./projectsData";
import ProjectCard from "./ProjectCard";



const ProjectsSlider = () => {

    const [activeIndex, setActiveIndex] = useState(2);
    const isAnimating = useRef(false);
    const sliderRef = useRef(null);
    const nextSlide = () => {

        if (isAnimating.current) return;

        isAnimating.current = true;

        setActiveIndex(
            (prev) => (prev + 1) % projectsData.length
        );

        setTimeout(() => {

            isAnimating.current = false;

        }, 600);

    };

    const prevSlide = () => {

        if (isAnimating.current) return;

        isAnimating.current = true;

        setActiveIndex(
            (prev) =>
                prev === 0
                    ? projectsData.length - 1
                    : prev - 1
        );

        setTimeout(() => {

            isAnimating.current = false;

        }, 600);

    };

    useEffect(() => {

        const handleWheel = (e) => {

            if (Math.abs(e.deltaY) >
                Math.abs(e.deltaX)) {

                e.preventDefault();

                if (e.deltaY > 0) {

                    nextSlide();

                }

                else {

                    prevSlide();

                }

            }

        };

        sliderRef.current?.addEventListener(
            "wheel",
            handleWheel,
            { passive: false }
        );

        return () => {

            sliderRef.current?.removeEventListener(
                "wheel",
                handleWheel
            );

        };

    }, []);

    const getPosition = (index) => {

        const diff =
            (index - activeIndex + projectsData.length)
            % projectsData.length;

        if (diff === 0) return "center";

        if (diff === 1) return "right";

        if (diff === 2) return "farRight";

        if (diff === 4) return "left";

        if (diff === 3) return "farLeft";

    };

    const isMobile = window.innerWidth < 768;

    const positionStyles = {

        center: {
            x: 0,
            scale: 1,
            opacity: 1,
            zIndex: 5,
        },

        left: {
            x: isMobile ? -140 : -420,
            scale: 0.82,
            opacity: 0.4,
            zIndex: 3,
        },

        farLeft: {
            x: isMobile ? -220 : -760,
            scale: 0.65,
            opacity: 0.08,
            zIndex: 1,
        },

        right: {
            x: isMobile ? 140 : 420,
            scale: 0.82,
            opacity: 0.4,
            zIndex: 3,
        },

        farRight: {
            x: isMobile ? 220 : 760,
            scale: 0.65,
            opacity: 0.08,
            zIndex: 1,
        },

    };
    return (
        <div id="outer-container" className="h-135 w-full flex items-center justify-center">
            <div id="scroll-area-container"
                ref={sliderRef}
                className="
        relative
        h-105 w-190
        flex
        items-center
        justify-center
        overflow-visible"
            >

                {/* LEFT BUTTON */}

                <button
                    onClick={prevSlide}

                    className="
                    md:hidden
text-white
                    absolute
                    left-2
                    z-50

                    w-10
                    h-10

                    rounded-full

                    border
                    border-white/10

                    bg-black/50
                "
                >

                    <i className="fa-solid fa-chevron-left"></i>

                </button>


                {/* RIGHT BUTTON */}

                <button

                    onClick={nextSlide}

                    className="
                    md:hidden
text-white
                    absolute
                    right-2
                    z-50

                    w-10
                    h-10

                    rounded-full

                    border
                    border-white/10

                    bg-black/50
                "
                >

                    <i className="fa-solid fa-chevron-right"></i>

                </button>


                {projectsData.map((project, index) => {

                    const position =
                        getPosition(index);

                    return (

                        <motion.div
                            key={project.id}

                            animate={{
                                ...positionStyles[position],
                                pointerEvents:
                                    position === "center"
                                        ? "auto"
                                        : "none",
                            }}

                            transition={{
                                duration: 0.55,
                                ease: "easeInOut",
                            }}

                            className="
    absolute

    w-[min(78vw,760px)] md:w-[min(92vw,760px)]

    will-change-transform
"
                            drag={window.innerWidth < 768 ? "x" : false}

                            dragConstraints={{ left: 0, right: 0 }}

                            onDragEnd={(e, info) => {

                                if (info.offset.x < -50) {

                                    nextSlide();

                                }

                                else if (info.offset.x > 50) {

                                    prevSlide();

                                }

                            }}
                        >

                            <ProjectCard
                                title={project.title}
                                image={project.image}
                                link={project.link}
                            />

                        </motion.div>

                    );

                })}
            </div>
        </div>

    );

};

export default ProjectsSlider;