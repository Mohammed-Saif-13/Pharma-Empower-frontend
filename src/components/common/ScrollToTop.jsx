// src/components/common/ScrollToTop.jsx

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop Component
 * Automatically scrolls to top on route change
 * No UI - just functionality
 */
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Scroll to top instantly on route change
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant' // Use 'smooth' for smooth scroll
        });
    }, [pathname]);

    return null;
};

export default ScrollToTop;