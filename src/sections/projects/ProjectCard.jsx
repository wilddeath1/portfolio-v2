const ProjectCard = ({
    title,
    image,
    onClick,
}) => {
    return (
        <div
            onClick={onClick}
            className="
                relative
                w-full
                aspect-video
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
                    h-full
                    w-full
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
                    z-10
                    w-full
                    p-8
                "
            >
                <h3
                    className="
                        text-center
                        text-2xl
                        font-bold
                        text-white
                    "
                >
                    {title}
                </h3>
            </div>
        </div>
    );
};

export default ProjectCard;

