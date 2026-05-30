import React from 'react';
const paraStyle='text-[var(--text-secondary)] leading-[1.7] mb-4'
const AboutLeft = () => {
    return (
        <div id="about-left" className="
        text-center
        lg:text-left
    ">

            <h3 className='text-(--text-primary) font-semibold text-2xl mb-4'>

                A Multi-Skilled Digital Creator

            </h3>


            <p className={paraStyle} >

                I specialize in web development,
                video editing, and visual design
                to build structured and effective
                digital experiences.

            </p>


            <p className={paraStyle}>

                Starting from content creation, I gradually expanded into design systems, editing workflows, and
                web technologies while working on independent digital and e-commerce projects.

            </p>


            <p className={paraStyle}>

                I enjoy learning new tools
                and solving creative and
                technical problems.

            </p>

        </div>

    );
};

export default AboutLeft;