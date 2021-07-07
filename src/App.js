import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Common/Navbar/Navbar";
import Body from "./Components/Pages/Home/Body/Body";
import SearchBar from "./SearchBar/SearchBar";

function App() {
  const [isVisible, hide] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      hide(() => false);
    } else {
      hide(() => true);
    }
  }
  
  return (
    <div className="h-full">
      {/* <SearchBar /> */}
      <Body />
      {/* <Navbar className={isVisible ? "block" : "hidden"} /> */}
    </div>
  );
}

export default App;
