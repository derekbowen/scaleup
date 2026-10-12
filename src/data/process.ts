import type { LucideIcon } from 'lucide-react';
import { MessagesSquareIcon, ClipboardListIcon, FlaskConicalIcon, RocketIcon } from 'lucide-react';

export type ProcessStep = {
  title: string;
  description: string;
  detail: string;
  icon: LucideIcon;
};

export const processSteps: ProcessStep[] = [
{
  title: 'Free consultation',
  description:
  'A 15-minute call with a senior engineer. We tell you what Sharetribe does natively and what needs custom work.',
  detail: '15 minutes',
  icon: MessagesSquareIcon
},
{
  title: 'Fixed-price scope',
  description:
  'A written scope with every feature, its approach and its price. No hourly surprises, no vague estimates.',
  detail: 'Fixed price',
  icon: ClipboardListIcon
},
{
  title: 'Build and test',
  description:
  'We build in Sharetribe’s test environment so you can click through every flow before anything goes live.',
  detail: 'Sharetribe test environment',
  icon: FlaskConicalIcon
},
{
  title: 'Launch and support',
  description:
  'We deploy to your live marketplace, monitor the launch and stay on for improvements as you grow.',
  detail: 'Ongoing support',
  icon: RocketIcon
}];