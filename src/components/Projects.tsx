import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Filter } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: 'fullstack' | 'ml' | 'frontend' | 'backend';
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: "Vision-Based Vehicle Behavior Detector",
      description: "AI-powered system for detecting dangerous driving behaviors in real-time using YOLOv8 and computer vision. Features ML classification for safe/risky/dangerous behavior with modern React + TypeScript frontend.",
      technologies: ["Python", "Flask", "YOLOv8", "OpenCV", "React", "TypeScript", "Scikit-learn", "Tailwind CSS"],
      category: "ml",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop",
      demoUrl: "https://serene-dedication-production-63d2.up.railway.app/",
      githubUrl: "https://github.com/dSpringOnion/MLCBA",
      featured: true
    },
    {
      id: 2,
      title: "Heart Disease Risk Predictor",
      description: "Production-grade ML application predicting heart disease risk using the renowned Cleveland Heart Disease dataset. Achieved 85-90% accuracy with ensemble methods including Random Forest and XGBoost.",
      technologies: ["Python", "Scikit-learn", "XGBoost", "Streamlit", "Pandas", "NumPy"],
      category: "ml",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      demoUrl: "https://heartdiseasepredictor-production.up.railway.app/",
      githubUrl: "https://github.com/dSpringOnion/heartDiseasePredictor",
      featured: true
    },
    {
      id: 3,
      title: "E-commerce SaaS Boilerplate",
      description: "Production-ready e-commerce boilerplate with visual page builder. Features drag-and-drop editor with 50+ pre-built components, Stripe payments, and comprehensive admin dashboard. Built with Next.js 15 and React 19.",
      technologies: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma", "Stripe", "shadcn/ui", "Puck"],
      category: "fullstack",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=400&fit=crop",
      githubUrl: "https://github.com/dSpringOnion/ecommerceboilerplate",
      featured: true
    },
    {
      id: 4,
      title: "Recipe Blog Platform",
      description: "Modern full-stack recipe sharing platform with fuzzy search, ingredient scaling with smart unit conversions, video recipes via Cloudflare Stream, and magic link authentication. Built with Next.js 14 and tRPC.",
      technologies: ["Next.js", "tRPC", "PostgreSQL", "Prisma", "Tailwind CSS", "Auth.js", "Cloudflare"],
      category: "fullstack",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&h=400&fit=crop",
      githubUrl: "https://github.com/dSpringOnion/recipeblog",
      featured: true
    },
    {
      id: 5,
      title: "DistCacheLayer",
      description: "High-performance distributed in-memory cache built with modern C++17. Features sharded hash tables, LRU eviction, gRPC API, consistent hashing, and TLS encryption. Think Redis with distributed-first architecture.",
      technologies: ["C++17", "gRPC", "Protobuf", "CMake", "Docker"],
      category: "backend",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      githubUrl: "https://github.com/dSpringOnion/clidistcachelayer",
      featured: true
    },
    {
      id: 6,
      title: "PowerBall ML Predictor",
      description: "Comprehensive ML application for analyzing Powerball lottery numbers with interactive visualizations. Implements frequency analysis, pattern recognition, time series analysis, and neural networks with Jupyter notebooks.",
      technologies: ["Python", "FastAPI", "Scikit-learn", "NumPy", "Pandas", "Matplotlib", "React", "TypeScript"],
      category: "ml",
      image: "https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?w=600&h=400&fit=crop",
      githubUrl: "https://github.com/dSpringOnion/lottopredictorml",
      featured: false
    },
    {
      id: 7,
      title: "CodeQuest",
      description: "Interactive C++ coding game platform with progressive challenges, real-time compilation, sandbox system for safe code execution, and Docker-based development environment.",
      technologies: ["C++", "CMake", "Docker", "PostgreSQL", "Playwright", "Node.js"],
      category: "fullstack",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=600&h=400&fit=crop",
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'ml', name: 'Machine Learning' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work across different technologies and domains
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeFilter === category.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <Filter size={16} />
              {category.name}
            </button>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;