import React from 'react';

const SecondaryButton = ({ children, href }) => {
    return (
        <>
            <a href={href} className=' no-underline inline-block cursor-pointer py-2 px-5 text-sm rounded-lg border border-[#374151] text-(--text-primary) hover:border-(--hero-border)'>

                {children}

            </a>
        </>
    );
};

export default SecondaryButton;