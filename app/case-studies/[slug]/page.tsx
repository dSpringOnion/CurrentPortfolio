import React from 'react';
import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import { CaseStudyLayout } from '@/components/CaseStudyLayout';

// Generate static params for all projects that have deep dive content
export async function generateStaticParams() {
  return projects
    .filter((p) => p.deepDiveContent)
    .map((project) => ({
      slug: project.slug,
    }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug }  = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project || !project.deepDiveContent) {
    notFound();
  }

  return <CaseStudyLayout project={project} />;
}

