// Advanced Animation Utilities for Portfolio
// Based on Context7 best practices for Motion and Framer Motion

import { useEffect, useRef, useState } from "react";

/**
 * Custom hook for magnetic button effect
 * Creates a smooth magnetic attraction to cursor
 */
export const useMagneticEffect = (strength = 0.3) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;

      setPosition({ x: deltaX, y: deltaY });
    };

    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 });
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [strength]);

  return { ref, position };
};

/**
 * Custom hook for scroll progress
 * Returns scroll progress from 0 to 1
 */
export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollProgress = scrollTop / (documentHeight - windowHeight);
      setProgress(Math.min(Math.max(scrollProgress, 0), 1));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return progress;
};

/**
 * Custom hook for parallax effect
 * Returns transform value based on scroll position
 */
export const useParallax = (speed = 0.5) => {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const scrolled = window.scrollY;
      const elementTop = rect.top + scrolled;
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        const parallaxOffset = (scrolled - elementTop + windowHeight) * speed;
        setOffset(parallaxOffset);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return { ref, offset };
};

/**
 * Custom hook for card tilt effect
 * Creates 3D tilt based on mouse position
 */
export const useCardTilt = (maxTilt = 10) => {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const tiltX = ((y - centerY) / centerY) * maxTilt;
      const tiltY = ((centerX - x) / centerX) * maxTilt;

      setTilt({ x: tiltX, y: tiltY });
    };

    const handleMouseLeave = () => {
      setTilt({ x: 0, y: 0 });
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [maxTilt]);

  return { ref, tilt };
};

/**
 * Animation variants for stagger effects
 * Based on Context7 best practices
 */
export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

/**
 * Text reveal animation variants
 */
export const textReveal = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20,
    },
  },
};

/**
 * Smooth spring configuration
 * Based on Motion.dev best practices
 */
export const smoothSpring = {
  type: "spring",
  stiffness: 100,
  damping: 15,
  mass: 0.5,
};

export const bouncySpring = {
  type: "spring",
  stiffness: 400,
  damping: 10,
  mass: 0.5,
};

export const gentleSpring = {
  type: "spring",
  stiffness: 50,
  damping: 20,
  mass: 1,
};
