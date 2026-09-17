import React from 'react';
import { skillCategories } from '../data/portfolioData';
import {
  Server,
  Layout,
  Search,
  Wrench,
  BookOpen,
  Code2,
  Database,
  Cpu,
  TrendingUp
} from 'lucide-react';

const iconMap = {
  Server: Server,
  Layout: Layout,
  Search: Search,
  Wrench: Wrench,
  BookOpen: BookOpen,
  Database: Database,
  Cpu: Cpu,
  TrendingUp: TrendingUp,
  Code2: Code2,
};

export default function Skills() {
  const categories = Array.isArray(skillCategories)
    ? skillCategories
    : [];

  return (
    <section id="skills" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16">

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold tracking-wide uppercase mb-3">
            Technical Stack & Competencies
          </div>

          <h2 className="section-title font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Categorized Technical Skills & Architecture Capabilities
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Honest, verified technical proficiencies grounded in production
            deployments, structured MVC systems, and rigorous computer science
            academics.
          </p>

        </div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {categories.map((category, categoryIndex) => {

            /*
             * The actual portfolioData.js structure uses:
             *
             * category.category
             * category.icon
             * category.skills
             */
            const IconComponent =
              iconMap[category?.icon] || Code2;

            const skills = Array.isArray(category?.skills)
              ? category.skills
              : [];

            return (
              <div
                key={
                  category?.category ||
                  `skill-category-${categoryIndex}`
                }
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 dark:hover:border-blue-500/40 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
              >

                <div>

                  {/* Card Header */}
                  <div className="flex items-center gap-3 mb-5">

                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900/60 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <div className="min-w-0">

                      <h3 className="text-base font-bold text-slate-900 dark:text-white leading-tight">
                        {category?.category || 'Technical Skills'}
                      </h3>

                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        {skills.length} Core Areas
                      </span>

                    </div>

                  </div>

                  {/* Skills List */}
                  <div className="space-y-3 mb-4">

                    {skills.length > 0 ? (
                      skills.map((skill, skillIndex) => {

                        /*
                         * Each skill is an object:
                         *
                         * {
                         *   name: "...",
                         *   description: "..."
                         * }
                         */

                        const skillName =
                          typeof skill === 'string'
                            ? skill
                            : skill?.name || 'Technical Skill';

                        const skillDescription =
                          typeof skill === 'object'
                            ? skill?.description
                            : null;

                        return (
                          <div
                            key={
                              `${skillName}-${skillIndex}`
                            }
                            className="px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60"
                          >

                            <div className="flex items-start gap-2">

                              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5" />

                              <div className="min-w-0">

                                <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                                  {skillName}
                                </div>

                                {skillDescription && (
                                  <p className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                                    {skillDescription}
                                  </p>
                                )}

                              </div>

                            </div>

                          </div>
                        );
                      })
                    ) : (
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        Skills will be added here.
                      </div>
                    )}

                  </div>

                </div>

                {/* Footer */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 text-xs text-slate-500 dark:text-slate-400">
                  Applied across live production platforms and active
                  engineering repositories.
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}