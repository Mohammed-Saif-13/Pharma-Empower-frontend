// src/components/news/NewsArticleCard.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ExternalLink, Bookmark, Share2, TrendingUp } from 'lucide-react';

export const NewsArticleCard = ({
    article,
    index,
    formatDate,
    getImageUrl,
    isArticleSaved,
    toggleSaveArticle,
    shareArticle
}) => {
    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: Math.min(index * 0.1, 0.5) }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-200"
        >
            <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                    src={getImageUrl(article)}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                        e.target.src = `https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80`;
                    }}
                />
                {article.trending && (
                    <div className="absolute top-3 left-3 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        <span>Trending</span>
                    </div>
                )}
                <div className="absolute top-3 right-3 flex gap-1">
                    <button
                        onClick={() => toggleSaveArticle(article)}
                        className={`p-2 rounded-full backdrop-blur-sm transition-all ${isArticleSaved(article)
                                ? 'bg-yellow-500 text-white shadow-lg'
                                : 'bg-white/90 text-gray-700 hover:bg-white'
                            }`}
                    >
                        <Bookmark className="w-4 h-4" fill={isArticleSaved(article) ? 'currentColor' : 'none'} />
                    </button>
                    <button
                        onClick={() => shareArticle(article)}
                        className="p-2 rounded-full bg-white/90 text-gray-700 backdrop-blur-sm hover:bg-white transition-all"
                    >
                        <Share2 className="w-4 h-4" />
                    </button>
                </div>
            </div>

            <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full line-clamp-1">
                        {article.source?.name || 'News Source'}
                    </span>
                    <div className="flex items-center gap-1 text-gray-500 text-xs">
                        <Calendar className="w-3 h-3" />
                        <span>{formatDate(article.publishedAt)}</span>
                    </div>
                </div>

                <h3 className="font-bold text-lg sm:text-xl mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors leading-tight">
                    {article.title}
                </h3>

                <p className="text-gray-600 text-sm sm:text-base mb-4 line-clamp-3 leading-relaxed">
                    {article.description}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="text-xs text-gray-500 truncate mr-2">
                        Via {article.source?.name || 'Source'}
                    </span>
                    <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-semibold whitespace-nowrap"
                    >
                        <span>Read</span>
                        <ExternalLink className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </motion.article>
    );
};