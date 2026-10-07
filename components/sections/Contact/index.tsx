'use client';

import { FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { Mail, MapPin, Phone, Shield } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeUp, inView, stagger } from '../../motion';
import ServiceSelect from '../../ui/ServiceSelect';
import { ContactData } from '../../types';

const socialIcons = { facebook: FaFacebookF, instagram: FaInstagram, linkedin: FaLinkedinIn, youtube: FaYoutube };

export default function Contact({ data }: { data: ContactData }) {
  const router = useRouter();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push('/thank-you');
  };

  return (
    <section className="overflow-x-hidden bg-[#f7f8fc] py-8 sm:py-12">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-5">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={inView} className="max-w-[640px]">
          <p className="flex items-center gap-2 text-[12px] font-bold tracking-[1.4px] text-[#5b4dff]">
            <span className="h-[2px] w-6 bg-[#5b4dff]" />
            {data.eyebrow}
          </p>
          <h2 className="mt-3 text-[26px] font-extrabold leading-tight text-[#171a3a] sm:text-[42px]">{data.title}</h2>
          <p className="mt-3 text-[15px] leading-7 text-[#6d7a9a] sm:text-[16px]">{data.description}</p>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={inView} className="mt-6 grid grid-cols-2 gap-3 xl:grid-cols-4">
          {data.cards.map((card) => (
            <motion.div key={card.title} variants={fadeUp} whileHover={{ y: -4 }} className="min-w-0 rounded-[12px] border border-[#eceef5] bg-white px-4 py-4 shadow-[0_8px_24px_rgba(23,26,58,0.04)]">
              <p className="text-[13px] text-[#8b93a7]">{card.title}</p>
              <p className="mt-1 break-words text-[15px] font-bold text-[#171a3a]">{card.lines[0]}</p>
              {card.lines[1] ? (
                <p className={card.title === 'Our Location' ? 'mt-1 break-words text-[15px] font-bold text-[#171a3a]' : 'mt-1 text-[13px] leading-5 text-[#6d7a9a]'}>
                  {card.lines[1]}
                </p>
              ) : null}
            </motion.div>
          ))}
          <motion.div variants={fadeUp} whileHover={{ y: -4 }} className="rounded-[12px] border border-[#eceef5] bg-white px-4 py-4 shadow-[0_8px_24px_rgba(23,26,58,0.04)]">
            <p className="text-[13px] text-[#8b93a7]">{data.follow_label}</p>
            <div className="mt-3 flex gap-2">
              {data.socials.map(({ name, icon, href }) => {
                const Icon = socialIcons[icon as keyof typeof socialIcons] || FaFacebookF;
                return (
                <motion.a key={name} href={href} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.08 }} className="grid h-9 w-9 place-items-center rounded-full border border-[#e4e7f2] text-[#5b4dff]">
                  <Icon size={16} />
                </motion.a>
              );
              })}
            </div>
          </motion.div>
        </motion.div>

        <div className="mt-5 grid items-stretch gap-4 lg:grid-cols-2">
          <motion.form onSubmit={onSubmit} initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={inView} transition={{ duration: 0.5 }} className="rounded-[14px] border border-[#eceef5] bg-white p-4 shadow-[0_8px_24px_rgba(23,26,58,0.04)] sm:p-6">
            <p className="flex items-center gap-2 text-[12px] font-bold tracking-[1.4px] text-[#5b4dff]">
              <span className="h-[2px] w-6 bg-[#5b4dff]" />
              {data.form_eyebrow}
            </p>
            <h3 className="mt-2 text-[26px] font-extrabold text-[#171a3a] sm:text-[34px]">{data.form_title}</h3>
            <p className="mt-1 text-[14px] text-[#6d7a9a]">{data.form_text}</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <input required name="name" placeholder={data.placeholders.name} className="h-12 rounded-[8px] border border-[#e4e7f2] px-3 text-[14px] outline-none focus:border-[#5b4dff]" />
              <input required type="email" name="email" placeholder={data.placeholders.email} className="h-12 rounded-[8px] border border-[#e4e7f2] px-3 text-[14px] outline-none focus:border-[#5b4dff]" />
              <input required name="phone" inputMode="numeric" placeholder={data.placeholders.phone} onChange={(event) => { event.target.value = event.target.value.replace(/[^0-9]/g, ''); }} className="h-12 rounded-[8px] border border-[#e4e7f2] px-3 text-[14px] outline-none focus:border-[#5b4dff]" />
              <div data-select-field className="min-w-0">
                <ServiceSelect name="service" placeholder={data.placeholders.service} options={data.services} />
              </div>
            </div>
            <textarea name="message" placeholder={data.placeholders.message} className="mt-3 h-28 w-full rounded-[8px] border border-[#e4e7f2] px-3 py-3 text-[14px] outline-none focus:border-[#5b4dff]" />
            <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="mt-4 flex h-12 w-full items-center justify-center rounded-[8px] bg-[#5b4dff] text-[15px] font-bold text-white">
              {data.submit}
            </motion.button>
            <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-[12px] text-[#8b93a7]">
              <Shield size={13} />
              {data.privacy}
            </p>
          </motion.form>

          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={inView} transition={{ duration: 0.5 }} className="overflow-hidden rounded-[14px] bg-[#101533] text-white">
            <motion.img src={data.office_image} alt="" initial={{ scale: 1.06 }} whileInView={{ scale: 1 }} viewport={inView} transition={{ duration: 0.7 }} className="h-[190px] w-full object-cover sm:h-[250px]" />
            <div className="p-5 sm:p-6">
              <h3 className="text-[26px] font-extrabold sm:text-[30px]">{data.office_title}</h3>
              <p className="mt-2 text-[14px] leading-6 text-white/75">{data.office_text}</p>
              <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div className="space-y-3 text-[14px]">
                  <p className="flex gap-2"><MapPin size={16} className="mt-0.5 shrink-0 text-[#f5b423]" /><span><span className="font-bold text-white">{data.address_label}</span><br />{data.address}</span></p>
                  <p className="flex gap-2 whitespace-pre-line"><Mail size={16} className="mt-0.5 shrink-0 text-[#f5b423]" /><span><span className="font-bold text-white">{data.hours_label}</span><br />{data.hours}</span></p>
                </div>
                <a href={data.phone_href} className="inline-flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-[#5b4dff]"><Phone size={18} /></span>
                  <span className="block text-[16px] font-bold">{data.phone}</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={inView} className="mt-5 overflow-hidden rounded-[14px] border border-[#eceef5] bg-white">
          <iframe
            title="TechVerzo office map"
            src={data.map}
            className="h-[220px] w-full sm:h-[340px]"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}
