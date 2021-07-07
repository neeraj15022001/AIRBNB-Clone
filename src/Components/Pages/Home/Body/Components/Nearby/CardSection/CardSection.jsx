import React from "react";
import Card from "./Card/Card";

function CardSection({ city1, city2, city1Time, city2Time, img1, img2 }) {
  return (
    <div className="flex items-start flex-col lg:w-72 lg:pl-3">
      <Card city={city1} time={city1Time} img={img1} />
      <Card city={city2} time={city2Time} img={img2} />
    </div>
  );
}

export default CardSection;
