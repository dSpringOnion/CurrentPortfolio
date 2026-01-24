"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Github, ExternalLink, Image as ImageIcon } from 'lucide-react';
import { Project, projects } from '@/data/projects';
import { ProjectNavigator } from '@/components/ProjectNavigator';
import { Spotlight } from '@/components/ui/Spotlight';

interface CaseStudyLayoutProps {
  project: Project;
}

export const CaseStudyLayout: React.FC<CaseStudyLayoutProps> = ({ project }) => {
  const { deepDiveContent } = project;

  if (!deepDiveContent) {
    return null; // Should not happen given existing guards, but safe fallback
  }

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 pt-24 pb-12 transition-colors duration-300 relative overflow-hidden">
      
      {/* Spotlight & Grid Background */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-black/[0.2] dark:bg-grid-white/[0.02] bg-[length:32px_32px]" />
        <div className="absolute inset-0 bg-white/50 dark:bg-neutral-950/80 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Back Link */}
        <Link 
          href="/#projects" 
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Portfolio
        </Link>

        {/* Hero Section */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-primary-100 dark:bg-neutral-800 text-primary-700 dark:text-neutral-300 border border-transparent dark:border-neutral-700 rounded-full text-sm font-medium">
              {project.category.toUpperCase()}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {project.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
             {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-neutral-900 dark:bg-white hover:bg-neutral-800 dark:hover:bg-neutral-200 text-white dark:text-neutral-900 rounded-lg font-medium transition-colors"
              >
                <ExternalLink size={20} />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-neutral-800 rounded-lg font-medium transition-colors"
              >
                <Github size={20} />
                View Code
              </a>
            )}
          </div>

          <div className="border-t border-b border-gray-200 dark:border-neutral-800 py-6 mb-8">
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-neutral-800 border border-transparent dark:border-neutral-700 text-gray-700 dark:text-gray-300 rounded-md text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Deep Dive Content */}
        <div className="space-y-16">
          
          {/* Problem Statement */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">The Challenge</h2>
            <div className="bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm border border-neutral-200 dark:border-neutral-800 rounded-xl p-6">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {deepDiveContent.problemStatement}
                </p>
            </div>
          </section>

          {/* Architecture / Solution */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">The Solution</h2>
            
            {/* Primary Architecture Diagram */}
            <div className="bg-neutral-100 dark:bg-neutral-900 rounded-xl p-1 mb-6 border border-neutral-200 dark:border-neutral-800">
               <div className="aspect-video bg-neutral-200 dark:bg-neutral-800 rounded-lg relative overflow-hidden flex flex-col items-center justify-center text-gray-500 gap-2">
                  {deepDiveContent.architectureDiagramUrl && !deepDiveContent.architectureDiagramUrl.includes('placeholder') ? (
                    <Image 
                      src={deepDiveContent.architectureDiagramUrl} 
                      alt="System Architecture" 
                      fill 
                      className="object-cover"
                    />
                  ) : (
                    <>
                      <ImageIcon size={48} className="opacity-20" />
                      <span className="font-mono text-sm opacity-50">[Architecture Diagram Placeholder]</span>
                    </>
                  )}
               </div>
            </div>

            {/* Screenshot Placeholders */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {deepDiveContent.demoImages && deepDiveContent.demoImages.length > 0 ? (
                  deepDiveContent.demoImages.map((img, idx) => (
                    <div key={idx} className="bg-neutral-100 dark:bg-neutral-900 rounded-xl p-1 border border-neutral-200 dark:border-neutral-800">
                        <div className="aspect-[4/3] bg-neutral-200 dark:bg-neutral-800 rounded-lg relative overflow-hidden flex flex-col items-center justify-center text-gray-500 gap-2">
                            <Image 
                              src={img} 
                              alt={`Project Screenshot ${idx + 1}`} 
                              fill 
                              className="object-cover"
                            />
                        </div>
                    </div>
                  ))
                ) : (
                  <>
                    <div className="bg-neutral-100 dark:bg-neutral-900 rounded-xl p-1 border border-neutral-200 dark:border-neutral-800">
                        <div className="aspect-[4/3] bg-neutral-200 dark:bg-neutral-800 rounded-lg flex flex-col items-center justify-center text-gray-500 gap-2">
                            <ImageIcon size={32} className="opacity-20" />
                            <span className="font-mono text-xs opacity-50">[Dashboard Screenshot]</span>
                        </div>
                    </div>
                    <div className="bg-neutral-100 dark:bg-neutral-900 rounded-xl p-1 border border-neutral-200 dark:border-neutral-800">
                        <div className="aspect-[4/3] bg-neutral-200 dark:bg-neutral-800 rounded-lg flex flex-col items-center justify-center text-gray-500 gap-2">
                            <ImageIcon size={32} className="opacity-20" />
                            <span className="font-mono text-xs opacity-50">[Mobile View Screenshot]</span>
                        </div>
                    </div>
                  </>
                )}
            </div>

            <ul className="space-y-4">
              {deepDiveContent.challengesOvercome.map((challenge, idx) => (
                <li key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center font-bold text-sm">
                    {idx + 1}
                  </div>
                  <div className="pt-1">
                    <p className="text-gray-700 dark:text-gray-300">{challenge}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Impact / Metrics */}
          <section>
             <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Key Outcomes</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {deepDiveContent.outcomeMetrics.map((metric, idx) => (
                  <div key={idx} className="bg-white dark:bg-neutral-900 p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 text-center shadow-sm">
                    <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-2">{metric}</p>
                  </div>
                ))}
             </div>
          </section>

        </div>

        {/* Navigator */}
        <ProjectNavigator currentProject={project} allProjects={projects} />
        
      </div>
    </div>
  );
};
