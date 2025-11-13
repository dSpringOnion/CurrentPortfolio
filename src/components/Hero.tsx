import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Code, Database, Server } from "lucide-react";

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-white dark:bg-neutral-950 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black dark:text-white">
              Hi, I'm <span className="text-blue-500 dark:text-purple-400">Daniel Park</span>
              <br />
              Freelance Fullstack Developer
            </h1>
            <p className="text-xl sm:text-2xl text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              Building enterprise-scale applications and intelligent ML systems.
              Specialized in full-stack development, machine learning, and scalable architectures designed for growth.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-8 py-8"
          >
            {[
              { icon: Code, label: "Frontend", color: "text-blue-600" },
              { icon: Server, label: "Backend", color: "text-green-600" },
              { icon: Database, label: "Database", color: "text-purple-600" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                variants={iconVariants}
                className="flex flex-col items-center space-y-2"
              >
                <div className={`p-4 rounded-full bg-neutral-100 dark:bg-neutral-800 ${item.color}`}>
                  <item.icon size={32} />
                </div>
                <span className="text-neutral-700 dark:text-neutral-300 font-medium">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-3 bg-blue-500 dark:bg-purple-500 text-white font-medium rounded-lg hover:bg-blue-600 dark:hover:bg-purple-600 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-3 border-2 border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 font-medium rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-200"
              >
                Get In Touch
              </motion.a>
            </div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex justify-center pt-8"
            >
              <a
                href="#projects"
                className="text-neutral-400 dark:text-neutral-600 hover:text-blue-500 dark:hover:text-purple-400 transition-colors duration-200"
              >
                <ArrowDown size={24} />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
