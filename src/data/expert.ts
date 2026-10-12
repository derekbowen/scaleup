import type { LucideIcon } from 'lucide-react';
import {
  BadgeCheckIcon,
  ListChecksIcon,
  ReceiptIcon,
  FlaskConicalIcon,
  GlobeIcon,
  KeyRoundIcon } from
'lucide-react';

export type Benefit = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const expertBenefits: Benefit[] = [
{
  title: 'Verified Sharetribe Expert',
  description:
  'Listed in Sharetribe’s Experts directory, with 35+ Sharetribe projects shipped across bookings, products, B2B and services.',
  icon: BadgeCheckIcon
},
{
  title: 'Honest native-vs-custom advice',
  description:
  'We tell you when a feature is already built into Sharetribe or only needs configuration, so you never pay for code you don’t need.',
  icon: ListChecksIcon
},
{
  title: 'Fixed prices, published upfront',
  description:
  'Our feature menu shows “from” prices for common features. Your scope is fixed-price before work starts.',
  icon: ReceiptIcon
},
{
  title: 'Built and tested safely',
  description:
  'Everything is built in Sharetribe’s test environment, so your live marketplace and real users are never at risk.',
  icon: FlaskConicalIcon
},
{
  title: 'Senior engineers, global clients',
  description:
  'Founders in the US, Canada, Europe, NZ and Australia work directly with senior engineers — no handoffs to juniors.',
  icon: GlobeIcon
},
{
  title: 'You own the code',
  description:
  'Your customised front end lives in your repository. No lock-in, and clear documentation for whoever works on it next.',
  icon: KeyRoundIcon
}];


export const sharetribeFit = [
'Your model is bookings, product sales, services or rentals',
'You want to launch in weeks and validate demand first',
'Most of what you need is native or configuration',
'You’re happy with Sharetribe’s monthly plan pricing'];


export const customFit = [
'Your transaction model is far from Sharetribe’s processes',
'You need complex multi-party orders or logistics',
'You expect very high volumes and want to control infrastructure',
'Your roadmap needs deep data ownership or on-premise hosting'];


export const expertFaqs = [
{
  question: 'Do I need custom development, or can I use Sharetribe as-is?',
  answer:
  'Many marketplaces launch with no code at all. On the free consultation we go through your feature list and mark each item as built in, configuration or custom code, so you know exactly what needs development.'
},
{
  question: 'Are your feature prices fixed?',
  answer:
  'The menu shows “from” prices for a standard implementation. After the consultation you receive a fixed-price scope covering your exact requirements. Prices are in AUD and exclude GST, which only applies to Australian clients.'
},
{
  question: 'Do you work with founders outside Australia?',
  answer:
  'Yes. Most of our Sharetribe clients are in the US, Canada, Europe and New Zealand. We schedule calls in your time zone and invoice in AUD or USD.'
},
{
  question: 'Will customising my marketplace affect my live site?',
  answer:
  'No. We build and test everything in Sharetribe’s test environment. You review every flow before we deploy to your live marketplace.'
},
{
  question: 'What happens after launch?',
  answer:
  'We host your customised front end, keep it up to date with Sharetribe releases and stay available for new features through ongoing support.'
},
{
  question: 'Can you take over a project another agency started?',
  answer:
  'Yes. Marketplace rescue projects start with a code audit. We report what’s safe to keep, what needs fixing and a fixed price to get you live.'
}];