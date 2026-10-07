"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { BreadcrumbData } from '../../types';

export default function Breadcrumb({ data, image }: { data: BreadcrumbData; image: string }) {
  const label = data.title.trim().toLowerCase() === 'our'
    ? data.title_highlight
    : `${data.title} ${data.title_highlight}`.trim();

  return (
    <>
      <section className="relative -mt-[106px] flex min-h-[360px] items-end overflow-hidden bg-[#06245c] pt-[128px] pb-8 text-white sm:min-h-[380px] sm:items-center lg:min-h-[400px]">
        <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover object-center sm:object-left" />
        <div className="absolute inset-0 bg-[#041a4a]/45 sm:hidden" />
        <div className="absolute inset-y-0 right-0 hidden w-[55%] bg-gradient-to-l from-[#041a4a] via-[#06245c]/80 to-transparent sm:block" />
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
      <nav aria-label="Breadcrumb" className="border-t-[3px] border-[#0c1f4a] bg-white">
        <ol className="mx-auto flex max-w-[1180px] items-center gap-2.5 px-4 py-5 text-[15px] sm:px-5">
          <li>
            <Link href="/" className="text-[#a0a6b8] transition-colors hover:text-[#4b3dff]">
              Home
            </Link>
          </li>
          <li aria-hidden className="text-[#b7bdd0]">›</li>
          <li className="font-medium text-[#5b4dff]" aria-current="page">
            {label}
          </li>
        </ol>
      </nav>
    </>
  );
}
