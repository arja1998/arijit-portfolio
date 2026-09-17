import React, { useEffect } from 'react';
import { personalInfo, selectedProfessionalWork, services } from '../data/portfolioData';

export default function SEOHead() {
  useEffect(() => {
    // 1. Person Schema JSON-LD
    const personSchema = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: personalInfo.name,
      jobTitle: personalInfo.title,
      description: personalInfo.shortBio,
      email: `mailto:${personalInfo.email}`,
      telephone: personalInfo.phone,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Kolkata',
        addressRegion: 'West Bengal',
        addressCountry: 'India'
      },
      alumnusOf: [
        {
          '@type': 'EducationalOrganization',
          name: 'Maulana Abul Kalam Azad University of Technology (MAKAUT)',
          alternateName: 'MAKAUT'
        }
      ],
      sameAs: [
        personalInfo.linkedin,
        personalInfo.github
      ],
      knowsAbout: [
        'Laravel',
        'PHP',
        'MySQL',
        'React.js',
        'JavaScript',
        'RESTful APIs',
        'Database Design',
        'MVC Architecture',
        'Tailwind CSS',
        'SEO Optimization'
      ]
    };

    // 2. ProfessionalService Schema JSON-LD
    const serviceSchema = {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: `${personalInfo.name} - Custom Web Development & Engineering Services`,
      image: `${window.location.origin}/images/arijit-koley.jpg`,
      telePhone: personalInfo.phone,
      email: personalInfo.email,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Kolkata',
        addressRegion: 'West Bengal',
        addressCountry: 'IN'
      },
      priceRange: '₹₹',
      openingHours: 'Mo-Sa 09:00-20:00',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Web Engineering & Custom Development Services',
        itemListElement: services.map((s, idx) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: s.title,
            description: s.description
          }
        }))
      }
    };

    // 3. WebSite Schema
    const websiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: `${personalInfo.name} | Full-Stack & Laravel Web Developer`,
      url: window.location.origin,
      description: 'Official portfolio and custom web development service website of Arijit Koley.',
      author: {
        '@type': 'Person',
        name: personalInfo.name
      }
    };

    const schemas = [personSchema, serviceSchema, websiteSchema];
    const scriptElements = [];

    schemas.forEach((schemaData) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schemaData);
      document.head.appendChild(script);
      scriptElements.push(script);
    });

    return () => {
      scriptElements.forEach((el) => {
        if (el && el.parentNode) {
          el.parentNode.removeChild(el);
        }
      });
    };
  }, []);

  return null;
}
