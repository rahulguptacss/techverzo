import Topbar from '../../components/sections/Topbar';
import Header from '../../components/sections/Header';
import Breadcrumb from '../../components/sections/Breadcrumb';
import Quote from '../../components/sections/Quote';
import Footer from '../../components/sections/Footer';
import BackToTop from '../../components/ui/BackToTop';
import { common, pages, sections } from '../../components/types';

export const metadata = {
  title: pages.quote.metadata.title,
};

export default function QuotePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-[#10215a]">
      <Topbar data={common.Topbar} />
      <Header data={common.Header} />
      <main className="w-full flex-1">
        <Breadcrumb data={sections.breadcrumb.quote} image={sections.breadcrumb.image} />
        <Quote data={sections.quote} />
      </main>
      <Footer data={common.Footer} />
      <BackToTop />
    </div>
  );
}
