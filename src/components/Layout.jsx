import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Background from './Background';

const Layout = ({ children }) => {
    return (
        <div className="relative min-h-screen bg-gray-50 dark:bg-[#0a0a0b] text-gray-900 dark:text-white overflow-hidden selection:bg-[#007aff]/30 selection:text-white">
            <Background />

            <Navbar />
            
            <main className="relative z-10 pt-28">
                {children}
            </main>

            <Footer />
        </div>
    );
};

export default Layout;
