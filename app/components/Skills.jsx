"use client";
import { skillsData } from "@/assets/assets";
import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="skills"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        My Skills
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        Skills & Tools
      </motion.h2>

      {/* 3+1 布局: 前 2 个占 1 列，最后 2 个合并成 1 列 */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10"
      >
        {/* 前 2 个分类保持单独的框 */}
        {skillsData.slice(0, 2).map(({ category, skills }, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12  duration-500"
          >
            <h3 className="text-xl mb-6 font-semibold text-gray-700 dark:text-white">
              {category}
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {skills.map(({ icon, name }, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center hover:scale-110 hover:-translate-y-1 transition-transform duration-300"
                >
                  <img src={icon} alt={name} className="w-10 dark:invert" />
                  <p className="text-sm text-gray-700 dark:text-white mt-2">
                    {name}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Cloud & DevOps + Tools & Misc 合并到 1 个框 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border border-gray-400 rounded-lg px-8 py-12  duration-500 lg:col-span-1 col-span-1 w-full"
        >
          {skillsData.slice(2).map(({ category, skills }, index) => (
            <div key={index} className="mb-8 last:mb-0">
              <h3 className="text-xl mb-6 font-semibold text-gray-700 dark:text-white">
                {category}
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {skills.map(({ icon, name }, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center hover:scale-110 hover:-translate-y-1 transition-transform duration-300"
                  >
                    <img src={icon} alt={name} className="w-10 dark:invert" />
                    <p className="text-sm text-gray-700 dark:text-white mt-2">
                      {name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
