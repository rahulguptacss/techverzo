"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HeroSectionData } from '../../types';

export default function Hero({ data }: { data: HeroSectionData }) {
  const slides = data.slides || [];
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = (next: number) => {
    if (!slides.length) return;
    setIndex((next + slides.length) % slides.length);
  };

  useEffect(() => {
    if (paused || slides.length < 2) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [paused, slides.length]);

  if (!slides.length) return null;

  return (
    <section
      className="relative -mt-[106px] flex min-h-[calc(100vh-48px)] flex-col justify-center overflow-hidden bg-[#071433] pt-[108px] pb-10 text-white sm:pt-[118px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <img
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=80"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[#071433]/82" />
      <div className="absolute inset-y-0 left-0 hidden w-[58%] bg-gradient-to-r from-[#071433] via-[#071433]/90 to-transparent lg:block" />

      <button
        type="button"
        onClick={() => go(index - 1)}
        aria-label="Previous slide"
        className="absolute left-2 top-1/2 z-20 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-white/10 text-white sm:left-5 sm:h-11 sm:w-11"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        type="button"
        onClick={() => go(index + 1)}
        aria-label="Next slide"
        className="absolute right-2 top-1/2 z-20 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-white/10 text-white sm:right-5 sm:h-11 sm:w-11"
      >
        <ChevronRight size={20} />
      </button>

      <div className="relative z-10 overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: `-${index * 100}%` }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {slides.map((slide) => (
            <div key={slide.title_highlight} className="w-full shrink-0 px-12 sm:px-16 lg:px-8">
              <div className="mx-auto grid max-w-[1180px] items-center gap-6 py-2 lg:grid-cols-2 lg:gap-10 lg:py-2">
                <div>
                  <p className="text-[12px] font-bold tracking-[2px] text-[#f5b423] sm:text-[13px]">{slide.subtitle}</p>
                  <h1 className="mt-3 text-[30px] font-extrabold leading-[1.15] sm:text-[40px] lg:text-[46px]">
                    <span className="block text-white">{slide.title_line1}</span>
                    {slide.title_line2 ? <span className="block text-white">{slide.title_line2}</span> : null}
                    <span className="mt-1 block text-[#f5b423]">{slide.title_highlight}</span>
                  </h1>
                  <p className="mt-4 max-w-[440px] text-[14px] leading-7 text-white/80 sm:text-[15px]">{slide.description}</p>
                  <Link href={slide.primary_button.href} className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#f5b423] px-6 py-3 text-sm font-bold text-[#1a1a1a]">
                    {slide.primary_button.text}
                    <span aria-hidden>→</span>
                  </Link>
                </div>
                <div className="overflow-hidden rounded-[18px] shadow-2xl sm:rounded-[22px]">
                  <img src={slide.image} alt="" className="h-[210px] w-full object-cover sm:h-[280px] lg:h-[320px]" />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="relative z-10 mt-6 flex justify-center gap-2 lg:absolute lg:bottom-8 lg:left-[max(2rem,calc((100%-1180px)/2))] lg:mt-0 lg:justify-start">
        {slides.map((slide, i) => (
          <button
            key={slide.title_highlight}
            type="button"
            aria-label={`Slide ${i + 1}`}
            onClick={() => go(i)}
            className={`h-2.5 rounded-full transition-all duration-300 ${i === index ? 'w-6 bg-[#f5b423]' : 'w-2.5 bg-white/70'}`}
          />
        ))}
      </div>
    </section>
  );
}
