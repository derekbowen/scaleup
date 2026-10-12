import React from 'react';
import { InfoIcon } from 'lucide-react';
import { thirdPartyCosts } from '../../data/pricing';
import { SectionHeading } from '../ui/SectionHeading';

export function ThirdPartyCosts() {
  return (
    <section id="third-party-costs" className="bg-white py-20 lg:py-24" aria-labelledby="costs-title">
      <div className="mx-auto grid max-w-site gap-12 px-5 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-4">
          <SectionHeading
            id="costs-title"
            eyebrow="Running costs"
            title="Third-party costs to budget for"
            description="These are paid directly to each provider, not to us. We’ll help you pick the right plans." />
          
          <p className="mt-6 flex items-start gap-2 rounded-[10px] bg-brand-lavender p-4 text-[15px] text-brand-ink">
            <InfoIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-purple" aria-hidden="true" />
            Sharetribe prices are in USD and set by Sharetribe. Check sharetribe.com for current plans.
          </p>
        </div>
        <div className="lg:col-span-8">
          <div className="overflow-hidden rounded-[14px] border border-brand-line shadow-card">
            <table className="w-full text-left">
              <caption className="sr-only">Third-party costs for running a Sharetribe marketplace</caption>
              <thead className="bg-brand-canvas">
                <tr>
                  <th scope="col" className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-brand-muted">Service</th>
                  <th scope="col" className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-brand-muted">Cost</th>
                  <th scope="col" className="hidden px-5 py-3 text-xs font-semibold uppercase tracking-wider text-brand-muted md:table-cell">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-line">
                {thirdPartyCosts.map((row) =>
                <tr key={row.item} className="align-top">
                    <th scope="row" className="px-5 py-4 text-base font-semibold text-brand-ink">
                      {row.item}
                      <span className="mt-1 block text-sm font-normal text-brand-muted md:hidden">{row.notes}</span>
                    </th>
                    <td className="px-5 py-4 font-heading text-[15px] font-semibold text-brand-navy">{row.cost}</td>
                    <td className="hidden px-5 py-4 text-[15px] text-brand-muted md:table-cell">{row.notes}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>);

}