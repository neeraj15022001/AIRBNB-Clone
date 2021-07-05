import React from 'react'
import {img1, img2, img3} from "./Images.js"
import Card from "./Card/Card"

function Discover() {
    return (
        <div className="pb-20 px-6">
            <p className="capitalize font-semibold text-xl">discover experiences</p>
            <p className="font-normal mb-3">Unique activites with local experts - in person or online.</p>
            <div className="flex overflow-auto">
                <Card img={img1} title="experiences" subtitle="local things to do, wherever you are." />
                <Card img={img2} title="online experiences" subtitle="live, interactive activities led by hosts." />
                <Card img={img3} title="featured collection: wanderlust" subtitle="travel from  home with online experiences." />
            </div>
        </div>
    )
}

export default Discover
