import React from 'react';
import '../../App.css';
import './AboutUs.css'
import Footer from '../Footer';


function AboutUs() {
    return(
        <>
            <div className={"aboutus-container"}>
            <h2> About us</h2>
            <p>The Renault Mégane is a small family car produced by the French car manufacturer Renault since the end of 1995, and was the successor to the Renault 19. The Mégane has been offered in three and five door hatchback, saloon, coupé, convertible and estate bodystyles at various points in its lifetime, and having been through three generations is now in its fourth incarnation.

                The first generation was largely based on its predecessor, the 19, and utilized modified versions of that car's drivetrain and chassis.

                In November 1996, the Mégane Scénic compact MPV was introduced, using the same mechanical components as the hatchback Mégane. For 2002, the Mégane entered its second generation with a substantial redesign taking place, and was voted European Car of the Year for 2003, whilst also becoming the first car in its class to receive a five star EuroNCAP rating.

                The Mégane entered its third generation in 2008, with another totally different design being used; the saloon version of the Mégane became known as the Renault Fluence for this generation, and it was introduced in 2009. A fourth generation Mégane was launched in 2015, with sales commencing in 2016.</p>
           </div>
            <Footer />

        </>
    )
}

export default AboutUs;