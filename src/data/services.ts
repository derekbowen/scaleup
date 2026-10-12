import type { LucideIcon } from 'lucide-react';
import {
  CodeIcon,
  LayersIcon,
  SmartphoneIcon,
  PuzzleIcon,
  ServerIcon,
  LifeBuoyIcon } from
'lucide-react';

export type ServiceCard = {
  title: string;
  description: string;
  meta: string;
  href: string;
  icon: LucideIcon;
};

export const serviceCards: ServiceCard[] = [
{
  title: 'Sharetribe development and customisation',
  description:
  'Extend Sharetribe with custom transaction flows, integrations, branded UI and features the no-code Console can’t reach.',
  meta: '35+ Sharetribe projects shipped',
  href: '/sharetribe-expert',
  icon: CodeIcon
},
{
  title: 'Custom marketplace development',
  description:
  'When your model outgrows Sharetribe, the same senior team designs and builds a bespoke marketplace platform you fully own.',
  meta: 'React, Node.js, cloud-native',
  href: '/#case-studies',
  icon: LayersIcon
},
{
  title: 'Sharetribe mobile app',
  description:
  'Native iOS and Android apps connected to your existing Sharetribe marketplace — one backend, one set of users and listings.',
  meta: 'App Store and Google Play',
  href: '/sharetribe-expert#feature-menu',
  icon: SmartphoneIcon
},
{
  title: 'Sharemates operator toolkit',
  description:
  'Access control, identity checks, notifications, integrations and reporting for marketplace operators — without writing code.',
  meta: 'From USD 30/month',
  href: '/#sharemates',
  icon: PuzzleIcon
},
{
  title: 'Sharetribe hosting',
  description:
  'Managed hosting for customised Sharetribe front ends, with SSL, monitoring and deployments handled for you.',
  meta: 'From A$140/year · 32 regions',
  href: '/sharetribe-expert#third-party-costs',
  icon: ServerIcon
},
{
  title: 'Marketplace rescue projects',
  description:
  'Inherited a half-finished build or a stalled agency project? We audit the code, stabilise it and get you shipping again.',
  meta: 'Audit, stabilise, relaunch',
  href: '/#contact',
  icon: LifeBuoyIcon
}];