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

export interface BlogDetailItem {
  slug: string;
  title: string;
  eyebrow: string;
  date: string;
  author: string;
  comments: string;
  image: string;
  intro: string;
  sections: { title: string; text: string }[];
  conclusion: string;
  category: string;
  day: string;
  month: string;
  excerpt: string;
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

export interface ProjectDetailItem {
  slug: string;
  title: string;
  category: string;
  image: string;
  eyebrow: string;
  heading: string;
  heading_highlight: string;
  intro: string;
  partner_text: string;
  options_intro: string;
  options: string[];
  gallery: string[];
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

export interface PhotoGalleryData {
  badge: string;
  title: string;
  title_highlight: string;
  description: string;
  images: string[];
}

export interface VideoGalleryData {
  badge: string;
  title: string;
  title_highlight: string;
  description: string;
  items: { image: string; duration: string; src: string }[];
}

export interface FaqData {
  crumb: string;
  badge: string;
  title: string;
  title_highlight: string;
  description: string;
  points: string[];
  items: { question: string; answer: string; image?: string }[];
}

export interface ContactData {
  eyebrow: string;
  title: string;
  description: string;
  cards: { title: string; lines: string[] }[];
  follow_label: string;
  socials: { name: string; icon: string; href: string }[];
  form_eyebrow: string;
  form_title: string;
  form_text: string;
  placeholders: { name: string; email: string; phone: string; service: string; message: string };
  services: string[];
  submit: string;
  privacy: string;
  office_image: string;
  office_title: string;
  office_text: string;
  address_label: string;
  address: string;
  hours_label: string;
  hours: string;
  phone: string;
  phone_href: string;
  map: string;
}

export interface QuoteData {
  eyebrow: string;
  title: string;
  title_highlight: string;
  description: string;
  points: { icon: string; title: string; text: string }[];
  image: string;
  quote: string;
  quote_note: string;
  form_eyebrow: string;
  form_title: string;
  form_text: string;
  placeholders: { name: string; phone: string; email: string; service: string; date: string; time: string; message: string };
  services: string[];
  submit: string;
  privacy: string;
}

export interface ThankYouData {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  button: string;
  href: string;
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
