import React from 'react';
import {
  Server,
  GraduationCap,
  Briefcase,
  ShieldCheck,
  Zap,
  Layout
} from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-50/50 dark:bg-slate-900/30 border-y border-slate-200/80 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold tracking-wide uppercase mb-3">
            About Me
          </div>
          <h2 className="section-title font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Full-Stack Developer Focused on Reliable Code & Real Business Impact
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            I build robust, production-grade web applications and commercial websites with clean architecture, responsive frontends, and maintainable backend systems.
          </p>
        </div>

        {/* Main 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6 text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            <p>
              Hi, I'm <strong className="text-slate-900 dark:text-white font-semibold">Arijit Koley</strong>, a Kolkata-based Full-Stack Developer specializing in <strong className="text-blue-600 dark:text-blue-400 font-semibold">Laravel, PHP, MySQL, and modern frontend technologies</strong>.
            </p>

            <p>
              My professional journey combines a rigorous computer science foundation—graduating with an <strong className="text-slate-900 dark:text-white">MCA (78%) from Techno Main Salt Lake</strong> and <strong className="text-slate-900 dark:text-white">BCA (94.5%) from Kingston Educational Institute</strong>—with continuous, hands-on commercial experience building and managing real-world websites.
            </p>

            <p>
              Currently, I work directly with <strong className="text-slate-900 dark:text-white">Pradhan Banquet Group</strong>, where I developed, deployed, and currently maintain three live commercial hospitality platforms: <a href="https://thebirdseye.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">The Bird's Eye</a>, <a href="https://mayerbari.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">Mayer Bari</a>, and <a href="https://sarabala.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">Sarabala</a>. This work includes full-cycle website development, mobile responsiveness, fast load speeds, SEO optimization, inquiry flow integration, and continuous maintenance.
            </p>

            <p>
              Beyond commercial websites, I have engineered multiple end-to-end full-stack systems with Laravel including an <strong className="text-slate-900 dark:text-white">E-Commerce Application</strong>, <strong className="text-slate-900 dark:text-white">Restaurant Table Booking System</strong>, <strong className="text-slate-900 dark:text-white">Employee Management System (EMS)</strong>, and <strong className="text-slate-900 dark:text-white">Mini CRM</strong>. My engineering emphasizes secure authentication, role-based access control (RBAC), clean database schemas, and structured MVC architecture.
            </p>

            {/* Core Values Checklist */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-800 dark:text-slate-200">
                <ShieldCheck className="w-4 h-4 text-blue-500 shrink-0" />
                <span>Clean, maintainable code</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-800 dark:text-slate-200">
                <Zap className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Performance & SEO optimization</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-800 dark:text-slate-200">
                <Layout className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Pixel-perfect mobile responsiveness</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-800 dark:text-slate-200">
                <Server className="w-4 h-4 text-indigo-500 shrink-0" />
                <span>Secure Laravel backend architecture</span>
              </div>
            </div>
          </div>

          {/* Right Column: Key Details & Fast Facts Cards */}
          <div className="lg:col-span-5 space-y-4">

            {/* Quick Profile Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4">
                Professional Snapshot
              </h3>

              <dl className="divide-y divide-slate-100 dark:divide-slate-800/80 text-sm">
                <div className="py-2.5 flex justify-between items-start gap-4">
                  <dt className="text-slate-500 dark:text-slate-400 shrink-0">Current Role</dt>
                  <dd className="font-semibold text-slate-900 dark:text-white text-right">Web Development, Pradhan Banquet Group</dd>
                </div>
                <div className="py-2.5 flex justify-between items-start gap-4">
                  <dt className="text-slate-500 dark:text-slate-400 shrink-0">Core Stack</dt>
                  <dd className="font-semibold text-slate-900 dark:text-white text-right">Laravel, PHP, MySQL, Bootstrap, JS</dd>
                </div>
                <div className="py-2.5 flex justify-between items-start gap-4">
                  <dt className="text-slate-500 dark:text-slate-400 shrink-0">Higher Education</dt>
                  <dd className="font-semibold text-slate-900 dark:text-white text-right">MCA (78%) • Techno Main Salt Lake</dd>
                </div>
                <div className="py-2.5 flex justify-between items-start gap-4">
                  <dt className="text-slate-500 dark:text-slate-400 shrink-0">Undergraduate</dt>
                  <dd className="font-semibold text-slate-900 dark:text-white text-right">BCA (94.5%) • Kingston Educational Inst.</dd>
                </div>
                <div className="py-2.5 flex justify-between items-start gap-4">
                  <dt className="text-slate-500 dark:text-slate-400 shrink-0">Location</dt>
                  <dd className="font-semibold text-slate-900 dark:text-white text-right">Kolkata, India</dd>
                </div>
                <div className="py-2.5 flex justify-between items-start gap-4">
                  <dt className="text-slate-500 dark:text-slate-400 shrink-0">Available For</dt>
                  <dd className="font-semibold text-emerald-600 dark:text-emerald-400 text-right">Full-Time Roles & Client Projects</dd>
                </div>
              </dl>
            </div>

            {/* Two Mini Highlight Boxes */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-blue-600/5 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/50">
                <div className="w-8 h-8 rounded-xl bg-blue-600/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div className="text-xl font-bold text-slate-900 dark:text-white">Commercial</div>
                <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  Active live platforms serving real customer inquiries daily.
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-indigo-600/5 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900/50">
                <div className="w-8 h-8 rounded-xl bg-indigo-600/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-3">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div className="text-xl font-bold text-slate-900 dark:text-white">Academic</div>
                <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  Strong CS fundamentals: OOP, DBMS, OS & Data Structures.
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
