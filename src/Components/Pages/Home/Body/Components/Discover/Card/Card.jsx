import React from "react";
import styled from "styled-components";

const ImageWrapper = styled.div`
  background-image: url(${(props) => props.img});
  background-size: contain;
`;

function Card({ img, title, subtitle }) {
  return (
    <div className="mr-3">
      <ImageWrapper img={img} className="rounded-lg w-72 h-72 mb-2 lg:w-80 lg:h-80" />
      <p className="capitalize font-medium text-lg">{title}</p>
      <p className="font-light text-sm capitalize">{subtitle}</p>
    </div>
  );
}

export default Card;
