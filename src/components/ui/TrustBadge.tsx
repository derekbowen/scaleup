import React from 'react';
import { BadgeCheckIcon, StarIcon } from 'lucide-react';
import type { TrustItem } from '../../data/reviews';

export function TrustBadge({ item, tone = 'light' }: {item: TrustItem;tone?: 'light' | 'dark';}) {
  const dark = tone === 'dark';
  return (
    <div className="flex items-center gap-3">
      {item.rating ?
      <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className={`font-heading text-sm font-semibold ${dark ? 'text-white' : 'text-brand-navy'}`}>
              {item.label} {item.rating}
            </span>
            <span className="flex" aria-label={`${item.rating} out of 5 stars`}>
              {[0, 1, 2, 3, 4].map((i) =>
            <StarIcon key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" aria-hidden="true" />
            )}
            </span>
          </div>
          <span className={`text-sm ${dark ? 'text-[#B5B5CC]' : 'text-brand-muted'}`}>{item.detail}</span>
        </div> :

      <>
          <BadgeCheckIcon className={`h-8 w-8 shrink-0 ${dark ? 'text-[#B9A6FF]' : 'text-brand-purple'}`} aria-hidden="true" />
          <div className="flex flex-col">
            <span className={`font-heading text-sm font-semibold ${dark ? 'text-white' : 'text-brand-navy'}`}>
              {item.label}
            </span>
            <span className={`text-sm ${dark ? 'text-[#B5B5CC]' : 'text-brand-muted'}`}>{item.detail}</span>
          </div>
        </>
      }
    </div>);

}