import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';

const educationData = [
    {
        id: 1,
        institution: "Acharya Institutes",
        degree: "Bachelor of Computer Applications",
        year: "2023 – 2026",
        status: "Pursuing",
        description: "Focusing on advanced software engineering principles, system architecture, and computational theory.",
        icon: <FaGraduationCap />
    },
    {
        id: 2,
        institution: "Besant Technology",
        degree: "Python Training Program",
        year: "Certified",
        status: "Completed",
        description: "Intensive specialization in Python development, covering complex backend logic and data structures.",
        icon: <FaCertificate />
    },
    {
        id: 3,
        institution: "NICT Computer Education",
        degree: "Computer Education Certificate",
        year: "Certified",
        status: "Completed",
        description: "Foundational mastery in computer science fundamentals and information systems management.",
        icon: <FaCertificate />
    },
    {
        id: 4,
        institution: "MES College",
        degree: "Pre-University Education",
        year: "Graduated",
        status: "Completed",
        description: "Core academic foundation with a secondary focus on Science and Mathematics.",
        icon: <FaGraduationCap />
    }
];

const Education = () => {
    return (
        <section id="education" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
                    className="text-center mb-24"
                >
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 text-[11px] font-bold uppercase tracking-widest text-gray-500 dark:text-[#86868b] mb-8">
                        Academic background
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-tight text-apple-headline mb-6">
                        Educational <span className="text-gradient-blue-cyan">History</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={edu.id}
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: index * 0.05, ease: [0.23, 1, 0.32, 1] }}
                            viewport={{ once: true }}
                            className="apple-glass-interactive p-8 group border border-black/5 dark:border-white/5 bg-black/[0.01] dark:bg-white/[0.01] hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-colors"
                        >
                            <div className="flex justify-between items-start mb-8">
                                <div className="w-12 h-12 rounded-2xl bg-gray-100 dark:bg-[#1c1c1e] border border-black/5 dark:border-white/5 flex items-center justify-center text-xl text-gray-400 dark:text-white/30 group-hover:text-[#007aff] transition-colors duration-500">
                                    {edu.icon}
                                </div>
                                <div className="text-right">
                                    <div className="px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 text-[11px] font-bold text-[#007aff] uppercase tracking-wider mb-2">
                                        {edu.year}
                                    </div>
                                    <div className="text-[10px] text-gray-400 dark:text-[#86868b] font-bold uppercase tracking-widest">
                                        {edu.status}
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight mb-2">
                                {edu.institution}
                            </h3>
                            <h4 className="text-base text-gray-500 dark:text-[#86868b] font-medium mb-6">
                                {edu.degree}
                            </h4>
                            
                            <p className="text-gray-500 dark:text-[#86868b] text-sm leading-relaxed border-t border-black/5 dark:border-white/5 pt-6">
                                {edu.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
