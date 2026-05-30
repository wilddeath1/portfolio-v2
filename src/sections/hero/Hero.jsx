import React from 'react';
import HeroContent from './HeroContent';
import HeroImage from './HeroImage';
import ScrollArrow from '../../components/ui/ScrollArrow';

const Hero = () => {
    return (

        <section
            id="home"
            className="
                min-h-screen
                flex
                flex-col
                justify-center
                relative
                bg-(--bg-primary)
                overflow-hidden
            "
        >

            <div
                id="hero-container"
                className="
                    w-[min(92vw,85rem)]
                    mx-auto

                    pt-24
                    pb-16

                    grid
                    items-center

                    gap-12
                    lg:gap-24

                    grid-cols-1
                    text-center

                    lg:grid-cols-[minmax(0,1fr)_420px]
                    lg:text-left
                "
            >

                <HeroContent />

                <HeroImage />

            </div>

            <ScrollArrow />

        </section>

    );
};

export default Hero;