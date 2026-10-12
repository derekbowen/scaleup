import type { LucideIcon } from 'lucide-react';
import { KeyRoundIcon, ScanFaceIcon, BellIcon, PlugIcon, TrendingUpIcon } from 'lucide-react';

export type SharematesModule = {
  name: string;
  description: string;
  icon: LucideIcon;
};

export const sharematesModules: SharematesModule[] = [
{ name: 'Access control', description: 'Gate listings, pages and actions by user type or approval.', icon: KeyRoundIcon },
{ name: 'Identity checks', description: 'Verify users before they can list, book or get paid.', icon: ScanFaceIcon },
{ name: 'Notifications', description: 'Trigger email and SMS on marketplace events.', icon: BellIcon },
{ name: 'Integrations', description: 'Sync data to the tools your team already uses.', icon: PlugIcon },
{ name: 'Reporting', description: 'GMV, take rate and user growth in one dashboard.', icon: TrendingUpIcon }];


export const sharematesKpis = [
{ label: 'GMV this month', value: 'A$48.2k', change: '+12.4%' },
{ label: 'Verified users', value: '1,284', change: '+86' },
{ label: 'Pending checks', value: '7', change: '2 urgent' }];


export const sharematesChart = [38, 44, 41, 52, 48, 60, 57, 66, 63, 72, 78, 84];

export const sharematesQueue = [
{ name: 'Priya Natarajan', role: 'Provider', status: 'Verified' },
{ name: 'Tom Whitaker', role: 'Provider', status: 'In review' },
{ name: 'Elena Rossi', role: 'Customer', status: 'Verified' }];