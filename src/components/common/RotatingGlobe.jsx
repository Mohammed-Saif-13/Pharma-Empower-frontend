// src/components/common/RotatingGlobe.jsx

import React from 'react';
import { Globe } from 'lucide-react';

/**
 * Rotating Globe Component
 * Displays a continuously rotating globe icon using pure CSS animation
 * Used on the Pharma News page to represent global news coverage
 * 
 * @param {number} size - Icon size in pixels (default: 64)
 * @param {string} className - Additional CSS classes
 */
const RotatingGlobe = ({ size = 64, className = '' }) => {
    return (
        <div className={`inline-block ${className}`}>
            <Globe
                className="text-indigo-600 drop-shadow-lg animate-spin-slow"
                size={size}
                strokeWidth={1.5}
            />
        </div>
    );
};

export default RotatingGlobe;