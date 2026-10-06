'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { fadeUp, inView, stagger } from '../../motion';
import { PhotoGalleryData } from '../../types';

export default function PhotoGallery({ data }: { data: PhotoGalleryData }) {
  const [active, setActive] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? data.images : data.images.slice(0, 9);
  const total = data.images.length;
  const showPrev = () => setActive((current) => (current === null ? 0 : (current - 1 + total) % total));
  const showNext = () => setActive((current) => (current === null ? 0 : (current + 1) % total));

  return (
    <section className="bg-white py-6 sm:py-8">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-5">
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mb-5 flex items-center gap-1.5 text-[13px] text-[#8b93a7]">
          <Link href="/" className="hover:text-[#6d4dff]">Home</Link>
          <ChevronRight size={14} />
          <span className="font-medium text-[#5b4dff]">Gallery</span>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={inView}>
          <span className="inline-flex rounded-full bg-[#ece8ff] px-3 py-1 text-[11px] font-bold tracking-[1.2px] text-[#5b4dff]">{data.badge}</span>
          <h2 className="mt-3 text-[28px] font-extrabold leading-tight text-[#171a3a] sm:text-[44px] sm:leading-none">
            <span className="relative inline-block">
              {data.title}
              <span className="absolute -bottom-2 left-0 h-[4px] w-[42px] rounded-full bg-[#5b4dff]" />
            </span>{' '}
            <span className="text-[#3b3dff]">{data.title_highlight}</span>
          </h2>
          <p className="mt-5 max-w-[720px] text-[17px] leading-8 text-[#6d7a9a] sm:text-[18px]">{data.description}</p>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={inView} className="mt-6 grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {visible.map((src, index) => (
            <motion.button
              key={`${src}-${index}`}
              type="button"
              variants={index >= 9 ? undefined : fadeUp}
              initial={index >= 9 ? { opacity: 0, y: 18 } : undefined}
              animate={index >= 9 ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.4, delay: index >= 9 ? (index - 9) * 0.06 : 0 }}
              whileHover={{ y: -4 }}
              onClick={() => setActive(index)}
              className="overflow-hidden rounded-[4px]"
            >
              <motion.img src={src} alt="" whileHover={{ scale: 1.05 }} transition={{ duration: 0.35 }} className="h-[168px] w-full object-cover sm:h-[190px]" />
            </motion.button>
          ))}
        </motion.div>
        {!showAll && data.images.length > 9 && (
          <div className="mt-6 text-center">
            <button type="button" onClick={() => setShowAll(true)} className="inline-flex h-11 items-center rounded-full bg-[#5b4dff] px-7 text-[14px] font-bold text-white">
              View More
            </button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 px-3 py-16 sm:px-4"
            onClick={() => setActive(null)}
          >
            <button type="button" aria-label="Close" onClick={() => setActive(null)} className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-white text-[#171a3a] sm:right-4 sm:top-4">
              <X size={18} />
            </button>
            <button
              type="button"
              aria-label="Previous"
              onClick={(event) => {
                event.stopPropagation();
                showPrev();
              }}
              className="absolute bottom-4 left-4 grid h-11 w-11 place-items-center rounded-full bg-white text-[#171a3a] sm:bottom-auto sm:left-6 sm:top-1/2 sm:-translate-y-1/2"
            >
              <ChevronLeft size={22} />
            </button>
            <motion.img
              key={data.images[active]}
              src={data.images[active]}
              alt=""
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
              className="max-h-[72vh] max-w-[92vw] rounded-[12px] object-contain sm:max-h-[80vh]"
            />
            <button
              type="button"
              aria-label="Next"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              className="absolute bottom-4 right-4 grid h-11 w-11 place-items-center rounded-full bg-white text-[#171a3a] sm:bottom-auto sm:right-6 sm:top-1/2 sm:-translate-y-1/2"
            >
              <ChevronRight size={22} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
