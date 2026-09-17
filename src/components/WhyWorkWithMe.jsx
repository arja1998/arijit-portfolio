import React from 'react';
import { whyWorkWithMe } from '../data/portfolioData';
import {
  CheckCircle2,
  ShieldCheck,
  Zap,
  Layout,
  Search,
  Gauge,
  GraduationCap,
  MessageCircle,
  Clock,
  HeartHandshake
} from 'lucide-react';

const iconMap = {
  ShieldCheck: ShieldCheck,
  Zap: Zap,
  CheckCircle2: CheckCircle2,
  Layout: Layout,
  Search: Search,
  Gauge: Gauge,
  GraduationCap: GraduationCap,
  MessageCircle: MessageCircle,
  Clock: Clock,
  HeartHandshake: HeartHandshake,
};

export default function WhyWorkWithMe() {
  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold tracking-wide uppercase mb-3">
            Why Choose Me
          </div>
          <h2 className="section-title font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Why Work With Me on Your Next Web Project
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            I bring a unique combination of live commercial delivery experience, rigorous computer science fundamentals, and proactive client communication.
          </p>
        </div>

        {/* 10 Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyWorkWithMe.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || CheckCircle2;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 dark:hover:border-blue-500/40 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900/60 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-105 transition-transform duration-200 shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white leading-tight">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Guaranteed Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
