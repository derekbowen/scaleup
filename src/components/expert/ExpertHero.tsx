import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, ChevronRightIcon } from 'lucide-react';
import { Button } from '../ui/Button';

const stats = [
{ value: '35+', label: 'Sharetribe projects shipped' },
{ value: '5.0', label: 'Clutch rating from 18 reviews' },
{ value: '5', label: 'Regions: US, Canada, Europe, NZ, Australia' },
{ value: '100%', label: 'Fixed-price scopes' }];


export function ExpertHero() {
  return (
    <section className="relative overflow-hidden border-b border-brand-line bg-white" aria-labelledby="expert-title">
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-56 h-[520px] w-[520px] rounded-full bg-brand-lavender" />
      <div className="relative mx-auto max-w-site px-5 pb-16 pt-10 lg:px-8 lg:pb-20 lg:pt-12">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-brand-muted">
            <li><Link to="/" className="hover:text-brand-purple">Home</Link></li>
            <li aria-hidden="true"><ChevronRightIcon className="h-3.5 w-3.5" /></li>
            <li><Link to="/#services" className="hover:text-brand-purple">Services</Link></li>
            <li aria-hidden="true"><ChevronRightIcon className="h-3.5 w-3.5" /></li>
            <li aria-current="page" className="font-semibold text-brand-ink">Sharetribe Experts</li>
          </ol>
        </nav>
        <div className="mt-10 grid items-end gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="font-heading text-xs font-semibold uppercase tracking-[0.14em] text-brand-purple">
              Verified Sharetribe Expert
            </p>
            <h1 id="expert-title" className="mt-4 font-heading text-[38px] font-semibold leading-[1.1] tracking-tight text-brand-navy sm:text-5xl lg:text-[54px]">
              Build, customise and grow your Sharetribe marketplace
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-muted sm:text-xl">
              Sharetribe development by senior engineers. Published feature prices, honest native-vs-custom advice and
              everything tested before it touches your live marketplace.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to="/#contact" size="lg">
                Book a free 15-minute consultation
                <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button to="/sharetribe-expert#feature-menu" variant="secondary" size="lg">
                Browse feature prices
              </Button>
            </div>
          </div>
          <dl className="grid grid-cols-2 gap-3 lg:col-span-5">
            {stats.map((stat) =>
            <div key={stat.label} className="rounded-[14px] border border-brand-line bg-white p-5 shadow-card">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-heading text-3xl font-semibold text-brand-purple">{stat.value}</span>
                  <span className="mt-1 block text-sm leading-snug text-brand-muted">{stat.label}</span>
                </dd>
              </div>
            )}
          </dl>
        </div>
      </div>
    </section>);

}