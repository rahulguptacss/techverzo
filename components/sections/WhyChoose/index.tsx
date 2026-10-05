"use client";

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { WhyChooseSectionData } from '../../types';
import { fadeUp, inView, stagger } from '../../motion';

function GearPeople() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden>
      <path fill="#5b4dff" d="M18 3.2l1.15 1.7 1.9-.55.55 1.9 1.7 1.15-1.15 1.7.55 1.9-1.9.55L19.15 13.2 18 14.35l-1.15-1.15-1.7 1.15-.55-1.9-1.9-.55.55-1.9L12.1 6.25l1.7-1.15.55-1.9 1.9.55L18 3.2z" />
      <circle cx="18" cy="8.8" r="2.15" fill="#eef0ff" />
      <path fill="#f5b423" d="M25.4 4.2l.55.85.95-.25.3.95.85.55-.55.85.25.95-.95.3-.55.85-.85-.55-.95.25-.3-.95-.85-.55.55-.85-.25-.95.95-.3.55-.85z" />
      <circle cx="13.2" cy="20.2" r="2.05" fill="#5b4dff" />
      <circle cx="22.8" cy="20.2" r="2.05" fill="#5b4dff" />
      <path fill="#5b4dff" d="M7.4 29.2c.7-3.3 3-5.2 5.8-5.2s5.1 1.9 5.8 5.2h-2.15c-.45-2-1.85-3.15-3.65-3.15s-3.2 1.15-3.65 3.15H7.4z" />
      <path fill="#5b4dff" d="M17 29.2c.7-3.3 3-5.2 5.8-5.2s5.1 1.9 5.8 5.2h-2.15c-.45-2-1.85-3.15-3.65-3.15s-3.2 1.15-3.65 3.15H17z" />
    </svg>
  );
}

function Bulb() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden>
      <path d="M18 4.2v3.2M8.6 9.4l2.3 2.3M27.4 9.4l-2.3 2.3M6.4 17.2h3.2M26.4 17.2h3.2" stroke="#f5b423" strokeWidth="1.8" strokeLinecap="round" />
      <path fill="#5b4dff" d="M18 9.4a6.4 6.4 0 0 0-3.5 11.7c.55.45.9 1.05.95 1.7h5.1c.05-.65.4-1.25.95-1.7A6.4 6.4 0 0 0 18 9.4zm-2.15 14.5h4.3v1.35h-4.3v-1.35zm.55 2.2h3.2v1.25h-3.2V26.1z" />
      <path d="M16.2 16.2c.5-1.5 1.6-2.3 3-2.1" stroke="#f5b423" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function Handshake() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden>
      <path fill="#5b4dff" d="M18 3.6l4.2 1.5v4.1c0 2.7-1.7 5.1-4.2 6-2.5-.9-4.2-3.3-4.2-6V5.1L18 3.6z" />
      <path d="M16.1 8.15l1.35 1.35 2.55-2.7" stroke="#f5b423" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path fill="#5b4dff" d="M6.2 20.2l5.4-3.6 3.1 2.1c.7.45 1.6.4 2.2-.15l1.1-1.05 1.1 1.05c.6.55 1.5.6 2.2.15l3.1-2.1 5.4 3.6-5.6 4.1-3.7-2.4-2.7 2.2-2.7-2.2-3.7 2.4-5.6-4.1z" />
      <path fill="#5b4dff" d="M10.2 24.6l1.7 5.6h2.2l-1.1-5.2-2.8-.4zm15.6 0l-1.7 5.6h-2.2l1.1-5.2 2.8-.4z" />
    </svg>
  );
}

const icons: Record<string, { node: ReactNode; bg: string }> = {
  users: { node: <GearPeople />, bg: '#eef0ff' },
  bulb: { node: <Bulb />, bg: '#fff4d8' },
  support: { node: <Handshake />, bg: '#eef0ff' },
};

export default function WhyChoose({ data }: { data: WhyChooseSectionData }) {
  return (
    <section className="bg-[#eef2fb] py-12 sm:py-16">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-5">
        <div className="text-center">
          <span className="inline-flex rounded-full bg-[#f5b423] px-4 py-1.5 text-[11px] font-bold tracking-[1.4px] text-[#1a1a1a]">{data.subtitle}</span>
          <h2 className="mx-auto mt-4 max-w-[720px] text-[28px] font-extrabold leading-[1.2] text-[#171a3a] sm:text-[40px]">
            <span className="block">{data.title_line1}</span>
            <span className="text-[#3154f5]">{data.title_highlight}</span>
            {data.title_line2 ? <span> {data.title_line2}</span> : null}
          </h2>
          <span className="mx-auto mt-3 flex h-[3px] w-20 overflow-hidden rounded-full">
            <span className="h-full w-1/2 bg-[#3154f5]" />
            <span className="h-full w-1/2 bg-[#f5b423]" />
          </span>
        </div>

        <div className="mt-10 grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={inView} className="space-y-4">
            {data.items.map((item) => {
              const icon = icons[item.icon] || icons.users;
              return (
                <motion.article key={item.title} variants={fadeUp} className="flex items-start gap-4 rounded-[22px] bg-white px-5 py-5 shadow-[0_8px_24px_rgba(23,26,58,0.04)]">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full" style={{ background: icon.bg }}>
                    {icon.node}
                  </span>
                  <div>
                    <h3 className="text-[18px] font-bold text-[#4b3dff]">{item.title}</h3>
                    <p className="mt-1 text-[14px] leading-6 text-[#6d748c]">{item.description}</p>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
          <motion.img
            src={data.image}
            alt=""
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={inView}
            className="h-[280px] w-full rounded-[22px] object-cover sm:h-[380px] lg:h-[460px]"
          />
        </div>
      </div>
    </section>
  );
}
