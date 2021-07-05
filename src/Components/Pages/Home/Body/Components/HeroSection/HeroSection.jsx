import { SearchIcon } from "@heroicons/react/outline";
import React from "react";
import styled from "styled-components";
import hero from "./Resources/hero.jpg";

function HeroSection() {
  const Wrapper = styled.div`
    background-image: url(${(props) => props.img});
    background-size: contain;
    background-repeat: repeat-x;
  `;
  return (
    <Wrapper img={hero} className="h-2/3 p-4 relative">
      <div className="w-full bg-white py-3 sticky top-0 left-0 right-0 z-10">
        <div className="w-full bg-white flex items-center justify-center py-3 rounded-full">
          <SearchIcon className="h-6 text-red-600 mr-2" />
          <input
            type="text"
            name="search"
            placeholder="Where are you going?"
            className="outline-none"
          />
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center flex-col">
        <p className="font-medium text-center mb-4 text-lg">
          Not sure where to go? <br />{" "}
          <span className="capitalize">perfect.</span>
        </p>
        <button className="bg-white w-auto h-auto rounded-full transform scale-100 py-3 px-6 shadow-md transition duration-500 ease-in-out  hover:scale-90 shadow-lg">
          <span className="rounded-full font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600 text-lg">
            I'm flexible
          </span>
        </button>
      </div>
    </Wrapper>
  );
}

export default HeroSection;
