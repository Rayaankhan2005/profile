import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
    return (
        <motion.div 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-8"
        >
            <nav className="apple-nav rounded-full px-10 py-3.5 flex items-center justify-between w-full max-w-5xl shadow-xl">
                <div className="text-lg font-bold tracking-tight cursor-pointer flex items-center group">
                    <span className="text-white/90 hover:text-[#007aff] transition-colors duration-300 uppercase tracking-[0.2em] text-xs font-black">portfolio</span>
                </div>
                
                <ul className="hidden md:flex space-x-12 text-[13px] font-semibold text-white/50">
                    {['Home', 'Experience', 'Education', 'Skills'].map((item) => (
                        <li key={item}>
                            <a 
                                href={`#${item.toLowerCase()}`} 
                                className="relative hover:text-white transition-colors duration-300 py-1 group inline-block"
                            >
                                {item}
                                <span className="absolute bottom-[-6px] left-0 w-0 h-[1.5px] bg-[#007aff] transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center space-x-6">
                   <motion.a 
                        whileHover={{ scale: 1.1 }} 
                        href="https://github.com/Rayaankhan2005" target="_blank"
                        className="text-white/40 hover:text-[#007aff] transition-colors duration-300"
                    >
                        <FaGithub size={20} />
                    </motion.a>
                   <motion.a 
                        whileHover={{ scale: 1.1 }} 
                        href="https://www.linkedin.com/in/rayaan-khan-181865204" target="_blank"
                        className="text-white/40 hover:text-[#007aff] transition-colors duration-300"
                    >
                        <FaLinkedin size={20} />
                    </motion.a>
                </div>
            </nav>
        </motion.div>
    );
};

export default Navbar;
