import React from 'react'
import CardSection from './CardSection/CardSection'
import {delhi, newDelhi, gurugram, jaipur} from "./Images.js"

function Nearby() {
    return (
        <div className="pt-8 px-6 mb-5">
            <p className="capitalize font-semibold text-xl mb-4">explore nearby</p>
            <div className="flex overflow-auto">
                <CardSection city1="new delhi" city2="delhi" city1Time="5" city2Time="5" img1={newDelhi} img2={delhi} />
                <CardSection city1="gurugram" city2="jaipur" city1Time="5" city2Time="7" img1={gurugram} img2={jaipur} />
            </div>
        </div>
    )
}

export default Nearby
