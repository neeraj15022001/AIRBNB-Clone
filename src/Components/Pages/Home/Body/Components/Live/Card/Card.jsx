import React from "react";
import styled from "styled-components";

const ImageWrapper = styled.div`
  background-image: url(${(props) => props.img});
  background-size: contain;
`;

function Card({ img, title, className }) {
  return (
    <div className={`${className} mr-3`}>
      <ImageWrapper img={img} className="rounded-lg w-72 h-72 lg:w-80 lg:h-80 lg:mb-2" />
      <p className="capitalize font-medium">{title}</p>
    </div>
  );
}

export default Card;
