import React from 'react';
import { CheckIcon, SlidersHorizontalIcon, CodeIcon } from 'lucide-react';
import type { Capability } from '../../types/features';

const styles: Record<Capability, {className: string;icon: typeof CheckIcon;}> = {
  'Built in': { className: 'bg-emerald-50 text-emerald-800 ring-emerald-200', icon: CheckIcon },
  Configuration: { className: 'bg-[#EEF0FF] text-[#3434C8] ring-[#CFD2FF]', icon: SlidersHorizontalIcon },
  'Custom code': { className: 'bg-brand-lavender text-brand-purpleDark ring-[#D6C7FF]', icon: CodeIcon }
};

export function CapabilityBadge({ capability }: {capability: Capability;}) {
  const { className, icon: Icon } = styles[capability];
  return (
    <span
      className={`inline-flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset ${className}`}>
      
      <Icon className="h-3 w-3" aria-hidden="true" />
      {capability}
    </span>);

}