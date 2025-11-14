// src/components/layouts/MainLayout.jsx

import React from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

/**
 * Main Layout Component
 * Wraps all pages with header and footer
 */
const MainLayout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Header */}
            <Header />

            {/* Main Content */}
            <main className="flex-grow">
                {children}
            </main>

            {/* Footer with Newsletter */}
            <Footer />
        </div>
    );
};

export default MainLayout;