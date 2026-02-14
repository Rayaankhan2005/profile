import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaPython, FaApple, FaWindows, FaDatabase, FaDownload } from 'react-icons/fa';
import { SiGoogle } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { HiCode } from 'react-icons/hi';

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
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
        viewport={{ once: true }}
        className="tech-glass-card p-8 space-y-5 group"
    >
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div className="text-3xl text-zinc-400 dark:text-zinc-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-all duration-500 group-hover:scale-110">
                    {skill.icon}
                </div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white tracking-tight">{skill.name}</h3>
            </div>
            <div className="text-sm font-bold text-zinc-500 dark:text-zinc-400">{skill.level}%</div>
        </div>
        
        <div className="h-2 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
            <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.3, ease: "circOut" }}
                className="h-full bg-indigo-500 shadow-sm"
            ></motion.div>
        </div>
    </motion.div>
);

const Skills = () => {
    return (
        <section id="skills" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
                    className="text-center mb-20"
                >
                     <div className="tech-badge mb-8">
                        <HiCode className="w-3.5 h-3.5 mr-2" />
                        <span>Technical Stack</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl tech-heading text-zinc-900 dark:text-white mb-6">
                        Expertise & <span className="text-indigo-600 dark:text-indigo-400">Capabilities</span>
                    </h2>
                    <p className="tech-subheading text-lg max-w-2xl mx-auto">
                        A precise technical foundation built across diverse ecosystems and engineering disciplines
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skillsData.map((skill, index) => (
                        <SkillItem key={skill.name} skill={skill} index={index} />
                    ))}
                </div>

                <div className="mt-20 flex justify-center">
                    <motion.a 
                        href="/resume.pdf"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="tech-button-secondary flex items-center gap-3"
                    >
                        <FaDownload className="text-lg" />
                        Download Full Credentials
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default Skills;
