import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaArrowRight, FaGithub } from 'react-icons/fa';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
            <div className="flex flex-col items-center text-center w-full max-w-5xl relative z-10 px-6">
                
                {/* Status Pill */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/50 dark:bg-[#1c1c1e]/50 border border-black/5 dark:border-white/10 text-[12px] font-semibold text-[#007aff] mb-10 backdrop-blur-xl"
                >
                    <span className="w-2 h-2 rounded-full bg-[#007aff] mr-2.5 animate-soft-pulse shadow-[0_0_8px_rgba(0,122,255,0.4)]"></span>
                    System Online
                </motion.div>
                
                {/* Headline */}
                <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
                    className="text-5xl md:text-8xl font-bold text-gray-900 dark:text-white mb-8 leading-[1.05] tracking-tight text-apple-headline"
                >
                    Building Practical <br />
                    <span className="text-gradient-blue-cyan">Digital</span> Solutions.
                </motion.h1>
                
                {/* Subheadline */}
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
                    className="text-gray-500 dark:text-[#86868b] text-xl md:text-2xl mb-12 max-w-2xl leading-relaxed font-medium"
                >
                    I am Rayaan, a Full-Stack Software Engineer crafting high-performance applications and precise technical architectures.
                </motion.p>
                
                {/* Buttons */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
                    className="flex flex-col sm:flex-row gap-6 mb-24"
                >
                    <a 
                        href="#experience"
                        className="apple-button-primary px-10 py-4 rounded-full font-bold text-lg flex items-center justify-center shadow-2xl shadow-blue-500/30 text-white"
                    >
                        Explore Experience <FaArrowRight className="ml-3 text-sm" />
                    </a>
                    
                    <a 
                        href="#skills"
                        className="apple-button-secondary px-10 py-4 rounded-full font-bold text-lg text-gray-900 dark:text-white/90 flex items-center justify-center backdrop-blur-xl border border-black/10 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/5"
                    >
                        View Technical Stack
                    </a>
                </motion.div>

                {/* System-Style Info Card */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.98, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.8, ease: [0.23, 1, 0.32, 1] }}
                    className="apple-glass-interactive p-8 md:p-12 w-full max-w-3xl flex flex-col md:flex-row items-center gap-12 border border-black/5 dark:border-white/5"
                >
                    <div className="flex-shrink-0">
                        <div className="w-28 h-28 rounded-3xl bg-gray-100 dark:bg-[#1c1c1e] border border-black/5 dark:border-white/5 flex items-center justify-center shadow-inner group" title="ray-001">
                            <FaGithub className="text-5xl text-gray-400 dark:text-white/20 group-hover:text-[#007aff] transition-all duration-700" />
                        </div>
                    </div>
                    
                    <div className="flex-grow text-left space-y-8">
                        <div className="flex justify-between items-end border-b border-black/5 dark:border-white/5 pb-6">
                            <div>
                                <h3 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">Rayaan Khan</h3>
                                <p className="text-base text-gray-500 dark:text-[#86868b] font-medium">Full-Stack Software Engineer</p>
                            </div>
                            <div className="text-right hidden sm:block">
                                <div className="text-[10px] uppercase tracking-[0.2em] text-gray-400 dark:text-[#86868b] font-black opacity-50">System Status</div>
                                <div className="text-xs font-mono text-[#007aff] font-bold">VERIFIED</div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                            {[
                                { label: "Performance", val: 96 },
                                { label: "Architecture", val: 92 },
                                { label: "Innovation", val: 88 }
                            ].map((stat, i) => (
                                <div key={i} className="space-y-3">
                                    <div className="flex justify-between items-center text-[10px] font-black text-gray-400 dark:text-[#86868b] uppercase tracking-[0.15em]">
                                        <span>{stat.label}</span>
                                        <span className="text-gray-300 dark:text-white/30">{stat.val}%</span>
                                    </div>
                                    <div className="h-1.5 bg-gray-200 dark:bg-white/5 rounded-full overflow-hidden">
                                        <motion.div 
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${stat.val}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 2, delay: 1.2 + (i * 0.2), ease: "circOut" }}
                                            className="h-full bg-gradient-to-r from-[#007aff] to-[#5ac8fa]"
                                        ></motion.div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
