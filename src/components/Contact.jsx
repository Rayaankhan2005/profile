import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { HiMail, HiPaperAirplane } from 'react-icons/hi';

const Contact = () => {
    return (
        <section id="contact" className="py-32 flex items-center justify-center relative">
            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
                    viewport={{ once: true }}
                    className="tech-glass-card p-10 md:p-20"
                >
                    <div className="text-center mb-16">
                        <div className="tech-badge mb-8">
                            <HiMail className="w-3.5 h-3.5 mr-2" />
                            <span>Get Connected</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl tech-heading text-zinc-900 dark:text-white mb-8">
                            Let's <span className="text-indigo-600 dark:text-indigo-400">Connect</span>
                        </h2>
                        <p className="tech-subheading text-lg max-w-xl mx-auto mb-6">
                            Actively seeking opportunities to contribute to engineering excellence as a Python Developer or Technical Support Specialist.
                        </p>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-zinc-600 dark:text-zinc-400">
                            <a href="mailto:rayaan99000@gmail.com" className="hover:text-indigo-600 transition-colors">rayaan99000@gmail.com</a>
                            <span className="hidden md:block">•</span>
                            <span className="hover:text-indigo-600 transition-colors">+91 900067972</span>
                        </div>
                    </div>

                    <form className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="text-[10px] font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-widest ml-1">Full Name</label>
                                <input 
                                    type="text" 
                                    className="w-full bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white px-6 py-4 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all placeholder:text-zinc-400 dark:placeholder:text-zinc-500" 
                                    placeholder="Jane Doe" 
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-widest ml-1">Email Address</label>
                                <input 
                                    type="email" 
                                    className="w-full bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white px-6 py-4 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all placeholder:text-zinc-400 dark:placeholder:text-zinc-500" 
                                    placeholder="jane@example.com" 
                                />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <label className="text-[10px] font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-widest ml-1">Message Body</label>
                            <textarea 
                                rows="5" 
                                className="w-full bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white px-6 py-4 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all placeholder:text-zinc-400 dark:placeholder:text-zinc-500" 
                                placeholder="Describe your inquiry..."
                            ></textarea>
                        </div>

                        <motion.button 
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                            className="w-full py-5 tech-button-primary rounded-xl font-bold text-lg flex items-center justify-center gap-3"
                        >
                            <HiPaperAirplane className="text-xl" />
                            Send Message
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
