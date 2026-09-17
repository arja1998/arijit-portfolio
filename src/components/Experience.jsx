import React from 'react';
import { experienceTimeline } from '../data/portfolioData';
import {
  Building2,
  Calendar,
  MapPin,
  CheckCircle2,
  Briefcase,
  ExternalLink
} from 'lucide-react';

export default function Experience() {
  const experiences = Array.isArray(experienceTimeline)
    ? experienceTimeline
    : [];

  return (
    <section
      id="experience"
      className="py-20 bg-slate-50/50 dark:bg-slate-900/30 border-y border-slate-200/80 dark:border-slate-800/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16">

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold tracking-wide uppercase mb-3">
            Career Progression
          </div>

          <h2 className="section-title font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Professional Experience & Track Record
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Real commercial experience spanning direct business platform
            development and structured software engineering internship training.
          </p>

        </div>

        {/* Timeline Stack */}
        {experiences.length > 0 ? (
          <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 sm:ml-6 space-y-12">

            {experiences.map((experience, index) => {

              /*
               * Actual portfolioData.js structure:
               *
               * company
               * role
               * period
               * type
               * location
               * description
               * keyPoints
               * verifiedWebsites
               */

              const keyPoints = Array.isArray(experience?.keyPoints)
                ? experience.keyPoints
                : [];

              const verifiedWebsites = Array.isArray(
                experience?.verifiedWebsites
              )
                ? experience.verifiedWebsites
                : [];

              return (
                <div
                  key={
                    experience?.id ||
                    `${experience?.company || 'experience'}-${index}`
                  }
                  className="relative pl-6 sm:pl-10"
                >

                  {/* Timeline Indicator Dot */}
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-slate-900 shadow-sm" />

                  {/* Content Card */}
                  <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-200">

                    {/* Top Meta Details */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">

                      <div>

                        {/* Company */}
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-2">

                          <Building2 className="w-3.5 h-3.5" />

                          {experience?.company || 'Company'}

                        </span>

                        {/* Role */}
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                          {experience?.role || 'Professional Role'}
                        </h3>

                        {/* Experience Type */}
                        {experience?.type && (
                          <div className="inline-flex items-center gap-1.5 mt-2 text-xs text-slate-500 dark:text-slate-400">

                            <Briefcase className="w-3.5 h-3.5 text-blue-500" />

                            <span>
                              {experience.type}
                            </span>

                          </div>
                        )}

                      </div>

                      {/* Period & Location */}
                      <div className="flex flex-col sm:items-end text-xs text-slate-500 dark:text-slate-400">

                        {experience?.period && (
                          <div className="flex items-center gap-1 font-semibold text-slate-700 dark:text-slate-300">

                            <Calendar className="w-3.5 h-3.5 text-blue-500" />

                            <span>
                              {experience.period}
                            </span>

                          </div>
                        )}

                        {experience?.location && (
                          <div className="flex items-center gap-1 mt-1">

                            <MapPin className="w-3 h-3 text-red-400" />

                            <span>
                              {experience.location}
                            </span>

                          </div>
                        )}

                      </div>

                    </div>

                    {/* Description */}
                    {experience?.description && (
                      <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                        {experience.description}
                      </p>
                    )}

                    {/* Key Points */}
                    <div className="space-y-2.5 mb-6">

                      <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
                        Key Contributions:
                      </div>

                      {keyPoints.length > 0 ? (
                        keyPoints.map((point, pointIndex) => (
                          <div
                            key={`${experience?.id || index}-point-${pointIndex}`}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                          >

                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />

                            <span>
                              {point}
                            </span>

                          </div>
                        ))
                      ) : (
                        <div className="text-xs text-slate-500 dark:text-slate-400">
                          Professional responsibilities and contributions
                          will be listed here.
                        </div>
                      )}

                    </div>

                    {/* Verified Websites */}
                    {verifiedWebsites.length > 0 && (
                      <div className="pt-5 border-t border-slate-100 dark:border-slate-800/80">

                        <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3">
                          Verified Commercial Websites:
                        </div>

                        <div className="flex flex-wrap gap-2">

                          {verifiedWebsites.map((website, websiteIndex) => {

                            const websiteName =
                              typeof website === 'string'
                                ? website
                                : website?.name || 'Website';

                            const websiteUrl =
                              typeof website === 'string'
                                ? website
                                : website?.url || '#';

                            return (
                              <a
                                key={`${experience?.id || index}-website-${websiteIndex}`}
                                href={websiteUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/40 text-xs font-medium transition-colors"
                              >

                                <span>
                                  {websiteName}
                                </span>

                                <ExternalLink className="w-3 h-3" />

                              </a>
                            );
                          })}

                        </div>

                      </div>
                    )}

                  </div>

                </div>
              );
            })}

          </div>
        ) : (
          /* Empty State */
          <div className="py-12 text-center rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50">

            <Briefcase className="w-8 h-8 mx-auto mb-3 text-slate-400" />

            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              No experience records available.
            </p>

          </div>
        )}

      </div>
    </section>
  );
}