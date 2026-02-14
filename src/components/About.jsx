import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { HiUser } from 'react-icons/hi';

const About = () => {
    return (
        <section id="about" className="py-32 flex items-center justify-center">
            <div className="container mx-auto px-6">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto tech-glass-card p-8 md:p-16 relative overflow-hidden"
                >
                    <div className="text-center mb-12">
                        <div className="tech-badge mb-8">
                            <HiUser className="w-3.5 h-3.5 mr-2" />
                            <span>Professional Identity</span>
                        </div>
                        <h3 className="text-4xl md:text-6xl tech-heading text-zinc-900 dark:text-white mb-10">
                             Driven by <span className="text-indigo-600 dark:text-indigo-400">Curiosity</span> & <br/>
                             <span className="text-zinc-400 dark:text-zinc-500">Precision.</span>
                        </h3>
                         <div className="tech-body text-xl space-y-8 max-w-3xl mx-auto">
                            <p>
                                Computer Applications undergraduate with hands-on experience in <strong>software development</strong>, <strong>IT operations</strong>, and <strong>technical support</strong>. Skilled in building and supporting web applications using <strong>Python (Flask)</strong>, frontend technologies, and databases.
                            </p>
                            <p>
                                Experienced in <strong>manual QA testing</strong>, <strong>Google Workspace administration</strong>, and collaborating with remote teams on real-world projects across healthcare and aviation domains. Adaptable, quick learner, and eager to contribute across technical functions.
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
                                className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8 text-center shadow-sm hover:border-indigo-500/30 transition-all duration-300"
                            >
                                <h4 className="text-4xl font-black text-indigo-600 dark:text-indigo-400 mb-2">{stat.value}</h4>
                                <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
