// src/components/skillboard/CareerTable.jsx

import React from 'react';

/**
 * Reusable Career Table Component
 * Displays skill progression data for a specific career stage
 * 
 * @param {Object} stage - Career stage data object containing icon, title, skills, etc.
 */
const CareerTable = ({ stage }) => {
    const Icon = stage.icon;

    return (
        <div className={`${stage.bgColor} p-6 md:p-8 rounded-xl border-l-4 ${stage.borderColor} shadow-md`}>

            {/* Header with Icon and Title */}
            <div className="flex items-center mb-4">
                <Icon className={`w-8 h-8 ${stage.iconColor} mr-3 flex-shrink-0`} />
                <h3 className="text-2xl font-bold text-slate-900">
                    {stage.title}
                </h3>
            </div>

            {/* Description */}
            <p className="text-slate-700 mb-6">
                {stage.description}
            </p>

            {/* Skills Table */}
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">

                    {/* Table Header */}
                    <thead>
                        <tr className={stage.tableBgColor}>
                            <th className="p-3 font-semibold text-slate-800 border-b w-12">#</th>
                            <th className="p-3 font-semibold text-slate-800 border-b">Core Skill</th>
                            <th className="p-3 font-semibold text-slate-800 border-b">Resource Focus</th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody className="text-sm text-slate-700">
                        {stage.skills.map((item, index) => (
                            <tr
                                key={item.number}
                                className={`border-b ${stage.hoverBgColor} transition-colors ${index === stage.skills.length - 1 ? 'border-b-0' : ''
                                    }`}
                            >
                                <td className="p-3 font-medium">{item.number}</td>
                                <td className="p-3">{item.skill}</td>
                                <td className="p-3 text-slate-600">{item.resource}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CareerTable;