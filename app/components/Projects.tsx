"use client";

import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Projects() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section id="projects" className="px-6 py-16 max-w-6xl mx-auto text-center">
      <motion.h2
        className="text-3xl font-bold mb-12 text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      <motion.h3
        className="text-1xl font-medium mb-10 text-grey-900 dark:text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        The following projects are only my personal practice or training
        projects. The projects I have done in my real jobs were in-house
        projects. I can provide description and links of them upon needed.
      </motion.h3>

      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {projects.map((project, i) => (
          <div key={i} onClick={() => setSelectedProject(project)}>
            <ProjectCard {...project} />
          </div>
        ))}
      </motion.div>

      <ProjectModal
        isOpen={!!selectedProject}
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
