import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    id: 1,
    role: "Technical Operations & Development Associate",
    company: "Hala Tech",
    location: "Chennai, India (Remote)",
    period: "09/2025 - 02/2026",
    details: [
      "Onboarded developers and set up Google Workspace & Slack for team collaboration.",
      "Assisted in frontend development, mobile responsiveness, and UI improvements.",
      "Performed manual QA testing and supported daily technical operations.",
    ],
  },
  {
    id: 2,
    role: "Software Development and IT Operation Engineer",
    company: "Sanyaa Infotech",
    location: "Bengaluru, India (Remote)",
    period: "03/2025 - 08/2025",
    details: [
      "Delivered end-to-end IT and software solutions for healthcare and aviation clients.",
      "Built and managed websites, Google Workspace, and custom internal tools.",
      "Developed a secure video management system for flight recordings.",
      "Handled on-site hardware integration, testing, and RMS server support.",
    ],
  },
];

const ExperienceCard = ({ exp, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.23, 1, 0.32, 1],
      }}
      viewport={{ once: true }}
      className="group relative pl-8 pb-16 last:pb-0"
    >
      {/* Animated Gradient Timeline */}
      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-zinc-200 dark:from-zinc-800 via-indigo-500/30 to-zinc-200 dark:to-zinc-800 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500 to-transparent opacity-60"
          animate={{
            y: ["-100%", "200%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
            delay: index * 0.5,
          }}
        />
      </div>

      {/* Enhanced Timeline Node */}
      <div
        className={`absolute -left-[6px] top-1.5 w-[12px] h-[12px] rounded-full transition-all duration-500 z-10 ${isOpen ? "bg-indigo-500 ring-4 ring-indigo-500/20 shadow-[0_0_20px_rgba(99,102,241,0.6)]" : "bg-zinc-300 dark:bg-zinc-700 ring-2 ring-zinc-200 dark:ring-zinc-600 group-hover:ring-indigo-500/40 group-hover:shadow-[0_0_12px_rgba(99,102,241,0.3)]"}`}
      >
        {isOpen && (
          <div className="absolute inset-0 rounded-full bg-indigo-500 animate-ping opacity-75"></div>
        )}
      </div>

      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`tech-glass-card p-8 cursor-pointer transition-all duration-500 ${isOpen ? "border-indigo-500/30 dark:border-indigo-400/30 bg-indigo-500/5 dark:bg-indigo-400/5" : "hover:bg-zinc-50 dark:hover:bg-zinc-800/50"}`}
      >
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 relative z-10">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white tracking-tight">
              {exp.role}
            </h3>
            <div className="text-lg text-zinc-600 dark:text-zinc-400 font-medium flex items-center gap-2">
              <span className="text-zinc-800 dark:text-zinc-200">{exp.company}</span>
              <span className="text-zinc-400 dark:text-zinc-600">•</span>
              <span className="text-sm font-normal">{exp.location}</span>
            </div>
          </div>

          <div className="flex items-center justify-between md:flex-col md:items-end gap-4">
            <div className="px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-[11px] font-bold text-indigo-700 dark:text-indigo-400 uppercase tracking-wider">
              {exp.period}
            </div>
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              className={`p-2 rounded-full transition-colors ${isOpen ? "text-indigo-600 dark:text-indigo-400 bg-indigo-500/10" : "text-zinc-500 dark:text-zinc-400"}`}
            >
              <FaChevronDown size={14} />
            </motion.div>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-8 pt-8 border-t border-zinc-200 dark:border-zinc-700">
                <ul className="space-y-5">
                  {exp.details.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start tech-body text-base leading-relaxed group/item"
                    >
                      <span className="mt-2.5 mr-4 w-1.5 h-1.5 rounded-full bg-indigo-500 opacity-60 group-hover/item:opacity-100 transition-opacity"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-32 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-24">
            <div className="tech-badge mb-8">
              <FaBriefcase className="w-3.5 h-3.5 mr-2" />
              <span>Career Pathway</span>
            </div>
            <h2 className="text-5xl md:text-7xl tech-heading text-zinc-900 dark:text-white mb-6">
              Professional{" "}
              <span className="gradient-tech-primary">Journey</span>
            </h2>
          </div>

          <div className="relative ml-2 md:ml-0">
            {experiences.map((exp, index) => (
              <ExperienceCard key={exp.id} exp={exp} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
