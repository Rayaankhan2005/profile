import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="py-32 flex items-center justify-center relative">
            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
                    viewport={{ once: true }}
                    className="apple-glass-interactive p-10 md:p-20 border border-white/5"
                >
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 text-[11px] font-bold uppercase tracking-widest text-gray-500 dark:text-[#86868b] mb-8">
                            Connection
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-tight text-apple-headline mb-8">
                            Get in <span className="text-gradient-blue-cyan">Touch</span>
                        </h2>
                        <p className="text-gray-500 dark:text-[#86868b] text-lg max-w-xl mx-auto font-medium">
                            Actively seeking opportunities to contribute to engineering excellence as a Python Developer or Technical Support Specialist.
                        </p>
                    </div>

                    <form className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="text-[10px] font-bold text-gray-500 dark:text-[#86868b] uppercase tracking-widest ml-1">Full Name</label>
                                <input 
                                    type="text" 
                                    className="w-full bg-black/[0.02] dark:bg-white/[0.02] border border-black/10 dark:border-white/10 text-gray-900 dark:text-white px-6 py-4 rounded-2xl focus:outline-none focus:border-[#007aff] focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-black/30 dark:placeholder:text-white/20" 
                                    placeholder="Jane Doe" 
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-bold text-gray-500 dark:text-[#86868b] uppercase tracking-widest ml-1">Email Address</label>
                                <input 
                                    type="email" 
                                    className="w-full bg-black/[0.02] dark:bg-white/[0.02] border border-black/10 dark:border-white/10 text-gray-900 dark:text-white px-6 py-4 rounded-2xl focus:outline-none focus:border-[#007aff] focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-black/30 dark:placeholder:text-white/20" 
                                    placeholder="jane@example.com" 
                                />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <label className="text-[10px] font-bold text-gray-500 dark:text-[#86868b] uppercase tracking-widest ml-1">Message Body</label>
                            <textarea 
                                rows="5" 
                                className="w-full bg-black/[0.02] dark:bg-white/[0.02] border border-black/10 dark:border-white/10 text-gray-900 dark:text-white px-6 py-4 rounded-2xl focus:outline-none focus:border-[#007aff] focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-black/30 dark:placeholder:text-white/20" 
                                placeholder="Describe your inquiry..."
                            ></textarea>
                        </div>

                        <motion.button 
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                            className="w-full py-5 apple-button-primary rounded-2xl font-bold text-lg shadow-xl shadow-blue-500/20 text-white"
                        >
                            Send Correspondence
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
