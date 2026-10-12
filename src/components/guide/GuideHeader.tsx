import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, ShieldCheckIcon } from 'lucide-react';
import { guideMeta } from '../../data/solutionGuide';

export function GuideHeader() {
  return (
    <header className="border-b border-brand-line bg-brand-canvas">
      <div className="mx-auto max-w-site px-5 pb-12 pt-10 lg:px-8 lg:pb-14 lg:pt-14">
        <Link
          to={guideMeta.hubHref}
          className="inline-flex items-center gap-1.5 font-heading text-sm font-semibold text-brand-purple hover:text-brand-purpleDark">
          
          <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" />
          {guideMeta.hubLabel}
        </Link>
        <p className="mt-6 text-sm font-semibold text-brand-muted">{guideMeta.category}</p>
        <h1 className="mt-2 max-w-3xl font-heading text-[34px] font-semibold leading-[1.15] tracking-tight text-brand-navy sm:text-[44px]">
          {guideMeta.title}
        </h1>
        <p className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-[15px] text-brand-muted">
          <ShieldCheckIcon className="h-4 w-4 text-brand-purple" aria-hidden="true" />
          <span>
            Technically reviewed by <span className="font-semibold text-brand-ink">{guideMeta.reviewer}</span>
          </span>
          <span aria-hidden="true">·</span>
          <span>Last reviewed {guideMeta.reviewed}</span>
          <span aria-hidden="true">·</span>
          <span>{guideMeta.readTime}</span>
        </p>
      </div>
    </header>);

}