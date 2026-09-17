import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import {
  Mail,
  Phone,
  MapPin,
  Download,
  Send,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  Clock,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Custom Business Website',
    budget: 'Standard Scope',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errors, setErrors] = useState({});

  const inquiryTypes = [
    'Custom Business Website',
    'Laravel Web Application',
    'Full-Time / Engineering Role',
    'E-Commerce Store',
    'Booking & Reservation System',
    'Mini CRM / Management Portal',
    'Website Redesign & Maintenance',
    'SEO & Speed Optimization',
    'Other Inquiries'
  ];

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide brief details about your project or inquiry.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Please write at least 10 characters so I can understand your requirements.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setFormStatus('submitting');

    try {
      const body = new URLSearchParams({
        'form-name': 'contact',
        ...formData,
      });

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });

      if (response.ok) {
        setFormStatus('success');
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      inquiryType: 'Custom Business Website',
      budget: 'Standard Scope',
      message: '',
    });
    setFormStatus('idle');
    setErrors({});
  };

  return (
    <section id="contact" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold tracking-wide uppercase mb-3">
            Get In Touch
          </div>
          <h2 className="section-title font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Let's Discuss Your Next Web Project or Career Opportunity
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Whether you are a recruiter looking for a disciplined Full-Stack / Laravel engineer or a business owner looking for a custom web platform, I'd love to connect.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Direct Contact Details & Links */}
          <div className="lg:col-span-5 space-y-6">

            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Direct Contact Channels
              </h3>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 block mb-0.5">Email Address</span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              {/* Phone / Call */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-900/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 block mb-0.5">Direct Phone / Call</span>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {personalInfo.formattedPhone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-900/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 block mb-0.5">Current Location</span>
                  <span className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white">
                    {personalInfo.location}
                  </span>
                </div>
              </div>

              {/* Availability Notice */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Prompt Turnaround:</strong> Typically replying within a few hours for project consultations, technical interviews, or freelance inquiries.
                </span>
              </div>

              {/* Professional Links */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-col gap-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 hover:bg-blue-50 dark:hover:bg-blue-950/40 border border-slate-200/60 dark:border-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-blue-600" />
                    <span>Connect on LinkedIn</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/60 dark:border-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-slate-900 dark:text-white" />
                    <span>Explore Code on GitHub</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href={personalInfo.cvDownloadPath}
                  download={personalInfo.cvFilename}
                  className="flex items-center justify-between p-3 rounded-xl bg-blue-600/10 hover:bg-blue-600/20 border border-blue-500/20 text-xs font-semibold text-blue-700 dark:text-blue-300 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Download className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span>Download CV (March 2026 PDF)</span>
                  </div>
                  <span className="text-xs uppercase font-bold text-blue-600 dark:text-blue-400">PDF</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">

              {formStatus === 'success' ? (
                <div className="text-center py-10 space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Thank You for Reaching Out!
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                    Your inquiry has been recorded. I review all project proposals and recruiter messages promptly and will get back to you at <strong>{formData.email}</strong> shortly.
                  </p>
                  <div className="pt-6">
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : formStatus === 'error' ? (
                <div className="text-center py-10 space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-red-500/10 text-red-600 dark:text-red-400 flex items-center justify-center mx-auto mb-4">
                    <AlertCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Something Went Wrong
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                    Your message could not be sent. Please try again or email me directly at <strong>{personalInfo.email}</strong>.
                  </p>
                  <div className="pt-6">
                    <button
                      onClick={() => setFormStatus('idle')}
                      className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold transition-colors"
                    >
                      Try Again
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden">
                    <label>
                      Don't fill this out: <input name="bot-field" />
                    </label>
                  </p>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    Send a Project Inquiry or Message
                  </h3>

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g., Rajesh Sharma"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border ${
                          errors.name ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'
                        } text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      />
                      {errors.name && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g., contact@business.com"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border ${
                          errors.email ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'
                        } text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Phone & Inquiry Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Phone / WhatsApp (Optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="inquiryType" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Project / Inquiry Type
                      </label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        {inquiryTypes.map((type, idx) => (
                          <option key={idx} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message Details */}
                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <label htmlFor="message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Project Overview or Requirements *
                      </label>
                      <span className="text-xs text-slate-400">
                        {formData.message.length} characters
                      </span>
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project goals, timelines, desired features, or role requirements..."
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border ${
                        errors.message ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'
                      } text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit CTA Button */}
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 transition-all duration-200 disabled:opacity-50"
                  >
                    {formStatus === 'submitting' ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Project Inquiry</span>
                      </>
                    )}
                  </button>

                  <p className="text-xs text-center text-slate-500 dark:text-slate-400 pt-1">
                    Your details are confidential and will only be used to respond to your project request.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
