import Topbar from '../../components/sections/Topbar';
import Header from '../../components/sections/Header';
import Breadcrumb from '../../components/sections/Breadcrumb';
import Faq from '../../components/sections/Faq';
import Footer from '../../components/sections/Footer';
import BackToTop from '../../components/ui/BackToTop';
import { common, pages, sections } from '../../components/types';

export const metadata = {
  title: pages.faq.metadata.title,
};

export default function FaqPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-[#10215a]">
      <Topbar data={common.Topbar} />
      <Header data={common.Header} />
      <main className="w-full flex-1">
        <Breadcrumb data={sections.breadcrumb.faq} image={sections.breadcrumb.image} />
        <Faq data={sections.faq} />
      </main>
      <Footer data={common.Footer} />
      <BackToTop />
    </div>
  );
}
