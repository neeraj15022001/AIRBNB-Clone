import React from "react";
import Covid from "./Components/Covid/Covid";
import HeroSection from "./Components/HeroSection/HeroSection";

function Body() {
  return (
    <div className="h-screen w-screen">
      <Covid />
      <HeroSection />
    </div>
  );
}

export default Body;
