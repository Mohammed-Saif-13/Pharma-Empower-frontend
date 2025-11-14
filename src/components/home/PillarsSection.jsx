// src/components/home/PillarsSection.jsx

import React from 'react';
import { PILLARS } from '@/constants/homePillars';

/**
 * Pillars Section Component
 * Displays the four core pillars of Pharma Empower Solutions
 * Features DNA-inspired pathway concept with icon-based cards
 */
const PillarsSection = () => {
    return (
        <section className="mt-20 md:mt-28">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
                    Explore Our Unique Innovative Differentiated Pathways
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                    We combine structured education, verified peer intelligence, and executive connectivity.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {PILLARS.map((pillar) => (
                    <div
                        key={pillar.title}
                        className="p-6 rounded-xl border border-slate-200 shadow-xl flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:border-indigo-300 hover:-translate-y-1"
                    >
                        <div className={`p-4 rounded-full mb-4 ${pillar.bgColor} bg-opacity-10`}>
                            <pillar.icon className={`w-8 h-8 ${pillar.iconColor}`} />
                        </div>

                        <h3 className="text-xl font-bold text-slate-900 mb-2">
                            {pillar.title}
                        </h3>
                        <p className="text-sm text-slate-700">
                            {pillar.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PillarsSection;