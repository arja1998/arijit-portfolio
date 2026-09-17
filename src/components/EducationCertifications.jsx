import React from 'react';
import { educationHistory, certifications } from '../data/portfolioData';
import {
  GraduationCap,
  Award,
  Calendar,
  CheckCircle2,
  Building
} from 'lucide-react';

export default function EducationCertifications() {
  return (
    <section id="education" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold tracking-wide uppercase mb-3">
            Academic & Credentials
          </div>
          <h2 className="section-title font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Education & Professional Certifications
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Rigorous formal training in computer science, software engineering, relational database management systems, and web application architecture.
          </p>
        </div>

        {/* 2-Column Layout for Education & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left: Formal Education */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-blue-500" />
              <span>Formal Computer Science Education</span>
            </h3>

            {educationHistory.map((edu, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-blue-500/40 dark:hover:border-blue-500/40 transition-all duration-150"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    {edu.degree}
                  </h4>
                  <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-xs self-start sm:self-auto">
                    {edu.score}
                  </span>
                </div>

                <div className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 mb-1">
                  {edu.institution}
                </div>

                <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Building className="w-3.5 h-3.5" />
                    {edu.boardOrUniversity}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.period}
                  </span>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Certifications & Competencies */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-500" />
              <span>Verified Certifications</span>
            </h3>

            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-amber-500/40 dark:hover:border-amber-500/40 transition-all duration-150"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                      {cert.title}
                    </h4>
                    <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-1">
                      {cert.issuer}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {cert.period}
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Academic Highlights Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-600/10 via-indigo-600/5 to-transparent border border-blue-500/20">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                Core Theoretical Competencies
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                Comprehensive academic training in Database Management Systems (DBMS), Relational Schema Normalization, Object-Oriented Software Design (OOP), Computer Networks, and Data Structures.
              </p>
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>Verified by MAKAUT (West Bengal)</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
