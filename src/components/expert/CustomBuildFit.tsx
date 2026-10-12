import React from 'react';
import { CheckIcon, ArrowRightIcon } from 'lucide-react';
import { customFit, sharetribeFit } from '../../data/expert';
import { SectionHeading } from '../ui/SectionHeading';

export function CustomBuildFit() {
  return (
    <section className="bg-brand-canvas py-20 lg:py-24" aria-labelledby="fit-title">
      <div className="mx-auto max-w-site px-5 lg:px-8">
        <SectionHeading
          id="fit-title"
          eyebrow="Right tool for the job"
          title="When a custom build may suit you better"
          description="Sharetribe is the fastest route to market for most marketplaces — but not all. We build both, so our advice isn’t biased." />
        
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <div className="rounded-[14px] border border-brand-line bg-white p-7 shadow-card">
            <h3 className="font-heading text-xl font-semibold text-brand-navy">Sharetribe is a great fit when</h3>
            <ul className="mt-5 space-y-3">
              {sharetribeFit.map((item) =>
              <li key={item} className="flex items-start gap-3 text-base text-brand-ink">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-700">
                    <CheckIcon className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  {item}
                </li>
              )}
            </ul>
          </div>
          <div className="rounded-[14px] bg-brand-navy p-7 text-white shadow-card">
            <h3 className="font-heading text-xl font-semibold">Consider a custom build when</h3>
            <ul className="mt-5 space-y-3">
              {customFit.map((item) =>
              <li key={item} className="flex items-start gap-3 text-base text-[#E3E3F0]">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white/10 text-[#B9A6FF]">
                    <ArrowRightIcon className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  {item}
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>);

}