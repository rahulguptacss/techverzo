"use client";

import type { ComponentType } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Cloud, Code2, PenTool, Smartphone, Users } from 'lucide-react';
import { ServiceCardsData } from '../../types';
import { fadeUp, inView, stagger } from '../../motion';

const icons: Record<string, ComponentType<{ size?: number }>> = {
  code: Code2,
  smartphone: Smartphone,
  pen: PenTool,
  cloud: Cloud,
  chart: BarChart3,
  users: Users,
};

export default function ServiceCards({ data }: { data: ServiceCardsData }) {
  return (
    <section className="bg-white py-6 sm:py-8">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-5">
        <div className="text-center">
          <span className="inline-flex rounded-full bg-[#ece8ff] px-4 py-1.5 text-[11px] font-bold tracking-[1.4px] text-[#5b4dff]">{data.subtitle}</span>
          <h2 className="mt-2 text-[32px] font-extrabold text-[#171a3a] sm:text-[42px]">
            {data.title} <span className="text-[#5b4dff]">{data.title_highlight}</span>
          </h2>
        </div>

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={inView} className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item) => {
            const Icon = icons[item.icon] || Code2;
            return (
              <motion.article key={item.title} variants={fadeUp} whileHover={{ y: -6 }} className="overflow-hidden rounded-[22px] bg-white text-center shadow-[0_10px_30px_rgba(23,26,58,0.08)]">
                <div className="relative">
                  <img src={item.image} alt="" className="h-[168px] w-full object-cover" />
                  <span className="absolute bottom-0 left-1/2 grid h-14 w-14 -translate-x-1/2 translate-y-1/2 place-items-center rounded-full bg-[#6d4dff] text-white shadow-lg">
                    <Icon size={22} />
                  </span>
                </div>
                <div className="px-6 pb-6 pt-10">
                  <h3 className="text-[18px] font-bold text-[#171a3a]">{item.title}</h3>
                  <p className="mt-2 text-[14px] leading-6 text-[#6d748c]">{item.description}</p>
                  <Link href={item.href || data.button.href} className="mt-4 inline-flex items-center gap-2 text-[14px] font-semibold text-[#5b4dff]">
                    {data.button.text}
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-[#f5b423] text-[#171a3a]">
                      <ArrowRight size={13} />
                    </span>
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
