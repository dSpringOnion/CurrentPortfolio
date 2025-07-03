import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Filter, Key, X, Send } from 'lucide-react';

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
  const [showAccessModal, setShowAccessModal] = useState(false);
  const [accessForm, setAccessForm] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const projects: Project[] = [
    {
      id: 1,
      title: "Inventory Management System",
      description: "Enterprise-grade inventory management platform with real-time tracking, automated reordering, and comprehensive analytics. Built with modern full-stack architecture for scalability and performance.",
      technologies: ["Next.js", "React", "TypeScript", "PostgreSQL", "Express", "Tailwind CSS", "Prisma"],
      category: "fullstack",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
      demoUrl: "https://humble-creation-production.up.railway.app/products",
      githubUrl: "https://github.com/dSpringOnion/inventoryManagment",
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
      githubUrl: "https://github.com/dSpringOnion/heartDiseasePredictor",
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
      githubUrl: "https://github.com/dSpringOnion/MLCBA",
      featured: true
    },
    {
      id: 4,
      title: "Real-time Analytics Dashboard",
      description: "High-performance dashboard processing millions of data points with sub-second query responses. Features interactive visualizations and automated reporting.",
      technologies: ["React", "D3.js", "Node.js", "Redis", "PostgreSQL", "Socket.io"],
      category: "fullstack",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      featured: false
    },
    {
      id: 5,
      title: "Microservices API Gateway",
      description: "Scalable API gateway handling 10M+ requests/day with intelligent load balancing, rate limiting, and comprehensive monitoring across distributed services.",
      technologies: ["Node.js", "Express", "Docker", "Kubernetes", "Redis", "Prometheus"],
      category: "backend",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
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

  const handleAccessRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: accessForm.name,
          email: accessForm.email,
          subject: 'Demo Access Request - Inventory Management System',
          message: `Demo Access Request\n\nName: ${accessForm.name}\nEmail: ${accessForm.email}\nCompany: ${accessForm.company}\n\nMessage:\n${accessForm.message}\n\nRequesting access to the Inventory Management System demo.`
        }),
      });

      if (response.ok) {
        setSubmissionStatus('success');
        setTimeout(() => {
          setShowAccessModal(false);
          setAccessForm({ name: '', email: '', company: '', message: '' });
          setSubmissionStatus('idle');
        }, 2000);
      } else {
        setSubmissionStatus('error');
      }
    } catch (error) {
      setSubmissionStatus('error');
    }
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
                  {project.id === 1 ? (
                    <>
                      <button
                        onClick={() => setShowAccessModal(true)}
                        className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                      >
                        <Key size={16} />
                        Request Access
                      </button>
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
                        >
                          <Github size={16} />
                          Code
                        </a>
                      )}
                    </>
                  ) : (
                    <>
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
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Demo Access Request Modal */}
        <AnimatePresence>
          {showAccessModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
              onClick={() => setShowAccessModal(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Request Demo Access</h3>
                  <button
                    onClick={() => setShowAccessModal(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X size={20} />
                  </button>
                </div>
                
                <p className="text-gray-600 mb-6">
                  Request access to the Inventory Management System demo. I'll send you the login credentials.
                </p>

                <form onSubmit={handleAccessRequest} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={accessForm.name}
                      onChange={(e) => setAccessForm({ ...accessForm, name: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={accessForm.email}
                      onChange={(e) => setAccessForm({ ...accessForm, email: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company
                    </label>
                    <input
                      type="text"
                      value={accessForm.company}
                      onChange={(e) => setAccessForm({ ...accessForm, company: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      rows={3}
                      value={accessForm.message}
                      onChange={(e) => setAccessForm({ ...accessForm, message: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Tell me about your interest in the demo..."
                    />
                  </div>

                  {submissionStatus === 'success' && (
                    <div className="text-green-600 text-sm">
                      ✓ Request sent! I'll email you the demo credentials shortly.
                    </div>
                  )}
                  
                  {submissionStatus === 'error' && (
                    <div className="text-red-600 text-sm">
                      ✗ Failed to send request. Please try again.
                    </div>
                  )}

                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setShowAccessModal(false)}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={submissionStatus === 'loading'}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 transition-colors"
                    >
                      {submissionStatus === 'loading' ? (
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
                      ) : (
                        <Send size={16} />
                      )}
                      {submissionStatus === 'loading' ? 'Sending...' : 'Send Request'}
                    </button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;