import React from "react";
import { Timeline } from "./ui/timeline";
import { ExternalLink, Github, Layers, Zap, Database, Globe, Cpu, ArrowRight } from "lucide-react";
import Link from "next/link";

export function ProjectsTimeline() {
  const data = [
    {
      title: "Current",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 leading-relaxed">
            Building next-generation distributed systems infrastructure.
          </p>

          <div className="space-y-6 mb-8">
            <div className="group relative bg-white dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800 hover:border-blue-500/50 transition-colors shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent dark:from-blue-900/10 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      <Layers size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                      DistCacheLayer
                    </h3>
                  </div>
                  <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-500 text-xs font-semibold rounded-full border border-amber-200 dark:border-amber-800">
                    In Progress
                  </span>
                </div>

                <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
                  A high-performance distributed in-memory cache system engineered with modern C++17. Designed for microservices architecture with sharded hash tables, LRU eviction policies, and secure gRPC communication patterns.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {['C++17', 'gRPC', 'Protobuf', 'CMake', 'Docker', 'System Design'].map((tech) => (
                    <span key={tech} className="px-2.5 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 text-xs font-medium rounded-full border border-neutral-200 dark:border-neutral-700">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                  <Link
                    href="/case-studies/distcachelayer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-full text-sm font-medium transition-transform hover:scale-105"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight size={16} />
                  </Link>
                  <a
                    href="https://github.com/dSpringOnion/clidistcachelayer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
                  >
                    <Github size={16} />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Late 2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 leading-relaxed">
            Full-stack commerce and financial platforms.
          </p>

          <div className="space-y-8">
            <div className="group relative bg-white dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800 hover:border-purple-500/50 transition-colors shadow-sm">
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      <Globe size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                      E-commerce SaaS
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
                  Production-ready boilerplate featuring a visual drag-and-drop page builder, integrated Stripe payments, and a content management system. Built for scalability and developer experience.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {['Next.js 15', 'React 19', 'PostgreSQL', 'Stripe', 'Shadcn UI'].map((tech) => (
                    <span key={tech} className="px-2.5 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 text-xs font-medium rounded-full border border-neutral-200 dark:border-neutral-700">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                  <Link
                      href="/case-studies/ecommerce-saas-boilerplate"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-full text-sm font-medium transition-transform hover:scale-105"
                    >
                      <span>Read Case Study</span>
                      <ArrowRight size={16} />
                  </Link>
                  <a
                    href="https://github.com/dSpringOnion/DannyperfumeDemo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors"
                  >
                    <Github size={16} />
                    <span>View Repository</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="group relative bg-white dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800 hover:border-green-500/50 transition-colors shadow-sm">
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                      <Database size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                      Expense Tracker SaaS
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
                  Multi-tenant financial platform with organization management, real-time analytics, and role-based access control. Implements secure JWT authentication and automated recurring billing logic.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {['Next.js', 'Prisma', 'NextAuth', 'Redis', 'Tailwind'].map((tech) => (
                    <span key={tech} className="px-2.5 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 text-xs font-medium rounded-full border border-neutral-200 dark:border-neutral-700">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                  <Link
                      href="/case-studies/expense-tracker"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-full text-sm font-medium transition-transform hover:scale-105"
                    >
                      <span>Read Case Study</span>
                      <ArrowRight size={16} />
                  </Link>
                  <a
                    href="https://github.com/dSpringOnion/expensetracker"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-green-600 dark:hover:text-green-400 font-medium transition-colors"
                  >
                    <Github size={16} />
                    <span>View Repository</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Mid 2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 leading-relaxed">
            Applied Machine Learning and Computer Vision systems.
          </p>

          <div className="grid grid-cols-1 gap-6">
            <div className="group relative bg-white dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800 hover:border-red-500/50 transition-colors shadow-sm">
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                      <Cpu size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                      Vehicle Behavior AI
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
                  Real-time vision pipeline using YOLOv8 to detect and classify dangerous driving patterns. Deployed with a React frontend to visualize risk metrics and safety alerts instantly.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {['Python', 'YOLOv8', 'OpenCV', 'React', 'Flask'].map((tech) => (
                    <span key={tech} className="px-2.5 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 text-xs font-medium rounded-full border border-neutral-200 dark:border-neutral-700">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                  <Link
                      href="/case-studies/vision-based-vehicle-behavior-detector"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-full text-sm font-medium transition-transform hover:scale-105"
                    >
                      <span>Read Case Study</span>
                      <ArrowRight size={16} />
                  </Link>
                  <a
                    href="https://serene-dedication-production-63d2.up.railway.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/dSpringOnion/MLCBA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:underline font-medium"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>

            <div className="group relative bg-white dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800 hover:border-pink-500/50 transition-colors shadow-sm">
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                      <Zap size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                      Heart Disease Predictor
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
                  Ensemble ML model achieving ~90% accuracy in risk prediction. Features an interactive dashboard for medical data input and visualization of key health indicators.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {['XGBoost', 'Scikit-learn', 'Streamlit', 'Pandas'].map((tech) => (
                    <span key={tech} className="px-2.5 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 text-xs font-medium rounded-full border border-neutral-200 dark:border-neutral-700">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                  <Link
                      href="/case-studies/heart-disease-risk-predictor"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-full text-sm font-medium transition-transform hover:scale-105"
                    >
                      <span>Read Case Study</span>
                      <ArrowRight size={16} />
                  </Link>
                  <a
                    href="https://heartdiseasepredictor-production.up.railway.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/dSpringOnion/heartDiseasePredictor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:underline font-medium"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div id="projects" className="w-full bg-white dark:bg-neutral-950">
      <Timeline data={data} />
    </div>
  );
}

