import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const projects = [
    {
        id: 1,
        title: "Gym Management Portal",
        description: "A comprehensive platform to streamline gym operations, member management, and class scheduling.",
        technologies: ["React", "Node.js", "MongoDB", "Express"],
        github: "#",
        live: "#",
        image: "https://placehold.co/600x400/1c1c1e/FFF?text=Gym+Portal"
    },
    {
        id: 2,
        title: "Personal Portfolio",
        description: "A modern, high-performance portfolio website featuring interactive glassmorphism and smooth animations.",
        technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
        github: "https://github.com/Rayaankhan2005/profile",
        live: "#",
        image: "https://placehold.co/600x400/1c1c1e/FFF?text=Portfolio"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-32 relative">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
                    viewport={{ once: true }}
                >
                    <div className="text-center mb-24">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 text-[11px] font-bold uppercase tracking-widest text-gray-500 dark:text-[#86868b] mb-8">
                            Selected Works
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-tight text-apple-headline mb-6">
                            Featured <span className="text-gradient-blue-cyan">Projects</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.98 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: index * 0.05, ease: [0.23, 1, 0.32, 1] }}
                                viewport={{ once: true }}
                                className="apple-glass-interactive overflow-hidden group border border-black/5 dark:border-white/5 hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-all duration-500 flex flex-col"
                            >
                                <div className="h-48 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#000] to-transparent opacity-60 z-10" />
                                    <img 
                                        src={project.image} 
                                        alt={project.title} 
                                        className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 right-4 z-20 bg-gray-100/90 dark:bg-[#1c1c1e]/80 backdrop-blur-md p-2 rounded-full border border-black/5 dark:border-white/10 text-[#007aff]">
                                        <FaCode size={14} />
                                    </div>
                                </div>
                                
                                <div className="p-8 flex-1 flex flex-col">
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight mb-3 group-hover:text-[#007aff] transition-colors">{project.title}</h3>
                                    <p className="text-gray-500 dark:text-[#86868b] text-sm leading-relaxed mb-6 flex-1">
                                        {project.description}
                                    </p>
                                    
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.technologies.map((tech, i) => (
                                            <span key={i} className="px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 text-[10px] font-bold text-gray-600 dark:text-white/60 border border-black/5 dark:border-white/5">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-4 pt-6 border-t border-black/5 dark:border-white/5 mt-auto">
                                        <a 
                                            href={project.github} 
                                            className="flex items-center gap-2 text-sm font-bold text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
                                        >
                                            <FaGithub /> <span className="text-xs">Code</span>
                                        </a>
                                        <a 
                                            href={project.live} 
                                            className="flex items-center gap-2 text-sm font-bold text-[#007aff] hover:text-[#007aff]/80 transition-colors duration-300 ml-auto"
                                        >
                                            <span className="text-xs">Live Demo</span> <FaExternalLinkAlt size={10} />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
