import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { pricingTeaserRows } from '../../data/pricing';
import { SectionHeading } from '../ui/SectionHeading';
import { CapabilityBadge } from '../ui/CapabilityBadge';
import { formatAud } from '../../utils/currency';

export function PricingTeaser() {
  return (
    <section className="bg-white py-20 lg:py-28" aria-labelledby="pricing-teaser-title">
      <div className="mx-auto grid max-w-site gap-12 px-5 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-5">
          <SectionHeading
            id="pricing-teaser-title"
            eyebrow="Indicative feature pricing"
            title="Know what features cost before you call"
            description="We publish “from” prices for the features founders ask for most. Your final scope is always fixed-price." />
          
          <Link
            to="/sharetribe-expert#feature-menu"
            className="mt-8 inline-flex items-center gap-1.5 font-heading text-base font-semibold text-brand-purple hover:text-brand-purpleDark">
            
            See the full feature menu
            <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="lg:col-span-7">
          <div className="overflow-hidden rounded-[14px] border border-brand-line bg-white shadow-card">
            <table className="w-full text-left">
              <caption className="sr-only">Indicative feature prices in AUD excluding GST</caption>
              <thead className="bg-brand-canvas">
                <tr>
                  <th scope="col" className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-brand-muted">
                    Feature
                  </th>
                  <th scope="col" className="hidden px-5 py-3 text-xs font-semibold uppercase tracking-wider text-brand-muted sm:table-cell">
                    Approach
                  </th>
                  <th scope="col" className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wider text-brand-muted">
                    From
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-line">
                {pricingTeaserRows.map((row) =>
                <tr key={row.name}>
                    <th scope="row" className="px-5 py-4 text-base font-semibold text-brand-ink">
                      {row.name}
                      <div className="mt-1 sm:hidden">
                        <CapabilityBadge capability={row.capability} />
                      </div>
                    </th>
                    <td className="hidden px-5 py-4 sm:table-cell">
                      <CapabilityBadge capability={row.capability} />
                    </td>
                    <td className="px-5 py-4 text-right font-heading text-base font-semibold text-brand-navy">
                      {formatAud(row.priceFrom)}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-brand-muted">Prices in AUD, excluding GST. GST applies to Australian clients only.</p>
        </div>
      </div>
    </section>);

}