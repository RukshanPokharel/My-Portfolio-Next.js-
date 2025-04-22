"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  //   FaLaptopCode,
  FaGuitar,
  FaMountain,
  FaUserTie,
} from "react-icons/fa";
import { SiTailwindcss, SiDotnet, SiJavascript } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-blue-500" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: ".NET Core", icon: <SiDotnet className="text-purple-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "GitHub", icon: <FaGithub className="text-white-600" /> },
];

const timeline = [
  {
    year: "2022–present",
    label:
      "Chef at Pincho Nation and looking to start a new role as a developer",
    location: "Copenhagen",
  },
  {
    year: "2022-2024",
    label: "Graduated PBA in Web Development",
    location: "Zealand Institute, Roskilde",
  },
  {
    year: "2018–2022",
    label: "Web-developer, ASP.NET dev, fullstack dev",
    location: "Nepal",
  },
];

export default function About() {
  return (
    <section id="about" className="px-6 py-16 max-w-4xl mx-auto text-center">
      <motion.h2
        className="text-3xl font-bold mb-8 text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="text-lg text-gray-700 dark:text-gray-300 mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        I’m Rukshan — a Nepalese developer based in Copenhagen, accumulating
        experience as a web developer for the last 7 years and currently gaining
        some experience as a chef handling kitchen operations. I value
        curiosity, discipline, and bringing out the best in a team. I am
        passionate about tech that solves real problems and creating digital
        experiences that feel personal and useful.
      </motion.p>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {skills.map((skill, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-sm font-medium text-gray-800 dark:text-white"
          >
            <div className="text-3xl mb-2">{skill.icon}</div>
            {skill.name}
          </div>
        ))}
      </motion.div>

      <motion.div
        className="text-left mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
          Timeline
        </h3>
        <ul className="space-y-4 border-l border-gray-300 dark:border-gray-600 pl-6">
          {timeline.map((item, i) => (
            <li key={i}>
              <div className="text-blue-600 dark:text-blue-400 font-semibold">
                {item.year}
              </div>
              <div className="text-gray-800 dark:text-gray-300">
                {item.label}
              </div>
              <div className="text-sm text-gray-500">{item.location}</div>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        className="grid gap-6 sm:grid-cols-3 text-center text-gray-700 dark:text-gray-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <FaGuitar className="text-2xl mb-2 mx-auto" />
          Listening and playing music in free time as a refreshment
        </div>
        <div>
          <FaMountain className="text-2xl mb-2 mx-auto" />
          Love to travel & hike. It give me a sense of clarity
        </div>
        <div>
          <FaUserTie className="text-2xl mb-2 mx-auto" />
          Discipline, Honesty, and Teamwork are my core values
        </div>
      </motion.div>
    </section>
  );
}
