'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react';
import { fadeUp, inView, stagger } from '../../motion';
import { VideoGalleryData } from '../../types';

export default function VideoGallery({ data }: { data: VideoGalleryData }) {
  const [active, setActive] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const total = data.items.length;
  return (
    <section className="bg-white pb-10 pt-4 sm:pb-14">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-5">
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

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={inView} className="mt-6 grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item, index) => (
            <motion.button key={`${item.image}-${index}`} type="button" variants={fadeUp} whileHover={{ y: -4 }} onClick={() => setActive(index)} className="relative overflow-hidden rounded-[4px] text-left">
              <motion.img src={item.image} alt="" whileHover={{ scale: 1.05 }} transition={{ duration: 0.35 }} className="h-[180px] w-full object-cover sm:h-[210px]" />
              <motion.span whileHover={{ scale: 1.08 }} className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-[#5b4dff] shadow">
                <Play size={20} fill="currentColor" />
              </motion.span>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {mounted && createPortal(
        <AnimatePresence>
          {active !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[200] flex items-center justify-center bg-black/85 px-3 py-16 sm:px-4"
              onClick={() => setActive(null)}
            >
              <button type="button" aria-label="Close" onClick={() => setActive(null)} className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full bg-white text-[#171a3a] sm:right-4 sm:top-4">
                <X size={18} />
              </button>
              <button
                type="button"
                aria-label="Previous"
                onClick={(event) => {
                  event.stopPropagation();
                  setActive((current) => (current === null ? 0 : (current - 1 + total) % total));
                }}
                className="absolute bottom-4 left-4 z-10 grid h-11 w-11 place-items-center rounded-full bg-white text-[#171a3a] sm:bottom-auto sm:left-6 sm:top-1/2 sm:-translate-y-1/2"
              >
                <ChevronLeft size={22} />
              </button>
              <motion.video
                key={`${data.items[active].src}-${active}`}
                src={data.items[active].src}
                poster={data.items[active].image}
                controls
                autoPlay
                playsInline
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25 }}
                onClick={(event) => event.stopPropagation()}
                className="max-h-[68vh] w-full max-w-[920px] rounded-[12px] bg-black sm:max-h-[78vh]"
              />
              <button
                type="button"
                aria-label="Next"
                onClick={(event) => {
                  event.stopPropagation();
                  setActive((current) => (current === null ? 0 : (current + 1) % total));
                }}
                className="absolute bottom-4 right-4 z-10 grid h-11 w-11 place-items-center rounded-full bg-white text-[#171a3a] sm:bottom-auto sm:right-6 sm:top-1/2 sm:-translate-y-1/2"
              >
                <ChevronRight size={22} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
