import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { sharematesModules } from '../../data/sharemates';
import { Button } from '../ui/Button';
import { SharematesMock } from './SharematesMock';

export function SharematesSpotlight() {
  return (
    <section id="sharemates" className="bg-brand-lavender py-20 lg:py-28" aria-labelledby="sharemates-title">
      <div className="mx-auto grid max-w-site items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <p className="font-heading text-xs font-semibold uppercase tracking-[0.14em] text-brand-purple">
            Our product · Sharemates
          </p>
          <h2
            id="sharemates-title"
            className="mt-3 font-heading text-3xl font-semibold leading-tight tracking-tight text-brand-navy sm:text-[38px]">
            
            The operations toolkit for Sharetribe marketplaces
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-brand-muted">
            Sharemates adds the operator tools growing marketplaces need, without custom development. Listed in
            Sharetribe’s third-party solutions catalogue.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {sharematesModules.map((module) =>
            <li key={module.name} className="flex items-start gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[10px] bg-white text-brand-purple shadow-sm">
                  <module.icon className="h-[18px] w-[18px]" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-heading text-[15px] font-semibold text-brand-navy">{module.name}</h3>
                  <p className="text-[15px] leading-snug text-brand-muted">{module.description}</p>
                </div>
              </li>
            )}
          </ul>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button to="/#contact" size="lg">
              Explore Sharemates
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </Button>
            <p className="text-base text-brand-ink">
              Starting from <span className="font-heading font-semibold text-brand-navy">USD 30/month</span>
            </p>
          </div>
        </div>
        <SharematesMock />
      </div>
    </section>);

}