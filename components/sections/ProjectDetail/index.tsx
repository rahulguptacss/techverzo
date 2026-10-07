'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, ChevronRight } from 'lucide-react';
import { ProjectDetailItem } from '../../types';
import { fadeUp, inView } from '../../motion';

export default function ProjectDetail({ item, menu }: { item: ProjectDetailItem; menu: ProjectDetailItem[] }) {
  const headingStart = item.heading.replace(/\s+\S+$/, '');
  const headingLast = item.heading.match(/\S+$/)?.[0];

  return (
    <section className="bg-white pb-8 pt-4 sm:pb-10">
      <div className="mx-auto grid max-w-[1240px] items-start gap-4 px-4 sm:px-5 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-5">
        <div>
        <motion.img
          src={item.image}
          alt=""
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="h-[240px] w-full rounded-[16px] object-cover sm:h-[360px] lg:h-[420px]"
        />

        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={inView} className="mt-6 max-w-[860px]">
          <p className="text-[12px] font-bold uppercase tracking-[1.8px] text-[#6d4dff]">{item.eyebrow}</p>
          <span className="mt-1.5 block h-[3px] w-10 rounded-full bg-[#6d4dff]" />
          <h2 className="mt-3 text-[30px] font-extrabold leading-[1.15] text-[#171a3a] sm:text-[40px]">
            <span className="block">{headingStart}</span>
            <span className="block">
              {headingLast} <span className="text-[#2f4bff]">{item.heading_highlight}</span>
            </span>
          </h2>
          <p className="mt-3 text-[15px] leading-[1.7] text-[#7b86a8]">{item.intro}</p>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={inView} className="mt-6 max-w-[860px]">
          <h3 className="text-[24px] font-extrabold text-[#171a3a] sm:text-[28px]">
            A Partner in Your <span className="text-[#2f5bff]">Digital Transformation</span>
          </h3>
          <p className="mt-2 text-[15px] leading-[1.7] text-[#7b86a8]">{item.partner_text}</p>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={inView} className="mt-6 max-w-[720px]">
          <h3 className="text-[24px] font-extrabold text-[#171a3a] sm:text-[28px]">Service Options</h3>
          <span className="mt-1.5 block h-[3px] w-10 rounded-full bg-[#6d4dff]" />
          <p className="mt-3 text-[15px] leading-6 text-[#7b86a8]">{item.options_intro}</p>
          <ul className="mt-3 space-y-2.5">
            {item.options.map((option, index) => (
              <motion.li
                key={option}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={inView}
                transition={{ delay: index * 0.08, duration: 0.35 }}
                className="flex items-center gap-3 text-[15px] text-[#6d7a9a]"
              >
                <span className="grid h-[22px] w-[22px] shrink-0 place-items-center rounded-full bg-[#5b4dff] text-white">
                  <Check size={13} strokeWidth={3} />
                </span>
                {option}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {item.gallery.slice(0, 2).map((src, index) => (
            <motion.img
              key={src}
              src={src}
              alt=""
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={inView}
              transition={{ delay: index * 0.1, duration: 0.45 }}
              className="h-[180px] w-full rounded-[14px] object-cover sm:h-[210px]"
            />
          ))}
        </div>

        <div className="mt-8 grid items-center gap-6 lg:grid-cols-2">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={inView}>
            <h3 className="text-[24px] font-extrabold text-[#171a3a] sm:text-[28px]">Our Development Process</h3>
            <span className="mt-1.5 block h-[3px] w-10 rounded-full bg-[#6d4dff]" />
            <p className="mt-3 text-[15px] leading-[1.7] text-[#6d7a9a]">{item.process_text}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={inView}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <span className="absolute -left-3 top-5 h-20 w-20 rounded-[24px] bg-[#ece7ff]" />
            <span className="absolute -bottom-3 -right-1 h-24 w-24 rounded-[28px] bg-[#e4dcff]" />
            <img src={item.process_image} alt="" className="relative z-10 h-[230px] w-full rounded-[16px] object-cover sm:h-[260px]" />
          </motion.div>
        </div>
        </div>

        <aside className="z-20 space-y-2.5 self-start lg:sticky lg:top-[108px]">
          {menu.map((link) => {
            const active = link.slug === item.slug;
            return (
              <Link
                key={link.slug}
                href={`/projects/${link.slug}`}
                className={`flex items-center justify-between rounded-[14px] border px-4 py-3.5 text-[15px] font-semibold ${
                  active
                    ? 'border-[#6d4dff] bg-[#6d4dff] text-white shadow-[0_8px_18px_rgba(109,77,255,0.28)]'
                    : 'border-[#eceef5] bg-white text-[#1c2140] shadow-[0_4px_14px_rgba(23,26,58,0.04)]'
                }`}
              >
                {link.title}
                <ChevronRight size={18} className={active ? 'text-white' : 'text-[#8b93a7]'} />
              </Link>
            );
          })}
        </aside>
      </div>
    </section>
  );
}
