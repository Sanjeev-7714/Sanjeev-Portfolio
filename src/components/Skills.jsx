import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const skills = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "HTML/CSS", level: 90 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 75 },
      { name: "MongoDB", level: 70 },
      { name: "SQL", level: 65 },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Figma", level: 75 },
      { name: "Responsive Design", level: 85 },
    ],
  },
];

const SkillCard = ({ title, skills, index }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className="w-full md:w-[350px] bg-tertiary p-6 rounded-2xl"
  >
    <h3 className="text-white text-[22px] font-bold text-center mb-6 border-b-2 border-[#915EFF] pb-2">{title}</h3>
    <div className="mt-4 space-y-5">
      {skills.map((skill, idx) => (
        <div key={idx} className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-white text-[16px]">{skill.name}</span>
            <span className="text-[#915EFF] font-semibold">{skill.level}%</span>
          </div>
          <div className="w-full h-3 bg-black-200 rounded-lg overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 1, delay: index * 0.2 + idx * 0.1 }}
              className="h-full bg-[#915EFF] rounded-lg"
            />
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>What I bring to the table</p>
        <h2 className={`${styles.sectionHeadText} text-center mb-12`}>Skills & Expertise.</h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-8">
        {skills.map((skill, index) => (
          <SkillCard key={index} index={index} {...skill} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "skills"); 