import React from 'react';
import heroImg from "../../assets/images/hero.webp";
const HeroImage = () => {
    return (

        <div id="hero-right" className="flex justify-center lg:justify-end">
            <img src={heroImg} alt="hero-image" id="hero-image" className="w-85 rounded-full border-2 border-(--hero-border) shadow-[0_0_40px_var(--hero-glow)] " />
        </div>

    );
};

export default HeroImage;