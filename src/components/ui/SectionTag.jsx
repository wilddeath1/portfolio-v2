import React from 'react';

const SectionTag = ({ text }) => {
    return (
        
            <span id="tag" className="text-[0.8rem] px-[0.8rem] py-[0.3rem] border border-gray-700 rounded-full text-(--text-secondary)">

                { text }

            </span>
        
    );
};

export default SectionTag;