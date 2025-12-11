import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Code, Database, Server, ExternalLink } from "lucide-react";
import { Spotlight } from "./ui/Spotlight";

const Hero: React.FC = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen py-20 flex items-center justify-center bg-white dark:bg-neutral-950 overflow-hidden"
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-black/[0.2] dark:bg-grid-white/[0.02] bg-[length:32px_32px]" />
        <div className="absolute inset-0 bg-white/50 dark:bg-neutral-950/80 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 backdrop-blur-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse" />
            <span className="text-sm text-neutral-600 dark:text-neutral-400 font-medium">Available for new projects</span>
          </motion.div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Designing the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 animate-gradient">
                Future of Web
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed font-light">
              Hi, I'm <span className="font-semibold text-neutral-900 dark:text-white">Daniel Park</span>.
              I build high-performance applications with a focus on premium aesthetics and scalable architecture.
            </p>
          </div>

          {/* Tech Stack Pills */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 py-6"
          >
            {[
              { icon: Code, label: "Frontend Architecture" },
              { icon: Server, label: "Backend Systems" },
              { icon: Database, label: "AI Integration" },
            ].map((tech) => (
              <div key={tech.label} className="flex items-center space-x-2 px-4 py-2 rounded-full bg-neutral-100 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300 transition-colors hover:border-blue-500/50">
                <tech.icon size={16} />
                <span className="text-sm font-medium">{tech.label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#projects"
              className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 dark:bg-white px-8 font-medium text-white dark:text-neutral-950 transition-all duration-300 hover:bg-neutral-800 dark:hover:bg-neutral-200 hover:scale-105"
            >
              <span className="mr-2">View Work</span>
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-8 font-medium text-neutral-900 dark:text-white transition-all duration-300 hover:bg-neutral-50 dark:hover:bg-neutral-900 hover:scale-105 group"
            >
              <span className="mr-2">Contact Me</span>
              <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
