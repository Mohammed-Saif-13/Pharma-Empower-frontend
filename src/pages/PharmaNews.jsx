// src/pages/PharmaNews.jsx

import React, { useState, useEffect } from 'react';
import { Globe, AlertCircle, CheckCircle, Newspaper, Bookmark } from 'lucide-react';
import { useNewsAPI } from '@/hooks/useNewsAPI';
import { NewsCard } from '@/components/news/NewsCard';
import { NewsFilters } from '@/components/news/NewsFilters';
import { NewsPagination } from '@/components/news/NewsPagination';

/**
 * Pharma News Page - Complete Modular Version
 * Features: Pharma-only news, search, filters, pagination, save/share articles
 */
const PharmaNews = () => {
    // API KEY - Replace with your key
    const NEWS_API_KEY = '785ca99749d141babea1d3fbfb6512d3';

    // Custom hook for pharma news
    const {
        news,
        filteredNews,
        loading,
        error,
        lastUpdated,
        apiStatus,
        sources,
        fetchNews,
        applyFilters,
        setupAutoRefresh
    } = useNewsAPI(NEWS_API_KEY);

    // Local state
    const [savedArticles, setSavedArticles] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedSources, setSelectedSources] = useState([]);
    const [dateRange, setDateRange] = useState('all');
    const [sortBy, setSortBy] = useState('newest');
    const [showFilters, setShowFilters] = useState(false);
    const [autoRefresh, setAutoRefresh] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [articlesPerPage, setArticlesPerPage] = useState(9);

    // Apply filters when they change
    useEffect(() => {
        applyFilters(searchQuery, selectedSources, dateRange, sortBy);
        setCurrentPage(1);
    }, [searchQuery, selectedSources, dateRange, sortBy, news]);

    // Auto-refresh setup
    useEffect(() => {
        setupAutoRefresh(autoRefresh);
    }, [autoRefresh]);

    // Initial fetch
    useEffect(() => {
        fetchNews();
    }, []);

    // Pagination
    const totalPages = Math.ceil(filteredNews.length / articlesPerPage);
    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = filteredNews.slice(indexOfFirstArticle, indexOfLastArticle);

    // Handle page change
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Handle articles per page change
    const handleArticlesPerPageChange = (newCount) => {
        setArticlesPerPage(newCount);
        setCurrentPage(1);
    };

    // Save/Unsave article
    const toggleSaveArticle = (article) => {
        setSavedArticles(prev => {
            const isSaved = prev.some(saved => saved.id === article.id);
            if (isSaved) {
                return prev.filter(saved => saved.id !== article.id);
            } else {
                return [...prev, { ...article, savedAt: new Date() }];
            }
        });
    };

    const isArticleSaved = (article) => {
        return savedArticles.some(saved => saved.id === article.id);
    };

    // Share article
    const shareArticle = async (article) => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: article.title,
                    text: article.description,
                    url: article.url,
                });
            } catch (err) {
                console.log('Share cancelled');
            }
        } else {
            navigator.clipboard.writeText(article.url);
            alert('Article link copied to clipboard!');
        }
    };

    // Format date for saved articles
    const formatDate = (dateString) => {
        try {
            const date = new Date(dateString);
            return date.toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric'
            });
        } catch {
            return 'Recent';
        }
    };

    // Loading state
    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center py-20">
                        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-600 mx-auto mb-4"></div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Loading Pharma News</h2>
                        <p className="text-gray-600">Fetching latest pharmaceutical updates...</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <header className="text-center mb-12">
                    <div className="flex items-center justify-center mb-4">
                        <Globe className="h-12 w-12 text-indigo-600 mr-3 animate-spin-slow" />
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            Pharma Pulse (News)
                        </h1>
                    </div>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6">
                        The Pulse of Pharma: Essential News for Today's Strategic Decisions to create better tomorrow
                    </p>

                    <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${apiStatus === 'connected'
                            ? 'bg-green-100 text-green-800 border border-green-200'
                            : 'bg-red-100 text-red-800 border border-red-200'
                        }`}>
                        {apiStatus === 'connected' ? (
                            <>
                                <CheckCircle className="w-4 h-4 mr-2" />
                                Live Pharma API Connected
                            </>
                        ) : (
                            <>
                                <AlertCircle className="w-4 h-4 mr-2" />
                                API Connection Issue
                            </>
                        )}
                    </div>
                </header>

                {/* Filters Component */}
                <NewsFilters
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    sources={sources}
                    selectedSources={selectedSources}
                    setSelectedSources={setSelectedSources}
                    dateRange={dateRange}
                    setDateRange={setDateRange}
                    sortBy={sortBy}
                    setSortBy={setSortBy}
                    showFilters={showFilters}
                    setShowFilters={setShowFilters}
                    autoRefresh={autoRefresh}
                    setAutoRefresh={setAutoRefresh}
                    onRefresh={fetchNews}
                    articlesCount={filteredNews.length}
                    currentPage={currentPage}
                    totalPages={totalPages}
                    lastUpdated={lastUpdated}
                />

                {/* Error Message */}
                {error && (
                    <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-8">
                        <div className="flex items-start gap-3">
                            <AlertCircle className="text-red-500 mt-0.5 flex-shrink-0" />
                            <div>
                                <h3 className="text-red-800 font-semibold mb-1">Unable to Load News</h3>
                                <p className="text-red-600 text-sm">{error}</p>
                                <button
                                    onClick={fetchNews}
                                    className="mt-3 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm"
                                >
                                    Try Again
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* News Grid */}
                {currentArticles.length === 0 && !loading ? (
                    <div className="text-center py-16 bg-white rounded-2xl shadow-lg border border-gray-200">
                        <Newspaper className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">No News Found</h3>
                        <p className="text-gray-600 mb-6 max-w-md mx-auto">
                            {searchQuery || selectedSources.length > 0 || dateRange !== 'all'
                                ? 'No articles match your current filters. Try adjusting your search criteria.'
                                : 'No recent pharmaceutical news available at the moment.'}
                        </p>
                    </div>
                ) : (
                    <>
                        {/* News Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
                            {currentArticles.map((article, index) => (
                                <NewsCard
                                    key={article.id}
                                    article={article}
                                    index={index}
                                    isArticleSaved={isArticleSaved}
                                    toggleSaveArticle={toggleSaveArticle}
                                    shareArticle={shareArticle}
                                />
                            ))}
                        </div>

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <NewsPagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                articlesPerPage={articlesPerPage}
                                setArticlesPerPage={handleArticlesPerPageChange}
                                totalArticles={filteredNews.length}
                                onPageChange={handlePageChange}
                            />
                        )}
                    </>
                )}

                {/* Saved Articles Section */}
                {savedArticles.length > 0 && (
                    <section className="mt-16">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-8 flex items-center gap-2">
                            <Bookmark className="text-yellow-500 w-6 h-6" />
                            <span>Saved Articles ({savedArticles.length})</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {savedArticles.map((article) => (
                                <div
                                    key={`saved-${article.id}`}
                                    className="bg-white rounded-xl p-4 shadow-md border-l-4 border-yellow-400 hover:shadow-lg transition-shadow"
                                >
                                    <h4 className="font-semibold text-sm mb-2 line-clamp-2">{article.title}</h4>
                                    <div className="flex items-center justify-between text-xs text-gray-500">
                                        <span className="truncate mr-2">{article.source?.name}</span>
                                        <div className="flex items-center gap-2 flex-shrink-0">
                                            <span className="hidden sm:inline">Saved {formatDate(article.savedAt)}</span>
                                            <button
                                                onClick={() => toggleSaveArticle(article)}
                                                className="text-red-500 hover:text-red-700 text-xs font-medium"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

            </div>
        </div>
    );
};

export default PharmaNews;