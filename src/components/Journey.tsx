import React from "react";
import { Timeline } from "./ui/timeline";
import { ExternalLink, Github } from "lucide-react";

export function Journey() {
  const data = [
    {
      title: "Machine Learning & AI",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Built production-grade ML applications with real-world impact. From computer vision systems detecting dangerous driving behaviors to healthcare predictive models achieving 85-90% accuracy.
          </p>
          <div className="mb-6 space-y-4">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-4">
              <h4 className="font-bold text-neutral-900 dark:text-neutral-100 mb-2">Vehicle Behavior Detector</h4>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3">
                AI-powered real-time detection system using YOLOv8 and computer vision with ML classification for safe/risky/dangerous behavior analysis.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://serene-dedication-production-63d2.up.railway.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <ExternalLink size={14} />
                  Live Demo
                </a>
                <a
                  href="https://github.com/dSpringOnion/MLCBA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-neutral-600 dark:text-neutral-400 hover:underline"
                >
                  <Github size={14} />
                  View Code
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-lg p-4">
              <h4 className="font-bold text-neutral-900 dark:text-neutral-100 mb-2">Heart Disease Predictor</h4>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3">
                Healthcare ML application using ensemble methods (Random Forest & XGBoost) on Cleveland dataset with 85-90% accuracy.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://heartdiseasepredictor-production.up.railway.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <ExternalLink size={14} />
                  Live Demo
                </a>
                <a
                  href="https://github.com/dSpringOnion/heartDiseasePredictor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-neutral-600 dark:text-neutral-400 hover:underline"
                >
                  <Github size={14} />
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
    {
      title: "Full Stack Development",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Built enterprise-scale applications with modern architectures. From SaaS boilerplates with visual page builders to recipe platforms with advanced search and video streaming.
          </p>
          <div className="mb-6 space-y-4">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-4">
              <h4 className="font-bold text-neutral-900 dark:text-neutral-100 mb-2">E-commerce SaaS Boilerplate</h4>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3">
                Production-ready platform with drag-and-drop visual editor, 50+ components, Stripe payments, and comprehensive admin dashboard.
              </p>
              <a
                href="https://github.com/dSpringOnion/DannyperfumeDemo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs text-neutral-600 dark:text-neutral-400 hover:underline"
              >
                <Github size={14} />
                View Code
              </a>
            </div>
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-lg p-4">
              <h4 className="font-bold text-neutral-900 dark:text-neutral-100 mb-2">Recipe Blog Platform</h4>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3">
                Modern recipe sharing platform with fuzzy search, smart ingredient scaling, video recipes via Cloudflare Stream, and magic link auth.
              </p>
              <a
                href="https://github.com/dSpringOnion/recipeblog"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs text-neutral-600 dark:text-neutral-400 hover:underline"
              >
                <Github size={14} />
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
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=500&q=80"
              alt="Recipe platform"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Systems & Infrastructure",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Built high-performance systems with distributed architectures and modern DevOps practices.
          </p>
          <div className="mb-8">
            <div className="bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-900/20 dark:to-gray-900/20 rounded-lg p-4 mb-4">
              <h4 className="font-bold text-neutral-900 dark:text-neutral-100 mb-2">DistCacheLayer</h4>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3">
                High-performance distributed in-memory cache with C++17. Features sharded hash tables, LRU eviction, gRPC API, consistent hashing, and TLS encryption.
              </p>
              <a
                href="https://github.com/dSpringOnion/clidistcachelayer"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs text-neutral-600 dark:text-neutral-400 hover:underline"
              >
                <Github size={14} />
                View Code
              </a>
            </div>
            <div className="space-y-2 text-xs md:text-sm">
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300">
                <span className="text-green-600 dark:text-green-400">✓</span> Docker & Kubernetes orchestration
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300">
                <span className="text-green-600 dark:text-green-400">✓</span> AWS cloud infrastructure
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300">
                <span className="text-green-600 dark:text-green-400">✓</span> PostgreSQL, MongoDB, Redis expertise
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300">
                <span className="text-green-600 dark:text-green-400">✓</span> gRPC & REST API design
              </div>
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
  ];

  return (
    <div className="w-full bg-white dark:bg-gray-900">
      <Timeline data={data} />
    </div>
  );
}
