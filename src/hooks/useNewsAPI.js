// src/hooks/useNewsAPI.js

import { useState, useEffect, useRef } from "react";

/**
 * Custom hook for Pharma News API
 * STRICT PHARMA-ONLY news from verified pharmaceutical sources
 */
export const useNewsAPI = (apiKey) => {
  const [news, setNews] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [apiStatus, setApiStatus] = useState("checking");
  const [sources, setSources] = useState([]);

  const autoRefreshInterval = useRef(null);

  // PHARMA-ONLY DOMAINS (Verified pharmaceutical news sources)
  const PHARMA_DOMAINS =
    "fiercepharma.com,biopharmadive.com,statnews.com,endpts.com,pharmabiz.com,pharmatimes.com,pharmaceutical-technology.com,pharmavoice.com,thepharmaletter.com";

  // PHARMA-SPECIFIC KEYWORDS (Strict pharmaceutical terms)
  const PHARMA_KEYWORDS =
    '(pharmaceutical OR pharma OR "FDA approval" OR "drug approval" OR "clinical trial" OR biotech OR biotechnology OR "drug development" OR "medical device" OR "drug discovery" OR vaccine OR "life sciences")';

  // Fetch pharma-only news
  const fetchNews = async () => {
    try {
      setLoading(true);
      setError(null);
      setApiStatus("checking");

      // PHARMA-ONLY API CALL
      const response = await fetch(
        `https://newsapi.org/v2/everything?` +
          `q=${encodeURIComponent(PHARMA_KEYWORDS)}&` +
          `domains=${PHARMA_DOMAINS}&` +
          `language=en&` +
          `sortBy=publishedAt&` +
          `pageSize=100&` +
          `apiKey=${apiKey}`
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "API Error");
      }

      const data = await response.json();

      if (data.articles?.length > 0) {
        const validArticles = data.articles
          .filter(
            (article) =>
              article.title &&
              article.title !== "[Removed]" &&
              article.url &&
              article.description
          )
          .map((article, index) => ({
            ...article,
            id: article.url || `news-${index}-${Date.now()}`,
            trending: index < 5,
          }));

        setNews(validArticles);
        setFilteredNews(validArticles);
        extractSources(validArticles);
        setApiStatus("connected");
        setLastUpdated(new Date());
      } else {
        throw new Error("No pharmaceutical news found");
      }
    } catch (err) {
      setError(err.message);
      setApiStatus("error");
      setNews([]);
      setFilteredNews([]);
    } finally {
      setLoading(false);
    }
  };

  // Extract unique sources
  const extractSources = (articles) => {
    const uniqueSources = [
      ...new Set(articles.map((a) => a.source?.name).filter(Boolean)),
    ];
    setSources(uniqueSources.sort());
  };

  // Apply filters
  const applyFilters = (searchQuery, selectedSources, dateRange, sortBy) => {
    let filtered = [...news];

    // Search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (article) =>
          article.title?.toLowerCase().includes(query) ||
          article.description?.toLowerCase().includes(query) ||
          article.content?.toLowerCase().includes(query)
      );
    }

    // Source filter
    if (selectedSources.length > 0) {
      filtered = filtered.filter((article) =>
        selectedSources.includes(article.source?.name)
      );
    }

    // Date filter
    const now = new Date();
    switch (dateRange) {
      case "today":
        filtered = filtered.filter((article) => {
          const date = new Date(article.publishedAt);
          return date.toDateString() === now.toDateString();
        });
        break;
      case "week":
        const weekAgo = new Date(now - 7 * 24 * 60 * 60 * 1000);
        filtered = filtered.filter(
          (article) => new Date(article.publishedAt) >= weekAgo
        );
        break;
      case "month":
        const monthAgo = new Date(now - 30 * 24 * 60 * 60 * 1000);
        filtered = filtered.filter(
          (article) => new Date(article.publishedAt) >= monthAgo
        );
        break;
    }

    // Sort
    switch (sortBy) {
      case "newest":
        filtered.sort(
          (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
        );
        break;
      case "oldest":
        filtered.sort(
          (a, b) => new Date(a.publishedAt) - new Date(b.publishedAt)
        );
        break;
      case "relevance":
        if (searchQuery) {
          filtered.sort((a, b) => {
            const aMatch = a.title
              ?.toLowerCase()
              .includes(searchQuery.toLowerCase());
            const bMatch = b.title
              ?.toLowerCase()
              .includes(searchQuery.toLowerCase());
            return (bMatch ? 1 : 0) - (aMatch ? 1 : 0);
          });
        }
        break;
    }

    setFilteredNews(filtered);
  };

  // Auto-refresh setup
  const setupAutoRefresh = (enabled, interval = 5 * 60 * 1000) => {
    if (autoRefreshInterval.current) {
      clearInterval(autoRefreshInterval.current);
    }

    if (enabled) {
      autoRefreshInterval.current = setInterval(fetchNews, interval);
    }
  };

  // Cleanup
  useEffect(() => {
    return () => {
      if (autoRefreshInterval.current) {
        clearInterval(autoRefreshInterval.current);
      }
    };
  }, []);

  return {
    news,
    filteredNews,
    loading,
    error,
    lastUpdated,
    apiStatus,
    sources,
    fetchNews,
    applyFilters,
    setupAutoRefresh,
  };
};
