"use client";

import { useState, type ReactNode } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Clock, Mail, MapPin, Phone } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { FooterData } from '../../types';

const socialIcons: Record<string, typeof FaFacebookF> = {
  facebook: FaFacebookF,
  linkedin: FaLinkedinIn,
  instagram: FaInstagram,
  youtube: FaYoutube,
};

function ContactIcon({ children }: { children: ReactNode }) {
  return <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#16306a] text-[#f5c451]">{children}</span>;
}

function Accordion({ title, children }: { title: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/10 lg:border-0">
      <button type="button" onClick={() => setOpen((v) => !v)} className="flex w-full items-center justify-between py-4 text-left lg:hidden">
        <span className="text-[18px] font-bold">{title}</span>
        <ChevronDown size={18} className={`text-[#f5c451] transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className="hidden lg:block">
        <h3 className="text-[18px] font-bold">{title}</h3>
        <span className="mt-2 block h-[3px] w-8 rounded-full bg-[#f5c451]" />
      </div>
      <div className="hidden lg:block">{children}</div>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="overflow-hidden lg:hidden"
          >
            <div className="pb-4">{children}</div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default function Footer({ data }: { data: FooterData }) {
  return (
    <footer className="relative bg-[#071a4a] text-white">
      <div className="mx-auto grid max-w-[1180px] gap-2 px-4 py-8 sm:px-5 lg:grid-cols-[1fr_auto_auto_1fr] lg:gap-16 lg:py-12">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-4 min-w-0 lg:mb-0">
          <motion.img src={data.logo_image} alt={data.logo_text} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="h-[62px] w-auto max-w-[240px] object-contain object-left sm:h-[74px] lg:h-[96px] lg:max-w-none" />
          <p className="mt-4 w-full text-[15px] font-normal leading-7 text-white/80 lg:max-w-[300px] lg:text-[16px] lg:leading-[1.65]">{data.description}</p>
          <div className="mt-5 flex gap-3">
            {data.socials.map((s, i) => {
              const Icon = socialIcons[s.icon] || FaFacebookF;
              return (
                <motion.a
                  key={s.icon}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.icon}
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  whileHover={{ y: -3, scale: 1.08 }}
                  className="grid h-11 w-11 place-items-center rounded-full bg-[#2f6adf] text-white"
                >
                  <Icon size={16} />
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        <motion.div className="lg:w-max" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
          <Accordion title="Quick Links">
          <ul className="mt-1 space-y-1.5 text-[13px] text-white/80 lg:mt-4">
            {data.quick_links.map((l, i) => (
              <motion.li key={l.name} initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 * i }}>
                <Link href={l.href} className="inline-flex items-center gap-2 transition-transform hover:translate-x-1">
                  <span className="text-[#f5c451]">›</span>
                  {l.name}
                </Link>
              </motion.li>
            ))}
          </ul>
          </Accordion>
        </motion.div>

        <motion.div className="lg:w-max" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.18 }}>
          <Accordion title="Our Services">
          <ul className="mt-1 space-y-1.5 text-[13px] text-white/80 lg:mt-4">
            {data.our_services.map((l, i) => (
              <motion.li key={l.name} initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 * i }}>
                <Link href={l.href} className="inline-flex items-center gap-2 transition-transform hover:translate-x-1">
                  <span className="text-[#f5c451]">›</span>
                  {l.name}
                </Link>
              </motion.li>
            ))}
          </ul>
          </Accordion>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.24 }}>
          <Accordion title="Contact Us">
          <ul className="mt-1 space-y-5 text-[16px] text-white/85 lg:mt-4 lg:space-y-6">
            <li className="flex items-center gap-3">
              <ContactIcon><Phone size={18} /></ContactIcon>
              {data.contact.phone}
            </li>
            <li className="flex items-center gap-3">
              <ContactIcon><Mail size={18} /></ContactIcon>
              {data.contact.email}
            </li>
            <li className="flex items-start gap-3">
              <ContactIcon><MapPin size={18} /></ContactIcon>
              <span className="max-w-[180px] leading-5">{data.contact.address}</span>
            </li>
            <li className="flex items-start gap-3">
              <ContactIcon><Clock size={18} /></ContactIcon>
              <span className="whitespace-pre-line leading-5">{data.contact.hours}</span>
            </li>
          </ul>
          </Accordion>
        </motion.div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto max-w-[1180px] px-4 py-4 text-[13px] text-white/60 sm:px-5">
          <p>{data.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
