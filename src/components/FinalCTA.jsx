import React from 'react';
import { personalInfo } from '../data/portfolioData';
import {
  Phone,
  Download,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-16 sm:py-20 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Ambient Gradient Card */}
        <div className="relative rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-slate-900 text-white p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden">

          {/* Decorative Background Circles */}
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-blue-400/20 blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-indigo-400/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold tracking-wide uppercase">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Available for Technical Roles & Custom Web Projects</span>
            </div>

            {/* Title & Subtitle */}
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                Ready to Build Something Exceptional Together?
              </h2>
              <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
                Whether you need a dedicated Laravel full-stack software engineer for your team or a high-converting web platform for your business, let's turn your vision into reliable production code.
              </p>
            </div>

            {/* Value Highlights Pill Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 max-w-3xl mx-auto">
              <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 text-center">
                <div className="text-xl sm:text-2xl font-extrabold text-white">3 Live</div>
                <div className="text-xs text-blue-200">Commercial Client Sites</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 text-center">
                <div className="text-xl sm:text-2xl font-extrabold text-white">10+</div>
                <div className="text-xs text-blue-200">Engineering Repositories</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 text-center">
                <div className="text-xl sm:text-2xl font-extrabold text-white">MCA (78%)</div>
                <div className="text-xs text-blue-200">MAKAUT University</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 text-center">
                <div className="text-xl sm:text-2xl font-extrabold text-white">&lt; 4 Hours</div>
                <div className="text-xs text-blue-200">Average Response Time</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white hover:bg-slate-100 active:bg-slate-200 text-blue-900 font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-200 group"
              >
                <span>Start a Project Conversation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={`tel:${personalInfo.phone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-700/60 hover:bg-blue-700 active:bg-blue-800 border border-white/20 text-white font-bold text-sm sm:text-base transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call {personalInfo.formattedPhone}</span>
              </a>

              <a
                href={personalInfo.cvDownloadPath}
                download={personalInfo.cvFilename}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Sub-text note */}
            <p className="text-xs text-blue-200/90 pt-2">
              Based in Kolkata, India &bull; Available for Remote Full-Time Roles, Contract Engagements, & Freelance Development
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}
