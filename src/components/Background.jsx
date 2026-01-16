import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Background = () => {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden bg-[#0a0a0b] pointer-events-none">
            {/* Soft Ambient Glows */}
            <motion.div
                animate={{
                    opacity: [0.1, 0.15, 0.1],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[-10%] left-[10%] w-[100vw] h-[100vw] rounded-full bg-gradient-to-br from-[#007aff]/10 to-transparent blur-[160px]"
            />
            
            <motion.div
                animate={{
                    opacity: [0.05, 0.1, 0.05],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-[-10%] right-[10%] w-[80vw] h-[80vw] rounded-full bg-gradient-to-tl from-[#5ac8fa]/05 to-transparent blur-[160px]"
            />

            {/* Cinematic Noise Overlay - Extremely Subtle */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            ></div>

            {/* Faint Grid - Barely Visible */}
            <div className="absolute inset-0 opacity-[0.1]"
                style={{
                    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
                                      linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)`,
                    backgroundSize: '120px 120px',
                    maskImage: 'radial-gradient(circle at center, black 30%, transparent 100%)'
                }}
            ></div>
        </div>
    );
};

export default Background;
