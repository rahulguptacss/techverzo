'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, MessageCircle, User } from 'lucide-react';
import { BlogDetailItem } from '../../types';
import { fadeUp, inView } from '../../motion';

export default function BlogDetail({ item, posts }: { item: BlogDetailItem; posts: BlogDetailItem[] }) {
  const recent = posts.filter((post) => post.slug !== item.slug).slice(0, 6);
  const [titleMain, titleRest] = item.title.includes(' for ') ? item.title.split(' for ') : [item.title, ''];

  return (
    <section className="bg-white py-5 sm:py-8">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-5">
        <div className="grid items-start gap-6 sm:gap-8 lg:grid-cols-[minmax(0,1fr)_300px]">
          <motion.article variants={fadeUp} initial="hidden" animate="show" className="min-w-0">
            <span className="inline-flex rounded-full bg-[#ece8ff] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.6px] text-[#5b4dff]">{item.eyebrow}</span>
            <h1 className="mt-3 max-w-[760px] text-[26px] font-extrabold leading-[1.15] text-[#171a3a] sm:text-[36px] lg:text-[42px]">
              <span className="block">{titleMain}</span>
              {titleRest ? (
                <span className="block">
                  for <span className="text-[#2f4bff]">{titleRest}</span>
                </span>
              ) : null}
            </h1>
            <div className="mt-3 flex flex-wrap items-center gap-3 text-[13px] text-[#8b93a7] sm:text-[14px]">
              <span className="inline-flex items-center gap-1.5"><Calendar size={15} className="text-[#5b4dff]" /> {item.date}</span>
              <span className="text-[#d5d8e2]">|</span>
              <span className="inline-flex items-center gap-1.5"><User size={15} className="text-[#5b4dff]" /> by {item.author}</span>
              <span className="text-[#d5d8e2]">|</span>
              <span className="inline-flex items-center gap-1.5"><MessageCircle size={15} className="text-[#5b4dff]" /> {item.comments}</span>
            </div>
            <motion.img
              src={item.image}
              alt=""
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={inView}
              transition={{ duration: 0.5 }}
              className="mt-4 h-[190px] w-full rounded-[14px] object-cover sm:h-[280px] sm:rounded-[16px] lg:h-[340px]"
            />
            <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={inView} className="mt-4 text-[14px] leading-7 text-[#5c6b86] sm:mt-5 sm:text-[15px]">{item.intro}</motion.p>
            <div className="mt-5 space-y-5 sm:mt-6">
              {item.sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={inView}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                >
                  <h2 className="flex items-start gap-3 text-[17px] font-extrabold text-[#171a3a] sm:text-[20px]">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#5b4dff] text-[13px] text-white sm:h-8 sm:w-8 sm:text-[14px]">{index + 1}</span>
                    {section.title}
                  </h2>
                  <p className="mt-2 pl-10 text-[14px] leading-7 text-[#5c6b86] sm:pl-11 sm:text-[15px]">{section.text}</p>
                </motion.div>
              ))}
            </div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={inView}>
              <h2 className="mt-6 text-[20px] font-extrabold text-[#171a3a] sm:mt-7 sm:text-[22px]">Conclusion</h2>
              <p className="mt-2 text-[14px] leading-7 text-[#5c6b86] sm:text-[15px]">{item.conclusion}</p>
            </motion.div>
          </motion.article>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={inView}
            transition={{ duration: 0.45 }}
            className="space-y-6 lg:sticky lg:top-[108px]"
          >
            <div className="rounded-[16px] border border-[#eceef5] p-4">
              <h3 className="text-[18px] font-extrabold text-[#171a3a]">Recent Posts</h3>
              <div className="mt-4 space-y-3">
                {recent.map((post, index) => (
                  <motion.div key={post.slug} initial={{ opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }} viewport={inView} transition={{ delay: index * 0.06 }}>
                  <Link href={`/blog/${post.slug}`} className="flex items-center gap-3">
                    <img src={post.image} alt="" className="h-14 w-16 shrink-0 rounded-[10px] object-cover" />
                    <span>
                      <span className="block text-[13px] font-bold leading-snug text-[#1d2448]">{post.title}</span>
                      <span className="mt-1 block text-[12px] text-[#9aa3b8]">{post.date}</span>
                    </span>
                  </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
