import React from 'react';

const SectionHeading = ({ text }) => {
    return (
        <>
            <h2 className="text-[clamp(2rem,4vw,2.8rem)] mt-1 text-(--text-primary) font-bold ">{ text }</h2>

            <div id="underline" className="w-12 h-0.75 bg-(--primary) mt-1 mx-auto"></div>
        </>
    );
};

export default SectionHeading;