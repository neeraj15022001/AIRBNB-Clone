import React from "react";
import Card from "./Card/Card.jsx";
import { img1, img2, img3 } from "./Images.js";

function Live() {
  return (
    <div className="pt-8 px-6 w-screen mb-12 overflow-hidden lg:px-20">
      <p className="capitalize font-semibold text-xl mb-4">live anywhere</p>
      <div className="flex w-screen overflow-auto">
        <Card img={img1} title="outdoor gateways" />
        <Card img={img2} title="unique stays" />
        <Card img={img3} title="entire homes" />
        <Card img={img3} title="entire homes" />
      </div>
    </div>
  );
}

export default Live;
