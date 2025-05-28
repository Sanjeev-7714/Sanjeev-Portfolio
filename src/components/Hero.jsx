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
    // Using a try-catch for better browser compatibility
    try {
      // Modern browsers
      mediaQuery.addEventListener("change", handleMediaQueryChange);
      return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
    } catch (error) {
      // Older browsers
      mediaQuery.addListener(handleMediaQueryChange);
      return () => mediaQuery.removeListener(handleMediaQueryChange);
    }
  }, []);
  
  // Check if the device is a large mobile (6.1-6.7 inch screens)
  const isLargeMobile = window.matchMedia("(min-width: 390px) and (max-width: 430px)").matches;

  return (
    <section className={`relative w-full ${isMobile ? 'min-h-[85vh]' : 'h-screen'} mx-auto overflow-hidden`}>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[100px] mobile-md:top-[110px] xs:top-[120px] max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-5 md:gap-8`}
      >
        <div className='relative flex flex-col items-center lg:items-start lg:flex-1 w-full'>
          <div className='absolute left-[20px] mobile-md:left-[-10px] xs:left-[-15px] sm:left-[-35px] top-[-10px] lg:top-5 flex flex-col items-center'>
            <div className='w-5 h-5 rounded-full bg-[#915EFF] animate-pulse-slow' />
            <div className='w-1 sm:h-80 mobile-md:h-60 h-40 violet-gradient mt-2' />
          </div>

          <div className='lg:pl-8 relative z-10 w-full px-2 mobile-md:px-3 iphone15:px-4'>
            <h1 className={`${styles.heroHeadText} text-white text-center lg:text-left`}>
              Hi, I'm <span className='text-[#915EFF]'>Sanjeev</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 mobile-md:mt-3 text-white-100 text-center lg:text-left`}>
              I'm a Full Stack Web Developer <br className='sm:block hidden' />
              <span className="block mobile-md:inline xs:inline">" Code, Create, Conquer "</span>
            </p>
          </div>
        </div>

        <div className='relative w-[250px] h-[250px] mobile-md:w-[300px] mobile-md:h-[300px] xs:w-[280px] xs:h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] mt-6 mobile-md:mt-8 lg:mt-0'>
          <div className='absolute inset-0 rounded-full bg-[#915EFF] opacity-75'></div>
          <img
            src="./profile.JPG"
            alt="profile"
            className='relative z-10 w-full h-full rounded-full border-4 border-[#915EFF] object-cover'
            loading="eager"
          />
        </div>
      </div>

      {/* Only show 3D model on non-mobile devices to prevent overlap */}
      {!isMobile && (
        <div className='absolute inset-0 z-[-1]'>
          <ComputersCanvas />
        </div>
      )}

      {/* Only show scroll indicator on desktop */}
      {!isMobile && (
        <div className='absolute bottom-10 w-full flex justify-center items-center z-10'>
          <a href='#about' aria-label="Scroll to About section">
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
      )}
    </section>
  );
};

// Add keyframes for slow pulse animation and responsive styles
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
  
  /* iPhone 15 specific adjustments */
  @media (min-width: 390px) and (max-width: 430px) {
    .hero-content {
      padding-top: 80px;
    }
    .hero-image {
      width: 280px;
      height: 280px;
    }
  }
  
  /* Small Android devices */
  @media (max-width: 360px) {
    .hero-content {
      padding-top: 60px;
    }
    .hero-image {
      width: 220px;
      height: 220px;
    }
  }
`;
document.head.appendChild(style);

export default Hero;
