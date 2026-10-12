import React from 'react';
import { ArrowRightIcon, CalendarRangeIcon } from 'lucide-react';
import { Button } from '../ui/Button';

export function GuideCtaCard() {
  return (
    <aside className="on-dark rounded-[14px] bg-brand-navy p-6 sm:p-8" aria-labelledby="guide-cta-title">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-[10px] bg-brand-purple text-white">
            <CalendarRangeIcon className="h-6 w-6" aria-hidden="true" />
          </span>
          <div>
            <h2 id="guide-cta-title" className="font-heading text-xl font-semibold text-white">
              Scope your quote-and-booking flow
            </h2>
            <p className="mt-1.5 text-base text-[#C9C9DE]">
              Tell us how your providers quote. We’ll map the edge cases and send a fixed price.
            </p>
          </div>
        </div>
        <Button to="/#contact" variant="light" size="lg" className="shrink-0">
          Book a free call
          <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
        </Button>
      </div>
    </aside>);

}