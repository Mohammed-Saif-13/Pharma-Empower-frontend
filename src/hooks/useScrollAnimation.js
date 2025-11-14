// src/hooks/useScrollAnimation.js

import { useEffect, useRef, useState } from "react";

/**
 * Custom hook for scroll-triggered animations using Intersection Observer
 * @param {Object} options - Intersection Observer options
 * @returns {Object} - { ref, isVisible } for applying to elements
 */
export const useScrollAnimation = (options = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger animation when element enters viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optional: Stop observing after first trigger
          if (options.once !== false) {
            observer.unobserve(element);
          }
        } else if (!options.once) {
          setIsVisible(false);
        }
      },
      {
        threshold: options.threshold || 0.2,
        rootMargin: options.rootMargin || "0px",
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [options]);

  return { ref, isVisible };
};

/**
 * Hook for staggered animations (multiple items)
 * @param {number} itemCount - Number of items to animate
 * @param {number} staggerDelay - Delay between each item (ms)
 * @returns {Array} - Array of { ref, isVisible } objects
 */
export const useStaggeredAnimation = (itemCount, staggerDelay = 100) => {
  const refs = useRef([]);
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const observers = refs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // Add delay based on index
            setTimeout(() => {
              setVisibleItems((prev) => [...new Set([...prev, index])]);
            }, index * staggerDelay);
            observer.unobserve(ref);
          }
        },
        { threshold: 0.2 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, [itemCount, staggerDelay]);

  return Array.from({ length: itemCount }, (_, i) => ({
    ref: (el) => (refs.current[i] = el),
    isVisible: visibleItems.includes(i),
  }));
};
