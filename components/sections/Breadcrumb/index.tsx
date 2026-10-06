"use client";

import { motion } from 'framer-motion';
import { BreadcrumbData } from '../../types';

export default function Breadcrumb({ data, image }: { data: BreadcrumbData; image: string }) {
  return (
    <section className="relative -mt-[106px] flex min-h-[360px] items-end overflow-hidden bg-[#06245c] pt-[128px] pb-8 text-white sm:min-h-[380px] sm:items-center lg:min-h-[400px]">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover object-center sm:object-left" />
      <div className="absolute inset-0 bg-[#041a4a]/80 sm:bg-gradient-to-r sm:from-transparent sm:via-[#06245c]/20 sm:to-[#041a4a]" />
      <div className="absolute inset-y-0 right-0 hidden w-[68%] bg-gradient-to-l from-[#041a4a] via-[#06245c]/90 to-transparent sm:block" />
      <div className="relative z-10 mx-auto flex w-full max-w-[1180px] justify-start px-4 sm:justify-end sm:px-5">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="w-full max-w-[460px] text-left">
          <p className="text-[12px] font-bold tracking-[1.4px] text-[#f5b423] sm:text-[13px] sm:tracking-[1.6px]">{data.subtitle}</p>
          <span className="mt-2 block h-[3px] w-10 rounded-full bg-[#f5b423]" />
          <h1 className="mt-3 text-[32px] font-extrabold leading-[1.1] text-white sm:text-[52px] sm:leading-none">
            {data.title} <span className="text-[#f5b423]">{data.title_highlight}</span>
          </h1>
          <p className="mt-3 max-w-[420px] text-[14px] leading-7 text-white sm:text-[15px] sm:leading-[1.7] sm:text-white/90">{data.description}</p>
        </motion.div>
      </div>
    </section>
  );
}
