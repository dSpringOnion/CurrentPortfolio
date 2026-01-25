import React from "react";
import { Timeline } from "./ui/timeline";
import { ExternalLink, Github, Layers, Zap, Database, Globe, Cpu, ArrowRight, Code, Gamepad2, Smartphone } from "lucide-react";
import Link from "next/link";
import { projects, Project } from "@/data/projects";

export function ProjectsTimeline() {
  // Group projects by date
  const groupedProjects = projects.reduce((acc, project) => {
    const date = project.date;
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(project);
    return acc;
  }, {} as Record<string, Project[]>);

  // Define sort order for dates
  const dateOrder = [
    "Current",
    "Dec 2025",
    "Late Summer 2025", 
    "Mid 2025",
    "Early 2025"
  ];

  // Helper to get icon based on category
  const getIcon = (category: string) => {
    switch (category) {
      case 'backend': return <Layers size={20} />;
      case 'frontend': return <Globe size={20} />;
      case 'fullstack': return <Database size={20} />;
      case 'ml': return <Cpu size={20} />;
      case 'game': return <Gamepad2 size={20} />;
      case 'mobile': return <Smartphone size={20} />;
      default: return <Code size={20} />;
    }
  };

  // Helper to get hover color based on category
  const getHoverColorClass = (category: string) => {
    switch (category) {
      case 'backend': return 'hover:border-blue-500/50 group-hover:text-blue-600 dark:group-hover:text-blue-400';
      case 'frontend': return 'hover:border-purple-500/50 group-hover:text-purple-600 dark:group-hover:text-purple-400';
      case 'fullstack': return 'hover:border-green-500/50 group-hover:text-green-600 dark:group-hover:text-green-400';
      case 'ml': return 'hover:border-red-500/50 group-hover:text-red-600 dark:group-hover:text-red-400';
      case 'game': return 'hover:border-orange-500/50 group-hover:text-orange-600 dark:group-hover:text-orange-400';
      case 'mobile': return 'hover:border-pink-500/50 group-hover:text-pink-600 dark:group-hover:text-pink-400';
      default: return 'hover:border-gray-500/50 group-hover:text-gray-600 dark:group-hover:text-gray-400';
    }
  };

  const timelineData = dateOrder
    .filter(date => groupedProjects[date]) // Only show dates that have projects
    .map(date => ({
      title: date,
      content: (
        <div>
           <div className="space-y-8">
            {groupedProjects[date].map((project) => (
              <div key={project.id} className={`group relative bg-white dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800 transition-colors shadow-sm ${getHoverColorClass(project.category).split(' ')[0]}`}>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 transition-colors ${getHoverColorClass(project.category).split(' ').slice(1).join(' ')}`}>
                        {getIcon(project.category)}
                      </div>
                      <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span key={tech} className="px-2.5 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 text-xs font-medium rounded-full border border-neutral-200 dark:border-neutral-700">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                    {project.deepDiveContent && (
                      <Link
                        href={`/case-studies/${project.slug}`}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-full text-sm font-medium transition-transform hover:scale-105"
                      >
                        <span>Read Case Study</span>
                        <ArrowRight size={16} />
                      </Link>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium"
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
                        className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:underline font-medium"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
           </div>
        </div>
      )
    }));

  return (
    <div id="projects" className="w-full bg-white dark:bg-neutral-950">
      <Timeline data={timelineData} />
    </div>
  );
}
