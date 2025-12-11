import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Cloud, Cpu } from 'lucide-react';

interface Skill {
  name: string;
  icon: string;
}

interface SkillCategory {
  title: string;
  description: string;
  icon: React.ElementType;
  skills: Skill[];
  color: string;
}

const Skills: React.FC = () => {
  const categories: SkillCategory[] = [
    {
      title: "Frontend Architecture",
      description: "Building responsive, accessible, and performant user interfaces.",
      icon: Code,
      color: "blue",
      skills: [
        { name: 'React', icon: '⚛️' },
        { name: 'TypeScript', icon: '📘' },
        { name: 'Next.js', icon: '▲' },
        { name: 'Tailwind CSS', icon: '🎨' },
        { name: 'Framer Motion', icon: '✨' },
      ]
    },
    {
      title: "Backend Systems",
      description: "Designing scalable APIs and robust server-side logic.",
      icon: Server,
      color: "green",
      skills: [
        { name: 'Python', icon: '🐍' },
        { name: 'Node.js', icon: '🟢' },
        { name: 'PostgreSQL', icon: '🐘' },
        { name: 'REST API', icon: '🌐' },
        { name: 'FastAPI', icon: '⚡' },
        { name: 'Redis', icon: '📊' },
      ]
    },
    {
      title: "AI & Machine Learning",
      description: "Integrating intelligent models into production applications.",
      icon: Cpu,
      color: "purple",
      skills: [
        { name: 'TensorFlow', icon: '🧠' },
        { name: 'PyTorch', icon: '🔥' },
        { name: 'LangChain', icon: '🦜' },
        { name: 'OpenAI API', icon: '🤖' },
        { name: 'Hugging Face', icon: '🤗' },
      ]
    },
    {
      title: "DevOps & Cloud",
      description: "Orchestrating deployments and managing infrastructure.",
      icon: Cloud,
      color: "orange",
      skills: [
        { name: 'AWS', icon: '☁️' },
        { name: 'Docker', icon: '🐳' },
        { name: 'Kubernetes', icon: '☸️' },
        { name: 'CI/CD', icon: '🔄' },
        { name: 'Terraform', icon: '🏗️' },
      ]
    },
  ];

  return (
    <section id="skills" className="py-24 bg-white dark:bg-neutral-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400 mb-4">
            Technical Expertise
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            A comprehensive toolset for building modern digital products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {categories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative p-8 rounded-3xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/50 dark:to-white/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-2xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                    <category.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <p className="text-neutral-600 dark:text-neutral-400 mb-6 text-sm">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-sm font-medium text-neutral-700 dark:text-neutral-300 group-hover:border-blue-200 dark:group-hover:border-blue-800/30 transition-colors cursor-default"
                    >
                      <span className="text-xs grayscale group-hover:grayscale-0 transition-all duration-300">{skill.icon}</span>
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
