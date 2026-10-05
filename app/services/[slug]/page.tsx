import { notFound } from 'next/navigation';
import Topbar from '../../../components/sections/Topbar';
import Header from '../../../components/sections/Header';
import Footer from '../../../components/sections/Footer';
import BackToTop from '../../../components/ui/BackToTop';
import Breadcrumb from '../../../components/sections/Breadcrumb';
import ServiceDetail from '../../../components/sections/ServiceDetail';
import { common, sections } from '../../../components/types';
import type { ServiceDetailItem } from '../../../components/types';

const details = sections.service_details as ServiceDetailItem[];

export function generateStaticParams() {
  return details.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = details.find((entry) => entry.slug === slug);
  return { title: item ? `TechVerzo - ${item.title}` : 'TechVerzo - Service Details' };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = details.find((entry) => entry.slug === slug);
  if (!item) notFound();

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-[#10215a]">
      <Topbar data={common.Topbar} />
      <Header data={common.Header} />
      <main className="w-full flex-1">
        <Breadcrumb data={sections.breadcrumb.service_detail} image={sections.breadcrumb.image} />
        <ServiceDetail item={item} menu={details} />
      </main>
      <Footer data={common.Footer} />
      <BackToTop />
    </div>
  );
}
