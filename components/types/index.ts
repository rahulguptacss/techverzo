import data from '../data/data.json';

export interface LinkType {
  name: string;
  href: string;
  sublinks?: LinkType[];
}

export interface TopbarData {
  contact_info: { icon: string; value: string }[];
  socials: { icon: string; href: string }[];
}

export interface HeaderData {
  logo_image: string;
  logo_text: string;
  logo_subtext?: string;
  links: LinkType[];
  button_text: string;
  button_link: string;
}

export interface FooterData {
  logo_image: string;
  logo_text: string;
  logo_subtext?: string;
  description: string;
  socials: { icon: string; href: string }[];
  quick_links: LinkType[];
  our_services: LinkType[];
  contact: { address: string; phone: string; email: string; hours?: string };
  copyright: string;
}

export interface HeroSectionData {
  slides: {
    subtitle: string;
    title_line1: string;
    title_highlight: string;
    title_line2: string;
    description: string;
    primary_button: { text: string; href: string };
    image: string;
  }[];
}

export interface BreadcrumbData {
  subtitle: string;
  title: string;
  title_highlight: string;
  description: string;
}

export interface WhyChooseSectionData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  title_line2?: string;
  image: string;
  items: { icon: string; title: string; description: string }[];
}

export interface AboutSectionData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  description: string;
  image: string;
  features: { icon: string; title: string; description: string }[];
  button: { text: string; href: string };
}

export interface ServicesSectionData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  description: string;
  items: { icon: string; color: string; title: string; description: string }[];
}

export interface ProjectsSectionData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  items: { title: string; category: string; image: string; href: string }[];
}

export interface TestimonialsSectionData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  reviews: { text: string; author: string; role: string; avatar: string; image: string }[];
}

export interface BlogSectionData {
  subtitle: string;
  title_line1: string;
  title_highlight: string;
  description: string;
  button: { text: string; href: string };
  image: string;
  badge: string;
  heading: string;
  heading_highlight: string;
  items: { title: string; excerpt: string; day: string; month: string; image: string; href: string }[];
}

export interface PageComponentRef {
  key: string;
  component: string;
  dataKey?: string;
}

export interface ServiceDetailItem {
  slug: string;
  title: string;
  image: string;
  eyebrow: string;
  heading: string;
  heading_highlight: string;
  intro: string;
  partner_title: string;
  partner_text: string;
  options_title: string;
  options_intro: string;
  options: string[];
  gallery: string[];
  process_title: string;
  process_text: string;
  process_image: string;
}

export interface ServiceCardsData {
  subtitle: string;
  title: string;
  title_highlight: string;
  button: { text: string; href: string };
  items: { icon: string; title: string; description: string; image: string; href: string }[];
}

export interface PageMeta {
  title: string;
  pageName: string;
  metadata?: { title: string };
  components?: PageComponentRef[];
}

export const common = data.common;
export const template = data.categories.Software.templateComponents['template-1'];
export const pages = template.pages;
export const sections = template.sections;
