import React from 'react';

const SocialTray = ({ centered = false }) => {

    const aTagAnim = `
text-[var(--text-secondary)]
text-[1.1rem]
no-underline
transition
duration-200
hover:text-[var(--primary)]
hover:-translate-y-[2px]
`;

    return (
        <>
            <div
                id="social-icons"
                className={`
    flex
    gap-6
    text-(--text-secondary)

    ${centered
                        ? "justify-center"
                        : "justify-center lg:justify-start"
                    }
  `}
            >

                <a href="https://github.com/wilddeath1" target="_blank" rel="noopener noreferrer" title="GitHub" className={aTagAnim}>

                    <i className="fab fa-github"></i>

                </a>


                <a href="https://www.linkedin.com/in/ayushtyagi003/" target="_blank" rel="noopener noreferrer" title="LinkedIn" className={aTagAnim}>

                    <i className="fab fa-linkedin"></i>

                </a>


                <a href="https://metal-break-94d.notion.site/AYUSH-TYAGI-33a2ef3f54c080b7ac9dec988c6a2dd4" target="_blank" rel="noopener noreferrer" title="Project Documentation" className={aTagAnim}>

                    <i className="fa-solid fa-folder-open"></i>

                </a>

            </div>
        </>
    );
};

export default SocialTray;