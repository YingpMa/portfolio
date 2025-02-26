import React from "react";
import { motion } from "framer-motion";
import { EB_Garamond } from "next/font/google";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className="w-full px-[8%] lg:px-[12%] py-16 scroll-mt-20 flex justify-center"
    >
      <div className="w-full max-w-4xl lg:max-w-6xl">
        {/* 标题 */}
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`text-center text-5xl ${ebGaramond.className}`}
        >
          About me
        </motion.h2>

        {/* 介绍部分 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center w-full gap-10 my-16"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="w-full"
          >
            <motion.p
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className={`mb-10 text-xl text-gray-700 dark:text-white text-center ${ebGaramond.className}`}
            >
              I am a full-stack web developer who enjoys building intuitive and
              efficient web applications. Over the past year, I have worked on
              various projects, refining my skills and exploring new
              technologies to create better user experiences.
            </motion.p>

            {/* 网格布局（大屏幕下 3 列） */}
            <motion.ul
              initial={{ y: 30, x: 20, opacity: 0 }}
              whileInView={{ y: 0, x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20 mb-20"
            >
              {/* Skills & Languages */}
              <motion.li
                whileHover={{ scale: 1.05 }}
                className="border border-gray-400 rounded-xl p-6 pt-2 cursor-pointer hover:-translate-y-1 duration-500 dark:border-white text-left flex flex-col"
              >
                <p
                  className={`text-xl font-semibold text-gray-700 dark:text-white text-right ${ebGaramond.className}`}
                >
                  … - ∞
                </p>
                <h3
                  className={`mt-2 mb-2 text-center font-semibold text-xl text-gray-700 dark:text-white ${ebGaramond.className}`}
                >
                  Skills & Languages
                </h3>
                <ul
                  className={`p-4 list-disc text-gray-600 text-lg dark:text-white space-y-2 ${ebGaramond.className}`}
                >
                  <li className={ebGaramond.className}>
                    English, Chinese, Swedish
                  </li>
                  <li className={ebGaramond.className}>
                    Problem-solving & Critical thinking
                  </li>
                  <li className={ebGaramond.className}>
                    Team collaboration & Communication
                  </li>
                </ul>
              </motion.li>

              {/* Master's Degree */}
              <motion.li
                whileHover={{ scale: 1.05 }}
                className="border border-gray-400 rounded-xl p-6 pt-2 cursor-pointer  hover:-translate-y-1 duration-500  dark:border-white  text-left flex flex-col"
              >
                <p
                  className={`text-xl font-semibold text-gray-700 dark:text-white text-right ${ebGaramond.className}`}
                >
                  2023 - 2025
                </p>
                <h3
                  className={`mt-2 mb-2 text-center font-semibold text-xl text-gray-700 dark:text-white ${ebGaramond.className}`}
                >
                  Stockholm University
                </h3>
                <ul
                  className={`p-4 list-disc text-gray-600 text-lg dark:text-white space-y-2 ${ebGaramond.className}`}
                >
                  <li className={ebGaramond.className}>
                    Master of Science in Computer and Systems Sciences
                  </li>
                  <li className={ebGaramond.className}>
                    Specialization: Information Security
                  </li>
                </ul>
              </motion.li>

              {/* Bachelor's Degree */}
              <motion.li
                whileHover={{ scale: 1.05 }}
                className="border border-gray-400 rounded-xl p-6 pt-2 cursor-pointer  hover:-translate-y-1 duration-500 dark:border-white text-left flex flex-col"
              >
                <p
                  className={`text-xl font-semibold text-gray-700 dark:text-white text-right ${ebGaramond.className}`}
                >
                  2018 - 2023
                </p>
                <h3
                  className={`mt-2 mb-2 text-center font-semibold text-xl text-gray-700 dark:text-white ${ebGaramond.className}`}
                >
                  Nanjing University of Science and Technology
                </h3>
                <ul
                  className={`p-4 list-disc text-gray-600 text-lg dark:text-white space-y-2 ${ebGaramond.className}`}
                >
                  <li className={ebGaramond.className}>
                    Bachelor of Economics and Management
                  </li>
                  <li className={ebGaramond.className}>Major: Accounting</li>
                  <li className={ebGaramond.className}>
                    Minor: Software Engineering
                  </li>
                </ul>
              </motion.li>
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
