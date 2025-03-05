"use client";
import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Projects = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="projects"
      className="w-full px-6 sm:px-[8%] py-10 scroll-mt-20"
    >
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-serif mb-12 mt-10"
      >
        My Portfolio
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-serif dark:text-white"
      >
        👉 Here's a look at my full-stack projects—designed for great user
        experience and built for performance.
      </motion.p>
      <hr className="w-1/2 mx-auto border-gray-300 dark:border-gray-400 mb-12" />
      {workData.map((project, index) => (
        <ProjectCard key={index} project={project} isDarkMode={isDarkMode} />
      ))}
    </motion.div>
  );
};

const ProjectCard = ({ project, isDarkMode }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  };

  const handlePrev = () => {
    setCurrentImage(
      (prev) => (prev - 1 + project.images.length) % project.images.length
    );
  };

  return (
    <motion.section
      className="w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 mt-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-serif font-normal text-center mb-20 dark:text-white">
        {project.title}
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-2xl mb-16 font-serif">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-3 justify-center mb-6">
        {project.stack.map((tech, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-white"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="relative w-full max-w-[60rem] h-auto max-h-[80vh] flex items-center justify-center">
        <motion.img
          src={
            isDarkMode && project.darkImages
              ? project.darkImages[currentImage]
              : project.images[currentImage]
          }
          alt={project.title}
          className="w-full max-h-[80vh] object-contain rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
        />
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-300"
        >
          ◀
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-300"
        >
          ▶
        </button>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-12">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href={project.link}
          className="px-10 py-3 border border-white rounded-full bg-green-600 text-white flex items-center gap-2 dark:bg-transparent dark:border-green-400"
        >
          Live Demo{" "}
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </motion.a>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href={project.github}
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white text-black dark:bg-gray-800 dark:text-white dark:border-gray-600"
        >
          GitHub{" "}
          <Image src={assets.github_icon} alt="" className="w-4 dark:invert" />
        </motion.a>
      </div>
    </motion.section>
  );
};

export default Projects;
