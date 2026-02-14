import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaAward, FaExternalLinkAlt } from 'react-icons/fa';

const certificates = [
    {
        id: 1,
        title: "Systems and Application Security",
        issuer: "ISC2",
        date: "Jul 3, 2024",
        link: "#",
        image: "/certificates/isc2-systems-security.png" 
    },
    {
        id: 2,
        title: "Networks and Communications Security",
        issuer: "ISC2",
        date: "Feb 22, 2024",
        link: "#",
        image: "/certificates/isc2-network-security.png"
    },
    {
        id: 3,
        title: "Aligning Asset and Risk Management",
        issuer: "ISC2",
        date: "Jul 4, 2024",
        link: "#",
        image: "/certificates/isc2-risk-management.png"
    },
    {
        id: 4,
        title: "Flutter Development",
        issuer: "Google Cloud",
        date: "May 23, 2024",
        link: "#",
        image: "/certificates/google-flutter.png"
    }
];

const Certificates = () => {
    return (
        <section id="certificates" className="py-32 relative">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
                    viewport={{ once: true }}
                >
                    <div className="text-center mb-24">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 text-[11px] font-bold uppercase tracking-widest text-gray-500 dark:text-[#86868b] mb-8">
                            Verified Credentials
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-tight text-apple-headline mb-6">
                            Professional <span className="text-indigo-600 dark:text-indigo-400">Certifications</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {certificates.map((cert, index) => (
                            <motion.div
                                key={cert.id}
                                initial={{ opacity: 0, scale: 0.98 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: index * 0.05, ease: [0.23, 1, 0.32, 1] }}
                                viewport={{ once: true }}
                                className="apple-glass-interactive overflow-hidden group border border-black/5 dark:border-white/5 hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-all duration-500"
                            >
                                <div className="h-56 overflow-hidden relative">
                                    <img 
                                        src={cert.image} 
                                        alt={cert.title} 
                                        className="w-full h-full object-contain bg-gray-100 dark:bg-[#1c1c1e]/50 transform scale-100 group-hover:scale-105 transition-transform duration-700 opacity-100 dark:opacity-80 group-hover:opacity-100 p-4"
                                    />
                                    <div className="absolute top-6 right-6 z-20 bg-gray-100 dark:bg-[#1c1c1e] p-2.5 rounded-2xl border border-black/5 dark:border-white/10 text-indigo-600 dark:text-indigo-400 shadow-xl">
                                        <FaAward size={18} />
                                    </div>
                                </div>
                                
                                <div className="p-8 space-y-4">
                                    <div className="px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider inline-block">
                                        {cert.date}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight mb-1">{cert.title}</h3>
                                        <p className="text-base text-gray-500 dark:text-[#86868b] font-medium">{cert.issuer}</p>
                                    </div>
                                    
                                    <div className="pt-6 border-t border-black/5 dark:border-white/5">
                                        <a 
                                            href={cert.link} 
                                            className="inline-flex items-center text-sm font-bold text-gray-600 dark:text-white/60 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                                        >
                                            Verify Credential <FaExternalLinkAlt className="ml-2 text-xs opacity-50" />
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

export default Certificates;
