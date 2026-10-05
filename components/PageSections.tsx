import React from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Projects from './sections/Projects';
import Testimonials from './sections/Testimonials';
import Blog from './sections/Blog';
import Breadcrumb from './sections/Breadcrumb';
import WhyChoose from './sections/WhyChoose';
import ServiceCards from './sections/ServiceCards';
import { PageMeta, sections } from './types';

const registry: Record<string, React.ComponentType<any>> = {
  Hero,
  About,
  Services,
  Projects,
  Testimonials,
  Blog,
  Breadcrumb,
  WhyChoose,
  ServiceCards,
};

function sectionProps(component: string, dataKey?: string) {
  switch (component) {
    case 'Hero':
      return { data: sections.hero };
    case 'About':
      return { data: sections.about };
    case 'Services':
      return { data: sections.services };
    case 'Projects':
      return { data: sections.projects };
    case 'Testimonials':
      return { data: sections.testimonials };
    case 'Blog':
      return { data: sections.blog };
    case 'Breadcrumb': {
      const crumbKey =
        dataKey === 'services' || dataKey === 'service_detail' ? dataKey : 'about';
      return { data: sections.breadcrumb[crumbKey], image: sections.breadcrumb.image };
    }
    case 'ServiceCards':
      return { data: sections.service_cards };
    case 'WhyChoose':
      return { data: sections.why_choose };
    default:
      return {};
  }
}

export default function PageSections({ page }: { page: PageMeta }) {
  return (
    <>
      {(page.components || []).map((item) => {
        const Cmp = registry[item.component];
        if (!Cmp) return null;
        return <Cmp key={item.key} {...sectionProps(item.component, item.dataKey)} />;
      })}
    </>
  );
}
