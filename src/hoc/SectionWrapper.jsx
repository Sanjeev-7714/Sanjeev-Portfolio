import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName) =>
  function HOC() {
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
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0 ${isMobile ? 'pt-4 pb-0 mb-0' : 'py-16'}`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component isMobile={isMobile} />
      </motion.section>
    );
  };

export default StarWrapper;
