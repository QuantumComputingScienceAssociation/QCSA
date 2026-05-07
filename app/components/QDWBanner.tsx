'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function QDWBanner() {
  const [dismissed, setDismissed] = useState(false);

  return (
    <AnimatePresence>
      {!dismissed && (
        <motion.section
          className="relative overflow-hidden bg-[#04102b] py-14 px-4 sm:px-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, height: 0, paddingTop: 0, paddingBottom: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Glowing orbs */}
          <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#234285] opacity-20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-indigo-500 opacity-15 blur-3xl" />
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-blue-600 opacity-10 blur-3xl rounded-full" />

          {/* Dismiss button */}
          <button
            onClick={() => setDismissed(true)}
            className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors text-xl leading-none z-10"
            aria-label="Dismiss banner"
          >
            ✕
          </button>

          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">

            {/* Left — text */}
            <div className="flex-1 text-center lg:text-left">
              {/* Label */}
              <motion.div
                className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs font-semibold uppercase tracking-widest rounded-full px-4 py-1.5 mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse inline-block" />
                Upcoming Event
              </motion.div>

              <motion.h2
                className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-400">
                  Quantum Device
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
                  Workshop 2026
                </span>
              </motion.h2>

              <motion.p
                className="text-white/60 text-base sm:text-lg max-w-md mx-auto lg:mx-0 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Join QCSA at UCLA for a day of cutting-edge talks, hands-on demos, and networking
                with researchers, engineers, and students leading the quantum revolution.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-3 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <a
                  href="https://qdc-qcsa.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-[#234285] font-bold text-sm px-7 py-3 rounded-full shadow-lg hover:bg-blue-50 active:scale-95 transition-all duration-200"
                >
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 0 1 0-1.06L11.44 7.5H5.75a.75.75 0 0 1 0-1.5h7.5a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-1.5 0V8.56l-6.22 6.22a.75.75 0 0 1-1.06 0Z" clipRule="evenodd" />
                  </svg>
                </a>
              </motion.div>
            </div>

            {/* Right — poster */}
            <motion.div
              className="relative flex-shrink-0 w-96 sm:w-[480px] lg:w-[560px]"
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: -2 }}
              transition={{ delay: 0.3, duration: 0.6, type: 'spring', stiffness: 120 }}
              whileHover={{ rotate: 0, scale: 1.04, transition: { duration: 0.3 } }}
            >
              {/* Glow ring behind poster */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 opacity-30 blur-xl scale-110" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src="/qdw2026Poster.png"
                  alt="Quantum Device Workshop 2026 Poster"
                  width={560}
                  height={780}
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>

          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
