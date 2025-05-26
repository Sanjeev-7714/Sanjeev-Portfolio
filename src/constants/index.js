import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  project4Image,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "work",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Visual Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "B.E - Electronics and Communication Engineering",
    company_name: "Rajalakshmi Engineering College",
    icon: starbucks,
    iconBg: "#383E56",
    date: "September 2021 - May 2025",
    points: [
      "Learned to Code & Caffeinate – mastered programming basics, Git, and the fine art of staying awake during 8 AM lectures.",
      "Projects, Prototypes & Panic – built cool stuff like an image enhancement tool and a couple of web apps. mostly the night before deadlines.",
      "Made Friends & Memories – including one guy who always had notes and another who always had snacks. Lifesavers, both.",
      "From Fests to Failed WiFi – experienced the full college life: coding competitions, tech fests, and constantly battling the campus WiFi like it was a boss level in a game.",
    ],
  },
  {
    title: "Vijayantha Model Higher Secondary School",
    company_name: "Chennai",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "April 2020 - May 2021",
    points: [
      "Marks Obtained : 498.85/600 (83.14%)",
      "Where Dreams Started – the place that sparked my love for tech, curiosity, and a lifelong fear of math exams.",
      "Annual Days & Awkward Dances – participated in school events with more enthusiasm than coordination.",
      "Participating in programming contests and actively partcipated in many events.",
    ],
  },
  {
    title: "Kendriya Vidyalaya",
    company_name: "Chennai",
    icon: shopify,
    iconBg: "#383E56",
    date: "April 2019 - May 2020",
    points: [
      "Marks Obtained : 393/500 (78.6%).",
      "Classroom Adventures – from surprise tests to chalk fights, every day was an episode of its own.",
      "Here is where I learned the basics of programming and developed a passion for coding.",
      "Participated in various coding contests and gained knowldege about programming languages.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "Programs must be written for people to read, and only incidentally for machines to execute.",
    name: "Harold Abelson",
    designation: "Professor",
    company: "MIT.",
    image: "./src/assets/person-01.jpg",
  },
  {
    testimonial:
      "First, solve the problem. Then, write the code.",
    name: "john Johnson",
    designation: "Software Developer",
    company: "Munch Inc.",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "The most disastrous thing that you can ever learn is your first programming language.",
    name: "Alan Kay",
    designation: "Computer Scientist",
    company: "Pioneer of OOP",
    image: "./src/assets/person-02.jpg",
  },
];

const projects = [
  {
    name: "Bulk-Mail",
    description:
      "A powerful full-stack application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) that enables users to send mass emails efficiently from a single interface.",
    tags: [
      {
        name: "react JS",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "MERN",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://bulk-mail-mern-app-mu.vercel.app/",
  },
  {
    name: "Greenden",
    description:
      "A responsive plant e-commerce website built with HTML, Tailwind CSS and JavaScript that showcases products with search functionality and customer contact options.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "javaScript",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://sanjeev-7714.github.io/Greenden-Tailwind-CSS/",
  },
  {
    name: "Nostra",
    description:
      "A comprehensive E-Commerce platform showcasing  my frontend skills and providing a seamless shopping experience with a focus on user-friendly design and functionality.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "javaScript",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://sanjeev-7714.github.io/Nostra-E-Commerce/",
  },
  {
    name: "Login Page",
    description:
      "A React-based login page showcasing my frontend skills with animated UI, form validation, local storage authentication, user friendly and responsive design.",
    tags: [
      {
        name: "react JS",
        color: "blue-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "green-text-gradient",
      },
      {
        name: "javaScript",
        color: "pink-text-gradient",
      },
    ],
    image: project4Image,
    source_code_link: "https://login-page-react-alpha-five.vercel.app/",
  },
  {
    name: "Weather Forecast",
    description:
      "A feature-rich React weather app displaying real-time forecasts with beautiful animations, search functionality, temperature unit toggle, and detailed weather metrics.",
    tags: [
      {
        name: "react JS",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "weather API",
        color: "pink-text-gradient",
      },
    ],
    image: "./src/assets/weather.jpg",
    source_code_link: "https://weather-report-gray-delta.vercel.app/",
  },
  {
    name: "Fruits Database",
    description:
      "A React-based application that provides a comprehensive database of fruits, showcasing my frontend skills with a focus on user-friendly design and functionality.",
    tags: [
      {
        name: "react JS",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "MERN",
        color: "pink-text-gradient",
      },
    ],
    image: "./src/assets/fruits.jpg",
    source_code_link: "https://fruits-mongo-db.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
