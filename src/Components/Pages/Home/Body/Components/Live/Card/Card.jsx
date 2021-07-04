import React from "react";
import styled from "styled-components";

function Card({ img, title }) {
  const ImageWrapper = styled.div`
    background-image: url(${(props) => props.img});
    background-size: contain;
  `;
  return (
    <div className="mr-3">
      <ImageWrapper img={img} className="rounded-lg w-72 h-72" />
      <p className="capitalize font-medium">{title}</p>
    </div>
  );
}

export default Card;
