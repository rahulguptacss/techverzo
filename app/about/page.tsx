import Topbar from '../../components/sections/Topbar';
import Header from '../../components/sections/Header';
import Breadcrumb from '../../components/sections/Breadcrumb';
import About from '../../components/sections/About';
import WhyChoose from '../../components/sections/WhyChoose';
import Footer from '../../components/sections/Footer';
import BackToTop from '../../components/ui/BackToTop';
import { common, pages, sections } from '../../components/types';

export const metadata = {
  title: pages.about.metadata.title,
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-[#10215a]">
      <Topbar data={common.Topbar} />
      <Header data={common.Header} />
      <main className="w-full flex-1">
        <Breadcrumb data={sections.breadcrumb.about} image={sections.breadcrumb.image} />
        <About data={sections.about} showButton={false} />
        <WhyChoose data={sections.why_choose} />
      </main>
      <Footer data={common.Footer} />
      <BackToTop />
    </div>
  );
}
