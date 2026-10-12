import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, CheckIcon, BookOpenIcon } from 'lucide-react';
import { explainerColumns } from '../../data/explainer';
import { SectionHeading } from '../ui/SectionHeading';
import { CapabilityBadge } from '../ui/CapabilityBadge';

export function NativeExplainer() {
  return (
    <section className="bg-brand-canvas py-20 lg:py-28" aria-labelledby="explainer-title">
      <div className="mx-auto max-w-site px-5 lg:px-8">
        <SectionHeading
          id="explainer-title"
          eyebrow="Honest scoping"
          title="Is it native, configuration or custom code?"
          description="Before you spend a dollar, we tell you which of your features Sharetribe already does, which just need setting up, and which genuinely need development." />
        
        <ol className="mt-12 grid gap-5 lg:grid-cols-3">
          {explainerColumns.map((column, index) =>
          <li key={column.title} className="flex flex-col rounded-[14px] border border-brand-line bg-white p-6 shadow-card">
              <div className="flex items-center justify-between">
                <span className="font-heading text-sm font-semibold text-brand-muted">0{index + 1}</span>
                <CapabilityBadge capability={column.capability} />
              </div>
              <h3 className="mt-5 font-heading text-xl font-semibold text-brand-navy">{column.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-brand-muted">{column.description}</p>
              <ul className="mt-5 flex-1 space-y-2.5">
                {column.examples.map((example) =>
              <li key={example} className="flex items-start gap-2.5 text-[15px] text-brand-ink">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-purple" aria-hidden="true" />
                    {example}
                  </li>
              )}
              </ul>
              <p className="mt-6 rounded-[10px] bg-brand-canvas px-4 py-3 font-heading text-sm font-semibold text-brand-navy">
                {column.effort}
              </p>
            </li>
          )}
        </ol>
        <div className="mt-8 flex flex-col gap-5 rounded-[14px] border border-brand-line bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[10px] bg-brand-navy text-white">
              <BookOpenIcon className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="font-heading text-base font-semibold text-brand-navy">Sharetribe solutions library</p>
              <p className="mt-1 text-base text-brand-muted">
                Engineer-reviewed answers, like “Can Sharetribe combine a negotiated quote with a calendar booking?”
              </p>
            </div>
          </div>
          <Link
            to="/sharetribe-solutions/quote-and-calendar-booking"
            className="inline-flex shrink-0 items-center gap-1.5 font-heading text-sm font-semibold text-brand-purple hover:text-brand-purpleDark">
            
            Browse solutions
            <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>);

}