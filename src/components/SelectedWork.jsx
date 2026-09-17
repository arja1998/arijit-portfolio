import React, { useState } from 'react';
import { selectedProfessionalWork } from '../data/portfolioData';
import CaseStudyModal from './CaseStudyModal';
import {
  ExternalLink,
  CheckCircle2,
  Building2,
  Lock,
  FileText
} from 'lucide-react';

export default function SelectedWork() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="work" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold tracking-wide uppercase mb-3">
              Selected Commercial Work
            </div>

            <h2 className="section-title font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              Live Commercial Websites Built & Maintained for Real Businesses
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              These are live, production-grade hospitality & banquet venue platforms
              built directly for{' '}
              <strong className="text-slate-900 dark:text-white font-semibold">
                Pradhan Banquet Group
              </strong>
              . Each platform handles real customer traffic, inquiries, venue
              showcases, and local search visibility.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-semibold shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>All 3 Platforms Live & Maintained</span>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {selectedProfessionalWork.map((project) => {

            // Safe values based on portfolioData.js structure
            const liveUrl = project?.url || '';
            const displayUrl =
              project?.displayUrl ||
              liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '');

            const description =
              project?.shortDescription ||
              'Professional commercial website development project.';

            const features = Array.isArray(project?.features)
              ? project.features
              : [];

            const technologies = Array.isArray(project?.technologies)
              ? project.technologies
              : [];

            return (
              <div
                key={project.id}
                className="flex flex-col rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-blue-500/40 dark:hover:border-blue-500/40 transition-all duration-300 overflow-hidden group"
              >

                {/* Browser Mockup Window Header */}
                <div className="px-4 py-3 bg-slate-100 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">

                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                  </div>

                  {/* Simulated URL Bar */}
                  <div className="px-3 py-0.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5 max-w-[200px] truncate">
                    <Lock className="w-2.5 h-2.5 text-emerald-500 shrink-0" />

                    <span className="truncate">
                      {displayUrl || 'Website'}
                    </span>
                  </div>

                  <div className="w-4" />
                </div>

                {/* Card Header & Content */}
                <div className="p-6 pb-4 flex-1 flex flex-col">

                  {/* Company + Status */}
                  <div className="flex items-center justify-between gap-2 mb-3">

                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                      <Building2 className="w-3 h-3" />
                      {project.company || 'Professional Work'}
                    </span>

                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />

                      {project.status || 'Active'}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title || 'Untitled Project'}
                  </h3>

                  {/* Project Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-5 leading-relaxed">
                    {description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 mb-6">

                    {features.length > 0 ? (
                      features.slice(0, 4).map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />

                          <span>
                            {feature}
                          </span>
                        </div>
                      ))
                    ) : (
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        Professional website development and maintenance.
                      </div>
                    )}

                  </div>

                  {/* Technologies */}
                  <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800/80">

                    <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 mb-2">
                      Technologies Applied:
                    </div>

                    <div className="flex flex-wrap gap-1.5">

                      {technologies.length > 0 ? (
                        technologies.map((technology, idx) => (
                          <span
                            key={idx}
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

                {/* Action Footer */}
                <div className="p-4 pt-0 grid grid-cols-2 gap-2 mt-2">

                  {/* Case Study */}
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-semibold transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5 text-blue-500" />

                    <span>
                      Case Study
                    </span>
                  </button>

                  {/* Live Website */}
                  {liveUrl ? (
                    <a
                      href={liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-sm transition-colors"
                    >
                      <span>
                        Visit Live Site
                      </span>

                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-slate-300 dark:bg-slate-700 text-slate-500 dark:text-slate-400 text-xs font-semibold cursor-not-allowed"
                    >
                      <span>
                        Site Unavailable
                      </span>
                    </button>
                  )}

                </div>
              </div>
            );
          })}

        </div>

        {/* Modal for detailed case study */}
        <CaseStudyModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
}