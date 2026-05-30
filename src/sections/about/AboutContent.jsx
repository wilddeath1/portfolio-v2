import React from 'react';
import AboutLeft from './Aboutleft';
import AboutRight from './AboutRight';

const AboutContent = () => {
  return (

    <div id="about-content" className="
        grid
        grid-cols-1
        lg:grid-cols-2

        gap-10
        lg:gap-16

        items-start
    ">
      <AboutLeft />
      <AboutRight />
    </div>


  );
};

export default AboutContent;