'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

interface GalleryItem {
  src: string;
  alt: string;
  category: string;
}

const photos: GalleryItem[] = [
  { src: '/gallery1.png', alt: 'QCSA Event', category: 'Events' },
  { src: '/gallery2.png', alt: 'QCSA Event', category: 'Events' },
  { src: '/gallery3.png', alt: 'QCSA Event', category: 'Events' },
  { src: '/gallery4.png', alt: 'QCSA Event', category: 'Events' },
//   { src: '/gallery5.png', alt: 'QCSA Event', category: 'Events' },
  { src: '/qcsa_acm_workshop.png', alt: 'ACM Quantum Workshop', category: 'Workshops' },
  { src: '/iquhack.png', alt: 'iQuHACK Hackathon', category: 'Hackathons' },
  { src: '/QHack_Graphic.png', alt: 'QHack', category: 'Hackathons' },
  { src: '/yquantum.png', alt: 'yQuantum', category: 'Hackathons' },
  { src: '/qube_poster.png', alt: 'Qube Poster', category: 'Posters' },
  { src: '/QuantumClasses_Graphic.png', alt: 'Quantum Classes', category: 'Workshops' },
  { src: '/QCSA_Flyer_Dolev_Bluvstein.jpg', alt: 'Dolev Bluvstein Talk', category: 'Talks' },
  { src: '/qcf-flyer-final.png', alt: 'QCF Flyer', category: 'Events' },
  { src: '/join-us.png', alt: 'Join QCSA', category: 'Posters' },
  { src: '/Newsletter_Graphic.png', alt: 'QCSA Newsletter', category: 'Posters' },
  { src: '/ucla_caltech.png', alt: 'UCLA x Caltech', category: 'Events' },
  { src: '/ucla_usc.png', alt: 'UCLA x USC', category: 'Events' },
  { src: '/ucla_acm.png', alt: 'UCLA x ACM', category: 'Workshops' },
];

const categories = ['All', ...Array.from(new Set(photos.map((p) => p.category)))];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const filtered =
    activeCategory === 'All' ? photos : photos.filter((p) => p.category === activeCategory);

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
              A look at QCSA events, workshops, hackathons, and more.
            </p>
          </motion.div>

          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors duration-200 ${
                  activeCategory === cat
                    ? 'bg-[#234285] text-white'
                    : 'bg-white text-[#234285] border border-[#234285]/30 hover:bg-[#234285]/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
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
