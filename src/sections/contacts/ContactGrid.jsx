import React from 'react';

import InfoCards from '../../components/ui/InfoCards';

import SocialTray from '../../components/ui/SocialTray';

const ContactGrid = () => {

    return (

        <div
            className="
                grid

                md:grid-cols-2

                gap-6
            "
        >

            {/* EMAIL */}

            <div className="reveal">

                <InfoCards
                    href="mailto:official.ashtyagi@gmail.com?subject=Portfolio%20Inquiry&body=Hello%20Ayush,%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding%20a%20potential%20opportunity,%20project,%20or%20collaboration.%0A%0APlease%20find%20the%20details%20below:%0A%0AName:%20%0ACompany%20/%20Organization:%20%0ARole%20/%20Project:%20%0A%0AMessage:%20%0A%0AThank%20you%20for%20your%20time.%20I%20look%20forward%20to%20hearing%20from%20you.%0A%0ABest%20regards,"

                    icon="fa-solid fa-envelope"

                    title="Email"

                    description="official.ashtyagi@gmail.com"
                />

            </div>


            {/* LOCATION */}

            <div className="reveal">

                <InfoCards
                    icon="fa-solid fa-location-arrow"

                    title="Location"

                    description="Meerut, UP, India"
                />

            </div>


            {/* FOLLOW */}

            <div
                className="
                    md:col-span-2

                    reveal
                "
            >

                <InfoCards
                    icon="fa-solid fa-share-nodes"

                    title="Follow Me"

                    className="
    items-start
    text-left

    md:justify-center
    md:text-center
"
                >

                    <p
                        className="
                            text-[0.9rem]

                            text-(--text-secondary)

                            mt-1
                            mb-5
                        "
                    >

                        Connect with me on social platforms

                    </p>


                    <SocialTray centered={true} />

                </InfoCards>

            </div>

        </div>

    );

};

export default ContactGrid;