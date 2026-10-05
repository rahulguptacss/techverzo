"use client";

import type { ComponentType } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Cloud, Code2, Settings, ShieldCheck, Smartphone } from 'lucide-react';
import { ServicesSectionData } from '../../types';
import { fadeUp, inView, stagger } from '../../motion';

const icons: Record<string, ComponentType<{ size?: number; className?: string }>> = {
  code: Code2,
  smartphone: Smartphone,
  cloud: Cloud,
  gear: Settings,
  chart: BarChart3,
  shield: ShieldCheck,
};

export default function Services({ data }: { data: ServicesSectionData }) {
  return (
    <section className="bg-[#07102e] py-10 text-white lg:py-12">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-5">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={inView} className="mx-auto max-w-[720px] text-center">
          <p className="text-[12px] font-bold tracking-[2px] text-[#f5b423] sm:text-[13px]">{data.subtitle}</p>
          <span className="mx-auto mt-2 block h-[3px] w-12 rounded-full bg-[#f5b423] sm:w-14" />
          <h2 className="mt-3 text-[26px] font-extrabold leading-tight sm:text-[36px] lg:text-[44px]">
            {data.title_line1} <span className="text-[#f5b423]">{data.title_highlight}</span>
          </h2>
          <p className="mx-auto mt-3 max-w-[620px] text-[14px] leading-6 text-white/70 sm:text-[16px] sm:leading-7">{data.description}</p>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={inView} className="mt-8 grid gap-5 md:grid-cols-2">
          {data.items.map((item) => {
            const Icon = icons[item.icon] || Code2;
            return (
              <motion.article
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="flex items-start gap-3 rounded-[18px] px-4 py-4 sm:items-center sm:gap-5 sm:rounded-[22px] sm:px-6 sm:py-6"
                style={{
                  background: `linear-gradient(#121833, #121833) padding-box, linear-gradient(135deg, ${item.color} 0%, ${item.color}99 28%, ${item.color}33 62%, transparent 100%) border-box`,
                  border: '1.5px solid transparent',
                  boxShadow: `0 8px 24px rgba(0,0,0,0.28), 0 0 18px ${item.color}40, inset 0 1px 0 ${item.color}66, inset 0 -12px 24px rgba(0,0,0,0.25)`,
                }}
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full text-white sm:h-[72px] sm:w-[72px]" style={{ background: item.color }}>
                  <Icon size={20} className="sm:hidden" />
                  <Icon size={28} className="hidden sm:block" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-[16px] font-bold leading-tight sm:text-[20px]">{item.title}</h3>
                  <p className="mt-1 text-[13px] leading-5 text-white/75 sm:mt-1.5 sm:text-[15px] sm:leading-6">{item.description}</p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
