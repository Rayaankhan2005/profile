import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaPython, FaApple, FaWindows, FaDatabase } from 'react-icons/fa';
import { SiGoogle } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const skillsData = [
    { name: "Google Workspace Admin", level: 95, icon: <SiGoogle /> },
    { name: "Apple (MacOS/iOS) Logic", level: 90, icon: <FaApple /> },
    { name: "Windows IT Infrastructure", level: 88, icon: <FaWindows /> },
    { name: "Python Development", level: 75, icon: <FaPython /> },
    { name: "SQL Data Architecture", level: 70, icon: <FaDatabase /> },
    { name: "VS Code Ecosystem", level: 90, icon: <VscVscode /> },
];

const SkillItem = ({ skill, index }) => (
    <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: index * 0.05, ease: [0.23, 1, 0.32, 1] }}
        viewport={{ once: true }}
        className="apple-glass-interactive p-8 space-y-6"
    >
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div className="text-2xl text-white/30 transition-colors duration-500 group-hover:text-[#007aff]">
                    {skill.icon}
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">{skill.name}</h3>
            </div>
            <div className="text-sm font-bold text-[#86868b]">{skill.level}%</div>
        </div>
        
        <div className="h-1 bg-white/5 rounded-full overflow-hidden">
            <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1.5, delay: 0.3, ease: "circOut" }}
                className="h-full bg-[#007aff] shadow-[0_0_12px_rgba(0,122,255,0.3)]"
            ></motion.div>
        </div>
    </motion.div>
);

const Skills = () => {
    return (
        <section id="skills" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
                    className="text-center mb-24"
                >
                     <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[11px] font-bold uppercase tracking-widest text-[#86868b] mb-8">
                        Technical Stack
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight text-apple-headline mb-6">
                        Expertise & <span className="text-gradient-blue-cyan">Capabilities</span>
                    </h2>
                    <p className="text-[#86868b] text-lg max-w-2xl mx-auto font-medium">
                        A precise technical foundation built across diverse ecosystems and engineering disciplines.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillsData.map((skill, index) => (
                        <SkillItem key={skill.name} skill={skill} index={index} />
                    ))}
                </div>

                <div className="mt-24 flex justify-center">
                    <motion.a 
                        href="/resume.pdf"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="apple-button-secondary px-10 py-4 rounded-full font-bold text-white/90 flex items-center justify-center backdrop-blur-xl border border-white/10"
                    >
                        Download Full Credentials
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default Skills;
