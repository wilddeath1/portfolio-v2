import {
    useState,
    useEffect,
    useRef,
} from "react";

import {
    Swiper,
    SwiperSlide,
} from "swiper/react";

import {
    EffectCoverflow,
    Navigation,
    Pagination,
} from "swiper/modules";

import {
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

import projectsData from "./projectsData";
import ProjectCard from "./ProjectCard";
import ProjectViewer from "./ProjectViewer";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProjectsSlider = () => {
    const [selectedProject, setSelectedProject] =
        useState(null);

    const swiperRef = useRef(null);

    useEffect(() => {
        const handleWheel = (e) => {
            // Ignore mouse-wheel events inside the project viewer.
            if (
                e.target instanceof Element &&
                e.target.closest("[data-project-viewer]")
            ) {
                return;
            }

            if (selectedProject) return;

            if (
                Math.abs(e.deltaY) >
                Math.abs(e.deltaX)
            ) {
                e.preventDefault();

                if (e.deltaY > 0) {
                    swiperRef.current?.slideNext();
                } else {
                    swiperRef.current?.slidePrev();
                }
            }
        };

        const sliderElement =
            swiperRef.current?.el;

        sliderElement?.addEventListener(
            "wheel",
            handleWheel,
            { passive: false }
        );

        return () => {
            sliderElement?.removeEventListener(
                "wheel",
                handleWheel
            );
        };
    }, [selectedProject]);

    return (
        <div
            id="outer-container"
            className="
                flex
                h-135
                w-full
                items-center
                justify-center
            "
        >
            <div
                id="scroll-area-container"
                className="
                    relative
                    flex
                    h-105
                    w-full
                    items-center
                    justify-center
                    overflow-visible
                "
            >
                <ProjectViewer
                    selectedProject={selectedProject}
                    setSelectedProject={setSelectedProject}
                />

                <Swiper
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    effect="coverflow"
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView="auto"
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                    }}
                    navigation={{
                        prevEl: ".projects-swiper-prev",
                        nextEl: ".projects-swiper-next",
                    }}
                    pagination={{
                        el: ".projects-swiper-pagination",
                        clickable: true,
                    }}
                    modules={[
                        EffectCoverflow,
                        Navigation,
                        Pagination,
                    ]}
                    className="
                        w-full!
                        overflow-visible!
                        py-4!
                    "
                >
                    {projectsData.map((project) => (
                        <SwiperSlide
                            key={project.id}
                            className="
                                h-auto!
                                w-[min(82vw,760px)]!
                                md:w-[min(70vw,760px)]!
                                lg:w-190!
                            "
                        >
                            <ProjectCard
                                title={project.title}
                                image={project.image}
                                onClick={() => {
                                    setSelectedProject(project);
                                }}
                            />
                        </SwiperSlide>
                    ))}

                    {/* NAVIGATION + PAGINATION */}
                    <div
                        className="
                            absolute
                            -bottom-13.75
                            left-1/2
                            z-20
                            flex
                            -translate-x-1/2
                            items-center
                            justify-center
                            gap-4
                        "
                    >
                        {/* PREVIOUS */}
                        <button
                            className="
                                projects-swiper-prev
                                flex
                                h-10
                                w-10
                                aspect-square
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-white/10
                                bg-black/50
                                text-white
                                transition
                                duration-200
                                hover:bg-black/70
                                active:scale-95
                            "
                            aria-label="Previous project"
                        >
                            <ChevronLeft
                                size={20}
                                strokeWidth={2}
                            />
                        </button>

                        {/* PAGINATION */}
                        <div
                            className="
                                projects-swiper-pagination
                                mx-6
                                flex
                                items-center
                                justify-center
                            "
                        />

                        {/* NEXT */}
                        <button
                            className="
                                projects-swiper-next
                                flex
                                h-10
                                w-10
                                aspect-square
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-white/10
                                bg-black/50
                                text-white
                                transition
                                duration-200
                                hover:bg-black/70
                                active:scale-95
                            "
                            aria-label="Next project"
                        >
                            <ChevronRight
                                size={20}
                                strokeWidth={2}
                            />
                        </button>
                    </div>
                </Swiper>
            </div>
        </div>
    );
};

export default ProjectsSlider;

