import React from 'react';
import { processSteps } from '../../data/process';
import { SectionHeading } from '../ui/SectionHeading';

export function HowWeWork() {
  return (
    <section id="how-we-work" className="border-t border-brand-line bg-brand-canvas py-20 lg:py-28" aria-labelledby="how-title">
      <div className="mx-auto max-w-site px-5 lg:px-8">
        <SectionHeading
          id="how-title"
          eyebrow="How we work"
          title="From first call to live marketplace"
          description="A predictable process that keeps your live marketplace safe and your budget fixed." />
        
        <div className="relative mt-14">
        <div aria-hidden="true" className="absolute left-6 right-6 top-6 hidden h-px bg-[#D6C7FF] lg:block" />
        <ol className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {processSteps.map((step, i) =>
            <li key={step.title} className="relative">
              <div className="flex items-center gap-3">
                <span className="relative grid h-12 w-12 place-items-center rounded-full border-4 border-brand-canvas bg-brand-purple text-white">
                  <step.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="relative bg-brand-canvas pr-2 font-heading text-sm font-semibold text-brand-muted">Step {i + 1}</span>
              </div>
              <h3 className="mt-5 font-heading text-lg font-semibold text-brand-navy">{step.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-brand-muted">{step.description}</p>
              <p className="mt-4 inline-block rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-blue ring-1 ring-brand-line">
                {step.detail}
              </p>
            </li>
            )}
        </ol>
        </div>
      </div>
    </section>);

}