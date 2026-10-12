import React from 'react';
import { expertBenefits } from '../../data/expert';
import { SectionHeading } from '../ui/SectionHeading';

export function WhyScaleup() {
  return (
    <section className="bg-white py-20 lg:py-24" aria-labelledby="why-title">
      <div className="mx-auto max-w-site px-5 lg:px-8">
        <SectionHeading
          id="why-title"
          eyebrow="Why Scaleup"
          title="Why founders pick Scaleup for Sharetribe" />
        
        <ul className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {expertBenefits.map((benefit) =>
          <li key={benefit.title} className="flex gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[10px] bg-brand-lavender text-brand-purple">
                <benefit.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-heading text-lg font-semibold text-brand-navy">{benefit.title}</h3>
                <p className="mt-1.5 text-base leading-relaxed text-brand-muted">{benefit.description}</p>
              </div>
            </li>
          )}
        </ul>
      </div>
    </section>);

}