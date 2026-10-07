'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, ChevronDown } from 'lucide-react';
import { fadeUp, inView } from '../../motion';
import { FaqData } from '../../types';

export default function Faq({ data }: { data: FaqData }) {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-white py-8 sm:py-10">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-5">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-10">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={inView}>
            <span className="inline-flex rounded-full bg-[#ece8ff] px-3 py-1 text-[11px] font-bold tracking-[1.2px] text-[#5b4dff]">{data.badge}</span>
            <h2 className="mt-4 max-w-[420px] text-[32px] font-extrabold leading-[1.05] text-[#171a3a] sm:text-[46px]">
              {data.title} <span className="text-[#3b3dff]">{data.title_highlight}</span>
            </h2>
            <p className="mt-4 max-w-[460px] text-[16px] leading-8 text-[#6d7a9a] sm:text-[17px]">{data.description}</p>
            <ul className="mt-6 space-y-3">
              {data.points.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-[15px] font-medium text-[#24315c] sm:text-[16px]">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#5b4dff] text-white">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="space-y-3">
            {data.items.map((item, index) => {
              const isOpen = open === index;
              return (
                <motion.div
                  key={item.question}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={inView}
                  transition={{ delay: index * 0.06 }}
                  className="overflow-hidden rounded-[10px] border border-[#e6e8f2]"
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : index)}
                    className={`flex w-full items-center justify-between gap-4 px-4 py-3.5 text-left text-[15px] font-semibold sm:px-5 sm:text-[16px] ${isOpen ? 'bg-[#5b4dff] text-white' : 'bg-white text-[#24315c]'}`}
                  >
                    {item.question}
                    <ChevronDown size={18} className={`shrink-0 transition ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28 }}
                        className="overflow-hidden bg-white"
                      >
                        <div className="px-4 py-4 sm:px-5">
                          <p className="text-[14px] leading-7 text-[#6d7a9a] sm:text-[15px]">{item.answer}</p>
                          {item.image && <img src={item.image} alt="" className="mt-4 h-[170px] w-full rounded-[8px] object-cover sm:h-[210px]" />}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
