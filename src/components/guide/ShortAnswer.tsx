import React from 'react';
import { CodeIcon, ClockIcon } from 'lucide-react';

export function ShortAnswer() {
  return (
    <section id="short-answer" aria-labelledby="short-answer-title" className="rounded-[14px] border border-[#D6C7FF] bg-brand-lavender p-6 sm:p-8">
      <div className="flex flex-wrap items-center gap-3">
        <h2 id="short-answer-title" className="font-heading text-xl font-semibold text-brand-navy">
          The short answer
        </h2>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-purple px-3 py-1 text-xs font-semibold text-white">
          <CodeIcon className="h-3.5 w-3.5" aria-hidden="true" />
          What it takes: Custom development
        </span>
      </div>
      <p className="mt-4 text-lg leading-relaxed text-brand-ink">
        <strong className="font-semibold">Not out of the box.</strong> Sharetribe supports negotiated offers and calendar
        bookings, but as separate transaction processes. Letting a provider quote a custom price and then lock in the
        customer’s dates needs a custom transaction process and front-end changes.
      </p>
      <p className="mt-3 text-base leading-relaxed text-brand-muted">
        It’s a well-understood build that we’ve delivered for rental, events and services marketplaces.
      </p>
      <p className="mt-5 inline-flex items-center gap-2 rounded-[10px] bg-white px-3.5 py-2 text-sm font-semibold text-brand-navy">
        <ClockIcon className="h-4 w-4 text-brand-blue" aria-hidden="true" />
        Typically 2–4 weeks · from A$2,200 ex GST
      </p>
    </section>);

}