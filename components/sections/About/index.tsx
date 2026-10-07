"use client";

import type { ComponentType } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BarChart3, Lightbulb, Users } from 'lucide-react';
import { AboutSectionData } from '../../types';
import { fadeUp, inView, stagger } from '../../motion';

const icons: Record<string, { Icon: ComponentType<{ size?: number }>; bg: string }> = {
  users: { Icon: Users, bg: '#4b3dff' },
  bulb: { Icon: Lightbulb, bg: '#f5b423' },
  chart: { Icon: BarChart3, bg: '#4b3dff' },
};

export default function About({ data, showButton = true }: { data: AboutSectionData; showButton?: boolean }) {
  return (
    <section className="overflow-hidden bg-white py-10 sm:py-14 lg:py-16">
      <div className="mx-auto grid max-w-[1240px] items-center gap-8 px-4 sm:px-5 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={inView}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <motion.span
            initial={{ scale: 0.6, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={inView}
            transition={{ delay: 0.2, duration: 0.45 }}
            className="absolute -bottom-2 -left-2 h-16 w-14 rounded-2xl bg-[#f5b423] sm:-bottom-4 sm:-left-4 sm:h-32 sm:w-28"
          />
          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={inView}
            transition={{ delay: 0.35, type: 'spring', stiffness: 180 }}
            className="absolute -right-2 bottom-6 hidden h-16 w-16 rounded-full bg-[#efeaff] lg:block"
          />
          <motion.img
            src={data.image}
            alt=""
            initial={{ scale: 1.08, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={inView}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.02 }}
            className="relative z-10 h-[230px] w-full rounded-[18px] object-cover sm:h-[360px] sm:rounded-[22px] lg:h-[460px]"
          />
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={inView}>
          <motion.p variants={fadeUp} className="text-[12px] font-bold tracking-[1.8px] text-[#5b4dff]">{data.subtitle}</motion.p>
          <motion.h2 variants={fadeUp} className="mt-2 text-[24px] font-extrabold leading-[1.2] text-[#171a3a] sm:text-[32px] lg:text-[36px]">
            <span className="block">{data.title_line1}</span>
            <span className="block text-[#3b34d6]">{data.title_highlight}</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-3 max-w-[520px] text-[15px] leading-7 text-[#6d748c]">{data.description}</motion.p>
          <div className="mt-5 space-y-4">
            {data.features.map((f) => {
              const item = icons[f.icon] || icons.users;
              const Icon = item.Icon;
              return (
                <motion.div
                  variants={fadeUp}
                  key={f.title}
                  whileHover={{ x: 6 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                  className="flex items-start gap-3"
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={inView}
                    transition={{ type: 'spring', stiffness: 260, damping: 16 }}
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-white"
                    style={{ background: item.bg }}
                  >
                    <Icon size={16} />
                  </motion.span>
                  <div>
                    <h3 className="text-[15px] font-bold leading-5 text-[#171a3a] sm:text-[16px]">{f.title}</h3>
                    <p className="text-[13px] leading-6 text-[#6d748c] sm:text-[14px]">{f.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
          {showButton && (
            <motion.div variants={fadeUp} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="inline-block">
              <Link href={data.button.href} className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#f5b423] px-6 py-3 text-[15px] font-bold text-[#1a1a1a]">
                {data.button.text}
                <span aria-hidden>→</span>
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
