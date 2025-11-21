import React from "react";
import { Timeline } from "./ui/timeline";
import { ExternalLink, Github } from "lucide-react";

export function ProjectsTimeline() {
  const data = [
    {
      title: "2025 - Current",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Currently building high-performance distributed systems with modern C++.
          </p>

          <div className="space-y-6 mb-8">
            {/* DistCacheLayer */}
            <div className="bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-950/30 dark:to-gray-950/30 rounded-xl p-6 border border-neutral-200 dark:border-neutral-800">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg md:text-xl font-bold text-neutral-900 dark:text-neutral-100">
                  DistCacheLayer
                </h3>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-full">
                  In Progress
                </span>
              </div>
              <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-300 mb-4">
                High-performance distributed in-memory cache built with modern C++17. Features sharded hash tables, LRU eviction, gRPC API, consistent hashing, and TLS encryption. Think Redis with distributed-first architecture.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['C++17', 'gRPC', 'Protobuf', 'CMake', 'Docker'].map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-white/50 dark:bg-black/20 text-neutral-700 dark:text-neutral-300 text-xs rounded-md border border-neutral-200 dark:border-neutral-700">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="https://github.com/dSpringOnion/clidistcachelayer"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:underline font-medium"
              >
                <Github size={16} />
                View Code
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&q=80"
              alt="Distributed systems"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&q=80"
              alt="Cloud infrastructure"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2025 - Sept/Oct",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Production-ready e-commerce platform with visual page builder and modern payment infrastructure.
          </p>

          <div className="space-y-6 mb-8">
            {/* E-commerce SaaS */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-xl p-6 border border-neutral-200 dark:border-neutral-800">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg md:text-xl font-bold text-neutral-900 dark:text-neutral-100">
                  E-commerce SaaS Boilerplate
                </h3>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 text-xs font-medium rounded-full">
                  Full Stack
                </span>
              </div>
              <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-300 mb-4">
                Production-ready e-commerce boilerplate with visual page builder. Features drag-and-drop editor with 50+ pre-built components, Stripe payments, and comprehensive admin dashboard. Built with Next.js 15 and React 19.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Prisma', 'Stripe', 'shadcn/ui'].map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-white/50 dark:bg-black/20 text-neutral-700 dark:text-neutral-300 text-xs rounded-md border border-neutral-200 dark:border-neutral-700">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="https://github.com/dSpringOnion/DannyperfumeDemo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:underline font-medium"
              >
                <Github size={16} />
                View Code
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=500&q=80"
              alt="E-commerce development"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&q=80"
              alt="Online shopping"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2025 - March/May",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            ML experiments and interactive coding platforms exploring different problem domains.
          </p>

          <div className="space-y-6 mb-8">
            {/* PowerBall & CodeQuest */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-xl p-6 border border-neutral-200 dark:border-neutral-800">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">PowerBall ML Predictor</h3>
                  <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 text-xs font-medium rounded-full">
                    ML
                  </span>
                </div>
                <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
                  Comprehensive ML application for analyzing Powerball lottery numbers with interactive visualizations. Implements frequency analysis, pattern recognition, time series analysis, and neural networks with Jupyter notebooks.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['Python', 'FastAPI', 'Scikit-learn', 'NumPy', 'Pandas'].map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-white/50 dark:bg-black/20 text-neutral-700 dark:text-neutral-300 text-xs rounded-md border border-neutral-200 dark:border-neutral-700">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href="https://github.com/dSpringOnion/lottoml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-neutral-600 dark:text-neutral-400 hover:underline font-medium"
                >
                  <Github size={14} />
                  View Code
                </a>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-sky-50 dark:from-cyan-950/30 dark:to-sky-950/30 rounded-xl p-6 border border-neutral-200 dark:border-neutral-800">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">CodeQuest</h3>
                  <span className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300 text-xs font-medium rounded-full">
                    Full Stack
                  </span>
                </div>
                <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
                  Interactive C++ coding game platform with progressive challenges, real-time compilation, sandbox system for safe code execution, and Docker-based development environment.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['C++', 'CMake', 'Docker', 'PostgreSQL', 'Node.js'].map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-white/50 dark:bg-black/20 text-neutral-700 dark:text-neutral-300 text-xs rounded-md border border-neutral-200 dark:border-neutral-700">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href="https://github.com/dSpringOnion/codequest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-neutral-600 dark:text-neutral-400 hover:underline font-medium"
                >
                  <Github size={14} />
                  View Code
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?w=500&q=80"
              alt="Data analysis"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=500&q=80"
              alt="Code and algorithms"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2025 - January",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Modern recipe sharing platform with advanced features and cloud video streaming.
          </p>

          <div className="space-y-6 mb-8">
            {/* Recipe Blog */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 rounded-xl p-6 border border-neutral-200 dark:border-neutral-800">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg md:text-xl font-bold text-neutral-900 dark:text-neutral-100">
                  Recipe Blog Platform
                </h3>
                <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300 text-xs font-medium rounded-full">
                  Full Stack
                </span>
              </div>
              <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-300 mb-4">
                Modern full-stack recipe sharing platform with fuzzy search, ingredient scaling with smart unit conversions, video recipes via Cloudflare Stream, and magic link authentication. Built with Next.js 14 and tRPC.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Next.js', 'tRPC', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'Auth.js', 'Cloudflare'].map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-white/50 dark:bg-black/20 text-neutral-700 dark:text-neutral-300 text-xs rounded-md border border-neutral-200 dark:border-neutral-700">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="https://github.com/dSpringOnion/recipeblog"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:underline font-medium"
              >
                <Github size={16} />
                View Code
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=500&q=80"
              alt="Recipe platform"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&q=80"
              alt="Cooking and food"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024 - Nov/Dec",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            AI-powered systems for real-world impact in transportation safety and healthcare prediction.
          </p>

          <div className="space-y-6 mb-8">
            {/* Vehicle Behavior Detector */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl p-6 border border-neutral-200 dark:border-neutral-800">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg md:text-xl font-bold text-neutral-900 dark:text-neutral-100">
                  Vision-Based Vehicle Behavior Detector
                </h3>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full">
                  ML
                </span>
              </div>
              <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-300 mb-4">
                AI-powered system for detecting dangerous driving behaviors in real-time using YOLOv8 and computer vision. Features ML classification for safe/risky/dangerous behavior with modern React + TypeScript frontend.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Python', 'Flask', 'YOLOv8', 'OpenCV', 'React', 'TypeScript', 'Scikit-learn'].map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-white/50 dark:bg-black/20 text-neutral-700 dark:text-neutral-300 text-xs rounded-md border border-neutral-200 dark:border-neutral-700">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
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
                  View Code
                </a>
              </div>
            </div>

            {/* Heart Disease Predictor */}
            <div className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950/30 dark:to-pink-950/30 rounded-xl p-6 border border-neutral-200 dark:border-neutral-800">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg md:text-xl font-bold text-neutral-900 dark:text-neutral-100">
                  Heart Disease Risk Predictor
                </h3>
                <span className="px-3 py-1 bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 text-xs font-medium rounded-full">
                  ML
                </span>
              </div>
              <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-300 mb-4">
                Production-grade ML application predicting heart disease risk using the renowned Cleveland Heart Disease dataset. Achieved 85-90% accuracy with ensemble methods including Random Forest and XGBoost.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Python', 'Scikit-learn', 'XGBoost', 'Streamlit', 'Pandas', 'NumPy'].map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-white/50 dark:bg-black/20 text-neutral-700 dark:text-neutral-300 text-xs rounded-md border border-neutral-200 dark:border-neutral-700">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
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
                  View Code
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&q=80"
              alt="AI and Machine Learning"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&q=80"
              alt="Healthcare Technology"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
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
