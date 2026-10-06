"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import { HeaderData } from '../../types';

function Logo({ src, alt }: { src: string; alt: string }) {
  return <img src={src} alt={alt} className="h-11 w-auto object-contain lg:h-[64px]" />;
}

export default function Header({ data }: { data: HeaderData }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState<number | null>(null);
  const [mobileSub, setMobileSub] = useState<string | null>(null);

  const active = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <div className="sticky top-0 z-50 px-4 pt-4 pb-3 sm:px-5">
      <motion.header
        initial={{ y: -18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto flex h-[68px] max-w-[1180px] items-center justify-between rounded-full bg-white px-4 shadow-[0_10px_30px_rgba(20,24,60,0.12)] lg:h-[78px] lg:px-6"
      >
        <div className="flex w-full items-center justify-between lg:w-auto">
        <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.4 }}>
          <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
            <Logo src={data.logo_image} alt={data.logo_text} />
          </Link>
        </motion.div>
        <div className="flex items-center gap-2 lg:hidden">
          <Link href={data.button_link} onClick={() => setOpen(false)} className="inline-flex items-center gap-1 rounded-full bg-[#f5a623] px-3 py-2 text-[12px] font-bold text-white">
            {data.button_text}
            <span aria-hidden>›</span>
          </Link>
          <button className="grid h-10 w-10 place-items-center rounded-full border border-[#e6e8f0]" onClick={() => { setOpen((v) => !v); setMobileSub(null); }} aria-label="Menu">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        </div>

        <nav className="hidden items-center gap-8 lg:flex">
          {data.links.map((link, i) => (
            <motion.div
              key={link.name}
              className="relative"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 + i * 0.05, duration: 0.3 }}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
            >
              <Link
                href={link.href}
                className={`relative flex items-center gap-1 py-2 text-[15px] font-medium ${active(link.href) ? 'text-[#1c2440]' : 'text-[#3a4258]'}`}
              >
                {link.name}
                {link.sublinks ? <ChevronDown size={15} /> : null}
                {active(link.href) ? (
                  <motion.span layoutId="nav-underline" className="absolute -bottom-1 left-0 h-[3px] w-7 rounded-full bg-[#f5b423]" />
                ) : null}
              </Link>
              <AnimatePresence>
                {link.sublinks && hover === i ? (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 top-full min-w-[220px] rounded-2xl bg-white py-2 shadow-lg"
                  >
                    {link.sublinks.map((s) => (
                      <Link key={s.name} href={s.href} className="block px-4 py-2 text-sm text-[#3a4258] hover:bg-[#f6f7fb]">
                        {s.name}
                      </Link>
                    ))}
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </motion.div>
          ))}
        </nav>

        <motion.div initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 }} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="hidden lg:block">
          <Link href={data.button_link} className="inline-flex items-center gap-2 rounded-full bg-[#f5a623] px-5 py-2.5 text-[14px] font-bold text-white">
            {data.button_text}
            <span aria-hidden>›</span>
          </Link>
        </motion.div>

      </motion.header>

      <div className={`absolute left-4 right-4 top-[84px] z-20 grid overflow-hidden rounded-[24px] bg-white transition-[grid-template-rows] duration-300 ease-in-out sm:left-6 sm:right-6 lg:hidden ${open ? 'grid-rows-[1fr] shadow-[0_16px_40px_rgba(20,24,60,0.18)]' : 'pointer-events-none grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <div className="px-5 py-3">
            {data.links.map((link) => (
              <div key={link.name}>
                {link.sublinks?.length ? (
                  <button
                    type="button"
                    onClick={() => setMobileSub((v) => (v === link.name ? null : link.name))}
                    className="flex w-full items-center justify-between py-2.5 text-[16px] font-semibold text-[#1c2440]"
                  >
                    {link.name}
                    <ChevronDown size={16} className={`transition-transform duration-300 ${mobileSub === link.name ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <Link href={link.href} onClick={() => setOpen(false)} className="block py-2.5 text-[16px] font-semibold text-[#1c2440]">
                    {link.name}
                  </Link>
                )}
                {link.sublinks ? (
                  <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${mobileSub === link.name ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                    <div className="overflow-hidden">
                      {link.sublinks.map((s) => (
                        <Link key={s.name} href={s.href} onClick={() => setOpen(false)} className="block py-1.5 pl-4 text-[14px] text-[#8b93a7]">
                          {s.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
