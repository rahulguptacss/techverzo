"use client";

import { motion } from 'framer-motion';
import { BreadcrumbData } from '../../types';

export default function Breadcrumb({ data, image }: { data: BreadcrumbData; image: string }) {
  return (
    <section className="relative -mt-[106px] flex min-h-[340px] items-center overflow-hidden bg-[#06245c] pt-[118px] pb-8 text-white sm:min-h-[380px] lg:min-h-[400px]">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover object-left" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#06245c]/20 to-[#041a4a]" />
      <div className="absolute inset-y-0 right-0 w-[68%] bg-gradient-to-l from-[#041a4a] via-[#06245c]/90 to-transparent" />
      <div className="relative z-10 mx-auto flex w-full max-w-[1180px] justify-end px-5">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-[460px] text-left">
          <p className="text-[13px] font-bold tracking-[1.6px] text-[#f5b423]">{data.subtitle}</p>
          <span className="mt-2 block h-[3px] w-10 rounded-full bg-[#f5b423]" />
          <h1 className="mt-3 text-[40px] font-extrabold leading-none text-white sm:text-[52px]">
            {data.title} <span className="text-[#f5b423]">{data.title_highlight}</span>
          </h1>
          <p className="mt-3 max-w-[420px] text-[15px] leading-[1.7] text-white/90">{data.description}</p>
        </motion.div>
      </div>
    </section>
  );
}
