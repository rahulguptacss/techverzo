import Topbar from '../../components/sections/Topbar';
import Header from '../../components/sections/Header';
import Breadcrumb from '../../components/sections/Breadcrumb';
import Projects from '../../components/sections/Projects';
import Footer from '../../components/sections/Footer';
import BackToTop from '../../components/ui/BackToTop';
import { common, pages, sections } from '../../components/types';

export const metadata = {
  title: pages.projects.metadata.title,
};

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-[#10215a]">
      <Topbar data={common.Topbar} />
      <Header data={common.Header} />
      <main className="w-full flex-1">
        <Breadcrumb data={sections.breadcrumb.projects} image={sections.breadcrumb.image} />
        <Projects data={sections.projects_page} paginate />
      </main>
      <Footer data={common.Footer} />
      <BackToTop />
    </div>
  );
}
