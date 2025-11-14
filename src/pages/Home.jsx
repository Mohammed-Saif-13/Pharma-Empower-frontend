// src/pages/Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PillarsSection from '@/components/home/PillarsSection';

/**
 * Home Page Component
 * Main landing page with pharma-themed background and value proposition
 * Features hero section, upskilling CTA, and four core pillars
 */
const Home = () => {
    return (
        <div className="relative">

            {/* Background Pattern Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-blue-50 -z-10"></div>

            {/* Scientific Pattern (SVG) */}
            <div className="absolute inset-0 -z-10 opacity-30">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="pharma-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                            <circle cx="20" cy="20" r="1.5" fill="#4F46E5" opacity="0.4" />
                            <circle cx="0" cy="0" r="1.5" fill="#4F46E5" opacity="0.4" />
                            <circle cx="40" cy="0" r="1.5" fill="#4F46E5" opacity="0.4" />
                            <circle cx="0" cy="40" r="1.5" fill="#4F46E5" opacity="0.4" />
                            <circle cx="40" cy="40" r="1.5" fill="#4F46E5" opacity="0.4" />
                        </pattern>
                        <pattern id="hexagon-pattern" x="0" y="0" width="50" height="43.4" patternUnits="userSpaceOnUse">
                            <path d="M25 0 L50 12.5 L50 37.5 L25 50 L0 37.5 L0 12.5 Z" fill="none" stroke="#6366F1" strokeWidth="0.5" opacity="0.3" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#pharma-grid)" />
                </svg>
            </div>

            {/* Floating Elements (DNA-inspired decoration) */}
            <div className="absolute top-20 right-10 w-32 h-32 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-40 left-20 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-20 right-40 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

            {/* Main Content */}
            <div className="relative py-12 md:py-20">
                <div className="container mx-auto px-4 text-center">

                    {/* Hero Section */}
                    <header className="mb-12 md:mb-16 max-w-5xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-4 tracking-tighter">
                            <span className="text-xl md:text-2xl font-semibold block text-indigo-600 mb-2">
                                Pharma Empower Solutions (PES)
                            </span>
                            <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                                Empowering People lives.....
                            </span>
                        </h1>

                        <p className="text-xl text-slate-600 leading-relaxed font-medium mt-6">
                            Pharma Empower Solutions (PES) offers wide range of solutions for pharmaceutical,
                            biotechnology and allied life science areas with an aim of nurturing professionals
                            to became leader in challenging global environment.
                        </p>
                        <p className="text-xl text-slate-600 leading-relaxed font-medium mt-2">
                            Our custom solutions for your business needs enable you to emerge as competent
                            leader in highly changing global environment.
                        </p>

                        {/* Hero CTA */}
                        <div className="mt-8">
                            <Link to="/academy">
                                <Button
                                    size="lg"
                                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-lg transition-all hover:shadow-xl"
                                >
                                    Explore Pharma Academy
                                </Button>
                            </Link>
                        </div>
                    </header>

                    {/* Upskill Section */}
                    <section className="mt-16 bg-green-50 p-10 rounded-xl shadow-inner max-w-4xl mx-auto border border-green-200 backdrop-blur-sm bg-opacity-90">
                        <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
                            Upscale Your Pharma Career. Stay Ahead of the Curve.
                        </h2>
                        <p className="text-lg text-slate-700 mb-6">
                            The pharmaceutical landscape is evolving at unprecedented speed. To lead in this
                            industry—from R&D and QA/QC to Regulatory and Commercial—requires more than experience.
                            It demands continuous, targeted upskilling.
                        </p>
                        <Link to="/academy">
                            <Button className="bg-green-600 hover:bg-green-700 text-white transition-all">
                                Explore Pharma Academy
                            </Button>
                        </Link>
                    </section>

                    {/* Pillars Section */}
                    <PillarsSection />

                </div>
            </div>
        </div>
    );
};

export default Home;