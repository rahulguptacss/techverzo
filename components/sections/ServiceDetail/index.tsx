import Link from 'next/link';
import { Check, ChevronRight } from 'lucide-react';
import { ServiceDetailItem } from '../../types';

export default function ServiceDetail({ item, menu }: { item: ServiceDetailItem; menu: ServiceDetailItem[] }) {
  return (
    <section className="bg-white py-8 sm:py-10">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-5">
        <div className="grid items-start gap-5 lg:grid-cols-[1.35fr_0.75fr]">
          <img src={item.image} alt="" className="h-[280px] w-full rounded-[18px] object-cover sm:h-[340px]" />
          <div className="sticky top-[120px] space-y-2.5">
            {menu.map((link) => {
              const active = link.slug === item.slug;
              return (
                <Link
                  key={link.slug}
                  href={`/services/${link.slug}`}
                  className={`flex items-center justify-between rounded-[14px] border px-4 py-3.5 text-[15px] font-semibold ${active ? 'border-[#6d4dff] bg-[#6d4dff] text-white shadow-[0_8px_18px_rgba(109,77,255,0.28)]' : 'border-[#eceef5] bg-white text-[#1c2140] shadow-[0_4px_14px_rgba(23,26,58,0.04)]'}`}
                >
                  {link.title}
                  <ChevronRight size={18} className={active ? 'text-white' : 'text-[#8b93a7]'} />
                </Link>
              );
            })}
          </div>
        </div>

        <p className="mt-8 text-[12px] font-bold tracking-[1.6px] text-[#6d4dff]">{item.eyebrow}</p>
        <h2 className="mt-2 max-w-[760px] text-[30px] font-extrabold leading-[1.2] text-[#171a3a] sm:text-[40px]">
          {item.heading} <span className="text-[#3154f5]">{item.heading_highlight}</span>
        </h2>
        <p className="mt-4 max-w-[860px] text-[15px] leading-7 text-[#5c647c]">{item.intro}</p>

        <h3 className="mt-7 text-[24px] font-extrabold text-[#171a3a] sm:text-[28px]">{item.partner_title}</h3>
        <p className="mt-3 max-w-[860px] text-[15px] leading-7 text-[#5c647c]">{item.partner_text}</p>

        <h3 className="mt-7 text-[24px] font-extrabold text-[#171a3a] sm:text-[28px]">{item.options_title}</h3>
        <p className="mt-3 text-[15px] text-[#5c647c]">{item.options_intro}</p>
        <ul className="mt-4 space-y-3">
          {item.options.map((option) => (
            <li key={option} className="flex items-center gap-3 text-[15px] text-[#243056]">
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#6d4dff] text-white">
                <Check size={14} />
              </span>
              {option}
            </li>
          ))}
        </ul>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {item.gallery.map((src) => (
            <img key={src} src={src} alt="" className="h-[160px] w-full rounded-[16px] object-cover sm:h-[180px]" />
          ))}
        </div>

        <div className="mt-10 grid items-center gap-6 lg:grid-cols-2">
          <div>
            <h3 className="text-[26px] font-extrabold text-[#171a3a] sm:text-[32px]">{item.process_title}</h3>
            <p className="mt-3 text-[15px] leading-7 text-[#5c647c]">{item.process_text}</p>
          </div>
          <img src={item.process_image} alt="" className="h-[240px] w-full rounded-[18px] object-cover sm:h-[280px]" />
        </div>
      </div>
    </section>
  );
}
