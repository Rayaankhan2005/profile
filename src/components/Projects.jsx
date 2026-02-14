import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaRocket } from 'react-icons/fa';

const projects = [
    {
        id: 1,
        title: "Gym Management System (Gym Portal)",
        description: "Web-based gym portal for member, attendance & admin management. Implemented membership plans, fee tracking, and basic reports.",
        technologies: ["Python (Flask)", "HTML/CSS", "Tailwind CSS", "SQLite/MySQL"],
        github: "#",
        live: "#",
        image: "https://placehold.co/600x400/06b6d4/FFF?text=Gym+Portal"
    },
    {
        id: 2,
        title: "Personal Portfolio Website",
        description: "Designed and developed a responsive personal portfolio showcasing skills and projects. Implemented clean UI, mobile responsiveness, and basic SEO practices.",
        technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
        github: "https://github.com/Rayaankhan2005/profile",
        live: "#",
        image: "https://placehold.co/600x400/6366f1/FFF?text=Portfolio"
    }
];

// 3D Tilt Card Component
const TiltCard = ({ children, index }) => {
    const ref = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    
    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });
    
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);
    
    const handleMouseMove = (e) => {
        if (!ref.current) return;
        
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        
        x.set(xPct);
        y.set(yPct);
    };
    
    const handleMouseLeave = () => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
    };
    
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
                duration: 0.6,
                delay: index * 0.15,
                type: 'spring',
                stiffness: 100,
                damping: 12,
            }}
            viewport={{ once: true }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            whileHover={{ scale: 1.02 }}
            className="tech-glass-card overflow-hidden group flex flex-col"
        >
            {children}
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="py-32 relative">
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center mb-20">
                        <motion.div 
                            className="tech-badge mb-8 inline-flex"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                            viewport={{ once: true }}
                        >
                            <FaRocket className="w-3.5 h-3.5 mr-2" />
                            <span>Featured Work</span>
                        </motion.div>
                        <motion.h2 
                            className="text-5xl md:text-7xl tech-heading text-zinc-900 dark:text-white mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            Recent <span className="gradient-tech-primary">Projects</span>
                        </motion.h2>
                        <motion.p 
                            className="tech-subheading text-lg max-w-2xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            Explore my latest work showcasing modern web technologies and best practices
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <TiltCard key={project.id} index={index}>
                                {/* Image with Shimmer Effect */}
                                <div className="h-56 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent opacity-80 z-10" />
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-20"
                                        initial={{ x: '-100%' }}
                                        whileHover={{ x: '100%' }}
                                        transition={{ duration: 1, ease: "easeInOut" }}
                                    />
                                    <motion.img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-8 flex-1 flex flex-col" style={{ transform: "translateZ(50px)" }}>
                                    <motion.h3 
                                        className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
                                        whileHover={{ x: 5 }}
                                        transition={{ type: 'spring', stiffness: 300 }}
                                    >
                                        {project.title}
                                    </motion.h3>
                                    <p className="tech-body mb-6 flex-1">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack with Stagger */}
                                    <motion.div 
                                        className="flex flex-wrap gap-2 mb-6"
                                        initial="hidden"
                                        whileInView="visible"
                                        variants={{
                                            hidden: { opacity: 0 },
                                            visible: {
                                                opacity: 1,
                                                transition: {
                                                    staggerChildren: 0.05,
                                                    delayChildren: index * 0.2,
                                                },
                                            },
                                        }}
                                        viewport={{ once: true }}
                                    >
                                        {project.technologies.map((tech, i) => (
                                            <motion.span
                                                key={i}
                                                variants={{
                                                    hidden: { opacity: 0, scale: 0.8 },
                                                    visible: { opacity: 1, scale: 1 },
                                                }}
                                                className="tech-tag"
                                                whileHover={{ 
                                                    y: -2,
                                                    transition: { type: 'spring', stiffness: 400, damping: 10 }
                                                }}
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </motion.div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-4">
                                        <motion.a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium"
                                            whileHover={{ x: 3 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <FaGithub className="text-lg" />
                                            <span>Code</span>
                                        </motion.a>
                                        <motion.a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors font-medium"
                                            whileHover={{ x: 3 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <FaExternalLinkAlt className="text-sm" />
                                            <span>Live Demo</span>
                                        </motion.a>
                                    </div>
                                </div>
                            </TiltCard>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
