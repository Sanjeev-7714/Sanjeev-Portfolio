import React, { useState, useEffect } from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

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

  return (
    <div className='mt-5 mb-10'>
      {isMobile ? (
        // Mobile view - flat grid of icons instead of 3D balls
        <div className='flex flex-wrap justify-center gap-6'>
          <h2 className={`${styles.sectionHeadText} w-full text-center mb-8`}>Technologies</h2>
          <div className='grid grid-cols-3 xs:grid-cols-4 gap-4 xs:gap-6'>
            {technologies.map((technology) => (
              <div 
                className='flex flex-col items-center justify-center' 
                key={technology.name}
              >
                <img 
                  src={technology.icon} 
                  alt={technology.name}
                  className='w-12 h-12 xs:w-14 xs:h-14 object-contain'
                  loading="lazy"
                />
                <p className='text-xs xs:text-sm text-center mt-2 text-secondary'>
                  {technology.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // Desktop view - 3D balls
        <div className='flex flex-row flex-wrap justify-center gap-10'>
          {technologies.map((technology) => (
            <div 
              className='w-28 h-28' 
              key={technology.name}
            >
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SectionWrapper(Tech, "");
