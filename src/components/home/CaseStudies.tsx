import React from 'react';
import { ArrowRightIcon, MapPinIcon } from 'lucide-react';
import { caseStudies } from '../../data/caseStudies';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

export function CaseStudies() {
  const [featured, ...rest] = caseStudies;

  return (
    <section id="case-studies" className="bg-brand-canvas py-20 lg:py-28" aria-labelledby="case-studies-title">
      <div className="mx-auto max-w-site px-5 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            id="case-studies-title"
            eyebrow="Case studies"
            title="Marketplaces and software we’ve shipped"
            description="From B2B supply chains to reverse auctions — real products, live with real users." />
          
          <Button to="/#contact" variant="secondary" className="self-start sm:self-auto">
            Discuss your project
          </Button>
        </div>

        <article className="group mt-12 grid overflow-hidden rounded-[14px] border border-brand-line bg-white shadow-card transition-shadow hover:shadow-lift lg:grid-cols-12">
          <div className="overflow-hidden bg-brand-mist lg:col-span-7">
            <img
              src={featured.image}
              alt={`${featured.client} marketplace interface`}
              loading="lazy"
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]" />
            
          </div>
          <div className="flex flex-col justify-center p-7 lg:col-span-5 lg:p-10">
            <p className="text-sm font-semibold text-brand-purple">Featured · {featured.category}</p>
            <h3 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-brand-navy">{featured.client}</h3>
            <p className="mt-2 flex items-center gap-1 text-sm text-brand-muted">
              <MapPinIcon className="h-3.5 w-3.5" aria-hidden="true" />
              {featured.location}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-brand-muted">{featured.summary}</p>
            <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies">
              {featured.tags.map((tag) =>
              <li key={tag} className="rounded-full bg-brand-mist px-2.5 py-0.5 text-xs font-semibold text-brand-ink">
                  {tag}
                </li>
              )}
            </ul>
            <a
              href="#contact"
              className="mt-7 inline-flex items-center gap-1 font-heading text-sm font-semibold text-brand-purple hover:text-brand-purpleDark">
              
              Read case study<span className="sr-only">: {featured.client}</span>
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
          </div>
        </article>

        <ul className="mt-5 grid gap-5 md:grid-cols-3">
          {rest.map((study) =>
          <li key={study.client}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[14px] border border-brand-line bg-white shadow-card transition-shadow hover:shadow-lift">
                <div className="overflow-hidden bg-brand-mist">
                  <img
                  src={study.image}
                  alt={`${study.client} interface`}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]" />
                
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-sm font-semibold text-brand-purple">{study.category}</p>
                  <h3 className="mt-1 font-heading text-lg font-semibold text-brand-navy">{study.client}</h3>
                  <p className="mt-1 flex items-center gap-1 text-sm text-brand-muted">
                    <MapPinIcon className="h-3.5 w-3.5" aria-hidden="true" />
                    {study.location}
                  </p>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-brand-muted">{study.summary}</p>
                  <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1 font-heading text-sm font-semibold text-brand-purple hover:text-brand-purpleDark">
                  
                    Read case study<span className="sr-only">: {study.client}</span>
                    <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </a>
                </div>
              </article>
            </li>
          )}
        </ul>
      </div>
    </section>);

}