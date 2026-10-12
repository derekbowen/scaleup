import React from 'react';
import { CheckIcon, ExternalLinkIcon, TriangleAlertIcon, MinusIcon } from 'lucide-react';
import {
  builtInLimits,
  edgeCases,
  guideSources,
  guideToc,
  implementationScope,
  outOfBoxPoints,
  relatedQuestions,
  workedExample } from
'../data/solutionGuide';
import { GuideHeader } from '../components/guide/GuideHeader';
import { ShortAnswer } from '../components/guide/ShortAnswer';
import { TableOfContents } from '../components/guide/TableOfContents';
import { GuideCtaCard } from '../components/guide/GuideCtaCard';
import { Accordion } from '../components/ui/Accordion';

const h2Class = 'font-heading text-2xl font-semibold tracking-tight text-brand-navy sm:text-[28px]';
const bodyClass = 'mt-4 text-[17px] leading-relaxed text-brand-ink';

export function SolutionGuide() {
  return (
    <article className="bg-white">
      <GuideHeader />
      <div className="mx-auto grid max-w-site gap-12 px-5 py-12 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-16 lg:px-8 lg:py-16">
        <div className="min-w-0 max-w-3xl">
          <details className="mb-8 rounded-[12px] border border-brand-line p-4 lg:hidden">
            <summary className="cursor-pointer font-heading text-sm font-semibold text-brand-navy">On this page</summary>
            <ol className="mt-3 space-y-2">
              {guideToc.map((item) =>
              <li key={item.id}>
                  <a href={`#${item.id}`} className="text-[15px] text-brand-muted hover:text-brand-purple">{item.label}</a>
                </li>
              )}
            </ol>
          </details>

          <ShortAnswer />

          <section id="out-of-the-box" className="mt-14" aria-labelledby="oob-title">
            <h2 id="oob-title" className={h2Class}>What Sharetribe does out of the box</h2>
            <p className={bodyClass}>
              Sharetribe ships with transaction processes for the most common marketplace models. Three of them are relevant here:
            </p>
            <ul className="mt-6 grid gap-4 sm:grid-cols-3">
              {outOfBoxPoints.map((point) =>
              <li key={point.title} className="rounded-[12px] border border-brand-line p-5">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-emerald-50 text-emerald-700">
                    <CheckIcon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <h3 className="mt-3 font-heading text-base font-semibold text-brand-navy">{point.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-brand-muted">{point.description}</p>
                </li>
              )}
            </ul>
          </section>

          <section id="where-it-stops" className="mt-14" aria-labelledby="stops-title">
            <h2 id="stops-title" className={h2Class}>Where the built-in feature stops</h2>
            <p className={bodyClass}>
              The gap appears when a single transaction needs both a negotiated price and reserved calendar time:
            </p>
            <ul className="mt-5 space-y-3">
              {builtInLimits.map((limit) =>
              <li key={limit} className="flex items-start gap-3 text-[17px] leading-relaxed text-brand-ink">
                  <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-amber-50 text-amber-700">
                    <MinusIcon className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  {limit}
                </li>
              )}
            </ul>
          </section>

          <section id="worked-example" className="mt-14" aria-labelledby="example-title">
            <h2 id="example-title" className={h2Class}>Worked example</h2>
            <p className={bodyClass}>
              An equipment-hire marketplace where every job needs a delivery quote. Here’s how the custom flow runs:
            </p>
            <ol className="mt-6 overflow-hidden rounded-[14px] border border-brand-line">
              {workedExample.map((step, i) =>
              <li key={i} className="flex gap-4 border-b border-brand-line p-5 last:border-b-0">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-purple font-heading text-sm font-semibold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-heading text-sm font-semibold text-brand-purple">{step.actor}</p>
                    <p className="mt-0.5 text-base leading-relaxed text-brand-ink">{step.action}</p>
                  </div>
                </li>
              )}
            </ol>
          </section>

          <section id="edge-cases" className="mt-14" aria-labelledby="edge-title">
            <h2 id="edge-title" className={h2Class}>Edge cases</h2>
            <p className={bodyClass}>Decide these before development starts — they shape the transaction process.</p>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {edgeCases.map((edge) =>
              <li key={edge.title} className="rounded-[12px] border border-brand-line bg-brand-canvas p-5">
                  <div className="flex items-center gap-2">
                    <TriangleAlertIcon className="h-4 w-4 text-amber-600" aria-hidden="true" />
                    <h3 className="font-heading text-base font-semibold text-brand-navy">{edge.title}</h3>
                  </div>
                  <p className="mt-2 text-[15px] leading-relaxed text-brand-muted">{edge.description}</p>
                </li>
              )}
            </ul>
          </section>

          <section id="implementation" className="mt-14" aria-labelledby="impl-title">
            <h2 id="impl-title" className={h2Class}>What an implementation covers</h2>
            <ul className="mt-6 divide-y divide-brand-line rounded-[14px] border border-brand-line">
              {implementationScope.map((item) =>
              <li key={item.title} className="flex items-start gap-3 p-5">
                  <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-brand-purple" aria-hidden="true" />
                  <div>
                    <h3 className="font-heading text-base font-semibold text-brand-navy">{item.title}</h3>
                    <p className="mt-1 text-[15px] leading-relaxed text-brand-muted">{item.description}</p>
                  </div>
                </li>
              )}
            </ul>
          </section>

          <div className="mt-14">
            <GuideCtaCard />
          </div>

          <section id="related-questions" className="mt-14" aria-labelledby="related-title">
            <h2 id="related-title" className={h2Class}>Related questions</h2>
            <div className="mt-6">
              <Accordion items={relatedQuestions} defaultOpen={null} />
            </div>
          </section>

          <section id="sources" className="mt-14" aria-labelledby="sources-title">
            <h2 id="sources-title" className={h2Class}>Sources</h2>
            <ol className="mt-5 space-y-3">
              {guideSources.map((source, i) =>
              <li key={source.url} className="flex gap-3 text-[15px]">
                  <span className="font-heading font-semibold text-brand-muted">{i + 1}.</span>
                  <div>
                    <a
                    href={source.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-brand-purple underline-offset-4 hover:underline">
                    
                      {source.title}
                      <ExternalLinkIcon className="h-3.5 w-3.5" aria-hidden="true" />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                    <span className="text-brand-muted"> — {source.publisher}. Checked {source.checked}.</span>
                  </div>
                </li>
              )}
            </ol>
          </section>
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-28">
            <TableOfContents items={guideToc} />
          </div>
        </aside>
      </div>
    </article>);

}