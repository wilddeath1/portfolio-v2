import React from 'react';
import SectionTag from '../../components/ui/SectionTag';
import SectionHeading from '../../components/ui/SectionHeading';


const AboutHeader = () => {
    return (


        <div id="about-header" className="reveal text-center mb-12" >
            <SectionTag text="About Me" />
            <SectionHeading text="Who I Am" />
        </div>


    );
};

export default AboutHeader;