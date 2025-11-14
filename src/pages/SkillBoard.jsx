// src/pages/SkillBoard.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Briefcase, Lock, ArrowRight, Sparkles } from 'lucide-react';
import { JOB_FOCUS_AREAS, RESOURCE_CATEGORIES } from '@/constants/skillBoardData';
import { CAREER_STAGES } from '@/constants/careerSkills';
import { AI_ROBOTICS_STAGES } from '@/constants/aiRoboticsSkills';
import CareerTable from '@/components/skillboard/CareerTable';

/**
 * Skill Board Page
 * Job aggregation and skill development resources with career-level progression
 * Features traditional pharma skills and AI/Robotics (Pharma 4.0) skills
 */
const SkillBoard = () => {
    return (
        <div className="py-12 md:py-16">
            <div className="container mx-auto px-4">

                {/* Header & Login CTA */}
                <header className="text-center mb-12 md:mb-16 max-w-4xl mx-auto">
                    <Briefcase className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                        Pharma & Healthcare Skill Board
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed font-semibold">
                        Your single access point for high-impact pharma jobs and validated upskilling resources.
                    </p>

                    <Link to="/login" className="mt-8 inline-block">
                        <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-semibold shadow-lg">
                            <Lock className="w-5 h-5 mr-2" />
                            Login to Access Jobs & Resources
                        </Button>
                    </Link>
                </header>

                {/* Job Focus Areas Section */}
                <section className="mt-16">
                    <h2 className="text-3xl font-extrabold text-slate-800 text-center mb-10">
                        Top Job Focus Areas
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {JOB_FOCUS_AREAS.map((area) => (
                            <div
                                key={area.title}
                                className="bg-white p-4 md:p-6 rounded-xl shadow-lg border border-slate-100 text-center hover:shadow-xl transition-shadow duration-300"
                            >
                                <area.icon className="w-8 h-8 text-indigo-500 mx-auto mb-3" />
                                <h3 className="text-xl font-bold text-slate-900 mb-1">{area.title}</h3>
                                <p className="text-sm text-slate-600 font-semibold">{area.count} Jobs</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Traditional Career Level Skills Tables */}
                <section className="mt-20">
                    <h2 className="text-3xl font-extrabold text-slate-800 text-center mb-4">
                        Traditional Career-Level Skills & Resources
                    </h2>
                    <p className="text-center text-lg text-slate-600 max-w-3xl mx-auto mb-12">
                        Core pharmaceutical competencies aligned with your career progression
                    </p>

                    <div className="space-y-8 max-w-6xl mx-auto">
                        {CAREER_STAGES.map((stage) => (
                            <CareerTable key={stage.id} stage={stage} />
                        ))}
                    </div>
                </section>

                {/* AI, Digital, & Robotics (Pharma 4.0) Skills Section */}
                <section className="mt-24 bg-gradient-to-br from-purple-50 to-pink-50 py-16 -mx-4 px-4 md:mx-0 md:px-0 md:rounded-3xl">
                    <div className="max-w-6xl mx-auto">

                        {/* Section Header */}
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                                <Sparkles className="w-8 h-8 text-purple-600" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                                AI, Digital, & Robotics (Pharma 4.0) Skills
                            </h2>
                            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                                Future-ready competencies for the AI-driven pharmaceutical landscape.
                                Resources are updated weekly through AI agents.
                            </p>
                        </div>

                        {/* AI/Robotics Career Tables */}
                        <div className="space-y-8">
                            {AI_ROBOTICS_STAGES.map((stage) => (
                                <CareerTable key={stage.id} stage={stage} />
                            ))}
                        </div>

                    </div>
                </section>

                {/* Skill Development Resources & Upskill CTA */}
                <section className="mt-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start max-w-6xl mx-auto">

                        {/* Exclusive Resources */}
                        <div className="bg-green-50 p-6 md:p-8 rounded-xl border-t-4 border-green-600 shadow-md">
                            <h3 className="text-2xl font-bold text-green-700 mb-4">
                                Exclusive Skill Resources
                            </h3>
                            <ul className="space-y-3 text-slate-700">
                                {RESOURCE_CATEGORIES.map((resource, index) => (
                                    <li key={index} className="flex items-center text-lg font-medium">
                                        <ArrowRight className="w-5 h-5 text-green-600 flex-shrink-0 mr-2" />
                                        {resource}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Upskill CTA */}
                        <div className="p-6 md:p-8 rounded-xl border border-slate-200 bg-white shadow-md flex flex-col justify-between h-full">
                            <h3 className="text-2xl font-bold text-slate-800 mb-4">
                                Upskill to Match Top Jobs
                            </h3>
                            <p className="text-md text-slate-600 mb-6 flex-grow">
                                Our AI analyzes job listings against your profile, recommending precise courses from the
                                Pharma Academy to close your skill gaps instantly.
                            </p>
                            <Link to="/academy">
                                <Button className="w-full bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg">
                                    Find Your Skill Gap
                                </Button>
                            </Link>
                        </div>

                    </div>
                </section>

            </div>
        </div>
    );
};

export default SkillBoard;