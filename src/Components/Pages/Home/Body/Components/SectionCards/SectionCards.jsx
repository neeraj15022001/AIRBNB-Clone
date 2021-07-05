import React from "react";
import styled from "styled-components";

function SectionCards({
  title,
  titleColorClass,
  subtitle,
  subtitleColorClass,
  buttonTitle,
  buttonBgColor,
  buttonTextColor,
  bg,
}) {
  const ImageWrapper = styled.div`
    background-image: url(${(props) => props.img});
    background-size: cover;
  `;
  return (
    <div className="h-4/5 mb-12 flex items-center justify-center overflow-hidden">
      <ImageWrapper img={bg} className="w-5/6 h-full rounded-xl">
        <div className="flex flex-col items-center justify-center mt-8 px-5">
          <p
            className={` ${titleColorClass} capitalize text-3xl font-medium text-center mb-3`}
          >
            {title}
          </p>
          <p
            className={`${subtitleColorClass} text-center font-light text-sm mb-3`}
          >
            {subtitle}
          </p>
          <button
            className={`capitalize ${buttonBgColor} ${buttonTextColor} text-sm py-1 px-3 rounded-md`}
          >
            {buttonTitle}
          </button>
        </div>
      </ImageWrapper>
    </div>
  );
}

export default SectionCards;
