// src/components/news/NewsFilters.jsx

import React from 'react';
import { Search, Filter, RefreshCw, X, Clock, Newspaper } from 'lucide-react';

/**
 * Reusable News Filters Component
 * Handles search, source filtering, date range, and sorting
 */
export const NewsFilters = ({
    searchQuery,
    setSearchQuery,
    sources,
    selectedSources,
    setSelectedSources,
    dateRange,
    setDateRange,
    sortBy,
    setSortBy,
    showFilters,
    setShowFilters,
    autoRefresh,
    setAutoRefresh,
    onRefresh,
    articlesCount,
    currentPage,
    totalPages,
    lastUpdated
}) => {

    const toggleSource = (source) => {
        setSelectedSources(prev =>
            prev.includes(source)
                ? prev.filter(s => s !== source)
                : [...prev, source]
        );
    };

    const clearAllFilters = () => {
        setSelectedSources([]);
        setDateRange('all');
        setSortBy('newest');
        setSearchQuery('');
    };

    const hasActiveFilters = selectedSources.length > 0 || dateRange !== 'all' || sortBy !== 'newest';

    return (
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg mb-8 border border-gray-200">
            {/* Main Controls */}
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                {/* Search */}
                <div className="flex-1 w-full">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search pharmaceutical news..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-base"
                        />
                    </div>
                </div>

                {/* Control Buttons */}
                <div className="flex items-center gap-3 w-full lg:w-auto">
                    <button
                        onClick={() => setShowFilters(!showFilters)}
                        className={`flex items-center gap-2 px-4 py-3 rounded-xl transition-all flex-1 lg:flex-none justify-center ${showFilters
                                ? 'bg-indigo-500 text-white shadow-lg'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                    >
                        <Filter className="w-4 h-4" />
                        <span className="hidden sm:inline">Filters</span>
                        {hasActiveFilters && (
                            <span className="bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                                !
                            </span>
                        )}
                    </button>

                    <button
                        onClick={() => setAutoRefresh(!autoRefresh)}
                        className={`flex items-center gap-2 px-4 py-3 rounded-xl transition-all flex-1 lg:flex-none justify-center ${autoRefresh
                                ? 'bg-green-500 text-white shadow-lg'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                    >
                        <RefreshCw className={`w-4 h-4 ${autoRefresh ? 'animate-spin' : ''}`} />
                        <span className="hidden sm:inline">Auto-refresh</span>
                    </button>

                    <button
                        onClick={onRefresh}
                        className="flex items-center gap-2 px-4 py-3 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600 transition-all shadow-lg flex-1 lg:flex-none justify-center"
                    >
                        <RefreshCw className="w-4 h-4" />
                        <span className="hidden sm:inline">Refresh</span>
                    </button>
                </div>
            </div>

            {/* Advanced Filters */}
            {showFilters && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Sources Filter */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                News Sources
                            </label>
                            <div className="max-h-40 overflow-y-auto border border-gray-300 rounded-lg p-2">
                                {sources.map(source => (
                                    <div key={source} className="flex items-center mb-2">
                                        <input
                                            type="checkbox"
                                            id={source}
                                            checked={selectedSources.includes(source)}
                                            onChange={() => toggleSource(source)}
                                            className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                        />
                                        <label htmlFor={source} className="ml-2 text-sm text-gray-700 truncate">
                                            {source}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Date Range Filter */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Date Range
                            </label>
                            <select
                                value={dateRange}
                                onChange={(e) => setDateRange(e.target.value)}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            >
                                <option value="all">All Time</option>
                                <option value="today">Today</option>
                                <option value="week">Past Week</option>
                                <option value="month">Past Month</option>
                            </select>
                        </div>

                        {/* Sort By Filter */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Sort By
                            </label>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            >
                                <option value="newest">Newest First</option>
                                <option value="oldest">Oldest First</option>
                                <option value="relevance">Relevance</option>
                            </select>
                        </div>
                    </div>

                    {/* Clear Filters */}
                    <div className="flex justify-between items-center mt-4">
                        <button
                            onClick={clearAllFilters}
                            className="text-sm text-red-600 hover:text-red-700 flex items-center gap-1"
                        >
                            <X className="w-4 h-4" />
                            Clear All Filters
                        </button>
                        <div className="text-sm text-gray-500">
                            {articlesCount} articles found
                        </div>
                    </div>
                </div>
            )}

            {/* Stats */}
            {lastUpdated && (
                <div className="flex flex-col sm:flex-row items-center justify-between mt-4 gap-2 text-sm text-gray-500">
                    <div className="flex items-center gap-4 flex-wrap">
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>Updated: {lastUpdated.toLocaleTimeString()}</span>
                        </div>
                        <span className="hidden sm:inline">•</span>
                        <span>{articlesCount} articles</span>
                        <span className="hidden sm:inline">•</span>
                        <span>Page {currentPage} of {totalPages}</span>
                    </div>
                    <div className="flex items-center gap-2 text-indigo-600">
                        <Newspaper className="w-4 h-4" />
                        <span>Real-time Pharma News</span>
                    </div>
                </div>
            )}
        </div>
    );
};