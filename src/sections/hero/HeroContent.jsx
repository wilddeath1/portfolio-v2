import { useEffect, useState } from "react";
import GradientButton from "../../components/ui/GradientButton";
import SecondaryButton from "../../components/ui/SecondaryButton";
import SocialTray from "../../components/ui/SocialTray";


const HeroContent = () => {

    const roles = [
        "Web Developer",
        "Content Video Editor",
        "Visual Brand Designer",
        "Thumbnail Strategist"
    ];

    const [text, setText] = useState("");

    const [roleIndex, setRoleIndex] = useState(0);

    const [isDeleting, setIsDeleting] = useState(false);


    useEffect(() => {

        const currentRole = roles[roleIndex];

        let timeout;

        // TYPING
        if (!isDeleting) {

            if (text.length < currentRole.length) {

                timeout = setTimeout(() => {

                    setText(
                        currentRole.substring(
                            0,
                            text.length + 1
                        )
                    );

                }, 70);

            }

            else {

                timeout = setTimeout(() => {

                    setIsDeleting(true);

                }, 3000);

            }

        }

        // ERASING
        else {

            if (text.length > 0) {

                timeout = setTimeout(() => {

                    setText(
                        currentRole.substring(
                            0,
                            text.length - 1
                        )
                    );

                }, 40);

            }

            else {

                setIsDeleting(false);

                setRoleIndex(
                    (prev) =>
                        (prev + 1) % roles.length
                );

            }

        }

        return () => clearTimeout(timeout);

    }, [text, isDeleting, roleIndex]);



    return (

        <div id="hero-left">

            {/* TITLE */}

            <h1
                id="hero-title"
                className="
text-[clamp(2.5rem,6vw,4.5rem)]
font-bold
leading-tight
mb-4
text-(--text-primary)
whitespace-nowrap
"
            >

                Hi, I'm{" "}

                <span
                    id="highlight"
                    className="text-(--primary)"
                >

                    Ayush Tyagi

                </span>

            </h1>


            {/* ROLE */}

            <h2
                id="hero-role"
                className="
                mb-6
                text-[clamp(1.2rem,2vw,1.8rem)]
                text-(--text-primary)
                font-bold
                "
            >

                {text}

                <span
                    className="
  inline-block
  ml-0.5
  font-bold
  animate-[blink_1s_infinite]
  relative
  -top-0.5
  "
                >
                    |
                </span>

            </h2>


            {/* TEXT */}

            <p
                id="hero-text"
                className="
                text-(--text-secondary)
                max-w-152
                leading-[1.6]
                mb-8
                "
            >

                I build and design modern digital
                experiences through web development,
                video editing, and visual design.

                I focus on creating clean,
                structured, and high-quality
                digital content that communicates
                ideas effectively.

            </p>


            {/* BUTTONS */}

            <div
                id="hero-buttons"
                className="flex gap-4 mb-8 flex-wrap justify-center lg:justify-start">

                <GradientButton href="#projects">
                    View My Work →
                </GradientButton>

                <SecondaryButton href="#contact">
                    Contact Me
                </SecondaryButton>

            </div>


            {/* SOCIAL ICONS */}

            <SocialTray />

        </div>

    );

};

export default HeroContent;