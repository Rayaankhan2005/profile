import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaBriefcase } from 'react-icons/fa';

const experiences = [
    {
        id: 1,
        role: "Technical Support Engineer",
        company: "Hala Saudi",
        location: "Remote / UAE",
        period: "Jan 2024 – Present",
        details: [
            "Provided first-level technical support and troubleshooting for internal users and developers.",
            "Managed issue triage and escalation across teams, ensuring timely resolution of technical concerns.",
            "Configured and maintained collaboration tools (Slack, Google Workspace, GitHub).",
            "Supported onboarding and tool setup for new members.",
            "Monitored system health and logged incidents for process improvement."
        ]
    },
    {
        id: 2,
        role: "Developer Support Specialist",
        company: "Sanyaa Infotech",
        location: "Dubai",
        period: "2022 – 2024",
        details: [
            "Provided technical support to development teams, resolving build errors and environment issues.",
            "Assisted in testing, debugging, and improving backend APIs.",
            "Handled configuration of development tools and system access controls.",
            "Created internal documentation and simplified troubleshooting guides.",
            "Collaborated with QA and DevOps to ensure smooth release cycles."
        ]
    },
    {
        id: 3,
        role: "Freelance IT Support Consultant",
        company: "TouchToFix",
        location: "Remote",
        period: "Apr 2021 – Present",
        details: [
            "Delivered on-demand remote IT support to users via chat and remote-desktop tools.",
            "Diagnosed software installation errors, system lags, and network problems.",
            "Guided users through troubleshooting steps with empathy and clarity.",
            "Defined workflows for faster issue resolution."
        ]
    }
];

const ExperienceCard = ({ exp, index }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
            viewport={{ once: true }}
            className="group relative pl-8 pb-16 last:pb-0"
        >
            {/* Animated Blue Glow Timeline */}
            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-white/5 via-[#007aff]/20 to-white/5 overflow-hidden">
                <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-[#007aff] to-transparent opacity-50"
                    animate={{
                        y: ["-100%", "200%"],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                        delay: index * 0.5
                    }}
                />
            </div>
            
            {/* Enhanced Timeline Node */}
            <div className={`absolute -left-[5px] top-1.5 w-[9px] h-[9px] rounded-full transition-all duration-500 z-10 ${isOpen ? 'bg-[#007aff] ring-4 ring-blue-500/20 shadow-[0_0_20px_rgba(0,122,255,0.6)]' : 'bg-[#1c1c1e] ring-2 ring-white/10 group-hover:ring-[#007aff]/40 group-hover:shadow-[0_0_12px_rgba(0,122,255,0.3)]'}`}>
                {isOpen && <div className="absolute inset-0 rounded-full bg-[#007aff] animate-ping opacity-75"></div>}
            </div>

            <div 
                onClick={() => setIsOpen(!isOpen)}
                className={`apple-glass-interactive p-8 cursor-pointer transition-all duration-500 ${isOpen ? 'border-white/10 bg-white/[0.05]' : 'hover:bg-white/[0.02]'}`}
            >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 relative z-10">
                    <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-white tracking-tight">
                            {exp.role}
                        </h3>
                        <div className="text-lg text-[#86868b] font-medium flex items-center gap-2">
                            <span className="text-white/80">{exp.company}</span>
                            <span className="text-white/20">•</span>
                            <span className="text-sm font-normal">{exp.location}</span>
                        </div>
                    </div>
                    
                    <div className="flex items-center justify-between md:flex-col md:items-end gap-4">
                         <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-[11px] font-bold text-[#007aff] uppercase tracking-wider">
                            {exp.period}
                        </div>
                        <motion.div 
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            className={`p-2 rounded-full transition-colors ${isOpen ? 'text-[#007aff] bg-[#007aff]/10' : 'text-[#86868b]'}`}
                        >
                            <FaChevronDown size={14} />
                        </motion.div>
                    </div>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                            className="overflow-hidden"
                        >
                            <div className="mt-8 pt-8 border-t border-white/5">
                                <ul className="space-y-5">
                                    {exp.details.map((point, i) => (
                                        <li key={i} className="flex items-start text-[#86868b] text-base leading-relaxed group/item">
                                            <span className="mt-2.5 mr-4 w-1.5 h-1.5 rounded-full bg-[#007aff] opacity-40 group-hover/item:opacity-100 transition-opacity"></span>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

const Experience = () => {
    return (
        <section id="experience" className="py-32 relative">
            <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
                    viewport={{ once: true }}
                >
                    <div className="text-center mb-24">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[11px] font-bold uppercase tracking-widest text-[#86868b] mb-8">
                            Career Pathway
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight text-apple-headline mb-6">
                            Professional <span className="text-gradient-blue-cyan">Journey</span>
                        </h2>
                    </div>

                    <div className="relative ml-2 md:ml-0">
                        {experiences.map((exp, index) => (
                            <ExperienceCard key={exp.id} exp={exp} index={index} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
