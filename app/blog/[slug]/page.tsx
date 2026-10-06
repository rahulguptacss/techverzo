import { notFound } from 'next/navigation';
import Topbar from '../../../components/sections/Topbar';
import Header from '../../../components/sections/Header';
import Footer from '../../../components/sections/Footer';
import BackToTop from '../../../components/ui/BackToTop';
import Breadcrumb from '../../../components/sections/Breadcrumb';
import BlogDetail from '../../../components/sections/BlogDetail';
import { common, sections } from '../../../components/types';
import type { BlogDetailItem } from '../../../components/types';

const posts = sections.blog_details as BlogDetailItem[];

export function generateStaticParams() {
  return posts.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = posts.find((entry) => entry.slug === slug);
  return { title: item ? `TechVerzo - ${item.title}` : 'TechVerzo - Blog Details' };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = posts.find((entry) => entry.slug === slug);
  if (!item) notFound();

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-[#10215a]">
      <Topbar data={common.Topbar} />
      <Header data={common.Header} />
      <main className="w-full flex-1">
        <Breadcrumb data={sections.breadcrumb.blog_detail} image={sections.breadcrumb.image} />
        <BlogDetail item={item} posts={posts} />
      </main>
      <Footer data={common.Footer} />
      <BackToTop />
    </div>
  );
}
