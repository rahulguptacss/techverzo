"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { BlogSectionData } from '../../types';
import { fadeUp, inView, stagger } from '../../motion';

export default function Blog({ data }: { data: BlogSectionData }) {
  return (
    <section className="bg-[#f7f8fc] py-10 sm:py-14">
      <div className="mx-auto grid max-w-[1220px] items-start gap-6 px-3 sm:px-4 lg:grid-cols-[300px_1fr] lg:gap-6">
        <div>
          <p className="text-[12px] font-extrabold tracking-[1.2px] text-[#f5b423]">{data.subtitle}</p>
          <h2 className="mt-2 text-[32px] font-extrabold leading-[1.12] text-[#161b3d] sm:text-[36px]">
            <span className="block">{data.title_line1}</span>
            <span className="block text-[#2f46f0]">{data.title_highlight}</span>
          </h2>
          <p className="mt-3 max-w-[280px] text-[14px] leading-6 text-[#6f7890]">{data.description}</p>
          <Link href={data.button.href} className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#f5c451] px-4 py-2 text-[13px] font-bold text-[#1a1a1a]">
            {data.button.text}
            <span aria-hidden>→</span>
          </Link>
          <div className="relative mt-4 h-[250px] w-full">
            <span className="absolute bottom-0 left-[52px] h-[190px] w-[190px] rounded-full bg-[#e4e7ff]" />
            <span className="absolute right-6 top-[78px] h-[58px] w-[58px] rounded-full bg-[#f5c451]" />
            <svg className="absolute left-3 top-[46px] text-[#2f46f0]" width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden>
              <path d="M10 8c2 4 2 4 4 8M17 5v10M24 8c-2 4-2 4-4 8" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
            </svg>
            <img src="/img/bloggirl.png" alt="" className="absolute bottom-0 left-2 z-10 h-[230px] w-[280px] object-contain object-left-bottom" />
          </div>
        </div>

        <div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={inView} className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {data.items.map((item) => (
              <motion.article key={item.title} variants={fadeUp} whileHover={{ y: -4 }} className="overflow-hidden rounded-[16px] bg-white shadow-[0_8px_24px_rgba(40,30,90,0.06)]">
                <div className="relative">
                  <img src={item.image} alt="" className="h-[118px] w-full object-cover" />
                  <span className="absolute left-3 top-3 flex h-[52px] w-[46px] flex-col items-center justify-center rounded-[14px] bg-white leading-none shadow-[0_6px_16px_rgba(20,30,70,0.12)]">
                    <span className="text-[16px] font-extrabold text-[#1c2448]">{item.day}</span>
                    <span className="mt-1 text-[11px] font-medium text-[#9aa3b8]">{item.month}</span>
                  </span>
                </div>
                <div className="px-2 pb-2 pt-3">
                  <h4 className="text-[14px] font-bold leading-snug text-[#1d2448]">{item.title}</h4>
                  <p className="mt-1.5 text-[12.5px] leading-5 text-[#7b8298]">{item.excerpt}</p>
                  <Link href={item.href} className="mt-2 inline-flex items-center gap-1 text-[13px] font-bold text-[#2f46f0]">
                    Read More <span aria-hidden>→</span>
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
