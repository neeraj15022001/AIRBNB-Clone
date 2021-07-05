import React from "react";
import Covid from "./Components/Covid/Covid";
import HeroSection from "./Components/HeroSection/HeroSection";
import Nearby from "./Components/Nearby/Nearby";
import Live from "./Components/Live/Live";
import Discover from "./Components/Discover/Discover";
import { bg1, bg2 } from "./Images.js";
import SectionCards from "./Components/SectionCards/SectionCards";
import Footer from "./Components/Footer/Footer";

function Body() {
    return (
        <div className='h-screen w-screen'>
            <Covid />
            <HeroSection />
            <Nearby />
            <Live />
            <SectionCards bg={bg1} title="the greatest outdoors" titleColorClass="text-black" subtitle="Wishlists curated by Airbnb." subtitleColorClass="text-black" buttonTitle="get inspired" buttonBgColor="bg-black" buttonTextColor="text-white" />
            <Discover />
            <SectionCards bg={bg2} title="try hosting" titleColorClass="text-white" subtitle="Earn extra income and unlock new oppurtunities by sharing your space." subtitleColorClass="text-white" buttonTitle="learn more" buttonBgColor="bg-white" buttonTextColor="text-black" />
            <Footer />
        </div>
    )
}

export default Body;
