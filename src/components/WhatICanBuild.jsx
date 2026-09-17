import React, { useState } from 'react';
import { whatICanBuild } from '../data/portfolioData';
import {
  Building2,
  Calendar,
  UtensilsCrossed,
  ShoppingBag,
  Clock,
  UserCheck,
  Briefcase,
  User,
  Users,
  Zap,
  LayoutDashboard,
  Layers,
  BookOpen,
  ArrowRight
} from 'lucide-react';

/*
 * Icon map retained for future use if icon names
 * are added to portfolioData.js.
 */
const iconMap = {
  Building2: Building2,
  Calendar: Calendar,
  UtensilsCrossed: UtensilsCrossed,
  ShoppingBag: ShoppingBag,
  Clock: Clock,
  UserCheck: UserCheck,
  Briefcase: Briefcase,
  User: User,
  Zap: Zap,
  LayoutDashboard: LayoutDashboard,
  Layers: Layers,
  BookOpen: BookOpen,
};

export default function WhatICanBuild() {
  const [activeCategory, setActiveCategory] = useState('All');

  /*
   * Safely ensure the data is always an array.
   */
  const buildItems = Array.isArray(whatICanBuild)
    ? whatICanBuild
    : [];

  /*
   * Your portfolioData.js currently has these
   * actual categories:
   *
   * Corporate & Services
   * Online Store
   * Hospitality
   * Hospitality & Events
   * Web Applications
   * Internal Tools
   * Business Operations
   * Human Resources
   * Facility Management
   * Content Management
   * Personal Brand
   * Search Optimization
   *
   * We group them into useful portfolio categories.
   */
  const categories = [
    'All',
    'Websites',
    'Web Applications',
    'Business Systems'
  ];

  /*
   * Category filtering based on the ACTUAL data
   * instead of hard-coded titles that do not exist
   * in portfolioData.js.
   */
  const filteredItems =
    activeCategory === 'All'
      ? buildItems
      : buildItems.filter((item) => {

          const category = String(item?.category || '').toLowerCase();
          const title = String(item?.title || '').toLowerCase();

          if (activeCategory === 'Websites') {
            return (
              category.includes('corporate') ||
              category.includes('hospitality') ||
              category.includes('personal brand') ||
              category.includes('search optimization') ||
              title.includes('website') ||
              title.includes('portfolio')
            );
          }

          if (activeCategory === 'Web Applications') {
            return (
              category.includes('web applications') ||
              category.includes('online store') ||
              title.includes('platform') ||
              title.includes('e-commerce')
            );
          }

          if (activeCategory === 'Business Systems') {
            return (
              category.includes('internal tools') ||
              category.includes('business operations') ||
              category.includes('human resources') ||
              category.includes('facility management') ||
              category.includes('content management') ||
              title.includes('management') ||
              title.includes('crm') ||
              title.includes('employee') ||
              title.includes('visitor')
            );
          }

          return true;
        });

  return (
    <section
      id="what-i-build"
      className="py-20 bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-12">

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold tracking-wide uppercase mb-3">
            Solutions Matrix
          </div>

          <h2 className="section-title font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            What I Can Build For Your Business
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Whether you need a high-converting digital storefront, a dedicated
            booking portal, or an internal operational system to automate daily
            operations, here are the exact digital products I engineer.
          </p>

        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-10">

          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/30'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              {category}
            </button>
          ))}

        </div>

        {/* Grid of Solution Types */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">

            {filteredItems.map((item, index) => {

              /*
               * The current data does not contain an icon.
               * Use a rotating fallback icon so the cards
               * still have visual variety.
               */
              const fallbackIcons = [
                Building2,
                ShoppingBag,
                Calendar,
                Layers,
                LayoutDashboard,
                Users,
                Briefcase,
                BookOpen
              ];

              const IconComponent =
                iconMap[item?.icon] ||
                fallbackIcons[index % fallbackIcons.length];

              return (
                <div
                  key={`${item?.title || 'solution'}-${index}`}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 dark:hover:border-blue-500/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
                >

                  <div>

                    {/* Icon */}
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    {/* Category */}
                    {item?.category && (
                      <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1.5">
                        {item.category}
                      </div>
                    )}

                    {/* Title */}
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {item?.title || 'Custom Digital Solution'}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                      {item?.description ||
                        'A custom-built digital solution designed around your business requirements.'}
                    </p>

                  </div>

                  {/* Bottom Action */}
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2">

                    <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase">
                      Custom Built
                    </span>

                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/60 hover:bg-blue-100 dark:hover:bg-blue-900/60 text-blue-600 dark:text-blue-400 text-xs font-semibold transition-colors shrink-0"
                    >
                      <span>Request Build</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>

                  </div>

                </div>
              );
            })}

          </div>
        ) : (
          /* Empty State */
          <div className="py-12 text-center rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50">

            <Layers className="w-8 h-8 mx-auto mb-3 text-slate-400" />

            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              No solutions found in this category.
            </p>

            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Try selecting another category.
            </p>

          </div>
        )}

      </div>
    </section>
  );
}