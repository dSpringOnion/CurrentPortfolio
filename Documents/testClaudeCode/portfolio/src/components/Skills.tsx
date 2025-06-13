import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    // Frontend
    { name: 'React', level: 95, category: 'Frontend', icon: '⚛️' },
    { name: 'TypeScript', level: 92, category: 'Frontend', icon: '📘' },
    { name: 'Next.js', level: 90, category: 'Frontend', icon: '▲' },
    { name: 'Tailwind CSS', level: 90, category: 'Frontend', icon: '🎨' },
    
    // Backend
    { name: 'Python', level: 95, category: 'Backend', icon: '🐍' },
    { name: 'Node.js', level: 88, category: 'Backend', icon: '🟢' },
    { name: 'Express.js', level: 85, category: 'Backend', icon: '🚂' },
    { name: 'FastAPI', level: 85, category: 'Backend', icon: '⚡' },
    
    // Machine Learning & AI
    { name: 'TensorFlow', level: 88, category: 'ML/AI', icon: '🧠' },
    { name: 'Scikit-learn', level: 92, category: 'ML/AI', icon: '🤖' },
    { name: 'Pandas', level: 95, category: 'ML/AI', icon: '🐼' },
    { name: 'NumPy', level: 90, category: 'ML/AI', icon: '🔢' },
    { name: 'XGBoost', level: 85, category: 'ML/AI', icon: '🚀' },
    
    // Database
    { name: 'PostgreSQL', level: 92, category: 'Database', icon: '🐘' },
    { name: 'MongoDB', level: 80, category: 'Database', icon: '🍃' },
    { name: 'Redis', level: 85, category: 'Database', icon: '📊' },
    { name: 'Prisma', level: 88, category: 'Database', icon: '💎' },
    
    // DevOps & Cloud
    { name: 'Docker', level: 88, category: 'DevOps', icon: '🐳' },
    { name: 'AWS', level: 85, category: 'DevOps', icon: '☁️' },
    { name: 'Kubernetes', level: 80, category: 'DevOps', icon: '⚙️' },
    { name: 'Git', level: 95, category: 'DevOps', icon: '📋' },
  ];

  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Technologies I love working with and my proficiency levels
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-gray-50 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {category}
              </h3>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      className="relative"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{skill.icon}</span>
                          <span className="font-medium text-gray-900">{skill.name}</span>
                        </div>
                        <span className="text-sm font-medium text-gray-600">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="relative">
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="bg-gradient-to-r from-primary-500 to-primary-600 h-3 rounded-full shadow-sm"
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Always Learning
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Technology evolves rapidly, and I'm committed to continuous learning. 
              Currently exploring LLM integration, distributed systems architecture, and advanced ML deployment pipelines.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;