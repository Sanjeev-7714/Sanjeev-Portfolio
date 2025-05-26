import React, { useState, useEffect } from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  // Display fewer technologies on mobile to save space
  const displayTechnologies = isMobile 
    ? technologies.slice(0, 6) // Show only first 6 on mobile
    : technologies;

  return (
    <div className='mt-5 mb-10'>
      <div className='flex flex-row flex-wrap justify-center gap-6 md:gap-10'>
        {displayTechnologies.map((technology) => (
          <div 
            className={`w-20 h-20 md:w-28 md:h-28 ${isMobile ? 'mb-2' : ''}`} 
            key={technology.name}
          >
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
