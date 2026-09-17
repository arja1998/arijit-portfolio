import React from 'react';
import { personalInfo, credibilityHighlights } from '../data/portfolioData';
import {
  Download,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Building2
} from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/15 via-indigo-600/10 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">

            {/* Availability & Role Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 dark:bg-blue-500/15 border border-blue-500/20 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-semibold mb-6 animate-in fade-in slide-in-from-top-2 duration-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
              <span>Available for Full-Stack Roles & Custom Web Projects</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-title font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
              Building Scalable <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-blue-400 dark:via-indigo-400 dark:to-cyan-400">Laravel Web Applications</span> & Modern Business Websites
            </h1>

            {/* Sub-headline / Value statement */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mb-8">
              Full-Stack Developer with real-world production experience developing, deploying, and maintaining live commercial web platforms for hospitality and banquet businesses, alongside robust Laravel MVC architectures, secure APIs, and responsive digital products.
            </p>

            {/* Primary Action Buttons */}
            <div className="w-full sm:w-auto flex flex-wrap items-center gap-3.5 mb-10">
              <a
                href="#work"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-sm font-semibold shadow-lg shadow-blue-600/25 hover:shadow-blue-600/35 transition-all duration-200"
              >
                <span>View Live Commercial Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900/60 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm font-semibold transition-all duration-200"
              >
                <span>Explore Services</span>
              </a>

              <a
                href={personalInfo.cvDownloadPath}
                download={personalInfo.cvFilename}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 text-slate-700 dark:text-slate-300 text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                title="Download Official CV (PDF)"
              >
                <Download className="w-4 h-4 text-blue-500" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Core Trust Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-4 pt-6 border-t border-slate-200 dark:border-slate-800/80 w-full">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Active Commercial Sites</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Laravel MVC & REST APIs</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>MCA Post-Graduate (78%)</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Impact Visual Photo Showcase */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px]">

              {/* Outer decorative gradient border */}
              <div className="relative p-2 rounded-3xl bg-gradient-to-b from-blue-500/20 via-slate-700/20 to-indigo-500/20 dark:from-blue-500/30 dark:via-slate-800/50 dark:to-indigo-500/30 shadow-2xl backdrop-blur-sm">

                {/* Photo Container */}
                <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 aspect-[4/5] group">
                  <img
                    src={personalInfo.profilePhoto}
                    alt="Arijit Koley - Laravel and Full-Stack Developer"
                    className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                    loading="eager"
                  />

                  {/* Bottom Vignette Overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent flex flex-col justify-end p-4">
                    <div className="flex items-center justify-between text-white">
                      <div>
                        <div className="font-bold text-sm sm:text-base">Arijit Koley</div>
                        <div className="text-xs text-slate-300 font-medium flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-red-400" />
                          Kolkata, West Bengal, India
                        </div>
                      </div>
                      <div className="px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-semibold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        Active
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Badge 1: Top Right Tech Stack */}
                <div className="absolute -top-4 -right-4 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 text-red-600 dark:text-red-400 flex items-center justify-center font-bold text-xs">
                    L
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white">Laravel & PHP</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">MVC Architecture</div>
                  </div>
                </div>

                {/* Floating Badge 2: Bottom Left Current Role */}
                <div className="absolute -bottom-5 -left-4 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl flex items-center gap-2.5 max-w-[240px]">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white leading-tight">Pradhan Banquet Group</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Web & Digital Development</div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Credibility Highlights Strip */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800/80">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {credibilityHighlights.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 hover:border-blue-500/40 dark:hover:border-blue-500/40 transition-all duration-200 shadow-sm"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-blue-400 mb-1">
                  {item.number}
                </div>
                <div className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                  {item.label}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
