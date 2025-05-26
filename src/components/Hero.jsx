import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
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
    <section className={`relative w-full ${isMobile ? 'min-h-[85vh]' : 'h-screen'} mx-auto overflow-hidden`}>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8`}
      >
        <div className='relative flex flex-col items-center lg:items-start lg:flex-1 w-full'>
          <div className='absolute left-[30px] xs:left-[-15px] sm:left-[-35px] top-[-10px] lg:top-5 flex flex-col items-center'>
            <div className='w-5 h-5 rounded-full bg-[#915EFF] animate-pulse-slow' />
            <div className='w-1 sm:h-80 h-40 violet-gradient mt-2' />
          </div>

          <div className='lg:pl-8 relative z-10 w-full'>
            <h1 className={`${styles.heroHeadText} text-white text-center lg:text-left`}>
              Hi, I'm <span className='text-[#915EFF]'>Sanjeev</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100 text-center lg:text-left`}>
              I'm a Full Stack Web Developer <br className='sm:block hidden' />
              " Code, Create, Conquer "
            </p>
          </div>
        </div>

        <div className='relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] mt-8 lg:mt-0'>
          <div className='absolute inset-0 rounded-full bg-[#915EFF] opacity-75'></div>
          <img
            src="./profile.JPG"
            alt="profile"
            className='relative z-10 w-full h-full rounded-full border-4 border-[#915EFF] object-cover'
          />
        </div>
      </div>

      {/* Only show 3D model on non-mobile devices to prevent overlap */}
      {!isMobile && (
        <div className='absolute inset-0 z-[-1]'>
          <ComputersCanvas />
        </div>
      )}

      <div className='absolute xs:bottom-5 bottom-10 w-full flex justify-center items-center z-10'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

// Add keyframes for slow pulse animation
const style = document.createElement('style');
style.textContent = `
  @keyframes pulse-slow {
    0%, 100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.7;
      transform: scale(0.95);
    }
  }
  .animate-pulse-slow {
    animation: pulse-slow 3s ease-in-out infinite;
  }

  /* Add responsive styles */
  @media (max-width: 768px) {
    .hero-section-mobile {
      min-height: 85vh !important;
    }
  }
`;
document.head.appendChild(style);

export default Hero;
