import { useEffect, useState } from "react";

const ProjectViewer = ({
    selectedProject,
    setSelectedProject,
}) => {

    const [selectedMedia, setSelectedMedia] = useState(null);


    useEffect(() => {

        if (!selectedProject) return;

        const originalOverflow =
            document.body.style.overflow;

        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = originalOverflow;
        };

    }, [selectedProject]);


    useEffect(() => {

        if (!selectedProject) {
            setSelectedMedia(null);
        }

    }, [selectedProject]);


    if (!selectedProject) return null;


    const handleBack = () => {
        setSelectedProject(null);
    };


    const handleMediaClick = (media) => {
        if (selectedProject.mediaType === "image") {
            setSelectedMedia(media);
        }
    };


    const handleLightboxClose = () => {
        setSelectedMedia(null);
    };


    return (
        <div
            data-project-viewer
            className="
                fixed
                inset-0
                z-100
                flex
                items-center
                justify-center
                bg-black/40
                backdrop-blur-md
                p-4
                md:p-6
            "
        >

            <div
                className="
                    relative
                    flex
                    h-[94vh]
                    w-full
                    max-w-7xl
                    flex-col
                    overflow-hidden
                    rounded-3xl
                    bg-(--viewer)
                "
            >

                {/* HEADER */}

                <div
                    className="
                        flex
                        h-18
                        shrink-0
                        items-center
                        bg-(--viewer)
                        px-5
                        md:px-7
                    "
                >

                    {/* BACK BUTTON */}

                    <button
                        onClick={handleBack}
                        className="
                            shrink-0
                            flex
                            items-center
                            gap-2
                            rounded-lg
                            border
                            border-[#374151]
                            px-5
                            py-2
                            text-sm
                            text-(--text-primary)
                            transition
                            duration-200
                            hover:border-(--hero-border)
                        "
                    >
                        <i className="fa-solid fa-arrow-left" />
                        <span>Back</span>
                    </button>


                    {/* PROJECT TITLE - DESKTOP ONLY */}

                    <div
                        className="
                            hidden
                            flex-1
                            justify-center
                            px-3
                            md:flex
                            md:px-6
                        "
                    >
                        <h2
                            className="
                                text-center
                                text-base
                                font-semibold
                                text-(--text-primary)
                                md:text-xl
                            "
                        >
                            {selectedProject.title}
                        </h2>
                    </div>


                    {/* View Project - MOBILE ONLY */}

                    <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            ml-auto
                            inline-flex
                            items-center
                            justify-center
                            gap-2
                            rounded-lg
                            px-5
                            py-2
                            text-sm
                            text-(--text-primary)
                            no-underline
                            bg-linear-to-r
                            from-(--primary-gradient-1)
                            to-(--primary-gradient-2)
                            hover:bg-linear-to-r
                            hover:from-(--primary-hover-1)
                            hover:to-(--primary-hover-2)
                            md:hidden
                        "
                    >
                        <span>View Project</span>
                        <i className="fa-solid fa-arrow-up-right-from-square text-sm" />
                    </a>


                    {/* RIGHT SPACER - DESKTOP ONLY */}

                    <div
                        className="
                            hidden
                            w-23.25
                            shrink-0
                            md:block
                        "
                    />

                </div>


                {/* CONTENT */}

                <div
                    className="
                        flex-1
                        overflow-y-auto
                        touch-pan-y
                        bg-(--viewer)
                        px-5
                        py-2
                        md:px-8
                    "
                >

                    <div
                        className="
                            grid
                            grid-cols-1
                            gap-4
                            md:grid-cols-2
                        "
                    >

                        {selectedProject.media.map((media, index) => (

                            <div
                                key={index}
                                onClick={() => handleMediaClick(media)}
                                className="
                                    aspect-video
                                    overflow-hidden
                                    rounded-2xl
                                    bg-(--cards)
                                    border
                                    border-(--border-soft)
                                    hover:border-(--hero-glow)
                                    hover:cursor-zoom-in
                                    active:scale-95
                                    shadow-[0_4px_12px_rgba(0,0,0,0.35)]
                                "
                            >

                                {selectedProject.mediaType === "image" ? (

                                    <img
                                        src={media}
                                        alt={`${selectedProject.title} ${index + 1}`}
                                        className="
                                            block
                                            h-full
                                            w-full
                                            object-contain
                                        "
                                    />

                                ) : (

                                    <iframe
                                        src={media}
                                        title={`${selectedProject.title} ${index + 1}`}
                                        className="
                                            aspect-video
                                            w-full
                                        "
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    />

                                )}

                            </div>

                        ))}

                    </div>


                    {/* View Project - DESKTOP ONLY */}

                    <div
                        className="
                            hidden
                            justify-center
                            pt-7
                            md:flex
                        "
                    >

                        <a
                            href={selectedProject.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                no-underline
                                inline-flex
                                items-center
                                justify-center
                                gap-2
                                cursor-pointer
                                rounded-lg
                                py-2
                                px-5
                                text-sm
                                text-(--text-primary)
                                bg-linear-to-r
                                from-(--primary-gradient-1)
                                to-(--primary-gradient-2)
                                hover:bg-linear-to-r
                                hover:from-(--primary-hover-1)
                                hover:to-(--primary-hover-2)
                                md:flex
                            "
                        >
                            <span>View Project</span>
                            <i className="fa-solid fa-arrow-up-right-from-square text-sm" />
                        </a>

                    </div>

                </div>


                {/* IMAGE LIGHTBOX */}

                {selectedMedia && (

                    <div
                        onClick={handleLightboxClose}
                        className="
        fixed
        inset-0
        z-150
        flex
        items-center
        justify-center
        bg-black/70
        backdrop-blur-md
        p-4
        md:p-8
        cursor-zoom-out
    "
                    >

                        <img
                            src={selectedMedia}
                            alt={`${selectedProject.title} preview`}
                            onClick={(e) => e.stopPropagation()}
                            className="
                                max-h-full
                                max-w-full
                                object-contain
                                cursor-default
                            "
                        />

                    </div>

                )}

            </div>

        </div>
    );
};

export default ProjectViewer;

