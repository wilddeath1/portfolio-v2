import { useEffect } from "react";

const useReveal = () => {

    useEffect(() => {

        const revealElements =
            document.querySelectorAll(".reveal");

        const revealOnScroll = () => {

            const triggerPoint =
                window.innerHeight * 0.85;

            revealElements.forEach((el) => {

                const rect =
                    el.getBoundingClientRect();

                if (
                    rect.top < triggerPoint &&
                    rect.bottom > 0
                ) {

                    el.classList.add("show");

                }

                else {

                    el.classList.remove("show");

                }

            });

        };

        window.addEventListener(
            "scroll",
            revealOnScroll
        );

        revealOnScroll();

        return () => {

            window.removeEventListener(
                "scroll",
                revealOnScroll
            );

        };

    }, []);

};

export default useReveal;