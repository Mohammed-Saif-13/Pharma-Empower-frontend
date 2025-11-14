// src/pages/PharmaAcademy.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ACADEMY_STAGES } from '@/constants/academyStages';
import { Award, Lock } from 'lucide-react';

/**
 * Pharma Academy Page
 * Outlines the three progressive career certification stages
 * Features foundational, core, and strategic leadership training paths
 */
const PharmaAcademy = () => {
    return (
        <div className="py-12 md:py-16">
            <div className="container mx-auto px-4">

                {/* Header & CTA */}
                <header className="text-center mb-12 md:mb-16 max-w-4xl mx-auto">
                    <Award className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                        Pharma Academy: Certification That Translates to Career Advancement
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed font-semibold">
                        Unlock validated expertise in GxP, AI, Regulatory Strategy, and Pharma 4.0.
                    </p>

                    <Link to="/login" className="mt-8 inline-block">
                        <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-semibold shadow-lg">
                            <Lock className="w-5 h-5 mr-2" />
                            Login to Enroll / Access Courses
                        </Button>
                    </Link>
                </header>

                {/* 3 Progressive Stages Grid */}
                <section className="mt-16">
                    <h2 className="text-3xl font-extrabold text-slate-800 text-center mb-10">
                        Our Progressive Career Stages
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {ACADEMY_STAGES.map((stage) => (
                            <div
                                key={stage.title}
                                className={`bg-white p-6 rounded-xl shadow-2xl transition-all duration-300 border-t-8 ${stage.color} flex flex-col hover:shadow-xl hover:-translate-y-1`}
                            >
                                <div className="flex items-center mb-4">
                                    <stage.icon className={`w-8 h-8 ${stage.color.replace('border', 'text')} mr-3`} />
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900">{stage.title}</h3>
                                        <p className="text-sm font-medium text-slate-500">{stage.subtitle}</p>
                                    </div>
                                </div>

                                <p className="text-slate-700 mb-4 flex-grow">{stage.description}</p>

                                <h4 className="text-lg font-semibold text-slate-800 mt-2 border-t pt-3">
                                    Key Focus Areas:
                                </h4>
                                <ul className="space-y-2 mt-2 text-sm text-slate-600">
                                    {stage.details.map((detail, i) => (
                                        <li key={i} className="flex items-center">
                                            <span className="text-indigo-500 mr-2">•</span>
                                            <span>{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Certification Details CTA */}
                <div className="text-center mt-16 p-8 bg-slate-50 rounded-xl border border-slate-200">
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">
                        Structured Learning. Global Certification.
                    </h3>
                    <p className="text-md text-slate-600 max-w-3xl mx-auto mb-6">
                        All courses are designed and validated by industry veterans, ensuring the skills you gain
                        are immediately applicable in the competitive global market.
                    </p>
                    <Link to="/login">
                        <Button
                            size="md"
                            className="bg-indigo-700 text-white hover:bg-indigo-800 shadow-md"
                        >
                            View Course Catalog
                        </Button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default PharmaAcademy;