import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full max-w-[250px] mx-auto">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-4 xs:py-5 px-8 xs:px-12 min-h-[250px] xs:min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-14 h-14 xs:w-16 xs:h-16 object-contain"
          loading="lazy"
        />

        <h3 className="text-white text-[18px] xs:text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[15px] xs:text-[17px] max-w-3xl leading-[26px] xs:leading-[30px] px-1 xs:px-0"
      >
        Hi, I'm Sanjeev — a web developer who turns caffeine into code and bugs
        into... more bugs (but with better documentation). I specialize in
        building websites that almost load before you click the back button, and
        I'm fluent in multiple languages — HTML, CSS, JavaScript, and Sarcasm.
        Currently mastering the MERN stack, which I thought was a dessert when I
        first heard it. Spoiler: It's not. When I'm not debugging like a
        detective in a murder mystery, I'm probably redesigning my to-do list
        for the 37th time. I love building things that live on the internet —
        except my mistakes. Those I delete quietly. If you're looking for
        someone who can create clean, functional, and occasionally pixel-perfect
        websites — let's talk. Or just send memes. I accept those too.
      </motion.p>

      <div className="mt-16 xs:mt-20 flex flex-wrap justify-center gap-6 xs:gap-10 mx-auto">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
