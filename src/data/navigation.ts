import type { LucideIcon } from 'lucide-react';
import {
  CodeIcon,
  LayersIcon,
  SmartphoneIcon,
  PuzzleIcon,
  ServerIcon,
  SparklesIcon,
  TerminalIcon } from
'lucide-react';

export type NavService = {
  label: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

export const navServices: NavService[] = [
{
  label: 'Sharetribe Development',
  description: 'Build and customise on Sharetribe',
  href: '/sharetribe-expert',
  icon: CodeIcon
},
{
  label: 'Custom Marketplace Development',
  description: 'Bespoke platforms beyond no-code',
  href: '/#services',
  icon: LayersIcon
},
{
  label: 'Sharetribe Mobile App',
  description: 'Native iOS and Android apps',
  href: '/#services',
  icon: SmartphoneIcon
},
{
  label: 'Sharemates',
  description: 'Operations toolkit for marketplace teams',
  href: '/#sharemates',
  icon: PuzzleIcon
},
{
  label: 'Sharetribe Hosting',
  description: 'From A$140/year in 32 regions',
  href: '/#services',
  icon: ServerIcon
},
{
  label: 'AI Marketplace Builder',
  description: 'Prototype your marketplace idea fast',
  href: '/#services',
  icon: SparklesIcon
},
{
  label: 'Software Development',
  description: 'Custom web apps, APIs and IoT',
  href: '/#case-studies',
  icon: TerminalIcon
}];


export const mainLinks = [
{ label: 'Case Studies', href: '/#case-studies' },
{ label: 'Pricing', href: '/sharetribe-expert#feature-menu' },
{ label: 'Insights', href: '/sharetribe-solutions/quote-and-calendar-booking' },
{ label: 'About', href: '/#how-we-work' }];


export const footerColumns = [
{
  title: 'Services',
  links: [
  { label: 'Sharetribe Development', href: '/sharetribe-expert' },
  { label: 'Custom Marketplace Development', href: '/#services' },
  { label: 'Sharetribe Mobile App', href: '/#services' },
  { label: 'Sharemates', href: '/#sharemates' },
  { label: 'Sharetribe Hosting', href: '/#services' },
  { label: 'Software Development', href: '/#case-studies' }]

},
{
  title: 'Resources',
  links: [
  { label: 'Feature pricing menu', href: '/sharetribe-expert#feature-menu' },
  { label: 'Sharetribe solutions library', href: '/sharetribe-solutions/quote-and-calendar-booking' },
  { label: 'Third-party costs', href: '/sharetribe-expert#third-party-costs' },
  { label: 'Sharetribe FAQ', href: '/sharetribe-expert#faq' }]

},
{
  title: 'About',
  links: [
  { label: 'How we work', href: '/#how-we-work' },
  { label: 'Case studies', href: '/#case-studies' },
  { label: 'Testimonials', href: '/#testimonials' },
  { label: 'Contact', href: '/#contact' }]

}];