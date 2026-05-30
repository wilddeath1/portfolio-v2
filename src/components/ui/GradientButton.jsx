const GradientButton = ({ children, ...props }) => {
    return (
        <a
            {...props}
            id="resume-btn"
            className="no-underline inline-flex justify-center border-none cursor-pointer rounded-lg py-2 px-5 text-sm
            text-(--text-primary) bg-linear-to-r from-(--primary-gradient-1) to-(--primary-gradient-2)
            hover:bg-linear-to-r hover:from-(--primary-hover-1) hover:to-(--primary-hover-2)"
        >
            {children}
        </a>
    );
};

export default GradientButton;
