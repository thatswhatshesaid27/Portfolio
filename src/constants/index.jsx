import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";
import project4 from "../assets/project4.webp";
import project5 from "../assets/project5.webp";
import project6 from "../assets/project6.webp";
import project7 from "../assets/project7.webp";
import project8 from "../assets/project8.webp";
import project9 from "../assets/project9.webp";

export const LINKS = [
  { id: "projects", name: "projects" },
  { id: "about", name: "about" },
  { id: "experience", name: "experience" },
  { id: "contact", name: "Contact" },
];

export const MARQUEE_TEXT =
  "React, Node, MongoDb, Tailwind, Firebase, Javascript, Redis, Redux, Express, Python, HTML, CSS, RESTful API, ";

export const PROJECTS = [
  {
    id: 1,
    title: "MERNMORY",
    description:
      "Mernmory is a full-stack social media application that allows users to share their personal events and experiences. Built using the MERN stack, it delivers a dynamic and scalable platform for users to connect and share posts.",
    imgSrc: project1,
    link: "https://github.com/thatswhatshesaid27/MERNMORY",
  },
  {
    id: 2,
    title: "Dice game",
    description:
      "A simple Dice Game built with React and Vite that utilizes hooks, state transitions, and styled components for a better user experience.",
    imgSrc: project2,
    link: "https://github.com/thatswhatshesaid27/DiceGame",
  },
  {
    id: 3,
    title: "Foody bash",
    description:
      "Foodybash is a full-stack web application designed to provide a seamless and interactive food search experience. The application is built using a client-server architecture",
    imgSrc: project3,
    link: "https://github.com/thatswhatshesaid27/FoodyBash",
  },
  {
    id: 4,
    title: "TO-DO list",
    description:
      "A To-Do List App for managing tasks with features like adding, editing, completing, and deleting items, offering a simple and intuitive user experience",
    imgSrc: project4,
    link: "https://github.com/thatswhatshesaid27/TODO",
  },
 
];

export const ABOUT =
  "Versatile web developer skilled in crafting responsive and efficient web applications. Proficient in the MERN stack (MongoDB, Express.js, React, Node.js), with additional experience in Python and embedded coding. Adept at using modern frontend tools like Redux, HTML, CSS, Tailwind CSS, and Vue, as well as backend technologies such as MySQL and SQL. Dedicated to delivering innovative solutions with a focus on clean code and seamless user experiences.";

export const EXPERIENCES = [
  {
    company: "PNT ROBOTICS",
    role: "Software Engineer",
    year: "August 2023 - August 2024",
    description:
      "Skilled in developing software with PyQt and Streamlit, building web apps using React and Vue, and managing databases like MySQL and MongoDB. Experienced in IoT coding for Arduino and sensors.",
  },
  {
    company: "Software Developer | Intern | PNT ROBOTICS",
    role: "Software Developer",
    year: "December 2022 - August 2023",
    description:
      "Developed Python-based software systems and Arduino projects, with expertise in the full system development lifecycle, including design, testing, and deployment. Created a chatbot application for a robotic system using the OpenAI API to enable advanced conversational capabilities.",
  },
  {
    company: "Software Developer | Intern | Codewind Technologies",
    role: "Software Developer",
    year: "June 2022 - July 2022",
    description:
      "Designed a user-friendly front-end for a Chronic Disease Prediction System using React.js, complemented by detailed documentation and presentations.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  
  {
    href: "https://github.com/thatswhatshesaid27",
    icon: <FaGithub fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/yash-dubale-41073b159/",
    icon: <FaLinkedin fontSize={26} className="hover:opacity-80" />,
  },
];

export const CONTACT = {
  text: "Your Friendly Neighborhood Web Developer—Swinging Between Bugs and Features!",
  email: "yashdubale2002@gmail.com",
  phone: "9082812667",
};
