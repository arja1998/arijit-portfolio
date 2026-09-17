import React from 'react';
import { developmentProcess } from '../data/portfolioData';
import {
  MessageSquare,
  Layout,
  Code2,
  CheckCircle,
  Rocket,
  ArrowRight
} from 'lucide-react';

const iconMap = {
  MessageSquare: MessageSquare,
  Layout: Layout,
  Code2: Code2,
  CheckCircle: CheckCircle,
  Rocket: Rocket,
};

export default function Process() {
  return (
    <section id="process" className="py-20 bg-slate-50/50 dark:bg-slate-900/30 border-y border-slate-200/80 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold tracking-wide uppercase mb-3">
            Workflow & Delivery
          </div>
          <h2 className="section-title font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            How I Build & Deliver Your Web Project
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            A transparent, structured 5-step development workflow that guarantees clear communication, reliable milestones, and high-performance production code.
          </p>
        </div>

        {/* 5-Step Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {developmentProcess.map((step, idx) => {
            const IconComponent = iconMap[step.icon] || Rocket;
            return (
              <div
                key={idx}
                className="relative p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-blue-500/40 dark:hover:border-blue-500/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-blue-600/30 dark:text-blue-400/30 font-mono">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900/60 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-100 dark:border-slate-800/80 text-xs font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1">
                  <span>Phase {idx + 1}</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
