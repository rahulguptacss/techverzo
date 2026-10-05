"use client";

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { TestimonialsSectionData } from '../../types';

export default function Testimonials({ data }: { data: TestimonialsSectionData }) {
  const reviews = data.reviews || [];
  const [index, setIndex] = useState(0);
  const review = reviews[index];

  useEffect(() => {
    if (reviews.length < 2) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % reviews.length), 4500);
    return () => clearInterval(timer);
  }, [reviews.length]);

  if (!review) return null;

  return (
    <section className="bg-[#0c1438] py-10 text-white sm:py-14">
      <div className="mx-auto grid max-w-[1180px] items-center gap-8 px-4 sm:px-5 lg:grid-cols-2 lg:gap-12">
        <div>
          <p className="text-[12px] font-bold tracking-[1.8px] text-[#f5b423]">{data.subtitle}</p>
          <h2 className="mt-3 text-[30px] font-extrabold leading-[1.15] sm:text-[40px]">
            <span className="block text-white">{data.title_line1}</span>
            <span className="block text-[#f5b423]">{data.title_highlight}</span>
          </h2>

          <div className="relative mt-5 min-h-[150px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="max-w-[500px] text-[14px] leading-7 text-white/80 sm:text-[15px]">{review.text}</p>
                <div className="mt-6 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <img src={review.avatar} alt="" className="h-12 w-12 rounded-full object-cover" />
                    <div>
                      <p className="font-bold">{review.author}</p>
                      <p className="text-[13px] text-white/60">{review.role}</p>
                    </div>
                  </div>
                  <span className="pr-2 text-[64px] font-serif leading-none text-white/25 sm:text-[80px]">”</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-5 flex gap-2">
            {reviews.map((item, i) => (
              <button
                key={item.author}
                type="button"
                aria-label={`Review ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2.5 w-2.5 rounded-full ${i === index ? 'bg-[#f5b423]' : 'bg-white/80'}`}
              />
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-[22px]">
          <AnimatePresence mode="wait">
            <motion.img
              key={review.image}
              src={review.image}
              alt=""
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45 }}
              className="h-[240px] w-full object-cover sm:h-[320px] lg:h-[360px]"
            />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
