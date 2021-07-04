import React from 'react'
import Covid from './Components/Covid/Covid'
import HeroSection from './Components/HeroSection/HeroSection'
import Nearby from './Components/Nearby/Nearby'
import Live from "./Components/Live/Live"

function Body() {
    return (
        <div className='h-screen w-screen'>
            <Covid />
            <HeroSection />
            <Nearby />
            <Live />
        </div>
    )
}

export default Body;
