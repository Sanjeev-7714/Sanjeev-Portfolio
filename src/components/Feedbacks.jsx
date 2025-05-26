import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
  isMobile,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className={`bg-black-200 ${isMobile ? 'p-6' : 'p-10'} rounded-3xl xs:w-[320px] w-full`}
  >
    <p className={`text-white font-black ${isMobile ? 'text-[36px]' : 'text-[48px]'}`}>"</p>

    <div className='mt-1'>
      <p className={`text-white tracking-wider ${isMobile ? 'text-[16px]' : 'text-[18px]'}`}>{testimonial}</p>

      <div className='mt-5 md:mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
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
    <div className={`${isMobile ? '-mt-16' : 'mt-0'} bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} ${isMobile ? 'min-h-[160px]' : 'min-h-[300px]'}`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Life Essentials</p>
          <h2 className={styles.sectionHeadText}>Quotes I live by.</h2>
        </motion.div>
      </div>
      <div className={`${isMobile ? '-mt-10' : '-mt-20'} pb-10 md:pb-14 ${styles.paddingX} flex flex-wrap justify-center md:justify-start gap-5 md:gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard 
            key={testimonial.name} 
            index={index} 
            {...testimonial} 
            isMobile={isMobile}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
