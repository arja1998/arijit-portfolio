import React, { useState, useEffect } from 'react';
import SEOHead from './components/SEOHead';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SelectedWork from './components/SelectedWork';
import Services from './components/Services';
import WhatICanBuild from './components/WhatICanBuild';
import TechnicalProjects from './components/TechnicalProjects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import EducationCertifications from './components/EducationCertifications';
import Process from './components/Process';
import WhyWorkWithMe from './components/WhyWorkWithMe';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('theme');
      if (saved === 'dark' || saved === 'light') return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } catch {
      return 'dark';
    }
  });

  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
      root.style.colorScheme = 'light';
    }
    try {
      localStorage.setItem('theme', theme);
    } catch (e) {
      console.warn('Unable to save theme to localStorage', e);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Scroll spy to update active section in navbar
  useEffect(() => {
    const sections = [
      'home',
      'about',
      'services',
      'skills',
      'experience',
      'contact'
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0B0F19] text-slate-900 dark:text-slate-100 tech-grid-bg transition-colors duration-300 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Dynamic SEO & Schema.org JSON-LD */}
      <SEOHead />

      {/* Navigation Header */}
      <Navbar
        activeSection={activeSection}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Content Sections */}
      <main className="flex-1 w-full overflow-x-hidden">
        <Hero />
        <About />
        <SelectedWork />
        <Services />
        <WhatICanBuild />
        <TechnicalProjects />
        <Skills />
        <Experience />
        <EducationCertifications />
        <Process />
        <WhyWorkWithMe />
        <FAQ />
        <FinalCTA />
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
