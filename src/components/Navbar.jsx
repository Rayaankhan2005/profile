import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <motion.div 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-6"
        >
            <nav className="tech-nav rounded-2xl px-8 py-4 flex items-center justify-between w-full max-w-6xl">
                <div className="text-lg font-bold tracking-tight cursor-pointer flex items-center group">
                    <span className="text-zinc-900 dark:text-white font-black text-sm uppercase tracking-[0.15em] hover:text-indigo-600 transition-all duration-300">
                        Rayaan Khan
                    </span>
                </div>
                
                <ul className="hidden md:flex space-x-10 text-sm font-semibold">
                    {['Home', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                        <li key={item}>
                            <a 
                                href={`#${item.toLowerCase()}`} 
                                className="relative text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 py-1 group inline-block"
                            >
                                {item}
                                <span className="absolute bottom-[-6px] left-0 w-0 h-[2px] bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center space-x-5">
                    <button
                        onClick={toggleTheme}
                        className="text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 focus:outline-none p-2 rounded-lg hover:bg-indigo-500/10"
                    >
                        {theme === 'dark' ? <FaSun size={18} /> : <FaMoon size={18} />}
                    </button>
                    <motion.a 
                        whileHover={{ scale: 1.1, rotate: 5 }} 
                        href="https://github.com/Rayaankhan2005" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 p-2 rounded-lg hover:bg-indigo-500/10"
                    >
                        <FaGithub size={18} />
                    </motion.a>
                   <motion.a 
                        whileHover={{ scale: 1.1, rotate: -5 }} 
                        href="https://www.linkedin.com/in/rayaan-khan-181865204" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 p-2 rounded-lg hover:bg-indigo-500/10"
                    >
                        <FaLinkedin size={18} />
                    </motion.a>
                </div>
            </nav>
        </motion.div>
    );
};

export default Navbar;
