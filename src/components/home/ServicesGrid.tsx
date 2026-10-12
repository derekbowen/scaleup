import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRightIcon } from 'lucide-react';
import { serviceCards } from '../../data/services';
import { SectionHeading } from '../ui/SectionHeading';

export function ServicesGrid() {
  return (
    <section id="services" className="bg-white py-20 lg:py-28" aria-labelledby="services-title">
      <div className="mx-auto max-w-site px-5 lg:px-8">
        <SectionHeading
          id="services-title"
          eyebrow="What we do"
          title="One senior team for your whole marketplace"
          description="From the first Sharetribe build to mobile apps, hosting and operations tooling — we cover every stage of a marketplace’s life." />
        
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCards.map((service) =>
          <li key={service.title}>
              <Link
              to={service.href}
              className="group flex h-full flex-col rounded-[14px] border border-brand-line bg-white p-6 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-[#CDB8FF] hover:shadow-lift">
              
                <div className="flex items-start justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-[10px] bg-brand-lavender text-brand-purple">
                    <service.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <ArrowUpRightIcon
                  className="h-5 w-5 text-brand-muted transition-colors group-hover:text-brand-purple"
                  aria-hidden="true" />
                
                </div>
                <h3 className="mt-5 font-heading text-lg font-semibold leading-snug text-brand-navy">{service.title}</h3>
                <p className="mt-2 flex-1 text-base leading-relaxed text-brand-muted">{service.description}</p>
                <p className="mt-5 border-t border-brand-line pt-4 text-sm font-semibold text-brand-blue">{service.meta}</p>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </section>);

}