import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-32 flex items-center justify-center">
            <div className="container mx-auto px-6">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto apple-glass-interactive p-8 md:p-16 relative overflow-hidden"
                >
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 text-[11px] font-bold uppercase tracking-widest text-gray-500 dark:text-[#86868b] mb-8">
                            Professional Identity
                        </div>
                        <h3 className="text-3xl md:text-6xl font-bold text-gray-900 dark:text-white mb-10 leading-tight tracking-tight text-apple-headline">
                             Driven by <span className="text-gradient-blue-cyan">Curiosity</span> & <br/>
                             <span className="text-gray-300 dark:text-white/40">Precision.</span>
                        </h3>
                         <div className="text-gray-500 dark:text-[#86868b] text-xl space-y-8 leading-relaxed font-medium max-w-2xl mx-auto">
                            <p>
                                I am an entry-level IT professional with experience in Python development, technical project coordination, and quality assurance. I have worked on real-world client projects and contributed to product planning, testing, and system workflows.
                            </p>
                            <p>
                                Currently pursuing a Bachelor of Computer Applications, I am focused on learning, improving, and growing within a technology-driven environment.
                            </p>
                       </div>
                    </div>

                    <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { label: "Technical Support", value: "2+ Years" },
                            { label: "Projects", value: "20+" },
                            { label: "Google Workspace", value: "Expert" }
                        ].map((stat, i) => (
                            <motion.div 
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1, duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true }}
                                className="bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-2xl p-8 text-center"
                            >
                                <h4 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</h4>
                                <p className="text-[10px] text-gray-400 dark:text-[#86868b] font-bold uppercase tracking-widest">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
