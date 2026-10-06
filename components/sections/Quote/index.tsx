'use client';

import { FormEvent, useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Calendar, Clock, Lock, Mail, MessageSquare, Phone, Settings, Shield, User, Users } from 'lucide-react';
import { fadeUp, inView, stagger } from '../../motion';
import ServiceSelect from '../../ui/ServiceSelect';
import { QuoteData } from '../../types';

const pointIcons = { clock: Clock, shield: Shield, users: Users };

const field = 'flex h-12 items-center gap-2 rounded-[8px] border border-white/25 bg-white px-3 text-[14px] text-[#24315c]';

function DateTimeField({ name, type, placeholder, icon: Icon }: { name: string; type: 'date' | 'time'; placeholder: string; icon: LucideIcon }) {
  const [value, setValue] = useState('');
  return (
    <label className={`${field} relative`}>
      <Icon size={16} className="shrink-0 text-[#8b93a7]" />
      {!value && <span className="pointer-events-none absolute left-9 text-[#8b93a7]">{placeholder}</span>}
      <input
        type={type}
        name={name}
        value={value}
        aria-label={placeholder}
        onChange={(event) => setValue(event.target.value)}
        className={`relative min-w-0 w-full bg-transparent outline-none [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-0 ${value ? 'text-[#24315c]' : 'text-transparent'}`}
      />
    </label>
  );
}

export default function Quote({ data }: { data: QuoteData }) {
  const router = useRouter();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push('/thank-you');
  };

  return (
    <section className="overflow-x-hidden bg-white py-8 sm:py-12">
      <div className="mx-auto grid max-w-[1240px] items-start gap-8 px-4 sm:px-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={inView}>
          <p className="flex items-center gap-2 text-[12px] font-bold tracking-[1.6px] text-[#5b4dff]">
            <span className="h-[2px] w-7 bg-[#5b4dff]" />
            {data.eyebrow}
          </p>
          <h2 className="mt-3 max-w-[460px] text-[28px] font-extrabold leading-[1.1] text-[#171a3a] sm:text-[46px] sm:leading-[1.05]">
            {data.title} <span className="text-[#5b4dff]">{data.title_highlight}</span>
          </h2>
          <p className="mt-4 max-w-[460px] text-[15px] leading-7 text-[#6d7a9a] sm:text-[16px]">{data.description}</p>

          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={inView} className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5">
            {data.points.map((point) => {
              const Icon = pointIcons[point.icon as keyof typeof pointIcons] || Clock;
              return (
              <motion.div
                key={point.title}
                variants={fadeUp}
                className="min-w-0 sm:border-l sm:border-[#eceef5] sm:pl-4 sm:first:border-0 sm:first:pl-0"
              >
                <span className="grid h-12 w-12 place-items-center rounded-full bg-[#ece8ff] text-[#5b4dff]">
                  <Icon size={20} />
                </span>
                <h3 className="mt-3 text-[15px] font-bold text-[#171a3a]">{point.title}</h3>
                <p className="mt-1 text-[13px] leading-5 text-[#6d7a9a]">{point.text}</p>
              </motion.div>
            );
            })}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={inView} className="mt-8 grid overflow-hidden rounded-[12px] bg-[#f6f7fb] sm:grid-cols-[1.15fr_0.85fr]">
            <motion.img src={data.image} alt="" initial={{ scale: 1.06 }} whileInView={{ scale: 1 }} viewport={inView} transition={{ duration: 0.6 }} className="h-[160px] w-full object-cover sm:h-[210px]" />
            <div className="flex flex-col justify-center px-4 py-4 sm:px-5 sm:py-5">
              <span className="mb-3 h-[2px] w-7 bg-[#5b4dff]" />
              <p className="text-[16px] font-medium leading-7 text-[#24315c] sm:text-[18px]">“{data.quote}”</p>
              <p className="mt-4 whitespace-pre-line text-[12px] font-bold tracking-[1.2px] text-[#8b93a7]">{data.quote_note}</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inView}
          transition={{ duration: 0.55 }}
          className="rounded-[16px] bg-[#5b4dff] p-4 text-white shadow-[0_16px_40px_rgba(91,77,255,0.18)] sm:p-6"
        >
          <p className="flex items-center gap-2 text-[12px] font-bold tracking-[1.4px] sm:tracking-[1.6px]">
            <span className="h-[2px] w-7 bg-white" />
            {data.form_eyebrow}
          </p>
          <h3 className="mt-2 text-[26px] font-extrabold sm:text-[38px]">{data.form_title}</h3>
          <p className="mt-1 text-[14px] text-white/80">{data.form_text}</p>

          <div className="mt-5 grid grid-cols-1 gap-3 min-[480px]:grid-cols-2">
            <label className={field}>
              <User size={16} className="text-[#8b93a7]" />
              <input required name="name" placeholder={data.placeholders.name} className="min-w-0 w-full bg-transparent outline-none placeholder:text-[#8b93a7]" />
            </label>
            <label className={field}>
              <Phone size={16} className="text-[#8b93a7]" />
              <input required name="phone" inputMode="numeric" placeholder={data.placeholders.phone} onChange={(event) => { event.target.value = event.target.value.replace(/[^0-9]/g, ''); }} className="min-w-0 w-full bg-transparent outline-none placeholder:text-[#8b93a7]" />
            </label>
          </div>
          <label className={`${field} mt-3`}>
            <Mail size={16} className="text-[#8b93a7]" />
            <input required type="email" name="email" placeholder={data.placeholders.email} className="min-w-0 w-full bg-transparent outline-none placeholder:text-[#8b93a7]" />
          </label>
          <div data-select-field className={`${field} mt-3`}>
            <Settings size={16} className="shrink-0 text-[#8b93a7]" />
            <ServiceSelect name="service" placeholder={data.placeholders.service} options={data.services} tone="onPurple" />
          </div>
          <div className="mt-3 grid grid-cols-1 gap-3 min-[480px]:grid-cols-2">
            <DateTimeField name="date" type="date" placeholder={data.placeholders.date} icon={Calendar} />
            <DateTimeField name="time" type="time" placeholder={data.placeholders.time} icon={Clock} />
          </div>
          <label className="mt-3 flex items-start gap-2 rounded-[8px] border border-white/25 bg-white px-3 py-3 text-[14px] text-[#24315c]">
            <MessageSquare size={16} className="mt-0.5 text-[#8b93a7]" />
            <textarea name="message" placeholder={data.placeholders.message} className="h-24 w-full resize-none bg-transparent outline-none placeholder:text-[#8b93a7]" />
          </label>
          <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-[8px] bg-[#3d2fe0] text-[15px] font-bold">
            {data.submit} <span aria-hidden>→</span>
          </motion.button>
          <p className="mt-3 flex items-center justify-center gap-1.5 text-[12px] text-white/80">
            <Lock size={13} />
            {data.privacy}
          </p>
        </motion.form>
      </div>
    </section>
  );
}
