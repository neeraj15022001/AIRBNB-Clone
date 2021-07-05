import React from "react";
import styled from "styled-components";

const ImageWrapper = styled.div`
    background-image: url(${(props) => props.img});
    background-repeat: no-repeat;
    background-size: contain;
  `;

function Card({ city, time, img }) {
  return (
    <div className="flex items-center justify-start mb-3 w-80">
      <ImageWrapper img={img} className="rounded-lg h-14 w-14 mr-4" />
      <div className="flex flex-col items-start justify-between">
        <p className="capitalize font-medium text-sm">{city}</p>
        <p className="font-light text-sm">{`${time}-hour-drive`}</p>
      </div>
    </div>
  );
}

export default Card;
