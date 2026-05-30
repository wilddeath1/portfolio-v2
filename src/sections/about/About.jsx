import React from 'react';
import AboutHeader from './AboutHeader';
import AboutContent from './AboutContent';
const About = () => {
    return (
        <>
            <section id="about" className="bg-(--bg-secondary) py-24  px-0 ">
                <div id="about-container" className="w-[min(90vw,75rem)] mx-auto">
                    <AboutHeader />
                    <AboutContent />
                </div>

            </section>

        </>
    );
};

export default About;