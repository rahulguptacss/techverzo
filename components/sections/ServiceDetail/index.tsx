import Link from 'next/link';
import { Check, ChevronRight } from 'lucide-react';
import { ServiceDetailItem } from '../../types';

export default function ServiceDetail({ item, menu }: { item: ServiceDetailItem; menu: ServiceDetailItem[] }) {
  return (
    <section className="bg-white py-5 sm:py-6">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-5">
        <div className="grid items-start gap-4 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-5">
          <img src={item.image} alt="" className="order-1 h-[280px] w-full rounded-[18px] object-cover sm:h-[340px] lg:col-start-1 lg:row-start-1" />
          <aside className="order-3 z-20 space-y-2.5 self-start lg:sticky lg:top-[108px] lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:order-none">
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
          </aside>

          <div className="order-2 mt-4 max-w-[980px] lg:col-start-1 lg:row-start-2 lg:mt-5">
          <p className="text-[13px] font-bold uppercase tracking-[1.8px] text-[#6d4dff] sm:text-[14px]">{item.eyebrow}</p>
          <span className="mt-1.5 block h-[3px] w-10 rounded-full bg-[#6d4dff]" />
          <h2 className="mt-3 max-w-[820px] text-[36px] font-extrabold leading-[1.15] text-[#171a3a] sm:text-[48px]">
            <span className="block">{item.heading.replace(/\s+\S+$/, '')}</span>
            <span className="block">
              {item.heading.match(/\S+$/)?.[0]}{' '}
              <span className="text-[#2f4bff]">{item.heading_highlight}</span>
            </span>
          </h2>
          <p className="mt-3 text-[17px] leading-[1.75] text-[#7b86a8] sm:text-[18px]">{item.intro}</p>

          <h3 className="mt-5 text-[30px] font-extrabold leading-tight text-[#171a3a] sm:text-[34px]">
            A Partner in Your <span className="text-[#2f5bff]">Digital Transformation</span>
          </h3>
          <p className="mt-2 text-[17px] leading-[1.75] text-[#7b86a8] sm:text-[18px]">{item.partner_text}</p>

          <h3 className="mt-5 text-[30px] font-extrabold text-[#171a3a] sm:text-[34px]">{item.options_title}</h3>
          <span className="mt-1.5 block h-[3px] w-10 rounded-full bg-[#6d4dff]" />
          <p className="mt-2.5 text-[17px] leading-7 text-[#7b86a8] sm:text-[18px]">{item.options_intro}</p>
          <ul className="mt-3 grid max-w-[860px] gap-x-8 gap-y-2.5 sm:grid-cols-2">
            {item.options.map((option) => (
              <li key={option} className="flex items-center gap-3 text-[17px] leading-7 text-[#6d7a9a]">
                <span className="grid h-[22px] w-[22px] shrink-0 place-items-center rounded-full bg-[#5b4dff] text-white">
                  <Check size={13} strokeWidth={3} />
                </span>
                {option}
              </li>
            ))}
          </ul>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {item.gallery.slice(0, 2).map((src) => (
              <img key={src} src={src} alt="" className="h-[170px] w-full rounded-[14px] object-cover sm:h-[190px]" />
            ))}
          </div>

          <div className="mt-6 grid items-center gap-5 lg:grid-cols-[1fr_1fr] lg:gap-6">
            <div>
              <h3 className="text-[28px] font-extrabold leading-tight text-[#171a3a] sm:text-[32px]">{item.process_title}</h3>
              <span className="mt-2 block h-[3px] w-10 rounded-full bg-[#6d4dff]" />
              <p className="mt-2.5 text-[17px] leading-[1.75] text-[#6d7a9a] sm:text-[18px]">{item.process_text}</p>
            </div>
            <div className="relative">
              <span className="absolute -left-4 top-6 h-24 w-24 rounded-[28px] bg-[#ece7ff]" />
              <span className="absolute -bottom-4 -right-2 h-28 w-28 rounded-[32px] bg-[#e4dcff]" />
              <img
                src={item.process_image}
                alt=""
                className="relative z-10 h-[230px] w-full rounded-[18px] object-cover sm:h-[270px]"
              />
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
