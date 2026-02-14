import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaArrowRight, FaCode, FaRocket } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

// Magnetic Button Component with smooth spring physics
const MagneticButton = ({ children, className, href }) => {
    const [isHovered, setIsHovered] = useState(false);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    
    const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set((e.clientX - centerX) * 0.3);
        y.set((e.clientY - centerY) * 0.3);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
    };

    return (
        <motion.a
            href={href}
            className={className}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{ x: springX, y: springY }}
            whileTap={{ scale: 0.95 }}
        >
            <motion.span
                animate={{ scale: isHovered ? 1.05 : 1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
                {children}
            </motion.span>
        </motion.a>
    );
};

// Text reveal animation variants
const textRevealContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.03,
            delayChildren: 0.2,
        },
    },
};

const textRevealChild = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            damping: 12,
            stiffness: 100,
        },
    },
};

const Hero = () => {
    const headlineText = "Building Modern Digital Experiences";
    const words = headlineText.split(' ');

    return (
        <section id="home" className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
            {/* Minimalist Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent opacity-40"></div>
            
            {/* Parallax Floating Orbs (Subtle) */}
            <motion.div 
                className="absolute top-20 right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"
                animate={{
                    y: [0, -30, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div 
                className="absolute bottom-20 left-20 w-96 h-96 bg-zinc-500/10 rounded-full blur-3xl"
                animate={{
                    y: [0, 30, 0],
                    scale: [1, 1.15, 1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                }}
            />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Profile Picture */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                        className="relative mx-auto w-32 h-32 md:w-40 md:h-40 mb-8 z-20"
                    >
                        {/* Glow Effect */}
                        <div className="absolute inset-0 rounded-full bg-indigo-500/20 blur-xl animate-pulse" />
                        
                        {/* Image Container */}
                        <div className="relative w-full h-full rounded-full p-1 bg-gradient-to-tr from-indigo-500 via-zinc-200 dark:via-zinc-700 to-indigo-500">
                            <div className="w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-[#09090b]">
                                <img 
                                    src="/profilepic.png" 
                                    alt="Rayaan Khan" 
                                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </motion.div>
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full tech-badge mb-8 cursor-default"
                        whileHover={{ scale: 1.05 }}
                    >
                        <motion.span
                            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <HiSparkles className="text-indigo-500" />
                        </motion.span>
                        <span>Available for Opportunities</span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1 
                        className="text-5xl md:text-7xl lg:text-8xl tech-heading mb-8 tracking-tight leading-tight"
                        variants={textRevealContainer}
                        initial="hidden"
                        animate="visible"
                    >
                        {words.map((word, index) => (
                            <motion.span
                                key={index}
                                className="inline-block mr-4 mb-2"
                                variants={textRevealChild}
                            >
                                {index === 1 ? (
                                    <span className="gradient-tech-primary relative inline-block">
                                        {word}
                                        {/* Subtle Underline */}
                                        <motion.span 
                                            className="absolute bottom-2 left-0 w-full h-3 bg-indigo-500/20 -z-10 -rotate-1"
                                            initial={{ width: 0 }}
                                            animate={{ width: "100%" }}
                                            transition={{ delay: 1, duration: 0.8 }}
                                        />
                                    </span>
                                ) : (
                                    <span className="text-zinc-900 dark:text-zinc-100">{word}</span>
                                )}
                            </motion.span>
                        ))}
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="text-lg md:text-xl tech-body max-w-2xl mx-auto mb-12"
                    >
                        Focusing on refined interfaces, robust architecture, and seamless user interactions.
                    </motion.p>

                    {/* CTA Buttons with Enhanced Magnetic Effect & Ripple */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1, type: 'spring', stiffness: 100 }}
                        className="flex flex-row flex-wrap justify-center gap-4 mb-32"
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 1.1, type: 'spring', stiffness: 120 }}
                        >
                            <MagneticButton
                                href="#projects"
                                className="tech-button-primary flex items-center gap-2.5 group relative overflow-hidden whitespace-nowrap"
                            >
                                {/* Ripple Effect Background */}
                                <motion.span
                                    className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100"
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileHover={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.4 }}
                                />
                                <span className="relative flex items-center gap-2.5">
                                    <motion.span
                                        whileHover={{ rotate: 12 }}
                                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                                    >
                                        <FaRocket className="text-base" />
                                    </motion.span>
                                    <span className="font-semibold">View My Work</span>
                                    <motion.span
                                        animate={{ x: [0, 3, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                    >
                                        <FaArrowRight className="text-sm" />
                                    </motion.span>
                                </span>
                            </MagneticButton>
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 1.2, type: 'spring', stiffness: 120 }}
                        >
                            <MagneticButton
                                href="#contact"
                                className="tech-button-secondary flex items-center gap-2.5 group relative overflow-hidden whitespace-nowrap"
                            >
                                {/* Shimmer Effect */}
                                <motion.span
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-500/10 to-transparent"
                                    initial={{ x: '-100%' }}
                                    whileHover={{ x: '100%' }}
                                    transition={{ duration: 0.6, ease: "easeInOut" }}
                                />
                                <span className="relative flex items-center gap-2.5">
                                    <motion.span
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                                    >
                                        <FaCode className="text-base" />
                                    </motion.span>
                                    <span className="font-semibold">Let's Connect</span>
                                </span>
                            </MagneticButton>
                        </motion.div>
                    </motion.div>

                    {/* Stats */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 1 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto border-t border-zinc-200 dark:border-zinc-800 pt-12"
                    >
                        {[
                            { label: "Years Exp.", value: "3+" },
                            { label: "Projects", value: "20+" },
                            { label: "Technologies", value: "15+" },
                            { label: "Commitment", value: "100%" }
                        ].map((stat, index) => (
                            <motion.div 
                                key={index}
                                className="text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 1.5 + (index * 0.1) }}
                                whileHover={{ y: -5 }}
                            >
                                <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400 mb-1">{stat.value}</h3>
                                <p className="text-sm text-zinc-500 font-medium uppercase tracking-wider">{stat.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
