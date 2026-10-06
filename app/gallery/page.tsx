import Topbar from '../../components/sections/Topbar';
import Header from '../../components/sections/Header';
import Breadcrumb from '../../components/sections/Breadcrumb';
import PhotoGallery from '../../components/sections/PhotoGallery';
import VideoGallery from '../../components/sections/VideoGallery';
import Footer from '../../components/sections/Footer';
import BackToTop from '../../components/ui/BackToTop';
import { common, pages, sections } from '../../components/types';

export const metadata = {
  title: pages.gallery.metadata.title,
};

export default function GalleryPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-[#10215a]">
      <Topbar data={common.Topbar} />
      <Header data={common.Header} />
      <main className="w-full flex-1">
        <Breadcrumb data={sections.breadcrumb.gallery} image={sections.breadcrumb.image} />
        <PhotoGallery data={sections.photo_gallery} />
        <VideoGallery data={sections.video_gallery} />
      </main>
      <Footer data={common.Footer} />
      <BackToTop />
    </div>
  );
}
