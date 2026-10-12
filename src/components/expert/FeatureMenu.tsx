import React, { useMemo, useState } from 'react';
import { SearchIcon, XIcon } from 'lucide-react';
import { featureCategories, featureMenu } from '../../data/pricing';
import type { Capability, FeatureCategory } from '../../types/features';
import { SectionHeading } from '../ui/SectionHeading';
import { CapabilityBadge } from '../ui/CapabilityBadge';
import { formatAud } from '../../utils/currency';

const capabilities: Capability[] = ['Built in', 'Configuration', 'Custom code'];

export function FeatureMenu() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<FeatureCategory | 'All'>('All');
  const [capability, setCapability] = useState<Capability | 'All'>('All');

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return featureMenu.filter(
      (f) =>
      (category === 'All' || f.category === category) && (
      capability === 'All' || f.capability === capability) && (
      !q || f.name.toLowerCase().includes(q) || f.description.toLowerCase().includes(q))
    );
  }, [query, category, capability]);

  const reset = () => {
    setQuery('');
    setCategory('All');
    setCapability('All');
  };

  const pill = (active: boolean) =>
  `rounded-full px-3.5 py-1.5 text-sm font-semibold transition-colors ${
  active ? 'bg-brand-navy text-white' : 'bg-white text-brand-ink ring-1 ring-inset ring-brand-line hover:ring-brand-purple'}`;


  return (
    <section id="feature-menu" className="bg-brand-canvas py-20 lg:py-24" aria-labelledby="feature-menu-title">
      <div className="mx-auto max-w-site px-5 lg:px-8">
        <SectionHeading
          id="feature-menu-title"
          eyebrow="Feature pricing menu"
          title="What common Sharetribe features cost"
          description="Indicative “from” prices for a standard implementation. Every row shows whether it’s built in, configuration or custom code." />
        

        <div className="mt-10 rounded-[14px] border border-brand-line bg-white p-4 shadow-card sm:p-5">
          <div className="flex flex-col gap-3 md:flex-row">
            <div className="relative flex-1">
              <label htmlFor="feature-search" className="sr-only">Search features</label>
              <SearchIcon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-muted" aria-hidden="true" />
              <input
                id="feature-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search features, e.g. vouchers, map, subscriptions"
                className="h-11 w-full rounded-[10px] border border-brand-line bg-white pl-10 pr-3 text-base text-brand-ink placeholder:text-[#8A8A9E] focus:border-brand-purple focus:outline-none focus:ring-2 focus:ring-brand-purple/25" />
              
            </div>
            <div>
              <label htmlFor="capability-filter" className="sr-only">Filter by approach</label>
              <select
                id="capability-filter"
                value={capability}
                onChange={(e) => setCapability(e.target.value as Capability | 'All')}
                className="h-11 w-full rounded-[10px] border border-brand-line bg-white px-3 text-base font-semibold text-brand-ink focus:border-brand-purple focus:outline-none focus:ring-2 focus:ring-brand-purple/25 md:w-52">
                
                <option value="All">All approaches</option>
                {capabilities.map((c) =>
                <option key={c} value={c}>{c}</option>
                )}
              </select>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Filter by category">
            <button type="button" aria-pressed={category === 'All'} onClick={() => setCategory('All')} className={pill(category === 'All')}>
              All
            </button>
            {featureCategories.map((c) =>
            <button key={c} type="button" aria-pressed={category === c} onClick={() => setCategory(c)} className={pill(category === c)}>
                {c}
              </button>
            )}
          </div>
        </div>

        <p className="mt-6 text-sm text-brand-muted" aria-live="polite">
          Showing {results.length} of {featureMenu.length} features
        </p>

        {results.length === 0 ?
        <div className="mt-3 rounded-[14px] border border-dashed border-brand-line bg-white px-6 py-14 text-center">
            <p className="font-heading text-lg font-semibold text-brand-navy">No features match those filters</p>
            <p className="mt-1 text-base text-brand-muted">Not listed? We price custom features on the free consultation.</p>
            <button type="button" onClick={reset} className="mt-5 inline-flex items-center gap-1.5 font-heading text-sm font-semibold text-brand-purple hover:text-brand-purpleDark">
              <XIcon className="h-4 w-4" aria-hidden="true" />
              Clear filters
            </button>
          </div> :

        <div className="mt-3 overflow-hidden rounded-[14px] border border-brand-line bg-white shadow-card">
            <table className="w-full text-left">
              <caption className="sr-only">Sharetribe feature prices in AUD excluding GST</caption>
              <thead className="hidden bg-brand-canvas md:table-header-group">
                <tr>
                  <th scope="col" className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-brand-muted">Feature</th>
                  <th scope="col" className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-brand-muted">Category</th>
                  <th scope="col" className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-brand-muted">Approach</th>
                  <th scope="col" className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wider text-brand-muted">From</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-line">
                {results.map((f) =>
              <tr key={f.name} className="flex flex-wrap items-start gap-x-4 gap-y-2 px-5 py-4 md:table-row md:p-0">
                    <th scope="row" className="w-full font-normal md:w-auto md:px-5 md:py-4">
                      <span className="block text-base font-semibold text-brand-ink">{f.name}</span>
                      <span className="block text-[15px] text-brand-muted">{f.description}</span>
                    </th>
                    <td className="text-sm text-brand-muted md:px-5 md:py-4">{f.category}</td>
                    <td className="md:px-5 md:py-4">
                      <CapabilityBadge capability={f.capability} />
                    </td>
                    <td className="ml-auto whitespace-nowrap font-heading text-base font-semibold text-brand-navy md:px-5 md:py-4 md:text-right">
                      {formatAud(f.priceFrom)}
                    </td>
                  </tr>
              )}
              </tbody>
            </table>
          </div>
        }
        <p className="mt-3 text-sm text-brand-muted">
          Prices in AUD, excluding GST. “Included” features are native to Sharetribe and need no development.
        </p>
      </div>
    </section>);

}