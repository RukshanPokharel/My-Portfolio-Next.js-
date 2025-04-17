"use client";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[90vh] px-6">
      <motion.img
        src="/profile.jpg"
        alt="Rukshan Profile"
        className="w-40 h-40 rounded-full object-cover mb-6 border-4 border-blue-500 shadow-lg"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      <motion.h1
        className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hi, I’m Rukshan 👋
      </motion.h1>

      <motion.h2
        className="text-xl sm:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <Typewriter
          words={[
            "Full Stack Developer",
            "React & .NET Enthusiast",
            "Problem Solver",
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </motion.h2>

      <motion.div
        className="flex gap-4 mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
        >
          View Projects
        </a>
        <a
          href="/cv.pdf"
          className="px-6 py-3 border border-gray-600 text-gray-800 dark:text-white rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          Download CV
        </a>
      </motion.div>
    </section>
  );
}
