// src/components/news/NewsPagination.jsx

import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Reusable Pagination Component
 * Handles page navigation with smart page number display
 */
export const NewsPagination = ({
    currentPage,
    totalPages,
    articlesPerPage,
    setArticlesPerPage,
    totalArticles,
    onPageChange
}) => {

    const getVisiblePages = () => {
        const delta = 2;
        const range = [];
        const rangeWithDots = [];

        for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
            range.push(i);
        }

        if (currentPage - delta > 2) {
            rangeWithDots.push(1, '...');
        } else {
            rangeWithDots.push(1);
        }

        rangeWithDots.push(...range);

        if (currentPage + delta < totalPages - 1) {
            rangeWithDots.push('...', totalPages);
        } else if (totalPages > 1) {
            rangeWithDots.push(totalPages);
        }

        return rangeWithDots;
    };

    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;

    return (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
            <div className="text-sm text-gray-600">
                Showing {indexOfFirstArticle + 1} to {Math.min(indexOfLastArticle, totalArticles)} of {totalArticles} articles
            </div>

            <div className="flex items-center gap-2">
                {/* Previous Button */}
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`p-2 rounded-lg border ${currentPage === 1
                            ? 'bg-gray-100 text-gray-400 border-gray-300 cursor-not-allowed'
                            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                        }`}
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Page Numbers */}
                <div className="flex gap-1">
                    {getVisiblePages().map((page, index) => (
                        <button
                            key={index}
                            onClick={() => typeof page === 'number' && onPageChange(page)}
                            className={`min-w-[40px] h-10 rounded-lg border flex items-center justify-center text-sm font-medium ${currentPage === page
                                    ? 'bg-indigo-500 text-white border-indigo-500'
                                    : page === '...'
                                        ? 'bg-white text-gray-500 border-gray-300 cursor-default'
                                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                                }`}
                            disabled={page === '...'}
                        >
                            {page}
                        </button>
                    ))}
                </div>

                {/* Next Button */}
                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`p-2 rounded-lg border ${currentPage === totalPages
                            ? 'bg-gray-100 text-gray-400 border-gray-300 cursor-not-allowed'
                            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                        }`}
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>

            {/* Articles Per Page Selector */}
            <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-600">Show:</span>
                <select
                    value={articlesPerPage}
                    onChange={(e) => setArticlesPerPage(Number(e.target.value))}
                    className="border border-gray-300 rounded-lg px-2 py-1 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                    <option value={6}>6</option>
                    <option value={9}>9</option>
                    <option value={12}>12</option>
                    <option value={18}>18</option>
                </select>
                <span className="text-gray-600">per page</span>
            </div>
        </div>
    );
};