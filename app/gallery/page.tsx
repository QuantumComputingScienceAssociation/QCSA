'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

interface GalleryItem {
  src: string;
  alt: string;
  branch: string;
}

const photos: GalleryItem[] = [
  { src: '/gallery1.png', alt: 'QCSA UCLA Event', branch: 'UCLA' },
  { src: '/gallery2.png', alt: 'QCSA UCLA Event', branch: 'UCLA' },
  { src: '/gallery3.png', alt: 'QCSA UCLA Event', branch: 'UCLA' },
  { src: '/gallery4.png', alt: 'QCSA UCLA Event', branch: 'UCLA' },
  { src: '/qcsa_acm_workshop.png', alt: 'ACM Quantum Workshop', branch: 'UCLA' },
  { src: '/iquhack.png', alt: 'iQuHACK Hackathon', branch: 'UCLA' },
  { src: '/QHack_Graphic.png', alt: 'QHack', branch: 'UCLA' },
  { src: '/yquantum.png', alt: 'yQuantum', branch: 'UCLA' },
  { src: '/qube_poster.png', alt: 'Qube Poster', branch: 'UCLA' },
  { src: '/QuantumClasses_Graphic.png', alt: 'Quantum Classes', branch: 'UCLA' },
  { src: '/QCSA_Flyer_Dolev_Bluvstein.jpg', alt: 'Dolev Bluvstein Talk', branch: 'UCLA' },
  { src: '/qcf-flyer-final.png', alt: 'QCF Flyer', branch: 'UCLA' },
  { src: '/join-us.png', alt: 'Join QCSA', branch: 'UCLA' },
  { src: '/Newsletter_Graphic.png', alt: 'QCSA Newsletter', branch: 'UCLA' },
  { src: '/ucla_acm.png', alt: 'UCLA x ACM', branch: 'UCLA' },
  { src: '/ucla_caltech.png', alt: 'UCLA x Caltech Collaboration', branch: 'Caltech' },
  { src: '/ucla_usc.png', alt: 'UCLA x USC Collaboration', branch: 'USC' },
  { src: '/qdw2026Poster.png', alt: 'QDW 2026', branch: 'QDC' },
];

const branches = ['All', 'UCLA', 'Caltech', 'USC', 'UCSD', 'UCSB', 'QDC'];

export default function GalleryPage() {
  const [activeBranch, setActiveBranch] = useState('All');
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const filtered =
    activeBranch === 'All' ? photos : photos.filter((p) => p.branch === activeBranch);

  return (
    <div className="min-h-screen bg-[#F3F8FF]">
      <Navbar />
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[#234285] mb-4">Gallery</h1>
            <p className="text-[#234285]/70 text-lg max-w-xl mx-auto">
              A look at QCSA events, workshops, hackathons, and more across our branches.
            </p>
          </motion.div>

          {/* Branch tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {branches.map((branch) => (
              <button
                key={branch}
                onClick={() => setActiveBranch(branch)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors duration-200 ${
                  activeBranch === branch
                    ? 'bg-[#234285] text-white'
                    : 'bg-white text-[#234285] border border-[#234285]/30 hover:bg-[#234285]/10'
                }`}
              >
                {branch}
              </button>
            ))}
          </div>

          {/* Grid or empty state */}
          {filtered.length === 0 ? (
            <motion.div
              key={activeBranch}
              className="flex flex-col items-center justify-center py-24 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative w-48 h-48 mb-6">
                <Image src="/quantum_atom.png" alt="" fill className="object-contain opacity-30" />
              </div>
              <h3 className="text-2xl font-bold text-[#234285] mb-2">Coming Soon</h3>
              <p className="text-[#234285]/60 max-w-sm">
                Photos from our {activeBranch} branch will be added here soon. Stay tuned!
              </p>
            </motion.div>
          ) : (
            <motion.div
              layout
              className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4"
            >
              <AnimatePresence>
                {filtered.map((photo, index) => (
                  <motion.div
                    key={photo.src}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                    className="break-inside-avoid cursor-pointer rounded-2xl overflow-hidden shadow-md group relative"
                    onClick={() => setLightbox(photo)}
                  >
                    <div className="relative w-full">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end">
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm font-semibold p-4">
                          {photo.alt}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setLightbox(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ backdropFilter: 'blur(4px)' }}
          >
            <motion.div
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <button
                className="absolute -top-10 right-0 text-white text-2xl font-bold hover:text-gray-300 transition-colors"
                onClick={() => setLightbox(null)}
                aria-label="Close lightbox"
              >
                ✕
              </button>
              <Image
                src={lightbox.src}
                alt={lightbox.alt}
                width={1200}
                height={800}
                className="w-full h-auto rounded-2xl shadow-2xl object-contain max-h-[85vh]"
              />
              <p className="text-white text-center mt-3 text-sm font-medium">{lightbox.alt}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
