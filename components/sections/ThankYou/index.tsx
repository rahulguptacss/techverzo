'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ThankYouData } from '../../types';

export default function ThankYou({ data }: { data: ThankYouData }) {
  return (
    <section className="bg-white px-4 pb-6 pt-1 sm:px-5 sm:pb-8">
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mx-auto w-full max-w-[720px] text-center">
        <motion.img
          src={data.image}
          alt=""
          className="mx-auto h-[150px] w-auto sm:h-[180px]"
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.45 }}
        />

        <h1 className="mt-2 text-[36px] font-extrabold text-[#171a3a] sm:text-[48px]">{data.title}</h1>
        <p className="mt-2 text-[18px] font-bold text-[#3b3dff] sm:text-[24px]">{data.subtitle}</p>
        <p className="mx-auto mt-4 max-w-[620px] text-[15px] leading-7 text-[#6d7a9a] sm:text-[17px]">{data.description}</p>
        <Link href={data.href} className="mt-8 inline-flex h-12 items-center justify-center rounded-[10px] bg-[#5b4dff] px-8 text-[15px] font-bold text-white">
          {data.button}
        </Link>
      </motion.div>
    </section>
  );
}
