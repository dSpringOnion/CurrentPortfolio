"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Project } from '@/data/projects';

interface ProjectNavigatorProps {
  currentProject: Project;
  allProjects: Project[];
}

export const ProjectNavigator: React.FC<ProjectNavigatorProps> = ({ currentProject, allProjects }) => {
  // Filter only feature projects or same category? For now, navigate all projects logic
  // to keep engagement high.
  // Sort by ID to ensure consistent order
  const sortedProjects = [...allProjects].sort((a, b) => a.id - b.id);
  const currentIndex = sortedProjects.findIndex(p => p.id === currentProject.id);
  
  if (currentIndex === -1) return null;

  // Cyclic logic
  const prevIndex = currentIndex === 0 ? sortedProjects.length - 1 : currentIndex - 1;
  const nextIndex = currentIndex === sortedProjects.length - 1 ? 0 : currentIndex + 1;
  
  const prevProject = sortedProjects[prevIndex];
  const nextProject = sortedProjects[nextIndex];

  return (
    <div className="flex justify-between items-center py-12 border-t border-gray-200 dark:border-gray-800 mt-12 bg-white dark:bg-neutral-950">
      <Link 
        href={prevProject.deepDiveContent ? `/case-studies/${prevProject.slug}` : `/#projects`}
        className="group flex flex-col items-start gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
      >
        <span className="flex items-center gap-2 text-sm font-medium opacity-50"><ArrowLeft size={16} /> Previous Project</span>
        <span className="text-lg font-bold group-hover:underline">{prevProject.title}</span>
      </Link>

      <Link 
        href={nextProject.deepDiveContent ? `/case-studies/${nextProject.slug}` : `/#projects`}
        className="group flex flex-col items-end gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
      >
        <span className="flex items-center gap-2 text-sm font-medium opacity-50">Next Project <ArrowRight size={16} /></span>
        <span className="text-lg font-bold group-hover:underline">{nextProject.title}</span>
      </Link>
    </div>
  );
};
