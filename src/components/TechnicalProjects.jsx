import React, { useState } from 'react';
import { technicalProjects } from '../data/portfolioData';
import {
  Code2,
  ExternalLink,
  CheckCircle2
} from 'lucide-react';
import { Github } from './SocialIcons';

export default function TechnicalProjects() {
  const [filter, setFilter] = useState('All');

  const filterOptions = [
    'All',
    'Laravel',
    'PHP & MySQL',
    'Full-Stack'
  ];

  /*
   * Safely ensure technicalProjects is always an array.
   */
  const projects = Array.isArray(technicalProjects)
    ? technicalProjects
    : [];

  /*
   * Filter projects based on their technologies.
   */
  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((project) => {
          const technologies = Array.isArray(project?.technologies)
            ? project.technologies
            : [];

          const normalizedTechnologies = technologies.map((technology) =>
            String(technology).toLowerCase()
          );

          if (filter === 'Laravel') {
            return normalizedTechnologies.some((technology) =>
              technology.includes('laravel')
            );
          }

          if (filter === 'PHP & MySQL') {
            return normalizedTechnologies.some(
              (technology) =>
                technology.includes('php') ||
                technology.includes('mysql')
            );
          }

          if (filter === 'Full-Stack') {
            return true;
          }

          return true;
        });

  return (
    <section
      id="projects"
      className="py-20 bg-slate-50/50 dark:bg-slate-900/30 border-y border-slate-200/80 dark:border-slate-800/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">

          <div className="max-w-3xl">

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold tracking-wide uppercase mb-3">
              Technical & Engineering Projects
            </div>

            <h2 className="section-title font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              Full-Stack & Laravel Application Architectures
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Demonstrating strong engineering foundations across Laravel MVC,
              relational database design, role-based authentication, CRUD
              pipelines, and responsive frontend interfaces.
            </p>

          </div>

          {/* GitHub Profile Direct Badge */}
          <a
            href="https://github.com/arja1998"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-semibold transition-all duration-150 shrink-0"
          >
            <Github className="w-4 h-4" />

            <span>
              github.com/arja1998
            </span>

            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>

        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10">

          {filterOptions.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setFilter(option)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 ${
                filter === option
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/30'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              {option}
            </button>
          ))}

        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {filteredProjects.map((project) => {

              /*
               * portfolioData.js uses verifiedFeatures.
               */
              const features = Array.isArray(project?.verifiedFeatures)
                ? project.verifiedFeatures
                : [];

              /*
               * Safely handle technologies.
               */
              const technologies = Array.isArray(project?.technologies)
                ? project.technologies
                : [];

              /*
               * Safely handle GitHub URL.
               */
              const githubUrl = project?.githubUrl || '#';

              return (
                <div
                  key={project?.id || project?.title}
                  className="flex flex-col rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 dark:hover:border-blue-500/40 shadow-sm hover:shadow-lg transition-all duration-200 overflow-hidden group"
                >

                  {/* Card Header & Title */}
                  <div className="p-6 pb-4 flex-1 flex flex-col">

                    <div className="flex items-center justify-between gap-2 mb-3">

                      <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                        {project?.category || 'Technical Project'}
                      </span>

                      <div className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400">
                        <Code2 className="w-3.5 h-3.5" />
                      </div>

                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project?.title || 'Technical Project'}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-5 leading-relaxed">
                      {project?.description ||
                        'Full-stack web development project.'}
                    </p>

                    {/* Key Features */}
                    <div className="space-y-2 mb-6 flex-1">

                      <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
                        Key Features:
                      </div>

                      {features.length > 0 ? (
                        features.map((feature, index) => (
                          <div
                            key={`${project?.id || project?.title}-feature-${index}`}
                            className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />

                            <span>
                              {feature}
                            </span>
                          </div>
                        ))
                      ) : (
                        <div className="text-xs text-slate-500 dark:text-slate-400">
                          Project features will be added here.
                        </div>
                      )}

                    </div>

                    {/* Tech Pills */}
                    <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800/80">

                      <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
                        Technologies:
                      </div>

                      <div className="flex flex-wrap gap-1.5">

                        {technologies.length > 0 ? (
                          technologies.map((technology, index) => (
                            <span
                              key={`${project?.id || project?.title}-tech-${index}`}
                              className="px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium"
                            >
                              {technology}
                            </span>
                          ))
                        ) : (
                          <span className="text-xs text-slate-400">
                            Web Development
                          </span>
                        )}

                      </div>

                    </div>

                  </div>

                  {/* GitHub Button Footer */}
                  <div className="p-4 pt-0">

                    {githubUrl !== '#' ? (
                      <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-semibold transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />

                        <span>
                          View Repository on GitHub
                        </span>

                        <ExternalLink className="w-3 h-3 text-slate-400" />
                      </a>
                    ) : (
                      <button
                        type="button"
                        disabled
                        className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-400 text-xs font-semibold cursor-not-allowed"
                      >
                        Repository Unavailable
                      </button>
                    )}

                  </div>

                </div>
              );
            })}

          </div>
        ) : (
          /* Empty State */
          <div className="py-12 text-center rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50">

            <Code2 className="w-8 h-8 mx-auto mb-3 text-slate-400" />

            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              No projects found for this filter.
            </p>

            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Try selecting another technology category.
            </p>

          </div>
        )}

      </div>
    </section>
  );
}