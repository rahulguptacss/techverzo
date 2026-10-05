"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ProjectsSectionData } from '../../types';
import { fadeUp, inView, stagger } from '../../motion';

export default function Projects({ data }: { data: ProjectsSectionData }) {
  return (
    <section className="bg-[#f7f8fc] py-8 sm:py-10">
      <div className="mx-auto max-w-[1280px] px-2 sm:px-3">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={inView} className="text-center">
          <span className="inline-flex rounded-full bg-[#ece8ff] px-4 py-1.5 text-[11px] font-bold tracking-[1.4px] text-[#5b4dff] sm:text-[12px]">
            {data.subtitle}
          </span>
          <h2 className="mt-3 text-[28px] font-extrabold text-[#1a1740] sm:text-[40px]">
            {data.title_line1} <span className="text-[#4b3dff]">{data.title_highlight}</span>
          </h2>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={inView} className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item) => (
            <motion.article
              key={item.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="overflow-hidden rounded-[14px] bg-white shadow-[0_12px_34px_rgba(55,40,120,0.08)]"
            >
              <img src={item.image} alt="" className="h-[156px] w-full object-cover sm:h-[172px]" />
              <div className="flex items-center justify-between gap-3 px-4 py-3.5">
                <div className="min-w-0">
                  <h3 className="text-[16px] font-bold leading-snug text-[#3a2ad6] sm:text-[17px]">{item.title}</h3>
                  <p className="mt-1 text-[13px] text-[#9aa0b5]">{item.category}</p>
                </div>
                <Link
                  href={item.href}
                  aria-label={item.title}
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-[8px] bg-[#f6c445] text-[#1c1c1c]"
                >
                  <ArrowRight size={18} strokeWidth={2.4} />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
