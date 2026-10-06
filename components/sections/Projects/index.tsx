"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { ProjectsSectionData } from '../../types';
import { fadeUp, inView, stagger } from '../../motion';

const PAGE_SIZE = 6;

export default function Projects({ data, paginate = false }: { data: ProjectsSectionData; paginate?: boolean }) {
  const [page, setPage] = useState(1);
  const totalPages = paginate ? Math.ceil(data.items.length / PAGE_SIZE) : 1;
  const visible = paginate ? data.items.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE) : data.items;

  return (
    <section className="bg-[#f7f8fc] py-8 sm:py-10">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-5">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={inView} className="text-center">
          <span className="inline-flex rounded-full bg-[#ece8ff] px-4 py-1.5 text-[11px] font-bold tracking-[1.4px] text-[#5b4dff] sm:text-[12px]">
            {data.subtitle}
          </span>
          <h2 className="mt-3 text-[28px] font-extrabold text-[#1a1740] sm:text-[40px]">
            {data.title_line1} <span className="text-[#4b3dff]">{data.title_highlight}</span>
          </h2>
        </motion.div>

        <motion.div
          key={page}
          variants={stagger}
          initial="hidden"
          animate={paginate ? 'show' : undefined}
          whileInView={paginate ? undefined : 'show'}
          viewport={inView}
          className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {visible.map((item) => (
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

        {totalPages > 1 && (
          <div className="mt-8 flex items-center justify-center gap-2">
            <button
              type="button"
              aria-label="Previous"
              disabled={page === 1}
              onClick={() => setPage((current) => Math.max(1, current - 1))}
              className="grid h-10 w-10 place-items-center rounded-full bg-[#f3f1ff] text-[#171a3a] disabled:opacity-40"
            >
              <ChevronLeft size={18} />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => setPage(n)}
                className={`grid h-10 w-10 place-items-center rounded-full text-[14px] font-bold ${
                  n === page ? 'bg-[#6d4dff] text-white' : 'bg-[#f3f1ff] text-[#171a3a]'
                }`}
              >
                {n}
              </button>
            ))}
            <button
              type="button"
              aria-label="Next"
              disabled={page === totalPages}
              onClick={() => setPage((current) => Math.min(totalPages, current + 1))}
              className="grid h-10 w-10 place-items-center rounded-full bg-[#f3f1ff] text-[#171a3a] disabled:opacity-40"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
