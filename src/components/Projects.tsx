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
      title: "Inventory Management System",
      description: "Enterprise-grade inventory management platform with real-time tracking, automated reordering, and comprehensive analytics. Built with modern full-stack architecture for scalability and performance.",
      technologies: ["Next.js", "React", "TypeScript", "PostgreSQL", "Express", "Tailwind CSS", "Prisma"],
      category: "fullstack",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
      demoUrl: "https://humble-creation-production.up.railway.app/products",
      githubUrl: "https://github.com/danielpark/inventory-system",
      featured: true
    },
    {
      id: 2,
      title: "Heart Disease Detection Model",
      description: "Machine learning model for early heart disease detection using clinical data. Achieved 94% accuracy with ensemble methods and feature engineering on 70,000+ patient records.",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Jupyter", "XGBoost"],
      category: "ml",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      demoUrl: "https://heartdiseasepredictor-production.up.railway.app/",
      githubUrl: "https://github.com/danielpark/heart-disease-ml",
      featured: true
    },
    {
      id: 3,
      title: "Vehicle Driving Behavior Analysis",
      description: "Advanced ML model analyzing driving patterns to predict risky behavior and improve road safety. Processes real-time telematics data with 92% classification accuracy.",
      technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "Pandas", "Plotly", "AWS"],
      category: "ml",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop",
      demoUrl: "https://serene-dedication-production-63d2.up.railway.app/",
      githubUrl: "https://github.com/danielpark/driving-behavior-ml",
      featured: true
    },
    {
      id: 4,
      title: "Real-time Analytics Dashboard",
      description: "High-performance dashboard processing millions of data points with sub-second query responses. Features interactive visualizations and automated reporting.",
      technologies: ["React", "D3.js", "Node.js", "Redis", "PostgreSQL", "Socket.io"],
      category: "fullstack",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      githubUrl: "https://github.com/danielpark/analytics-dashboard",
      featured: false
    },
    {
      id: 5,
      title: "Microservices API Gateway",
      description: "Scalable API gateway handling 10M+ requests/day with intelligent load balancing, rate limiting, and comprehensive monitoring across distributed services.",
      technologies: ["Node.js", "Express", "Docker", "Kubernetes", "Redis", "Prometheus"],
      category: "backend",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      githubUrl: "https://github.com/danielpark/api-gateway",
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
                      className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
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