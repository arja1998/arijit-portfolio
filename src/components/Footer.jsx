import React from 'react';
import { personalInfo, selectedProfessionalWork } from '../data/portfolioData';
import {
  Code2,
  Mail,
  Phone,
  MapPin,
  Download,
  ArrowUp,
  ExternalLink
} from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { label: 'Selected Work', href: '#work' },
    { label: 'Technical Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'What I Build', href: '#what-i-build' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Process', href: '#process' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  /*
   * Safely handle portfolio data.
   */
  const clientSites = Array.isArray(selectedProfessionalWork)
    ? selectedProfessionalWork
    : [];

  const name = personalInfo?.name || 'Arijit Koley';
  const location = personalInfo?.location || '';
  const status = personalInfo?.status || '';
  const email = personalInfo?.email || '';
  const phone = personalInfo?.phone || '';
  const formattedPhone =
    personalInfo?.formattedPhone || phone || '';
  const linkedin = personalInfo?.linkedin || '#';
  const github = personalInfo?.github || '#';
  const cvDownloadPath =
    personalInfo?.cvDownloadPath || '#';
  const cvFilename =
    personalInfo?.cvFilename || 'Arijit-Koley-CV.pdf';

  /*
   * Safely format a website URL for display.
   *
   * Example:
   * https://example.com/
   * becomes:
   * example.com
   */
  const formatUrl = (url) => {
    if (!url || typeof url !== 'string') {
      return '';
    }

    return url
      .replace(/^https?:\/\//, '')
      .replace(/\/$/, '');
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">

          {/* Column 1: Brand Summary */}
          <div className="lg:col-span-4 space-y-4">

            <a
              href="#"
              className="flex items-center gap-2 text-white font-bold text-lg group"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:bg-blue-500 transition-colors">
                <Code2 className="w-4 h-4" />
              </div>

              <span>
                {name}
              </span>
            </a>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pr-4">
              Full-Stack & Laravel Web Developer specializing in
              high-performance web applications, relational database
              design, REST APIs, and bespoke business websites that
              convert.
            </p>

            {/* Location & Status */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-slate-400">

              {location && (
                <>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-blue-400" />

                    {location}
                  </span>

                  {status && (
                    <span>
                      &bull;
                    </span>
                  )}
                </>
              )}

              {status && (
                <span className="flex items-center gap-1 text-emerald-400 font-medium">

                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />

                  {status}

                </span>
              )}

            </div>

          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">

            <h4 className="text-sm font-bold text-slate-200 mb-4">
              Quick Navigation
            </h4>

            <ul className="grid grid-cols-2 gap-2 text-xs">

              {navLinks.map((link) => (
                <li key={link.href}>

                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-blue-400 transition-colors inline-block py-1"
                  >
                    {link.label}
                  </a>

                </li>
              ))}

            </ul>

          </div>

          {/* Column 3: Live Commercial Client Sites */}
          <div className="lg:col-span-3 space-y-3">

            <h4 className="text-sm font-bold text-slate-200 mb-4">
              Live Client Platforms
            </h4>

            <div className="space-y-2.5 text-xs">

              {clientSites.length > 0 ? (
                clientSites.map((site, index) => {

                  /*
                   * Some portfolio entries may not contain
                   * liveUrl. Handle that safely.
                   */
                  const liveUrl =
                    typeof site?.liveUrl === 'string'
                      ? site.liveUrl
                      : '';

                  const displayUrl = formatUrl(liveUrl);

                  const title =
                    site?.title ||
                    site?.name ||
                    'Commercial Website';

                  /*
                   * Don't create a broken external link when
                   * there is no URL.
                   */
                  if (!liveUrl) {
                    return (
                      <div
                        key={
                          site?.id ||
                          `${title}-${index}`
                        }
                        className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-between"
                      >
                        <div className="min-w-0">

                          <div className="font-semibold text-slate-200 truncate">
                            {title}
                          </div>

                          <div className="text-xs text-slate-500">
                            Live URL unavailable
                          </div>

                        </div>

                      </div>
                    );
                  }

                  return (
                    <a
                      key={
                        site?.id ||
                        `${title}-${index}`
                      }
                      href={liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 hover:border-blue-500/50 flex items-center justify-between group transition-all"
                    >

                      <div className="min-w-0">

                        <div className="font-semibold text-slate-200 group-hover:text-blue-400 transition-colors truncate">
                          {title}
                        </div>

                        {displayUrl && (
                          <div className="text-xs text-slate-400 truncate max-w-[170px]">
                            {displayUrl}
                          </div>
                        )}

                      </div>

                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-400 transition-colors shrink-0" />

                    </a>
                  );
                })
              ) : (
                <div className="text-xs text-slate-500">
                  No live client platforms available.
                </div>
              )}

            </div>

          </div>

          {/* Column 4: Direct Connect & CV */}
          <div className="lg:col-span-2 space-y-3">

            <h4 className="text-sm font-bold text-slate-200 mb-4">
              Direct Channels
            </h4>

            <div className="space-y-2 text-xs">

              {/* Email */}
              {email && (
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors py-1"
                >
                  <Mail className="w-3.5 h-3.5 text-blue-400" />

                  <span className="truncate">
                    {email}
                  </span>
                </a>
              )}

              {/* Phone */}
              {phone && (
                <a
                  href={`tel:${phone}`}
                  className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors py-1"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />

                  <span>
                    {formattedPhone}
                  </span>
                </a>
              )}

              {/* LinkedIn */}
              {linkedin !== '#' && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors py-1"
                >
                  <Linkedin className="w-3.5 h-3.5 text-blue-500" />

                  <span>
                    LinkedIn
                  </span>
                </a>
              )}

              {/* GitHub */}
              {github !== '#' && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors py-1"
                >
                  <Github className="w-3.5 h-3.5 text-slate-200" />

                  <span>
                    GitHub
                  </span>
                </a>
              )}

              {/* CV */}
              {cvDownloadPath !== '#' && (
                <a
                  href={cvDownloadPath}
                  download={cvFilename}
                  className="inline-flex items-center gap-2 mt-2 px-3 py-1.5 rounded-lg bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 border border-blue-500/30 font-semibold transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />

                  <span>
                    CV (PDF)
                  </span>
                </a>
              )}

            </div>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">

          <div>
            &copy; {new Date().getFullYear()} {name}.
            All verified portfolio rights reserved.
          </div>

          <div className="flex items-center gap-4">

            <span className="hidden sm:inline text-xs text-slate-500">
              Built with React 19, Vite, Tailwind CSS & Lucide Icons
            </span>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
              aria-label="Back to top"
            >
              <span className="text-xs font-semibold">
                Back to Top
              </span>

              <ArrowUp className="w-3.5 h-3.5" />
            </button>

          </div>

        </div>

      </div>
    </footer>
  );
}