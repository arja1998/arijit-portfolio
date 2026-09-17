import React from 'react';
import { services } from '../data/portfolioData';
import {
  Globe,
  Code,
  Server,
  ShoppingCart,
  ShoppingBag,
  CalendarCheck,
  Users,
  RefreshCw,
  Search,
  Layers,
  Building2,
  CheckCircle2,
  ArrowRight,
  MessageSquare
} from 'lucide-react';

const iconMap = {
  Globe: Globe,
  Code: Code,
  Code2: Code,
  Server: Server,
  ShoppingCart: ShoppingCart,
  ShoppingBag: ShoppingBag,
  CalendarCheck: CalendarCheck,
  Users: Users,
  RefreshCw: RefreshCw,
  Search: Search,
  Layers: Layers,
  Building2: Building2,
};

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 bg-slate-50/50 dark:bg-slate-900/40 border-t border-slate-200/80 dark:border-slate-800/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16">

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold tracking-wide uppercase mb-3">
            Services & Solutions
          </div>

          <h2 className="section-title font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Custom Web Development Services for Businesses & Growing Brands
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            From high-converting business websites to complex Laravel web
            applications, database-driven management systems, and SEO
            optimization, here is how I can help your organization succeed
            online.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {Array.isArray(services) &&
            services.map((service) => {

              /* --------------------------------
                 Safe data handling
              --------------------------------- */

              const IconComponent =
                iconMap[service?.icon] || Globe;

              const deliverables = Array.isArray(service?.deliverables)
                ? service.deliverables
                : [];

              /*
               * The current portfolioData.js does not define
               * technologies for services.
               *
               * We therefore use an empty array instead of
               * trying to call .slice() on undefined.
               */
              const technologies = Array.isArray(service?.technologies)
                ? service.technologies
                : [];

              return (
                <div
                  key={service?.id || service?.number || service?.title}
                  className="flex flex-col p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 dark:hover:border-blue-500/40 shadow-sm hover:shadow-lg transition-all duration-200 group"
                >

                  {/* Service Icon & Badge */}
                  <div className="flex items-center justify-between mb-4">

                    <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900/60 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                      Service #{service?.number || ''}
                    </span>

                  </div>

                  {/* Category */}
                  {service?.category && (
                    <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
                      {service.category}
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {service?.title || 'Custom Web Development Service'}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-5 leading-relaxed">
                    {service?.description ||
                      'Professional web development services tailored to business requirements.'}
                  </p>

                  {/* Target Audience */}
                  {service?.targetAudience && (
                    <div className="mb-5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                      <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">
                        Best For
                      </div>

                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        {service.targetAudience}
                      </p>
                    </div>
                  )}

                  {/* Deliverables List */}
                  <div className="space-y-2 mb-6 flex-1">

                    <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
                      What's Included:
                    </div>

                    {deliverables.length > 0 ? (
                      deliverables.map((deliverable, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />

                          <span>
                            {deliverable}
                          </span>
                        </div>
                      ))
                    ) : (
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        Custom deliverables based on your project requirements.
                      </div>
                    )}

                  </div>

                  {/* Bottom Technology List & Inquiry Action */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-3">

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1 min-w-0">

                      {technologies.length > 0 ? (
                        technologies.slice(0, 3).map((technology, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-medium"
                          >
                            {technology}
                          </span>
                        ))
                      ) : (
                        <span className="px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs font-medium">
                          Custom Development
                        </span>
                      )}

                    </div>

                    {/* Inquiry */}
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/60 hover:bg-blue-100 dark:hover:bg-blue-900/60 text-blue-600 dark:text-blue-400 text-xs font-semibold transition-colors shrink-0"
                      title={`Inquire about ${service?.title || 'this service'}`}
                    >
                      <span>Inquire</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>

                  </div>

                </div>
              );
            })}

        </div>

        {/* Bottom Banner for Custom Inquiries */}
        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-transparent border border-blue-500/20 flex flex-col sm:flex-row items-center justify-between gap-6">

          <div>

            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
              Need a custom solution not listed above?
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              I can build tailored full-stack architectures, custom workflows,
              and integrations tailored to your specific requirements.
            </p>

          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold shadow-md shadow-blue-600/25 transition-colors shrink-0"
          >
            <MessageSquare className="w-4 h-4" />

            <span>
              Discuss Your Project
            </span>
          </a>

        </div>

      </div>
    </section>
  );
}